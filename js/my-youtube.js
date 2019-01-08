// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-youtube', {
    height: '390',
    width: '640',
    videoId: 'gnHLSa5hc6I',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {rel: 0, showinfo: 0, ecver: 2}
  })
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo()
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING && !done) {
    setTimeout(() => player.stopVideo(), 0)
    done = true
  }
}

function setIdVideo() {
  idVideo = $(this).attr('data-internalid')
  console.log(idVideo)
  player.loadVideoById(idVideo)
  player.stopVideo()
}

$('.index-box-testimonios .testimonios-list > span').click(function () {
  $('.index-box-testimonios .testimonios-list > span').removeClass('testimonios-selected')
  $(this).addClass('testimonios-selected')
  setIdVideo.call(this)
});