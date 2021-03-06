// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function(){
	// Enterを押下するとゲーム開始のカウントダウンがスタートする処理を呼び出す。
	document.addEventListener(`keydown`, keyDownGameStart);
});

// スペースかEnterキー押下によるゲームスタートを一回限りとするフラグを設定する。
let gameStartEnterOnlyOnce = "0";

// 使用しているブラウザを取得する。
// chromeのみ、"f"が２つ並んでいる場合、"ff"に対するadd_redがうまくいかない。
// 一つ目の"f"押下で、２つ目の"f"までadd_redが適応される。
const agent = window.navigator.userAgent.toLowerCase()
// chromeのみ、"f"が２つ並んでいる場合に使用するフラグを用意する。
let addHalfRedFlag = "0";

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

// 選択したタイピング種別によって変わるtypingCourseSetの定義
const typingCourseSet = "英単語タイピング";

// 選択した英単語難易度によって変わるwordListの定義
const wordList = gon.wordListAll;

// 選択した英単語難易度によって変わるengWordsDifficultySetの定義
const engWordsDifficultySet = gon.engWordsDifficultySet;

// 選択した英単語出題範囲numberFromの定義
const numberFrom = gon.numberFrom;

// 選択した英単語出題範囲numberFromの定義
const numberTo = gon.numberTo;

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



	// 英単語を順番に出題する場合の番号の初期値を定義する。
	let sortById = 0;

	// 英単語の出題順の初期値を定義する。
	let eachQuestionOrder = 0;

	// 表示するメーター初期値を定義する。
	let bonusCountMeter = 0;
	// 表示するメーター最大値を定義する。
	const bonusCountMeterMax = 100;
	// タイムアタックで要した時間を定義する。
	let playingTimeForTimeAttack = "";
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
				const displayWord = document.getElementById("displayWord");
				displayWord.className =  "displayWord";
				const displayWordJapanese = document.getElementById("displayWordJapanese");
				displayWordJapanese.className =  "displayWordJapanese";
				const displayWordAnnotation = document.getElementById("displayWordAnnotation");
				displayWordAnnotation.className =  "transparent";

				// 表示する単語を一文字ずつに分ける変数を定義する。
				let charArrayInDisplayWord =[];

				// 出題した英単語を格納する配列を定義する。
				let allQuestionWords =[];
				// 出題したすべての英単語を格納する配列を定義する。
				let allQuestionWordsList =[];


				// ゲーム終了を判定するフラグを定義する。
				let playEndFlag = "0";

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
						charArrayInDisplayWord[0].classList.remove('transparent');
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
						for (let i = 0; i < charArrayInDisplayWord.length; i++) {
							charArrayInDisplayWord[i].classList.remove('transparent');
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

						// 表示する単語の日本語訳を表示させる。
						displayWordJapanese.textContent = displayWordInList.jap_trans_1;

						// 日本語訳が同じ英単語が複数ある場合に備えて、重複するかを判定し、重複する場合は重複する英単語を表示し、それ以外を答えるように誘導する。
						// プレイモード練習では答えを表示しているため処理不要
						if ( playMode == "普通" || playMode == "タイムアタック") {
							// 前の問題に注釈がある場合消す。
							displayWordAnnotation.className = "transparent";
							// ランダムで選ばれた英単語の日本語訳でワードリストをフィルター
							let duplicateWords1 = wordList.filter(duplicateWord => duplicateWord.jap_trans_1 == displayWordInList.jap_trans_1);
							let duplicateWords2 = wordList.filter(duplicateWord => duplicateWord.jap_trans_2 == displayWordInList.jap_trans_1);
							// 出題された日本語訳で日本語訳１と２を検索し、ヒットした英単語を一つに格納する。
							let duplicateWords1and2 = duplicateWords1.concat(duplicateWords2);
							// 格納した英単語に重複がある場合は重複削除する。
							let duplicateWords = Array.from(new Set(duplicateWords1and2));
							// 日本語訳が重複している他の英単語がある場合
							if (duplicateWords.length > 1) {
								// 重複している英単語の配列（この時点では答えを含む）を定義する。
								let duplicateWordsList = [];
								for (let i = 0; i < duplicateWords.length; i++) {
									// 重複している英単語のみ（答え以外の英単語）を配列duplicateWordsListに格納する。
									if (duplicateWords[i].id !== displayWordInList.id){
										duplicateWordsList.push(duplicateWords[i].eng_word);
									};
								};
								displayWordAnnotation.textContent = `※${duplicateWordsList}以外`;
								displayWordAnnotation.className = "displayWordAnnotation";
							};
						};

						// 表示する単語を一文字ごとに区切り、spanタグで閉じる。
						// spanタグで閉じた単語を表示する。
						charArrayInDisplayWord = displayWordInList.eng_word.split("").map(function(value){
							// spanタグを作成する。
							let spanValue = document.createElement("span");
							// spanタグに一文字を挿入する。
							spanValue.textContent = value;
							// 各アルファベットに対して、transparentクラスを付与する。（プレイモード普通、タイムアタックのときのみ）
							if ( playMode == "普通" || playMode == "タイムアタック") {
								spanValue.className = "transparent";
							};
							// 表示する単語にspanタグで閉じた一文字を追加する。
							displayWord.appendChild(spanValue);
							return spanValue;
						});
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
					displayWord.textContent ="";
					// 解答の日本語の表示を消す。
					displayWordJapanese.textContent ="";

					// 出題や解答を表示していたdivを消す。
					const btnWrapperPlay = document.getElementById("btnWrapperPlay");
					btnWrapperPlay.className = "transparent";

					// "発音を聞く"ボタンを消す。
					pronounceAgainButton.className = "transparent";
					// "ヒントを見る"ボタンを消す。
					hintButton.className = "transparent";
					// "答えを見る"ボタンを消す。
					answerButton.className = "transparent";
					// 注釈を消す。（プレイモード普通、タイムアタックの時のみ）
					if (playMode == "普通" || playMode == "タイムアタック") {
						displayWordAnnotation.className = "transparent";
					};
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
							playingTimeForTimeAttack = `${(`0${remainMinTimeAttack}` ).slice( -2 )}分${(`0${remainSecTimeAttack}` ).slice( -2 )}秒`;
							closePopup.textContent = `あなたがかかった時間は ${playingTimeForTimeAttack} です!`;
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


					//ツイートボタンが押された時の処理
					let shareTweetDiv = document.getElementById("shareTweetDiv");
					shareTweetDiv.className = "shareTweetDiv";
					let shareTweet = document.getElementById("shareTweet");
					shareTweet.onclick = function() {
						//ツイート内容をセット
						var url = "https://eigomonsters.com/";
						//#twitter_buttonのhrefにパラメーターを渡す
						if ( playMode == "練習" || playMode == "普通" ) {
						window.open().location.href = (`https://twitter.com/share?url=${url}&text=TOEIC%20${typingCourseSet}%0a${engWordsDifficultySet}(${numberFrom}~${numberTo})%20${playMode}%0a${questionOrderMode}出題%20${pronounceMode}%0a${closePopupTotalQuestionNum.textContent}%20/%20${closePopupFinalCorrectNum.textContent}%20/%20${closePopupFinalMaxConsecutiveCorrectNum.textContent}%0a&hashtags=EigoMonsters&related=EigoMonsters&count=none&lang=ja`);
						} else { // タイムアタックの場合、所要時間も記載する。
							if ( gameCompleteTimeAttackFlag == "2") {
								window.open().location.href = (`https://twitter.com/share?url=${url}&text=TOEIC%20${typingCourseSet}%0a${engWordsDifficultySet}(${numberFrom}~${numberTo})%20${playMode}%0a${questionOrderMode}出題%20${pronounceMode}%0a所要時間 : ${playingTimeForTimeAttack}%0a${closePopupTotalQuestionNum.textContent}%20/%20${closePopupFinalCorrectNum.textContent}%20/%20${closePopupFinalMaxConsecutiveCorrectNum.textContent}%0a&hashtags=EigoMonsters&related=EigoMonsters&count=none&lang=ja`);
							} else {
								window.open().location.href = (`https://twitter.com/share?url=${url}&text=TOEIC%20${typingCourseSet}%0a${engWordsDifficultySet}(${numberFrom}~${numberTo})%20${playMode}%0a${questionOrderMode}出題%20${pronounceMode}%0a所要時間 : Timeover%0a${closePopupTotalQuestionNum.textContent}%20/%20${closePopupFinalCorrectNum.textContent}%20/%20${closePopupFinalMaxConsecutiveCorrectNum.textContent}%0a&hashtags=EigoMonsters&related=EigoMonsters&count=none&lang=ja`);
							}
						}
					}
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
					if(keyDownChar.key === charArrayInDisplayWord[0].textContent && playEndFlag==="0") {
						correctTyping();
					} else if (keyDownChar.key === "e"
								&& charArrayInDisplayWord[0].textContent === "é"
								&& playEndFlag==="0") {
						// éの場合は例外的にeでOKとする。
						correctTyping();
					} else if (playEndFlag==="0") {
						// タイプミス音を発生させる。
						typeMissAudio();
					} else {

					};
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


					// 文字色を変更する。
					// ただし、chromeの場合かつ、"f"が２つ並んでいる場合、別のclassを適応させる。
					if (agent.indexOf("chrome") != -1
						&& charArrayInDisplayWord[0].textContent == "f"
						&& charArrayInDisplayWord.length > 1
						&& charArrayInDisplayWord[1].textContent == "f"
						&& addHalfRedFlag == "0") {
						charArrayInDisplayWord[0].className = "addHalfRed";
						addHalfRedFlag = "1";
					} else if (agent.indexOf("chrome") != -1 // "addHalfRed適応後に、２つ目の"f"押下でadd_redに戻す。"f"が３つ並ぶことはないという前提。
						&& charArrayInDisplayWord[0].textContent == "f"
						&& charArrayInDisplayWord.length > 1
						&& charArrayInDisplayWord[1].textContent == "f"
						&& addHalfRedFlag == "1"){
						charArrayInDisplayWord[0].className = "add_red";
						// 一致した文字を配列から削除する。charArrayInDisplayWord[0]の"f"とcharArrayInDisplayWord[1]の"f"を削除する。
						charArrayInDisplayWord.shift();
						charArrayInDisplayWord.shift();
						addHalfRedFlag = "0";
					}else { // chromeではない場合、もしくは"f"が２つ並んでいない場合
						charArrayInDisplayWord[0].className = "add_red";
						// 一致した文字を配列から削除する。
						charArrayInDisplayWord.shift();
					}


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
					if(charArrayInDisplayWord.length === 0) {
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

			};
};
