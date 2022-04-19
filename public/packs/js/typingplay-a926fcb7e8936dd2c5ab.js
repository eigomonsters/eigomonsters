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

//'use strict';
var p = document.getElementById("text");
var textLists = ["aaa", "bbb", "ccc", "ddd", "eeeeee", "ffffff", "gggggg", "hhhhhh"];
var checkTexts = [];
createText();

function createText() {
  p.textContent = "";
  var rnd = Math.floor(Math.random() * textLists.length);
  checkTexts = textLists[rnd].split("").map(function (value) {
    var spanValue = document.createElement("span");
    spanValue.textContent = value;
    p.appendChild(spanValue);
    console.log(spanValue);
    return spanValue;
  });
}

var time = document.getElementById("time");
var playingTime = 6000;
var closePopup = document.getElementById("closePopup");
var endFlag = "0";
var startTime = Date.now();

var countDown = function countDown() {
  var currentTime = Date.now();
  var difference = currentTime - startTime;
  var remainMSec = playingTime - difference;
  var remainSec = Math.ceil(remainMSec / 1000);
  var label = "\u6B8B\u308A".concat(remainSec, "\u79D2");

  if (remainMSec <= 0) {
    clearInterval(timerId);
    label = "";
    var totalScore = score - addPoint;
    point.textContent = "";
    point.className = "transparent";
    p.textContent = "";
    p.className = "transparent";
    endFlag = "1";
    closePopup.textContent = "終了";
    closePopup.className = "closePopup";
    setTimeout(function () {
      closePopup.textContent = "\u3042\u306A\u305F\u306E\u5F97\u70B9\u306F".concat(totalScore, "\u70B9\u3067\u3059!");
      closePopup.className = "endPopup";
    }, 1000);
  }

  time.textContent = label;
};

setTimeout(countDown, 0);
var timerId = setInterval(countDown, 1000);
var point = document.getElementById("point");
var score = 0;
var textLength = 4;
var addPointLevel1 = 1;
var addPointLevel2 = 3;
setTimeout(countPoint, 0);

function countPoint() {
  point.textContent = score;

  if (checkTexts.length < textLength) {
    addPoint = addPointLevel1;
  } else {
    addPoint = addPointLevel2;
  }

  score = score + addPoint;
  return score;
}

document.addEventListener("keydown", keyDown);
var bonusCount = 0;
var bonusCountMax = 10;

function keyDown(e) {
  if (e.key === checkTexts[0].textContent && endFlag === "0") {
    checkTexts[0].className = "add_red";
    bonusCount = bonusCount + 1;
    checkTexts.shift();

    if (bonusCount >= bonusCountMax) {
      playingTime = playingTime + 3000;
      bonusCount = 0;
    }

    if (checkTexts.length === 0) createText(), countPoint();
  } else if (endFlag === "0") {
    bonusCount = 0;
  }

  document.getElementById("meterImg").src = imgArray[bonusCount];
}

var imgArray = ["./メーターPNG/メーター0.png", "./メーターPNG/メーター10.png", "./メーターPNG/メーター20.png", "./メーターPNG/メーター30.png", "./メーターPNG/メーター40.png", "./メーターPNG/メーター50.png", "./メーターPNG/メーター60.png", "./メーターPNG/メーター70.png", "./メーターPNG/メーター80.png", "./メーターPNG/メーター90.png", "./メーターPNG/メーター100.png"];
document.getElementById("meterImg").src = imgArray[bonusCount];

/***/ })

/******/ });
//# sourceMappingURL=typingplay-a926fcb7e8936dd2c5ab.js.map