class EigomonstersController < ApplicationController
  
  def search
    @dispCardLargeCategorySet = params[:dispCardLargeCategory] || "すべて"
    @keyword = params[:keyword]
    @poketype = params[:poketype].present? ? params[:poketype].split(',') : []
  
    normalized_keyword = @keyword.tr('ぁ-ん', 'ァ-ン')
    reversed_keyword = @keyword.tr('ァ-ン', 'ぁ-ん')
  
    if @poketype.any? && @keyword.present?
      @searchedCardList = Pkpkcardinfo.where("cardname LIKE ? OR cardname LIKE ?", "%#{normalized_keyword}%", "%#{reversed_keyword}%")
                                          .where(poketype: @poketype)
                                          .order(cardid: :asc)
    elsif @keyword.present?
      @searchedCardList = Pkpkcardinfo.where("cardname LIKE ? OR cardname LIKE ?", "%#{normalized_keyword}%", "%#{reversed_keyword}%")
                                          .order(cardid: :asc)
    elsif @poketype.any?
      @searchedCardList = Pkpkcardinfo.where(poketype: @poketype)
                                          .order(cardid: :asc)
    else
      @searchedCardList = Pkpkcardinfo.all.order(cardid: :asc)
    end
  
    if @dispCardLargeCategorySet == "ポケモン"
      @searchedCardList = @searchedCardList.where(category: "ポケモン")
    elsif @dispCardLargeCategorySet == "トレーナーズ"
      @searchedCardList = @searchedCardList.where.not(category: "ポケモン")
    end
  
    respond_to do |format|
      format.html { render partial: 'searched_card_list', locals: { searchedCardList: @searchedCardList } }
    end
  end

  def index
    @poketype = []
    @keyword = ""
    @searchedCardList = Pkpkcardinfo.all.order(cardid: :asc) if @searchedCardList.nil?  # 結果がnilの場合
    @dispCardLargeCategorySet = "すべて"
  end

  def tanecheck
    clicked_images = params[:clicked_images] || []  # clickedImagesを取得
  
    # もしclicked_imagesが空でない場合、evolevelが「たね」のカードをフィルタリング
    if clicked_images.any?
      # デッキに「たねポケモン」が含まれているかチェック
      @adaptDeckList = Pkpkcardinfo.where(cardid: clicked_images).where(evolevel: "たね")
    else
      @adaptDeckList = []  # クリックされているカードがない場合は空配列
    end
  
    # チェック結果をJSONとして返す（エラーメッセージを返すため）
    respond_to do |format|
      format.json { render json: { errorCount: @adaptDeckList.empty? ? 1 : 0 } }
    end
  end

  def samecardcheck
    clicked_images = params[:clicked_images] || []  # clickedImagesを取得
  
    if clicked_images.any?
      # デッキに含まれるカード情報を取得
      selected_cards = Pkpkcardinfo.where(cardid: clicked_images)
  
      # 各cardnameの出現回数をカウント
      cardname_counts = selected_cards.group(:cardname).count
  
      # 同一cardnameが3枚以上存在する場合にエラー
      errorCount = cardname_counts.any? { |_, count| count >= 3 } ? 1 : 0
    else
      errorCount = 0  # クリックされたカードがない場合はエラーなしとする
    end
  
    # チェック結果をJSONとして返す
    respond_to do |format|
      format.json { render json: { errorCount: errorCount } }
    end
  end

  def createdeckcode
    clicked_images = params[:clicked_images] || []  # clickedImagesを取得
    if clicked_images.any?
      # デッキに含まれるカード情報を取得
      selected_cards = Pkpkcardinfo.where(cardid: clicked_images)
      # カードが20枚未満の場合はエラーを返す
      if clicked_images.size != 20
        respond_to do |format|
          format.json { render json: { error: 'デッキ枚数を20枚ちょうどにしてください。' }, status: :unprocessable_entity }
        end
        return
      end
      # "たね"のカードが1枚以上あるかを確認
      tane_cards = selected_cards.where(evolevel: "たね")
      if tane_cards.empty?
        respond_to do |format|
          format.json { render json: { error: 'たねポケモンを1枚以上入れてください。' }, status: :unprocessable_entity }
        end
        return
      end

      # 同一cardnameが3枚以上存在する場合はエラー
      cardname_counts = selected_cards.group(:cardname).count
      if cardname_counts.any? { |_, count| count >= 3 }
        respond_to do |format|
          format.json { render json: { error: '同じ名前のカードは2枚までにしてください。' }, status: :unprocessable_entity }
        end
        return
      end

      # カード内容が同じデッキを検索
      existing_deck = Pkpkdeckinfo.find_by(
        cardid1: clicked_images[0],
        cardid2: clicked_images[1],
        cardid3: clicked_images[2],
        cardid4: clicked_images[3],
        cardid5: clicked_images[4],
        cardid6: clicked_images[5],
        cardid7: clicked_images[6],
        cardid8: clicked_images[7],
        cardid9: clicked_images[8],
        cardid10: clicked_images[9],
        cardid11: clicked_images[10],
        cardid12: clicked_images[11],
        cardid13: clicked_images[12],
        cardid14: clicked_images[13],
        cardid15: clicked_images[14],
        cardid16: clicked_images[15],
        cardid17: clicked_images[16],
        cardid18: clicked_images[17],
        cardid19: clicked_images[18],
        cardid20: clicked_images[19]
      )

      if existing_deck
        # 一致するデッキが既に存在する場合、そのdeckidを返す
        respond_to do |format|
          format.json { render json: { success: 'デッキが作成されました', deckid: existing_deck.deckid }, status: :ok }
        end
        return
      end

      
      # deckidをランダムに生成（一意にするためSecureRandomを使用）
      deckid = SecureRandom.alphanumeric(16)

      # cardid1 ~ cardid20のマッピング
      deck_data = {
        deckid: deckid,
        cardid1: clicked_images[0],
        cardid2: clicked_images[1],
        cardid3: clicked_images[2],
        cardid4: clicked_images[3],
        cardid5: clicked_images[4],
        cardid6: clicked_images[5],
        cardid7: clicked_images[6],
        cardid8: clicked_images[7],
        cardid9: clicked_images[8],
        cardid10: clicked_images[9],
        cardid11: clicked_images[10],
        cardid12: clicked_images[11],
        cardid13: clicked_images[12],
        cardid14: clicked_images[13],
        cardid15: clicked_images[14],
        cardid16: clicked_images[15],
        cardid17: clicked_images[16],
        cardid18: clicked_images[17],
        cardid19: clicked_images[18],
        cardid20: clicked_images[19]
      }

      # Pkpkdeckinfoにデータを挿入
      Pkpkdeckinfo.create!(deck_data)

      # 成功した場合のレスポンス
      respond_to do |format|
        format.json { render json: { success: 'デッキが作成されました', deckid: deckid }, status: :ok }
      end
    end
  end

end
