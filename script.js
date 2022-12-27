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
        {
            "que": `<div class="que" > <span class="anspn" >Q-3. </span> A Tank is already filled up to X% of its capacity. An Inlet pipe can fill Full Tank in 30 minutes and 
            an Outlet pipe can empty Full Tank in 20 Minutes. Now both pipes are opened then the Tank is 
            emptied in 24 Minutes. Then initially up to what % of its capacity is Tank filled?
            </div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>  50%  </li> </div>   `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 48%   </li></div>  `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 40% </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp3" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-4. </span> Two Inlet Pipes A and B together can fill a Tank in ‘X’ minutes. If A and B take 81 minutes and 49 
            minutes more than ‘X’ minutes respectively, to fill the Tank. Then They can fill the 5/7 of that Tank in 
            how many minutes?</div>`,
            "option1": `  <div class="que" > <li> <span class="anspn" >A.</span> 45 Minutes  </li> </div>    `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 49 Minutes </li>  </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 63 Minutes </li>  </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp4" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-5. </span> Pipe A can fill a Tank in 18 Hours, Pipe B can empty a Tank in 12 Hours, Pipe C can fill Tank in 6 
            Hours. The Tank is already filled up to 1/6 of its capacity. Now Pipe A is opened in the First Hour 
            alone, Pipe B is opened in the Second Hour alone and Pipe C is opened in the Third Hour alone. This 
            cycle is repeated until the Tank gets filled. Then in How many Hours does the rest of Tank gets filled?</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>  15 Hours</li>  </div>   `,
            "option2": ` <div class="que" > <li ><span class="anspn" >B.</span>  18 Hours </li> </div>  `,
            "option3": ` <div class="que" > <li ><span class="anspn" >C.</span> 20 Hours </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp5" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-6. </span> If the ratio of Rate of filling of two Pipes A and B is 3:2. If together they can fill a Tank 5/6th of 
            Tank in 20 minutes. Then in how many does A alone can fill the Tank?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 20 Minutes </li> </div>    `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span> 30 Minutes </li> </div>  `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 40 Minutes </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp6" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-7. </span> Pipe A, B and can fill a Full Tank in 24,36 and 48 Minutes respectively. All three Pipes are Opened 
            simultaneously in a Tank which is already filled up to 1/6 of its capacity. A and B are opened for only 
            First 6 Minutes and closed thereafter.Then C alone filled remaining Tank. Then in total how many 
            Minutes does C filled the Tank?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span>  16 Minutes </li>   </div> `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span> 20 Minutes </li> </div> `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span>  12 Minutes </li>  </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp7" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-8. </span> Pipe A and B can fill a Tank alone in 12 Hours and 6 Hours respectively. Another Pipe C can empty 
            the same Tank alone in 9 Hours. In an empty Tank for the First hour, Pipe A is opened alone, Second 
            Hour pipe B is opened alone, Third Hour pipe C is opened alone. This process is continued until the 
            Tank is filled. Then Pipe A is opened for How many Hours?</div>`,
            "option1": `<div class="que" ><li > <span class="anspn" >A.</span> 7 Hours 20 Min </li>  </div>  `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 7 Hours </li> </div> `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span>  None </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp8" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-9. </span> A Cistern is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty it in 6 minutes. 
            If both the pipes are open,how long will it take to empty or fill the tank completely?
            </div>`,
            "option1": `<div class="que" ><li ><span class="anspn" >A.</span> 4 minutes </li> </div>   `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 8 minutes </li></div>  `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span>  6 minutes  </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp9" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-10. </span> If a pipe A can fill a tank 3 times faster than pipe B. If both the pipes can fill the tank in 32 minutes, 
            then the slower pipe alone will be able to fill the tank in?
            </div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span>128 minutes </li> </div>   `,
            "option2": `<div class="que" > <li  ><span class="anspn" >B.</span>124 minutes </li></div>  `,
            "option3": `<div class="que" > <li  ><span class="anspn" >C.</span> 154 minutes </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp10" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        }
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
        {
            "que": `<div class="que" > <span class="anspn" >Q-3. </span> Two cards are drawn at random from a pack of 52 cards.what is the probability that either both are black or both are queen?</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>  52/221 </li> </div>   `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 55/221 </li></div>  `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 19/221 </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp3" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-4. </span> A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is</div>`,
            "option1": `  <div class="que" > <li> <span class="anspn" >A.</span>  3/22 </li> </div>    `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span>  2/91</li>  </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span>  1/22 </li>  </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp4" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-5. </span> A bag contains 6 white and 4 black balls .2 balls are drawn at random. Find the probability that they are of same colour.</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> 7/15 </li>  </div>   `,
            "option2": ` <div class="que" > <li ><span class="anspn" >B.</span> 8/15 </li> </div>  `,
            "option3": ` <div class="que" > <li ><span class="anspn" >C.</span> 1/9 </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp5" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-6. </span> In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 1/5 </li> </div>    `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span>  2/7 </li> </div>  `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 5/7 </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp6" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-7. </span> Two dice are tossed. The probability that the total score is a prime number is:</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 7/9</li>   </div> `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span> 1/6 </li> </div> `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 5/12 </li>  </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp7" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-8. </span> In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?</div>`,
            "option1": `<div class="que" ><li > <span class="anspn" >A.</span>  1/3 </li>  </div>  `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 8/21 </li> </div> `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span>  7/21 </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp8" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-9. </span> From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?</div>`,
            "option1": `<div class="que" ><li ><span class="anspn" >A.</span>  1/221 </li> </div>   `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 35/256 </li></div>  `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span> None </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp9" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-10. </span> Two cards are drawn together from a pack of 52 cards. The probability that one is a spade and one is a heart, is:</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 29/34 </li> </div>   `,
            "option2": `<div class="que" > <li  ><span class="anspn" >B.</span> 47/100</li></div>  `,
            "option3": `<div class="que" > <li  ><span class="anspn" >C.</span> 13/102 </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp10" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        }
        
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
        {
            "que": `<div class="que" > <span class="anspn" >Q-3. </span> A father said to his son, "I was as old as you are at the present at the time of your birth". If the father's age is 38 years now, the son's age five years back was</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>  19 years </li> </div>   `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 14 years </li></div>  `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 33 years  </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp3" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-4. </span>  A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?</div>`,
            "option1": `  <div class="que" > <li> <span class="anspn" >A.</span>  10 years </li> </div>    `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 9 years</li>  </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span>  20 years </li>  </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp4" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-5. </span> Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> 24 years </li>  </div>   `,
            "option2": ` <div class="que" > <li ><span class="anspn" >B.</span> 27 years </li> </div>  `,
            "option3": ` <div class="que" > <li ><span class="anspn" >C.</span> 35 years</li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp5" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-6. </span> A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 20 years </li> </div>    `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span>  22 years </li> </div>  `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 18 years </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp6" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-7. </span> Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 20 years</li>   </div> `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span> 18 years </li> </div> `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 16 years </li>  </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp7" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-8. </span> The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be</div>`,
            "option1": `<div class="que" ><li > <span class="anspn" >A.</span>  14 years </li>  </div>  `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 20 years </li> </div> `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span>  12 years </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp8" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-9. </span> At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?</div>`,
            "option1": `<div class="que" ><li ><span class="anspn" >A.</span>  15 years </li> </div>   `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 19 and half </li></div>  `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span> None </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp9" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-10. </span> Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 24.5 years </li> </div>   `,
            "option2": `<div class="que" > <li  ><span class="anspn" >B.</span> 28 years</li></div>  `,
            "option3": `<div class="que" > <li  ><span class="anspn" >C.</span> 18 years </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp10" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        }
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
        {
            "que": `<div class="que" > <span class="anspn" >Q-3. </span> A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span>  5 </li> </div>   `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span> 4 </li></div>  `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span> 6 </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp3" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-4. </span> A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?</div>`,
            "option1": `  <div class="que" > <li> <span class="anspn" >A.</span>  Rs. 88 </li> </div>    `,
            "option2": ` <div class="que" > <li > <span class="anspn" >B.</span>  Rs. 72</li>  </div> `,
            "option3": ` <div class="que" > <li > <span class="anspn" >C.</span>  Rs. 88.25</li>  </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp4" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `B`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-5. </span> A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?</div>`,
            "option1": ` <div class="que" > <li> <span class="anspn" >A.</span> Rs. 1190 </li>  </div>   `,
            "option2": ` <div class="que" > <li ><span class="anspn" >B.</span> Rs. 1090 </li> </div>  `,
            "option3": ` <div class="que" > <li ><span class="anspn" >C.</span> Rs. 1160 </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp5" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-6. </span> Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 1% </li> </div>    `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span>  33.5% </li> </div>  `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> 44% </li> </div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp6" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-7. </span> On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> Rs. 45 </li>   </div> `,
            "option2": ` <div class="que" ><li  ><span class="anspn" >B.</span> Rs. 75</li> </div> `,
            "option3": ` <div class="que" ><li  ><span class="anspn" >C.</span> Rs. 60 </li>  </div> `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp7" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-8. </span> When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?</div>`,
            "option1": `<div class="que" ><li > <span class="anspn" >A.</span>  Rs. 25,300 </li>  </div>  `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> Rs. 22,500 </li> </div> `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span>  Rs. 21,000 </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp8" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-9. </span> A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is</div>`,
            "option1": `<div class="que" ><li ><span class="anspn" >A.</span>  5% </li> </div>   `,
            "option2": `<div class="que" ><li  ><span class="anspn" >B.</span> 10% </li></div>  `,
            "option3": `<div class="que" ><li  ><span class="anspn" >C.</span> 8% </li> </div>  `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp9" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `A`
        },
        {
            "que": `<div class="que" > <span class="anspn" >Q-10. </span> If selling price is doubled, the profit triples. Find the profit percent ?</div>`,
            "option1": `<div class="que" > <li ><span class="anspn" >A.</span> 200% </li> </div>   `,
            "option2": `<div class="que" > <li  ><span class="anspn" >B.</span> 400% </li></div>  `,
            "option3": `<div class="que" > <li  ><span class="anspn" >C.</span> 100% </li></div>   `,
            "input": `<p class="pr" > <input type="text" class="inp" id="inp10" placeholder="OPTION HERE.." autocomplete="off" > </p>`,
            "ans": `C`
        }
        
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
