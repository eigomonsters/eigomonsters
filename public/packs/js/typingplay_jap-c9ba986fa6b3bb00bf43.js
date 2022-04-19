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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/typingplay_jap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/typingplay_jap.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/typingplay_jap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.addEventListener('load', function () {
  var _romaMappingTable;

  // 表示する単語リストを定義する。
  // chromeの場合"ff"が正常に動作しない。
  var wordList = gon.wordListAll; // 表示するメーターリストを定義する。

  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10.png', '/assets/メーターPNG/メーター20.png', '/assets/メーターPNG/メーター30.png', '/assets/メーターPNG/メーター40.png', '/assets/メーターPNG/メーター50.png', '/assets/メーターPNG/メーター60.png', '/assets/メーターPNG/メーター70.png', '/assets/メーターPNG/メーター80.png', '/assets/メーターPNG/メーター90.png', '/assets/メーターPNG/メーター100.png'];
  var romaMappingTable = (_romaMappingTable = {
    "あ": "a",
    "きょ": "kyo",
    "じゅ": "zyu"
  }, _defineProperty(_romaMappingTable, "\u3058\u3085", "ju"), _defineProperty(_romaMappingTable, "え", "e"), _defineProperty(_romaMappingTable, "ぎょ", "gyo"), _defineProperty(_romaMappingTable, "う", "u"), _defineProperty(_romaMappingTable, "りょ", "ryo"), _defineProperty(_romaMappingTable, "い", "i"), _defineProperty(_romaMappingTable, "く", "ku"), _defineProperty(_romaMappingTable, "る", "ru"), _romaMappingTable); // 表示するメーター初期値を定義する。

  var bonusCountMeter = 0; // 表示するメーター最大値を定義する。

  var bonusCountMeterMax = 10; // メーターの初期値を表示する。

  document.getElementById("meterImg").src = imgArray[bonusCountMeter]; // 表示するプレイ延長時間を定義する。

  var displayBonusAddPlayTime = document.getElementById("displayBonusAddPlayTime");
  displayBonusAddPlayTime.className = "displayBonusAddPlayTime"; // メーター最大値に達した際の延長するプレイ時間を定義する。

  var bonusAddPlayTime = 3000; // ゲーム開始までをカウントダウン変数を定義する。

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
    var displayWord = document.getElementById("displayWord");
    displayWord.className = "displayWord";
    var displayWordEnglish = document.getElementById("displayWordEnglish");
    displayWordEnglish.className = "displayWordEnglish"; // 表示する単語を一文字ずつに分ける変数を定義する。

    var charArrayInDisplayWordJap = []; // 表示する単語を作成する。

    createDisplayWord(); // プレイ開始時間を取得する。

    var startTime = Date.now(); // 表示する残りのプレイ可能時間を定義する。

    var remainPlayingTime = document.getElementById("remainPlayingTime");
    remainPlayingTime.className = "remainPlayingTime"; // 表示するスタート時のプレイ可能時間を定義する。

    var initialPlayingTimeMSec = 120000; // スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。

    setTimeout(countDownTime, 0); // 1秒ごとにcountDownTimeを実施するように定義する。

    var timerId = setInterval(countDownTime, 1000); // 表示するスコアを定義する。

    var displayScore = document.getElementById("displayScore");
    displayScore.className = "displayScore"; // 合計スコアの初期値を定義する。

    var totalScore = 0; // 表示するスコアに初期値を定義する。

    displayScore.textContent = totalScore + " P"; // スコアアップする基準を定義する。

    var refTextLengthForCountUpLevel1 = 4;
    var addScoreLevel1 = 1000;
    var addScoreLevel2 = 3000; // タイプされる度にkeyDownCharCountUpを実施するように定義する。

    document.addEventListener("keydown", keyDownCharCountUp); // ゲーム終了を判定するフラグを定義する。

    var playEndFlag = "0"; // 表示する単語を作成する処理を定義する。

    function createDisplayWord() {
      // 表示単語を初期化する。
      displayWord.textContent = ""; // 0〜textListsの総数間で整数値をランダムで算出する。

      var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); // 表示する単語をランダムで選定する。

      displayWordInList = wordList[randomIntegerInTotalWordList]; // 英単語を表示させる。

      displayWordEnglish.textContent = displayWordInList.eng_word; // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
      // spanタグで閉じた単語を表示する。

      charArrayInDisplayWordJap = displayWordInList.jap_trans_1_yomi.split("").map(function (value) {
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
      var remainSecLabel = "\u6B8B\u308A".concat("00".concat(remainSec).slice(-3), "\u79D2");

      if (remainMSec <= 0) {
        clearInterval(timerId);
        remainSecLabel = "";
        displayScore.textContent = "";
        displayWord.textContent = "";
        displayWordEnglish.textContent = ""; // ゲーム終了後にplayEndFlagを1に更新する。

        playEndFlag = "1"; // ゲーム終了後に終了を知らせるポップアップを作成する。
        // ゲーム終了を知らせるポップアップを定義する。

        var closePopup = document.getElementById("closePopup");
        closePopup.textContent = "終了";
        closePopup.className = "closePopup"; // 戻るボタンを定義する。

        var backBtn = document.getElementById("backBtn"); // もう一度ボタンを定義する。

        var restartBtn = document.getElementById("restartBtn"); // 2秒後に得点を表示させる。また、もう一度ボタンと戻るボタンを表示させる。

        setTimeout(function () {
          closePopup.textContent = "\u3042\u306A\u305F\u306E\u5F97\u70B9\u306F".concat(totalScore.toLocaleString(), "\u70B9\u3067\u3059!");
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
      displayScore.textContent = "".concat(totalScore.toLocaleString(), " P");
      return totalScore;
    }

    var charArrayInDisplayWordAlpha = [];
    var shiftAlreadyStartedFlag = 0; // タイプした文字が表示文字と一致する場合の処理を定義する。

    function keyDownCharCountUp(keyDownChar) {
      if (charArrayInDisplayWordJap[1].textContent !== "") {
        if (charArrayInDisplayWordJap[1].textContent === "ぁ" || charArrayInDisplayWordJap[1].textContent === "ぃ" || charArrayInDisplayWordJap[1].textContent === "ぅ" || charArrayInDisplayWordJap[1].textContent === "ぇ" || charArrayInDisplayWordJap[1].textContent === "ぉ" || charArrayInDisplayWordJap[1].textContent === "ゃ" || charArrayInDisplayWordJap[1].textContent === "ゅ" || charArrayInDisplayWordJap[1].textContent === "ょ") {
          var wordLetter = charArrayInDisplayWordJap[0].textContent + charArrayInDisplayWordJap[1].textContent;

          if (shiftAlreadyStartedFlag === 0) {
            charArrayInDisplayWordAlpha = romaMappingTable[wordLetter].split("").map(function (value) {
              var spanValue = document.createElement("span");
              spanValue.textContent = value;
              return spanValue;
            });
          }

          ;

          if (keyDownChar.key === charArrayInDisplayWordAlpha[0].textContent) {
            charArrayInDisplayWordAlpha.shift();
            shiftAlreadyStartedFlag = 1;
            correctTyping();

            if (charArrayInDisplayWordAlpha.length === 0) {
              charArrayInDisplayWordJap[0].className = "add_red";
              charArrayInDisplayWordJap[1].className = "add_red";
              charArrayInDisplayWordJap.shift();
              charArrayInDisplayWordJap.shift();
              shiftAlreadyStartedFlag = 0;
            }

            ;
          } else {
            bonusCountReset();
          }

          ;
        } else if (charArrayInDisplayWordJap[0].textContent === "あ" || charArrayInDisplayWordJap[0].textContent === "い" || charArrayInDisplayWordJap[0].textContent === "う" || charArrayInDisplayWordJap[0].textContent === "え" || charArrayInDisplayWordJap[0].textContent === "お") {
          var _wordLetter = charArrayInDisplayWordJap[0].textContent;

          if (shiftAlreadyStartedFlag === 0) {
            if (keyDownChar.key === romaMappingTable[_wordLetter]) {
              charArrayInDisplayWordJap[0].className = "add_red";
              charArrayInDisplayWordJap.shift();
              correctTyping();
            }

            ;
          }

          ;
        } else {
          var _wordLetter2 = charArrayInDisplayWordJap[0].textContent;

          if (shiftAlreadyStartedFlag === 0) {
            charArrayInDisplayWordAlpha = romaMappingTable[_wordLetter2].split("").map(function (value) {
              var spanValue = document.createElement("span");
              spanValue.textContent = value;
              return spanValue;
            });
          }

          ;

          if (keyDownChar.key === charArrayInDisplayWordAlpha[0].textContent) {
            charArrayInDisplayWordAlpha.shift();
            shiftAlreadyStartedFlag = 1;
            correctTyping();

            if (charArrayInDisplayWordAlpha.length === 0) {
              charArrayInDisplayWordJap[0].className = "add_red";
              charArrayInDisplayWordJap.shift();
              shiftAlreadyStartedFlag = 0;
            }

            ;
          }

          ;
        }

        ;
      } else if (charArrayInDisplayWordJap[0].textContent === "あ" || charArrayInDisplayWordJap[0].textContent === "い" || charArrayInDisplayWordJap[0].textContent === "う" || charArrayInDisplayWordJap[0].textContent === "え" || charArrayInDisplayWordJap[0].textContent === "お") {
        var _wordLetter3 = charArrayInDisplayWordJap[0].textContent;

        if (shiftAlreadyStartedFlag === 0) {
          if (keyDownChar.key === romaMappingTable[_wordLetter3]) {
            charArrayInDisplayWordJap[0].className = "add_red";
            charArrayInDisplayWordJap.shift();
            correctTyping();
          }

          ;
        }

        ;
      } else {
        var _wordLetter4 = charArrayInDisplayWordJap[0].textContent;

        if (shiftAlreadyStartedFlag === 0) {
          charArrayInDisplayWordAlpha = romaMappingTable[_wordLetter4].split("").map(function (value) {
            var spanValue = document.createElement("span");
            spanValue.textContent = value;
            return spanValue;
          });
        }

        ;

        if (keyDownChar.key === charArrayInDisplayWordAlpha[0].textContent) {
          charArrayInDisplayWordAlpha.shift();
          shiftAlreadyStartedFlag = 1;
          correctTyping();

          if (charArrayInDisplayWordAlpha.length === 0) {
            charArrayInDisplayWordJap[0].className = "add_red";
            charArrayInDisplayWordJap.shift();
            shiftAlreadyStartedFlag = 0;
          }

          ;
        }

        ;
      }

      ;
      console.log(charArrayInDisplayWordJap);
    }

    ; // function secondCharIsSmall(){
    // };

    function correctTyping() {
      // メーターを更新する。
      bonusCountMeter = bonusCountMeter + 1; // 表示文字全てタイプした場合、スコアアップ処理を実施し、次の表示文字を作成する処理を実施する。

      if (charArrayInDisplayWordJap.length === 0) countUpScore(), createDisplayWord(); // メーターがメーター最大値以上になった場合、メーターを初期化し、プレイ可能時間を延長する。

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

      document.getElementById("meterImg").src = imgArray[bonusCountMeter];
    }

    ;

    function bonusCountReset() {
      bonusCountMeter = 0;
      document.getElementById("meterImg").src = imgArray[bonusCountMeter];
    }

    ;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=typingplay_jap-c9ba986fa6b3bb00bf43.js.map