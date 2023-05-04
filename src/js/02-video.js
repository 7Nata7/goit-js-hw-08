import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
const vimeoPlayer = new Player('vimeo-player');

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const currentTime = JSON.parse(savedTime);
  vimeoPlayer.setCurrentTime(currentTime);
  // console.log(savedTime)
}

vimeoPlayer.on('timeupdate', throttle(function(data) {
  const currentTime = Math.floor(data.seconds);

  const lastUpdateTime = localStorage.getItem('lastUpdateTime') || 0;
  const now = Date.now();
  if (now - lastUpdateTime > 1000) {
    localStorage.setItem('lastUpdateTime', now);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  }
  console.log(currentTime);
}, 1000));


