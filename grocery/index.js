const form = document.querySelector("#form")
const grocery = document.getElementById("grocery")
const groceryName = document.getElementById("name")
const bar = document.getElementById("bar")
const groceryList = document.querySelector(".grocery-list")
const array = []

bar.style.display = "none"

form.addEventListener("submit", function(e){
   e.preventDefault()
   const value = grocery.value
   if(value === ""){
    grocery.style.borderColor = "red"
    grocery.placeholder = "type here ..."

   }else{
    const obj = {id:array.length , item:value}
    array.push(obj)
   }
   
    const item = array.map( prevValue => {
    return(
        `
    <ul id="bar">
            <li id="name">${prevValue.item}</li>
            <div class="markers">
                <li class="trash" onclick="deleteItem(${prevValue.id})"><i class="fa-solid fa-trash"></i></li>
                <li class="edit" onclick="editItem(${prevValue.id})"><i class="fa-solid fa-pen-to-square"></i></li>
            </div>
    </ul>
        `
    )
   })
   groceryList.innerHTML = item.join("")
   grocery.value = ""

   

})
// for delete an element from an array
function deleteItem(id){
const remove = array.splice(id , 1)
const item = array.map( item => {
    return (
        `
        <ul id="bar">
                <li id="name">${item.item}</li>
                <div class="markers">
                    <li class="trash" onclick="deleteItem(${item.id})"><i class="fa-solid fa-trash"></i></li>
                    <li class="edit" onclick="editItem(${item.id})"><i class="fa-solid fa-pen-to-square"></i></li>
                </div>
        </ul>
            `
    )
})

groceryList.innerHTML = item.join("")
}

// for editing an element from an array

function editItem(id){
    grocery.value = array[id].item
    array.splice( id , 1)
}




