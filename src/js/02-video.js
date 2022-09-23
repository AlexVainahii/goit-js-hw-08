import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import metodStorage from './localstorage';
const iFrameRef = document.querySelector('iframe');
const videoStorageKey = 'videoplayer-current-time';
const player = new Player(iFrameRef);

player.setCurrentTime(metodStorage.load(videoStorageKey, 0));

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      metodStorage.save(videoStorageKey, seconds);
    });
  }, 1000)
);
