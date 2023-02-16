function getPin(){
    const value = Math.round(Math.random()*10000);
    const StringValue = value+'';
    return StringValue;
}
function generatePin(){
    const pinValue = getPin();
    if(pinValue.length==4)
    return pinValue;
    else
    return getPin();
}

document.getElementById('generate-btn').addEventListener('click',function(){
  const getpin = generatePin();
  const valueDisplay = document.getElementById('display-number');
  valueDisplay.value = getpin;
})

document.getElementById('calculator-body').addEventListener('click',function(e){
    const targetValueString = e.target.innerText;
    const typedValue =   document.getElementById('typed-number');
    // const targetValue = parseInt(targetValueString);
    if(isNaN(targetValueString)) {
        if(targetValueString=='C')
        typedValue.value='';
        else if(targetValueString=='<'){
            let StringValue = typedValue.value;
          let  ar = StringValue.split('');
            
            ar.pop();
            const finalValue = ar.join("");
            //console.log(finalValue);
            typedValue.value = finalValue;
        }
   }
   else{
         
         const previousValue = typedValue.value;
         const currentValue = previousValue + targetValueString;
        typedValue.value = currentValue;
   }
})

document.getElementById('submit-btn').addEventListener('click',function(){
    const generateNum = document.getElementById('display-number').value;
    const userNum = document.getElementById('typed-number').value;
    const match = document.getElementById('match');
    const doesntmatch = document.getElementById('doesntmatch');
    if(generateNum!=userNum){
        doesntmatch.style.display='block';
        match.style.display='none'; 
       // console.log('hello');
    }
   
    else{
        match.style.display='block';
        doesntmatch.style.display='none';
    }
   
    
})