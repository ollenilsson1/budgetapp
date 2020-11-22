let countTotal = [] ;
let countIncomeTotal = [] ;
let countExpenseTotal = [] ;

const incomeList = document.getElementById("income_list");
const expenseList = document.getElementById("expense_list");
const totalResult = document.getElementById("total_result");
const incomeTotal = document.getElementById("income_total");
const expenseTotal = document.getElementById("expense_total");

function budget (){
    const selector = document.getElementById("add_select").value;
    if (selector == "+") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        let num1 = Number(amount);
        countTotal.push(num1);
        //för att pusha till incometotal
        countIncomeTotal.push(num1);

        const incomeP = document.createElement("p");
        incomeP.setAttribute("class", "income-p")
        incomeP.innerHTML = text + "    " + amount + "  " + ":-";
        incomeList.appendChild(incomeP);
    }  
    else if (selector == "-") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        let num2 = Number(-amount);
        countTotal.push(num2);
        countExpenseTotal.push(num2);
        const expenseP = document.createElement("p");
        expenseP.setAttribute("class" , "expense-p")
        expenseP.innerHTML = text + "    " + amount + "  " + ":-";
        expenseList.appendChild(expenseP);
    }
    //for loop för att visa budgetens total
    let total = 0;
    for (i = 0; i<countTotal.length; i++)
    total += countTotal[i];
    totalResult.innerText = total;
    if (total < 0)
        totalResult.style.color = "firebrick" ;
    else {
        totalResult.style.color = "whitesmoke" ;
    }
    

    //for loop för att visa totalen av alla inkomster
    let totalIncome = 0;
    for (i = 0; i<countIncomeTotal.length; i++)
    totalIncome += countIncomeTotal[i];
    incomeTotal.innerText = "Totala inkomster" + "  :  " + totalIncome + "  " + "sek";

    //for loop för att visa totalen av alla utgifter
    let totalExpense = 0;
    for (i = 0; i<countExpenseTotal.length; i++)
    totalExpense += countExpenseTotal[i];
    expenseTotal.innerText = "Totala utgifter" + "  :  " + totalExpense + "  " + "sek";



}

// submit knapp som startar budget function.

const addBtn = document.getElementById("submit");
addBtn.addEventListener("click" , budget);

//remove function och delete knapp som rensar alla div och nollställer array.
function remove () {
    expenseList.innerHTML = "";
    incomeList.innerHTML = "";
    totalResult.innerText = "";
    incomeTotal.innerText = "Totala inkomster" + "  :  "
    expenseTotal.innerText = "Totala utgifter" + "  :  " 
    document.getElementById("add_text").value = "";
    document.getElementById("add_amount").value = "";
    countTotal.length = 0;
    countIncomeTotal.length = 0;
    countExpenseTotal.length = 0;
}


const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", remove);

