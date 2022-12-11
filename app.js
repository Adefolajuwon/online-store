//const btns = document.querySelectorAll(".btns")
const btn2 = document.querySelector(".btn2")
const counter = document.querySelector(".counter")
const btn = document.querySelector(".btn")
//const cart = document.querySelector('.add-to-cart')
const  shoppingCartContent = document.querySelector('#cart-content tbody')
const courses = document.querySelector('.courses-list')


courses.addEventListener('click', buyCourse);
//cart.addEventListener('click', addIntoCart)
//shoppingCartContent.addEventListener('click', removeCourse);

//console.log(btns)
let count = 0
//btns.forEach((btns => {
    btn2.addEventListener('click', () => {
        //const styles = e.currentTarget.classList
            count++
            //console.log("win")
        
        counter.textContent = count
    } )
//}))
//btn2.addEventListener('click', win)
//function win(){
    //console.log("winnn")
//}
btn.addEventListener('click', () => {
    //const styles = e.currentTarget.classList
        //count--
        if(counter.textContent > 0){
            count --
        }
        //console.log("win")
    
    counter.textContent = count
} )
function buyCourse(e) {
    e.preventDefault();
    // Use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
         // read the course values+

        const course = e.target.parentElement.parentElement.parentElement;
//console.log(e.target.parentElement.parentElement.parentElement)
         // read the values
         getCourseInfo(course);
    }
}
function getCourseInfo(course) {
    // Create an Object with Course Data
    const courseInfo = {
        image: course.querySelector('img').src,
         title: course.querySelector('.text').textContent,
         price: course.querySelector('.price').textContent,
         id: course.querySelector('a')
    }
    // Insert into the shopping cart
    addIntoCart(courseInfo);
} 

function addIntoCart(course) {
    // create a <tr>
    const row = document.createElement('tr');

    // Build the template
    row.innerHTML = `
         <tr>
              <td>
                   <img src="${course.image}" width=100>
              </td>
              <td>${course.title}</td>
              <td>${course.price}</td>
              <td>
                   <a href="#" class="remove" data-id="${course.id}">X</a>
              </td>
         </tr>
    `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);
   // console.log(    shoppingCartContent.appendChild(row))
    // Add course into Storage
    //saveIntoStorage(course);
}