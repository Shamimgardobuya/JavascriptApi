//find the exact element of the object required
//create enviroment for your  api
//create variable to hold source for api
//use fetch keyword to fetch data
//use then to convert the response to json object
//create a variable for the data
//loop through the data and console each one to its category
//using .appendChild connect the Dom elements
// let productMe=// const product= document.createDocumentFragment();
// document.getElementById('products')

// const ur'

fetch('http:localhost:5000/products')
 .then(response => {
        response.json()   //make the response a json object
 })
    .then(data => {
        console.log(data)    //get the data 
        // let productOne = data;
            //loop through the array and console .log each element link it to the inner html
            let prody= document.getElementById('products')   //find the exact element 

         for(let i=0;i<data.length;i++){
            let newOne=document.createElement('li')      //loop through the array objects ti display in a list 

            newOne.innerText=`${i.name}`           //override inner text/content
            prody.appendChild(newOne)

         }
       
      })
//

    .catch(function(error) {
        console.log(error);
      });


fetch('http://localhost:5000/products/vegetables')
 .then(response => {
        response.json()
 })
    .then(vegetable => {
        console.log(vegetable)
      
            let vegetablesDisplay= document.getElementById('vegList')

         for(let i=0;i<vegetable.length;i++){
            let vegOne=document.createElement('h3')

            vegOne.innerText=`${i.name}`
            vegetablesDisplay.appendChild(new_one)
         }
      })
    .catch(function(error) {
        console.log(error);
      });


fetch('http://localhost:5000/products/fruits')
 .then(response => {
        response.json()
 })
    .then(myFruits => {
        console.log(myFruits)
      
            let fruitDisplay= document.getElementById('fruList')

         for(let i=0;i<vegetable.length;i++){
            let fruOne=document.createElement('li')

            fruOne.innerText=`${i.name}`
            fruitsDisplay.appendChild(fruOne)
         }
      })
    .catch(function(error) {
        console.log(error);
      });





