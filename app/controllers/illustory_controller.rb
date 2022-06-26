class IllustoryController < ApplicationController

  def index
    @wordList = Wordlist.select(:id, :part_of_speech_1, :eng_word, :jap_trans_1, :jap_trans_2, :jap_trans_3, :jap_trans_4).where("id >= 1").where("id <= 1200").order("id")
    gon.wordListAll = @wordList
    @storyList = Story.select(:id, :sentence_comp_1, :eng_word_used_1, :eng_word_origin_1, :sentence_comp_2, :eng_word_used_2, :eng_word_origin_2, :sentence_comp_3, :eng_word_used_3, :eng_word_origin_3, :sentence_comp_4, :eng_word_used_4, :eng_word_origin_4, :sentence_comp_5, :jap_sentence, :eng_sentence).where("id >= 1").where("id <= 75").order("id")
    gon.storyList = @storyList
  end

  def sec1EngtoJap
    if request.post? then
      @wordList = Wordlist.select(:id, :part_of_speech_1, :eng_word, :jap_trans_1, :jap_trans_2, :jap_trans_3, :jap_trans_4).where("id >= 1").where("id <= 1200").order("id")
      gon.wordListAll = @wordList
      @storyList = Story.select(:id, :sentence_comp_1, :eng_word_used_1, :eng_word_origin_1, :sentence_comp_2, :eng_word_used_2, :eng_word_origin_2, :sentence_comp_3, :eng_word_used_3, :eng_word_origin_3, :sentence_comp_4, :eng_word_used_4, :eng_word_origin_4, :sentence_comp_5, :jap_sentence, :eng_sentence).where("id >= 1").where("id <= 75").order("id")
      gon.storyList = @storyList
    else
      redirect_to action: :index
    end
  end

  def sec1JaptoEng
    if request.post? then
      @wordList = Wordlist.select(:id, :part_of_speech_1, :eng_word, :jap_trans_1, :jap_trans_2, :jap_trans_3, :jap_trans_4).where("id >= 1").where("id <= 1200").order("id")
      gon.wordListAll = @wordList
      @storyList = Story.select(:id, :sentence_comp_1, :eng_word_used_1, :eng_word_origin_1, :sentence_comp_2, :eng_word_used_2, :eng_word_origin_2, :sentence_comp_3, :eng_word_used_3, :eng_word_origin_3, :sentence_comp_4, :eng_word_used_4, :eng_word_origin_4, :sentence_comp_5, :jap_sentence, :eng_sentence).where("id >= 1").where("id <= 75").order("id")
      gon.storyList = @storyList
    else
      redirect_to action: :index
    end
  end
  
end
