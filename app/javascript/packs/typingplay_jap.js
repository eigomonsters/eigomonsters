// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function(){
	// Enterを押下するとゲーム開始のカウントダウンがスタートする処理を呼び出す。
	document.addEventListener(`keydown`, keyDownGameStart);
});

// スペースかEnterキー押下によるゲームスタートを一回限りとするフラグを設定する。
let gameStartEnterOnlyOnce = "0";

// 使用しているブラウザを取得する。
const agent = window.navigator.userAgent.toLowerCase()

// スペースかEnterキーを押下するとゲーム開始のカウントダウンがスタートする。
function keyDownGameStart(keyDownEnter){
	if ((keyDownEnter.key === 'Enter' || keyDownEnter.key === " ") && gameStartEnterOnlyOnce == "0") {
		// 表示されている文字を非表示にする。
		document.getElementById("useKeyboardPopup").className = "transparent";
		document.getElementById("pressEnterPopup").className = "transparent";
		document.getElementById("annotationAudio").className = "transparent";
		document.getElementById("backBtnTypingPlay").className = "transparent";
		gameStartEnterOnlyOnce = "1";
		gameStart();
	};
};


// 選択した英単語難易度によって変わるwordListの定義
const wordList = gon.wordListAll;

// 選択したプレイモードによって変わるplayModeの定義
const playMode = gon.playMode;

// 出題順の設定によって変わるpronounceModeの定義
const questionOrderMode = gon.questionOrderMode;

// 英単語の発音有無の設定によって変わるpronounceModeの定義
const pronounceMode = gon.pronounceMode;

// BGMの設定によって変わるbgmModeの定義
const bgmMode = gon.bgmMode;

// タイプ音の設定によって変わるtypeAudioModeの定義
const typeAudioMode = gon.typeAudioMode;

// 正解音の設定によって変わるcorrectAudioModeの定義
const correctAudioMode = gon.correctAudioMode;

// ミス音の設定によって変わるincorrectAudioModeの定義
const incorrectAudioMode = gon.incorrectAudioMode;



