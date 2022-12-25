let container = document.getElementsByClassName("container")[0];
let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let container4 = document.getElementsByClassName("container4")[0];
let outer = document.getElementsByClassName("outer")[0];
let para = document.getElementsByClassName("para")[0];
let submit = document.querySelector('#submit');
let startA = document.getElementById("startA");
let gTH = document.getElementById("gTH");
let spn = document.querySelector('.spn');
let text = document.getElementById("text");
let pipebtn = document.getElementById("pipe");
let span = document.getElementById("span");
let probobtn=document.getElementById("probo");
let agebtn=document.getElementById("age");
let lossbtn=document.getElementById("loss");
let btn = document.getElementById("btn");
let previ = document.getElementById("previ");
let next = document.getElementById("next");
let check = document.getElementById("check");
let answer = document.getElementsByClassName("answer");
let spa = document.querySelector('.spa');
let inp1;
let inp2;
let inp3;
let inp4;
let inp5;
let inp6;
let inp7;
let inp8;
let inp9;
let inp10;
let arr2 = [];
let arr3=[0,0,0,0,0,0,0,0,0,0];
let arr; 

let pipe = () => {
    container.style.display = "none";
    container2.style.display = "flex"
    para.innerHTML = ` Hi,<b> ${text.value}</b> <p> You selected your Quiz topic is <strong>'<u>${pipebtn.value}</u>'</strong> </p> <p> Are you ready to give Quiz test. before going to start Quiz, Please read the below Instructions carefully. </p> <p><b> INSTRUCTION: </b> Read the Questions carefully and give you answer. you'll have <u>500 Seconds</u> to answer questions. <strong>Before going to next Question you have to give answer in Input box, and then Click on CHECK button to Secure your answer. and After Clicking CHECK button You can Click NEXT button for Next Question. Quiz will be auto Submitted, if Time will be over. </strong> </p> <p>Best OF Luck.</p> <p>Click on Below Button to Start.</p> `

    arr = [
        {
            "que": `<div class="que" > <span class="anspn" >Q-1. </span>Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?</div>`,
            "option1": `<div class="que" > <li> <span class="anspn" >A.</span>5/11</li> </div>  `,
            "option2": `<div class="que" > <li> <span class="anspn" >B.</span>6/11</li></div> `,
            "option3": `<div class="que" > <li> <span class="anspn" >C.</span>7/11</li> </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp1" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-2. </span>A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:
            </div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>7 hours</li></div>  `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span>8 hours</li> </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span>14 hours</li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp2" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
    ];
}
pipebtn.addEventListener("click", pipe);

let answered=0;
let ansQ;
let time = 500;
let cc = 0;
let ab = 0;
let score = 0;
let wrong = 0;
let loopm = () => {       
   
    container2.style.display = "none";
    container3.style.display = "flex"
    outer.style.display = "block"
    previ.disabled = true
    container3.innerHTML = "";
    if (ab < arr.length) {       
        for (let i = ab; i <= arr.length - 1 && i <= ab; i++) {
            container3.innerHTML += `${arr[i].que} ${arr[i].option1} ${arr[i].option2} ${arr[i].option3} ${arr[i].input}`;
        }
        ab++;
    }

    else {
        container3.innerHTML = "";
    }

    for (let i = cc; i <= cc; i++) {   

        ansQ = `${arr[cc].ans}`
        
    }
 
    cc++;     
    span.innerHTML = `${cc}/10`
    let inter = setInterval(() => {
        time--;
        spn.innerHTML = `${time}`
        if(time<50){
            spn.style.borderColor = "red";
            spn.style.color="red";
            }
        if (time <= 0) {
            spn.innerHTML = `00`
            spn.style.color = "red"
            clearInterval(inter);
            subm();
        }
    }, 1000);
}
btn.addEventListener("click", loopm);


let a = 1;
let nxt = () => {        

    next.style.display = "inline"
    previ.style.display = "inline";
    for (let i = 0; i != 1; i++) {     

        if (a <= arr.length - 1) {
            container3.innerHTML = `${arr[a].que} ${arr[a].option1} ${arr[a].option2} ${arr[a].option3} ${arr[a].input}`

        }
        else if (a > arr.length - 2) {
            next.disabled = true;
        }
    }
    a++;
    previ.disabled = false;

    for (let i = cc; i <= cc; i++) {    

        ansQ = `${arr[cc].ans}`
        answer[cc - 1].style.display = 'none'
        answer[cc].style.display = 'block'

      
        if(arr3[cc]!=1){        
            check.disabled=false;
        }
        else if(arr3[cc]==1){     
            check.disabled=true;
        }
    }
    cc++;
    span.innerHTML = `${cc}/10`       
    if (cc == 11 || cc == 10) {
        span.innerHTML = `10/10`
        next.disabled = true;
        submit.style.display = "block"
    }
   
}

let back = () => {      
   
    if (cc == 2) {
        previ.disabled = true;
    }
    for (let i = 0; i != 1; i++) {

        let j = 2;
        if (a >= 0 && j <= a) {   
            container3.innerHTML = `${arr[a - 2].que} ${arr[a - 2].option1} ${arr[a - 2].option2} ${arr[a - 2].option3} ${arr[a - 2].input}`
        }
        else {
            previ.disabled = true;
        }
        a--
    }
    next.disabled = false;
    submit.style.display = "none"  

    for (let i = cc; i <= cc; i++) {   

        if (cc == 1) {
            previ.disabled = true;
        }
        else {
            ansQ = `${arr[cc - 2].ans}`
            answer[cc - 2].style.display = 'block'
            answer[cc - 1].style.display = 'none'

        }
        if(arr3[cc-2]==1){  
            check.disabled=true;
        }else{
            check.disabled=false;
        }
    }
  
    arr2.pop();   

    cc--;
    span.innerHTML = `${cc}/10`
    if (cc == 0) {
        span.innerHTML = `1/10`
        previ.disabled = true;
    }
    
}



for(let i=0; i<10;i++){     
    answer[i].style.display = "none";
}

let chec = () => {    
    
    if (cc == 1) {       
        answer[0].style.display = "block";
        inp1 = document.getElementById("inp1").value.toUpperCase();
        arr2.splice(0, 0, inp1);

        if (arr2[cc - cc] == ansQ) {
            answer[0].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[0].style.borderColor="green";
            score++;
        }
        else {
            answer[0].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[0].style.borderColor="red";
            wrong++;
        }

        arr3[0]=1;    
    }
    else if (cc == 2) {      
        answer[1].style.display = "block";
        inp2 = document.getElementById("inp2").value.toUpperCase();
        arr2.splice(0, 1, inp2);
        answer.innerHTML = `${arr2[cc - 1]}`
        if (arr2[cc - cc] == ansQ) {
            answer[1].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[1].style.borderColor="green";
            score++;
        }
        else {
            answer[1].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[1].style.borderColor="red";
            wrong++;
        }
        arr3[1]=1;
    }
    else if (cc == 3) {  
        answer[2].style.display = "block";
        inp3 = document.getElementById("inp3").value.toUpperCase();
        arr2.splice(0, 2, inp3);
        if (arr2[cc - cc] == ansQ) {
            answer[2].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[2].style.borderColor="green";
            score++;
        }
        else {
            answer[2].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[2].style.borderColor="red";
            wrong++;
        }
        arr3[2]=1;
    }
    else if (cc == 4) {
        answer[3].style.display = "block";
        inp4 = document.getElementById("inp4").value.toUpperCase();
        arr2.splice(0, 3, inp4);
        if (arr2[cc - cc] == ansQ) {
            answer[3].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[3].style.borderColor="green";
            score++;
        }
        else {
            answer[3].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[3].style.borderColor="red";
            wrong++;
        }
        arr3[3]=1;
    }
    else if (cc == 5) {
        answer[4].style.display = "block";
        inp5 = document.getElementById("inp5").value.toUpperCase();
        arr2.splice(0, 4, inp5);
        if (arr2[cc - cc] == ansQ) {
            answer[4].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[4].style.borderColor="green";
            score++;
        }
        else {
            answer[4].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[4].style.borderColor="red";
            wrong++;
        }
        arr3[4]=1;
    }
    else if (cc == 6) {
        answer[5].style.display = "block";
        inp6 = document.getElementById("inp6").value.toUpperCase();
        arr2.splice(0, 5, inp6);
        if (arr2[cc - cc] == ansQ) {
            answer[5].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[5].style.borderColor="green";
            score++;
        }
        else {
            answer[5].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[5].style.borderColor="red";
            wrong++;
        }
        arr3[5]=1;
    }
    else if (cc == 7) {
        answer[6].style.display = "block";
        inp7 = document.getElementById("inp7").value.toUpperCase();
        arr2.splice(0, 6, inp7);
        if (arr2[cc - cc] == ansQ) {
            answer[6].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[6].style.borderColor="green";
            score++;
        }
        else {
            answer[6].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[6].style.borderColor="red";
            wrong++;
        }
        arr3[6]=1;
    }
    else if (cc == 8) {
        answer[7].style.display = "block";
        inp8 = document.getElementById("inp8").value.toUpperCase();
        arr2.splice(0, 7, inp8);
        if (arr2[cc - cc] == ansQ) {
            answer[7].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[7].style.borderColor="green";
            score++;
          
        }
        else {
            answer[7].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[7].style.borderColor="red";
            wrong++;
          
        }
        arr3[7]=1;
    }
    else if (cc == 9) {
        answer[8].style.display = "block";
        inp9 = document.getElementById("inp9").value.toUpperCase();
        arr2.splice(0, 8, inp9);
        if (arr2[cc - cc] == ansQ) {
            answer[8].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[8].style.borderColor="green";
            score++;
          
        }
        else {
            answer[8].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[8].style.borderColor="red";
            wrong++;
        }
        arr3[8]=1;
    }
    else if (cc == 10) {
        answer[9].style.display = "block";
        inp10 = document.getElementById("inp10").value.toUpperCase();
        arr2.splice(0, 9, inp10);
        if (arr2[cc - cc] == ansQ) {
            answer[9].innerHTML = `✅✔️ Correct ANSWER ✔️✅`
            answer[9].style.borderColor="green";
            score++;
        }
        else {
            answer[9].innerHTML = ` ❌❌ You Opted &nbsp "${arr2[cc - cc]}" ❌❌  <p> CORRECT OPTION is &nbsp "${ansQ}" </p> `
            answer[9].style.borderColor="red";
            wrong++;
        }
        arr3[9]=1;
    }
 
    check.disabled = true;               
    spa.innerHTML = `SCORE: <b>${score}</b>`
    answered++;
}

let subm = () => {
    container3.style.display = "none";
    previ.style.display = "none";
    check.style.display = "none";
    next.style.display = "none";
    submit.style.display = "none";
    spa.style.display = "none";
    spn.style.display = "none";
    span.style.display = "none";
    container4.style.display = "flex";
    gTH.style.display = "block";
    startA.style.display = "block";
    for (let i = 0; i <= 9; i++) {
        answer[i].style.display = "none";
    }

    container4.innerHTML = `<h2 style=" color:darkturquoise; ">Quiz Result </h2><div> <strong> ${text.value}, </strong> Your result is:</div> <div>Total time taken: <b>${500-time} Seconds</b></div>   <div> Total Questions: <b>10</b> </div> <div>Answered: <b>${answered}</b></div>  <div>Unanswered: <b>${10-answered}</b></div>  <div>Wrong: <b>${wrong}</b></div>  <div>Score: <b>${score}</b></div>   <div>Percentage: <b>${(score / 10 * 100)}%</b></div>`
}


let goToH = () => {

    window.location.assign("index.html");
    
}

let strtA = () => {
    window.location.reload();
}



let probo = () => {       
    container.style.display = "none";
    container2.style.display = "flex"
    para.innerHTML = ` Hi,<b> ${text.value}</b> <p> you selected your Quiz topic is <strong>'<u>${probobtn.value}</u>'</strong> </p> <p> Are you ready to give Quiz test. before going to start Quiz, Please read the below Instructions carefully. </p> <p><b> INSTRUCTION: </b> Read the Questions carefully and give you answer. you'll have <u>500 Seconds</u> to answer questions. <strong>Before going to next Question you have to give answer in Input box, and then Click on CHECK button to Secure your answer. and After Clicking CHECK button You can Click NEXT button for Next Question. Quiz will be auto Submitted, if Time will be over. </strong> </p> <p>Best OF Luck.</p> <p>Click on Below Button to Start.</p> `
    arr = [
        {
            "que": `<div class="que" > <span class="anspn" >Q-1. </span>A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?</div>`,
            "option1": `<div class="que" > <li> <span class="anspn" >A.</span>10/21 </li> </div>  `,
            "option2": `<div class="que" > <li> <span class="anspn" >B.</span>11/21 </li></div> `,
            "option3": `<div class="que" > <li> <span class="anspn" >C.</span>2/7 </li> </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp1" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-2. </span>What is the probability of getting a sum 9 from two throws of a dice?

            </div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> 1/6 </li></div>  `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 1/8 </li> </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span>1/9 </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp2" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        
    ];
}


let age=()=>{       
    
    container.style.display = "none";
    container2.style.display = "flex"
    para.innerHTML = ` Hi,<b> ${text.value}</b> <p> you selected your Quiz topic is <strong>'<u>${agebtn.value}</u>'</strong> </p> <p> Are you ready to give Quiz test. before going to start Quiz, Please read the below Instructions carefully. </p> <p><b> INSTRUCTION: </b> Read the Questions carefully and give you answer. you'll have <u>500 Seconds</u> to answer questions. <strong>Before going to next Question you have to give answer in Input box, and then Click on CHECK button to Secure your answer. and After Clicking CHECK button You can Click NEXT button for Next Question. Quiz will be auto Submitted, if Time will be over. </strong> </p> <p>Best OF Luck.</p> <p>Click on Below Button to Start.</p> `
    arr = [
        {
            "que": `<div class="que" > <span class="anspn" >Q-1. </span>The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?</div>`,
            "option1": `<div class="que" > <li> <span class="anspn" >A.</span> 4 years  </li> </div>  `,
            "option2": `<div class="que" > <li> <span class="anspn" >B.</span> 8 years </li></div> `,
            "option3": `<div class="que" > <li> <span class="anspn" >C.</span> 10 years </li> </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp1" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-2. </span>A father said to his son, "I was as old as you are at the present at the time of your birth". If the father's age is 38 years now, the son's age five years back was:</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> 14 years  </li></div>  `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 19 years </li> </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 40 years</li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp2" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        ];
}


let loss=()=>{          
    container.style.display = "none";
    container2.style.display = "flex"
    para.innerHTML = ` Hi,<b> ${text.value}</b> <p> you selected your Quiz topic is <strong>'<u>${lossbtn.value}</u>'</strong> </p> <p> Are you ready to give Quiz test. before going to start Quiz, Please read the below Instructions carefully. </p> <p><b> INSTRUCTION: </b> Read the Questions carefully and give you answer. you'll have <u>500 Seconds</u> to answer questions. <strong>Before going to next Question you have to give answer in Input box, and then Click on CHECK button to Secure your answer. and After Clicking CHECK button You can Click NEXT button for Next Question. Quiz will be auto Submitted, if Time will be over. </strong> </p> <p>Best OF Luck.</p> <p>Click on Below Button to Start.</p> `
    arr = [
        {
            "que": `<div class="que" > <span class="anspn" >Q-1. </span>Sagar purchased 30 kg of rice at the rate of ₹ 10 per kg and 35 kg at the rate of ₹ 11 per kg. He mixed the two. At what price per kg (in ₹) should he sell the mixture to make a 30% profit in the transaction ?</div>`,
            "option1": `<div class="que" > <li> <span class="anspn" >A.</span>  12.5 </li> </div>  `,
            "option2": `<div class="que" > <li> <span class="anspn" >B.</span>15  </li></div> `,
            "option3": `<div class="que" > <li> <span class="anspn" >C.</span>13.7 </li> </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp1" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-2. </span>By selling 25 metres of cloth a trader gains the selling price of 5 metres of cloth. The gain percent of the trader in % is</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> 25% </li></div>  `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 20% </li> </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 28%</li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp2" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        
    ];
}



lossbtn.addEventListener("click", loss);
agebtn.addEventListener("click", age);
probobtn.addEventListener("click", probo);
check.addEventListener("click", chec);
next.addEventListener("click", nxt);
previ.addEventListener("click", back);
submit.addEventListener("click", subm);
gTH.addEventListener("click", goToH);
startA.addEventListener("click", strtA);
