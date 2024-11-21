// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//= require search


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require audiojs
//= require search

import './search';



  window.addEventListener('load', function(){
    

    let menuOpenFlag = "0";

    let nav__center = document.getElementById("nav__center");
    let grayOut = document.getElementById("grayOut");
    let hamburger = document.getElementById("hamburger");

    hamburger.onclick = function() {
      if (menuOpenFlag === "0") {
        nav__center.className = "nav__centerForMobile"
        hamburger.classList.add('active');
        grayOut.className = "grayOut";
        menuOpenFlag = "1";
      } else {
        nav__center.className = "nav__center"
        hamburger.classList.remove('active');
        grayOut.className = "transparent";
        menuOpenFlag = "0";
      }
    };
    grayOut.onclick = function() {
        nav__center.className = "nav__center"
        hamburger.classList.remove('active');
        grayOut.className = "transparent";
        menuOpenFlag = "0";
    };


    
  });

  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    // clearInput関数を定義
    function clearInput() {
        const keywordInput = document.querySelector('.search-input');
        keywordInput.value = '';
        keywordInput.dispatchEvent(new Event('input')); // 入力イベントを手動で発火
    }

    // ×ボタンのクリックイベントリスナーを追加
    const clearButtons = document.querySelectorAll('.clear-btn');
    clearButtons.forEach(button => {
        button.addEventListener('click', clearInput);  // ×ボタンがクリックされたときに clearInput 関数を呼び出す
    });

    // その他の処理（追加ボタン、画像の管理など）についてはそのまま...
    const addButtons = document.querySelectorAll('.addBtn');
    const deckNumText = document.querySelector('.deckNumText');
    const clickedImages = [];
    const eachImageInDeck = document.querySelector('.eachImageInDeck');
    const form = document.querySelector('.search-form');
    const poketypeButtons = document.querySelectorAll('.poketypeImageButton');
    const poketypeField = document.getElementById('poketypeField');
    const largeCategoryRadios = document.querySelectorAll('input[name="dispCardLargeCategory"]');
    const keywordInput = document.querySelector('.search-input');
    const registerBtn = document.querySelector('.registerBtn');
    const resetBtn = document.querySelector('.resetBtn');
    const errorMessages = document.querySelector('.errorMessages');
    const totalDeckNumError = document.querySelector('.totalDeckNumError');
    const noTanePokemonError = document.querySelector('.noTanePokemonError');
    const sameCardNumError = document.querySelector('.sameCardNumError');
    const modal = document.getElementById('popupModal');
    const closeModal = document.getElementById('closeModal');
    const eachImageInDeckPopup = document.querySelector('.eachImageInDeckPopup');
    const createDeckCodeBtn = document.querySelector(".createDeckCodeBtn");
    const toggleDeckBtn = document.querySelector(".toggleDeckBtn");
    const triangleDeckIcon = document.querySelector(".triangleDeckIcon");
    const deckNumInTitle = document.querySelector(".deckNumInTitle");
    const deckInfoBox = document.querySelector(".deckInfoBox");
    const toggleSearchBtn = document.querySelector(".toggleSearchBtn");
    const triangleSearchIcon = document.querySelector(".triangleSearchIcon");
    const searchInfoBox = document.querySelector(".searchInfoBox");

    // ポップアップを閉じるボタンの処理
    closeModal.addEventListener("click", () => {
      // モーダルを非表示
      modal.style.display = "none";

      // 初期状態に戻す処理
      const createdDeckCode = document.querySelector('.createdDeckCode'); // <p>要素を取得
      const createButton = document.querySelector('.createDeckCodeBtn'); // 作成ボタン取得
      const headingElement = document.querySelector('.modal-content h3'); // <h3>要素を取得
      const deckCodeTitle = document.querySelector('.createdDeckCodeTextTitle'); // デッキコードタイトル取得
      const copyButton = document.querySelector('.copyDeckCodeBtn'); // コピー用ボタン
      const successMessageElement = document.querySelector('.copySuccessMessage'); // コピー成功メッセージ要素取得

      // 初期状態にリセット
      createdDeckCode.textContent = ""; // <p>の内容を空にする
      createButton.style.display = "block"; // ボタンを再表示
      headingElement.textContent = "以下の内容でデッキコードを作成しますか。"; // <h3>を元に戻す
      headingElement.style.color = ""; // <h3>の色をデフォルトに
      deckCodeTitle.style.display = "none"; // タイトルを非表示
      copyButton.style.display = "none"; // コピーボタンを非表示
      successMessageElement.style.display = "none"; // コピー成功メッセージを非表示

    });

    let debounceTimeout;
    function debounce(func, delay) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(func, delay);
    }

    initAddButtons();

    // 初期表示ではすべてのpoketypeを表示
    poketypeButtons.forEach(button => {
      button.classList.remove('selected'); // 画面リロード時に 'selected' クラスをリセット
      poketypeField.value = []
    });

    // typeImageButtonがクリックされたときの処理
    poketypeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const selectedPoketype = button.getAttribute('data-poketype');
          let currentValue = poketypeField.value.split(',');

          if (currentValue.includes(selectedPoketype)) {
              currentValue = currentValue.filter(poketype => poketype !== selectedPoketype);
              button.classList.remove('selected');
          } else {
              currentValue.push(selectedPoketype);
              button.classList.add('selected');
          }

          poketypeField.value = currentValue.join(',');

          debounce(sendAjaxRequest, 200);  // 500msの遅延を設けてリクエストを送信
      });
    });

    
    // ラジオボタン変更時のイベント
    largeCategoryRadios.forEach(radio => {
      radio.addEventListener('change', function() {
          sendAjaxRequest();
      });
    });

  // テキストフィールド変更時のイベント
    keywordInput.addEventListener('input', function() {
        sendAjaxRequest();
    });

    // 登録ボタン押下時の処理
    registerBtn.addEventListener('click', function () {
      const totalDeckNum = clickedImages.length;
      let errorCount = 0;
    
      // エラーメッセージ要素の初期化
      totalDeckNumError.style.display = 'none';
      noTanePokemonError.style.display = 'none';
      sameCardNumError.style.display = 'none';
      errorMessages.style.display = 'none';
    
      // 20枚以下の場合
      if (totalDeckNum !== 20) {
        errorCount += 1;
        totalDeckNumError.style.display = 'block';
      }
    
      // サーバーにリクエストを送信するPromise
      const taneCheckPromise = fetch('/eigomonsters/tanecheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clicked_images: clickedImages,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errorCount > 0) {
            errorCount += 1;
            noTanePokemonError.style.display = 'block';
          }
        });
    
      const sameCardCheckPromise = fetch('/eigomonsters/samecardcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clicked_images: clickedImages,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errorCount > 0) {
            errorCount += 1;
            sameCardNumError.style.display = 'block';
          }
        });
    
      // 全ての非同期処理を待機
      Promise.all([taneCheckPromise, sameCardCheckPromise])
        .then(() => {
          // エラーがあればエラーメッセージを表示
          if (errorCount > 0) {
            errorMessages.style.display = 'block';
          } else {
            errorMessages.style.display = 'none';
            // デッキ画像のポップアップを表示
            // デッキ画像のポップアップを更新して表示
            updatePopupImages();
            modal.style.display = 'block';
          }
        })
        .catch((error) => {
          // console.error('エラーが発生しました:', error);
        });
    });

    // リセットボタン押下時の処理
    resetBtn.addEventListener('click', function () {
      // 初期化
      clearDeckList();
    });
    // デッキコード作成ボタン押下の処理
    createDeckCodeBtn.addEventListener("click", () => {
      // Railsのcreatedeckcodeアクションを呼び出し
      fetch('/eigomonsters/createdeckcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clicked_images: clickedImages, // ここで選択されたカード情報を送信
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const createButton = document.querySelector('.createDeckCodeBtn');
          const headingElement = document.querySelector('.modal-content h3'); // <h3>要素を取得
          const deckCodeTitle = document.querySelector('.createdDeckCodeTextTitle'); // 作成したデッキコードのタイトル取得
          const copyButton = document.querySelector('.copyDeckCodeBtn'); // コピー用ボタン
          const successMessageElement = document.querySelector('.copySuccessMessage'); // コピー成功メッセージ要素取得
          const createdDeckCode = document.querySelector('.createdDeckCode'); // コピー成功メッセージ要素取得
    
          if (data.error) {
            // エラーメッセージを<p>内に表示
            createdDeckCode.textContent = "デッキコード作成中にエラーが発生しました。しばらくしてから再度実行してください。";
            createdDeckCode.style.color = "red"; // エラー時は赤色で表示
          } else {
            // 成功時の処理
            createdDeckCode.textContent = `${data.deckid}`;
            createdDeckCode.style.color = "green"; // 成功時は緑色で表示
    
            // ボタンを非表示にする
            createButton.style.display = "none";
    
            // <h3>の内容を変更
            headingElement.textContent = "デッキコード作成に成功しました！";
            headingElement.style.color = "green"; // 成功時は緑色で表示
    
            // 作成したデッキコードのタイトルを表示
            deckCodeTitle.style.display = "block";
    
            // コピーボタンを表示
            copyButton.style.display = "inline-block";
            
            // コピーボタンのクリックイベントを追加
            copyButton.addEventListener("click", () => {
              // Clipboard API を使用してデッキコードをコピー
              navigator.clipboard.writeText(data.deckid).then(() => {
                // コピー成功メッセージを表示
                successMessageElement.innerHTML = "デッキコードがコピーされました！<br>トナメルに貼り付けしエントリーしてください。";
                successMessageElement.style.display = "block"; // メッセージを表示
              });
            });
          }
        })
        .catch((error) => {
          // エラーが発生した場合の処理
          const createdDeckCode = document.querySelector('.modal-content p:last-of-type');
          createdDeckCode.textContent = "デッキコード作成中にエラーが発生しました。しばらくしてから再度実行してください。";
          createdDeckCode.style.color = "red";
        });
    });

    // 検索ボックスの表示をコントロール
    toggleSearchBtn.addEventListener("click", () => {
      if (window.innerWidth > 800) {
        // 800px以上の場合は処理をしない
        return;
      }
      // 要素の表示/非表示を切り替え
      const isExpanded = searchInfoBox.classList.contains("collapsed");

      // スライドアニメーションのためにクラスを切り替え
      if (isExpanded) {
        searchInfoBox.classList.remove("collapsed");
      } else {
        searchInfoBox.classList.add("collapsed");
      }

      // 三角形の向きを切り替え
      if (isExpanded) {
        triangleSearchIcon.classList.remove("rotated");
      } else {
        triangleSearchIcon.classList.add("rotated");
      }
    });

    // 作成中デッキの表示をコントロール
    toggleDeckBtn.addEventListener("click", () => {
      if (window.innerWidth > 800) {
        // 800px以上の場合は処理をしない
        return;
      }
      // 要素の表示/非表示を切り替え
      const isExpanded = deckInfoBox.classList.contains("collapsed");

      // スライドアニメーションのためにクラスを切り替え
      if (isExpanded) {
        deckInfoBox.classList.remove("collapsed");
      } else {
        deckInfoBox.classList.add("collapsed");
      }

      // 三角形の向きを切り替え
      if (isExpanded) {
        triangleDeckIcon.classList.remove("rotated");
        deckNumInTitle.style.display = "none";
      } else {
        triangleDeckIcon.classList.add("rotated");
        deckNumInTitle.style.display = "inline-block";
      }
    });

    // デッキ画像をポップアップに表示する関数
    function updatePopupImages() {
      eachImageInDeckPopup.innerHTML = ''; // 一度クリア
      clickedImages.forEach((imageId) => {
        // 画像のパスを作成
        const imageSrc = `../../assets/${imageId}.png`;

        // 画像要素を生成
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'デッキ画像';

        eachImageInDeckPopup.appendChild(imgElement);
      });
    }

    // クリックされた画像の処理とadaptNumの更新
    function updateImageDisplay() {
      eachImageInDeck.innerHTML = '';
  
      clickedImages.forEach(function(imageId, index) {
          // 画像のパスを作成
          const imageSrc = `../../assets/${imageId}.png`;
  
          const imgElement = document.createElement('img');
          imgElement.src = imageSrc;
          imgElement.alt = 'クリックした画像';
  
          // クリックイベントを設定
          imgElement.addEventListener('click', function() {
              // clickedImages から削除
              clickedImages.splice(index, 1);
  
              // adaptNum の更新処理
              updateAdaptNum(clickedImages);
  
              // 表示を更新
              updateImageDisplay();
          });
  
          eachImageInDeck.appendChild(imgElement);
      });
  
      // deckNumText の値を更新
      updateDeckNumText();
    }

    // 初期処理として実施
    updateAdaptNum(clickedImages);
    // adaptNumの更新処理を別の関数として切り分け
    function updateAdaptNum(clickedImages) {
      // 各画像IDの出現回数をカウントする
      const imageCount = clickedImages.reduce(function(counts, imageSrc) {
          counts[imageSrc] = (counts[imageSrc] || 0) + 1;
          return counts;
      }, {});
  
      // 各カードの adaptNum を更新
      const allEachImageContainers = document.querySelectorAll('.eachImageContainer');
      allEachImageContainers.forEach(function(container) {
          const imgInContainer = container.querySelector('img');
          const adaptNum = container.querySelector('.adaptNum');
          const addBtn = container.querySelector('.addBtn');
          const imageId = imgInContainer.getAttribute('src').split('/').pop().replace('.png', ''); // 画像IDを取得
  
          // clickedImages内での出現回数に基づいてadaptNumを更新
          const currentCount = imageCount[imageId] || 0;  // clickedImages内での出現回数を取得（なければ0）
  
          adaptNum.textContent = currentCount; // adaptNumを更新

          // 0の場合は非表示
          if (parseInt(adaptNum.textContent) === 0) {
            adaptNum.classList.add('hidden');
          } else {
              adaptNum.classList.remove('hidden');
          }
          // 2の場合はボタンを無効化
          if (parseInt(adaptNum.textContent) === 2) {
            addBtn.disabled = true;
          } else {
            addBtn.disabled = false;
          }
      });
    }

    function updateDeckNumText() {
      const total = clickedImages.length; // clickedImages の要素数で total を設定
      const addButtons = document.querySelectorAll('.addBtn');
      deckNumText.textContent = total; // total を表示
  
      // deckNumText の値が 20 の場合、すべての addBtn を無効化
      if (total === 20) {
          addButtons.forEach(function(button) {
              button.disabled = true;
          });
      } else {
          addButtons.forEach(function(button) {
              const container = button.closest('.eachImageContainer');
              const adaptNum = container.querySelector('.adaptNum');
              const currentValue = parseInt(adaptNum.textContent) || 0;
  
              // adaptNum の値が 2 未満の場合はボタンを有効化
              if (currentValue < 2) {
                  button.disabled = false;
              } else {
                button.disabled = true;
              }
          });
      }
    }


    // 初期化の処理 (カードの追加ボタンのイベント)
    function initAddButtons() {
      const addButtons = document.querySelectorAll('.addBtn');
      addButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              const container = this.closest('.eachImageContainer');
              const adaptNum = container.querySelector('.adaptNum');
              const imgElement = container.querySelector('img');
  
              // imgのsrcからファイル名の番号部分を抽出
              const src = imgElement.getAttribute('src');
              const fileNumber = src.match(/(\d+)\.png$/);
  
              if (fileNumber) {
                const fileName = fileNumber[1];
                clickedImages.push(fileName);

                // ソート（数値順）
                clickedImages.sort(function(a, b) {
                    const numA = parseInt(a.match(/\d+/)[0], 10);
                    const numB = parseInt(b.match(/\d+/)[0], 10);
                    return numA - numB;
                });
              }
  
              // adaptNum を更新
              updateAdaptNum(clickedImages);
  
              // deckNumText の値を更新
              updateDeckNumText();
  
              // クリックされた画像を表示
              updateImageDisplay();
          });
      });
  }

  // Ajaxリクエストを送信する関数
  function sendAjaxRequest() {
    const formData = new FormData(form);
    const url = new URL(form.action, window.location.href);
    formData.forEach((value, key) => {
        url.searchParams.append(key, value);
    });

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('search-results').innerHTML = data;
        
        // addBtnの無効化解除を含む処理を呼び出す
        initAddButtons();   // addBtnのイベントリスナーを再バインド
        // adaptNum を更新
        updateAdaptNum(clickedImages);
        updateDeckNumText();
    });
  }

  // クリアボタンによる初期化処理
  function clearDeckList() {
    clickedImages.length = 0;  
    updateAdaptNum(clickedImages);
    updateDeckNumText();
    updateImageDisplay();
  }


    // フォームの送信時にページのリロードを防ぐ
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // 通常のフォーム送信をキャンセル
        sendAjaxRequest();
    });

  });


  