
// Event listener with a Toggle

// const text = document.querySelector('.title');
// const changeColor = document.querySelector('.changeColor');


// text.classList.add('change');
// changeColor.addEventListener('click', function(){
//     text.classList.toggle('change');   
// });


//-----------------------------------------------------------


const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

//for loop to change ul li colors on click
// for (user of userList){
//     user.addEventListener('click', function(){
//         this.style.color = "green";
//     });
// }

addListBtn.addEventListener('click',function(){
    //create an li out of thin air
const newLi = document.createElement('LI');
const liContent = document.createTextNode(listInput.value);

    //add input value of the new li
newLi.appendChild(liContent);

    // attach li to user list
userList.appendChild(newLi);

});