// ゲーム開始画面から遷移してきた際に処理を実施する。
window.addEventListener('load', function(){

  // japTypingMovieの処理
  let instantPlayJapPopup= document.getElementById('instantPlayJapPopup');
  let japTypingMovie= document.getElementById('japTypingMovie');
  // mouseover時の処理
  instantPlayJapPopup.addEventListener("mouseover", function() {
    japTypingMovie.muted = true;
    japTypingMovie.autoplay = true;
    japTypingMovie.loop = true;
    japTypingMovie.play();
  }, false);
  // mouseout時の処理
  instantPlayJapPopup.addEventListener("mouseout", function() {
    japTypingMovie.pause();
    japTypingMovie.currentTime = 0;
  }, false);


  // engTypingMovieの処理
  let instantPlayEngPopup= document.getElementById('instantPlayEngPopup');
  let engTypingMovie= document.getElementById('engTypingMovie');
  // mouseover時の処理
  instantPlayEngPopup.addEventListener("mouseover", function() {
    engTypingMovie.muted = true;
    engTypingMovie.autoplay = true;
    engTypingMovie.loop = true;
    engTypingMovie.play();
  }, false);
  // mouseout時の処理
  instantPlayEngPopup.addEventListener("mouseout", function() {
    engTypingMovie.pause();
    engTypingMovie.currentTime = 0;
  }, false);

});