
const audio = document.querySelector('audio');
const lyrics = document.querySelector('.lyrics')

audio.addEventListener('play', ()=> {
    lyrics.style.cssText = 'animation: marquee 112s linear;'
})