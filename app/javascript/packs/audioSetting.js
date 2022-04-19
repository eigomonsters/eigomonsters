// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function(){

	// 詳細設定ポップアップ全体のidを取得する。
	// 初期表示は非表示にする（HTMLでclass="transparent"を設定）。
	let detailSettingRadioEntireScr = document.getElementById("detailSettingRadioEntireScr");

	// "詳細設定"ボタン押下で詳細設定ポップアップを開く。
	let detailSettingPopupDisplay = document.getElementById("detailSettingPopupDisplay");
	detailSettingPopupDisplay.onclick = function() {
		detailSettingRadioEntireScr.className = "detailSettingRadioEntireScr";
	};

	// "OK"ボタン押下で詳細設定ポップアップを閉じる。
	let detailSettingOk = document.getElementById("detailSettingOk");
	detailSettingOk.onclick = function() {
		detailSettingRadioEntireScr.className = "transparent";
	};

});



