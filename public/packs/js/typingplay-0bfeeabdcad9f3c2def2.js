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
  var wordList = ["aaa", "bbb", "ccc", "ddd", "eeeeee", "ffffff", "gggggg", "hhhhhh"]; // 表示する単語を定義する。

  var displayWord = document.getElementById("displayWord"); // 表示する単語を一文字ずつに分ける変数を定義する。

  var charArrayInDisplayWord = []; // 表示する単語を作成する。

  createDisplayWord(); // 表示する単語を作成する。

  function createDisplayWord() {
    // 表示単語を初期化する。
    displayWord.textContent = ""; // 0〜textListsの総数間で整数値をランダムで算出する。

    var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
    // spanタグで閉じた単語を表示する。

    charArrayInDisplayWord = wordList[randomIntegerInTotalWordList].split("").map(function (value) {
      // spanタグを作成する。
      var spanValue = document.createElement("span"); // spanタグに一文字を挿入する。

      spanValue.textContent = value; // 表示する単語にspanタグで閉じた一文字を追加する。

      displayWord.appendChild(spanValue);
      return spanValue;
    });
  } // 表示する残りのプレイ可能時間を定義する。


  var remainPlayingTime = document.getElementById("remainPlayingTime"); // 表示するスタート時のプレイ可能時間を定義する。

  var initialPlayingTimeMSec = 6000; // スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。

  setTimeout(countDownTime, 0); // const closePopup = document.getElementById("closePopup");
  // let endFlag = "0";

  var startTime = Date.now(); // プレイ時間をカウントダウンする処理を定義する。

  function countDownTime() {
    var currentTime = Date.now();
    var diffBetweenCurrentTimeAndStartTime = currentTime - startTime;
    var remainMSec = initialPlayingTimeMSec - diffBetweenCurrentTimeAndStartTime;
    var remainSec = Math.ceil(remainMSec / 1000);
    var remainSecLabel = "\u6B8B\u308A".concat(remainSec, "\u79D2");

    if (remainMSec <= 0) {
      clearInterval(timerId);
      remainSecLabel = ""; //  const totalScore = score - addPoint;

      displayScore.textContent = "";
      displayScore.className = "transparent";
      displayWord.textContent = "";
      displayWord.className = "transparent"; //  endFlag = "1";
      //     closePopup.textContent ="終了";
      //     closePopup.className = "closePopup";
      //     setTimeout(function(){
      //       closePopup.textContent = `あなたの得点は${totalScore}点です!`;
      //       closePopup.className = "endPopup";
      //     },1000);
    }

    remainPlayingTime.textContent = remainSecLabel;
  } // 1秒ごとにcountDownTimeを実施する。


  var timerId = setInterval(countDownTime, 1000); // 表示するスコアを定義する。

  var displayScore = document.getElementById("displayScore"); // 合計スコアの初期値を定義する。

  var totalScore = 0; // 表示するスコアに初期値を定義する。

  displayScore.textContent = totalScore; // スコアアップする基準を定義する。

  var refTextLengthForCountUpLevel1 = 4;
  var addScoreLevel1 = 1;
  var addScoreLevel2 = 3; // スコアアップし、現在のtotalScoreを表示する処理を定義する。

  function countUpScore() {
    if (charArrayInDisplayWord.length < refTextLengthForCountUpLevel1) {
      addPoint = addScoreLevel1;
    } else {
      addPoint = addScoreLevel2;
    }

    totalScore = totalScore + addPoint;
    displayScore.textContent = totalScore;
    return totalScore;
  } // タイプされる度にkeyDownCharCountUpを実施するように定義する。


  document.addEventListener("keydown", keyDownCharCountUp); // 表示するメーターリストを定義する。

  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10.png', '/assets/メーターPNG/メーター20.png', '/assets/メーターPNG/メーター30.png', '/assets/メーターPNG/メーター40.png', '/assets/メーターPNG/メーター50.png', '/assets/メーターPNG/メーター60.png', '/assets/メーターPNG/メーター70.png', '/assets/メーターPNG/メーター80.png', '/assets/メーターPNG/メーター90.png', '/assets/メーターPNG/メーター100.png']; // 表示するメーター初期値を定義する。

  var bonusCountMeter = 0; // 表示するメーター最大値を定義する。

  var bonusCountMeterMax = 10; // メーターを表示する。

  document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // タイプした文字が表示文字と一致する場合の処理を定義する。

  function keyDownCharCountUp(keyDownChar) {
    if (keyDownChar.key === charArrayInDisplayWord[0].textContent) {
      // && endFlag==="0") {
      // 文字色を変更する。
      charArrayInDisplayWord[0].className = "add_red"; // メーターを更新する。

      bonusCountMeter = bonusCountMeter + 1; // 一致した文字を配列から削除する。

      charArrayInDisplayWord.shift(); // 表示文字全てタイプした場合、次の表示文字を作成する。

      if (charArrayInDisplayWord.length === 0) createDisplayWord(), countUpScore();
    } // メーターがメーター最大値以上になった場合、メーターを初期化し、プレイ可能時間を延長する。


    if (bonusCountMeter >= bonusCountMeterMax) {
      bonusCountMeter = 0; // 初期プレイ時間を更新することで、残りプレイ可能時間を延長する。

      initialPlayingTimeMSec = initialPlayingTimeMSec + 3000;
    } // else if(endFlag==="0"){
    //   bonusCountMeter =0;
    // }
    // 更新したメーターを表示する。


    document.getElementById("meterImg").src = imgArray[bonusCountMeter];
  }
});

/***/ })

/******/ });
//# sourceMappingURL=typingplay-0bfeeabdcad9f3c2def2.js.map