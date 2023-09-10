let counter=document.getElementById('count1');
let counter2=document.getElementById('count2');
let counter3=document.getElementById('count3');

// Array.from('counter');

   for(let countNum=0;countNum<=4000;countNum++){
        setTimeout((fun)=>{
            counter.innerHTML=countNum
        },1);
    }   
        for(let countNum=0;countNum<=15000;countNum++){
             setTimeout((fun2)=>{
     counter2.innerHTML=countNum
             },1);
         }
    
    for(let countNum=0;countNum<=500;countNum++){
         setTimeout((fun3)=>{
    counter3.innerHTML=countNum
         },10);
     }