function gameStart(){

	// 表示する単語リストを定義する。
	// chromeの場合"ff"が正常に動作しない。⇨対応済み

	const romaMappingTableFirst = {
		"あ":"a",
		"い":"i",
		"う":"u",
		"え":"e",
		"お":"o",
		"か":"ka",
		"き":"ki",
		"く":"ku",
		"け":"ke",
		"こ":"ko",
		"さ":"sa",
		"し":"si",
		"す":"su",
		"せ":"se",
		"そ":"so",
		"た":"ta",
		"ち":"ti",
		"つ":"tu",
		"て":"te",
		"と":"to",
		"な":"na",
		"に":"ni",
		"ぬ":"nu",
		"ね":"ne",
		"の":"no",
		"は":"ha",
		"ひ":"hi",
		"ふ":"hu",
		"へ":"he",
		"ほ":"ho",
		"ま":"ma",
		"み":"mi",
		"む":"mu",
		"め":"me",
		"も":"mo",
		"や":"ya",
		"ゆ":"yu",
		"よ":"yo",
		"ら":"ra",
		"り":"ri",
		"る":"ru",
		"れ":"re",
		"ろ":"ro",
		"わ":"wa",
		"を":"wo",
		"が":"ga",
		"ぎ":"gi",
		"ぐ":"gu",
		"げ":"ge",
		"ご":"go",
		"ざ":"za",
		"じ":"zi",
		"ず":"zu",
		"ぜ":"ze",
		"ぞ":"zo",
		"だ":"da",
		"ぢ":"di",
		"づ":"du",
		"で":"de",
		"ど":"do",
		"ば":"ba",
		"び":"bi",
		"ぶ":"bu",
		"べ":"be",
		"ぼ":"bo",
		"ぱ":"pa",
		"ぴ":"pi",
		"ぷ":"pu",
		"ぺ":"pe",
		"ぽ":"po",
		"ぁ":"la",
		"ぃ":"li",
		"ぅ":"lu",
		"ぇ":"le",
		"ぉ":"lo",
		"ゃ":"lya",
		"ゅ":"lyu",
		"ょ":"lyo",
		"でゃ":"dha",
		"でぃ":"dhi",
		"でゅ":"dhu",
		"でぇ":"dhe",
		"でょ":"dho",
		"つぁ":"tsa",
		"つぃ":"tsi",
		"つぇ":"tse",
		"つぉ":"tso",
		"てゃ":"tha",
		"てぃ":"thi",
		"てゅ":"thu",
		"てぇ":"the",
		"てょ":"tho",
		"ふぁ":"fa",
		"ふぃ":"fi",
		"ふぇ":"fe",
		"ふぉ":"fo",
		"うぁ":"wha",
		"うぃ":"wi",
		"うぇ":"we",
		"うぉ":"who",
		"ゔぁ":"va",
		"ゔぃ":"vi",
		"ゔ":"vu",
		"ゔぇ":"ve",
		"ゔぉ":"vo",
		"きゃ":"kya",
		"きぃ":"kyi",
		"きゅ":"kyu",
		"きぇ":"kye",
		"きょ":"kyo",
		"ぎゃ":"gya",
		"ぎぃ":"gyi",
		"ぎゅ":"gyu",
		"ぎぇ":"gye",
		"ぎょ":"gyo",
		"しゃ":"sya",
		"しぃ":"syi",
		"しゅ":"syu",
		"しぇ":"sye",
		"しょ":"syo",
		"じゃ":"zya",
		"じぃ":"zyi",
		"じゅ":"zyu",
		"じぇ":"zye",
		"じょ":"zyo",
		"ちゃ":"tya",
		"ちぃ":"tyi",
		"ちゅ":"tyu",
		"ちぇ":"tye",
		"ちょ":"tyo",
		"ぢゃ":"dya",
		"ぢぃ":"dyi",
		"ぢゅ":"dyu",
		"ぢぇ":"dye",
		"ぢょ":"dyo",
		"にゃ":"nya",
		"にぃ":"nyi",
		"にゅ":"nyu",
		"にぇ":"nye",
		"にょ":"nyo",
		"ひゃ":"hya",
		"ひぃ":"hyi",
		"ひゅ":"hyu",
		"ひぇ":"hye",
		"ひょ":"hyo",
		"びゃ":"bya",
		"びぃ":"byi",
		"びゅ":"byu",
		"びぇ":"bye",
		"びょ":"byo",
		"ぴゃ":"pya",
		"ぴぃ":"pyi",
		"ぴゅ":"pyu",
		"ぴぇ":"pye",
		"ぴょ":"pyo",
		"ふゃ":"fya",
		"ふぃ":"fyi",
		"ふゅ":"fyu",
		"ふぇ":"fye",
		"ふょ":"fyo",
		"みゃ":"mya",
		"みぃ":"myi",
		"みゅ":"myu",
		"みぇ":"mye",
		"みょ":"myo",
		"りゃ":"rya",
		"りぃ":"ryi",
		"りゅ":"ryu",
		"りぇ":"rye",
		"りょ":"ryo",
		"くぁ":"kwa",
		"ぐぁ":"gwa",
		"とぅ":"twu",
		"どぅ":"dwu",
		"いぇ":"ye",
		"ー":"-"
	};

	const romaMappingTableSecond = {
		"い":"yi",
		"か":"ca",
		"く":"cu",
		"こ":"co",
		"し":"shi",
		"せ":"ce",
		"ち":"chi",
		"つ":"tsu",
		"ふ":"fu",
		"じ":"ji",
		"ぁ":"xa",
		"ぃ":"xi",
		"ぅ":"xu",
		"ぇ":"xe",
		"ぉ":"xo",
		"ゃ":"xya",
		"ゅ":"xyu",
		"ょ":"xyo",
		"しゃ":"sha",
		"しゅ":"shu",
		"しぇ":"she",
		"しょ":"sho",
		"じゃ":"ja",
		"じぃ":"jyi",
		"じゅ":"ju",
		"じぇ":"je",
		"じょ":"jo",
		"ちゃ":"cha",
		"ちぃ":"cyi",
		"ちゅ":"chu",
		"ちぇ":"che",
		"ちょ":"cho",
		"うぃ":"whi",
		"うぇ":"whe"
	};

	const romaMappingTableThird = {
		"し":"ci",
		"じゃ":"jya",
		"じゅ":"jyu",
		"じぇ":"jye",
		"じょ":"jyo",
		"ちゃ":"cya",
		"ちゅ":"cyu",
		"ちぇ":"cye",
		"ちょ":"cyo"
	};

	// タイピングの正誤判定に使用する変数を定義する。
	let wordLetterWithSmallLetter = "";
	let wordLetterSole = "";

	let charArrayInDisplayWordAlphaFirst = [];
	let charArrayInDisplayWordAlphaSecond = [];
	let charArrayInDisplayWordAlphaThird = [];
	let charArrayInDisplayWordAlphaSole = [];
	let charArrayInDisplayWordAlphaSoleSecond = [];
	let charArrayInDisplayWordAlphaSoleThird = [];

	let shiftAlreadyStartedCountAll = 0;
	let shiftAlreadyStartedCountFirst = 0;
	let shiftAlreadyStartedCountSecond = 0;
	let shiftAlreadyStartedCountThird = 0;
	let shiftAlreadyStartedCountSoleFirst = 0;
	let shiftAlreadyStartedCountSoleSecond = 0;
	let shiftAlreadyStartedCountSoleThird = 0;

	let keyTempForSmallTsuPreWithNext = "";
	let keyTempForSmallTsuPreFirst = "";
	let keyTempForSmallTsuPreSecond = "";
	let keyTempForSmallTsuPreThird = "";
	let keyTempForNnPre = "";


	// タイピングの正誤判定に使用する変数を定義する。2
	let wordLetter2WithSmallLetter = "";
	let wordLetter2Sole = "";

	let charArrayInDisplayWordAlpha2First = [];
	let charArrayInDisplayWordAlpha2Second = [];
	let charArrayInDisplayWordAlpha2Third = [];
	let charArrayInDisplayWordAlpha2Sole = [];
	let charArrayInDisplayWordAlphaSole2Second = [];
	let charArrayInDisplayWordAlphaSole2Third = [];

	let shiftAlreadyStartedCount2All = 0;
	let shiftAlreadyStartedCount2First = 0;
	let shiftAlreadyStartedCount2Second = 0;
	let shiftAlreadyStartedCount2Third = 0;
	let shiftAlreadyStartedCountSole2First = 0;
	let shiftAlreadyStartedCountSole2Second = 0;
	let shiftAlreadyStartedCountSole2Third = 0;

	let keyTempForSmallTsuPre2WithNext = "";
	let keyTempForSmallTsuPre2First = "";
	let keyTempForSmallTsuPre2Second = "";
	let keyTempForSmallTsuPre2Third = "";
	let keyTempForNnPre2 = "";


	// 英単語を順番に出題する場合の番号の初期値を定義する。
	let sortById = 0;

	// 英単語の出題順の初期値を定義する。
	let eachQuestionOrder = 0;

	// 表示するメーター初期値を定義する。
	let bonusCountMeter = 0;
	// 表示するメーター最大値を定義する。
	const bonusCountMeterMax = 100;
	// 表示するプレイ延長時間を定義する。
	const displayBonusAddPlayTime = document.getElementById("displayBonusAddPlayTime");
	displayBonusAddPlayTime.className =  "displayBonusAddPlayTime";
	// メーター最大値に達した際の延長するプレイ時間を定義する。
	const bonusAddPlayTime = 3000;

		// 合計正解数をカウントアップする際に+1を表示する。
		const displayAddCorrectNum = document.getElementById("displayAddCorrectNum");
		displayAddCorrectNum.className =  "displayAddCorrectNum";
		// 連続正解数をカウントアップする際に+1を表示する。
		const displayAddConsecutiveCorrectNum = document.getElementById("displayAddConsecutiveCorrectNum");
		displayAddConsecutiveCorrectNum.className =  "displayAddConsecutiveCorrectNum";
		// 最大連続正解数をカウントアップする際に+1を表示する。
		const displayAddMaxConsecutiveCorrectNum = document.getElementById("displayAddMaxConsecutiveCorrectNum");
		displayAddMaxConsecutiveCorrectNum.className =  "displayAddMaxConsecutiveCorrectNum";


	// メーターの初期値を表示する。
	let meter = document.getElementById("meter")
	meter.className = "meter"
	meter.value = bonusCountMeter;
	// ゲーム開始までをカウントダウン変数を定義する。
	let countDownPopup = document.getElementById("countDownPopup");
	// class属性を付与する。
	countDownPopup.className = "countDownPopup";
	// ゲーム開始までをカウントダウン変数の初期値を定義する。
	let countDownPopupNumber = 3;
	// ゲーム開始までをカウントダウン変数の初期値を表示する。
	countDownPopup.textContent = countDownPopupNumber;


	// ゲーム開始までをカウントダウンを1秒ごとに実施するように定義する。
	const timerIdToStart = setInterval(countDownTimeToStart,1000);


		// 以下、BGMありの場合、BGMを流す処理を定義する。---------------------------------------------
	// ------------------------------------------------------------------------------------

	let bgmAudio = new Audio('/assets/bgm1.mp3');
	
	if (bgmMode == "BGMあり") {
		var baseVol = 0.3;
		bgmAudio.volume = 0.1;
		bgmAudio.play();
		var start_func = setInterval(function() {
			bgmAudio.volume = bgmAudio.volume + (baseVol / 200);
			if(bgmAudio.volume >= baseVol - (baseVol / 200)) {
				bgmAudio.volume = baseVol;
				clearInterval(start_func);
			}
		}, 10);
	};
	// 以上、BGMありの場合、BGMを流す処理を定義する。---------------------------------------------
	// ------------------------------------------------------------------------------------


	// 以下、safariかつBGMなしの場合、BGMを音量0で流すことで一つ目の単語が発音されるようにする。--------
	// ------------------------------------------------------------------------------------
	if ((agent.indexOf("safari") != -1) && bgmMode == "BGMなし" && pronounceMode == "発音あり" ) {
		bgmAudio.volume = 0;
		bgmAudio.play();
		setInterval(function() {
			bgmAudio.pause();
		}, 1000);
	};
	// 以上、safariかつBGMなしの場合、BGMを音量0で流すことで一つ目の単語が発音されるようにする。--------
	// ------------------------------------------------------------------------------------




		// ゲーム開始までをカウントダウンを実施する処理を定義する。
		function countDownTimeToStart(){
				// カウントダウン文字を１ずつ減らす。
				countDownPopupNumber = countDownPopupNumber - 1;
				//カウントダウンが0になれば、ゲームを開始する。
				if (countDownPopupNumber <= 0){
				clearInterval(timerIdToStart);
				// カウントダウンポップアップのクラスを変更し、非表示にする。
				countDownPopup.className = "countDownPopupAfterClose";
				typingPlayStart();
				} else {
				countDownPopup.textContent = countDownPopupNumber;
				}
		}


		// ゲームを開始する処理を定義する。
		function typingPlayStart(){

				// 表示する単語を定義する。
				const displayMultipleWord1 = document.getElementById("displayMultipleWord1");
				displayMultipleWord1.className =  "displayMultipleWord1";
				const displayWord = document.getElementById("displayWord");
				displayWord.className =  "displayWord";
				const displayWordEnglish = document.getElementById("displayWordEnglish");
				displayWordEnglish.className =  "displayWordEnglish";
				const displayWordKanji = document.getElementById("displayWordKanji");
				displayWordKanji.className =  "displayWordKanji";

				// 表示する単語を定義する。2
				const displayMultipleWord2 = document.getElementById("displayMultipleWord2");
				displayMultipleWord2.className =  "displayMultipleWord2";
				const displayWord2 = document.getElementById("displayWord2");
				displayWord2.className =  "displayWord2";
				const displayWord2Kanji = document.getElementById("displayWord2Kanji");
				displayWord2Kanji.className =  "displayWord2Kanji";
				// 訳２が存在する場合、"OR"を定義する。
				const displayMultipleOr = document.getElementById("displayMultipleOr");
				displayMultipleOr.className =  "displayMultipleOr";
				displayMultipleOr.textContent = "OR";

				// 表示する単語を一文字ずつに分ける変数を定義する。
				let charArrayInDisplayWordJap =[];
				// 表示する単語を一文字ずつに分ける変数を定義する。2
				let charArrayInDisplayWord2Jap =[];
				// 訳２の存在フラグを定義する。
				let japTrans2Existing = "0";

				// 出題した英単語を格納する配列を定義する。
				let allQuestionWords =[];
				// 出題したすべての英単語を格納する配列を定義する。
				let allQuestionWordsList =[];


				// ゲーム終了を判定するフラグを定義する。
				let playEndFlag = "0";

				// 日本語訳をどの訳パターンで回答しているかを判定するフラグ。
				let japTransPattern1Flag = "0";
				let japTransPattern2Flag = "0";

				// タイプが正解である場合にフラグを設定する。
				let correctTypingFlag = "0";
				// タイプが不正解である場合にフラグを設定する。
				let missTypingFlag = "0";
				// タイプが正解である場合にフラグを設定する。
				let correctTyping2Flag = "0";
				// タイプが不正解である場合にフラグを設定する。
				let missTyping2Flag = "0";

				// 「答えを見る」ボタン押下有無を判定するフラグを定義する。
				let answerOpenFlag = "0";

				// プレイモード：タイムアタックですべての出題範囲に解答済み判定フラグを設定する。
				let gameCompleteTimeAttackFlag = "0";

				// 問題を作成した時間を定義する。
				let eachQuestionCreateTime = 0;
				// 問題を解答するのに要した時間を定義する。
				let eachQuestionAnswerTime = 0;

				// 表示する単語を作成する。
				createDisplayWord();

				// プレイ開始時間を取得する。
				const startTime = Date.now();
				// 表示する残りのプレイ可能時間を定義する。
				let remainPlayingTime = document.getElementById("remainPlayingTime");
				remainPlayingTime.className =  "remainPlayingTime";



				// 表示するスタート時のプレイ可能時間を定義する。
				// プレイモード：タイムアタックの場合は5分とする。
				let initialPlayingTimeMSec = 300000;

				// プレイモード：タイムアタックの場合は50分とする。
				if ( playMode == "タイムアタック") {
					initialPlayingTimeMSec = 3000000;
				};
				// プレイモード：タイムアタックの場合、ゲームクリア後に合計プレイ時間表示する。
				let totalPlayingTimeMSec = 0;



				// スタート時に残りのプレイ可能時間の初期値を表示するためにcountDownTimeを実施する。
				setTimeout(countDownTime,0);
				// 1秒ごとにcountDownTimeを実施するように定義する。
				const timerId = setInterval(countDownTime,1000);

				// 正解時に表示する丸を定義する。
				document.getElementById("circleImg").src= '/assets/正解○.png';
				circleImg.classList.add('transparent');


				// "発音を聞く"ボタンを表示する。
				let pronounceAgainButton = document.getElementById("pronounceAgainButton");
				pronounceAgainButton.innerHTML = "発音を聞く";
				pronounceAgainButton.className = "pronounceAgainButton";
				pronounceAgainButton.onclick = function() {
					pronounce(displayWordInList.eng_word);
				};
				// "ヒントを見る"ボタンを表示する。(プレイモード普通、タイムアタックの時のみ機能)
				let hintButton = document.getElementById("hintButton");
				hintButton.innerHTML = "ヒントを見る";
				if (playMode == "普通" || playMode == "タイムアタック" ) {
					hintButton.className = "hintButton";
					hintButton.onclick = function() {

						// 訳１、訳２両方の可能性がある場合
						if ( japTransPattern1Flag === "0" && japTransPattern2Flag === "0") {
								charArrayInDisplayWordJap[0].classList.remove('transparent');
								
								// 訳１と訳２のヒントが同じ場合、訳１の文字のみを表示させるため、訳２は非表示にする。
								if (charArrayInDisplayWordJap[0].textContent === charArrayInDisplayWord2Jap[0].textContent) {
									displayMultipleWord2.className =  "transparent";
									displayWord2.className =  "transparent";
									displayWord2Kanji.className =  "transparent";
								} else {// 訳１と訳２のヒントが違う場合、訳１、訳２両方の文字を表示させる。
									displayMultipleWord2.className =  "displayMultipleWord2";
									displayWord2.className =  "displayWord2";
									charArrayInDisplayWord2Jap[0].classList.remove('transparent');
									displayMultipleOr.className =  "displayMultipleOr";
								};

						} else if ( japTransPattern1Flag === "1" && japTransPattern2Flag === "0") {
								charArrayInDisplayWordJap[0].classList.remove('transparent');
						} else if ( japTransPattern1Flag === "0" && japTransPattern2Flag === "1") {
								charArrayInDisplayWord2Jap[0].classList.remove('transparent');
						} else {
						}
					};
				} else {
					hintButton.className = "hintButtonPractice";
				};
				// "答えを見る"ボタンを表示する。(プレイモード普通、タイムアタックの時のみ機能)
				let answerButton = document.getElementById("answerButton");
				answerButton.innerHTML = "答えを見る";
				if (playMode == "普通" || playMode == "タイムアタック" ) {
					answerButton.className = "answerButton";
					answerButton.onclick = function() {
						if ( japTransPattern1Flag === "0" && japTransPattern2Flag === "0") {
							for (let i = 0; i < charArrayInDisplayWordJap.length; i++) {
								charArrayInDisplayWordJap[i].classList.remove('transparent');
							}
								displayWordKanji.className =  "displayWordKanji";
							// 訳２がない場合は、以下の処理不要。
							if ( charArrayInDisplayWord2Jap.length > 0) {
								for (let j = 0; j < charArrayInDisplayWord2Jap.length; j++) {
									charArrayInDisplayWord2Jap[j].classList.remove('transparent');
								}
								displayMultipleWord2.className =  "displayMultipleWord2";
								displayWord2.className =  "displayWord2";
								displayWord2Kanji.className =  "displayWord2Kanji";
								displayMultipleOr.className =  "displayMultipleOr";
							}

						} else if ( japTransPattern1Flag === "1" && japTransPattern2Flag === "0") {
								for (let i = 0; i < charArrayInDisplayWordJap.length; i++) {
									charArrayInDisplayWordJap[i].classList.remove('transparent');
								}
								displayWordKanji.className =  "displayWordKanji";
						} else if ( japTransPattern1Flag === "0" && japTransPattern2Flag === "1") {
								for (let i = 0; i < charArrayInDisplayWord2Jap.length; i++) {
									charArrayInDisplayWord2Jap[i].classList.remove('transparent');
								}
								displayWord2Kanji.className =  "displayWord2Kanji";
						} else {

						}

						// 連続正解数を0に戻す。
						totalConsecutiveNumCorrectNum = 0;
						displayConsecutiveCorrectNum.textContent = totalConsecutiveNumCorrectNum;

						// メーターを初期値に戻す。
						bonusCountMeter = 0;
						meter.value = bonusCountMeter;

						// 「答えを見る」判定フラグを更新する。
						answerOpenFlag = "1";

					};
				} else { // (プレイモード練習の時)
					answerButton.className = "answerButtonPractice";
				};

				// "最初からやり直す"ボタンを表示する。
				const restartButtonMidGame = document.getElementById("restartButtonMidGame");
				restartButtonMidGame.classList.remove('transparent');
				// "コース選択画面に戻る"ボタンを表示する。
				const courseSettingBackButtonMidGame = document.getElementById("courseSettingBackButtonMidGame");
				courseSettingBackButtonMidGame.classList.remove('transparent');


				// 以下、スコア定義---------------------------------------------------------------------------------------------------
				// -----------------------------------------------------------------------------------------------------------------

				// // プレイモード：練習・普通の場合はスコアを表示させる。
				// // プレイモード：タイムアタックはスコアを表示させない。
				// if ( playMode == "練習" || playMode == "普通") {
				// // 表示するスコアを定義する。
				// let displayScoreEntire = document.getElementById("displayScoreEntire");
				// displayScoreEntire.className =  "displayScoreEntire";
				// let displayScore = document.getElementById("displayScore");
				// displayScore.className =  "displayScore";
				// let displayP = document.getElementById("displayP");
				// displayP.className =  "displayP";
				// };

				// プレモード：練習・普通の場合のみ使用する。----------------------------
				// ---------------------------------------------------------------
				// // 合計スコアの初期値を定義する。
				// let totalScore = 0;
				// // スコアアップする基準を定義する。
				// const refTextLengthForCountUpLevel1 = 4;
				// const addScoreLevel1 = 50;
				// const addScoreLevel2 = 50;
				// ---------------------------------------------------------------
				// ---------------------------------------------------------------


				// 表示する正解数全体のクラス
				let NumCorrectMidGamePlay = document.getElementById("NumCorrectMidGamePlay");
				NumCorrectMidGamePlay.className =  "NumCorrectMidGamePlay";

				// 表示する正解数を定義する。
				let displayNumCorrectWord = document.getElementById("displayNumCorrectWord");
				displayNumCorrectWord.className =  "displayNumCorrectWord";
				displayNumCorrectWord.textContent = "合計正解数";
				let displayNumCorrectNum = document.getElementById("displayNumCorrectNum");
				displayNumCorrectNum.className =  "displayNumCorrectNum";
				let totalNumCorrectNum = 0;
				displayNumCorrectNum.textContent = totalNumCorrectNum;

				// 表示する連続正解数を定義する。
				let displayConsecutiveCorrectWord = document.getElementById("displayConsecutiveCorrectWord");
				displayConsecutiveCorrectWord.className =  "displayConsecutiveCorrectWord";
				displayConsecutiveCorrectWord.textContent = "連続正解数";
				let displayConsecutiveCorrectNum = document.getElementById("displayConsecutiveCorrectNum");
				displayConsecutiveCorrectNum.className =  "displayConsecutiveCorrectNum";
				let totalConsecutiveNumCorrectNum = 0;
				displayConsecutiveCorrectNum.textContent = totalConsecutiveNumCorrectNum;

				// 表示する最高連続正解数を定義する。
				let displayMaxConsecutiveCorrectWord = document.getElementById("displayMaxConsecutiveCorrectWord");
				displayMaxConsecutiveCorrectWord.className =  "displayMaxConsecutiveCorrectWord";
				displayMaxConsecutiveCorrectWord.textContent = "最高連続正解数";
				let displayMaxConsecutiveCorrectNum = document.getElementById("displayMaxConsecutiveCorrectNum");
				displayMaxConsecutiveCorrectNum.className =  "displayMaxConsecutiveCorrectNum";
				let totalMaxConsecutiveNumCorrectNum = 0;
				displayMaxConsecutiveCorrectNum.textContent = totalMaxConsecutiveNumCorrectNum;

				// 以上、スコア定義---------------------------------------------------------------------------------------------------
				// -----------------------------------------------------------------------------------------------------------------


				// タイプされる度にkeyDownCharCountUpを実施するように定義する。
				document.addEventListener(`keydown`, keyDownCharCountUp);



				// 以下、表示する単語を作成する処理を定義する。-----------------------------------------------
				// ------------------------------------------------------------------------------------
				function createDisplayWord(){
					// すでにゲームが終了している場合、新規ワードを生成しない。ゲーム中のみ生成する。
					// ギリギリで問題に正解した場合、○を表示した後、500m秒後にワードを生成する処理が走るため。
					if(playEndFlag === "0"){

						// 表示単語を初期化する。
						displayWord.textContent = "";
						displayWord2.textContent = "";
						displayMultipleWord1.className =  "displayMultipleWord1";
						displayWord.className =  "displayWord";
						displayWordKanji.className =  "displayWordKanji";
						displayMultipleWord2.className =  "displayMultipleWord2";
						displayWord2.className =  "displayWord2";
						displayWord2Kanji.className =  "displayWord2Kanji";
						displayMultipleOr.className =  "displayMultipleOr";

						// spanタグで閉じた表示単語を初期値に戻す。
						charArrayInDisplayWordJap =[];
						charArrayInDisplayWord2Jap =[];

						// 問題を作成した時間を記録する。
						eachQuestionCreateTime = Date.now();

						// 前回の問題に要した時間を初期値に戻す。
						eachQuestionAnswerTime = 0;

						// 出題順の設定により、displayWordInListを変更
						if (questionOrderMode == "番号順") {
							// 英単語を順番に出題する場合の番号の初期値を定義する。
							displayWordInList = wordList[sortById];
							sortById++;
							// sortByIdが出題英単語数を超えた場合、初期値に戻す。
							if (sortById >= wordList.length) {
								sortById = 0;
								// プレイモード：タイムアタックの場合、次の問題に正解した時点でゲーム終了とする。
								if ( playMode == "タイムアタック" ) {
									// フラグを1に更新する。
									gameCompleteTimeAttackFlag = "1";
								};
							};


						} else { // 出題順がランダムの場合
							// 0〜textListsの総数間で整数値をランダムで算出する。
							let randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length);

							// 表示する単語をランダムで選定する。
							displayWordInList = wordList[randomIntegerInTotalWordList];

							// プレイモード：タイムアタックの場合は、wordListから表示単語を削除する。
							if ( playMode == "タイムアタック" ) {
								// 同じ問題を２度出題しないように、一度出題した問題はwordListから削除する。
								wordList.splice( randomIntegerInTotalWordList, 1);
								// wordList.length == 0になった場合、次の問題に正解した時点でゲーム終了とする。
								if (wordList.length == 0){
									// フラグを1に更新する。
									gameCompleteTimeAttackFlag = "1";
								};
							};
						};

						// 前回出題した英単語を allQuestionWords から削除し、初期値に戻す。
						allQuestionWords = [];
						// 問題の出題順を+1する。
						eachQuestionOrder = eachQuestionOrder + 1;
						// 出題した英単語displayWordInList を allQuestionWords に格納する。
						allQuestionWords.push(eachQuestionOrder, displayWordInList.id,"▷" ,displayWordInList.eng_word, displayWordInList.jap_trans_1, "未解答", "-");


						// 英単語を生成した際に、発音させる。（発音ありの場合のみ）
						if (pronounceMode == "発音あり") {
							pronounce(displayWordInList.eng_word);
						};

						// 英単語を表示させる。
						displayWordEnglish.textContent = displayWordInList.eng_word;
						// 日本語訳(漢字)を表示させる。
						displayWordKanji.textContent = displayWordInList.jap_trans_1;
						// 日本語訳(漢字)を表示させる。2
						displayWord2Kanji.textContent = displayWordInList.jap_trans_2;
						// プレイモード練習の時は、答えとして漢字を表示させ、普通、タイムアタックでは非表示にする。
						if ( playMode == "練習" ) {
							displayWordKanji.className =  "displayWordKanji";
							displayWord2Kanji.className =  "displayWord2Kanji";
							displayMultipleOr.className =  "displayMultipleOr";
						} else if ( playMode == "普通" || playMode == "タイムアタック") {
							displayWordKanji.className =  "transparent";
							displayWord2Kanji.className =  "transparent";
							displayMultipleOr.className =  "transparent";
						} else {
							displayWordKanji.className =  "transparent";
							displayWord2Kanji.className =  "transparent";
							displayMultipleOr.className =  "transparent";
						}
						// 表示する単語を一文字ごとに区切り、spanタグで閉じる。
						// spanタグで閉じた単語を表示する。
						charArrayInDisplayWordJap = displayWordInList.jap_trans_1_yomi.split("").map(function(value){
							// spanタグを作成する。
							let spanValue = document.createElement("span");
							// spanタグに一文字を挿入する。
							spanValue.textContent = value;
							// 各文字（ひらがな）に対して、transparentクラスを付与する。（プレイモード普通、タイムアタックのときのみ）
							if ( playMode == "普通" || playMode == "タイムアタック") {
								spanValue.className = "transparent";
							};
							// 表示する単語にspanタグで閉じた一文字を追加する。
							displayWord.appendChild(spanValue);
							return spanValue;
						});
						// 表示する英単語に２つ目の日本語訳がある場合、一文字ごとに区切り、spanタグで閉じる。
						// spanタグで閉じた単語を表示する。
						if ( displayWordInList.jap_trans_2 !== "" && displayWordInList.jap_trans_2 != null) {
							charArrayInDisplayWord2Jap = displayWordInList.jap_trans_2_yomi.split("").map(function(value){
								// spanタグを作成する。
								let spanValue = document.createElement("span");
								// spanタグに一文字を挿入する。
								spanValue.textContent = value;
								// 各文字（ひらがな）に対して、transparentクラスを付与する。（プレイモード普通、タイムアタックのときのみ）
								if ( playMode == "普通" || playMode == "タイムアタック") {
									spanValue.className = "transparent";
								};
								// 表示する単語にspanタグで閉じた一文字を追加する。
								displayWord2.appendChild(spanValue);
								return spanValue;
							});
							japTrans2Existing = "1";
						} else { // 表示する英単語に２つ目の日本語訳がない場合、２つ目の日本語訳用のdivを非表示にする。（「答えを見る」ボタンで中央に揃わないため。）
							japTrans2Existing = "0";
							displayMultipleWord2.className =  "transparent";
							displayWord2.className =  "transparent";
							displayWord2Kanji.className =  "transparent";
							displayMultipleOr.className =  "transparent";
						}
					};
				};
				// 以上、表示する単語を作成する処理を定義する。-----------------------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、プレイ時間をカウントダウンする処理を定義する。-----------------------------------------
				// ------------------------------------------------------------------------------------
				function countDownTime(){
					const currentTime = Date.now();
					const diffBetweenCurrentTimeAndStartTime = currentTime - startTime;
					const remainMSec = initialPlayingTimeMSec - diffBetweenCurrentTimeAndStartTime;
					const remainAllSec = Math.ceil(remainMSec/1000);
					const remainMin = Math.floor(remainAllSec / 60);
					const remainSec = Math.ceil(remainAllSec % 60);
					let  remainSecLabel = `残り${(`0${remainMin}` ).slice( -2 )}分${(`0${remainSec}` ).slice( -2 )}秒`;

					// 残り時間が0になった場合の処理を定義する。
					if (remainMSec <= 0){
						gameClose();
					}
					// 残りプレイ可能時間を更新する。
					remainPlayingTime.textContent = remainSecLabel;

					// プレイモード：タイムアタックの場合は、使用時間を最後に表示する。
					if (playMode == "タイムアタック"){
						totalPlayingTimeMSec = diffBetweenCurrentTimeAndStartTime;
					};
				};
				// 以上、プレイ時間をカウントダウンする処理を定義する。-----------------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、ゲーム終了時の処理を定義する。------------------------------------------------------
				// ------------------------------------------------------------------------------------
				function gameClose(){
					// ゲーム終了後にplayEndFlagを1に更新する。
					playEndFlag = "1";

					// プレイ時間のカウントダウンを止める。
					clearInterval(timerId);

					// bgmありの場合、bgmを止める。
					if (bgmMode == "BGMあり") {
						let fadeOutVol = 0.3;
						var stop_func = setInterval(function() {
							bgmAudio.volume = bgmAudio.volume - (fadeOutVol / 200);
							if(bgmAudio.volume <= 0.03 ) {
								bgmAudio.pause();
								console.log("test");
								clearInterval(stop_func);
							}
						}, 10);
					};

					// 最後に出題していた英単語を allQuestionWordsList に格納する。
					// ただし、プレイモード：タイムアタックでクリアしている場合、出題している単語はないため処理不要。
					// また、終了直前で正解した場合、次の問題生成前に本処理に入り、最後に正解した問題が２つ表示されるため、"未解答"であることも条件に加える。
					if ( !( playMode == "タイムアタック" && gameCompleteTimeAttackFlag == "2")
						&& allQuestionWords[allQuestionWords.length - 2] == "未解答") {
						// 出題したすべての英単語リストに追加する。
						allQuestionWordsList.push(allQuestionWords);
					};

					// 残り時間の表示を消す。
					remainPlayingTime.className = "transparent";

					// 現在のスコア（左上）の表示を消す。
					// プレイモード：練習・普通の場合のみ
					// if ( playMode == "練習" || playMode == "普通") {
					// displayScoreEntire.className = "transparent";
					// displayScore.className = "transparent";
					// displayP.className = "transparent";
					// };

					//正解数全体のクラスを非表示にする。
					NumCorrectMidGamePlay.className = "transparent";
					// 正解数の表示を消す。
					displayNumCorrectWord.className = "transparent";
					displayNumCorrectNum.className = "transparent";
					// 連続正解数の表示を消す。
					displayConsecutiveCorrectWord.className = "transparent";
					displayConsecutiveCorrectNum.className = "transparent";
					// 最高連続正解数の表示を消す。
					displayMaxConsecutiveCorrectWord.className = "transparent";
					displayMaxConsecutiveCorrectNum.className = "transparent";
					// 問題の英単語の表示を消す。
					displayWordEnglish.textContent ="";
					// 解答の日本語の表示を消す。
					displayWord.textContent ="";
					// 解答の日本語訳の漢字の表示を消す。
					displayWordKanji.textContent ="";

					// 出題や解答を表示していたdivを消す。
					const btnWrapperPlay = document.getElementById("btnWrapperPlay");
					btnWrapperPlay.className = "transparent";

					// "発音を聞く"ボタンを消す。
					pronounceAgainButton.className = "transparent";
					// "ヒントを見る"ボタンを消す。
					hintButton.className = "transparent";
					// "答えを見る"ボタンを消す。
					answerButton.className = "transparent";
					// "最初からやり直す"ボタンを消す。
					restartButtonMidGame.className = "transparent";
					// "コース選択画面に戻る"ボタンを消す。
					courseSettingBackButtonMidGame.className = "transparent";

					// 正解時に表示される○の画像を消す。
					circleImg.className = "transparent";

					// ゲーム終了後に、"お疲れ様でした"を表示する。
					const closePopupClear = document.getElementById("closePopupClear");
					// ゲーム終了後に終了を知らせるポップアップを作成する。
					// ゲーム終了を知らせるポップアップを定義する。
					const closePopup = document.getElementById("closePopup");
					closePopup.textContent ="終了";
					closePopup.className = "closePopup";
					// ゲーム終了後に、問題数、合計正解数、最大連続正解数を表示する。
					const closePopupTotalQuestionNum = document.getElementById("closePopupTotalQuestionNum");
					closePopupTotalQuestionNum.className = "closePopupTotalQuestionNum";
					const closePopupFinalCorrectNum = document.getElementById("closePopupFinalCorrectNum");
					closePopupFinalCorrectNum.className = "closePopupFinalCorrectNum";
					const closePopupFinalMaxConsecutiveCorrectNum = document.getElementById("closePopupFinalMaxConsecutiveCorrectNum");
					closePopupFinalMaxConsecutiveCorrectNum.className = "closePopupFinalMaxConsecutiveCorrectNum";

					// もう一度ボタンを定義する。
					const restartBtn = document.getElementById("restartBtn");
					// 戻るボタンを定義する。
					const backBtn = document.getElementById("backBtn");

					// 問題を振り返るボタンを定義する。
					const checkQuestions = document.getElementById("checkQuestions");
					// 出題問題リスト表示を定義する。
					const allQuestionsListEntireScr = document.getElementById("allQuestionsListEntireScr");
					const allQuestionsList = document.getElementById("allQuestionsList");

					// 出題した問題を表にする。
					// 出題した問題の数だけ処理を実施する。
					allQuestionWordsList.forEach((allQuestionWords) => {
					  const tr = document.createElement("tr");
					  allQuestionsList.appendChild(tr);
					  // 問題ごとにobjArrayを変え、表に各項目を入れていく。
					  const objArray = Object.entries(allQuestionWords);
					  objArray.forEach((arr) => {
						const td = document.createElement("td");
						td.textContent = arr[1];
						if (arr[1] == "▷") { // ▷を押下した時
							td.onclick = function() {
								pronounce(objArray[3][1]); // その行の英単語を発音させる。
							};
						};
						tr.appendChild(td);
					  });
					});

					// 出題した出題問題リストポップアップを表示した後の「閉じる」ボタンを定義する。
					const closeAllQuestionsList = document.getElementById("closeAllQuestionsList");

					// 「問題を振り返る」ボタン押下で出題問題リストポップアップを開く。
					checkQuestions.onclick = function() {
						// メーターを非表示にする。
						meter.className = "transparent";
						// 出題問題リストを表示させる。
						allQuestionsListEntireScr.className = "allQuestionsListEntireScr";
						closeAllQuestionsList.className = "closeAllQuestionsList";
					};
					// 「閉じる」ボタン押下で出題問題リストポップアップを閉じる。
						closeAllQuestionsList.onclick = function() {
						// メーターを表示にさせる。
						meter.className = "meter";
						// 出題問題リストを非表示にする。
						allQuestionsListEntireScr.className = "transparent";
						closeAllQuestionsList.className = "transparent";
					};


					// 2秒後に得点を表示させる。また、もう一度ボタンと戻るボタンを表示させる。
					setTimeout(function(){
					// 得点の表示
					// プレイモード：練習・普通の場合は、スコアを表示する。
					if ( playMode == "練習" || playMode == "普通") {
						closePopupClear.textContent = "お疲れ様でした！";
						closePopupClear.className = "closePopupClear";
						closePopup.textContent = `あなたの成績は以下の通りです!`;
						//closePopup.textContent = `あなたの得点は ${totalScore.toLocaleString()} 点です!`;
						closePopup.className = "endResultPopupNoClear";
					} else { // プレイモード：タイムアタックの場合は、かかった時間を表示する。
							// ただし、すべての出題範囲に解答できた場合のみ。
						if ( gameCompleteTimeAttackFlag == "2") {
							const remainAllSecTimeAttack = Math.ceil(totalPlayingTimeMSec/1000);
							const remainMinTimeAttack = Math.floor(remainAllSecTimeAttack / 60);
							const remainSecTimeAttack = Math.ceil(remainAllSecTimeAttack % 60);
							closePopupClear.textContent = "お疲れ様でした！ゲームクリアです！";
							closePopupClear.className = "closePopupClear";
							closePopup.textContent = `あなたがかかった時間は ${(`0${remainMinTimeAttack}` ).slice( -2 )}分${(`0${remainSecTimeAttack}` ).slice( -2 )}秒 です!`;
							closePopup.className = "endResultPopupClear";
						} else { // 時間切れの場合は、クリアできなかったと表示する。
							closePopup.textContent = `残念ながらクリアできませんでした。`;
							closePopup.className = "endResultPopupNoClear";
						}
					};

					// 最終結果として、問題数、合計正解数、最高連続正解数を表示する。
					closePopupTotalQuestionNum.textContent = `出題数 : ${eachQuestionOrder}`;
					closePopupFinalCorrectNum.textContent = `${displayNumCorrectWord.textContent} : ${totalNumCorrectNum}`;
					closePopupFinalMaxConsecutiveCorrectNum.textContent = `${displayMaxConsecutiveCorrectWord.textContent} : ${totalMaxConsecutiveNumCorrectNum}`;

					// もう一度ボタンの表示（transparentを消して表示させる）
					restartBtn.classList.remove('transparent');
					// 戻るボタンの表示（transparentを消して表示させる）
					backBtn.classList.remove('transparent');
					// 問題を振り返るボタンの表示
					checkQuestions.className = "checkQuestions";
					checkQuestions.textContent ="問題を振り返る";
					},2000);
				};
				// 以上、ゲーム終了時の処理を定義する。------------------------------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、スコアをアップし、現在のtotalScoreを表示する処理を定義する。---------------------------
				// ------------------------------------------------------------------------------------
				// function countUpScore(){
				// if (displayWord.textContent.length < refTextLengthForCountUpLevel1){
				// 	addPoint = addScoreLevel1;
				// } else {
				// 	addPoint = addScoreLevel2;
				// };
				// 	// 合計得点を定義する。
				// 	totalScore = totalScore + addPoint;
				// 	displayScore.setAttribute('data-num', totalScore);

				// 	var countElm = $('.displayScore'),
				// 	countSpeed = 10;

				// 	countElm.each(function(){
				// 		var self = $(this),
				// 		// 合計得点を定義する。
				// 		countMax = self.attr('data-num'),
				// 		thisCount = self.text(),
				// 		countTimer;
				// 		countUpAnime();

				// 		// 数値をカウントアップするアニメーションを定義する。
				// 		function countUpAnime(){
				// 			countTimer = setInterval(function(){
				// 				var countNext = thisCount++;
				// 				self.text(countNext);
				// 				if(countNext == countMax){
				// 					clearInterval(countTimer);
				// 				}
				// 			},countSpeed);
				// 		};
				// 	});
				// };
				// 以上、スコアをアップし、現在のtotalScoreを表示する処理を定義する。---------------------------
				// ------------------------------------------------------------------------------------


				// 以下、正解数をカウントアップする処理を定義する。--------------------------------------------
				// ------------------------------------------------------------------------------------
				function countUpCorrectNum(){
					// 合計正解数のカウントアップ
					totalNumCorrectNum = totalNumCorrectNum + 1;
					displayNumCorrectNum.textContent = totalNumCorrectNum;
					// 合計正解数、連続正解数、最高連続正解数をカウントアップする+1を定義。
					displayAddCorrectNum.textContent = "+1";
					// 合計正解数、連続正解数、最高連続正解数+1をフェードアウトする。
					displayAddCorrectNum.classList.add('fadeout');
					// fadeoutのclassを取り除くことで、2回目以降も+1が表示されるようにする。
					setTimeout(function(){
						displayAddCorrectNum.textContent = "";
						displayAddCorrectNum.classList.remove('fadeout');
					}, 1000);

					// 連続正解数のカウントアップ
					totalConsecutiveNumCorrectNum = totalConsecutiveNumCorrectNum + 1;
					displayConsecutiveCorrectNum.textContent = totalConsecutiveNumCorrectNum;
					// 連続正解数をカウントアップする+1を定義。
					displayAddConsecutiveCorrectNum.textContent = "+1";
					// 連続正解数+1をフェードアウトする。
					displayAddConsecutiveCorrectNum.classList.add('fadeout');
					// fadeoutのclassを取り除くことで、2回目以降も+1が表示されるようにする。
					setTimeout(function(){
						displayAddConsecutiveCorrectNum.textContent = "";
						displayAddConsecutiveCorrectNum.classList.remove('fadeout');
					}, 1000);

					// 最高連続正解数のカウントアップ
					if (totalMaxConsecutiveNumCorrectNum < totalConsecutiveNumCorrectNum) {
						totalMaxConsecutiveNumCorrectNum = totalMaxConsecutiveNumCorrectNum + 1;
						displayMaxConsecutiveCorrectNum.textContent = totalMaxConsecutiveNumCorrectNum;
						// 最高連続正解数をカウントアップする+1を定義。
						displayAddMaxConsecutiveCorrectNum.textContent = "+1";
						// 最高連続正解数+1をフェードアウトする。
						displayAddMaxConsecutiveCorrectNum.classList.add('fadeout');
						// fadeoutのclassを取り除くことで、2回目以降も+1が表示されるようにする。
						setTimeout(function(){
							displayAddMaxConsecutiveCorrectNum.textContent = "";
							displayAddMaxConsecutiveCorrectNum.classList.remove('fadeout');
						}, 1000);
					};
				};
				// 以上、正解数をカウントアップする処理を定義する。--------------------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、タイプした文字が表示文字と一致する場合の処理を定義する。--------------------------------
				// ------------------------------------------------------------------------------------
				function keyDownCharCountUp(keyDownChar){
				if(playEndFlag === "0"){
				// 回答する訳のパターンの判別がまだできていない場合、もしくは、訳１で確定している場合はこちらを呼び出す。------------------------------
				// -------------------------------------------------------------------------------------------------------------------
					if ((japTransPattern1Flag === "0" && japTransPattern2Flag === "0")
						|| (japTransPattern1Flag === "1" && japTransPattern2Flag === "0")) {
						// 文字によって、文字列の最後にあるかどうかで入力形式が変わるため、"っ""ん"は個別に処理を定義する。
						// 先頭文字が小さい"っ"の場合
						// uはxtsuなどで"っ"を打ち込めるため、条件分岐要。
						if (charArrayInDisplayWordJap[0].textContent === "っ") {
							if (keyDownChar.key !== "a"
							&& keyDownChar.key !== "i"
							&& keyDownChar.key !== "e"
							&& keyDownChar.key !== "o"
							&& keyDownChar.key !== "n") {
								// "っ"が最後の文字ではない場合、同じキーを２回連続でタイプしてOKとする。
								if (charArrayInDisplayWordJap[1] != null){
									// 入力対象文字に対して、入力処理が開始していない場合
									if (shiftAlreadyStartedCountAll === 0 && keyDownChar.key !== "u") {
										keyTempForSmallTsuPreWithNext = keyDownChar.key;
										shiftAlreadyStartedCountAll = 1;
										correctTypingFlag = "1";
									} else {
										// 同じアルファベットを入力した場合、"っ"を入力完了にし、再度keyDownCharCountUpを実施する。
										if(keyDownChar.key === keyTempForSmallTsuPreWithNext && keyDownChar.key !== "u"){
											keyTempForSmallTsuPreWithNext = "";
											keyTempForSmallTsuPreFirst = "";
											keyTempForSmallTsuPreSecond = "";
											keyTempForSmallTsuPreThird = "";
											charArrayInDisplayWordJap[0].className = "add_red";
											charArrayInDisplayWordJap.shift();
											shiftAlreadyStartedCountAll = 0;
											correctTypingFlag = "1";
											keyDownCharCountUp(keyDownChar);
										// 異なる場合は前回入力アルファベットに入力したアルファベットを上書き
										} else {
											if (keyDownChar.key === "t" && (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")){
											} else if ((keyDownChar.key === "u" || keyDownChar.key === "s") && keyTempForSmallTsuPreSecond === "t"
													&& (keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")){
											} else {
												missTypingFlag = "1";
											};
											if (keyDownChar.key !== "u"){
											keyTempForSmallTsuPreWithNext = keyDownChar.key;
											};
										};
									};
								};

								// 先頭文字が小さい"っ"の場合(上記の2連続同一キータイプにより"っ"の入力処理が完了した場合に、下記処理が開始するのを防ぐために条件分岐を設定)
								if (charArrayInDisplayWordJap[0].textContent === "っ") {
								// "っ"の単独入力を可能にする。
									if(keyDownChar.key === "l" || keyDownChar.key === "x"){
										keyTempForSmallTsuPreFirst = keyDownChar.key;
										if (keyTempForSmallTsuPreWithNext !== "l"
										&& keyTempForSmallTsuPreWithNext !== "x"){
											correctTypingFlag = "1";
										};
									};
									if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")
										&& keyDownChar.key === "t") {
										keyTempForSmallTsuPreSecond = keyDownChar.key;
										correctTypingFlag = "1";
									};
									if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")
									&& keyTempForSmallTsuPreSecond === "t" && keyDownChar.key === "s") {
										keyTempForSmallTsuPreThird = keyDownChar.key;
										correctTypingFlag = "1";
									};
									if ((keyTempForSmallTsuPreFirst === "l" || keyTempForSmallTsuPreFirst === "x")
									&& keyTempForSmallTsuPreSecond === "t" && keyDownChar.key === "u") {
										keyTempForSmallTsuPreWithNext = "";
										keyTempForSmallTsuPreFirst = "";
										keyTempForSmallTsuPreSecond = "";
										keyTempForSmallTsuPreThird = "";
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
										correctTypingFlag = "1";
									};
								};
							} else {
								// "a""i""e""o""n"が入力された時点でNGとする。
								missTypingFlag = "1";
							};

						// 先頭文字が"ん"の場合、かつ次の文字あり、その文字が母音でない場合は "n"+"n以外の子音"でもOKとする。
						// それ以外の場合は、マッピング表の通り"nn""xn"でしか入力できない。
						} else if (charArrayInDisplayWordJap[0].textContent === "ん"){
									if (shiftAlreadyStartedCountAll === 0){
										if (keyDownChar.key === "n" || keyDownChar.key === "x"){
											keyTempForNnPre = keyDownChar.key;
											shiftAlreadyStartedCountAll = 1;
											correctTypingFlag = "1";
										} else {
											missTypingFlag = "1";
										};
									} else {
										if (keyTempForNnPre === "n"){
											if(charArrayInDisplayWordJap[1] != null){
												if (charArrayInDisplayWordJap[1].textContent !== "あ"
												&& charArrayInDisplayWordJap[1].textContent !== "い"
												&& charArrayInDisplayWordJap[1].textContent !== "う"
												&& charArrayInDisplayWordJap[1].textContent !== "え"
												&& charArrayInDisplayWordJap[1].textContent !== "お"){
													if(keyDownChar.key !== "a"
													&& keyDownChar.key !== "i"
													&& keyDownChar.key !== "u"
													&& keyDownChar.key !== "e"
													&& keyDownChar.key !== "o"
													&& keyDownChar.key !== "y"){
														keyTempForNnPre = "";
														charArrayInDisplayWordJap[0].className = "add_red";
														charArrayInDisplayWordJap.shift();
														shiftAlreadyStartedCountAll = 0;
														correctTypingFlag = "1";
														if(keyDownChar.key !== "n"){
															keyDownCharCountUp(keyDownChar);
														};
													} else {
														missTypingFlag = "1";
													};
												} else {
													if(keyDownChar.key !== "a"
													&& keyDownChar.key !== "i"
													&& keyDownChar.key !== "u"
													&& keyDownChar.key !== "e"
													&& keyDownChar.key !== "o"
													&& keyDownChar.key !== "y"){
														keyTempForNnPre = "";
														charArrayInDisplayWordJap[0].className = "add_red";
														charArrayInDisplayWordJap.shift();
														shiftAlreadyStartedCountAll = 0;
														correctTypingFlag = "1";
														if(keyDownChar.key !== "n"){
															keyDownCharCountUp(keyDownChar);
														};
													} else {
														missTypingFlag = "1";
													};
												};
											} else {
												if (keyDownChar.key === "n"){
													keyTempForNnPre = "";
													charArrayInDisplayWordJap[0].className = "add_red";
													charArrayInDisplayWordJap.shift();
													shiftAlreadyStartedCountAll = 0;
													correctTypingFlag = "1";
												} else {
													missTypingFlag = "1";
												};
											};
										} else if (keyTempForNnPre === "x"){
											if(keyDownChar.key === "n"){
												keyTempForNnPre = "";
												charArrayInDisplayWordJap[0].className = "add_red";
												charArrayInDisplayWordJap.shift();
												shiftAlreadyStartedCountAll = 0;
												correctTypingFlag = "1";
											} else {
												missTypingFlag = "1";
											};
										};
									};
							// "っ""ん"以外の文字の場合
						} else {

								// 以下、入力対象文字をアルファベットに分解する。------------------------------------------------------------------------
								// --------------------------------------------------------------------------------------------------------------
									// 入力対象文字に対して、入力処理が開始していない場合
									if (shiftAlreadyStartedCountAll === 0 ){
									// 2文字目が存在する場合(最後の文字でない場合)(例）"きょ"で終わる場合、"kyo"と打っても可、"き"と"ょ"で分けて打っても可)
									if(charArrayInDisplayWordJap[1] != null){
										// 2文字を一緒に入力するパターンに対応する処理を定義する。(例）"きょ"など)
										wordLetterWithSmallLetter = charArrayInDisplayWordJap[0].textContent + charArrayInDisplayWordJap[1].textContent;
									// 文字をローマ字に変換し、アルファベットごとに分ける。
									// 2文字に対して、ローマ字変換パターン１をsplitする。（例）"きょ" を "k" "y" "o" に分解する。）
									if (romaMappingTableFirst[wordLetterWithSmallLetter] != null){
									charArrayInDisplayWordAlphaFirst = romaMappingTableFirst[wordLetterWithSmallLetter].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
									})};
									// 2文字に対してローマ字変換パターン２が存在する場合はsplitする。
									if (romaMappingTableSecond[wordLetterWithSmallLetter] != null){
										charArrayInDisplayWordAlphaSecond = romaMappingTableSecond[wordLetterWithSmallLetter].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
										});
									};
									// 2文字に対してローマ字変換パターン３が存在する場合はsplitする。
									if (romaMappingTableThird[wordLetterWithSmallLetter] != null){
										charArrayInDisplayWordAlphaThird = romaMappingTableThird[wordLetterWithSmallLetter].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
										});
									};
									};

									// 1文字のみを先に入力するパターンに対応する処理を定義する。（例）"きょ"を"き"として分解する）
									wordLetterSole = charArrayInDisplayWordJap[0].textContent;
									// 1文字目のみ対して、ローマ字変換パターン１をsplitする。
									// 母音の場合はsplit不可のため処理を分ける。
									if (wordLetterSole !== "あ"
										&& wordLetterSole !== "い"
										&& wordLetterSole !== "う"
										&& wordLetterSole !== "え"
										&& wordLetterSole !== "お"){
									charArrayInDisplayWordAlphaSole = romaMappingTableFirst[wordLetterSole].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
									})} else {
										let spanValue = document.createElement("span");
										spanValue.textContent = romaMappingTableFirst[wordLetterSole];
										charArrayInDisplayWordAlphaSole = [spanValue];
									};

									// 1文字目のみ対してローマ字変換パターン２が存在する場合はsplitする。
									if (romaMappingTableSecond[wordLetterSole] != null){
										charArrayInDisplayWordAlphaSoleSecond = romaMappingTableSecond[wordLetterSole].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
										});
									};
									// 1文字目のみ対してローマ字変換パターン３が存在する場合はsplitする。
									if (romaMappingTableThird[wordLetterSole] != null){
										charArrayInDisplayWordAlphaSoleThird = romaMappingTableThird[wordLetterSole].split("").map(function(value){
										let spanValue = document.createElement("span");
										spanValue.textContent = value;
										return spanValue;
										});
									};
									};
							// 以上、入力対象文字をアルファベットに分解する。------------------------------------------------------------------------
							// --------------------------------------------------------------------------------------------------------------


							// 以下、文字入力によるアルファベットに対する処理を開始する。--------------------------------------------------------------
							// --------------------------------------------------------------------------------------------------------------

								// 文字の入力開始前である場合
								if (shiftAlreadyStartedCountAll === 0){
									// 2文字目が存在する場合(最後の文字でない場合)
									if(charArrayInDisplayWordJap[1] != null){
									// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
									if (romaMappingTableFirst[wordLetterWithSmallLetter] != null){
									if(keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
									charArrayInDisplayWordAlphaFirst.shift();
									shiftAlreadyStartedCountAll = 1;
									shiftAlreadyStartedCountFirst = 1;
									if(charArrayInDisplayWordAlphaFirst.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap[1].className = "add_red";
										charArrayInDisplayWordJap.shift();
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
									}}};
									// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetterWithSmallLetter] != null){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent){
										charArrayInDisplayWordAlphaSecond.shift();
										shiftAlreadyStartedCountAll = 1;
										shiftAlreadyStartedCountSecond = 1;
										if(charArrayInDisplayWordAlphaSecond.length === 0){
											charArrayInDisplayWordJap[0].className = "add_red";
											charArrayInDisplayWordJap[1].className = "add_red";
											charArrayInDisplayWordJap.shift();
											charArrayInDisplayWordJap.shift();
											shiftAlreadyStartedCountAll = 0;
									}}};
									// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetterWithSmallLetter] != null){
										if(keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent){
										charArrayInDisplayWordAlphaThird.shift();
										shiftAlreadyStartedCountAll = 1;
										shiftAlreadyStartedCountThird = 1;
										if(charArrayInDisplayWordAlphaThird.length === 0){
											charArrayInDisplayWordJap[0].className = "add_red";
											charArrayInDisplayWordJap[1].className = "add_red";
											charArrayInDisplayWordJap.shift();
											charArrayInDisplayWordJap.shift();
											shiftAlreadyStartedCountAll = 0;
									}}}};

									// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
									if(keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
										charArrayInDisplayWordAlphaSole.shift();
										shiftAlreadyStartedCountAll = 1;
										shiftAlreadyStartedCountSoleFirst = 1;
									if(charArrayInDisplayWordAlphaSole.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
									}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetterSole] != null){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent
										&& charArrayInDisplayWordAlphaSole.length !== 0){
										charArrayInDisplayWordAlphaSoleSecond.shift();
										shiftAlreadyStartedCountAll = 1;
										shiftAlreadyStartedCountSoleSecond = 1;
										if(charArrayInDisplayWordAlphaSoleSecond.length === 0){
											charArrayInDisplayWordJap[0].className = "add_red";
											charArrayInDisplayWordJap.shift();
											shiftAlreadyStartedCountAll = 0;
										}}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetterSole] != null){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent
										&& charArrayInDisplayWordAlphaSole.length !== 0
										&& charArrayInDisplayWordAlphaSoleSecond.length !== 0){
										charArrayInDisplayWordAlphaSoleThird.shift();
										shiftAlreadyStartedCountAll = 1;
										shiftAlreadyStartedCountSoleThird = 1;
										if(charArrayInDisplayWordAlphaSoleThird.length === 0){
											charArrayInDisplayWordJap[0].className = "add_red";
											charArrayInDisplayWordJap.shift();
											shiftAlreadyStartedCountAll = 0;
										}}};

									// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
									if (shiftAlreadyStartedCountFirst === 1
										|| shiftAlreadyStartedCountSecond === 1
										|| shiftAlreadyStartedCountThird === 1
										|| shiftAlreadyStartedCountSoleFirst === 1
										|| shiftAlreadyStartedCountSoleSecond === 1
										|| shiftAlreadyStartedCountSoleThird === 1) {
											correctTypingFlag = "1";
									} else {
											missTypingFlag = "1";
									};

									// 文字入力が完了している場合、カウントを0にする。
									if (shiftAlreadyStartedCountAll === 0){
									shiftAlreadyStartedCountFirst = 0;
									shiftAlreadyStartedCountSecond = 0;
									shiftAlreadyStartedCountThird = 0;
									shiftAlreadyStartedCountSoleFirst = 0;
									shiftAlreadyStartedCountSoleSecond = 0;
									shiftAlreadyStartedCountSoleThird = 0;
									};


						// すでに1つのアルファベットを入力済みの場合
						} else if (shiftAlreadyStartedCountAll === 1){
							// 2文字目が存在する場合(最後の文字でない場合)
							if(charArrayInDisplayWordJap[1] != null){
								// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
								if(shiftAlreadyStartedCountFirst === 1){
								if(keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
									charArrayInDisplayWordAlphaFirst.shift();
									shiftAlreadyStartedCountAll = 2;
									shiftAlreadyStartedCountFirst = 2;
									if(charArrayInDisplayWordAlphaFirst.length === 0){
									charArrayInDisplayWordJap[0].className = "add_red";
									charArrayInDisplayWordJap[1].className = "add_red";
									charArrayInDisplayWordJap.shift();
									charArrayInDisplayWordJap.shift();
									shiftAlreadyStartedCountAll = 0;
								}}};
								// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
								if (romaMappingTableSecond[wordLetterWithSmallLetter] != null){
									if(shiftAlreadyStartedCountSecond === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent){
										charArrayInDisplayWordAlphaSecond.shift();
										shiftAlreadyStartedCountAll = 2;
										shiftAlreadyStartedCountSecond = 2;
										if(charArrayInDisplayWordAlphaSecond.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap[1].className = "add_red";
										charArrayInDisplayWordJap.shift();
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
								}}}};
								// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
								if (romaMappingTableThird[wordLetterWithSmallLetter] != null){
									if(shiftAlreadyStartedCountThird === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent){
										charArrayInDisplayWordAlphaThird.shift();
										shiftAlreadyStartedCountAll = 2;
										shiftAlreadyStartedCountThird = 2;
										if(charArrayInDisplayWordAlphaThird.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap[1].className = "add_red";
										charArrayInDisplayWordJap.shift();
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
								}}}}};

								// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
								if(shiftAlreadyStartedCountSoleFirst === 1){
								if(keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
									charArrayInDisplayWordAlphaSole.shift();
									shiftAlreadyStartedCountAll = 2;
									shiftAlreadyStartedCountSoleFirst = 2;
									if(charArrayInDisplayWordAlphaSole.length === 0){
									charArrayInDisplayWordJap[0].className = "add_red";
									charArrayInDisplayWordJap.shift();
									shiftAlreadyStartedCountAll = 0;
									}}};
								// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
								if (romaMappingTableSecond[wordLetterSole] != null){
									if(shiftAlreadyStartedCountSoleSecond === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent){
										charArrayInDisplayWordAlphaSoleSecond.shift();
										shiftAlreadyStartedCountAll = 2;
										shiftAlreadyStartedCountSoleSecond = 2;
										if(charArrayInDisplayWordAlphaSoleSecond.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
									}}}};
								// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
								if (romaMappingTableThird[wordLetterSole] != null){
									if(shiftAlreadyStartedCountSoleThird === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent){
										charArrayInDisplayWordAlphaSoleThird.shift();
										shiftAlreadyStartedCountAll = 2;
										shiftAlreadyStartedCountSoleThird = 2;
										if(charArrayInDisplayWordAlphaSoleThird.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
										}}}};



								// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
								if (shiftAlreadyStartedCountFirst === 2
									|| shiftAlreadyStartedCountSecond === 2
									|| shiftAlreadyStartedCountThird === 2
									|| shiftAlreadyStartedCountSoleFirst === 2
									|| shiftAlreadyStartedCountSoleSecond === 2
									|| shiftAlreadyStartedCountSoleThird === 2) {
											correctTypingFlag = "1";
								} else {
											missTypingFlag = "1";
								};

									// 文字入力が完了している場合、カウントを0にする。
									if (shiftAlreadyStartedCountAll === 0){
									shiftAlreadyStartedCountFirst = 0;
									shiftAlreadyStartedCountSecond = 0;
									shiftAlreadyStartedCountThird = 0;
									shiftAlreadyStartedCountSoleFirst = 0;
									shiftAlreadyStartedCountSoleSecond = 0;
									shiftAlreadyStartedCountSoleThird = 0;
									};


							// すでに2つのアルファベットを入力済みの場合
							} else if (shiftAlreadyStartedCountAll === 2){
							// 2文字目が存在する場合(最後の文字でない場合)
							if(charArrayInDisplayWordJap[1] != null){
								// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
								if(shiftAlreadyStartedCountFirst === 2){
								if(keyDownChar.key === charArrayInDisplayWordAlphaFirst[0].textContent) {
									charArrayInDisplayWordAlphaFirst.shift();
									shiftAlreadyStartedCountAll = 3;
									shiftAlreadyStartedCountFirst = 3;
									if(charArrayInDisplayWordAlphaFirst.length === 0){
									charArrayInDisplayWordJap[0].className = "add_red";
									charArrayInDisplayWordJap[1].className = "add_red";
									charArrayInDisplayWordJap.shift();
									charArrayInDisplayWordJap.shift();
									shiftAlreadyStartedCountAll = 0;
								}}};
								// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
								if (romaMappingTableSecond[wordLetterWithSmallLetter] != null){
									if(shiftAlreadyStartedCountSecond === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSecond[0].textContent){
										charArrayInDisplayWordAlphaSecond.shift();
										shiftAlreadyStartedCountAll = 3;
										shiftAlreadyStartedCountSecond = 3;
										if(charArrayInDisplayWordAlphaSecond.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap[1].className = "add_red";
										charArrayInDisplayWordJap.shift();
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
								}}}};
								// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
								if (romaMappingTableThird[wordLetterWithSmallLetter] != null){
									if(shiftAlreadyStartedCountThird === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlphaThird[0].textContent){
										charArrayInDisplayWordAlphaThird.shift();
										shiftAlreadyStartedCountAll = 3;
										shiftAlreadyStartedCountThird = 3;
										if(charArrayInDisplayWordAlphaThird.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap[1].className = "add_red";
										charArrayInDisplayWordJap.shift();
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
								}}}}};

								// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
								if(shiftAlreadyStartedCountSoleFirst === 2){
								if(keyDownChar.key === charArrayInDisplayWordAlphaSole[0].textContent) {
									charArrayInDisplayWordAlphaSole.shift();
									shiftAlreadyStartedCountAll = 3;
									shiftAlreadyStartedCountSoleFirst = 3;
									if(charArrayInDisplayWordAlphaSole.length === 0){
									charArrayInDisplayWordJap[0].className = "add_red";
									charArrayInDisplayWordJap.shift();
									shiftAlreadyStartedCountAll = 0;
									}}};
								// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
								if (romaMappingTableSecond[wordLetterSole] != null){
									if(shiftAlreadyStartedCountSoleSecond === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSoleSecond[0].textContent){
										charArrayInDisplayWordAlphaSoleSecond.shift();
										shiftAlreadyStartedCountAll = 3;
										shiftAlreadyStartedCountSoleSecond = 3;
										if(charArrayInDisplayWordAlphaSoleSecond.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
									}}}};
								// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
								if (romaMappingTableThird[wordLetterSole] != null){
									if(shiftAlreadyStartedCountSoleThird === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlphaSoleThird[0].textContent){
										charArrayInDisplayWordAlphaSoleThird.shift();
										shiftAlreadyStartedCountAll = 3;
										shiftAlreadyStartedCountSoleThird = 3;
										if(charArrayInDisplayWordAlphaSoleThird.length === 0){
										charArrayInDisplayWordJap[0].className = "add_red";
										charArrayInDisplayWordJap.shift();
										shiftAlreadyStartedCountAll = 0;
										}}}};

								// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
								if (shiftAlreadyStartedCountFirst === 3
								|| shiftAlreadyStartedCountSecond === 3
								|| shiftAlreadyStartedCountThird === 3
								|| shiftAlreadyStartedCountSoleFirst === 3
								|| shiftAlreadyStartedCountSoleSecond === 3
								|| shiftAlreadyStartedCountSoleThird === 3) {
										correctTypingFlag = "1";
								} else {
										missTypingFlag = "1";
								};

								// 文字入力が完了している場合、カウントを0にする。
								if (shiftAlreadyStartedCountAll === 0){
									shiftAlreadyStartedCountFirst = 0;
									shiftAlreadyStartedCountSecond = 0;
									shiftAlreadyStartedCountThird = 0;
									shiftAlreadyStartedCountSoleFirst = 0;
									shiftAlreadyStartedCountSoleSecond = 0;
									shiftAlreadyStartedCountSoleThird = 0;
								};
							}
								
							// 以下、文字入力によるアルファベットに対する処理を開始する。--------------------------------------------------------------
							// --------------------------------------------------------------------------------------------------------------
						}
					};
				// 以上、回答する訳のパターンの判別がまだできていない場合、もしくは、訳１で確定している場合はこちらを呼び出す。------------------------------
				// -------------------------------------------------------------------------------------------------------------------


				// 回答する訳のパターンの判別がまだできていない場合、もしくは、訳２で確定している場合はこちらを呼び出す。------------------------------
				// -------------------------------------------------------------------------------------------------------------------
					// 訳２が存在する場合のみ、下記処理を実施可能にする。
					if (charArrayInDisplayWord2Jap.length > 0) {
						if ((japTransPattern1Flag === "0" && japTransPattern2Flag === "0")
						|| (japTransPattern1Flag === "0" && japTransPattern2Flag === "1")){
							// 文字によって、文字列の最後にあるかどうかで入力形式が変わるため、"っ""ん"は個別に処理を定義する。
							// 先頭文字が小さい"っ"の場合
							// uはxtsuなどで"っ"を打ち込めるため、条件分岐要。
							if (charArrayInDisplayWord2Jap[0].textContent === "っ") {
								if (keyDownChar.key !== "a"
								&& keyDownChar.key !== "i"
								&& keyDownChar.key !== "e"
								&& keyDownChar.key !== "o"
								&& keyDownChar.key !== "n") {
									// "っ"が最後の文字ではない場合、同じキーを２回連続でタイプしてOKとする。
									if (charArrayInDisplayWord2Jap[1] != null){
										// 入力対象文字に対して、入力処理が開始していない場合
										if (shiftAlreadyStartedCount2All === 0 && keyDownChar.key !== "u") {
											keyTempForSmallTsuPre2WithNext = keyDownChar.key;
											shiftAlreadyStartedCount2All = 1;
											correctTyping2Flag = "1";
										} else {
											// 同じアルファベットを入力した場合、"っ"を入力完了にし、再度keyDownCharCountUpを実施する。
											if(keyDownChar.key === keyTempForSmallTsuPre2WithNext && keyDownChar.key !== "u"){
												keyTempForSmallTsuPre2WithNext = "";
												keyTempForSmallTsuPre2First = "";
												keyTempForSmallTsuPre2Second = "";
												keyTempForSmallTsuPre2Third = "";
												charArrayInDisplayWord2Jap[0].className = "add_red";
												charArrayInDisplayWord2Jap.shift();
												shiftAlreadyStartedCount2All = 0;
												correctTyping2Flag = "1";
												keyDownCharCountUp(keyDownChar);
											// 異なる場合は前回入力アルファベットに入力したアルファベットを上書き
											} else {
												if (keyDownChar.key === "t" && (keyTempForSmallTsuPre2First === "l" || keyTempForSmallTsuPre2First === "x")){
												} else if ((keyDownChar.key === "u" || keyDownChar.key === "s") && keyTempForSmallTsuPre2Second === "t"
														&& (keyTempForSmallTsuPre2First === "l" || keyTempForSmallTsuPre2First === "x")){
												} else {
													missTyping2Flag = "1";
												};
												if (keyDownChar.key !== "u"){
												keyTempForSmallTsuPre2WithNext = keyDownChar.key;
												};
											};
										};
									};

									// 先頭文字が小さい"っ"の場合(上記の2連続同一キータイプにより"っ"の入力処理が完了した場合に、下記処理が開始するのを防ぐために条件分岐を設定)
									if (charArrayInDisplayWord2Jap[0].textContent === "っ") {
									// "っ"の単独入力を可能にする。
										if(keyDownChar.key === "l" || keyDownChar.key === "x"){
											keyTempForSmallTsuPre2First = keyDownChar.key;
											if (keyTempForSmallTsuPre2WithNext !== "l"
											&& keyTempForSmallTsuPre2WithNext !== "x"){
												correctTyping2Flag = "1";
											};
										};
										if ((keyTempForSmallTsuPre2First === "l" || keyTempForSmallTsuPre2First === "x")
											&& keyDownChar.key === "t") {
											keyTempForSmallTsuPre2Second = keyDownChar.key;
											correctTyping2Flag = "1";
										};
										if ((keyTempForSmallTsuPre2First === "l" || keyTempForSmallTsuPre2First === "x")
										&& keyTempForSmallTsuPre2Second === "t" && keyDownChar.key === "s") {
											keyTempForSmallTsuPre2Third = keyDownChar.key;
											correctTyping2Flag = "1";
										};
										if ((keyTempForSmallTsuPre2First === "l" || keyTempForSmallTsuPre2First === "x")
										&& keyTempForSmallTsuPre2Second === "t" && keyDownChar.key === "u") {
											keyTempForSmallTsuPre2WithNext = "";
											keyTempForSmallTsuPre2First = "";
											keyTempForSmallTsuPre2Second = "";
											keyTempForSmallTsuPre2Third = "";
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
											correctTyping2Flag = "1";
										};
									};
								} else {
									// "a""i""e""o""n"が入力された時点でNGとする。
									missTyping2Flag = "1";
								};

							// 先頭文字が"ん"の場合、かつ次の文字あり、その文字が母音でない場合は "n"+"n以外の子音"でもOKとする。
							// それ以外の場合は、マッピング表の通り"nn""xn"でしか入力できない。
							} else if (charArrayInDisplayWord2Jap[0].textContent === "ん"){
										if (shiftAlreadyStartedCount2All === 0){
											if (keyDownChar.key === "n" || keyDownChar.key === "x"){
												keyTempForNnPre2 = keyDownChar.key;
												shiftAlreadyStartedCount2All = 1;
												correctTyping2Flag = "1";
											} else {
												missTyping2Flag = "1";
											};
										} else {
											if (keyTempForNnPre2 === "n"){
												if(charArrayInDisplayWord2Jap[1] != null){
													if (charArrayInDisplayWord2Jap[1].textContent !== "あ"
													&& charArrayInDisplayWord2Jap[1].textContent !== "い"
													&& charArrayInDisplayWord2Jap[1].textContent !== "う"
													&& charArrayInDisplayWord2Jap[1].textContent !== "え"
													&& charArrayInDisplayWord2Jap[1].textContent !== "お"){
														if(keyDownChar.key !== "a"
														&& keyDownChar.key !== "i"
														&& keyDownChar.key !== "u"
														&& keyDownChar.key !== "e"
														&& keyDownChar.key !== "o"
														&& keyDownChar.key !== "y"){
															keyTempForNnPre2 = "";
															charArrayInDisplayWord2Jap[0].className = "add_red";
															charArrayInDisplayWord2Jap.shift();
															shiftAlreadyStartedCount2All = 0;
															correctTyping2Flag = "1";
															if(keyDownChar.key !== "n"){
																keyDownCharCountUp(keyDownChar);
															};
														} else {
															missTyping2Flag = "1";
														};
													} else {
														if(keyDownChar.key !== "a"
														&& keyDownChar.key !== "i"
														&& keyDownChar.key !== "u"
														&& keyDownChar.key !== "e"
														&& keyDownChar.key !== "o"
														&& keyDownChar.key !== "y"){
															keyTempForNnPre2 = "";
															charArrayInDisplayWord2Jap[0].className = "add_red";
															charArrayInDisplayWord2Jap.shift();
															shiftAlreadyStartedCount2All = 0;
															correctTyping2Flag = "1";
															if(keyDownChar.key !== "n"){
																keyDownCharCountUp(keyDownChar);
															};
														} else {
															missTyping2Flag = "1";
														};
													};
												} else {
													if (keyDownChar.key === "n"){
														keyTempForNnPre2 = "";
														charArrayInDisplayWord2Jap[0].className = "add_red";
														charArrayInDisplayWord2Jap.shift();
														shiftAlreadyStartedCount2All = 0;
														correctTyping2Flag = "1";
													} else {
														missTyping2Flag = "1";
													};
												};
											} else if (keyTempForNnPre2 === "x"){
												if(keyDownChar.key === "n"){
													keyTempForNnPre2 = "";
													charArrayInDisplayWord2Jap[0].className = "add_red";
													charArrayInDisplayWord2Jap.shift();
													shiftAlreadyStartedCount2All = 0;
													correctTyping2Flag = "1";
												} else {
													missTyping2Flag = "1";
												};
											};
										};
								// "っ""ん"以外の文字の場合
							} else {

									// 以下、入力対象文字をアルファベットに分解する。------------------------------------------------------------------------
									// --------------------------------------------------------------------------------------------------------------
										// 入力対象文字に対して、入力処理が開始していない場合
										if (shiftAlreadyStartedCount2All === 0 ){
										// 2文字目が存在する場合(最後の文字でない場合)(例）"きょ"で終わる場合、"kyo"と打っても可、"き"と"ょ"で分けて打っても可)
										if(charArrayInDisplayWord2Jap[1] != null){
											// 2文字を一緒に入力するパターンに対応する処理を定義する。(例）"きょ"など)
											wordLetter2WithSmallLetter = charArrayInDisplayWord2Jap[0].textContent + charArrayInDisplayWord2Jap[1].textContent;
										// 文字をローマ字に変換し、アルファベットごとに分ける。
										// 2文字に対して、ローマ字変換パターン１をsplitする。（例）"きょ" を "k" "y" "o" に分解する。）
										if (romaMappingTableFirst[wordLetter2WithSmallLetter] != null){
										charArrayInDisplayWordAlpha2First = romaMappingTableFirst[wordLetter2WithSmallLetter].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
										})};
										// 2文字に対してローマ字変換パターン２が存在する場合はsplitする。
										if (romaMappingTableSecond[wordLetter2WithSmallLetter] != null){
											charArrayInDisplayWordAlpha2Second = romaMappingTableSecond[wordLetter2WithSmallLetter].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
											});
										};
										// 2文字に対してローマ字変換パターン３が存在する場合はsplitする。
										if (romaMappingTableThird[wordLetter2WithSmallLetter] != null){
											charArrayInDisplayWordAlpha2Third = romaMappingTableThird[wordLetter2WithSmallLetter].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
											});
										};
										};

										// 1文字のみを先に入力するパターンに対応する処理を定義する。（例）"きょ"を"き"として分解する）
										wordLetter2Sole = charArrayInDisplayWord2Jap[0].textContent;
										// 1文字目のみ対して、ローマ字変換パターン１をsplitする。
										// 母音の場合はsplit不可のため処理を分ける。
										if (wordLetter2Sole !== "あ"
											&& wordLetter2Sole !== "い"
											&& wordLetter2Sole !== "う"
											&& wordLetter2Sole !== "え"
											&& wordLetter2Sole !== "お"){
										charArrayInDisplayWordAlpha2Sole = romaMappingTableFirst[wordLetter2Sole].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
										})} else {
											let spanValue = document.createElement("span");
											spanValue.textContent = romaMappingTableFirst[wordLetter2Sole];
											charArrayInDisplayWordAlpha2Sole = [spanValue];
										};

										// 1文字目のみ対してローマ字変換パターン２が存在する場合はsplitする。
										if (romaMappingTableSecond[wordLetter2Sole] != null){
											charArrayInDisplayWordAlphaSole2Second = romaMappingTableSecond[wordLetter2Sole].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
											});
										};
										// 1文字目のみ対してローマ字変換パターン３が存在する場合はsplitする。
										if (romaMappingTableThird[wordLetter2Sole] != null){
											charArrayInDisplayWordAlphaSole2Third = romaMappingTableThird[wordLetter2Sole].split("").map(function(value){
											let spanValue = document.createElement("span");
											spanValue.textContent = value;
											return spanValue;
											});
										};
										};
								// 以上、入力対象文字をアルファベットに分解する。------------------------------------------------------------------------
								// --------------------------------------------------------------------------------------------------------------


								// 以下、文字入力によるアルファベットに対する処理を開始する。--------------------------------------------------------------
								// --------------------------------------------------------------------------------------------------------------

									// 文字の入力開始前である場合
									if (shiftAlreadyStartedCount2All === 0){
										// 2文字目が存在する場合(最後の文字でない場合)
										if(charArrayInDisplayWord2Jap[1] != null){
										// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
										if (romaMappingTableFirst[wordLetter2WithSmallLetter] != null){
										if(keyDownChar.key === charArrayInDisplayWordAlpha2First[0].textContent) {
										charArrayInDisplayWordAlpha2First.shift();
										shiftAlreadyStartedCount2All = 1;
										shiftAlreadyStartedCount2First = 1;
										if(charArrayInDisplayWordAlpha2First.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap[1].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
										}}};
										// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
										if (romaMappingTableSecond[wordLetter2WithSmallLetter] != null){
											if(keyDownChar.key === charArrayInDisplayWordAlpha2Second[0].textContent){
											charArrayInDisplayWordAlpha2Second.shift();
											shiftAlreadyStartedCount2All = 1;
											shiftAlreadyStartedCount2Second = 1;
											if(charArrayInDisplayWordAlpha2Second.length === 0){
												charArrayInDisplayWord2Jap[0].className = "add_red";
												charArrayInDisplayWord2Jap[1].className = "add_red";
												charArrayInDisplayWord2Jap.shift();
												charArrayInDisplayWord2Jap.shift();
												shiftAlreadyStartedCount2All = 0;
										}}};
										// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
										if (romaMappingTableThird[wordLetter2WithSmallLetter] != null){
											if(keyDownChar.key === charArrayInDisplayWordAlpha2Third[0].textContent){
											charArrayInDisplayWordAlpha2Third.shift();
											shiftAlreadyStartedCount2All = 1;
											shiftAlreadyStartedCount2Third = 1;
											if(charArrayInDisplayWordAlpha2Third.length === 0){
												charArrayInDisplayWord2Jap[0].className = "add_red";
												charArrayInDisplayWord2Jap[1].className = "add_red";
												charArrayInDisplayWord2Jap.shift();
												charArrayInDisplayWord2Jap.shift();
												shiftAlreadyStartedCount2All = 0;
										}}}};

										// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
										if(keyDownChar.key === charArrayInDisplayWordAlpha2Sole[0].textContent) {
											charArrayInDisplayWordAlpha2Sole.shift();
											shiftAlreadyStartedCount2All = 1;
											shiftAlreadyStartedCountSole2First = 1;
										if(charArrayInDisplayWordAlpha2Sole.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
										}};
										// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
										if (romaMappingTableSecond[wordLetter2Sole] != null){
											if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Second[0].textContent
											&& charArrayInDisplayWordAlpha2Sole.length !== 0){
											charArrayInDisplayWordAlphaSole2Second.shift();
											shiftAlreadyStartedCount2All = 1;
											shiftAlreadyStartedCountSole2Second = 1;
											if(charArrayInDisplayWordAlphaSole2Second.length === 0){
												charArrayInDisplayWord2Jap[0].className = "add_red";
												charArrayInDisplayWord2Jap.shift();
												shiftAlreadyStartedCount2All = 0;
											}}};
										// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
										if (romaMappingTableThird[wordLetter2Sole] != null){
											if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Third[0].textContent
											&& charArrayInDisplayWordAlpha2Sole.length !== 0
											&& charArrayInDisplayWordAlphaSole2Second.length !== 0){
											charArrayInDisplayWordAlphaSole2Third.shift();
											shiftAlreadyStartedCount2All = 1;
											shiftAlreadyStartedCountSole2Third = 1;
											if(charArrayInDisplayWordAlphaSole2Third.length === 0){
												charArrayInDisplayWord2Jap[0].className = "add_red";
												charArrayInDisplayWord2Jap.shift();
												shiftAlreadyStartedCount2All = 0;
											}}};

										// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
										if (shiftAlreadyStartedCount2First === 1
											|| shiftAlreadyStartedCount2Second === 1
											|| shiftAlreadyStartedCount2Third === 1
											|| shiftAlreadyStartedCountSole2First === 1
											|| shiftAlreadyStartedCountSole2Second === 1
											|| shiftAlreadyStartedCountSole2Third === 1) {
										correctTyping2Flag = "1";
										} else {
										missTyping2Flag = "1";
										};

										// 文字入力が完了している場合、カウントを0にする。
										if (shiftAlreadyStartedCount2All === 0){
										shiftAlreadyStartedCount2First = 0;
										shiftAlreadyStartedCount2Second = 0;
										shiftAlreadyStartedCount2Third = 0;
										shiftAlreadyStartedCountSole2First = 0;
										shiftAlreadyStartedCountSole2Second = 0;
										shiftAlreadyStartedCountSole2Third = 0;
										};


							// すでに1つのアルファベットを入力済みの場合
							} else if (shiftAlreadyStartedCount2All === 1){
								// 2文字目が存在する場合(最後の文字でない場合)
								if(charArrayInDisplayWord2Jap[1] != null){
									// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
									if(shiftAlreadyStartedCount2First === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlpha2First[0].textContent) {
										charArrayInDisplayWordAlpha2First.shift();
										shiftAlreadyStartedCount2All = 2;
										shiftAlreadyStartedCount2First = 2;
										if(charArrayInDisplayWordAlpha2First.length === 0){
										charArrayInDisplayWord2Jap[0].className = "add_red";
										charArrayInDisplayWord2Jap[1].className = "add_red";
										charArrayInDisplayWord2Jap.shift();
										charArrayInDisplayWord2Jap.shift();
										shiftAlreadyStartedCount2All = 0;
									}}};
									// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetter2WithSmallLetter] != null){
										if(shiftAlreadyStartedCount2Second === 1){
										if(keyDownChar.key === charArrayInDisplayWordAlpha2Second[0].textContent){
											charArrayInDisplayWordAlpha2Second.shift();
											shiftAlreadyStartedCount2All = 2;
											shiftAlreadyStartedCount2Second = 2;
											if(charArrayInDisplayWordAlpha2Second.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap[1].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
									}}}};
									// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetter2WithSmallLetter] != null){
										if(shiftAlreadyStartedCount2Third === 1){
										if(keyDownChar.key === charArrayInDisplayWordAlpha2Third[0].textContent){
											charArrayInDisplayWordAlpha2Third.shift();
											shiftAlreadyStartedCount2All = 2;
											shiftAlreadyStartedCount2Third = 2;
											if(charArrayInDisplayWordAlpha2Third.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap[1].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
									}}}}};

									// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
									if(shiftAlreadyStartedCountSole2First === 1){
									if(keyDownChar.key === charArrayInDisplayWordAlpha2Sole[0].textContent) {
										charArrayInDisplayWordAlpha2Sole.shift();
										shiftAlreadyStartedCount2All = 2;
										shiftAlreadyStartedCountSole2First = 2;
										if(charArrayInDisplayWordAlpha2Sole.length === 0){
										charArrayInDisplayWord2Jap[0].className = "add_red";
										charArrayInDisplayWord2Jap.shift();
										shiftAlreadyStartedCount2All = 0;
										}}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetter2Sole] != null){
										if(shiftAlreadyStartedCountSole2Second === 1){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Second[0].textContent){
											charArrayInDisplayWordAlphaSole2Second.shift();
											shiftAlreadyStartedCount2All = 2;
											shiftAlreadyStartedCountSole2Second = 2;
											if(charArrayInDisplayWordAlphaSole2Second.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
										}}}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetter2Sole] != null){
										if(shiftAlreadyStartedCountSole2Third === 1){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Third[0].textContent){
											charArrayInDisplayWordAlphaSole2Third.shift();
											shiftAlreadyStartedCount2All = 2;
											shiftAlreadyStartedCountSole2Third = 2;
											if(charArrayInDisplayWordAlphaSole2Third.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
											}}}};



									// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
									if (shiftAlreadyStartedCount2First === 2
										|| shiftAlreadyStartedCount2Second === 2
										|| shiftAlreadyStartedCount2Third === 2
										|| shiftAlreadyStartedCountSole2First === 2
										|| shiftAlreadyStartedCountSole2Second === 2
										|| shiftAlreadyStartedCountSole2Third === 2) {
										correctTyping2Flag = "1";
									} else {
										missTyping2Flag = "1";
									};

										// 文字入力が完了している場合、カウントを0にする。
										if (shiftAlreadyStartedCount2All === 0){
										shiftAlreadyStartedCount2First = 0;
										shiftAlreadyStartedCount2Second = 0;
										shiftAlreadyStartedCount2Third = 0;
										shiftAlreadyStartedCountSole2First = 0;
										shiftAlreadyStartedCountSole2Second = 0;
										shiftAlreadyStartedCountSole2Third = 0;
										};


								// すでに2つのアルファベットを入力済みの場合
								} else if (shiftAlreadyStartedCount2All === 2){
								// 2文字目が存在する場合(最後の文字でない場合)
								if(charArrayInDisplayWord2Jap[1] != null){
									// 2文字に対してタイプキーがローマ字変換パターン１に該当する場合
									if(shiftAlreadyStartedCount2First === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlpha2First[0].textContent) {
										charArrayInDisplayWordAlpha2First.shift();
										shiftAlreadyStartedCount2All = 3;
										shiftAlreadyStartedCount2First = 3;
										if(charArrayInDisplayWordAlpha2First.length === 0){
										charArrayInDisplayWord2Jap[0].className = "add_red";
										charArrayInDisplayWord2Jap[1].className = "add_red";
										charArrayInDisplayWord2Jap.shift();
										charArrayInDisplayWord2Jap.shift();
										shiftAlreadyStartedCount2All = 0;
									}}};
									// 2文字に対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetter2WithSmallLetter] != null){
										if(shiftAlreadyStartedCount2Second === 2){
										if(keyDownChar.key === charArrayInDisplayWordAlpha2Second[0].textContent){
											charArrayInDisplayWordAlpha2Second.shift();
											shiftAlreadyStartedCount2All = 3;
											shiftAlreadyStartedCount2Second = 3;
											if(charArrayInDisplayWordAlpha2Second.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap[1].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
									}}}};
									// 2文字に対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetter2WithSmallLetter] != null){
										if(shiftAlreadyStartedCount2Third === 2){
										if(keyDownChar.key === charArrayInDisplayWordAlpha2Third[0].textContent){
											charArrayInDisplayWordAlpha2Third.shift();
											shiftAlreadyStartedCount2All = 3;
											shiftAlreadyStartedCount2Third = 3;
											if(charArrayInDisplayWordAlpha2Third.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap[1].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
									}}}}};

									// 1文字目のみに対してタイプキーがローマ字変換パターン１に該当する場合
									if(shiftAlreadyStartedCountSole2First === 2){
									if(keyDownChar.key === charArrayInDisplayWordAlpha2Sole[0].textContent) {
										charArrayInDisplayWordAlpha2Sole.shift();
										shiftAlreadyStartedCount2All = 3;
										shiftAlreadyStartedCountSole2First = 3;
										if(charArrayInDisplayWordAlpha2Sole.length === 0){
										charArrayInDisplayWord2Jap[0].className = "add_red";
										charArrayInDisplayWord2Jap.shift();
										shiftAlreadyStartedCount2All = 0;
										}}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン２に該当する場合
									if (romaMappingTableSecond[wordLetter2Sole] != null){
										if(shiftAlreadyStartedCountSole2Second === 2){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Second[0].textContent){
											charArrayInDisplayWordAlphaSole2Second.shift();
											shiftAlreadyStartedCount2All = 3;
											shiftAlreadyStartedCountSole2Second = 3;
											if(charArrayInDisplayWordAlphaSole2Second.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
										}}}};
									// 1文字目のみに対してタイプキーがローマ字変換パターン３に該当する場合
									if (romaMappingTableThird[wordLetter2Sole] != null){
										if(shiftAlreadyStartedCountSole2Third === 2){
										if(keyDownChar.key === charArrayInDisplayWordAlphaSole2Third[0].textContent){
											charArrayInDisplayWordAlphaSole2Third.shift();
											shiftAlreadyStartedCount2All = 3;
											shiftAlreadyStartedCountSole2Third = 3;
											if(charArrayInDisplayWordAlphaSole2Third.length === 0){
											charArrayInDisplayWord2Jap[0].className = "add_red";
											charArrayInDisplayWord2Jap.shift();
											shiftAlreadyStartedCount2All = 0;
											}}}};

									// タイプキーがローマ字変換パターン１〜３のいずれかに該当する場合
									if (shiftAlreadyStartedCount2First === 3
									|| shiftAlreadyStartedCount2Second === 3
									|| shiftAlreadyStartedCount2Third === 3
									|| shiftAlreadyStartedCountSole2First === 3
									|| shiftAlreadyStartedCountSole2Second === 3
									|| shiftAlreadyStartedCountSole2Third === 3) {
									correctTyping2Flag = "1";
									} else {
									missTyping2Flag = "1";
									};

									// 文字入力が完了している場合、カウントを0にする。
									if (shiftAlreadyStartedCount2All === 0){
										shiftAlreadyStartedCount2First = 0;
										shiftAlreadyStartedCount2Second = 0;
										shiftAlreadyStartedCount2Third = 0;
										shiftAlreadyStartedCountSole2First = 0;
										shiftAlreadyStartedCountSole2Second = 0;
										shiftAlreadyStartedCountSole2Third = 0;
									};
								}
									
								// 以下、文字入力によるアルファベットに対する処理を開始する。--------------------------------------------------------------
								// --------------------------------------------------------------------------------------------------------------
							}
						};
					};

				// 以上、回答する訳のパターンの判別がまだできていない場合、もしくは、訳２で確定している場合はこちらを呼び出す。------------------------------
				// -------------------------------------------------------------------------------------------------------------------
					// 訳１、訳２両方正解している場合は、フラグを立てない。
					// 訳１、訳２どちらか一方のみ正解している場合、正解している方のフラグのみ立てる。
					// 正解していない方のcorrectTyping(2)Flagが立つことはない
					//（上の処理内でしかcorrectTyping(2)Flagは立たず、その処理に入ることはない（japTransPattern1(2)Flagで制限している）ため。）
					if ( correctTypingFlag === "1" && correctTyping2Flag === "1") {
						// まだ「答えを見る」を押していない場合、
						// かつ訳１と訳２の次の文字が同じ場合、
						// かつプレイモードが普通orタイムアタックの場合は、訳２を非表示にする。
						if (answerOpenFlag === "0" 
							&& (playMode == "普通" || playMode == "タイムアタック" )
							&& (charArrayInDisplayWordJap.length > 0)
							&& (charArrayInDisplayWord2Jap.length > 0)
							&& (charArrayInDisplayWordJap[0].textContent === charArrayInDisplayWord2Jap[0].textContent)) {
							displayMultipleWord2.className =  "transparent";
							displayWord2.className =  "transparent";
							displayWord2Kanji.className =  "transparent";
						};
						correctTyping();
					} else if (correctTypingFlag === "1" && correctTyping2Flag === "0") {
						japTransPattern1Flag = "1";
						displayMultipleWord2.className =  "transparent";
						displayWord2.className =  "transparent";
						displayWord2Kanji.className =  "transparent";
						displayMultipleOr.className =  "transparent";
						correctTyping();
					} else if (correctTypingFlag === "0" && correctTyping2Flag === "1") {
						japTransPattern2Flag = "1";
						displayMultipleWord1.className =  "transparent";
						displayWord.className =  "transparent";
						displayWordKanji.className =  "transparent";
						displayMultipleWord2.className =  "displayMultipleWord2";
						displayWord2.className =  "displayWord2";
						displayMultipleOr.className =  "transparent";
						correctTyping();
					} else { // 訳１、訳２ともに正解ではない場合、missTypeAudioを発生させる。
						if ( missTypingFlag === "1" || missTyping2Flag === "1") {
							typeMissAudio();
						} else {
							// 訳１、訳２ともに正解ではないかつmissType(2)Flagが0の場合はないと思料。
						}
					};
					// correctTyping(2)Flag、missType(2)Flagを初期値に戻す。
						correctTypingFlag = "0";
						correctTyping2Flag = "0";
						missTypingFlag = "0";
						missTyping2Flag = "0";
				}
			};
				// 以上、タイプした文字が表示文字と一致する場合の処理を定義する。--------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、タイプした文字が解答文字と一致する場合の共通処理を定義する。-----------------------------
				// ------------------------------------------------------------------------------------
				function correctTyping(){
					// タイプ音を定義する。
					// タイプ音ありの場合のみ
					if (typeAudioMode == "タイプ音あり") {
						let typeAudioMode = new Audio('/assets/typeAudio.mp3');
						// タイプ音を発生させる。
						typeAudioMode.volume = 0.3;
						typeAudioMode.play();
					};
					// メーターを更新する。
					bonusCountMeter = bonusCountMeter +1;
					// メーターがメーター最大値以上になった場合、メーターを初期化し、プレイ可能時間を延長する。
					if(bonusCountMeter >= bonusCountMeterMax){
						bonusCountMeter = 0;
						// 初期プレイ時間を更新することで、残りプレイ可能時間を延長する。
						initialPlayingTimeMSec = initialPlayingTimeMSec +bonusAddPlayTime;
						// 延長した残りプレイ時間を表示する。
						displayBonusAddPlayTime.textContent = "+ " + Math.ceil(bonusAddPlayTime/1000) + "秒";
						// 延長した残りプレイ時間をフェードアウトする。
						displayBonusAddPlayTime.classList.add('fadeout');
						// fadeoutのclassを取り除くことで、2回目以降も延長した残りプレイ時間が表示されるようにする。
						setTimeout(function(){
						displayBonusAddPlayTime.textContent = "";
						displayBonusAddPlayTime.classList.remove('fadeout');
						}, 2000);
					};
					// 更新したメーターを表示する。
					meter.value = bonusCountMeter;

					// 表示文字全てタイプした場合、スコアアップ処理を実施し、次の表示文字を作成する処理を実施する。
					if(charArrayInDisplayWordJap.length === 0 
						|| (charArrayInDisplayWord2Jap.length === 0 && japTrans2Existing === "1")) {
						// 正解音を定義する。
						// 正解音ありの場合のみ
						if (correctAudioMode == "正解音あり") {
							let correctAudio = new Audio('/assets/correctAudio.mp3');
							// 正解した場合、効果音を発生させる。
							correctAudio.volume = 0.3;
							correctAudio.play();
						};

						// 「答えを見る」を押していなければ、スコアと正解数をカウントアップする。
						if (answerOpenFlag == "0"){
							// プレイモード：練習・普通の場合のみ、スコアアップする。
							if ( playMode == "練習" || playMode == "普通") {
								//countUpScore(); // スコアアップ処理を不要とする。
							};
							countUpCorrectNum();

							// 「答えを見る」を押していない場合、正解として記録する。
							allQuestionWords.splice(allQuestionWords.length - 2, 1, "正解");

						} else {
							// 「答えを見る」を押していれば、フラグを0に戻す。
							answerOpenFlag = "0";

							// 「答えを見る」を押している場合、不正解として記録する。
							allQuestionWords.splice(allQuestionWords.length - 2, 1, "不正解");

						};

						// 訳２で回答した場合は、日本語訳２に上書きする。
						if (charArrayInDisplayWord2Jap.length === 0 && japTrans2Existing === "1") {
							allQuestionWords.splice(allQuestionWords.length - 3, 1, displayWordInList.jap_trans_2);
						};
						// 解答するまでにかかった時間を記録する。
						eachQuestionAnswerTime = Math.ceil((Date.now() - eachQuestionCreateTime)/1000);
						let eachQuestionAnswerMin = Math.floor(eachQuestionAnswerTime / 60);
						let eachQuestionAnswerSec = Math.ceil(eachQuestionAnswerTime % 60);
						allQuestionWords.splice(allQuestionWords.length - 1, 1, `${(`0${eachQuestionAnswerMin}` ).slice( -2 )}:${(`0${eachQuestionAnswerSec}` ).slice( -2 )}`);


						// 出題したすべての英単語リストに追加する。
						allQuestionWordsList.push(allQuestionWords);

						// 丸を表示、答えを表示するなどのアニメーションを実施する。
						circleImg.classList.add('circle');
						circleImg.classList.remove('transparent');
						if (charArrayInDisplayWordJap.length === 0) {
							displayWordKanji.classList.add('add_gray');
							displayWordKanji.classList.add('displayWordKanji');
							displayWordKanji.classList.remove('transparent');
							displayMultipleWord2.className =  "transparent";
							displayWord2.className =  "transparent";
							displayWord2Kanji.className =  "transparent";
							displayMultipleOr.className =  "transparent";
						} else if (charArrayInDisplayWord2Jap.length === 0 && japTrans2Existing === "1") {
							displayWord2Kanji.classList.add('add_gray');
							displayWord2Kanji.classList.add('displayWord2Kanji');
							displayWord2Kanji.classList.remove('transparent');
							displayMultipleWord1.className =  "transparent";
							displayWord.className =  "transparent";
							displayWordKanji.className =  "transparent";
							displayMultipleOr.className =  "transparent";
						} else {

						}

						// 訳パターンを初期値に戻す。
						japTransPattern1Flag = "0";
						japTransPattern2Flag = "0";

						// タイピングの正誤判定に使用する変数を初期値に戻す
						letReset();

						// 次の問題を生成する。
						setTimeout(createDisplayWord,500);
						setTimeout(function(){
						circleImg.classList.add('transparent');
						circleImg.classList.remove('circle');
						}, 500);

						if (playMode == "タイムアタック" && gameCompleteTimeAttackFlag == "1") {
							// プレイモード：タイムアタックの場合、最後の問題に解答できた瞬間にフラグを２に更新する。
							gameCompleteTimeAttackFlag = "2";
							gameClose();
						};

					};
				};
				// 以上、タイプした文字が解答文字と一致する場合の共通処理を定義する。-----------------------------
				// ------------------------------------------------------------------------------------


				// 以下、タイプした文字が表示文字と不一致の場合の処理を定義する。--------------------------------
				// ------------------------------------------------------------------------------------
				function typeMissAudio(){
					// ミス音を定義する。
					// ミス音ありの場合のみ
					if (incorrectAudioMode == "ミス音あり") {
						let incorrectAudio = new Audio('/assets/incorrectAudio.mp3');
						// ミスの場合、効果音を発生させる。
						incorrectAudio.volume = 0.3;
						incorrectAudio.play();
					};
				};
				// 以上、タイプした文字が表示文字と不一致の場合の処理を定義する。--------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、英単語を生成した際に、発音させる処理を定義する。---------------------------------------
				// ------------------------------------------------------------------------------------
				function pronounce(eng_word){
					// résuméの場合は音声ファイルの検索ができないため、ファイルを変更
					if (eng_word == "résumé"){
						eng_word = "rezumei";
					};
					let pronunciation = new Audio('/assets/発音/'+ eng_word + '.mp3');
					pronunciation.play();
				};
				// 以上、英単語を生成した際に、発音させる処理を定義する。---------------------------------------
				// ------------------------------------------------------------------------------------


				// 以下、タイピングの正誤判定に使用する変数を初期値に戻す処理を定義する。--------------------------
				// ------------------------------------------------------------------------------------
				function letReset(){
								// タイピングの正誤判定に使用する変数を初期値に戻す。
								wordLetterWithSmallLetter = "";
								wordLetterSole = "";

								charArrayInDisplayWordAlphaFirst = [];
								charArrayInDisplayWordAlphaSecond = [];
								charArrayInDisplayWordAlphaThird = [];
								charArrayInDisplayWordAlphaSole = [];
								charArrayInDisplayWordAlphaSoleSecond = [];
								charArrayInDisplayWordAlphaSoleThird = [];

								shiftAlreadyStartedCountAll = 0;
								shiftAlreadyStartedCountFirst = 0;
								shiftAlreadyStartedCountSecond = 0;
								shiftAlreadyStartedCountThird = 0;
								shiftAlreadyStartedCountSoleFirst = 0;
								shiftAlreadyStartedCountSoleSecond = 0;
								shiftAlreadyStartedCountSoleThird = 0;

								keyTempForSmallTsuPreWithNext = "";
								keyTempForSmallTsuPreFirst = "";
								keyTempForSmallTsuPreSecond = "";
								keyTempForSmallTsuPreThird = "";
								keyTempForNnPre = "";


								// タイピングの正誤判定に使用する変数を初期値に戻す。2
								wordLetter2WithSmallLetter = "";
								wordLetter2Sole = "";

								charArrayInDisplayWordAlpha2First = [];
								charArrayInDisplayWordAlpha2Second = [];
								charArrayInDisplayWordAlpha2Third = [];
								charArrayInDisplayWordAlpha2Sole = [];
								charArrayInDisplayWordAlphaSole2Second = [];
								charArrayInDisplayWordAlphaSole2Third = [];

								shiftAlreadyStartedCount2All = 0;
								shiftAlreadyStartedCount2First = 0;
								shiftAlreadyStartedCount2Second = 0;
								shiftAlreadyStartedCount2Third = 0;
								shiftAlreadyStartedCountSole2First = 0;
								shiftAlreadyStartedCountSole2Second = 0;
								shiftAlreadyStartedCountSole2Third = 0;

								keyTempForSmallTsuPre2WithNext = "";
								keyTempForSmallTsuPre2First = "";
								keyTempForSmallTsuPre2Second = "";
								keyTempForSmallTsuPre2Third = "";
								keyTempForNnPre2 = "";

				};
				// 以上、タイピングの正誤判定に使用する変数を初期値に戻す処理を定義する。--------------------------
				// ------------------------------------------------------------------------------------

			};
};
