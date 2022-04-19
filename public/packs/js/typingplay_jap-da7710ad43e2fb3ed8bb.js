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
  var _romaMappingTableFirs;

  // 表示する単語リストを定義する。
  // chromeの場合"ff"が正常に動作しない。
  var wordList = gon.wordListAll; // 表示するメーターリストを定義する。

  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10.png', '/assets/メーターPNG/メーター20.png', '/assets/メーターPNG/メーター30.png', '/assets/メーターPNG/メーター40.png', '/assets/メーターPNG/メーター50.png', '/assets/メーターPNG/メーター60.png', '/assets/メーターPNG/メーター70.png', '/assets/メーターPNG/メーター80.png', '/assets/メーターPNG/メーター90.png', '/assets/メーターPNG/メーター100.png'];
  var romaMappingTableFirst = (_romaMappingTableFirs = {
    "あ": "a",
    "い": "i",
    "う": "u",
    "え": "e",
    "お": "o",
    "か": "ka",
    "き": "ki",
    "く": "ku",
    "け": "ke",
    "こ": "ko",
    "さ": "sa",
    "し": "si",
    "す": "su",
    "せ": "se",
    "そ": "so",
    "た": "ta",
    "ち": "ti",
    "つ": "tu",
    "て": "te",
    "と": "to",
    "な": "na",
    "に": "ni",
    "ぬ": "nu",
    "ね": "ne",
    "の": "no",
    "は": "ha",
    "ひ": "hi",
    "ふ": "hu",
    "へ": "he",
    "ほ": "ho",
    "ま": "ma",
    "み": "mi",
    "む": "mu",
    "め": "me",
    "も": "mo",
    "や": "ya",
    "ゆ": "yu",
    "よ": "yo",
    "ら": "ra",
    "り": "ri",
    "る": "ru",
    "れ": "re",
    "ろ": "ro",
    "わ": "wa",
    "を": "wo",
    "が": "ga",
    "ぎ": "gi",
    "ぐ": "gu",
    "げ": "ge",
    "ご": "go",
    "ざ": "za",
    "じ": "zi",
    "ず": "zu",
    "ぜ": "ze",
    "ぞ": "zo",
    "だ": "da",
    "ぢ": "di",
    "づ": "du",
    "で": "de",
    "ど": "do",
    "ば": "ba",
    "び": "bi",
    "ぶ": "bu",
    "べ": "be",
    "ぼ": "bo",
    "ぱ": "pa",
    "ぴ": "pi",
    "ぷ": "pu",
    "ぺ": "pe",
    "ぽ": "po",
    "ぁ": "la",
    "ぃ": "li",
    "ぅ": "lu",
    "ぇ": "le",
    "ぉ": "lo",
    "ゃ": "lya",
    "ゅ": "lyu",
    "ょ": "lyo",
    "でゃ": "dha",
    "でぃ": "dhi",
    "でゅ": "dhu",
    "でぇ": "dhe",
    "でょ": "dho",
    "つぁ": "tsa",
    "つぃ": "tsi",
    "つぇ": "tse",
    "つぉ": "tso",
    "てゃ": "tha",
    "てぃ": "thi",
    "てゅ": "thu",
    "てぇ": "the",
    "てょ": "tho",
    "ふぁ": "fa",
    "ふぃ": "fi",
    "ふぇ": "fe",
    "ふぉ": "fo",
    "うぁ": "wha",
    "うぃ": "wi",
    "うぇ": "we",
    "うぉ": "who",
    "ゔぁ": "va",
    "ゔぃ": "vi",
    "ゔ": "vu",
    "ゔぇ": "ve",
    "ゔぉ": "vo",
    "きゃ": "kya",
    "きぃ": "kyi",
    "きゅ": "kyu",
    "きぇ": "kye",
    "きょ": "kyo",
    "ぎゃ": "gya",
    "ぎぃ": "gyi",
    "ぎゅ": "gyu",
    "ぎぇ": "gye",
    "ぎょ": "gyo",
    "しゃ": "sya",
    "しぃ": "syi",
    "しゅ": "syu",
    "しぇ": "sye",
    "しょ": "syo",
    "じゃ": "zya",
    "じぃ": "zyi",
    "じゅ": "zyu",
    "じぇ": "zye",
    "じょ": "zyo",
    "ちゃ": "tya",
    "ちぃ": "tyi",
    "ちゅ": "tyu",
    "ちぇ": "tye",
    "ちょ": "tyo",
    "ぢゃ": "dya",
    "ぢぃ": "dyi",
    "ぢゅ": "dyu",
    "ぢぇ": "dye",
    "ぢょ": "dyo",
    "にゃ": "nya",
    "にぃ": "nyi",
    "にゅ": "nyu",
    "にぇ": "nye",
    "にょ": "nyo",
    "ひゃ": "hya",
    "ひぃ": "hyi",
    "ひゅ": "hyu",
    "ひぇ": "hye",
    "ひょ": "hyo",
    "びゃ": "bya",
    "びぃ": "byi",
    "びゅ": "byu",
    "びぇ": "bye",
    "びょ": "byo",
    "ぴゃ": "pya",
    "ぴぃ": "pyi",
    "ぴゅ": "pyu",
    "ぴぇ": "pye",
    "ぴょ": "pyo",
    "ふゃ": "fya"
  }, _defineProperty(_romaMappingTableFirs, "\u3075\u3043", "fyi"), _defineProperty(_romaMappingTableFirs, "ふゅ", "fyu"), _defineProperty(_romaMappingTableFirs, "\u3075\u3047", "fye"), _defineProperty(_romaMappingTableFirs, "ふょ", "fyo"), _defineProperty(_romaMappingTableFirs, "みゃ", "mya"), _defineProperty(_romaMappingTableFirs, "みぃ", "myi"), _defineProperty(_romaMappingTableFirs, "みゅ", "myu"), _defineProperty(_romaMappingTableFirs, "みぇ", "mye"), _defineProperty(_romaMappingTableFirs, "みょ", "myo"), _defineProperty(_romaMappingTableFirs, "りゃ", "rya"), _defineProperty(_romaMappingTableFirs, "りぃ", "ryi"), _defineProperty(_romaMappingTableFirs, "りゅ", "ryu"), _defineProperty(_romaMappingTableFirs, "りぇ", "rye"), _defineProperty(_romaMappingTableFirs, "りょ", "ryo"), _defineProperty(_romaMappingTableFirs, "くぁ", "kwa"), _defineProperty(_romaMappingTableFirs, "ぐぁ", "gwa"), _defineProperty(_romaMappingTableFirs, "とぅ", "twu"), _defineProperty(_romaMappingTableFirs, "どぅ", "dwu"), _defineProperty(_romaMappingTableFirs, "いぇ", "ye"), _romaMappingTableFirs);
  var romaMappingTableSecond = {
    "い": "yi",
    "か": "ca",
    "く": "cu",
    "こ": "co",
    "し": "shi",
    "せ": "ce",
    "ち": "chi",
    "つ": "tsu",
    "ふ": "fu",
    "じ": "ji",
    "ぁ": "xa",
    "ぃ": "xi",
    "ぅ": "xu",
    "ぇ": "xe",
    "ぉ": "xo",
    "ゃ": "xya",
    "ゅ": "xyu",
    "ょ": "xyo",
    "しゃ": "sha",
    "しゅ": "shu",
    "しぇ": "she",
    "しょ": "sho",
    "じゃ": "ja",
    "じぃ": "jyi",
    "じゅ": "ju",
    "じぇ": "je",
    "じょ": "jo",
    "ちゃ": "cha",
    "ちぃ": "cyi",
    "ちゅ": "chu",
    "ちぇ": "che",
    "ちょ": "cho",
    "うぃ": "whi",
    "うぇ": "whe"
  };
  var romaMappingTableThird = {
    "し": "ci",
    "じゃ": "jya",
    "じゅ": "jyu",
    "じぇ": "jye",
    "じょ": "jyo",
    "ちゃ": "cya",
    "ちゅ": "cyu",
    "ちぇ": "cye",
    "ちょ": "cyo"
  }; // 表示するメーター初期値を定義する。

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

        spanValue.textContent = value;
        spanValue.className = "transparent"; // 表示する単語にspanタグで閉じた一文字を追加する。

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
    } // タイピングの正誤判定に使用する変数を定義する。


    var wordLetterWithSmallLetter = "";
    var wordLetterSole = "";
    var charArrayInDisplayWordAlphaFirst = [];
    var charArrayInDisplayWordAlphaSecond = [];
    var charArrayInDisplayWordAlphaThird = [];
    var charArrayInDisplayWordAlphaSole = [];
    var charArrayInDisplayWordAlphaSoleSecond = [];
    var charArrayInDisplayWordAlphaSoleThird = [];
    var shiftAlreadyStartedCountAll = 0;
    var shiftAlreadyStartedCountFirst = 0;
    var shiftAlreadyStartedCountSecond = 0;
    var shiftAlreadyStartedCountThird = 0;
    var shiftAlreadyStartedCountSoleFirst = 0;
    var shiftAlreadyStartedCountSoleSecond = 0;
    var shiftAlreadyStartedCountSoleThird = 0;
    var keyTempForSmallTsuPreWithNext = "";
    var keyTempForSmallTsuPreFirst = "";
    var keyTempForSmallTsuPreSecond = "";
    var keyTempForSmallTsuPreThird = "";
    var keyTempForNnPre = ""; // タイプした文字が表示文字と一致する場合の処理を定義する。

    function keyDownCharCountUp(keyDownChar) {
      if (playEndFlag === "0") {
        // 文字によって、文字列の最後にあるかどうかで入力形式が変わるため、"っ""ん"は個別に処理を定義する。
        // 先頭文字が小さい"っ"の場合
        if (charArrayInDisplayWordJap[0].textContent === "っ") {
          if (keyDownChar.key !== "a" && keyDownChar.key !== "i" && keyDownChar.key !== "e" && keyDownChar.key !== "o" && keyDownChar.key !== "n") {
            // "っ"が最後の文字ではない場合、同じキーを２回連続でタイプしてOKとする。
            if (charArrayInDisplayWordJap[1] != null) {
              // 入力対象文字に対して、入力処理が開始していない場合
              if (shiftAlreadyStartedCountAll === 0 && keyDownChar.key !== "u") {
                keyTempForSmallTsuPreWithNext = keyDownChar.key;
                shiftAlreadyStartedCountAll = 1;
                correctTyping();
              } else {
                // 同じアルファベットを入力した場合、"っ"を入力完了にし、再度keyDownCharCountUpを実施する。
                if (keyDownChar.key === keyTempForSmallTsuPreWithNext && keyDownChar.key !== "u") {
                  keyTempForSmallTsuPreWithNext = "";
                  keyTempForSmallTsuPreFirst = "";
                  keyTempForSmallTsuPreSecond = "";
                  keyTempForSmallTsuPreThird = "";
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                  correctTyping();
                  keyDownCharCountUp(keyDownChar); // 異なる場合は前回入力アルファベットに入力したアルファベットを上書き
                } else {
                  if (keyDownChar.key === "t" && (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")) {} else if ((keyDownChar.key === "u" || keyDownChar.key === "s") && keyTempForSmallTsuPreSecond === "t" && (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")) {} else {
                    bonusCountReset();
                  }

                  ;

                  if (keyDownChar.key !== "u") {
                    keyTempForSmallTsuPreWithNext = keyDownChar.key;
                  }

                  ;
                }

                ;
              }

              ;
            }

            ; // 先頭文字が小さい"っ"の場合(上記の2連続同一キータイプにより"っ"の入力処理が完了した場合に、下記処理が開始するのを防ぐために条件分岐を設定)

            if (charArrayInDisplayWordJap[0].textContent === "っ") {
              // "っ"の単独入力を可能にする。
              if (keyDownChar.key === "l" || keyDownChar.key === "x") {
                keyTempForSmallTsuPreFirst = keyDownChar.key;

                if (keyTempForSmallTsuPreWithNext !== "l" && keyTempForSmallTsuPreWithNext !== "x") {
                  correctTyping();
                }

                ;
              }

              ;

              if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x") && keyDownChar.key === "t") {
                keyTempForSmallTsuPreSecond = keyDownChar.key;
                correctTyping();
              }

              ;

              if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x") && keyTempForSmallTsuPreSecond === "t" && keyDownChar.key === "s") {
                keyTempForSmallTsuPreThird = keyDownChar.key;
                correctTyping();
              }

              ;

              if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x") && keyTempForSmallTsuPreSecond === "t" && keyDownChar.key === "u") {
                keyTempForSmallTsuPreWithNext = "";
                keyTempForSmallTsuPreFirst = "";
                keyTempForSmallTsuPreSecond = "";
                keyTempForSmallTsuPreThird = "";
                charArrayInDisplayWordJap[0].className = "add_grey";
                charArrayInDisplayWordJap.shift();
                shiftAlreadyStartedCountAll = 0;
                correctTyping();
              }

              ;
            }

            ;
          } else {
            // "a""i""e""o""n"が入力された時点でNGとする。
            bonusCountReset();
          }

          ; // 先頭文字が"ん"の場合、かつ次の文字あり、その文字が母音でない場合は "n"+"n以外の子音"でもOKとする。
          // それ以外の場合は、マッピング表の通り"nn""xn"でしか入力できない。
        } else if (charArrayInDisplayWordJap[0].textContent === "ん") {
          if (shiftAlreadyStartedCountAll === 0) {
            if (keyDownChar.key === "n" || keyDownChar.key === "x") {
              keyTempForNnPre = keyDownChar.key;
              shiftAlreadyStartedCountAll = 1;
              correctTyping();
            } else {
              bonusCountReset();
            }

            ;
          } else {
            if (keyTempForNnPre === "n") {
              if (charArrayInDisplayWordJap[1] != null) {
                if (charArrayInDisplayWordJap[1].textContent !== "あ" && charArrayInDisplayWordJap[1].textContent !== "い" && charArrayInDisplayWordJap[1].textContent !== "う" && charArrayInDisplayWordJap[1].textContent !== "え" && charArrayInDisplayWordJap[1].textContent !== "お") {
                  if (keyDownChar.key !== "a" && keyDownChar.key !== "i" && keyDownChar.key !== "u" && keyDownChar.key !== "e" && keyDownChar.key !== "o") {
                    keyTempForNnPre = "";
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                    correctTyping();

                    if (keyDownChar.key !== "n") {
                      keyDownCharCountUp(keyDownChar);
                    }

                    ;
                  } else {
                    bonusCountReset();
                  }

                  ;
                }

                ;
              } else {
                if (keyDownChar.key === "n") {
                  keyTempForNnPre = "";
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                  correctTyping();
                } else {
                  bonusCountReset();
                }

                ;
              }

              ;
            } else if (keyTempForNnPre === "x") {
              if (keyDownChar.key === "n") {
                keyTempForNnPre = "";
                charArrayInDisplayWordJap[0].className = "add_grey";
                charArrayInDisplayWordJap.shift();
                shiftAlreadyStartedCountAll = 0;
                correctTyping();
              } else {
                bonusCountReset();
              }

              ;
            }

            ;
          }

          ; // "っ""ん"以外の文字の場合
        } else {
          // 入力対象文字をアルファベットに分解する。
          // 入力対象文字に対して、入力処理が開始していない場合
          if (shiftAlreadyStartedCountAll === 0) {
            // 2文字目が存在する場合(最後の文字でない場合)
            if (charArrayInDisplayWordJap[1] != null) {
              // 2文字を一緒に入力するパターンに対応する処理を定義する。
              wordLetterWithSmallLetter = charArrayInDisplayWordJap[0].textContent + charArrayInDisplayWordJap[1].textContent; // 文字をローマ字に変換し、アルファベットごとに分ける。
              // 2文字に対して、ローマ字変換パターン１をsplitする。

              if (romaMappingTableFirst[wordLetterWithSmallLetter] != null) {
                charArrayInDisplayWordAlphaFirst = romaMappingTableFirst[wordLetterWithSmallLetter].split("").map(function (value) {
                  var spanValue = document.createElement("span");
                  spanValue.textContent = value;
                  return spanValue;
                });
              }

              ; // 2文字に対してローマ字変換パターン２が存在する場合はsplitする。

              if (romaMappingTableSecond[wordLetterWithSmallLetter] != null) {
                charArrayInDisplayWordAlphaSecond = romaMappingTableSecond[wordLetterWithSmallLetter].split("").map(function (value) {
                  var spanValue = document.createElement("span");
                  spanValue.textContent = value;
                  return spanValue;
                });
              }

              ; // 2文字に対してローマ字変換パターン３が存在する場合はsplitする。

              if (romaMappingTableThird[wordLetterWithSmallLetter] != null) {
                charArrayInDisplayWordAlphaThird = romaMappingTableThird[wordLetterWithSmallLetter].split("").map(function (value) {
                  var spanValue = document.createElement("span");
                  spanValue.textContent = value;
                  return spanValue;
                });
              }

              ;
            }

            ; // 1文字のみを先に入力するパターンに対応する処理を定義する。

            wordLetterSole = charArrayInDisplayWordJap[0].textContent; // 1文字目のみ対して、ローマ字変換パターン１をsplitする。
            // 母音の場合はsplit不可のため処理を分ける。

            if (wordLetterSole !== "あ" && wordLetterSole !== "い" && wordLetterSole !== "う" && wordLetterSole !== "え" && wordLetterSole !== "お") {
              charArrayInDisplayWordAlphaSole = romaMappingTableFirst[wordLetterSole].split("").map(function (value) {
                var spanValue = document.createElement("span");
                spanValue.textContent = value;
                return spanValue;
              });
            } else {
              var spanValue = document.createElement("span");
              spanValue.textContent = romaMappingTableFirst[wordLetterSole];
              charArrayInDisplayWordAlphaSole = [spanValue];
            }

            ; // 1文字目のみ対してローマ字変換パターン２が存在する場合はsplitする。

            if (romaMappingTableSecond[wordLetterSole] != null) {
              charArrayInDisplayWordAlphaSoleSecond = romaMappingTableSecond[wordLetterSole].split("").map(function (value) {
                var spanValue = document.createElement("span");
                spanValue.textContent = value;
                return spanValue;
              });
            }

            ; // 1文字目のみ対してローマ字変換パターン３が存在する場合はsplitする。

            if (romaMappingTableThird[wordLetterSole] != null) {
              charArrayInDisplayWordAlphaSoleThird = romaMappingTableThird[wordLetterSole].split("").map(function (value) {
                var spanValue = document.createElement("span");
                spanValue.textContent = value;
                return spanValue;
              });
            }

            ;
          }

          ; // 文字入力によるアルファベットに対する処理を開始する。
          // 文字の入力開始前である場合

          if (shiftAlreadyStartedCountAll === 0) {
            // 2文字目が存在する場合(最後の文字でない場合)
            if (charArrayInDisplayWordJap[1] != null) {
              // 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
              if (romaMappingTableFirst[wordLetterWithSmallLetter] != null) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
                  charArrayInDisplayWordAlphaFirst.shift();
                  shiftAlreadyStartedCountAll = 1;
                  shiftAlreadyStartedCountFirst = 1;

                  if (charArrayInDisplayWordAlphaFirst.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap[1].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン２に該当する場合

              if (romaMappingTableSecond[wordLetterWithSmallLetter] != null) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent) {
                  charArrayInDisplayWordAlphaSecond.shift();
                  shiftAlreadyStartedCountAll = 1;
                  shiftAlreadyStartedCountSecond = 1;

                  if (charArrayInDisplayWordAlphaSecond.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap[1].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン３に該当する場合

              if (romaMappingTableThird[wordLetterWithSmallLetter] != null) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent) {
                  charArrayInDisplayWordAlphaThird.shift();
                  shiftAlreadyStartedCountAll = 1;
                  shiftAlreadyStartedCountThird = 1;

                  if (charArrayInDisplayWordAlphaThird.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap[1].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合

            if (keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
              charArrayInDisplayWordAlphaSole.shift();
              shiftAlreadyStartedCountAll = 1;
              shiftAlreadyStartedCountSoleFirst = 1;

              if (charArrayInDisplayWordAlphaSole.length === 0) {
                charArrayInDisplayWordJap[0].className = "add_grey";
                charArrayInDisplayWordJap.shift();
                shiftAlreadyStartedCountAll = 0;
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合

            if (romaMappingTableSecond[wordLetterSole] != null) {
              if (keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent && charArrayInDisplayWordAlphaSole.length !== 0) {
                charArrayInDisplayWordAlphaSoleSecond.shift();
                shiftAlreadyStartedCountAll = 1;
                shiftAlreadyStartedCountSoleSecond = 1;

                if (charArrayInDisplayWordAlphaSoleSecond.length === 0) {
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合

            if (romaMappingTableThird[wordLetterSole] != null) {
              if (keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent && charArrayInDisplayWordAlphaSole.length !== 0 && charArrayInDisplayWordAlphaSoleSecond.length !== 0) {
                charArrayInDisplayWordAlphaSoleThird.shift();
                shiftAlreadyStartedCountAll = 1;
                shiftAlreadyStartedCountSoleThird = 1;

                if (charArrayInDisplayWordAlphaSoleThird.length === 0) {
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                }
              }
            }

            ; // タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合

            if (shiftAlreadyStartedCountFirst === 1 || shiftAlreadyStartedCountSecond === 1 || shiftAlreadyStartedCountThird === 1 || shiftAlreadyStartedCountSoleFirst === 1 || shiftAlreadyStartedCountSoleSecond === 1 || shiftAlreadyStartedCountSoleThird === 1) {
              correctTyping();
            } else {
              bonusCountReset();
            }

            ; // 文字入力が完了している場合、カウントを0にする。

            if (shiftAlreadyStartedCountAll === 0) {
              shiftAlreadyStartedCountFirst = 0;
              shiftAlreadyStartedCountSecond = 0;
              shiftAlreadyStartedCountThird = 0;
              shiftAlreadyStartedCountSoleFirst = 0;
              shiftAlreadyStartedCountSoleSecond = 0;
              shiftAlreadyStartedCountSoleThird = 0;
            }

            ; // すでに1つのアルファベットを入力済みの場合
          } else if (shiftAlreadyStartedCountAll === 1) {
            // 2文字目が存在する場合(最後の文字でない場合)
            if (charArrayInDisplayWordJap[1] != null) {
              // 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
              if (shiftAlreadyStartedCountFirst === 1) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
                  charArrayInDisplayWordAlphaFirst.shift();
                  shiftAlreadyStartedCountAll = 2;
                  shiftAlreadyStartedCountFirst = 2;

                  if (charArrayInDisplayWordAlphaFirst.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap[1].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン２に該当する場合

              if (romaMappingTableSecond[wordLetterWithSmallLetter] != null) {
                if (shiftAlreadyStartedCountSecond === 1) {
                  if (keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent) {
                    charArrayInDisplayWordAlphaSecond.shift();
                    shiftAlreadyStartedCountAll = 2;
                    shiftAlreadyStartedCountSecond = 2;

                    if (charArrayInDisplayWordAlphaSecond.length === 0) {
                      charArrayInDisplayWordJap[0].className = "add_grey";
                      charArrayInDisplayWordJap[1].className = "add_grey";
                      charArrayInDisplayWordJap.shift();
                      charArrayInDisplayWordJap.shift();
                      shiftAlreadyStartedCountAll = 0;
                    }
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン３に該当する場合

              if (romaMappingTableThird[wordLetterWithSmallLetter] != null) {
                if (shiftAlreadyStartedCountThird === 1) {
                  if (keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent) {
                    charArrayInDisplayWordAlphaThird.shift();
                    shiftAlreadyStartedCountAll = 2;
                    shiftAlreadyStartedCountThird = 2;

                    if (charArrayInDisplayWordAlphaThird.length === 0) {
                      charArrayInDisplayWordJap[0].className = "add_grey";
                      charArrayInDisplayWordJap[1].className = "add_grey";
                      charArrayInDisplayWordJap.shift();
                      charArrayInDisplayWordJap.shift();
                      shiftAlreadyStartedCountAll = 0;
                    }
                  }
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合

            if (shiftAlreadyStartedCountSoleFirst === 1) {
              if (keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
                charArrayInDisplayWordAlphaSole.shift();
                shiftAlreadyStartedCountAll = 2;
                shiftAlreadyStartedCountSoleFirst = 2;

                if (charArrayInDisplayWordAlphaSole.length === 0) {
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合

            if (romaMappingTableSecond[wordLetterSole] != null) {
              if (shiftAlreadyStartedCountSoleSecond === 1) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent) {
                  charArrayInDisplayWordAlphaSoleSecond.shift();
                  shiftAlreadyStartedCountAll = 2;
                  shiftAlreadyStartedCountSoleSecond = 2;

                  if (charArrayInDisplayWordAlphaSoleSecond.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合

            if (romaMappingTableThird[wordLetterSole] != null) {
              if (shiftAlreadyStartedCountSoleThird === 1) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent) {
                  charArrayInDisplayWordAlphaSoleThird.shift();
                  shiftAlreadyStartedCountAll = 2;
                  shiftAlreadyStartedCountSoleThird = 2;

                  if (charArrayInDisplayWordAlphaSoleThird.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }
            }

            ; // タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合

            if (shiftAlreadyStartedCountFirst === 2 || shiftAlreadyStartedCountSecond === 2 || shiftAlreadyStartedCountThird === 2 || shiftAlreadyStartedCountSoleFirst === 2 || shiftAlreadyStartedCountSoleSecond === 2 || shiftAlreadyStartedCountSoleThird === 2) {
              correctTyping();
            } else {
              bonusCountReset();
            }

            ; // 文字入力が完了している場合、カウントを0にする。

            if (shiftAlreadyStartedCountAll === 0) {
              shiftAlreadyStartedCountFirst = 0;
              shiftAlreadyStartedCountSecond = 0;
              shiftAlreadyStartedCountThird = 0;
              shiftAlreadyStartedCountSoleFirst = 0;
              shiftAlreadyStartedCountSoleSecond = 0;
              shiftAlreadyStartedCountSoleThird = 0;
            }

            ; // すでに2つのアルファベットを入力済みの場合
          } else if (shiftAlreadyStartedCountAll === 2) {
            // 2文字目が存在する場合(最後の文字でない場合)
            if (charArrayInDisplayWordJap[1] != null) {
              // 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
              if (shiftAlreadyStartedCountFirst === 2) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
                  charArrayInDisplayWordAlphaFirst.shift();
                  shiftAlreadyStartedCountAll = 3;
                  shiftAlreadyStartedCountFirst = 3;

                  if (charArrayInDisplayWordAlphaFirst.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap[1].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン２に該当する場合

              if (romaMappingTableSecond[wordLetterWithSmallLetter] != null) {
                if (shiftAlreadyStartedCountSecond === 2) {
                  if (keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent) {
                    charArrayInDisplayWordAlphaSecond.shift();
                    shiftAlreadyStartedCountAll = 3;
                    shiftAlreadyStartedCountSecond = 3;

                    if (charArrayInDisplayWordAlphaSecond.length === 0) {
                      charArrayInDisplayWordJap[0].className = "add_grey";
                      charArrayInDisplayWordJap[1].className = "add_grey";
                      charArrayInDisplayWordJap.shift();
                      charArrayInDisplayWordJap.shift();
                      shiftAlreadyStartedCountAll = 0;
                    }
                  }
                }
              }

              ; // 2文字に対してタイプキーがローマ字変換パターン３に該当する場合

              if (romaMappingTableThird[wordLetterWithSmallLetter] != null) {
                if (shiftAlreadyStartedCountThird === 2) {
                  if (keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent) {
                    charArrayInDisplayWordAlphaThird.shift();
                    shiftAlreadyStartedCountAll = 3;
                    shiftAlreadyStartedCountThird = 3;

                    if (charArrayInDisplayWordAlphaThird.length === 0) {
                      charArrayInDisplayWordJap[0].className = "add_grey";
                      charArrayInDisplayWordJap[1].className = "add_grey";
                      charArrayInDisplayWordJap.shift();
                      charArrayInDisplayWordJap.shift();
                      shiftAlreadyStartedCountAll = 0;
                    }
                  }
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合

            if (shiftAlreadyStartedCountSoleFirst === 2) {
              if (keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
                charArrayInDisplayWordAlphaSole.shift();
                shiftAlreadyStartedCountAll = 3;
                shiftAlreadyStartedCountSoleFirst = 3;

                if (charArrayInDisplayWordAlphaSole.length === 0) {
                  charArrayInDisplayWordJap[0].className = "add_grey";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合

            if (romaMappingTableSecond[wordLetterSole] != null) {
              if (shiftAlreadyStartedCountSoleSecond === 2) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent) {
                  charArrayInDisplayWordAlphaSoleSecond.shift();
                  shiftAlreadyStartedCountAll = 3;
                  shiftAlreadyStartedCountSoleSecond = 3;

                  if (charArrayInDisplayWordAlphaSoleSecond.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }
            }

            ; // 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合

            if (romaMappingTableThird[wordLetterSole] != null) {
              if (shiftAlreadyStartedCountSoleThird === 2) {
                if (keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent) {
                  charArrayInDisplayWordAlphaSoleThird.shift();
                  shiftAlreadyStartedCountAll = 3;
                  shiftAlreadyStartedCountSoleThird = 3;

                  if (charArrayInDisplayWordAlphaSoleThird.length === 0) {
                    charArrayInDisplayWordJap[0].className = "add_grey";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                  }
                }
              }
            }

            ; // タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合

            if (shiftAlreadyStartedCountFirst === 3 || shiftAlreadyStartedCountSecond === 3 || shiftAlreadyStartedCountThird === 3 || shiftAlreadyStartedCountSoleFirst === 3 || shiftAlreadyStartedCountSoleSecond === 3 || shiftAlreadyStartedCountSoleThird === 3) {
              correctTyping();
            } else {
              bonusCountReset();
            }

            ; // 文字入力が完了している場合、カウントを0にする。

            if (shiftAlreadyStartedCountAll === 0) {
              shiftAlreadyStartedCountFirst = 0;
              shiftAlreadyStartedCountSecond = 0;
              shiftAlreadyStartedCountThird = 0;
              shiftAlreadyStartedCountSoleFirst = 0;
              shiftAlreadyStartedCountSoleSecond = 0;
              shiftAlreadyStartedCountSoleThird = 0;
            }

            ;
          }
        }
      }
    }

    ;

    function correctTyping() {
      // メーターを更新する。
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

      if (charArrayInDisplayWordJap.length === 0) {
        countUpScore();
        document.getElementById("circleImg").src = '/assets/正解○.png';
        circleImg.classList.add('circle'); //setTimeout(createDisplayWord,200);

        setTimeout(function () {
          createDisplayWord; //document.getElementById("circleImg").src.remove('circle');
        }, 200);
      }

      ;
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
//# sourceMappingURL=typingplay_jap-da7710ad43e2fb3ed8bb.js.map