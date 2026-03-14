//get our elements from the html
const player = document.getElementsByClassName('player_controls');
const progress = player.getElementsByClassName('progress');
const play = player.getElementsByClassName('player_button toggle');
const rangeSlider = player.getElementsByClassName('player_slider');
const rangeSkip = player.getElementsByClassName('player_button');

//functions to run our logic
//play and pause video
function playVideo () {
    const method = video.paused ? 'play' : 'pause';
    video[method];
}

//changing our icon
function updateButton () {
    const icon = this.paused ? '⏸' : '▶';//we use this as its an object constantly changing
    play.textContent = icon;
}

//skipping in the video
function skip () {
    video.currentTime += parseFloat(this.dataset.skip);//changing our variable to a readable string
}

//updating our ranges
function updateRanges () {
    video[this.name] = this.value;
}

//updating our video progress on the bar
function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100;
    const progress = `${percent}%`;
}

//scrubbing functionality
function scrub (e) {
    const progress = (e.offSetX / progress.offsetWidth) * video.duration;
    video.currentTime = progress;
}

//event-listeners
play.addEventListener('click', playVideo);
play.addEventListener('click', updateButton);

rangeSkip.forEach((button) => button.addEventListener('click', skip));

rangeSlider.forEach((button) => button.addEventListener('click', updateRanges));


