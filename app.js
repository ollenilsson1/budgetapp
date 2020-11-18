let countTotal = [] ;

const incomeList = document.getElementById("income_list");
const expenseList = document.getElementById("expense_list");

function budget (){
    const selector = document.getElementById("add_select").value;
    if (selector == "+") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        const incomeP = document.createElement("p");
        incomeP.setAttribute("class", "income-p")
        incomeP.innerHTML = text + "    " + amount;
        incomeList.appendChild(incomeP);

    }  
    else if (selector == "-") {
        const text = document.getElementById("add_text").value;
        const amount = document.getElementById("add_amount").value;
        const expenseP = document.createElement("p");
        expenseP.setAttribute("class" , "expense-p")
        expenseP.innerHTML = text + "    " + amount;
        expenseList.appendChild(expenseP);




    }
 

}

const addBtn = document.getElementById("submit");
addBtn.addEventListener("click" , budget);

function remove () {
    expenseList.innerHTML = "";
    incomeList.innerHTML = "";
}


const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", remove);
