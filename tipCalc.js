let prompter = document.getElementById('prompter');
let prompted = document.getElementById('prompted');
let perPersonTotal = document.getElementById('perPersonTotal');
const get = document.getElementById('counter');

let number = Number(get.innerText)

let convertBill = () => {
    let prompterValue = Number(prompter.value);
    let promptedValue = Number(prompted.value) / 100;
    let tipAmount = prompterValue * promptedValue;
    let total = tipAmount + prompterValue;
    const perPerson = total / number;
    perPersonTotal.innerText = `$${perPerson.toFixed(2)/* .toLocaleString('en-US') for commas*/}`;
}


const increasePeople = () => {
    number += 1;
    get.innerText = number;

    console.log(number)
    
    convertBill ();
}

const decreasePeople = () => {
    if (number <= 1)
    {
        throw "Can't be less than 1";
    }
    
        number -= 1;
        get.innerText -= number;
        console.log(number)

     convertBill ();
}

