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
  var wordList = ["aaa", "bbb", "ccc", "ddd", "eeeeee", "ffffff", "gggggg", "hhhhhh"]; // 表示する単語を定義する。

  var displayWord = document.getElementById("displayWord");
  var checkTexts = []; // 表示する単語を作成する。

  createDisplayWord(); // 表示する単語を作成する。

  function createDisplayWord() {
    // 表示単語を初期化する。
    displayWord.textContent = ""; // 0〜textListsの総数間で整数値をランダムで算出する。

    var randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length); // 表示する単語を一文字ごとに区切り、spanタグで閉じる。
    // spanタグで閉じた単語を表示する。

    checkTexts = wordList[randomIntegerInTotalWordList].split("").map(function (value) {
      // spanタグを作成する。
      var spanValue = document.createElement("span"); // spanタグに一文字を挿入する。

      spanValue.textContent = value; // 表示する単語にspanタグで閉じた一文字を追加する。

      displayWord.appendChild(spanValue);
      return spanValue;
    });
  } // let time = document.getElementById("time");
  // let playingTime = 6000;
  // const closePopup = document.getElementById("closePopup");
  // let endFlag = "0";
  // const startTime = Date.now();
  // const countDown = function(){
  //   const currentTime = Date.now();
  //   const difference = currentTime - startTime;
  //   const remainMSec = playingTime - difference;
  //   const remainSec = Math.ceil(remainMSec/1000);
  //   let  label = `残り${remainSec}秒`;
  //   if (remainMSec <= 0){
  //     clearInterval(timerId);
  //     label = "";
  //     const totalScore = score - addPoint;
  //     point.textContent ="";
  //     point.className = "transparent";
  //     p.textContent ="";
  //     p.className ="transparent";
  //     endFlag = "1";
  //     closePopup.textContent ="終了";
  //     closePopup.className = "closePopup";
  //     setTimeout(function(){
  //       closePopup.textContent = `あなたの得点は${totalScore}点です!`;
  //       closePopup.className = "endPopup";
  //     },1000);
  //     }
  //     time.textContent = label;
  // }
  // setTimeout(countDown,0);
  // const timerId = setInterval(countDown,1000);
  // let point = document.getElementById("point");
  // let score = 0;
  // const textLength = 4;
  // const addPointLevel1 = 1;
  // const addPointLevel2 = 3;
  // setTimeout(countPoint,0);
  // function countPoint(){
  //   point.textContent = score;
  //     if (checkTexts.length < textLength){
  //       addPoint = addPointLevel1;
  //     } else{
  //       addPoint = addPointLevel2;
  //     }
  //   score = score + addPoint;
  //   return score;
  // }


  document.addEventListener("keydown", keyDownCharacterCountUp); // let bonusCount = 0;
  // const bonusCountMax = 10;

  function keyDownCharacterCountUp(keyDownCharacter) {
    if (keyDownCharacter.key === checkTexts[0].textContent) {
      // && endFlag==="0") {
      checkTexts[0].className = "add_red"; // bonusCount = bonusCount +1;

      console.log(checkTexts[0].className);
      checkTexts.shift();
      if (checkTexts.length === 0) createDisplayWord(); //,countPoint();
    }

    console.log(checkTexts[0]); // if(bonusCount >= bonusCountMax){
    //   playingTime = playingTime +3000;
    //   bonusCount =0;
    // }
    // else if(endFlag==="0"){
    //   bonusCount =0;
    // }
    //document.getElementById("meterImg").src=imgArray[bonusCount];
  } //  const imgArray =[
  //    '/assets/メーターPNG/メーター0.png',
  //    '/assets/メーターPNG/メーター10.png',
  //    '/assets/メーターPNG/メーター20.png',
  //    '/assets/メーターPNG/メーター30.png',
  //    '/assets/メーターPNG/メーター40.png',
  //    '/assets/メーターPNG/メーター50.png',
  //    '/assets/メーターPNG/メーター60.png',
  //    '/assets/メーターPNG/メーター70.png',
  //    '/assets/メーターPNG/メーター80.png',
  //    '/assets/メーターPNG/メーター90.png',
  //    '/assets/メーターPNG/メーター100.png'
  //  ]
  //  document.getElementById("meterImg").src=imgArray[bonusCount];

});

/***/ })

/******/ });
//# sourceMappingURL=typingplay-fb0184eba43fd3d83e5a.js.map