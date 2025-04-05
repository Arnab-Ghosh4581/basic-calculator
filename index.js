//console.log(`My name is arnab ghosh`);


let button=document.querySelectorAll(".button");
let input=document.querySelector("#input-box");

button.forEach(but=>{
    but.addEventListener("click", e=>{
           if(e.target.id==='ac'){
            input.value=''
           } 
           if(e.target.id==='del'){
            input.value=input.value.slice(0,-1);
           } 
           if(e.target.id==='%'){
            input.value+='%'
           } 
           if(e.target.id==='/'){
            input.value+='/'
           } 
           if(e.target.id==='7'){
            input.value+='7'
           } 
           if(e.target.id==='8'){
            input.value+='8'
           } 
           if(e.target.id==='9'){
            input.value+='9'
           } 
           if(e.target.id==='x'){
            input.value+='*'
           } 
           if(e.target.id==='4'){
            input.value+='4'
           } 
           if(e.target.id==='5'){
            input.value+='5'
           } 
           if(e.target.id==='6'){
            input.value+='6'
           } 
           if(e.target.id==='-'){
            input.value+='-'
           } 
           if(e.target.id==='1'){
            input.value+='1'
           } 
           if(e.target.id==='2'){
            input.value+='2'
           } 
           if(e.target.id==='3'){
            input.value+='3'
           } 
           if(e.target.id==='+'){
            input.value+='+'
           } 
           if(e.target.id==='0'){
            input.value+='0'
           } 
           if(e.target.id==='.'){
            input.value+='.'
           } 
           if(e.target.id==='='){
            try {
                let x=eval(input.value);
                input.value=`${x}`
            } catch (error) {
                input.value='Enter a valid expressino...'
            }
           
}})
})

// button.addEventListener("click", e=>{
//    let text=e.target.id;
//    input.appendChild(text)
// })