import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const currentTime = function (e) {
    localStorage.setItem(STORAGE_KEY, e.seconds);
}
const saveTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(saveTime).then(function(seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':           
            break;
        default:   
            break;
    }
});

