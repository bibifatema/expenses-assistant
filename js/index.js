//getting all the value


//calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',function(event){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('Internet').value);
    console.log({income,software,courses,internet});
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');
});

//saving button
const calculateSavingButton = document.getElementById('calculate-savings')
calculateSavingButton.addEventListener('click',function(){

    const savingPercent = parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('Internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercent * balance) / 100;

    const remainingBalance = balance - savingAmount;

    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);


});