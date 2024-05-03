let btn=document.querySelector('.btn');
let div=document.getElementById('quots');
let arrayOfquotes=[
"Hope is the heartbeat of the soul,Hope is the heartbeat of the soul.",
"The purpose of our lives is to be happy,The purpose of our lives is to be happy." ,
"The only thing stronger than fear is hope, The only thing stronger than fear is hope." ,
"Life is either a daring adventure or nothing at all.",
"Goals transform a random walk into a chase,Goals transform a random walk into a chase.",
"The only way to do great work is to love what you do.",
"Set your goals high, and don't stop till you get there." ,
"Hope is a waking dream,Hope is a waking dream.",
"Hope is passion for what is possible,Hope is passion for what is possible",
"Life is really simple, but we insist on making it complicated." ,
"The best way to predict the future is to create it." ,
"You are never too old to set another goal or to dream a new dream." 
];
btn.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random() * arrayOfquotes.length);
    div.innerHTML = arrayOfquotes[randomIndex];
});