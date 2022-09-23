import Player from '@vimeo/player';
import throttle from 'lodash.throttle'
const iFrameRef = document.querySelector('iframe');
const player = new Player(iFrameRef);
player.setCurrentTime(1.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.on('play', function() {
 
    console.log('played the video!');
});


player.on('timeupdate', function() {
    player.getCurrentTime().then(function(seconds) {
    console.log("notrotle", seconds);
        
         }).catch(function(error) {

    });
   })   
