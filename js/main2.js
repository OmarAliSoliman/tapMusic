const pads = document.querySelectorAll('.pads');
const sounds = document.querySelectorAll('.pads .sounds');
const visual = document.getElementById('visual');
const load = document.querySelectorAll('.load span');
const soundPlay = document.querySelectorAll('.sound-play');
const music = document.querySelectorAll('.sound-play .sounds')
const soundEffect = document.querySelectorAll('.sound-effect span');
const playStop = document.querySelectorAll('#playStop');
const icons = document.querySelectorAll('#playStop i');
console.log(icons);
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
];

console.log(pads);
console.log(sounds);

pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        changeColor(index);

    });
});

// function crateBuuble(index){
//     const buuble = document.createElement("div");
//     visual.appendChild(buuble);
//     buuble.style.backgroundColor= colors[index];
//     buuble.style.animation = "jump 1s linear";
//     buuble.addEventListener('animationend', function(){
//         visual.removeChild(this);
//     })
// }

function changeColor(index){
    load[index].style.backgroundColor = colors[index];
    load[index].style.animation = "load 1s infinite .8s ease";
}

playStop.forEach((soun,index)=>{
    soun.addEventListener('click',function () {
        if(music[index].paused){
            music[index].play();
            playStop[index].innerHTML = "<i class='fas fa-pause-circle'></i>";
            document.querySelectorAll('#playStop i')[index].style.color=colors[index];
        }else{
            music[index].pause();
            playStop[index].innerHTML = "<i class='fas fa-play-circle'></i>";
        }
    });
});
