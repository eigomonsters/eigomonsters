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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/mondenhiroki/projects/eigomonster/app/javascript/packs/typingplay_jap.js: Unexpected reserved word 'await' (686:3)\n\n  684 | \t\t\tconsole.log(totalScore);\n  685 | \t\t\tdisplayScore.textContent = `${totalScore.toLocaleString()} P`;\n> 686 | \t\t\tawait sleep( 100 );\n      | \t\t\t^\n  687 | \t\t};\n  688 | \t\t}\n  689 |\n    at Parser._raise (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:775:17)\n    at Parser.raiseWithData (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:768:17)\n    at Parser.raise (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:736:17)\n    at Parser.checkReservedWord (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11924:12)\n    at Parser.parseIdentifierName (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11886:12)\n    at Parser.parseIdentifier (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11853:23)\n    at Parser.parseExprAtom (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10945:27)\n    at Parser.parseExprSubscripts (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10689:23)\n    at Parser.parseUpdate (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10669:21)\n    at Parser.parseMaybeUnary (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10647:23)\n    at Parser.parseExprOps (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10504:23)\n    at Parser.parseMaybeConditional (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10478:23)\n    at Parser.parseMaybeAssign (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10441:21)\n    at Parser.parseExpressionBase (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10386:23)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10380:39\n    at Parser.allowInAnd (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12079:16)\n    at Parser.parseExpression (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10380:17)\n    at Parser.parseStatementContent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12367:23)\n    at Parser.parseStatement (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12236:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12816:25)\n    at Parser.parseBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12807:10)\n    at Parser.parseBlock (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12791:10)\n    at Parser.parseStatementContent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12312:21)\n    at Parser.parseStatement (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12236:17)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12856:60\n    at Parser.withTopicForbiddingContext (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12054:14)\n    at Parser.parseFor (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12856:22)\n    at Parser.parseForStatement (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12560:19)\n    at Parser.parseStatementContent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12261:21)\n    at Parser.parseStatement (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12236:17)");

/***/ })

/******/ });
//# sourceMappingURL=typingplay_jap-5b0c053225300e3eb297.js.map