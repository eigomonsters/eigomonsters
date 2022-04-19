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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/typingplay.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/typingplay.js":
/*!********************************************!*\
  !*** ./app/javascript/packs/typingplay.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  // 表示する単語リストを定義する。
  // chromeの場合"ff"が正常に動作しない。
  var wordList = gon.wordListAll;
  console.log(wordList); // 表示するメーターリストを定義する。

  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10.png', '/assets/メーターPNG/メーター20.png', '/assets/メーターPNG/メーター30.png', '/assets/メーターPNG/メーター40.png', '/assets/メーターPNG/メーター50.png', '/assets/メーターPNG/メーター60.png', '/assets/メーターPNG/メーター70.png', '/assets/メーターPNG/メーター80.png', '/assets/メーターPNG/メーター90.png', '/assets/メーターPNG/メーター100.png']; // 表示するメーター初期値を定義する。

  var bonusCountMeter = 0; // 表示するメーター最大値を定義する。

  var bonusCountMeterMax = 10; // メーターの初期値を表示する。

  document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // ゲーム開始までをカウントダウン変数を定義する。

  var countDownPopup = document.getElementById("countDownPopup"); // class属性を付与する。

  countDownPopup.className = "countDownPopup"; // ゲーム開始までをカウントダウン変数の初期値を定義する。

  var countDownPopupNumber = 3; // ゲーム開始までをカウントダウン変数の初期値を表示する。

  countDownPopup.textContent = countDownPopupNumber; // ゲーム開始までをカウントダウンを1秒ごとに実施するように定義する。

  var timerIdToStart = setInterval(countDownTimeToStart, 1000); // ゲーム開始までをカウントダウンを実施する処理を定義する。

  function countDownTimeToStart() {
    countDownPopupNumber = countDownPopupNumber - 1;

    if (countDownPopupNumber <= 0) {
      clearInterval(timerIdToStart);
      countDownPopup.remove();
      typingPlayStart();
    } else {
      countDownPopup.textContent = countDownPopupNumber;
    }
  } // ゲームを開始する処理を定義する。


  function typingPlayStart() {
    // 表示する単語を定義する。
    var displayWord = document.getElementById("displayWord"); // 表示する単語を一文字ずつに分ける変数を定義する。

    var charArrayInDisplayWord = []; // 表示する単語を作成する。

    createDisplayWord(); // プレイ開始時間を取得する。

    var startTime = Date.now(); // 表示する残りのプレイ可能時間を定義する。

    var remainPlayingTime = document.getElementById("remainPlayingTime"); // 表示するスタート時のプレイ可能時間を定義する。

    var initialPlayingTimeMSec = 5000; // スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。

    setTimeout(countDownTime, 0); // 1秒ごとにcountDownTimeを実施するように定義する。

    var timerId = setInterval(countDownTime, 1000); // 表示するスコアを定義する。

    var displayScore = ('00' + num).slice(-2).document.getElementById("displayScore"); // 合計スコアの初期値を定義する。

    var totalScore = 0; // 表示するスコアに初期値を定義する。

    displayScore.textContent = totalScore; // スコアアップする基準を定義する。

    var refTextLengthForCountUpLevel1 = 4;
    var addScoreLevel1 = 1;
    var addScoreLevel2 = 3; // タイプされる度にkeyDownCharCountUpを実施するように定義する。

    document.addEventListener("keydown", keyDownCharCountUp); // ゲーム終了を判定するフラグを定義する。

    var playEndFlag = "0"; // 表示する単語を作成する処理を定義する。

    function createDisplayWord() {
      // 表示単語を初期化する。
      displayWord.textContent = ""; // 0〜textListsの総数間で整数値をランダムで算出する。

      var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
      // spanタグで閉じた単語を表示する。

      charArrayInDisplayWord = wordList[randomIntegerInTotalWordList].eng_word.split("").map(function (value) {
        // spanタグを作成する。
        var spanValue = document.createElement("span"); // spanタグに一文字を挿入する。

        spanValue.textContent = value; // 表示する単語にspanタグで閉じた一文字を追加する。

        displayWord.appendChild(spanValue);
        return spanValue;
      });
    } // プレイ時間をカウントダウンする処理を定義する。


    function countDownTime() {
      var currentTime = Date.now();
      var diffBetweenCurrentTimeAndStartTime = currentTime - startTime;
      var remainMSec = initialPlayingTimeMSec - diffBetweenCurrentTimeAndStartTime;
      var remainSec = Math.ceil(remainMSec / 1000);
      var remainSecLabel = "\u6B8B\u308A".concat(remainSec, "\u79D2");

      if (remainMSec <= 0) {
        clearInterval(timerId);
        remainSecLabel = "";
        displayScore.textContent = "";
        displayWord.textContent = ""; // ゲーム終了後にplayEndFlagを1に更新する。

        playEndFlag = "1"; // ゲーム終了後に終了を知らせるポップアップを作成する。
        // ゲーム終了を知らせるポップアップを定義する。

        var closePopup = document.getElementById("closePopup");
        closePopup.textContent = "終了";
        closePopup.className = "closePopup"; // 戻るボタンを定義する。

        var backBtn = document.getElementById("backBtn"); // もう一度ボタンを定義する。

        var restartBtn = document.getElementById("restartBtn"); // 2秒後に得点を表示させる。また、もう一度ボタンと戻るボタンを表示させる。

        setTimeout(function () {
          closePopup.textContent = "\u3042\u306A\u305F\u306E\u5F97\u70B9\u306F".concat(totalScore, "\u70B9\u3067\u3059!");
          closePopup.className = "endResultPopup";
          restartBtn.innerHTML = "<a href='../'>もう一度遊ぶ</a>";
          restartBtn.className = "restartBtn";
          backBtn.innerHTML = "<a href='../'>タイトルに戻る</a>";
          backBtn.className = "backBtn";
        }, 2000);
      } // 残りプレイ可能時間を更新する。


      remainPlayingTime.textContent = remainSecLabel;
    } // スコアをアップし、現在のtotalScoreを表示する処理を定義する。


    function countUpScore() {
      if (displayWord.textContent.length < refTextLengthForCountUpLevel1) {
        addPoint = addScoreLevel1;
      } else {
        addPoint = addScoreLevel2;
      }

      totalScore = totalScore + addPoint;
      displayScore.textContent = totalScore;
      return totalScore;
    } // タイプした文字が表示文字と一致する場合の処理を定義する。


    function keyDownCharCountUp(keyDownChar) {
      if (keyDownChar.key === charArrayInDisplayWord[0].textContent && playEndFlag === "0") {
        // 文字色を変更する。
        charArrayInDisplayWord[0].className = "add_red"; // メーターを更新する。

        bonusCountMeter = bonusCountMeter + 1; // 一致した文字を配列から削除する。

        charArrayInDisplayWord.shift(); // 表示文字全てタイプした場合、スコアアップ処理を実施し、次の表示文字を作成する処理を実施する。

        if (charArrayInDisplayWord.length === 0) countUpScore(), createDisplayWord(); // メーターがメーター最大値以上になった場合、メーターを初期化し、プレイ可能時間を延長する。

        if (bonusCountMeter >= bonusCountMeterMax) {
          bonusCountMeter = 0; // 初期プレイ時間を更新することで、残りプレイ可能時間を延長する。

          initialPlayingTimeMSec = initialPlayingTimeMSec + 3000;
        }
      } else if (playEndFlag === "0") {
        // タイプミスでメーターを初期値に戻す。
        bonusCountMeter = 0;
      } // 更新したメーターを表示する。


      document.getElementById("meterImg").src = imgArray[bonusCountMeter];
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=typingplay-a3b0f42909c98952d876.js.map