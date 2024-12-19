class EigomonstersController < ApplicationController
  
  def search
    # binding.pry
    @dispCardLargeCategorySet = params[:dispCardLargeCategory].presence || "すべて"
    @keyword = params[:keyword] || ""
    @poketype = params[:poketype].present? ? params[:poketype].split(',') : []
  
    normalized_keyword = @keyword.tr('ぁ-ん', 'ァ-ン')
    reversed_keyword = @keyword.tr('ァ-ン', 'ぁ-ん')

    pack_order = ["幻のいる島", "最強の遺伝子", "その他"];
    category_order = ["ポケモン", "グッズ", "サポート"];
    poketype_order = ["草", "炎", "水", "雷", "超", "闘", "悪", "鋼", "竜", "無"];

    # 1ページあたりに表示する画像枚数
    imageNumPerPage = 100
    page_number = params[:page].to_i || 1
    page_number = 1 if page_number < 1
    offset_value = (page_number - 1) * imageNumPerPage

    # カテゴリーで絞り込み
    if @dispCardLargeCategorySet == "ポケモン"
      @searchedCardList = Pkpkcardinfo.where(category: "ポケモン")
    elsif @dispCardLargeCategorySet == "トレーナーズ"
      @searchedCardList = Pkpkcardinfo.where.not(category: "ポケモン")
      @poketype = []
    else
      @searchedCardList = Pkpkcardinfo.all
    end
  
    # タイプと検索ワードで絞り込み
    if @poketype.any? && @keyword.present?
      @searchedCardList = @searchedCardList.where("cardname LIKE ? OR cardname LIKE ?", "%#{normalized_keyword}%", "%#{reversed_keyword}%")
                                          .where(poketype: @poketype)
    elsif @keyword.present?
      @searchedCardList = @searchedCardList.where("cardname LIKE ? OR cardname LIKE ?", "%#{normalized_keyword}%", "%#{reversed_keyword}%")
    elsif @poketype.any?
      @searchedCardList = @searchedCardList.where(poketype: @poketype)
    else
      @searchedCardList = @searchedCardList.all
    end

    # 絞り込み前の全件数を取得
    @searchedCardListTotalCount = @searchedCardList.count

    # データを取得 (limit と offset を使用)
    images = @searchedCardList
      .all
      .order(
        Arel.sql(
          "CASE pack " +
          pack_order.map.with_index { |cat, idx| "WHEN '#{cat}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE category " +
          category_order.map.with_index { |cat, idx| "WHEN '#{cat}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE poketype " +
          poketype_order.map.with_index { |type, idx| "WHEN '#{type}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "cardid ASC"
        )
      )
      .limit(imageNumPerPage)
      .offset(offset_value)

      render json: { 
        images: images.map { |img| { id: img.cardid, url: "https://itachihai-card-images.s3.ap-northeast-1.amazonaws.com/cardimages/#{img.cardid}.png" } },
        total_count: @searchedCardListTotalCount
      }
  end

  def searchdeck
    @deckKeyword = params[:deckKeyword]
    clicked_images = []

    if @deckKeyword.present?
      deck_cards = Pkpkdeckinfo.where(deckid: @deckKeyword)
      if deck_cards.any?
        # 各カードのcardid1~cardid20を抽出
        deck_cards.each do |deck|
          (1..20).each do |i|
            card_id = deck.send("cardid#{i}")
            # 値が存在すれば配列に追加
            clicked_images << card_id if card_id.present?
          end
        end
      end
    end
    # チェック結果をJSONとして返す（エラーメッセージを返すため）
    respond_to do |format|
      format.json { render json: { success: 'デッキが見つかりました', clicked_images: clicked_images }, status: :ok }
    end
  end

  def index
    @poketype = []
    @keyword = ""
    # @searchedCardList = Pkpkcardinfo.all.order(cardid: :asc) if @searchedCardList.nil?  # 結果がnilの場合
    pack_order = ["幻のいる島", "最強の遺伝子", "その他"];
    category_order = ["ポケモン", "グッズ", "サポート"];
    poketype_order = ["草", "炎", "水", "雷", "超", "闘", "悪", "鋼", "竜", "無"];
    # ページ番号に応じて表示する範囲を決定
    # 1ページあたりに表示する画像枚数
    imageNumPerPage = 100
    page_number = params[:page].to_i
    page_number = 1 if page_number < 1
    offset_value = (page_number - 1) * imageNumPerPage  # 100件ずつ表示

    # 絞り込み前の全件数を取得
    @searchedCardListTotalCount = Pkpkcardinfo.count
    

    @searchedCardList = Pkpkcardinfo
      .all
      .order(
        Arel.sql(
          "CASE pack " +
          pack_order.map.with_index { |cat, idx| "WHEN '#{cat}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE category " +
          category_order.map.with_index { |cat, idx| "WHEN '#{cat}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE poketype " +
          poketype_order.map.with_index { |type, idx| "WHEN '#{type}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "cardid ASC"
        )
      )
      .limit(imageNumPerPage) # 一度に取得するのは100件に制限
      .offset(offset_value) # ページ番号に応じて表示範囲を決定
    @dispCardLargeCategorySet = "すべて"
  end

  def decklistsort
    # ソート順
    pack_order = ["幻のいる島", "最強の遺伝子", "その他"];
    category_order = ["ポケモン", "グッズ", "サポート"];
    poketype_order = ["草", "炎", "水", "雷", "超", "闘", "悪", "鋼", "竜", "無"];
    @clicked_images = params[:clicked_images] || []  # clickedImagesを取得
    # SQLのFIELD関数を利用してカスタム順序でソート
    if @clicked_images.any?
      @pkpkcardinfos = Pkpkcardinfo
      .where(cardid: @clicked_images)
      .select(:cardid, :category, :poketype)
      .order(
        Arel.sql(
          "CASE category " +
          category_order.map.with_index { |cat, idx| "WHEN '#{cat}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE poketype " +
          poketype_order.map.with_index { |type, idx| "WHEN '#{type}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "CASE pack " +
          pack_order.map.with_index { |type, idx| "WHEN '#{type}' THEN #{idx}" }.join(" ") +
          " END ASC, " +
          "cardid ASC"
        )
      )
      # ソートされたカード情報を元に重複を保持した@clicked_imagesを作成
      sorted_cardids = @pkpkcardinfos.map(&:cardid)
      # クリックされた順番に並べ直す
      @clicked_images = @clicked_images.sort_by { |cardid| sorted_cardids.index(cardid) }
    end
  
    # 成功した場合のレスポンス
    respond_to do |format|
      format.json { render json: { success: 'ソート成功', clicked_images: @clicked_images }, status: :ok }
    end
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

      # `clicked_images` 内のcardidと対応するcardnameを取得
      cardid_to_cardname = selected_cards.pluck(:cardid, :cardname).to_h

      # `clicked_images` に基づいてcardnameの出現回数をカウント
      cardname_counts = clicked_images.map { |cardid| cardid_to_cardname[cardid] }.tally

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
