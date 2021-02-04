let paper = 'paper';
let rock = 'rock';
let scissor = 'scissor';
let buttons = document.querySelectorAll('button');
let userCounter = 0;
let pcCounter = 0;
let counterdiv = document.querySelector('#counter');
let counter1 = document.createElement('p');
let counter2 = document.createElement('p');
let asdf = document.createElement('div');
asdf.classList.add('endgame');


function pcPlay(){
    let random13 = Math.floor(Math.random()*3);
    if(random13 == 0)return rock;
    if(random13 == 1)return paper;
    if(random13 == 2)return scissor;
}
function game(user,pc){
    if(user==pc)return 0;
    if(user==rock && pc==paper)return -1;
    if(user==rock && pc==scissor)return 1;
    if(user==paper && pc==scissor)return -1;
    if(user==paper && pc==rock)return 1;
    if(user==scissor && pc==paper)return 1;
    if(user==scissor && pc==rock)return -1;
}
counter1.textContent = "User Points: " + userCounter;
counter2.textContent = "Machine Points: " + pcCounter;
counterdiv.appendChild(counter1)
counterdiv.appendChild(counter2)

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let result = game(button.id,pcPlay())
        if (result < 0)pcCounter += 1;
        if (result > 0)userCounter +=1;
        counter1.textContent = "User Points: " + userCounter;
        counter2.textContent = "Machine Points: " + pcCounter;
        counterdiv.appendChild(counter1)
        counterdiv.appendChild(counter2)
        if(userCounter==5){
            asdf.textContent = "You Have Won! Congratulations";
            counterdiv.appendChild(asdf);
        }
        if(pcCounter == 5){
            asdf.textContent = 'You Have lost! What a Shame :(';
            counterdiv.appendChild(asdf);
        }
    });
});

