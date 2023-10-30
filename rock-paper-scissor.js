// let selects = document.querySelectorAll('.img-items');
// let cpuSelects = document.querySelectorAll(".img-cpu-choosed");

// for(let i = 0; i <= selects.length -1 ; i++){
//     selects[i].addEventListener('click',()=>{
//        hiddenCpuSelectors();
//        for(let j = 0; j <= selects.length -1 ; j++){
//            if(j != i){
//                selects[j].classList.add("hidden");
//            }
//         }
//         let choosed = '';
//         if (i == 0){
//             choosed = 'Paper';
//         }else if(i == 1){
//             choosed = 'Rock';
//         }else{
//             choosed = 'Scissors';
//         }
//         document.querySelector('.items_box > h1').innerHTML = `You choosed ${choosed}`
//         let randChoosed = Number(Math.floor((Math.random()*10)/4));
//         cpuSelects[randChoosed].classList.remove('hidden');
//         gameLogic(i,randChoosed)
//     });
// }

// document.querySelector('button').addEventListener('click', refresh);

// function refresh () {
//     for(let i = 0; i <= selects.length -1 ; i++){
//         cpuSelects[i].classList.add('hidden');
//         selects[i].classList.remove('hidden');
//     }
//     document.querySelector('.items_box > h1').innerHTML = "Choose your weapon";
// }


// function hiddenCpuSelectors(){
//     for(let i = 0; i <= selects.length -1 ; i++){
//         cpuSelects[i].classList.add('hidden');
//     }
// }

// function gameLogic(userSelect,cpuSelect){

//     if (userSelect !== cpuSelect){
//         if(userSelect == 0){
//             if(cpuSelect == 1){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if(userSelect == 1){
//             if(cpuSelect == 2){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if(userSelect == 2){
//             if(cpuSelect == 0){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//     }
// }

// document.addEventListener('keydown',(e)=>{
//     if (e.key = 'R'){
//         refresh();
//     }
// })

// -----------------------------------------------------------------

let images = document.querySelectorAll('.img-items');
let cpuimages = document.querySelectorAll(".img-cpu-choosed");

for(let i = 0; i <= images.length -1 ; i++){
    images[i].addEventListener('click',()=>{
        hiddenselect(i);
        randomcpu = Math.floor(Math.random()*3);
        cpuimages[randomcpu].classList.remove('hidden');
        gameLogic(i,randomcpu);
            
    })
}
let choiced = '';
        if (i == 0){
            choiced = 'Paper';
        }else if(i == 1){
            choiced = 'Rock';
        }else{
            choiced = 'Scissors';
        }
        document.querySelector('.items-box > h1').innerHTML = `You choiced ${choiced}`
function hiddenselect(i){
    for(let j = 0; j <=images.length -1 ;j++){
        if(j != i){
            images[j].classList.add('hidden');
        }

    }
}
const refreshfunction = ()=>{
    for(let i = 0; i <= images.length -1 ;i++){
        cpuimages[i].classList.add('hidden');
        images[i].classList.remove('hidden');
    }
}

document.querySelector('button').addEventListener('click',refreshfunction);

document.addEventListener('keydown',(e)=>{
    if (e.key = 'space'){
        refreshfunction();
    }
})

function gameLogic(user,cpu){
    userPoint = (document.querySelector('#user-point'));
    cpuPoint = (document.querySelector('#cpu-point'));
    if(user != cpu){
        if(user == 0){
            if(cpu == 1){
                userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
            }
            
        }
        if(user == 1){
            if(cpu == 2){
                userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
            }
        }
        if(user == 2){
            if(cpu == 0){
                userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
            }
        }

    }

}
