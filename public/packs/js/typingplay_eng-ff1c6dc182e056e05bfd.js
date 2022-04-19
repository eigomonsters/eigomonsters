/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/typingplay_eng.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/typingplay_eng.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/typingplay_eng.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function () {
  // Enterを押下するとゲーム開始のカウントダウンがスタートする処理を呼び出す。
  document.addEventListener("keydown", keyDownGameStart);
}); // スペースかEnterキー押下によるゲームスタートを一回限りとするフラグを設定する。

var gameStartEnterOnlyOnce = "0"; // スペースかEnterキーを押下するとゲーム開始のカウントダウンがスタートする。

function keyDownGameStart(keyDownEnter) {
  if ((keyDownEnter.key === 'Enter' || keyDownEnter.key === " ") && gameStartEnterOnlyOnce == "0") {
    // 表示されている文字を非表示にする。
    document.getElementById("useKeyboardPopup").className = "transparent";
    document.getElementById("pressEnterPopup").className = "transparent";
    document.getElementById("annotationAudio").className = "transparent";
    document.getElementById("backBtnTypingPlay").className = "transparent";
    gameStartEnterOnlyOnce = "1";
    gameStart();
  }

  ;
}

; // 選択した英単語難易度によって変わるwordListの定義

var wordList = gon.wordListAll; // 選択したプレイモードによって変わるplayModeの定義

var playMode = gon.playMode; // 出題順の設定によって変わるpronounceModeの定義

var questionOrderMode = gon.questionOrderMode; // 英単語の発音有無の設定によって変わるpronounceModeの定義

var pronounceMode = gon.pronounceMode; // BGMの設定によって変わるbgmModeの定義

var bgmMode = gon.bgmMode; // タイプ音の設定によって変わるtypeAudioModeの定義

var typeAudioMode = gon.typeAudioMode; // 正解音の設定によって変わるcorrectAudioModeの定義

var correctAudioMode = gon.correctAudioMode; // ミス音の設定によって変わるincorrectAudioModeの定義

var incorrectAudioMode = gon.incorrectAudioMode; // 英単語を順番に出題する場合の番号の初期値を定義する。

var sortById = 0; // 英単語の出題順の初期値を定義する。

var eachQuestionOrder = 0;

