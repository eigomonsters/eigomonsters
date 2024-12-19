// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//= require search
//= require rails-ujs


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
    // const addButtons = document.querySelectorAll('.addBtn');
    const deckNumText = document.querySelector('.deckNumText');
    const deckNumTextInTitle = document.querySelector('.deckNumTextInTitle');
    let clickedImages = [];
    let paramsCategory = "すべて";
    let paramsKeyword = "";
    let paramsPoketype = [];
    let paramsPage = 1;
    const eachImageInDeck = document.querySelector('.eachImageInDeck');
    const eachImageInSelectableBox = document.querySelector('.eachImageInSelectableBox');
    const form = document.querySelector('.search-form');
    const typeCategory = document.querySelector('.typeCategory');
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
    const notFoundDeckError = document.querySelector('.notFoundDeckError');
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
    const deckSearchBtn = document.querySelector(".deckSearchBtn");
    const deckKeyword = document.querySelector('.searchDeckInput').value = "";
    const searchDeckInput = document.querySelector('.searchDeckInput');

    // 1ページあたりに表示する画像枚数
    const imageNumPerPage = 100;

    // 初期ページを取得 (1ページ目)
    fetchImages(paramsPage);

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


    function fetchImages(page) {
      const url = new URL(`/eigomonsters/search`, window.location.href);
      url.searchParams.append('page', page);
      if (paramsCategory) {
          url.searchParams.append('dispCardLargeCategory', paramsCategory);
      }
      if (paramsKeyword) {
        url.searchParams.append('keyword', paramsKeyword);
      }
      if (paramsPoketype) {
        url.searchParams.append('poketype', paramsPoketype.join(','));
      }
  
      // サーバーからデータを取得
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              // 画像データを更新
              updateImageSelectableDisplay(data.images);
          })
          .catch(error => console.error('Error fetching images:', error));
    }
    
    // 全体画像リストの表示を更新・ボタンを定義
    function updateImageSelectableDisplay(images) {
      // 現在の画像をクリア
      eachImageInSelectableBox.innerHTML = '';
    
      // 新しい画像を追加
      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = '';
        imgElement.classList.add('cardImage');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        imageContainer.style.position = 'relative'; // 親要素に relative を設定

        const adaptNumPerImage = document.createElement('div');
        adaptNumPerImage.classList.add('adaptNum');
        adaptNumPerImage.style.display = 'none';
        adaptNumPerImage.style.position = 'absolute'; // adaptNum を絶対配置
    
        // 必要に応じてクリックイベントなどを追加
        imgElement.addEventListener('click', () => {
          // image.url からファイル名の番号部分を抽出
          const src = image.url; // image.url を直接使用
          const fileNumber = src.match(/(\d+)\.png$/); // 正規表現で番号部分を抽出

          if (fileNumber) {
            const fileName = fileNumber[1];
            clickedImages.push(fileName);

            // ソート
            // サーバーにリクエストを送信するPromise
            const deckListSortedPromise = fetch('/eigomonsters/decklistsort', {
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
              clickedImages = data.clicked_images;
            });

            // 全ての非同期処理を待機
            Promise.all([deckListSortedPromise])
            .then(() => {
              // deckNumText の値を更新
              updateDeckNumText();
              // クリックされた画像を表示
              updateImageDisplay();
              // クリック可能状態を更新
              updateImageClickState();
            })
            .catch((error) => {
              // console.error('エラーが発生しました:', error);
            });
          }
        });

        // 親要素に画像とadaptNumを追加
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(adaptNumPerImage);

        // 最後に親要素を選択ボックスに追加
        eachImageInSelectableBox.appendChild(imageContainer);
      });
      // 初期状態でクリック可能状態を更新
      updateImageClickState();
    }


    // 画像のクリック可能状態を更新する関数
    function updateImageClickState() {
      const allImages = document.querySelectorAll('.cardImage');

      if (clickedImages.length >= 20) {
        allImages.forEach(img => {
          img.classList.add('disabled')
          // 各画像のファイル名を取得
          const fileName = img.src.match(/(\d+)\.png$/)[1];
          // clickedImagesで該当画像のクリック回数をカウント
          const count = clickedImages.filter(img => img === fileName).length;
          // adaptNum要素を画像の親要素から取得
          const adaptNumElement = img.closest('.imageContainer').querySelector('.adaptNum');
          // countをadaptNumに設定
          adaptNumElement.innerText = count;
          // countが1以上なら表示、0の場合は非表示
          if (count >= 1) {
            adaptNumElement.style.display = 'block';
          } else {
            adaptNumElement.style.display = 'none';
          }
        });
      } else {
        allImages.forEach(img => {
          // 各画像のファイル名を取得
          const fileName = img.src.match(/(\d+)\.png$/)[1];
          // clickedImagesで該当画像のクリック回数をカウント
          const count = clickedImages.filter(img => img === fileName).length;
          // adaptNum要素を画像の親要素から取得
          const adaptNumElement = img.closest('.imageContainer').querySelector('.adaptNum');
          // countをadaptNumに設定
          adaptNumElement.innerText = count;
          // countが1以上なら表示、0の場合は非表示
          if (count >= 1) {
            adaptNumElement.style.display = 'block';
          } else {
            adaptNumElement.style.display = 'none';
          }
          
          // クリック回数が2回以上の場合、その画像をクリック不可にする
          if (count >= 2) {
            img.classList.add('disabled');
            img.style.pointerEvents = 'none'; // クリックイベントを無効にする
          } else {
            img.classList.remove('disabled');
            img.style.pointerEvents = ''; // クリックイベントを有効にする
          }
        });
      }
    }

    pageButtonsFunc();

    // 初期表示ではすべてのpoketypeを表示
    poketypeButtons.forEach(button => {
      button.classList.remove('selected'); // 画面リロード時に 'selected' クラスをリセット
      poketypeField.value = []
    });

    // typeImageButtonがクリックされたときの処理
    poketypeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const selectedPoketype = button.getAttribute('data-poketype');

          if (paramsPoketype.includes(selectedPoketype)) {
            // 既に選択されている場合は削除
            paramsPoketype = paramsPoketype.filter(poketype => poketype !== selectedPoketype);
            button.classList.remove('selected');
          } else {
              // 選択されていない場合は追加
              paramsPoketype.push(selectedPoketype);
              button.classList.add('selected');
          }
          poketypeField.value = paramsPoketype.join(',');

          debounce(sendAjaxRequest, 200);  // 500msの遅延を設けてリクエストを送信
      });
    });


    // ラジオボタン変更時のイベント
    largeCategoryRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        // ラジオボタンの値を取得
        paramsCategory = this.value;

        // "トレーナーズ"が選択された場合、全てのpoketypeButtonsからselectedをremove
        if (paramsCategory === "トレーナーズ") {
            poketypeButtons.forEach(button => {
              button.classList.remove('selected');
              button.disabled = true; // ボタンを無効化
              button.classList.add('disabled'); // 透明化用のCSSクラスを追加
            });

            // poketypeFieldの値もクリア
            if (poketypeField) {
                poketypeField.value = '';
                paramsPoketype = [];
            }
        } else {
            poketypeButtons.forEach(button => {
            button.disabled = false; // ボタンを有効化
            button.classList.remove('disabled'); // CSSクラスを削除
        });
        }

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
      notFoundDeckError.style.display = 'none';
      errorMessages.style.display = 'none';

      // 20枚以下の場合のエラーチェック
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
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Tanecheck API error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.errorCount > 0) {
            errorCount += 1;
            noTanePokemonError.style.display = 'block';
          }
        })
        .catch((error) => {
          console.error('Tanecheckエラー:', error);
          errorCount += 1;
          notFoundDeckError.style.display = 'block'; // APIエラー用のエラーメッセージを表示
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
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Samecardcheck API error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.errorCount > 0) {
            errorCount += 1;
            sameCardNumError.style.display = 'block';
          }
        })
        .catch((error) => {
          console.error('Samecardcheckエラー:', error);
          errorCount += 1;
          notFoundDeckError.style.display = 'block'; // APIエラー用のエラーメッセージを表示
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
            updatePopupImages();
            modal.style.display = 'block';
          }
        })
        .catch((error) => {
          // fetchの共通エラー処理（Promise.all内でキャッチされるエラー）
          console.error('非同期処理中のエラー:', error);
          errorMessages.style.display = 'block';
          notFoundDeckError.style.display = 'block'; // 汎用エラー表示
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
        const imageSrc = `https://itachihai-card-images.s3.ap-northeast-1.amazonaws.com/cardimages/${imageId}.png`;

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
          const imageSrc = `https://itachihai-card-images.s3.ap-northeast-1.amazonaws.com/cardimages/${imageId}.png`;
  
          const imgElement = document.createElement('img');
          imgElement.src = imageSrc;
          imgElement.alt = 'クリックした画像';
  
          // クリックイベントを設定
          imgElement.addEventListener('click', function() {
              // clickedImages から削除
              clickedImages.splice(index, 1);
              // 表示を更新
              updateImageDisplay();
          });
  
          eachImageInDeck.appendChild(imgElement);
      });
  
      // deckNumText の値を更新
      updateDeckNumText();
      // 画像のクリック可否を判定
      updateImageClickState();
    }


    // デッキ検索押下時の処理
    deckSearchBtn.addEventListener('click', function () {
      const deckKeyword = document.querySelector('.searchDeckInput').value; // キーワードを取得
      // エラーメッセージを非表示に変更
      errorMessages.style.display = 'none';
      notFoundDeckError.style.display = 'none';

      // キーワードが空でない場合にのみリクエストを送信
      if (deckKeyword) {
        // サーバーにリクエストを送信するPromise
        fetch('/eigomonsters/searchdeck', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            deckKeyword: deckKeyword,
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.clicked_images && data.clicked_images.length > 0) {
            // 入力済みのカードをクリア
            eachImageInDeck.innerHTML = '';
            clickedImages.length = 0; 
            // 要素を一つずつデッキに格納
            data.clicked_images.forEach(function (imageId, index) {
              // 画像のパスを作成
              const imageSrc = `https://itachihai-card-images.s3.ap-northeast-1.amazonaws.com/cardimages/${imageId}.png`;
      
              const imgElement = document.createElement('img');
              imgElement.src = imageSrc;
              imgElement.alt = 'クリックした画像';
      
              eachImageInDeck.appendChild(imgElement);
              clickedImages.push(imageId);
            });
            // deckNumText の値を更新
            updateDeckNumText();
            // クリックされた画像を表示
            updateImageDisplay();
          } else {
            errorMessages.style.display = 'block';
            notFoundDeckError.style.display = 'block';
          }
        });
      }
    });

    // デッキ検索Enterキー押下時に検索ボタンのクリック処理を呼び出す
    searchDeckInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        deckSearchBtn.click();
      }
    });
    
  // 採用カード枚数を更新
  function updateDeckNumText() {
    const total = clickedImages.length; // clickedImages の要素数で total を設定
    deckNumText.textContent = total; // total を表示
    deckNumTextInTitle.textContent = total; // total を表示
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
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // JSONとしてパース
    })
    .then(data => {
        // サーバーからのレスポンスデータをチェック
        if (data.images && Array.isArray(data.images)) {
            updateImageSelectableDisplay(data.images);
        } else {
            console.error("Invalid response format: 'images' property is missing or not an array.");
        }

        // ページネーションの更新
        if (data.total_count !== undefined) {
            updatePagination(data.total_count);
        }

      pageButtonsFunc();
      
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
  }

  function pageButtonsFunc() {
    const pageButtons = document.querySelectorAll(".pageBtn");
    // 初期表示時に1ページ目のボタンに `active` クラスを追加
    const firstPageButton = document.querySelector(".pageBtn[data-page='1']");
    if (firstPageButton) {
        firstPageButton.classList.add("active");
    }
    pageButtons.forEach(button => {
      button.addEventListener("click", function () {
          const page = this.getAttribute("data-page");
          // 全てのボタンから active クラスを削除
          pageButtons.forEach(btn => btn.classList.remove("active"));
          // 押下されたボタンに active クラスを追加
          this.classList.add("active");
          // サーバーから該当ページのデータを取得
          fetchImages(page);
      });
    });
  }

  function updatePagination(totalCount) {
      const numButtons = Math.ceil(totalCount / imageNumPerPage); // ページ数を計算
      const currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || 1);
      const paginationContainer = document.querySelector('.pageBtns');

      paginationContainer.innerHTML = ''; // 現在のページネーションをクリア

      for (let i = 1; i <= numButtons; i++) {
          const button = document.createElement('button');
          button.classList.add('pageBtn');
          if (i === currentPage) {
              button.classList.add('active');
          }
          button.dataset.page = i;
          button.textContent = i;
          paginationContainer.appendChild(button);
      }
  }

  // クリアボタンによる初期化処理
  function clearDeckList() {
    clickedImages.length = 0;  
    updateDeckNumText();
    updateImageDisplay();
  }


    // フォームの送信時にページのリロードを防ぐ
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // 通常のフォーム送信をキャンセル
        sendAjaxRequest();
    });

  });



  