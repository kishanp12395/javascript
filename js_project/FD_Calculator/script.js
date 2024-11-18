function calculateMaturityAmount(){


    //get the input values from thr form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perform calculation

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    //display result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}

// attach the event listner to the calculate button

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);