// 遷移してきた際に処理を実施する。
window.addEventListener('load', function(){

  // イラストを配列に格納
  const illustoryImages = [
    "../../assets/illusts/illust1.png",
    "../../assets/illusts/illust2.png",
    "../../assets/illusts/illust3.png",
    "../../assets/illusts/illust4.png",
    "../../assets/illusts/illust5.png",
    "../../assets/illusts/illust6.png",
    "../../assets/illusts/illust7.png",
    "../../assets/illusts/illust8.png",
    "../../assets/illusts/illust9.png",
    "../../assets/illusts/illust10.png",
    "../../assets/illusts/illust11.png",
    "../../assets/illusts/illust12.png",
    "../../assets/illusts/illust13.png",
    "../../assets/illusts/illust14.png",
    "../../assets/illusts/illust15.png",
    "../../assets/illusts/illust16.png",
    "../../assets/illusts/illust17.png",
    "../../assets/illusts/illust18.png",
    "../../assets/illusts/illust19.png",
    "../../assets/illusts/illust20.png",
    "../../assets/illusts/illust21.png",
    "../../assets/illusts/illust22.png",
    "../../assets/illusts/illust23.png",
    "../../assets/illusts/illust24.png",
    "../../assets/illusts/illust25.png"
  ];

  // 使用する定数/変数を定義
  let i = 0;
  let startBtnOnFlag = 0;
  let illustBackBtn= document.getElementById('illustBackBtn');
  let illustNextBtn = document.getElementById("illustNextBtn");

  let picFullScreen = document.getElementById("picFullScreen");
  let illustImage1= document.getElementById('illustImage1');
  let illustImage2= document.getElementById('illustImage2');
  let illustImage3= document.getElementById('illustImage3');
  let illustImage4= document.getElementById('illustImage4');
  let illustImage5= document.getElementById('illustImage5');
  let illustImage6= document.getElementById('illustImage6');
  let illustImage7= document.getElementById('illustImage7');
  let illustImage8= document.getElementById('illustImage8');
  let illustImage9= document.getElementById('illustImage9');
  let illustImage10= document.getElementById('illustImage10');
  let illustImage11= document.getElementById('illustImage11');
  let illustImage12= document.getElementById('illustImage12');
  let illustImage13= document.getElementById('illustImage13');
  let illustImage14= document.getElementById('illustImage14');
  let illustImage15= document.getElementById('illustImage15');
  let illustImage16= document.getElementById('illustImage16');
  let illustImage17= document.getElementById('illustImage17');
  let illustImage18= document.getElementById('illustImage18');
  let illustImage19= document.getElementById('illustImage19');
  let illustImage20= document.getElementById('illustImage20');
  let illustImage21= document.getElementById('illustImage21');
  let illustImage22= document.getElementById('illustImage22');
  let illustImage23= document.getElementById('illustImage23');
  let illustImage24= document.getElementById('illustImage24');
  let illustImage25= document.getElementById('illustImage25');

  // backBtn/nextBtnの表示/非表示を切り替え
  backBtnTransChange();
  nextBtnTransChange();
  
  // backBtn押下時の処理を実行
  illustBackBtn.onclick = function() {illustBack();}
  // nextBtn押下時の処理を実行
  illustNextBtn.onclick = function() {illustNext();}

  // 画面下部のイラスト押下時の処理を実行
  illustImage1.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage2.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage3.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage4.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage5.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage6.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage7.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage8.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage9.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage10.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage11.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage12.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage13.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage14.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage15.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage16.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage17.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage18.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage19.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage20.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage21.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage22.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage23.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage24.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}
  illustImage25.onclick = function() {if(this.className = "illustImage") {illustDisplay(this.id)};}

  // backBtn押下時の処理を定義
  function illustBack() {
      // 現時点で選択済みの画像のclassを元に戻す
      selectedClassRemove(i);
      i = i - 1;
      selectedClassAddByIValue(i);
      illustChangeCommon(i);
  };
  // nextBtn押下時の処理を定義
  function illustNext() {
      // 現時点で選択済みの画像のclassを元に戻す
      selectedClassRemove(i);
      i = i + 1;
      selectedClassAddByIValue(i);
      illustChangeCommon(i);
  };
  // 画面下部のイラスト押下時の処理を定義
  function illustDisplay(id) {
    // 現時点で選択済みの画像のclassを元に戻す
    selectedClassRemove(i);
    // 次に表示する画像をfullscreen表示させ、iを更新、及びclassを変える。
    selectedClassAddById(id);
    illustChangeCommon(i);
  };

  // 画面切り替え時の共通処理を定義する。
  function illustChangeCommon(i) {
    audioStop();
    picFullScreen.src = illustoryImages[i];
    picFullScreenClassAdd(i);
    // backBtn/nextBtnの表示/非表示を切り替え
    backBtnTransChange ();
    nextBtnTransChange();
    illustoryHiddenCenter();
    illustoryHiddenAbove();
    afterBtnHidden();
    j = i * 3;
    k = 0;
    if(i < 5) {
      startBtnDisplay();
      illustoryAudioSet();
    } else {
      startBtnIllustory.className = "transparent";
      modeChangeBtnIllustory.className = "transparent";
      ondoku3CreditInIllustory.className = "transparent";
    }
    questionWord.className = "transparent";
    optionAnswer.className = "transparent";
    storyJapText.textContent = "";
    storyEngText.textContent = "";
    storyJapTextSecond.textContent = "";
    storyEngTextSecond.textContent = "";
    storyJapTextThird.textContent = "";
    storyEngTextThird.textContent = "";
    storyEngText.className = "transparent";
    storyJapText.className = "transparent";
    storyEngTextSecond.className = "transparent";
    storyJapTextSecond.className = "transparent";
    storyEngTextThird.className = "transparent";
    storyJapTextThird.className = "transparent";
    // 出題問題リストを非表示にさせる。
    allQuestionsListEntireScrIllust.className = "transparent";
    closeAllQuestionsList.className = "transparent";
    // 前回出題した英単語を allQuestionWords から削除し、初期値に戻す。
    allQuestionWords = [];
    allQuestionWordsList = [];
    while( allQuestionsListIllust.rows[ 0 ] ) allQuestionsListIllust.deleteRow( 0 );
    startBtnOnFlag = 0;
    reviewOnFlag = 0;
  }
  // 現時点で選択済みの画像のclassを変える処理を定義する
  function selectedClassAddById(id) {
    if (id == "illustImage1") {
      i = 0;
      illustImage1.className = "illustImageSelected";
  } else if (id == "illustImage2") {
      i = 1;
      illustImage2.className = "illustImageSelected";
  } else if (id == "illustImage3") {
      i = 2;
      illustImage3.className = "illustImageSelected";
  } else if (id == "illustImage4") {
      i = 3;
      illustImage4.className = "illustImageSelected";
  } else if (id == "illustImage5") {
      i = 4;
      illustImage5.className = "illustImageSelected";
  } else if (id == "illustImage6") {
      i = 5;
      illustImage6.className = "illustImageSelected";
  } else if (id == "illustImage7") {
      i = 6;
      illustImage7.className = "illustImageSelected";
  } else if (id == "illustImage8") {
      i = 7;
      illustImage8.className = "illustImageSelected";
  } else if (id == "illustImage9") {
      i = 8;
      illustImage9.className = "illustImageSelected";
  } else if (id == "illustImage10") {
      i = 9;
      illustImage10.className = "illustImageSelected";
  } else if (id == "illustImage11") {
      i = 10;
      illustImage11.className = "illustImageSelected";
  } else if (id == "illustImage12") {
      i = 11;
      illustImage12.className = "illustImageSelected";
  } else if (id == "illustImage13") {
      i = 12;
      illustImage13.className = "illustImageSelected";
  } else if (id == "illustImage14") {
      i = 13;
      illustImage14.className = "illustImageSelected";
  } else if (id == "illustImage15") {
      i = 14;
      illustImage15.className = "illustImageSelected";
  } else if (id == "illustImage16") {
      i = 15;
      illustImage16.className = "illustImageSelected";
  } else if (id == "illustImage17") {
      i = 16;
      illustImage17.className = "illustImageSelected";
  } else if (id == "illustImage18") {
      i = 17;
      illustImage18.className = "illustImageSelected";
  } else if (id == "illustImage19") {
      i = 18;
      illustImage19.className = "illustImageSelected";
  } else if (id == "illustImage20") {
      i = 19;
      illustImage20.className = "illustImageSelected";
  } else if (id == "illustImage21") {
      i = 20;
      illustImage21.className = "illustImageSelected";
  } else if (id == "illustImage22") {
      i = 21;
      illustImage22.className = "illustImageSelected";
  } else if (id == "illustImage23") {
      i = 22;
      illustImage23.className = "illustImageSelected";
  } else if (id == "illustImage24") {
      i = 23;
      illustImage24.className = "illustImageSelected";
  } else if (id == "illustImage25") {
      i = 24;
      illustImage25.className = "illustImageSelected";
  } else {
      i = 0;
      illustImage1.className = "illustImageSelected";
  }
  }
  // 現時点で選択済みの画像のclassを変える処理を定義する
  function selectedClassAddByIValue(i) {
    if (i == 0) {illustImage1.className = "illustImageSelected";}
    else if (i == 1) {illustImage2.className = "illustImageSelected";}
    else if (i == 2) {illustImage3.className = "illustImageSelected";}
    else if (i == 3) {illustImage4.className = "illustImageSelected";}
    else if (i == 4) {illustImage5.className = "illustImageSelected";}
    else if (i == 5) {illustImage6.className = "illustImageSelected";}
    else if (i == 6) {illustImage7.className = "illustImageSelected";}
    else if (i == 7) {illustImage8.className = "illustImageSelected";}
    else if (i == 8) {illustImage9.className = "illustImageSelected";}
    else if (i == 9) {illustImage10.className = "illustImageSelected";}
    else if (i == 10) {illustImage11.className = "illustImageSelected";}
    else if (i == 11) {illustImage12.className = "illustImageSelected";}
    else if (i == 12) {illustImage13.className = "illustImageSelected";}
    else if (i == 13) {illustImage14.className = "illustImageSelected";}
    else if (i == 14) {illustImage15.className = "illustImageSelected";}
    else if (i == 15) {illustImage16.className = "illustImageSelected";}
    else if (i == 16) {illustImage17.className = "illustImageSelected";}
    else if (i == 17) {illustImage18.className = "illustImageSelected";}
    else if (i == 18) {illustImage19.className = "illustImageSelected";}
    else if (i == 19) {illustImage20.className = "illustImageSelected";}
    else if (i == 20) {illustImage21.className = "illustImageSelected";}
    else if (i == 21) {illustImage22.className = "illustImageSelected";}
    else if (i == 22) {illustImage23.className = "illustImageSelected";}
    else if (i == 23) {illustImage24.className = "illustImageSelected";}
    else if (i == 24) {illustImage25.className = "illustImageSelected";}
    else {illustImage1.className = "illustImageSelected";}
  }
  // 現時点で選択済みの画像のclassを元に戻す処理を定義する
  function selectedClassRemove(i) {
    if (i == 0) {illustImage1.className = "illustImage";}
    else if (i == 1) {illustImage2.className = "illustImage";}
    else if (i == 2) {illustImage3.className = "illustImage";}
    else if (i == 3) {illustImage4.className = "illustImage";}
    else if (i == 4) {illustImage5.className = "illustImage";}
    else if (i == 5) {illustImage6.className = "illustImage";}
    else if (i == 6) {illustImage7.className = "illustImage";}
    else if (i == 7) {illustImage8.className = "illustImage";}
    else if (i == 8) {illustImage9.className = "illustImage";}
    else if (i == 9) {illustImage10.className = "illustImage";}
    else if (i == 10) {illustImage11.className = "illustImage";}
    else if (i == 11) {illustImage12.className = "illustImage";}
    else if (i == 12) {illustImage13.className = "illustImage";}
    else if (i == 13) {illustImage14.className = "illustImage";}
    else if (i == 14) {illustImage15.className = "illustImage";}
    else if (i == 15) {illustImage16.className = "illustImage";}
    else if (i == 16) {illustImage17.className = "illustImage";}
    else if (i == 17) {illustImage18.className = "illustImage";}
    else if (i == 18) {illustImage19.className = "illustImage";}
    else if (i == 19) {illustImage20.className = "illustImage";}
    else if (i == 20) {illustImage21.className = "illustImage";}
    else if (i == 21) {illustImage22.className = "illustImage";}
    else if (i == 22) {illustImage23.className = "illustImage";}
    else if (i == 23) {illustImage24.className = "illustImage";}
    else if (i == 24) {illustImage25.className = "illustImage";}
    else {illustImage1.className = "illustImage";}
  }
  // 選択した画像をフルスクリーン表示するclassを定義する
  function picFullScreenClassAdd(i) {
    if (i == 0) {picFullScreen.className = "fullScreen1";}
    else if (i == 1) {picFullScreen.className = "fullScreen2";}
    else if (i == 2) {picFullScreen.className = "fullScreen3";}
    else if (i == 3) {picFullScreen.className = "fullScreen4";}
    else if (i == 4) {picFullScreen.className = "fullScreen5";}
    else if (i == 5) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 6) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 7) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 8) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 9) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 10) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 11) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 12) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 13) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 14) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 15) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 16) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 17) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 18) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 19) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 20) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 21) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 22) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 23) {picFullScreen.className = "fullScreenComingSoon";}
    else if (i == 24) {picFullScreen.className = "fullScreenComingSoon";}
    else {picFullScreen.className = "fullScreen1";}
  }
  // backBtnの表示/非表示を切り替える処理を定義
  function backBtnTransChange () {
    if (i == 0) {
      illustBackBtn.className = "transparent";
    } else {
      illustBackBtn.className = "illustBackBtn";
    }
  }
  // nextBtnの表示/非表示を切り替える処理を定義
  function nextBtnTransChange () {
    if (i == illustoryImages.length - 1) {
      illustNextBtn.className = "transparent";
    } else {
      illustNextBtn.className = "illustNextBtn";
    }
  }


  // 以下、ストーリー表示に関わる処理を記載----------------------------------------
  // ------------------------------------------------------------------------
  
  // データベース(コントローラー)からwordListを取得
  const wordList = gon.wordListAll;
  // データベース(コントローラー)からstoryListを取得
  const storyList = gon.storyList;

  let startBtnIllustory = document.getElementById('startBtnIllustory');
  let modeChangeBtnIllustory = document.getElementById('modeChangeBtnIllustory');
  let ondoku3CreditInIllustory = document.getElementById('ondoku3CreditInIllustory');
  let reviewBtnIllustory = document.getElementById('reviewBtnIllustory');
  let afterBtnIllustory = document.getElementById('afterBtnIllustory');
  let backBtnIllustory = document.getElementById('backBtnIllustory');
  let againBtnIllustory = document.getElementById('againBtnIllustory');
  let nextBtnIllustory = document.getElementById('nextBtnIllustory');
  let storyScr= document.getElementById('storyScr');
  let storyAbove= document.getElementById('storyAbove');
  let storyEntire= document.getElementById('storyEntire');
  let storyJapText= document.getElementById('storyJapText');
  let storyEngText= document.getElementById('storyEngText');
  let storyJapTextSecond= document.getElementById('storyJapTextSecond');
  let storyEngTextSecond= document.getElementById('storyEngTextSecond');
  let storyJapTextThird= document.getElementById('storyJapTextThird');
  let storyEngTextThird= document.getElementById('storyEngTextThird');
  let j = i * 3; // j:例文の番号、表示イラスト1枚につき３文あり、iは0~24、jは0~75(jは別処理で加算していくため75まで)
  let k = 0; // k:例文１つにつき４つ問題あり、0,1,2,3を繰り返す。
  let questionWord= document.getElementById('questionWord');
  let questionWordCorrect = "";
  let questionWord1 = "";
  let questionWord2 = "";
  let questionWord3 = "";
  let questionWord4 = "";
  let answerWordCorrect = "";
  let answerWord1 = "";
  let answerWord2 = "";
  let answerWord3 = "";
  let answerWord4 = "";
  let partOfSpeechCorrect = "";
  let partOfSpeech1 = "";
  let partOfSpeech2 = "";
  let partOfSpeech3 = "";
  let partOfSpeech4 = "";
  let questionWordCorrectJapTrans2 = "";
  let questionWord1JapTrans2 = "";
  let questionWord2JapTrans2 = "";
  let questionWord3JapTrans2 = "";
  let questionWord4JapTrans2 = "";
  let questionWordCorrectJapTrans3 = "";
  let questionWord1JapTrans3 = "";
  let questionWord2JapTrans3 = "";
  let questionWord3JapTrans3 = "";
  let questionWord4JapTrans3 = "";
  let questionWordCorrectJapTrans4 = "";
  let questionWord1JapTrans4 = "";
  let questionWord2JapTrans4 = "";
  let questionWord3JapTrans4 = "";
  let questionWord4JapTrans4 = "";
  let optionAnswer= document.getElementById('optionAnswer');
  let optionAnswer1= document.getElementById('optionAnswer1');
  let optionAnswer2= document.getElementById('optionAnswer2');
  let optionAnswer3= document.getElementById('optionAnswer3');
  let optionAnswer4= document.getElementById('optionAnswer4');
  // 正解選択肢番号の変数：0~3
  let randomIntegerOptionCorrect = 0;
  // 正解時に表示する○を定義
  let circleImg = document.getElementById("circleImg");
  let crossImg = document.getElementById("crossImg");
  // 選択肢の選択済判定をするフラグを定義
  let optionSelectedFlag = 0;
  // iPhoneの場合のみ、上矢印押下済フラグを定義
  let upArrowOnFlag = 0;
  // iPhoneの場合のみ、上矢印押下済フラグを定義
  let reviewOnFlag = 0;

  // 出題した英単語を格納する配列を定義する。
  let allQuestionWords =[];
  // 出題したすべての英単語を格納する配列を定義する。
  let allQuestionWordsList =[];

  // 出題中の英単語の発音を定義する（初期値）
  let pronunciation1 = "";
  let pronunciation2 = "";
  let pronunciation3 = "";
  let pronunciation4 = "";
  let pronunciation5 = "";
  let pronunciation6 = "";
  let pronunciation7 = "";
  let pronunciation8 = "";
  let pronunciation9 = "";
  let pronunciation10 = "";
  let pronunciation11 = "";
  let pronunciation12 = "";
  // 発音対象の例文を判定する変数を定義
  let pronunciationJudge = 1;
  // 出題中の例文の発音を定義する。（初期値）
  let illustoryAudio1 = "";
  let illustoryAudio2 = "";
  let illustoryAudio3 = "";
  // 発音対象の例文を判定する変数を定義
  let illustoryJudgeAudio = 1;

  // 発音ON/OFFのアイコンを定義
  let pronounceImg = document.getElementById("pronounceImg");
  let pronounceOnOff = "Off";
  pronounceImg.className = "pronounceOff";

  pronounceImg.onclick = function() {
    if (pronounceOnOff == "On") {
      audioStop();
      pronounceOnOff = "Off";
      pronounceImg.className = "pronounceOff";
      pronounceImg.src = "../../assets/illusts/pronounceOff.png";
    } else {
      pronounceOnOff = "On";
      pronounceImg.className = "pronounceOn";
      pronounceImg.src = "../../assets/illusts/pronounceOn.png";
    }
  }

  startBtnIllustory.textContent = "Start";
  reviewBtnIllustory.textContent = "振り返る";
  backBtnIllustory.textContent = "前へ戻る";
  againBtnIllustory.textContent = "もう一度";
  nextBtnIllustory.textContent = "次へ進む";
  
  startBtnDisplay();
  illustoryAudioSet();

  // キーボードタイプ時の処理
  document.addEventListener(`keydown`, keyDownGoNext);

  // Startボタン押下時の処理
  startBtnIllustory.onclick = function() {
    startBtnIllustoryClick();
  }
  // 振り返る戻るボタン押下時の処理
  reviewBtnIllustory.onclick = function() {
    audioStop();
    reviewBtnIllustoryClick();
  }
  // 出題問題リスト表示を定義する。
  let allQuestionsListEntireScrIllust = document.getElementById("allQuestionsListEntireScrIllust");
  let allQuestionsListIllust = document.getElementById("allQuestionsListIllust");
  // 出題した出題問題リストポップアップを表示した後の「閉じる」ボタンを定義する。
  let closeAllQuestionsList = document.getElementById("closeAllQuestionsList");
  // iPhoneの場合のみ表示される上矢印ボタンを定義する。
  let upArrowBtn = document.getElementById("upArrowBtn");
  // 画面下部に表示するイラストを定義する。
  let illustorySection = document.getElementById("illustorySection");
  
  // 閉じるボタン押下時の処理
  closeAllQuestionsList.onclick = function() {
    audioStop();
    closeReview();
  }
  // 前の場面に戻るボタン押下時の処理
  backBtnIllustory.onclick = function() {
    illustBack();
  }
  // もう一度ボタン押下時の処理
  againBtnIllustory.onclick = function() {
    illustChangeCommon(i);
  }
  // 次の場面に進むボタン押下時の処理
  nextBtnIllustory.onclick = function() {
    illustNext();
  }

  // iPhoneの場合のみ、上矢印ボタン押下時の処理
  upArrowBtn.onclick = function() {
    audioStop();
    if (upArrowOnFlag == 0) {
      upArrowOnFlag = 1;
      upArrowBtn.src = "../../assets/illusts/downArrow.png";
      illustorySection.classList.add('illustorySectionDisplay');
      upArrowBtn.classList.add('upArrowBtnDisplay');
      if (startBtnOnFlag == 0) {
        startBtnIllustory.className = "transparent";
        modeChangeBtnIllustory.className = "transparent";
        ondoku3CreditInIllustory.className = "transparent";
      } else if (reviewOnFlag == 0){
        optionAnswer.className = "transparent";
      } else {
        afterBtnIllustory.className = "transparent";
      }
    } else {
        upArrowResizeScreen();
    }
  }

  // iPhoneの場合のみ、上矢印ボタン押下済みの状態で縦横を変更した際の処理を定義
  window.addEventListener('resize', resizeWindow);
  function resizeWindow(){
    upArrowResizeScreen();
  }

  function upArrowResizeScreen() {
    audioStop();
    if (upArrowOnFlag == 1) {
      upArrowOnFlag = 0;
      upArrowBtn.src = "../../assets/illusts/upArrow.png";
      illustorySection.classList.remove('illustorySectionDisplay');
      upArrowBtn.classList.remove('upArrowBtnDisplay');
      if (startBtnOnFlag == 0) {
        if(i < 5) {
          startBtnDisplay();
        } else {
          startBtnIllustory.className = "transparent";
          modeChangeBtnIllustory.className = "transparent";
          ondoku3CreditInIllustory.className = "transparent";
        }
      } else if (reviewOnFlag == 0){
        optionAnswer.className = "optionAnswer";
      } else {
        afterBtnDisplay();
      }
    }
  }

  // 選択肢押下時の処理
  optionAnswer1.onclick = function() {
    if(optionSelectedFlag == 0) {
      optionSelectedFlag = 1;
      if (randomIntegerOptionCorrect == 0){
        typeCorrectAudio();
        circleImg.className = "circleImg";
        optionAnswer1.classList.add('optionAnswerCorrect');
        correctOptionSelect();
      } else {
        crossImg.className = "crossImg";
        optionAnswer1.classList.add('optionAnswerIncorrect');
        incorrectOptionSelect();
      }
      // 出題した英単語をリストに追加する。
      allQuestionWordsList.push(allQuestionWords);
    }
  };
  optionAnswer2.onclick = function() {
    if(optionSelectedFlag == 0) {
      optionSelectedFlag = 1;
      if (randomIntegerOptionCorrect == 1){
        typeCorrectAudio();
        circleImg.className = "circleImg";
        optionAnswer2.classList.add('optionAnswerCorrect');
        correctOptionSelect();
      } else {
        crossImg.className = "crossImg";
        optionAnswer2.classList.add('optionAnswerIncorrect');
        incorrectOptionSelect();
      }
      // 出題した英単語をリストに追加する。
      allQuestionWordsList.push(allQuestionWords);
    }
  };
  optionAnswer3.onclick = function() {
    if(optionSelectedFlag == 0) {
      optionSelectedFlag = 1;
      if (randomIntegerOptionCorrect == 2){
        typeCorrectAudio();
        circleImg.className = "circleImg";
        optionAnswer3.classList.add('optionAnswerCorrect');
        correctOptionSelect();
      } else {
        crossImg.className = "crossImg";
        optionAnswer3.classList.add('optionAnswerIncorrect');
        incorrectOptionSelect();
      }
      // 出題した英単語をリストに追加する。
      allQuestionWordsList.push(allQuestionWords);
    }
  }
  optionAnswer4.onclick = function() {
    if(optionSelectedFlag == 0) {
      optionSelectedFlag = 1;
      if (randomIntegerOptionCorrect == 3){
        typeCorrectAudio();
        circleImg.className = "circleImg";
        optionAnswer4.classList.add('optionAnswerCorrect');
        correctOptionSelect();
      } else {
        crossImg.className = "crossImg";
        optionAnswer4.classList.add('optionAnswerIncorrect');
        incorrectOptionSelect();
      }
      // 出題した英単語をリストに追加する。
      allQuestionWordsList.push(allQuestionWords);
    }
  }

  storyEngText.onclick = function() {
    illustoryJudgeAudio = 1;
    illustoryAudioPlay();
  }
  storyEngTextSecond.onclick = function() {
    illustoryJudgeAudio = 2;
    illustoryAudioPlay();
  }
  storyEngTextThird.onclick = function() {
    illustoryJudgeAudio = 3;
    illustoryAudioPlay();
  }

  function keyDownGoNext(keyDown){
    if (keyDown.key === 'Enter') {
      if (startBtnOnFlag == 0) {
        startBtnIllustoryClick();
        aboveTextHighlight();
      }
    };
  };

  // Startボタンを表示させる処理
  function startBtnDisplay() {
    if (upArrowOnFlag == 0) {
      startBtnIllustory.className = "startBtnIllustory";
      modeChangeBtnIllustory.className = "modeChangeBtnIllustory";
      ondoku3CreditInIllustory.className = "ondoku3CreditInIllustory";
    } 
  }

  // 画面上部のストーリーを非表示にする処理
  function illustoryHiddenAbove() {
    storyAbove.className = "transparent";
  }

  // 画面中央のストーリーを非表示にする処理
  function illustoryHiddenCenter() {
    storyScr.className = "transparent";
    storyEntire.className = "transparent";
  }

  // Startボタン押下時の処理
  function startBtnIllustoryClick() {
    if (startBtnOnFlag == 0) {
      startBtnIllustory.className = "transparent";
      modeChangeBtnIllustory.className = "transparent";
      ondoku3CreditInIllustory.className = "transparent";
      illustoryTextDisplay();
      illustoryTextAboveDisplay();
      startBtnOnFlag = 1;
      aboveTextHighlight();
      questionWordDisplay();
    } else {
      illustNext();
    }
  }

  // 画面上部のストーリーを表示させる処理
  function illustoryTextAboveDisplay() {
    storyAbove.className = "storyAbove";
    storyAboveText1.textContent = storyList[j].jap_sentence;
    storyAboveText2.textContent = storyList[j+1].jap_sentence;
    storyAboveText3.textContent = storyList[j+2].jap_sentence;
  }

  // 画面上部のストーリーを強調させる処理
  function aboveTextHighlight() {
    if (j%3 == 0) {
      storyAboveText1.className = "aboveTextHighlight";
      storyAboveText2.className = "aboveTextNormal";
      storyAboveText3.className = "aboveTextNormal";
    } else if (j%3 == 1) {
      storyAboveText1.className = "aboveTextNormal";
      storyAboveText2.className = "aboveTextHighlight";
    } else {
      storyAboveText2.className = "aboveTextNormal";
      storyAboveText3.className = "aboveTextHighlight";
    }
  }

  // 画面中央のストーリー１つを表示させる処理
  function illustoryTextDisplay() {
    if (j%3 == 0) {
      storyScr.className = "storyScr";
      storyEntire.className = "storyEntire";
      storyEngText.className = "storyEngText";
    }
    storyJapText.textContent = storyList[j].jap_sentence;
    storyJapText.className = "storyJapText";
    let engWord1JapTrans = wordList.filter(engWordJapTrans => engWordJapTrans.eng_word == storyList[j].eng_word_origin_1);
    let engWord2JapTrans = wordList.filter(engWordJapTrans => engWordJapTrans.eng_word == storyList[j].eng_word_origin_2);
    let engWord3JapTrans = wordList.filter(engWordJapTrans => engWordJapTrans.eng_word == storyList[j].eng_word_origin_3);
    let engWord4JapTrans = wordList.filter(engWordJapTrans => engWordJapTrans.eng_word == storyList[j].eng_word_origin_4);
    // １つの例文で使用される問題となる４つの英単語の日本語訳１
    questionWord1 = engWord1JapTrans[0].jap_trans_1;
    questionWord2 = engWord2JapTrans[0].jap_trans_1;
    questionWord3 = engWord3JapTrans[0].jap_trans_1;
    questionWord4 = engWord4JapTrans[0].jap_trans_1;
    // １つの例文で使用される問題となる４つの英単語の英単語
    answerWord1 = engWord1JapTrans[0].eng_word;
    answerWord2 = engWord2JapTrans[0].eng_word;
    answerWord3 = engWord3JapTrans[0].eng_word;
    answerWord4 = engWord4JapTrans[0].eng_word;
    // １つの例文で使用される問題となる４つの英単語の品詞
    partOfSpeech1 = engWord1JapTrans[0].part_of_speech_1;
    partOfSpeech2 = engWord2JapTrans[0].part_of_speech_1;
    partOfSpeech3 = engWord3JapTrans[0].part_of_speech_1;
    partOfSpeech4 = engWord4JapTrans[0].part_of_speech_1;
    // １つの例文で使用される問題となる４つの英単語の日本語訳２〜４
    questionWord1JapTrans2 = engWord1JapTrans[0].jap_trans_2;
    questionWord2JapTrans2 = engWord2JapTrans[0].jap_trans_2;
    questionWord3JapTrans2 = engWord3JapTrans[0].jap_trans_2;
    questionWord4JapTrans2 = engWord4JapTrans[0].jap_trans_2;
    questionWord1JapTrans3 = engWord1JapTrans[0].jap_trans_3;
    questionWord2JapTrans3 = engWord2JapTrans[0].jap_trans_3;
    questionWord3JapTrans3 = engWord3JapTrans[0].jap_trans_3;
    questionWord4JapTrans3 = engWord4JapTrans[0].jap_trans_3;
    questionWord1JapTrans4 = engWord1JapTrans[0].jap_trans_4;
    questionWord2JapTrans4 = engWord2JapTrans[0].jap_trans_4;
    questionWord3JapTrans4 = engWord3JapTrans[0].jap_trans_4;
    questionWord4JapTrans4 = engWord4JapTrans[0].jap_trans_4;
    // 問題となる例文を作成
    storyEngText.innerHTML = `${storyList[j].sentence_comp_1}(${questionWord1})${storyList[j].sentence_comp_2}(${questionWord2})${storyList[j].sentence_comp_3}(${questionWord3})${storyList[j].sentence_comp_4}(${questionWord4})${storyList[j].sentence_comp_5}`;
  };

  // 画面中央に問題の単語を表示させる処理
  function questionWordDisplay() {
    if (k ==0) {
      questionWord.textContent = questionWord1;
      questionWordCorrect = questionWord1;
      answerWordCorrect = answerWord1;
      partOfSpeechCorrect = partOfSpeech1;
      questionWordCorrectJapTrans2 = questionWord1JapTrans2;
      questionWordCorrectJapTrans3 = questionWord1JapTrans3;
      questionWordCorrectJapTrans4 = questionWord1JapTrans4;
      questionWord.className = "questionWord";
      optionAnswer.className = "optionAnswer";
    } else if (k==1) {
      questionWord.textContent = questionWord2;
      questionWordCorrect = questionWord2;
      answerWordCorrect = answerWord2;
      partOfSpeechCorrect = partOfSpeech2;
      questionWordCorrectJapTrans2 = questionWord2JapTrans2;
      questionWordCorrectJapTrans3 = questionWord2JapTrans3;
      questionWordCorrectJapTrans4 = questionWord2JapTrans4;
    } else if (k==2) {
      questionWord.textContent = questionWord3;
      questionWordCorrect = questionWord3;
      answerWordCorrect = answerWord3;
      partOfSpeechCorrect = partOfSpeech3;
      questionWordCorrectJapTrans2 = questionWord3JapTrans2;
      questionWordCorrectJapTrans3 = questionWord3JapTrans3;
      questionWordCorrectJapTrans4 = questionWord3JapTrans4;
    } else {
      questionWord.textContent = questionWord4;
      questionWordCorrect = questionWord4;
      answerWordCorrect = answerWord4;
      partOfSpeechCorrect = partOfSpeech4;
      questionWordCorrectJapTrans2 = questionWord4JapTrans2;
      questionWordCorrectJapTrans3 = questionWord4JapTrans3;
      questionWordCorrectJapTrans4 = questionWord4JapTrans4;
    }
    optionCreate();
    questionWordFontSizeAdjust();
    optionAnswerFontSizeAdjust();
    allQuestionWords = [];
    allQuestionWords.push(j % 3 * 4 + k + 1, j * 4 + k + 1,"▷" ,answerWordCorrect, questionWord.textContent, "○");
  }

  // 選択肢を作成する処理を定義する
  function optionCreate() {
    // 正解選択肢と同じ品詞の単語のみに絞り込む
    let engWordOptionIncorrect = wordList.filter(engWordOptionIncorrect => engWordOptionIncorrect.part_of_speech_1 == partOfSpeechCorrect);
    // 0から正解選択肢と同じ品詞の数値の中から整数値をランダムで算出する。
    let randomIntegerOption1Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    let randomIntegerOption2Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    let randomIntegerOption3Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    // 正解選択肢の単語が不正解選択肢１の単語と同じ場合、不正解選択肢１の整数値を再取得する。
    // 不正解選択肢１の日本語訳が正解選択肢の日本語訳と同じ場合も不正解選択肢１の整数値を再取得する。
    while ((answerWordCorrect == engWordOptionIncorrect[randomIntegerOption1Incorrect].eng_word)
          || (((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption1Incorrect].jap_trans_4 != ""))) {
      randomIntegerOption1Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    }
    // 不正解選択肢２の整数値が不正解選択肢１の整数値と同じ場合、不正解選択肢２の整数値を再取得する。
    // 不正解選択肢２の日本語訳が正解選択肢の日本語訳と同じ場合も不正解選択肢２の整数値を再取得する。
    while ((randomIntegerOption1Incorrect == randomIntegerOption2Incorrect)
          || (((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption2Incorrect].jap_trans_4 != ""))) {
      randomIntegerOption2Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    }
    // 不正解選択肢３の整数値が不正解選択肢１の整数値と同じ場合、もしくは不正解選択肢２の整数値と同じ場合、不正解選択肢３の整数値を再取得する。
    // 不正解選択肢３の日本語訳が正解選択肢の日本語訳と同じ場合も不正解選択肢２の整数値を再取得する。
    while (((randomIntegerOption1Incorrect == randomIntegerOption3Incorrect) || (randomIntegerOption2Incorrect == randomIntegerOption3Incorrect))
          || (((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3 != "")
          || ((questionWordCorrect == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4) && questionWordCorrect != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans2 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4) && questionWordCorrectJapTrans2 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans3 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4) && questionWordCorrectJapTrans3 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_1 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_2 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_3 != "")
          || ((questionWordCorrectJapTrans4 == engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4) && questionWordCorrectJapTrans4 != "" && engWordOptionIncorrect[randomIntegerOption3Incorrect].jap_trans_4 != ""))){
      randomIntegerOption3Incorrect = Math.floor(Math.random() * engWordOptionIncorrect.length);
    }
    // 0〜3のから整数値をランダムで算出する。
    randomIntegerOptionCorrect = Math.floor(Math.random() * 4);
    // 正解選択肢を何番目に表示するかを決める。
    if (randomIntegerOptionCorrect == 0) {
      optionAnswer1.textContent = `1. ${answerWordCorrect}`;
      optionAnswer2.textContent = `2. ${engWordOptionIncorrect[randomIntegerOption1Incorrect].eng_word}`;
      optionAnswer3.textContent = `3. ${engWordOptionIncorrect[randomIntegerOption2Incorrect].eng_word}`;
      optionAnswer4.textContent = `4. ${engWordOptionIncorrect[randomIntegerOption3Incorrect].eng_word}`;
    } else if (randomIntegerOptionCorrect == 1) {
      optionAnswer1.textContent = `1. ${engWordOptionIncorrect[randomIntegerOption1Incorrect].eng_word}`;
      optionAnswer2.textContent = `2. ${answerWordCorrect}`;
      optionAnswer3.textContent = `3. ${engWordOptionIncorrect[randomIntegerOption2Incorrect].eng_word}`;
      optionAnswer4.textContent = `4. ${engWordOptionIncorrect[randomIntegerOption3Incorrect].eng_word}`;
    } else if (randomIntegerOptionCorrect == 2) {
      optionAnswer1.textContent = `1. ${engWordOptionIncorrect[randomIntegerOption1Incorrect].eng_word}`;
      optionAnswer2.textContent = `2. ${engWordOptionIncorrect[randomIntegerOption2Incorrect].eng_word}`;
      optionAnswer3.textContent = `3. ${answerWordCorrect}`;
      optionAnswer4.textContent = `4. ${engWordOptionIncorrect[randomIntegerOption3Incorrect].eng_word}`;
    } else {
      optionAnswer1.textContent = `1. ${engWordOptionIncorrect[randomIntegerOption1Incorrect].eng_word}`;
      optionAnswer2.textContent = `2. ${engWordOptionIncorrect[randomIntegerOption2Incorrect].eng_word}`;
      optionAnswer3.textContent = `3. ${engWordOptionIncorrect[randomIntegerOption3Incorrect].eng_word}`;
      optionAnswer4.textContent = `4. ${answerWordCorrect}`;
    }
  }

  // 正解選択肢押下時の処理を定義する
  function correctOptionSelect() {
    if (j < i * 3 + 3 && !(j == i * 3 + 2 && k == 3)) {
      if (k < 3) { // k==0~2の時
        if (k == 0) {
          // 問題となる例文を更新
          storyEngText.textContent = `${storyList[j].sentence_comp_1}${storyList[j].eng_word_used_1}${storyList[j].sentence_comp_2}(${questionWord2})${storyList[j].sentence_comp_3}(${questionWord3})${storyList[j].sentence_comp_4}(${questionWord4})${storyList[j].sentence_comp_5}`;
        } else if (k == 1) {
          // 問題となる例文を更新
          storyEngText.textContent = `${storyList[j].sentence_comp_1}${storyList[j].eng_word_used_1}${storyList[j].sentence_comp_2}${storyList[j].eng_word_used_2}${storyList[j].sentence_comp_3}(${questionWord3})${storyList[j].sentence_comp_4}(${questionWord4})${storyList[j].sentence_comp_5}`;
        } else { // k==2の時
          // 問題となる例文を更新
          storyEngText.textContent = `${storyList[j].sentence_comp_1}${storyList[j].eng_word_used_1}${storyList[j].sentence_comp_2}${storyList[j].eng_word_used_2}${storyList[j].sentence_comp_3}${storyList[j].eng_word_used_3}${storyList[j].sentence_comp_4}(${questionWord4})${storyList[j].sentence_comp_5}`;
        }
          k = k + 1;
          setTimeout(function(){
						questionWordDisplay();
            circleImgClear();
            optionSelectedFlag = 0;
					}, 400);
      } else { // k==3の時
          // 問題となる例文を更新
          storyEngText.textContent = `${storyList[j].sentence_comp_1}${storyList[j].eng_word_used_1}${storyList[j].sentence_comp_2}${storyList[j].eng_word_used_2}${storyList[j].sentence_comp_3}${storyList[j].eng_word_used_3}${storyList[j].sentence_comp_4}${storyList[j].eng_word_used_4}${storyList[j].sentence_comp_5}`;
          j = j + 1;
          k =0;
          setTimeout(function(){
            illustoryTextDisplay();
            aboveTextHighlight();
						questionWordDisplay();
            circleImgClear();
            optionSelectedFlag = 0;
					}, 400);
      }
    } else {
        storyEngText.textContent = `${storyList[j].sentence_comp_1}${storyList[j].eng_word_used_1}${storyList[j].sentence_comp_2}${storyList[j].eng_word_used_2}${storyList[j].sentence_comp_3}${storyList[j].eng_word_used_3}${storyList[j].sentence_comp_4}${storyList[j].eng_word_used_4}${storyList[j].sentence_comp_5}`;
        k =0;
        setTimeout(function(){
          circleImgClear();
          illustoryHiddenAbove();
          afterBtnDisplay();
          questionWord.className = "transparent";
          optionAnswer.className = "transparent";
          storyScr.className = "storyScrReview";
          storyJapText.textContent = storyList[j-2].jap_sentence;
          storyEngText.textContent = storyList[j-2].eng_sentence;
          storyJapTextSecond.textContent = storyList[j-1].jap_sentence;
          storyEngTextSecond.textContent = storyList[j-1].eng_sentence;
          storyJapTextThird.textContent = storyList[j].jap_sentence;
          storyEngTextThird.textContent = storyList[j].eng_sentence;
          storyEngText.className = "storyEngTextReview";
          storyJapText.className = "storyJapTextReview";
          storyEngTextSecond.className = "storyEngTextReview";
          storyJapTextSecond.className = "storyJapTextReview";
          storyEngTextThird.className = "storyEngTextReview";
          storyJapTextThird.className = "storyJapTextReview";
          optionSelectedFlag = 0;
          reviewOnFlag = 1;
          reviewListCreate();
        }, 400);
    }
  }

  // 不正解選択肢押下時の処理を定義する
  function incorrectOptionSelect() {
    if (randomIntegerOptionCorrect == 0){
      optionAnswer1.classList.add('optionAnswerCorrect');
      correctOptionSelect();
    } else if(randomIntegerOptionCorrect == 1) {
      optionAnswer2.classList.add('optionAnswerCorrect');
      correctOptionSelect();
    } else if(randomIntegerOptionCorrect == 2) {
      optionAnswer3.classList.add('optionAnswerCorrect');
      correctOptionSelect();
    } else {
      optionAnswer4.classList.add('optionAnswerCorrect');
      correctOptionSelect();
    }
    allQuestionWords.splice(allQuestionWords.length - 1, 1, "×");
    // タイプミス音を発生させる。
    typeMissAudio();
  }

  // 正解選択肢押下時に表示させる○を非表示にする処理、選択肢のクラスを元に戻す処理を定義する
  function circleImgClear() {
    circleImg.className = "transparent";
    crossImg.className = "transparent";
    optionAnswer1.classList.remove('optionAnswerCorrect');
    optionAnswer2.classList.remove('optionAnswerCorrect');
    optionAnswer3.classList.remove('optionAnswerCorrect');
    optionAnswer4.classList.remove('optionAnswerCorrect');
    optionAnswer1.classList.remove('optionAnswerIncorrect');
    optionAnswer2.classList.remove('optionAnswerIncorrect');
    optionAnswer3.classList.remove('optionAnswerIncorrect');
    optionAnswer4.classList.remove('optionAnswerIncorrect');
  }

  // 場面ごとの12単語完了後にボタンを表示させる。
  function afterBtnDisplay() {
    reviewBtnIllustory.className = "reviewBtnIllustory";
    afterBtnIllustory.className = "afterBtnIllustory";
    if (i > 0 && i < illustoryImages.length - 1) {
      backBtnIllustory.className = "backBtnIllustory";
      nextBtnIllustory.className = "nextBtnIllustory";
    } else if (i == 0){
      backBtnIllustory.className = "backBtnIllustoryOpacity";
      nextBtnIllustory.className = "nextBtnIllustory";
    } else {
      backBtnIllustory.className = "backBtnIllustory";
      nextBtnIllustory.className = "nextBtnIllustoryOpacity";
    }
    againBtnIllustory.className = "againBtnIllustory";
  }

  // 場面ごとの12単語完了後に表示させたボタンを非表示にする。
  function afterBtnHidden() {
    reviewBtnIllustory.className = "transparent";
    afterBtnIllustory.className = "transparent";
  }

  // フォント幅が枠を越える場合、フォントサイズを調整する。
  function questionWordFontSizeAdjust() {
    questionWord.className = "questionWord";
    if (questionWord.textContent.length > 7) {
      questionWord.classList.add('questionWordFontPattern1');
    } else if(questionWord.textContent.length > 5) {
      questionWord.classList.add('questionWordFontPattern2');
    }
  }

  // フォント幅が枠を越える場合、フォントサイズを調整する。
  function optionAnswerFontSizeAdjust() {
    optionAnswer1.className = "optionAnswerNormal";
    optionAnswer2.className = "optionAnswerNormal";
    optionAnswer3.className = "optionAnswerNormal";
    optionAnswer4.className = "optionAnswerNormal";
      if (optionAnswer1.textContent.length - 3 > 16) {
        optionAnswer1.classList.add('optionAnswerFontPattern1');
      } else if(optionAnswer1.textContent.length - 3 > 12) {
        optionAnswer1.classList.add('optionAnswerFontPattern2');
      }
      if (optionAnswer2.textContent.length - 3 > 16) {
        optionAnswer2.classList.add('optionAnswerFontPattern1');
      } else if(optionAnswer2.textContent.length - 3 > 12) {
        optionAnswer2.classList.add('optionAnswerFontPattern2');
      }
      if (optionAnswer3.textContent.length - 3 > 16) {
        optionAnswer3.classList.add('optionAnswerFontPattern1');
      } else if(optionAnswer3.textContent.length - 3 > 12) {
        optionAnswer3.classList.add('optionAnswerFontPattern2');
      }
      if (optionAnswer4.textContent.length - 3 > 16) {
        optionAnswer4.classList.add('optionAnswerFontPattern1');
      } else if(optionAnswer4.textContent.length - 3 > 12) {
        optionAnswer4.classList.add('optionAnswerFontPattern2');
      }
  }



  // 以下、振り返るボタン押下時の成績表を作成する処理を定義する。
  // -------------------------------------------------
  
  // 出題した問題を表にする。
  function reviewListCreate(){
      // 出題した問題の数だけ処理を実施する。
    allQuestionWordsList.forEach((allQuestionWords) => {
      const tr = document.createElement("tr");
      allQuestionsListIllust.appendChild(tr);
      // 問題ごとにobjArrayを変え、表に各項目を入れていく。
      const objArray = Object.entries(allQuestionWords);
      objArray.forEach((arr) => {
      const td = document.createElement("td");
      td.textContent = arr[1];
      if (arr[1] == "▷") { // ▷を押下した時
        td.onclick = function() {
          pronounce(objArray[0][1]); // その行の英単語を発音させる。
        };
      };
      tr.appendChild(td);
      });
    });
  };

  // 出題した問題を表にする。
  function reviewBtnIllustoryClick(){
    // 出題問題リストを表示させる。
    allQuestionsListEntireScrIllust.className = "allQuestionsListEntireScrIllust";
    closeAllQuestionsList.className = "closeAllQuestionsList";
    storyScr.className = "transparent";
    reviewBtnIllustory.className = "transparent";
    // iPhoneの場合のみ「もう一度」ボタン等を非表示にする
    afterBtnIllustory.classList.add('afterBtnIllustoryTransparent');
  };

  function closeReview() {
    // 出題問題リストを非表示にさせる。
    allQuestionsListEntireScrIllust.className = "transparent";
    closeAllQuestionsList.className = "transparent";
    storyScr.className = "storyScrReview";
    reviewBtnIllustory.className = "reviewBtnIllustory";
    // iPhoneの場合のみ「もう一度」ボタン等を表示する
    afterBtnIllustory.classList.remove('afterBtnIllustoryTransparent');
  }

  function illustoryAudioSet() {
    pronunciation1 = new Audio('/assets/発音/' + storyList[j].eng_word_origin_1 + '.mp3');
    pronunciation2 = new Audio('/assets/発音/' + storyList[j].eng_word_origin_2 + '.mp3');
    pronunciation3 = new Audio('/assets/発音/' + storyList[j].eng_word_origin_3 + '.mp3');
    pronunciation4 = new Audio('/assets/発音/' + storyList[j].eng_word_origin_4 + '.mp3');
    pronunciation5 = new Audio('/assets/発音/' + storyList[j+1].eng_word_origin_1 + '.mp3');
    pronunciation6 = new Audio('/assets/発音/' + storyList[j+1].eng_word_origin_2 + '.mp3');
    pronunciation7 = new Audio('/assets/発音/' + storyList[j+1].eng_word_origin_3 + '.mp3');
    pronunciation8 = new Audio('/assets/発音/' + storyList[j+1].eng_word_origin_4 + '.mp3');
    pronunciation9 = new Audio('/assets/発音/' + storyList[j+2].eng_word_origin_1 + '.mp3');
    pronunciation10 = new Audio('/assets/発音/' + storyList[j+2].eng_word_origin_2 + '.mp3');
    pronunciation11 = new Audio('/assets/発音/' + storyList[j+2].eng_word_origin_3 + '.mp3');
    pronunciation12 = new Audio('/assets/発音/' + storyList[j+2].eng_word_origin_4 + '.mp3');
    // résuméの場合は音声ファイルの検索ができないため、ファイルを変更
    if (storyList[j].eng_word_origin_1 == "résumé"){
      pronunciation1 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j].eng_word_origin_2 == "résumé") {
      pronunciation2 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j].eng_word_origin_3 == "résumé") {
      pronunciation3 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j].eng_word_origin_4 == "résumé") {
      pronunciation4 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+1].eng_word_origin_1 == "résumé") {
      pronunciation5 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+1].eng_word_origin_2 == "résumé") {
      pronunciation6 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+1].eng_word_origin_3 == "résumé") {
      pronunciation7 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+1].eng_word_origin_4 == "résumé") {
      pronunciation8 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+2].eng_word_origin_1 == "résumé") {
      pronunciation9 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+2].eng_word_origin_2 == "résumé") {
      pronunciation10 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+2].eng_word_origin_3 == "résumé") {
      pronunciation11 = new Audio('/assets/発音/rezumei.mp3');
    } else if (storyList[j+2].eng_word_origin_4 == "résumé") {
      pronunciation12 = new Audio('/assets/発音/rezumei.mp3');
    }

    // 出題中の例文の発音を定義する。
    illustoryAudio1 = new Audio('/assets/illustoryAudio/j'+ (j+1) + 'review.mp3');
    illustoryAudio2 = new Audio('/assets/illustoryAudio/j'+ (j+2) + 'review.mp3');
    illustoryAudio3 = new Audio('/assets/illustoryAudio/j'+ (j+3) + 'review.mp3');
  }

  // 英単語を発音させる処理を定義する。
  function pronounce(pronunciationJudge){
    if (pronounceOnOff == "On") {
      audioStop();
      if (pronunciationJudge == 1) {
        pronunciation1.play();
      } else if (pronunciationJudge == 2) {
        pronunciation2.play();
      } else if (pronunciationJudge == 3) {
        pronunciation3.play();
      } else if (pronunciationJudge == 4) {
        pronunciation4.play();
      } else if (pronunciationJudge == 5) {
        pronunciation5.play();
      } else if (pronunciationJudge == 6) {
        pronunciation6.play();
      } else if (pronunciationJudge == 7) {
        pronunciation7.play();
      } else if (pronunciationJudge == 8) {
        pronunciation8.play();
      } else if (pronunciationJudge == 9) {
        pronunciation9.play();
      } else if (pronunciationJudge == 10) {
        pronunciation10.play();
      } else if (pronunciationJudge == 11) {
        pronunciation11.play();
      } else if (pronunciationJudge == 12) {
        pronunciation12.play();
      }
      
    }
  };

  // 出題中の例文を発音させる処理を定義
  function illustoryAudioPlay() {
    if (pronounceOnOff == "On") {
      audioStop();
      if (reviewOnFlag == 1) {
        if (illustoryJudgeAudio == 1) {
          illustoryAudio1.play();
        } else if (illustoryJudgeAudio == 2) {
          illustoryAudio2.play();
        } else {
          illustoryAudio3.play();
        }
      }
    }
  }
  
  // 発音中の音全てを停止する処理を定義
  function audioStop() {
    pronunciation1.pause();
    pronunciation1.currentTime = 0;
    pronunciation2.pause();
    pronunciation2.currentTime = 0;
    pronunciation3.pause();
    pronunciation3.currentTime = 0;
    pronunciation4.pause();
    pronunciation4.currentTime = 0;
    pronunciation5.pause();
    pronunciation5.currentTime = 0;
    pronunciation6.pause();
    pronunciation6.currentTime = 0;
    pronunciation7.pause();
    pronunciation7.currentTime = 0;
    pronunciation8.pause();
    pronunciation8.currentTime = 0;
    pronunciation9.pause();
    pronunciation9.currentTime = 0;
    pronunciation10.pause();
    pronunciation10.currentTime = 0;
    pronunciation11.pause();
    pronunciation11.currentTime = 0;
    pronunciation12.pause();
    pronunciation12.currentTime = 0;
    illustoryAudio1.pause();
    illustoryAudio1.currentTime = 0;
    illustoryAudio2.pause();
    illustoryAudio2.currentTime = 0;
    illustoryAudio3.pause();
    illustoryAudio3.currentTime = 0;
  }

    // 正解音を定義する。
  let correctAudio = new Audio('/assets/correctAudio.mp3');
  function typeCorrectAudio(){
    if (pronounceOnOff == "On") {
      // 正解した場合、効果音を発生させる。
      correctAudio.volume = 0.2;
      correctAudio.play();
    }
  };

  // ミス音ありの場合のみ
  let incorrectAudio = new Audio('/assets/incorrectAudio.mp3');
  // ミス音を定義する。
  function typeMissAudio(){
    if (pronounceOnOff == "On") {
      // ミスの場合、効果音を発生させる。
      incorrectAudio.volume = 0.2;
      incorrectAudio.play();
      }
  };

  let loader= document.getElementById('loader');
  loader.className = "transparent";






  // 右上のメニューボタン押下による処理
  let menuOpenFlag = "0";

  let nav__centerIllust = document.getElementById("nav__centerIllust");
  let grayOutIllust = document.getElementById("grayOutIllust");
  let hamburgerIllust = document.getElementById("hamburgerIllust");

  hamburgerIllust.onclick = function() {
    audioStop();
    if (menuOpenFlag === "0") {
      nav__centerIllust.className = "nav__centerForMobileIllust"
      hamburgerIllust.classList.add('active');
      grayOutIllust.className = "grayOutIllust";
      menuOpenFlag = "1";
    } else {
      nav__centerIllust.className = "nav__centerIllust"
      hamburgerIllust.classList.remove('active');
      grayOutIllust.className = "transparent";
      menuOpenFlag = "0";
    }
  };
  grayOutIllust.onclick = function() {
      nav__centerIllust.className = "nav__centerIllust"
      hamburgerIllust.classList.remove('active');
      grayOutIllust.className = "transparent";
      menuOpenFlag = "0";
  };

});

