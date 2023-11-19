let amountValue = document.getElementById("amount");
let descriptionValue = document.getElementById("description");
let categoryValue = document.getElementById("category")
let expenseList = document.getElementById("expense-list");
let details = document.getElementById("expense")
details.addEventListener('submit',myFunction);

function myFunction(e){
    e.preventDefault();

    let myObj = {
        amount:amount.value,
        description:description.value,
        category:category.value
    }

    let myObj_serial = JSON.stringify(myObj);
    localStorage.setItem(description.value,myObj_serial)
    
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${amount.value}-${description.value}-${category.value}`))
    amount.value="";
    description.value="";

    //Edit Button
    let editBtn = document.createElement('button');
    editBtn.className='editbtn';
    editBtn.id='edit';
    editBtn.textContent='Edit Expense'

    //Delete Button
    let deleteBtn = document.createElement('button');
    deleteBtn.className="deletebtn"
    deleteBtn.id='delete'
    deleteBtn.textContent='Delete Expense'

    li.appendChild(editBtn)
    li.appendChild(deleteBtn);
    expenseList.appendChild(li)




}
expenseList.addEventListener('click',deleteItem)
expenseList.addEventListener('click',editItem)

function deleteItem(e){
    if(e.target.classList.contains('deletebtn')){
        let item = e.target.parentElement;
        expenseList.removeChild(item);

        let str = e.target.parentElement.firstChild.textContent.split('-');
        localStorage.removeItem(str[1]);

    }

}

function editItem(e){
    if(e.target.classList.contains('editbtn')){
        let item = e.target.parentElement;
        expenseList.removeChild(item);
        let str = e.target.parentElement.firstChild.textContent.split('-');
        localStorage.removeItem(str[1]);

        amount.value=str[0];
        description.value=str[1];


    }
}