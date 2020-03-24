/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

//Global variable(s)

//Selects all studentItems and returns an array.
const studentItems = document.querySelectorAll('li.student-item');
//a const used to create groups of 10 students or less.
const numOfBtnLinks = Math.ceil(studentItems.length/10);
//console.log (numOfBtnLinks);
const div = document.querySelector('div.page');
const mainBody = document.querySelector('body');


//function to controll how many students are listed at the opening of the page.

function showPage(text){
  for (let i = 0; i < studentItems.length; i += 1) {
    let li = studentItems[i];
      if (i <= 9){
      li.style.display = li;
     }else {
      li.style.display = 'none';
      }
    }
}
showPage(studentItems);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/


function appendPageLinks (){
  const divpagination = document.createElement("div");
  divpagination.className = 'pagination';
  mainBody.appendChild(divpagination);
  const ul = document.createElement("ul");
  divpagination.appendChild(ul);

  for (let i = 1; i <= numOfBtnLinks ; i++){
    const li = document.createElement("li");
    li.className = 'pagination';
    const anchor = document.createElement("a");
    anchor.className = 'pagination';
    anchor.textContent = [i];
    ul.appendChild(li);
    li.appendChild(anchor);
}
}
appendPageLinks ();

//Dynamic pagination buttons allowing users to see the next group of students
anchorDiv.addEventListener('click', (e) => {
  const anchorElement = e.target.textContent;

alert(anchorElement);
//   for (let i = 0; i < studentItems.length; i += 1) {
//     let li = studentItems[i];
//       if (i <= anchorElement){
//       li.style.display = li;
//      }else {
//       li.style.display = 'none';
//       }
//     }
});
// // Remember to delete the comments that came with this file, and replace them with your own code comments.
