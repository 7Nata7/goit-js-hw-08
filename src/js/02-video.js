import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const timeKey = 'videoplayer-current-time';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const onPlay = function() {
  player.setCurrentTime(localStorage.getItem(timeKey));
  player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(timeKey, data.seconds);
    console.log('Time saved:', data.seconds);
  }, 1000));
};

player.on('play', onPlay);

const currentTime = localStorage.getItem(timeKey);
if (currentTime) {
  player.setCurrentTime(currentTime);
}

