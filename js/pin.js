document.getElementById('genarate-pin-btn').addEventListener('click',function(){
    let genratedPin = document.getElementById('genrated-pin');
    const randomPin = Math.round(Math.random()*10000);
    const randomPinStrLen = (randomPin.toString()).length;
    if(randomPinStrLen !== 4){
        return;
    }
    else{
        genratedPin.value = randomPin;
    }
})

document.getElementById('calculator').addEventListener('click',function(event){
    const pressedKey = event.target.innerText;
    const calculatorInput = document.getElementById('calculator-input');
    const oldCalculatorInput = calculatorInput.value;
    const newPressedKey = oldCalculatorInput + pressedKey
    if(isNaN(pressedKey)){
        if(pressedKey === 'C'){
        const calculatorInput = document.getElementById('calculator-input');
        calculatorInput.value = '';
        }
        if(pressedKey =='#'){
        const digits = oldCalculatorInput.split('');
        //    console.log(digits);
        digits.pop();
        const d = digits.join('')
        // console.log(d)
        calculatorInput.value = d;
        }
    }
    else{
        calculatorInput.value = newPressedKey;
    }
})


    const failureMessage = document.getElementById('failed');
    failureMessage.style.display = 'none'

    const succededMessage = document.getElementById('succeded');
    succededMessage.style.display = 'none'

document.getElementById('btn-submit').addEventListener('click',function(){
    let genratedPin = document.getElementById('genrated-pin');
    const genratedPinValue = genratedPin.value;
    // console.log(genratedPinValue);
    const calculatorInput = document.getElementById('calculator-input');
    const calculatorInputValue = calculatorInput.value;
    // console.log(calculatorInputValue);

    if(genratedPinValue==calculatorInputValue){
    succededMessage.style.display = 'block';
    failureMessage.style.display = 'none'
    }
    else{
    failureMessage.style.display = 'block';
    succededMessage.style.display = 'none';
    }
    document.getElementById('genrated-pin').value = '';
    document.getElementById('calculator-input').value = '';
})