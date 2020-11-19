let countTotal = [] ;

const incomeList = document.getElementById("income_list");
const expenseList = document.getElementById("expense_list");
const totalResult = document.getElementById("total_result");

function budget (){
    const selector = document.getElementById("add_select").value;
    if (selector == "+") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        let num1 = Number(amount);
        countTotal.push(num1);

        const incomeP = document.createElement("p");
        incomeP.setAttribute("class", "income-p")
        incomeP.innerHTML = text + "    " + amount;
        incomeList.appendChild(incomeP);
        console.log(countTotal);
    }  
    else if (selector == "-") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        let num2 = Number(-amount);
        countTotal.push(num2);
        const expenseP = document.createElement("p");
        expenseP.setAttribute("class" , "expense-p")
        expenseP.innerHTML = text + "    " + amount;
        expenseList.appendChild(expenseP);
        console.log(countTotal);
    }
    let total = 0;
    for (i = 0; i<countTotal.length; i++)
    total += countTotal[i];
    totalResult.innerText = total;
    console.log(total);

    
}

// submit knapp som startar budget function.

const addBtn = document.getElementById("submit");
addBtn.addEventListener("click" , budget);

//remove function och delete knapp som rensar alla div och nollställer array.
//FIXA INPUT FÄLTEN OCKSÅ
function remove () {
    expenseList.innerHTML = "";
    incomeList.innerHTML = "";
    totalResult.innerText = "";
    document.getElementById("add_text").value = "";
    document.getElementById("add_amount").value = "";
    countTotal.length = 0;
}


const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", remove);