function gameStart() {
  // 表示する単語リストを定義する。
  // chromeの場合"ff"が正常に動作しない。
  // 表示するメーターリストを定義する。
  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10_yellow.png', '/assets/メーターPNG/メーター20_yellow.png', '/assets/メーターPNG/メーター30_yellow.png', '/assets/メーターPNG/メーター40_yellow.png', '/assets/メーターPNG/メーター50_yellow.png', '/assets/メーターPNG/メーター60_yellow.png', '/assets/メーターPNG/メーター70_yellow.png', '/assets/メーターPNG/メーター80_yellow.png', '/assets/メーターPNG/メーター90_yellow.png', '/assets/メーターPNG/メーター100_yellow.png', '/assets/メーターPNG/メーター10_green.png', '/assets/メーターPNG/メーター20_green.png', '/assets/メーターPNG/メーター30_green.png', '/assets/メーターPNG/メーター40_green.png', '/assets/メーターPNG/メーター50_green.png', '/assets/メーターPNG/メーター60_green.png', '/assets/メーターPNG/メーター70_green.png', '/assets/メーターPNG/メーター80_green.png', '/assets/メーターPNG/メーター90_green.png', '/assets/メーターPNG/メーター100_green.png', '/assets/メーターPNG/メーター10_blue.png', '/assets/メーターPNG/メーター20_blue.png', '/assets/メーターPNG/メーター30_blue.png', '/assets/メーターPNG/メーター40_blue.png', '/assets/メーターPNG/メーター50_blue.png', '/assets/メーターPNG/メーター60_blue.png', '/assets/メーターPNG/メーター70_blue.png', '/assets/メーターPNG/メーター80_blue.png', '/assets/メーターPNG/メーター90_blue.png', '/assets/メーターPNG/メーター100_blue.png', '/assets/メーターPNG/メーター10_pink.png', '/assets/メーターPNG/メーター20_pink.png', '/assets/メーターPNG/メーター30_pink.png', '/assets/メーターPNG/メーター40_pink.png', '/assets/メーターPNG/メーター50_pink.png', '/assets/メーターPNG/メーター60_pink.png', '/assets/メーターPNG/メーター70_pink.png', '/assets/メーターPNG/メーター80_pink.png', '/assets/メーターPNG/メーター90_pink.png', '/assets/メーターPNG/メーター100_pink.png', '/assets/メーターPNG/メーター10_red.png', '/assets/メーターPNG/メーター20_red.png', '/assets/メーターPNG/メーター30_red.png', '/assets/メーターPNG/メーター40_red.png', '/assets/メーターPNG/メーター50_red.png', '/assets/メーターPNG/メーター60_red.png', '/assets/メーターPNG/メーター70_red.png', '/assets/メーターPNG/メーター80_red.png', '/assets/メーターPNG/メーター90_red.png', '/assets/メーターPNG/メーター100_red.png']; // 表示するメーター初期値を定義する。

  var bonusCountMeter = 0; // 表示するメーター最大値を定義する。

  var bonusCountMeterMax = 50; // 表示するプレイ延長時間を定義する。

  var displayBonusAddPlayTime = document.getElementById("displayBonusAddPlayTime");
  displayBonusAddPlayTime.className = "displayBonusAddPlayTime"; // メーター最大値に達した際の延長するプレイ時間を定義する。

  var bonusAddPlayTime = 3000; // メーターの初期値を表示する。

  document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // ゲーム開始までをカウントダウン変数を定義する。

  var countDownPopup = document.getElementById("countDownPopup"); // class属性を付与する。

  countDownPopup.className = "countDownPopup"; // ゲーム開始までをカウントダウン変数の初期値を定義する。

  var countDownPopupNumber = 3; // ゲーム開始までをカウントダウン変数の初期値を表示する。

  countDownPopup.textContent = countDownPopupNumber; // ゲーム開始までをカウントダウンを1秒ごとに実施するように定義する。

  var timerIdToStart = setInterval(countDownTimeToStart, 1000); // ゲーム開始までをカウントダウンを実施する処理を定義する。

  function countDownTimeToStart() {
    // カウントダウン文字を１ずつ減らす。
    countDownPopupNumber = countDownPopupNumber - 1; //カウントダウンが0になれば、ゲームを開始する。

    if (countDownPopupNumber <= 0) {
      clearInterval(timerIdToStart); // カウントダウンポップアップのクラスを変更し、非表示にする。

      countDownPopup.className = "countDownPopupAfterClose";
      typingPlayStart();
    } else {
      countDownPopup.textContent = countDownPopupNumber;
    }
  } // ゲームを開始する処理を定義する。


  function typingPlayStart() {
    // 表示する単語を定義する。
    var displayWord = document.getElementById("displayWord");
    displayWord.className = "displayWord";
    var displayWordJapanese = document.getElementById("displayWordJapanese");
    displayWordJapanese.className = "displayWordJapanese";
    var displayWordAnnotation = document.getElementById("displayWordAnnotation");
    displayWordAnnotation.className = "transparent"; // 表示する単語を一文字ずつに分ける変数を定義する。

    var charArrayInDisplayWord = []; // 出題した英単語を格納する配列を定義する。

    var allQuestionWords = []; // 出題したすべての英単語を格納する配列を定義する。

    var allQuestionWordsList = []; // ゲーム終了を判定するフラグを定義する。

    var playEndFlag = "0"; // 「答えを見る」ボタン押下有無を判定するフラグを定義する。

    var answerOpenFlag = "0"; // プレイモード：タイムアタックですべての出題範囲に解答済み判定フラグを設定する。

    var gameCompleteTimeAttackFlag = "0"; // 問題を作成した時間を定義する。

    var eachQuestionCreateTime = 0; // 問題を解答するのに要した時間を定義する。

    var eachQuestionAnswerTime = 0; // 表示する単語を作成する。

    createDisplayWord(); // プレイ開始時間を取得する。

    var startTime = Date.now(); // 表示する残りのプレイ可能時間を定義する。

    var remainPlayingTime = document.getElementById("remainPlayingTime");
    remainPlayingTime.className = "remainPlayingTime"; // 表示するスタート時のプレイ可能時間を定義する。
    // プレイモード：タイムアタックの場合は5分とする。

    var initialPlayingTimeMSec = 5000; // プレイモード：タイムアタックの場合は30分とする。

    if (playMode == "タイムアタック") {
      initialPlayingTimeMSec = 1800000;
    }

    ; // プレイモード：タイムアタックの場合、ゲームクリア後に合計プレイ時間表示する。

    var totalPlayingTimeMSec = 0; // スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。

    setTimeout(countDownTime, 0); // 1秒ごとにcountDownTimeを実施するように定義する。

    var timerId = setInterval(countDownTime, 1000); // 正解時に表示する丸を定義する。

    document.getElementById("circleImg").src = '/assets/正解○.png';
    circleImg.classList.add('transparent'); // "発音を聞く"ボタンを表示する。

    var pronounceAgainButton = document.getElementById("pronounceAgainButton");
    pronounceAgainButton.innerHTML = "発音を聞く";
    pronounceAgainButton.className = "pronounceAgainButton";

    pronounceAgainButton.onclick = function () {
      pronounce(displayWordInList.eng_word);
    }; // "ヒントを見る"ボタンを表示する。(プレイモード普通、タイムアタックの時のみ機能)


    var hintButton = document.getElementById("hintButton");
    hintButton.innerHTML = "ヒントを見る";

    if (playMode == "普通" || playMode == "タイムアタック") {
      hintButton.className = "hintButton";

      hintButton.onclick = function () {
        charArrayInDisplayWord[0].classList.remove('transparent');
      };
    } else {
      hintButton.className = "hintButtonPractice";
    }

    ; // "答えを見る"ボタンを表示する。(プレイモード普通、タイムアタックの時のみ機能)

    var answerButton = document.getElementById("answerButton");
    answerButton.innerHTML = "答えを見る";

    if (playMode == "普通" || playMode == "タイムアタック") {
      answerButton.className = "answerButton";

      answerButton.onclick = function () {
        for (var i = 0; i < charArrayInDisplayWord.length; i++) {
          charArrayInDisplayWord[i].classList.remove('transparent');
        } // 連続正解数を0に戻す。


        totalConsecutiveNumCorrectNum = 0;
        displayConsecutiveNumCorrectNum.textContent = totalConsecutiveNumCorrectNum; // メーターを初期値に戻す。

        bonusCountMeter = 0;
        document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // 「答えを見る」判定フラグを更新する。

        answerOpenFlag = "1";
      };
    } else {
      // (プレイモード練習の時)
      answerButton.className = "answerButtonPractice";
    }

    ; // "最初からやり直す"ボタンを表示する。

    var restartButtonMidGame = document.getElementById("restartButtonMidGame");
    restartButtonMidGame.classList.remove('transparent'); // "コース選択画面に戻る"ボタンを表示する。

    var courseSettingBackButtonMidGame = document.getElementById("courseSettingBackButtonMidGame");
    courseSettingBackButtonMidGame.classList.remove('transparent'); // 以下、スコア定義---------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------
    // プレイモード：練習・普通の場合はスコアを表示させる。
    // プレイモード：タイムアタックはスコアを表示させない。

    if (playMode == "練習" || playMode == "普通") {
      // 表示するスコアを定義する。
      var _displayScoreEntire = document.getElementById("displayScoreEntire");

      _displayScoreEntire.className = "displayScoreEntire";

      var _displayScore = document.getElementById("displayScore");

      _displayScore.className = "displayScore";

      var _displayP = document.getElementById("displayP");

      _displayP.className = "displayP";
    }

    ; // プレモード：練習・普通の場合のみ使用する。----------------------------
    // ---------------------------------------------------------------
    // 合計スコアの初期値を定義する。

    var totalScore = 0; // スコアアップする基準を定義する。

    var refTextLengthForCountUpLevel1 = 4;
    var addScoreLevel1 = 50;
    var addScoreLevel2 = 50; // ---------------------------------------------------------------
    // ---------------------------------------------------------------
    // 表示する正解数全体のクラス

    var NumCorrectMidGamePlay = document.getElementById("NumCorrectMidGamePlay");
    NumCorrectMidGamePlay.className = "NumCorrectMidGamePlay"; // 表示する正解数を定義する。

    var displayNumCorrectWord = document.getElementById("displayNumCorrectWord");
    displayNumCorrectWord.className = "displayNumCorrectWord";
    displayNumCorrectWord.textContent = "合計正解数";
    var displayNumCorrectNum = document.getElementById("displayNumCorrectNum");
    displayNumCorrectNum.className = "displayNumCorrectNum";
    var totalNumCorrectNum = 0;
    displayNumCorrectNum.textContent = totalNumCorrectNum; // 表示する連続正解数を定義する。

    var displayConsecutiveNumCorrectWord = document.getElementById("displayConsecutiveNumCorrectWord");
    displayConsecutiveNumCorrectWord.className = "displayConsecutiveNumCorrectWord";
    displayConsecutiveNumCorrectWord.textContent = "連続正解数";
    var displayConsecutiveNumCorrectNum = document.getElementById("displayConsecutiveNumCorrectNum");
    displayConsecutiveNumCorrectNum.className = "displayConsecutiveNumCorrectNum";
    var totalConsecutiveNumCorrectNum = 0;
    displayConsecutiveNumCorrectNum.textContent = totalConsecutiveNumCorrectNum; // 表示する最高連続正解数を定義する。

    var displayMaxConsecutiveNumCorrectWord = document.getElementById("displayMaxConsecutiveNumCorrectWord");
    displayMaxConsecutiveNumCorrectWord.className = "displayMaxConsecutiveNumCorrectWord";
    displayMaxConsecutiveNumCorrectWord.textContent = "最高連続正解数";
    var displayMaxConsecutiveNumCorrectNum = document.getElementById("displayMaxConsecutiveNumCorrectNum");
    displayMaxConsecutiveNumCorrectNum.className = "displayMaxConsecutiveNumCorrectNum";
    var totalMaxConsecutiveNumCorrectNum = 0;
    displayMaxConsecutiveNumCorrectNum.textContent = totalMaxConsecutiveNumCorrectNum; // 以上、スコア定義---------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------
    // タイプされる度にkeyDownCharCountUpを実施するように定義する。

    document.addEventListener("keydown", keyDownCharCountUp); // 以下、表示する単語を作成する処理を定義する。-----------------------------------------------
    // ------------------------------------------------------------------------------------

    function createDisplayWord() {
      // すでにゲームが終了している場合、新規ワードを生成しない。ゲーム中のみ生成する。
      // ギリギリで問題に正解した場合、○を表示した後、500m秒後にワードを生成する処理が走るため。
      if (playEndFlag === "0") {
        // 表示単語を初期化する。
        displayWord.textContent = ""; // 問題を作成した時間を記録する。

        eachQuestionCreateTime = Date.now(); // 前回の問題に要した時間を初期値に戻す。

        eachQuestionAnswerTime = 0; // 出題順の設定により、displayWordInListを変更

        if (questionOrderMode == "番号順") {
          // 英単語を順番に出題する場合の番号の初期値を定義する。
          displayWordInList = wordList[sortById];
          sortById++; // sortByIdが出題英単語数を超えた場合、初期値に戻す。

          if (sortById >= wordList.length) {
            sortById = 0; // プレイモード：タイムアタックの場合、次の問題に正解した時点でゲーム終了とする。

            if (playMode == "タイムアタック") {
              // フラグを1に更新する。
              gameCompleteTimeAttackFlag = "1";
            }

            ;
          }

          ;
        } else {
          // 出題順がランダムの場合
          // 0〜textListsの総数間で整数値をランダムで算出する。
          var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); // let randomIntegerInTotalWordList = Math.floor(Math.random() * 3);
          // 表示する単語をランダムで選定する。

          displayWordInList = wordList[randomIntegerInTotalWordList]; // プレイモード：タイムアタックの場合は、wordListから表示単語を削除する。

          if (playMode == "タイムアタック") {
            // 同じ問題を２度出題しないように、一度出題した問題はwordListから削除する。
            wordList.splice(randomIntegerInTotalWordList, 1); // wordList.length == 0になった場合、次の問題に正解した時点でゲーム終了とする。

            if (wordList.length == 0) {
              // フラグを1に更新する。
              gameCompleteTimeAttackFlag = "1";
            }

            ;
          }

          ;
        }

        ; // 前回出題した英単語を allQuestionWords から削除し、初期値に戻す。

        allQuestionWords = []; // 問題の出題順を+1する。

        eachQuestionOrder = eachQuestionOrder + 1; // 出題した英単語displayWordInList を allQuestionWords に格納する。

        allQuestionWords.push(eachQuestionOrder, displayWordInList.id, "🔊", displayWordInList.eng_word, displayWordInList.jap_trans_1, "未解答", "-"); //表示する単語の発音させる。（発音ありの場合のみ）

        if (pronounceMode == "発音あり") {
          pronounce(displayWordInList.eng_word);
        }

        ; // 表示する単語の日本語訳を表示させる。

        displayWordJapanese.textContent = displayWordInList.jap_trans_1; // 日本語訳が同じ英単語が複数ある場合に備えて、重複するかを判定し、重複する場合は重複する英単語を表示し、それ以外を答えるように誘導する。
        // プレイモード練習では答えを表示しているため処理不要

        if (playMode == "普通" || playMode == "タイムアタック") {
          // 前の問題に注釈がある場合消す。
          displayWordAnnotation.className = "transparent"; // ランダムで選ばれた英単語の日本語訳でワードリストをフィルター

          var duplicateWords = wordList.filter(function (duplicateWord) {
            return duplicateWord.jap_trans_1 == displayWordInList.jap_trans_1;
          }); // 日本語訳が重複している他の英単語がある場合

          if (duplicateWords.length > 1) {
            // 重複している英単語の配列（この時点では答えを含む）を定義する。
            var duplicateWordsList = [];

            for (var i = 0; i < duplicateWords.length; i++) {
              // 重複している英単語のみ（答え以外の英単語）を配列duplicateWordsListに格納する。
              if (duplicateWords[i].id !== displayWordInList.id) {
                duplicateWordsList.push(duplicateWords[i].eng_word);
              }

              ;
            }

            ;
            displayWordAnnotation.textContent = "\u203B".concat(duplicateWordsList, "\u4EE5\u5916");
            displayWordAnnotation.className = "displayWordAnnotation";
          }

          ;
        }

        ; // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
        // spanタグで閉じた単語を表示する。

        charArrayInDisplayWord = displayWordInList.eng_word.split("").map(function (value) {
          // spanタグを作成する。
          var spanValue = document.createElement("span"); // spanタグに一文字を挿入する。

          spanValue.textContent = value; // 各アルファベットに対して、transparentクラスを付与する。（プレイモード普通、タイムアタックのときのみ）

          if (playMode == "普通" || playMode == "タイムアタック") {
            spanValue.className = "transparent";
          }

          ; // 表示する単語にspanタグで閉じた一文字を追加する。

          displayWord.appendChild(spanValue);
          return spanValue;
        });
      }

      ;
    }

    ; // 以上、表示する単語を作成する処理を定義する。-----------------------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、プレイ時間をカウントダウンする処理を定義する。-----------------------------------------
    // ------------------------------------------------------------------------------------

    function countDownTime() {
      var currentTime = Date.now();
      var diffBetweenCurrentTimeAndStartTime = currentTime - startTime;
      var remainMSec = initialPlayingTimeMSec - diffBetweenCurrentTimeAndStartTime;
      var remainAllSec = Math.ceil(remainMSec / 1000);
      var remainMin = Math.floor(remainAllSec / 60);
      var remainSec = Math.ceil(remainAllSec % 60);
      var remainSecLabel = "\u6B8B\u308A".concat("0".concat(remainMin).slice(-2), "\u5206").concat("0".concat(remainSec).slice(-2), "\u79D2"); // 残り時間が0になった場合の処理を定義する。

      if (remainMSec <= 0) {
        gameClose();
      } // 残りプレイ可能時間を更新する。


      remainPlayingTime.textContent = remainSecLabel; // プレイモード：タイムアタックの場合は、使用時間を最後に表示する。

      if (playMode == "タイムアタック") {
        totalPlayingTimeMSec = diffBetweenCurrentTimeAndStartTime;
      }

      ;
    }

    ; // 以上、プレイ時間をカウントダウンする処理を定義する。-----------------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、ゲーム終了時の処理を定義する。------------------------------------------------------
    // ------------------------------------------------------------------------------------

    function gameClose() {
      // ゲーム終了後にplayEndFlagを1に更新する。
      playEndFlag = "1"; // プレイ時間のカウントダウンを止める。

      clearInterval(timerId); // 最後に出題していた英単語を allQuestionWordsList に格納する。
      // ただし、プレイモード：タイムアタックでクリアしている場合、出題している単語はないため処理不要。
      // また、終了直前で正解した場合、次の問題生成前に本処理に入り、最後に正解した問題が２つ表示されるため、"未解答"であることも条件に加える。

      if (!(playMode == "タイムアタック" && gameCompleteTimeAttackFlag == "1") && allQuestionWords[allQuestionWords.length - 2] == "未解答") {
        // 出題したすべての英単語リストに追加する。
        allQuestionWordsList.push(allQuestionWords);
      }

      ; // 残り時間の表示を消す。

      remainPlayingTime.className = "transparent"; // 現在のスコア（左上）の表示を消す。
      // プレイモード：練習・普通の場合のみ

      if (playMode == "練習" || playMode == "普通") {
        displayScoreEntire.className = "transparent";
        displayScore.className = "transparent";
        displayP.className = "transparent";
      }

      ; //正解数全体のクラスを非表示にする。

      NumCorrectMidGamePlay.className = "transparent"; // 正解数の表示を消す。

      displayNumCorrectWord.className = "transparent";
      displayNumCorrectNum.className = "transparent"; // 連続正解数の表示を消す。

      displayConsecutiveNumCorrectWord.className = "transparent";
      displayConsecutiveNumCorrectNum.className = "transparent"; // 最高連続正解数の表示を消す。

      displayMaxConsecutiveNumCorrectWord.className = "transparent";
      displayMaxConsecutiveNumCorrectNum.className = "transparent"; // 問題の英単語の表示を消す。

      displayWord.textContent = ""; // 解答の日本語の表示を消す。

      displayWordJapanese.textContent = ""; // "発音を聞く"ボタンを消す。

      pronounceAgainButton.className = "transparent"; // "ヒントを見る"ボタンを消す。

      hintButton.className = "transparent"; // "答えを見る"ボタンを消す。

      answerButton.className = "transparent"; // 注釈を消す。（プレイモード普通、タイムアタックの時のみ）

      if (playMode == "普通" || playMode == "タイムアタック") {
        displayWordAnnotation.className = "transparent";
      }

      ; // "最初からやり直す"ボタンを消す。

      restartButtonMidGame.className = "transparent"; // "コース選択画面に戻る"ボタンを消す。

      courseSettingBackButtonMidGame.className = "transparent"; // 正解時に表示される○の画像を消す。

      circleImg.className = "transparent"; // ゲーム終了後に終了を知らせるポップアップを作成する。
      // ゲーム終了を知らせるポップアップを定義する。

      var closePopup = document.getElementById("closePopup");
      closePopup.textContent = "終了";
      closePopup.className = "closePopup"; // もう一度ボタンを定義する。

      var restartBtn = document.getElementById("restartBtn"); // 戻るボタンを定義する。

      var backBtn = document.getElementById("backBtn"); // 問題を振り返るボタンを定義する。

      var checkQuestions = document.getElementById("checkQuestions"); // 出題問題リスト表示を定義する。

      var allQuestionsListEntireScr = document.getElementById("allQuestionsListEntireScr");
      var allQuestionsList = document.getElementById("allQuestionsList"); // 出題した問題を表にする。
      // 出題した問題の数だけ処理を実施する。

      allQuestionWordsList.forEach(function (allQuestionWords) {
        var tr = document.createElement("tr");
        allQuestionsList.appendChild(tr); // 問題ごとにobjArrayを変え、表に各項目を入れていく。

        var objArray = Object.entries(allQuestionWords);
        console.log(objArray);
        objArray.forEach(function (arr) {
          console.log(arr);
          var td = document.createElement("td");
          td.textContent = arr[1];

          if (arr[0] == "2") {
            td.onclick = function () {
              console.log("td2");
              pronounce(arr[1]);
            };
          }

          ;
          tr.appendChild(td);
        });
      });
      var closeAllQuestionsList = document.getElementById("closeAllQuestionsList");

      checkQuestions.onclick = function () {
        // メーターを非表示にする。
        document.getElementById("meterImg").className = "transparent"; // 出題問題リストを表示させる。

        allQuestionsListEntireScr.className = "allQuestionsListEntireScr";
        closeAllQuestionsList.className = "closeAllQuestionsList";
      }; // "閉じる"ボタン押下で出題問題リストポップアップを閉じる。


      closeAllQuestionsList.onclick = function () {
        // メーターを表示にさせる。
        document.getElementById("meterImg").className = "meter"; // 出題問題リストを非表示にする。

        allQuestionsListEntireScr.className = "transparent";
        closeAllQuestionsList.className = "transparent";
      }; // 2秒後に得点を表示させる。また、もう一度ボタンと戻るボタンを表示させる。


      setTimeout(function () {
        // 得点の表示
        // プレイモード：練習・普通の場合は、スコアを表示する。
        if (playMode == "練習" || playMode == "普通") {
          closePopup.textContent = "\u3042\u306A\u305F\u306E\u5F97\u70B9\u306F".concat(totalScore.toLocaleString(), "\u70B9\u3067\u3059!");
          closePopup.className = "endResultPopup";
        } else {
          // プレイモード：タイムアタックの場合は、かかった時間を表示する。
          // ただし、すべての出題範囲に解答できた場合のみ。
          if (gameCompleteTimeAttackFlag == "1") {
            var remainAllSecTimeAttack = Math.ceil(totalPlayingTimeMSec / 1000);
            var remainMinTimeAttack = Math.floor(remainAllSecTimeAttack / 60);
            var remainSecTimeAttack = Math.ceil(remainAllSecTimeAttack % 60);
            closePopup.textContent = "\u3042\u306A\u305F\u304C\u304B\u304B\u3063\u305F\u6642\u9593\u306F".concat("0".concat(remainMinTimeAttack).slice(-2), "\u5206").concat("0".concat(remainSecTimeAttack).slice(-2), "\u79D2\u3067\u3059!");
            closePopup.className = "endResultPopup";
          } else {
            // 時間切れの場合は、クリアできなかったと表示する。
            closePopup.textContent = "\u6B8B\u5FF5\u306A\u304C\u3089\u30AF\u30EA\u30A2\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002";
            closePopup.className = "endResultPopup";
          }
        }

        ; // もう一度ボタンの表示（transparentを消して表示させる）

        restartBtn.classList.remove('transparent'); // 戻るボタンの表示（transparentを消して表示させる）

        backBtn.classList.remove('transparent'); // 問題を振り返るボタンの表示

        checkQuestions.className = "checkQuestions";
        checkQuestions.textContent = "問題を振り返る";
      }, 2000);
    }

    ; // 以上、ゲーム終了時の処理を定義する。------------------------------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、スコアをアップし、現在のtotalScoreを表示する処理を定義する。---------------------------
    // ------------------------------------------------------------------------------------

    function countUpScore() {
      if (displayWord.textContent.length < refTextLengthForCountUpLevel1) {
        addPoint = addScoreLevel1;
      } else {
        addPoint = addScoreLevel2;
      } // 合計得点を定義する。


      totalScore = totalScore + addPoint;
      displayScore.setAttribute('data-num', totalScore);
      var countElm = $('.displayScore'),
          countSpeed = 10;
      countElm.each(function () {
        var self = $(this),
            // 合計得点を定義する。
        countMax = self.attr('data-num'),
            thisCount = self.text(),
            countTimer;
        countUpAnime(); // 数値をカウントアップするアニメーションを定義する。

        function countUpAnime() {
          countTimer = setInterval(function () {
            var countNext = thisCount++;
            self.text(countNext);

            if (countNext == countMax) {
              clearInterval(countTimer);
            }
          }, countSpeed);
        }

        ;
      });
    }

    ; // 以上、スコアをアップし、現在のtotalScoreを表示する処理を定義する。---------------------------
    // ------------------------------------------------------------------------------------
    // 以下、正解数をカウントアップする処理を定義する。--------------------------------------------
    // ------------------------------------------------------------------------------------

    function countUpCorrectNum() {
      // 合計正解数のカウントアップ
      totalNumCorrectNum = totalNumCorrectNum + 1;
      displayNumCorrectNum.textContent = totalNumCorrectNum; // 連続正解数のカウントアップ

      totalConsecutiveNumCorrectNum = totalConsecutiveNumCorrectNum + 1;
      displayConsecutiveNumCorrectNum.textContent = totalConsecutiveNumCorrectNum; // 最高連続正解数のカウントアップ

      if (totalMaxConsecutiveNumCorrectNum < totalConsecutiveNumCorrectNum) {
        totalMaxConsecutiveNumCorrectNum = totalMaxConsecutiveNumCorrectNum + 1;
        displayMaxConsecutiveNumCorrectNum.textContent = totalMaxConsecutiveNumCorrectNum;
      }

      ;
    }

    ; // 以上、正解数をカウントアップする処理を定義する。--------------------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、タイプした文字が表示文字と一致する場合の処理を定義する。--------------------------------
    // ------------------------------------------------------------------------------------

    function keyDownCharCountUp(keyDownChar) {
      if (keyDownChar.key === charArrayInDisplayWord[0].textContent && playEndFlag === "0") {
        correctTyping();
      } else if (keyDownChar.key === "e" && charArrayInDisplayWord[0].textContent === "é" && playEndFlag === "0") {
        // éの場合は例外的にeでOKとする。
        correctTyping();
      } else if (playEndFlag === "0") {
        // タイプミス音を発生させる。
        typeMissAudio();
      } else {}

      ;
    }

    ; // 以上、タイプした文字が表示文字と一致する場合の処理を定義する。--------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、タイプした文字が解答文字と一致する場合の共通処理を定義する。-----------------------------
    // ------------------------------------------------------------------------------------

    function correctTyping() {
      // タイプ音を定義する。
      // タイプ音ありの場合のみ
      if (typeAudioMode == "タイプ音あり") {
        var _typeAudioMode = new Audio('/assets/typeAudio.mp3'); // タイプ音を発生させる。


        _typeAudioMode.volume = 0.3;

        _typeAudioMode.play();
      }

      ; // 文字色を変更する。

      charArrayInDisplayWord[0].className = "add_red"; // 一致した文字を配列から削除する。

      charArrayInDisplayWord.shift(); // メーターを更新する。

      bonusCountMeter = bonusCountMeter + 1; // メーターがメーター最大値以上になった場合、メーターを初期化し、プレイ可能時間を延長する。

      if (bonusCountMeter >= bonusCountMeterMax) {
        bonusCountMeter = 0; // 初期プレイ時間を更新することで、残りプレイ可能時間を延長する。

        initialPlayingTimeMSec = initialPlayingTimeMSec + bonusAddPlayTime; // 延長した残りプレイ時間を表示する。

        displayBonusAddPlayTime.textContent = "+ " + Math.ceil(bonusAddPlayTime / 1000) + "秒"; // 延長した残りプレイ時間をフェードアウトする。

        displayBonusAddPlayTime.classList.add('fadeout'); // fadeoutのclassを取り除くことで、2回目以降も延長した残りプレイ時間が表示されるようにする。

        setTimeout(function () {
          displayBonusAddPlayTime.textContent = "";
          displayBonusAddPlayTime.classList.remove('fadeout');
        }, 2000);
      }

      ; // 更新したメーターを表示する。

      document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // 表示文字全てタイプした場合、スコアアップ処理を実施し、次の表示文字を作成する処理を実施する。

      if (charArrayInDisplayWord.length === 0) {
        // 正解音を定義する。
        // 正解音ありの場合のみ
        if (correctAudioMode == "正解音あり") {
          var correctAudio = new Audio('/assets/correctAudio.mp3'); // 正解した場合、効果音を発生させる。

          correctAudio.volume = 0.3;
          correctAudio.play();
        }

        ; // 「答えを見る」を押していなければ、スコアと正解数をカウントアップする。

        if (answerOpenFlag == "0") {
          // プレイモード：練習・普通の場合のみ、スコアアップする。
          if (playMode == "練習" || playMode == "普通") {
            countUpScore();
          }

          ;
          countUpCorrectNum(); // 「答えを見る」を押していない場合、正解として記録する。

          allQuestionWords.splice(allQuestionWords.length - 2, 1, "正解");
        } else {
          // 「答えを見る」を押していれば、フラグを0に戻す。
          answerOpenFlag = "0"; // 「答えを見る」を押している場合、不正解として記録する。

          allQuestionWords.splice(allQuestionWords.length - 2, 1, "不正解");
        }

        ; // 解答するまでにかかった時間を記録する。

        eachQuestionAnswerTime = Math.ceil((Date.now() - eachQuestionCreateTime) / 1000);
        var eachQuestionAnswerMin = Math.floor(eachQuestionAnswerTime / 60);
        var eachQuestionAnswerSec = Math.ceil(eachQuestionAnswerTime % 60);
        allQuestionWords.splice(allQuestionWords.length - 1, 1, "".concat("0".concat(eachQuestionAnswerMin).slice(-2), "\u5206").concat("0".concat(eachQuestionAnswerSec).slice(-2), "\u79D2")); // 出題したすべての英単語リストに追加する。

        allQuestionWordsList.push(allQuestionWords); // 丸を表示、答えを表示するなどのアニメーションを実施する。

        circleImg.classList.add('circle');
        circleImg.classList.remove('transparent');
        setTimeout(createDisplayWord, 500);
        setTimeout(function () {
          circleImg.classList.add('transparent');
          circleImg.classList.remove('circle');
        }, 500);

        if (playMode == "タイムアタック" && gameCompleteTimeAttackFlag == "1") {
          gameClose();
        }

        ;
      }

      ;
    }

    ; // 以上、タイプした文字が解答文字と一致する場合の共通処理を定義する。-----------------------------
    // ------------------------------------------------------------------------------------
    // 以下、タイプした文字が表示文字と不一致の場合の処理を定義する。--------------------------------
    // ------------------------------------------------------------------------------------

    function typeMissAudio() {
      // ミス音を定義する。
      // ミス音ありの場合のみ
      if (incorrectAudioMode == "ミス音あり") {
        var incorrectAudio = new Audio('/assets/incorrectAudio.mp3'); // ミス音の場合、効果音を発生させる。

        incorrectAudio.volume = 0.3;
        incorrectAudio.play();
      }

      ;
    }

    ; // 以上、タイプした文字が表示文字と不一致の場合の処理を定義する。--------------------------------
    // ------------------------------------------------------------------------------------
    // 以下、英単語を生成した際に、発音させる処理を定義する。---------------------------------------
    // ------------------------------------------------------------------------------------

    function pronounce(eng_word) {
      // résuméの場合は音声ファイルの検索ができないため、ファイルを変更
      if (eng_word == "résumé") {
        eng_word = "rezumei";
      }

      ;
      var pronunciation = new Audio('/assets/発音/' + eng_word + '.mp3');
      pronunciation.play();
    }

    ; // 以上、英単語を生成した際に、発音させる処理を定義する。---------------------------------------
    // ------------------------------------------------------------------------------------
  }

  ;
}

;

/***/ })

/******/ });
//# sourceMappingURL=typingplay_eng-ff1c6dc182e056e05bfd.js.map