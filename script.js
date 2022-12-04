console.log('hello')
let songIndex = 0
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myprogessbar = document.getElementById('myprogessbar')
let gif = document.getElementById('gif')
let songlist = Array.from(document.getElementsByClassName('songlist'))
console.log(masterPlay)

let songs = [
    {songname :'Rhiannon',filepath:'1.mp3',coverpath:'cover1.jpg'},
    {songname :'Me and Bobby McGee',filepath:'2.mp3',coverpath:'2.jpg'},
    {songname :'Janam Janam Tuhi ',filepath:'3.mp3',coverpath:'3.jpg'},
    {songname :'Come On, Eileen',filepath:'4.mp3',coverpath:'4.jpg'},
    {songname :'Johnny B. Goode',filepath:'5.mp3',coverpath:'5.jpg'},
    {songname :'Me and Julio Down',filepath:'6.mp3',coverpath:'6.jpg'},
    {songname :'Johnny B. Goode',filepath:'7.mp3',coverpath:'7.jpg'},
    {songname :'Jack and Dian',filepath:'8.mp3',coverpath:'9.jpg'}
]

songlist.forEach((elment,i)=>{
    elment.getElementsByTagName('img')[0].src = songs[i].coverpath
    elment.getElementsByClassName('songname')[0].innerText = songs[i].songname
})

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=> {
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogessbar.value = progress
})

myprogessbar.addEventListener('change',()=> {
    audioElement.currentTime = (myprogessbar.value*audioElement.duration)/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex+1}.mp3`;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})