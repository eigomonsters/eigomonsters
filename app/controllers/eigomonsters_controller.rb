class EigomonstersController < ApplicationController
  def eng_wordlist_index
    if params['lvelSelect'] == "Level1" then
      @wordListLevelSet = "Level1"
      @wordListAll = Wordlist.where("id >= 1").where("id <= 300").order("id")
    elsif params['lvelSelect'] == "Level2" then
      @wordListLevelSet = "Level2"
      @wordListAll = Wordlist.where("id >= 301").where("id <= 600").order("id")
    elsif params['lvelSelect'] == "Level3" then
      @wordListLevelSet = "Level3"
      @wordListAll = Wordlist.where("id >= 601").where("id <= 900").order("id")
    elsif params['lvelSelect'] == "Level4" then
      @wordListLevelSet = "Level4"
      @wordListAll = Wordlist.where("id >= 901").where("id <= 1200").order("id")
    elsif params['lvelSelect'] == "すべて表示" then
      @wordListLevelSet = "すべて表示"
      @wordListAll = Wordlist.all.order("id")
    else
      @wordListLevelSet = "Level1"
      @wordListAll = Wordlist.where("id >= 1").where("id <= 300").order("id")
    end
  end
  def search
    if params['lvelSelect'] == "Level1" then
      @wordListLevelSet = "Level1"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword]).where("id >= 1").where("id <= 300").order("id")
    elsif params['lvelSelect'] == "Level2" then
      @wordListLevelSet = "Level2"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword]).where("id >= 301").where("id <= 600").order("id")
    elsif params['lvelSelect'] == "Level3" then
      @wordListLevelSet = "Level3"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword]).where("id >= 601").where("id <= 900").order("id")
    elsif params['lvelSelect'] == "Level4" then
      @wordListLevelSet = "Level4"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword]).where("id >= 901").where("id <= 1200").order("id")
    elsif params['lvelSelect'] == "すべて表示" then
      @wordListLevelSet = "すべて表示"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword])
    else
      @wordListLevelSet = "Level1"
      @keyword = params[:keyword]
      @wordListAll = Wordlist.search(params[:keyword]).where("id >= 1").where("id <= 300").order("id")
    end
  end

  ## タイピングゲームコース選択画面。
  def typingplay_index
    if request.post? then
      # タイピング種別の判定
      if params['typingCourse'] == "英単語タイピング" then
        @typingCourseSet = "英単語タイピング"
      elsif params['typingCourse'] == "日本語訳タイピング" then
        @typingCourseSet = "日本語訳タイピング"
      else
        @typingCourseSet = "日本語訳タイピング"
      end
      # 英単語の難易度の判定
      if params['engWordsDifficulty'] == "Level1" then
        @engWordsDifficultySet = "Level1"
      elsif params['engWordsDifficulty'] == "Level2" then
        @engWordsDifficultySet = "Level2"
      elsif params['engWordsDifficulty'] == "Level3" then
        @engWordsDifficultySet = "Level3"
      elsif params['engWordsDifficulty'] == "Level4" then
        @engWordsDifficultySet = "Level4"
      elsif params['engWordsDifficulty'] == "カスタム" then
        @engWordsDifficultySet = "カスタム"
        @numberFrom = params['numberFrom']
        @numberTo = params['numberTo']
      else
        @engWordsDifficultySet = "Level1"
      end
      # プレイモードの判定
      if params['playMode'] == "練習" then
        @playModeSet = "練習"
      elsif params['playMode'] == "普通" then
        @playModeSet = "普通"
      elsif params['playMode'] == "タイムアタック" then
        @playModeSet = "タイムアタック"
      else
        @playModeSet = "練習"
      end
      # 詳細設定
        # 出題順の判定
        if params['questionOrderMode'] == "番号順" then
          @questionOrderModeSet = "番号順"
        elsif params['questionOrderMode'] == "ランダム" then
          @questionOrderModeSet = "ランダム"
        else
          @questionOrderModeSet = "ランダム"
        end
        # 英単語の発音有無の判定
        if params['pronounceMode'] == "発音あり" then
          @pronounceModeSet = "発音あり"
        elsif params['pronounceMode'] == "発音なし" then
          @pronounceModeSet = "発音なし"
        else
          @pronounceModeSet = "発音あり"
        end
        # BGMの有無の判定
        if params['bgmMode'] == "BGMあり" then
          @bgmModeSet = "BGMあり"
        elsif params['bgmMode'] == "BGMなし" then
          @bgmModeSet = "BGMなし"
        else
          @bgmModeSet = "BGMあり"
        end
        # タイプ音の有無の判定
        if params['typeAudioMode'] == "タイプ音あり" then
          @typeAudioModeSet = "タイプ音あり"
        elsif params['typeAudioMode'] == "タイプ音なし" then
          @typeAudioModeSet = "タイプ音なし"
        else
          @typeAudioModeSet = "タイプ音あり"
        end
        # 正解音の有無の判定
        if params['correctAudioMode'] == "正解音あり" then
          @correctAudioModeSet = "正解音あり"
        elsif params['correctAudioMode'] == "正解音なし" then
          @correctAudioModeSet = "正解音なし"
        else
          @correctAudioModeSet = "正解音あり"
        end
        # ミス音の有無の判定
        if params['incorrectAudioMode'] == "ミス音あり" then
          @incorrectAudioModeSet = "ミス音あり"
        elsif params['incorrectAudioMode'] == "ミス音なし" then
          @incorrectAudioModeSet = "ミス音なし"
        else
          @incorrectAudioModeSet = "ミス音あり"
        end
    # URLから遷移した場合のデフォルト設定
    else
        @typingCourseSet = "日本語訳タイピング"
        @engWordsDifficultySet = "Level1"
        @playModeSet = "練習"
    end
  end




  ## タイピングゲームスタート前画面にコース設定画面で設定した変数を渡す。
  def typingplay_setting
    if request.post? then
      # タイピング種別の判定
      if params['typingCourse'] == "英単語タイピング" then
        @typingCourseSet = "英単語タイピング"
      elsif params['typingCourse'] == "日本語訳タイピング" then
        @typingCourseSet = "日本語訳タイピング"
      else
        @typingCourseSet = "日本語訳タイピング"
      end
      # 英単語の難易度の判定
      if params['engWordsDifficulty'] == "Level1" then
        @engWordsDifficultySet = "Level1"
        @numberFrom = 1
        @numberTo = 300
      elsif params['engWordsDifficulty'] == "Level2" then
        @engWordsDifficultySet = "Level2"
        @numberFrom = 301
        @numberTo = 600
      elsif params['engWordsDifficulty'] == "Level3" then
        @engWordsDifficultySet = "Level3"
        @numberFrom = 601
        @numberTo = 900
      elsif params['engWordsDifficulty'] == "Level4" then
        @engWordsDifficultySet = "Level4"
        @numberFrom = 901
        @numberTo = 1200
      elsif params['engWordsDifficulty'] == "カスタム" then
        @engWordsDifficultySet = "カスタム"
        if params['numberFrom'] != "" && params['numberFrom'] != nil && params['numberFrom'] != 0 && params['numberTo'] != "" && params['numberTo'] != nil && params['numberTo'] != 0 then
          @numberFrom = params['numberFrom']
          @numberTo = params['numberTo']
        ## 初期値
        else
          @numberFrom = 1
          @numberTo = 300
        end
      else
        @engWordsDifficultySet = "Level1"
      end
      # プレイモードの判定
      if params['playMode'] == "練習" then
        @playModeSet = "練習"
      elsif params['playMode'] == "普通" then
        @playModeSet = "普通"
      elsif params['playMode'] == "タイムアタック" then
        @playModeSet = "タイムアタック"
      else
        @playModeSet = "練習"
      end
      # 詳細設定
        # 出題順の判定
        if params['questionOrderMode'] == "番号順" then
          @questionOrderModeSet = "番号順"
        elsif params['questionOrderMode'] == "ランダム" then
          @questionOrderModeSet = "ランダム"
        else
          @questionOrderModeSet = "ランダム"
        end
        # 英単語の発音有無の判定
        if params['pronounceMode'] == "発音あり" then
          @pronounceModeSet = "発音あり"
        elsif params['pronounceMode'] == "発音なし" then
          @pronounceModeSet = "発音なし"
        else
          @pronounceModeSet = "発音あり"
        end
        # BGMの有無の判定
        if params['bgmMode'] == "BGMあり" then
          @bgmModeSet = "BGMあり"
        elsif params['bgmMode'] == "BGMなし" then
          @bgmModeSet = "BGMなし"
        else
          @bgmModeSet = "BGMあり"
        end
        # タイプ音の有無の判定
        if params['typeAudioMode'] == "タイプ音あり" then
          @typeAudioModeSet = "タイプ音あり"
        elsif params['typeAudioMode'] == "タイプ音なし" then
          @typeAudioModeSet = "タイプ音なし"
        else
          @typeAudioModeSet = "タイプ音あり"
        end
        # 正解音の有無の判定
        if params['correctAudioMode'] == "正解音あり" then
          @correctAudioModeSet = "正解音あり"
        elsif params['correctAudioMode'] == "正解音なし" then
          @correctAudioModeSet = "正解音なし"
        else
          @correctAudioModeSet = "正解音あり"
        end
        # ミス音の有無の判定
        if params['incorrectAudioMode'] == "ミス音あり" then
          @incorrectAudioModeSet = "ミス音あり"
        elsif params['incorrectAudioMode'] == "ミス音なし" then
          @incorrectAudioModeSet = "ミス音なし"
        else
          @incorrectAudioModeSet = "ミス音あり"
        end
    # URLから遷移した場合、タイピングコース選択画面にアクセスする。
    else
      redirect_to action: :typingplay_index
    end
  end




  ## 英単語タイピングゲームのコントローラー
  def typingplay_play
    if request.post? then
      # タイピング種別の判定
        if params['typingCourse'] == "英単語タイピング" then
          @typingCourseSet = "英単語タイピング"
          @typingCourseJavascript = "typingplay_eng"
        elsif params['typingCourse'] == "日本語訳タイピング" then
          @typingCourseSet = "日本語訳タイピング"
          @typingCourseJavascript = "typingplay_jap"
        else
          @typingCourseSet = "日本語訳タイピング"
          @typingCourseJavascript = "typingplay_jap"
        end
      ## 英単語の絞り込み
        ## numberFromとnumberToが数値である場合
          if params['numberFrom'] != "" && params['numberFrom'] != nil && params['numberFrom'] != 0 && params['numberTo'] != "" && params['numberTo'] != nil && params['numberTo'] != 0 then
            if params['numberFrom'].to_i <= params['numberTo'].to_i then
                @wordListLevel = Wordlist.select(:id, :eng_word, :jap_trans_1, :jap_trans_1_yomi, :jap_trans_2, :jap_trans_2_yomi).where("id >= ?", params['numberFrom']).where("id <= ?", params['numberTo']).order("id")
                gon.wordListAll = @wordListLevel
                @numberFrom = params['numberFrom']
                @numberTo = params['numberTo']
            else
                @wordListLevel = Wordlist.select(:id, :eng_word, :jap_trans_1, :jap_trans_1_yomi, :jap_trans_2, :jap_trans_2_yomi).where("id >= ?", params['numberTo']).where("id <= ?", params['numberFrom']).order("id")
                gon.wordListAll = @wordListLevel
                @numberFrom = params['numberFrom']
                @numberTo = params['numberTo']
            end
        ## numberFromもしくはnumberToが数値でない場合(基本input type=numberで数値でない場合はエラーメッセージが表示される)
          else
            @wordListLevel = Wordlist.select(:id, :eng_word, :jap_trans_1, :jap_trans_1_yomi, :jap_trans_2, :jap_trans_2_yomi).where("id >= 1").where("id <= 300").order("id")
            gon.wordListAll = @wordListLevel
            @numberFrom = 1
            @numberTo = 300
          end
      ## 英単語の難易度レベル
          if params['engWordsDifficulty'] == "Level1" then
            @engWordsDifficultySet = "Level1"
          elsif params['engWordsDifficulty'] == "Level2" then
            @engWordsDifficultySet = "Level2"
          elsif params['engWordsDifficulty'] == "Level3" then
            @engWordsDifficultySet = "Level3"
          elsif params['engWordsDifficulty'] == "Level4" then
            @engWordsDifficultySet = "Level4"
          elsif params['engWordsDifficulty'] == "カスタム" then
            @engWordsDifficultySet = "カスタム"
          else
            @engWordsDifficultySet = "Level1"
          end
      ## プレイモードによるjavascriptに渡す変数設定
          if params['playMode'] == "練習" then
            gon.playMode = "練習"
            @playModeSet = "練習"
          elsif params['playMode'] == "普通" then
            gon.playMode = "普通"
            @playModeSet = "普通"
          elsif params['playMode'] == "タイムアタック" then
            gon.playMode = "タイムアタック"
            @playModeSet = "タイムアタック"
          else
            gon.playMode = "練習"
            @playModeSet = "練習"
          end
      ## 詳細設定
          # 出題順の判定
          if params['questionOrderMode'] == "番号順" then
            gon.questionOrderMode = "番号順"
            @questionOrderModeSet = "番号順"
          elsif params['questionOrderMode'] == "ランダム" then
            gon.questionOrderMode = "ランダム"
            @questionOrderModeSet = "ランダム"
          else
            gon.questionOrderMode = "ランダム"
            @questionOrderModeSet = "ランダム"
          end
          # 英単語の発音有無の判定
          if params['pronounceMode'] == "発音あり" then
            gon.pronounceMode = "発音あり"
            @pronounceModeSet = "発音あり"
          elsif params['pronounceMode'] == "発音なし" then
            gon.pronounceMode = "発音なし"
            @pronounceModeSet = "発音なし"
          else
            gon.pronounceMode = "発音あり"
            @pronounceModeSet = "発音あり"
          end
          # BGMの有無の判定
          if params['bgmMode'] == "BGMあり" then
            gon.bgmMode = "BGMあり"
            @bgmModeSet = "BGMあり"
          elsif params['bgmMode'] == "BGMなし" then
            gon.bgmMode = "BGMなし"
            @bgmModeSet = "BGMなし"
          else
            gon.bgmMode = "BGMあり"
            @bgmModeSet = "BGMあり"
          end
          # タイプ音の有無の判定
          if params['typeAudioMode'] == "タイプ音あり" then
            gon.typeAudioMode = "タイプ音あり"
            @typeAudioModeSet = "タイプ音あり"
          elsif params['typeAudioMode'] == "タイプ音なし" then
            gon.typeAudioMode = "タイプ音なし"
            @typeAudioModeSet = "タイプ音なし"
          else
            gon.typeAudioMode = "タイプ音あり"
            @typeAudioModeSet = "タイプ音あり"
          end
          # 正解音の有無の判定
          if params['correctAudioMode'] == "正解音あり" then
            gon.correctAudioMode = "正解音あり"
            @correctAudioModeSet = "正解音あり"
          elsif params['correctAudioMode'] == "正解音なし" then
            gon.correctAudioMode = "正解音なし"
            @correctAudioModeSet = "正解音なし"
          else
            gon.correctAudioMode = "正解音あり"
            @correctAudioModeSet = "正解音あり"
          end
          # ミス音の有無の判定
          if params['incorrectAudioMode'] == "ミス音あり" then
            gon.incorrectAudioMode = "ミス音あり"
            @incorrectAudioModeSet = "ミス音あり"
          elsif params['incorrectAudioMode'] == "ミス音なし" then
            gon.incorrectAudioMode = "ミス音なし"
            @incorrectAudioModeSet = "ミス音なし"
          else
            gon.incorrectAudioMode = "ミス音あり"
            @incorrectAudioModeSet = "ミス音あり"
          end
    # URLから遷移した場合、タイピングコース選択画面にアクセスする。
    else
      redirect_to action: :typingplay_index
    end
  end

end
