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

// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function () {
  // Enterを押下するとゲーム開始のカウントダウンがスタートする処理を呼び出す。
  document.addEventListener("keydown", keyDownGameStart);
}); // スペースかEnterキー押下によるゲームスタートを一回限りとするフラグを設定する。

var gameStartEnterOnlyOnce = "0"; // Enterを押下するとゲーム開始のカウントダウンがスタートする。

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

var playMode = gon.playMode; // 英単語の発音有無の設定によって変わるpronounceModeの定義

var pronounceMode = gon.pronounceMode; // 出題順の設定によって変わるpronounceModeの定義

var questionOrderMode = gon.questionOrderMode; // BGMの設定によって変わるbgmModeの定義

var bgmMode = gon.bgmMode; // タイプ音の設定によって変わるtypeAudioModeの定義

var typeAudioMode = gon.typeAudioMode; // 正解音の設定によって変わるcorrectAudioModeの定義

var correctAudioMode = gon.correctAudioMode; // ミス音の設定によって変わるincorrectAudioModeの定義

var incorrectAudioMode = gon.incorrectAudioMode;

function gameStart() {
  var _romaMappingTableFirs;

  // 表示する単語リストを定義する。
  // chromeの場合"ff"が正常に動作しない。
  // 表示するメーターリストを定義する。
  var imgArray = ['/assets/メーターPNG/メーター0.png', '/assets/メーターPNG/メーター10_yellow.png', '/assets/メーターPNG/メーター20_yellow.png', '/assets/メーターPNG/メーター30_yellow.png', '/assets/メーターPNG/メーター40_yellow.png', '/assets/メーターPNG/メーター50_yellow.png', '/assets/メーターPNG/メーター60_yellow.png', '/assets/メーターPNG/メーター70_yellow.png', '/assets/メーターPNG/メーター80_yellow.png', '/assets/メーターPNG/メーター90_yellow.png', '/assets/メーターPNG/メーター100_yellow.png', '/assets/メーターPNG/メーター10_green.png', '/assets/メーターPNG/メーター20_green.png', '/assets/メーターPNG/メーター30_green.png', '/assets/メーターPNG/メーター40_green.png', '/assets/メーターPNG/メーター50_green.png', '/assets/メーターPNG/メーター60_green.png', '/assets/メーターPNG/メーター70_green.png', '/assets/メーターPNG/メーター80_green.png', '/assets/メーターPNG/メーター90_green.png', '/assets/メーターPNG/メーター100_green.png', '/assets/メーターPNG/メーター10_blue.png', '/assets/メーターPNG/メーター20_blue.png', '/assets/メーターPNG/メーター30_blue.png', '/assets/メーターPNG/メーター40_blue.png', '/assets/メーターPNG/メーター50_blue.png', '/assets/メーターPNG/メーター60_blue.png', '/assets/メーターPNG/メーター70_blue.png', '/assets/メーターPNG/メーター80_blue.png', '/assets/メーターPNG/メーター90_blue.png', '/assets/メーターPNG/メーター100_blue.png', '/assets/メーターPNG/メーター10_pink.png', '/assets/メーターPNG/メーター20_pink.png', '/assets/メーターPNG/メーター30_pink.png', '/assets/メーターPNG/メーター40_pink.png', '/assets/メーターPNG/メーター50_pink.png', '/assets/メーターPNG/メーター60_pink.png', '/assets/メーターPNG/メーター70_pink.png', '/assets/メーターPNG/メーター80_pink.png', '/assets/メーターPNG/メーター90_pink.png', '/assets/メーターPNG/メーター100_pink.png', '/assets/メーターPNG/メーター10_red.png', '/assets/メーターPNG/メーター20_red.png', '/assets/メーターPNG/メーター30_red.png', '/assets/メーターPNG/メーター40_red.png', '/assets/メーターPNG/メーター50_red.png', '/assets/メーターPNG/メーター60_red.png', '/assets/メーターPNG/メーター70_red.png', '/assets/メーターPNG/メーター80_red.png', '/assets/メーターPNG/メーター90_red.png', '/assets/メーターPNG/メーター100_red.png'];
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
  }, _defineProperty(_romaMappingTableFirs, "\u3075\u3043", "fyi"), _defineProperty(_romaMappingTableFirs, "ふゅ", "fyu"), _defineProperty(_romaMappingTableFirs, "\u3075\u3047", "fye"), _defineProperty(_romaMappingTableFirs, "ふょ", "fyo"), _defineProperty(_romaMappingTableFirs, "みゃ", "mya"), _defineProperty(_romaMappingTableFirs, "みぃ", "myi"), _defineProperty(_romaMappingTableFirs, "みゅ", "myu"), _defineProperty(_romaMappingTableFirs, "みぇ", "mye"), _defineProperty(_romaMappingTableFirs, "みょ", "myo"), _defineProperty(_romaMappingTableFirs, "りゃ", "rya"), _defineProperty(_romaMappingTableFirs, "りぃ", "ryi"), _defineProperty(_romaMappingTableFirs, "りゅ", "ryu"), _defineProperty(_romaMappingTableFirs, "りぇ", "rye"), _defineProperty(_romaMappingTableFirs, "りょ", "ryo"), _defineProperty(_romaMappingTableFirs, "くぁ", "kwa"), _defineProperty(_romaMappingTableFirs, "ぐぁ", "gwa"), _defineProperty(_romaMappingTableFirs, "とぅ", "twu"), _defineProperty(_romaMappingTableFirs, "どぅ", "dwu"), _defineProperty(_romaMappingTableFirs, "いぇ", "ye"), _defineProperty(_romaMappingTableFirs, "ー", "-"), _romaMappingTableFirs);
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
  }; // タイピングの正誤判定に使用する変数を定義する。

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
  var keyTempForNnPre = ""; // 英単語を順番に出題する場合の番号の初期値を定義する。

  var sortById = 0; // 表示するメーター初期値を定義する。

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
      clearInterval(timerIdToStart);
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
    var displayWordEnglish = document.getElementById("displayWordEnglish");
    displayWordEnglish.className = "displayWordEnglish";
    var displayWordKanji = document.getElementById("displayWordKanji");
    displayWordKanji.className = "displayWordKanji"; // 表示する単語を一文字ずつに分ける変数を定義する。

    var charArrayInDisplayWordJap = []; // ゲーム終了を判定するフラグを定義する。

    var playEndFlag = "0"; // 「答えを見る」ボタン押下有無を判定するフラグを定義する。

    var answerOpenFlag = "0"; // 表示する単語を作成する。

    createDisplayWord(); // プレイ開始時間を取得する。

    var startTime = Date.now(); // 表示する残りのプレイ可能時間を定義する。

    var remainPlayingTime = document.getElementById("remainPlayingTime");
    remainPlayingTime.className = "remainPlayingTime"; // 表示するスタート時のプレイ可能時間を定義する。--------------------------------------------------------------

    var initialPlayingTimeMSec = 300000; // スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。

    setTimeout(countDownTime, 0); // 1秒ごとにプレイ時間のcountDownTimeを実施するように定義する。

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
        charArrayInDisplayWordJap[0].classList.remove('transparent');
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
        for (var i = 0; i < charArrayInDisplayWordJap.length; i++) {
          charArrayInDisplayWordJap[i].classList.remove('transparent');
        }

        displayWordKanji.className = "displayWordKanji"; // 連続正解数を0に戻す。

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
    // 表示するスコアを定義する。

    var displayScoreEntire = document.getElementById("displayScoreEntire");
    displayScoreEntire.className = "displayScoreEntire";
    var displayScore = document.getElementById("displayScore");
    displayScore.className = "displayScore";
    var displayP = document.getElementById("displayP");
    displayP.className = "displayP"; // 合計スコアの初期値を定義する。

    var totalScore = 0; // スコアアップする基準を定義する。

    var refTextLengthForCountUpLevel1 = 4;
    var addScoreLevel1 = 50;
    var addScoreLevel2 = 50; // 表示する正解数全体のクラス

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

    document.addEventListener("keydown", keyDownCharCountUp); // 表示する単語を作成する処理を定義する。

    function createDisplayWord() {
      // すでにゲームが終了している場合、新規ワードを生成しない。ゲーム中のみ生成する。
      // ギリギリで問題に正解した場合、○を表示した後、200m秒後にワードを生成する処理が走るため。
      if (playEndFlag === "0") {
        // 表示単語を初期化する。
        displayWord.textContent = ""; // 出題順の設定により、displayWordInListを変更

        if (questionOrderMode == "番号順") {
          // 英単語を順番に出題する場合の番号の初期値を定義する。
          displayWordInList = wordList[sortById];
          sortById++; // // sortByIdが出題英単語数を超えた場合、初期値に戻す。

          if (sortById >= wordList.length) {
            sortById = 0;
          }

          ;
        } else {
          // 出題順がランダムの場合
          // 0〜textListsの総数間で整数値をランダムで算出する。
          var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); //let randomIntegerInTotalWordList = Math.floor(Math.random() * 2);
          // 表示する単語をランダムで選定する。

          displayWordInList = wordList[randomIntegerInTotalWordList];
        } // 英単語を生成した際に、発音させる。（発音ありの場合のみ）


        if (pronounceMode == "発音あり") {
          pronounce(displayWordInList.eng_word);
        }

        ; // 英単語を表示させる。

        displayWordEnglish.textContent = displayWordInList.eng_word; // 日本語訳(漢字)を表示させる。

        displayWordKanji.textContent = displayWordInList.jap_trans_1; // プレイモード練習の時は、答えとして漢字を表示させ、普通、タイムアタックでは非表示にする。

        if (playMode == "練習") {
          displayWordKanji.className = "displayWordKanji";
        } else if (playMode == "普通" || playMode == "タイムアタック") {
          displayWordKanji.className = "transparent";
        } else {
          displayWordKanji.className = "transparent";
        } // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
        // spanタグで閉じた単語を表示する。


        charArrayInDisplayWordJap = displayWordInList.jap_trans_1_yomi.split("").map(function (value) {
          // spanタグを作成する。
          var spanValue = document.createElement("span"); // spanタグに一文字を挿入する。

          spanValue.textContent = value; // 各文字（ひらがな）に対して、transparentクラスを付与する。（プレイモード普通、タイムアタックのときのみ）

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

    ; // プレイ時間をカウントダウンする処理を定義する。

    function countDownTime() {
      var currentTime = Date.now();
      var diffBetweenCurrentTimeAndStartTime = currentTime - startTime;
      var remainMSec = initialPlayingTimeMSec - diffBetweenCurrentTimeAndStartTime;
      var remainAllSec = Math.ceil(remainMSec / 1000);
      var remainMin = Math.floor(remainAllSec / 60);
      var remainSec = Math.ceil(remainAllSec % 60);
      var remainSecLabel = "\u6B8B\u308A".concat("".concat(remainMin).slice(-1), "\u5206").concat("0".concat(remainSec).slice(-2), "\u79D2");

      if (remainMSec <= 0) {
        // ゲーム終了後にplayEndFlagを1に更新する。
        playEndFlag = "1"; // プレイ時間のカウントダウンを止める。

        clearInterval(timerId); // 残り時間の表示を消す。

        remainSecLabel = ""; // 現在のスコア（左上）の表示を消す。

        displayScoreEntire.className = "transparent";
        displayScore.className = "transparent";
        displayP.className = "transparent"; //正解数全体のクラスを非表示にする。

        NumCorrectMidGamePlay.className = "transparent"; // 正解数の表示を消す。

        displayNumCorrectWord.className = "transparent";
        displayNumCorrectNum.className = "transparent"; // 連続正解数の表示を消す。

        displayConsecutiveNumCorrectWord.className = "transparent";
        displayConsecutiveNumCorrectNum.className = "transparent"; // 最高連続正解数の表示を消す。

        displayMaxConsecutiveNumCorrectWord.className = "transparent";
        displayMaxConsecutiveNumCorrectNum.className = "transparent"; // 問題の英単語の表示を消す。

        displayWordEnglish.textContent = ""; // 解答の日本語の表示を消す。

        displayWord.textContent = ""; // 解答の日本語訳の漢字の表示を消す。

        displayWordKanji.textContent = ""; // 発音を聞くボタンを消す。

        pronounceAgainButton.className = "transparent"; // ヒントを見るボタンを消す。

        hintButton.className = "transparent"; // 答えを見るボタンを消す。

        answerButton.className = "transparent"; // "最初からやり直す"ボタンを消す。

        restartButtonMidGame.className = "transparent"; // "コース選択画面に戻る"ボタンを消す。

        courseSettingBackButtonMidGame.className = "transparent"; // 正解時に表示される○の画像を消す。

        circleImg.className = "transparent"; // ゲーム終了後に終了を知らせるポップアップを作成する。
        // ゲーム終了を知らせるポップアップを定義する。

        var closePopup = document.getElementById("closePopup");
        closePopup.textContent = "終了";
        closePopup.className = "closePopup"; // もう一度ボタンを定義する。

        var restartBtn = document.getElementById("restartBtn"); // 戻るボタンを定義する。

        var backBtn = document.getElementById("backBtn"); // 2秒後に得点を表示させる。また、もう一度ボタンと戻るボタンを表示させる。

        setTimeout(function () {
          // 得点の表示
          closePopup.textContent = "\u3042\u306A\u305F\u306E\u5F97\u70B9\u306F".concat(totalScore.toLocaleString(), "\u70B9\u3067\u3059!");
          closePopup.className = "endResultPopup"; // もう一度ボタンの表示（transparentを消して表示させる）

          restartBtn.classList.remove('transparent'); // 戻るボタンの表示（transparentを消して表示させる）

          backBtn.classList.remove('transparent');
        }, 2000);
      } // 残りプレイ可能時間を更新する。


      remainPlayingTime.textContent = remainSecLabel;
    }

    ; // スコアをアップし、現在のtotalScoreを表示する処理を定義する。

    function countUpScore() {
      if (displayWord.textContent.length < refTextLengthForCountUpLevel1) {
        addPoint = addScoreLevel1;
      } else {
        addPoint = addScoreLevel2;
      }

      ; // 合計得点を定義する。

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
            self.text(countNext); //

            if (countNext == countMax) {
              clearInterval(countTimer);
            }
          }, countSpeed);
        }

        ;
      });
    }

    ; // 正解数をカウントアップする処理を定義する。

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

    ; // // タイピングの正誤判定に使用する変数を定義する。
    // let wordLetterWithSmallLetter = "";
    // let wordLetterSole = "";
    // let charArrayInDisplayWordAlphaFirst = [];
    // let charArrayInDisplayWordAlphaSecond = [];
    // let charArrayInDisplayWordAlphaThird = [];
    // let charArrayInDisplayWordAlphaSole = [];
    // let charArrayInDisplayWordAlphaSoleSecond = [];
    // let charArrayInDisplayWordAlphaSoleThird = [];
    // let shiftAlreadyStartedCountAll = 0;
    // let shiftAlreadyStartedCountFirst = 0;
    // let shiftAlreadyStartedCountSecond = 0;
    // let shiftAlreadyStartedCountThird = 0;
    // let shiftAlreadyStartedCountSoleFirst = 0;
    // let shiftAlreadyStartedCountSoleSecond = 0;
    // let shiftAlreadyStartedCountSoleThird = 0;
    // let keyTempForSmallTsuPreWithNext = "";
    // let keyTempForSmallTsuPreFirst = "";
    // let keyTempForSmallTsuPreSecond = "";
    // let keyTempForSmallTsuPreThird = "";
    // let keyTempForNnPre = "";
    // タイプした文字が表示文字と一致する場合の処理を定義する。

    function keyDownCharCountUp(keyDownChar) {
      if (playEndFlag === "0") {
        // 文字によって、文字列の最後にあるかどうかで入力形式が変わるため、"っ""ん"は個別に処理を定義する。
        // 先頭文字が小さい"っ"の場合
        // uはxtsuなどで"っ"を打ち込めるため、条件分岐要。
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
                  charArrayInDisplayWordJap[0].className = "add_red";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                  correctTyping();
                  keyDownCharCountUp(keyDownChar); // 異なる場合は前回入力アルファベットに入力したアルファベットを上書き
                } else {
                  if (keyDownChar.key === "t" && (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")) {} else if ((keyDownChar.key === "u" || keyDownChar.key === "s") && keyTempForSmallTsuPreSecond === "t" && (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")) {} else {
                    typeMissAudio();
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
                charArrayInDisplayWordJap[0].className = "add_red";
                charArrayInDisplayWordJap.shift();
                shiftAlreadyStartedCountAll = 0;
                correctTyping();
              }

              ;
            }

            ;
          } else {
            // "a""i""e""o""n"が入力された時点でNGとする。
            typeMissAudio();
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
              typeMissAudio();
            }

            ;
          } else {
            if (keyTempForNnPre === "n") {
              if (charArrayInDisplayWordJap[1] != null) {
                if (charArrayInDisplayWordJap[1].textContent !== "あ" && charArrayInDisplayWordJap[1].textContent !== "い" && charArrayInDisplayWordJap[1].textContent !== "う" && charArrayInDisplayWordJap[1].textContent !== "え" && charArrayInDisplayWordJap[1].textContent !== "お") {
                  if (keyDownChar.key !== "a" && keyDownChar.key !== "i" && keyDownChar.key !== "u" && keyDownChar.key !== "e" && keyDownChar.key !== "o" && keyDownChar.key !== "y") {
                    keyTempForNnPre = "";
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                    correctTyping();

                    if (keyDownChar.key !== "n") {
                      keyDownCharCountUp(keyDownChar);
                    }

                    ;
                  } else {
                    typeMissAudio();
                  }

                  ;
                } else {
                  if (keyDownChar.key !== "a" && keyDownChar.key !== "i" && keyDownChar.key !== "u" && keyDownChar.key !== "e" && keyDownChar.key !== "o" && keyDownChar.key !== "y") {
                    keyTempForNnPre = "";
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap.shift();
                    shiftAlreadyStartedCountAll = 0;
                    correctTyping();

                    if (keyDownChar.key !== "n") {
                      keyDownCharCountUp(keyDownChar);
                    }

                    ;
                  } else {
                    typeMissAudio();
                  }

                  ;
                }

                ;
              } else {
                if (keyDownChar.key === "n") {
                  keyTempForNnPre = "";
                  charArrayInDisplayWordJap[0].className = "add_red";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                  correctTyping();
                } else {
                  typeMissAudio();
                }

                ;
              }

              ;
            } else if (keyTempForNnPre === "x") {
              if (keyDownChar.key === "n") {
                keyTempForNnPre = "";
                charArrayInDisplayWordJap[0].className = "add_red";
                charArrayInDisplayWordJap.shift();
                shiftAlreadyStartedCountAll = 0;
                correctTyping();
              } else {
                typeMissAudio();
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
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap[1].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap[1].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap[1].className = "add_red";
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
                charArrayInDisplayWordJap[0].className = "add_red";
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
                  charArrayInDisplayWordJap[0].className = "add_red";
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
                  charArrayInDisplayWordJap[0].className = "add_red";
                  charArrayInDisplayWordJap.shift();
                  shiftAlreadyStartedCountAll = 0;
                }
              }
            }

            ; // タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合

            if (shiftAlreadyStartedCountFirst === 1 || shiftAlreadyStartedCountSecond === 1 || shiftAlreadyStartedCountThird === 1 || shiftAlreadyStartedCountSoleFirst === 1 || shiftAlreadyStartedCountSoleSecond === 1 || shiftAlreadyStartedCountSoleThird === 1) {
              correctTyping();
            } else {
              typeMissAudio();
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
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap[1].className = "add_red";
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
                      charArrayInDisplayWordJap[0].className = "add_red";
                      charArrayInDisplayWordJap[1].className = "add_red";
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
                      charArrayInDisplayWordJap[0].className = "add_red";
                      charArrayInDisplayWordJap[1].className = "add_red";
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
                  charArrayInDisplayWordJap[0].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
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
              typeMissAudio();
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
                    charArrayInDisplayWordJap[0].className = "add_red";
                    charArrayInDisplayWordJap[1].className = "add_red";
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
                      charArrayInDisplayWordJap[0].className = "add_red";
                      charArrayInDisplayWordJap[1].className = "add_red";
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
                      charArrayInDisplayWordJap[0].className = "add_red";
                      charArrayInDisplayWordJap[1].className = "add_red";
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
                  charArrayInDisplayWordJap[0].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
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
                    charArrayInDisplayWordJap[0].className = "add_red";
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
              typeMissAudio();
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

    ; // タイプした文字が解答文字と一致する場合の共通処理を定義する。

    function correctTyping() {
      // タイプ音を定義する。
      // タイプ音ありの場合のみ
      if (typeAudioMode == "タイプ音あり") {
        var _typeAudioMode = new Audio('/assets/typeAudio.mp3'); // タイプ音を発生させる。


        _typeAudioMode.volume = 0.3;

        _typeAudioMode.play();
      }

      ; // メーターを更新する。

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
        // 正解音を定義する。
        // 正解音ありの場合のみ
        if (correctAudioMode == "正解音あり") {
          var correctAudio = new Audio('/assets/correctAudio.mp3'); // 正解した場合、効果音を発生させる。

          correctAudio.volume = 0.3;
          correctAudio.play();
        }

        ; // 「答えを見る」を押していなければ、スコアと正解数をカウントアップする。

        if (answerOpenFlag == "0") {
          countUpScore();
          countUpCorrectNum();
        } else {
          // 「答えを見る」を押していれば、フラグを0に戻す。
          answerOpenFlag = "0";
        }

        ;
        circleImg.classList.add('circle');
        circleImg.classList.remove('transparent');
        displayWordKanji.classList.add('add_gray');
        displayWordKanji.classList.add('displayWordKanji');
        displayWordKanji.classList.remove('transparent');
        setTimeout(createDisplayWord, 500);
        setTimeout(function () {
          circleImg.classList.add('transparent');
          circleImg.classList.remove('circle');
        }, 500);
      }

      ;
    }

    ; // タイプした文字が表示文字と不一致の場合の処理を定義する。

    function typeMissAudio() {
      // ミス音を定義する。
      // ミス音ありの場合のみ
      if (incorrectAudioMode == "ミス音あり") {
        var incorrectAudio = new Audio('/assets/incorrectAudio.mp3'); // 不正解の場合、効果音を発生させる。

        incorrectAudio.volume = 0.3;
        incorrectAudio.play();
      }

      ;
    }

    ; // 英単語を生成した際に、発音させる処理を定義する。

    function pronounce(eng_word) {
      // résuméの場合は音声ファイルの検索ができないため、ファイルを変更
      if (eng_word == "résumé") {
        eng_word = "rezumei";
      }

      ;
      var pronunciation = new Audio('/assets/発音/' + eng_word + '.mp3');
      pronunciation.play();
    }

    ;
  }

  ;
}

;

/***/ })

/******/ });
//# sourceMappingURL=typingplay_jap-2ea4d4c42833c8ad8780.js.map