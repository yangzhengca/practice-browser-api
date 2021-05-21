// Exercise 42
// Create the following folder/file structure:
// /ex_42
//   |--img
//   |  |-- batman.png
//   |  |-- batmanwb.png
//   |  |-- flash.png
//   |  |-- flashwb.png
//   |  |-- superman.png
//   |  |-- supermanwb.png
//   |  |-- wonder_woman.png
//   |  |-- wonder_womanwb.png
//   |
//   |-- index.html
//   |-- style.css
//   |-- script.js
// Download the following superheroes images and add the to the img folder
// index.html
// Create a basic HTML document
// Link the css styles.css file
// Link the js script.js file
// styles.css
// Select the body element and add the following properties:
// Background color: #eee
// Select all the img elements and add the following properties:
// Border: 1px solid black
// Left, right & Bottom margin: 20px
// Cursor must be pointer
// Border radius: 10px
// Select the hover pseudoclass for images and add the following properties:
// Box shadow: 2px 2px 16px 1px rgba(0,0,0,0.75)
// script.js
// Define a images array and add all the images names (only if wb is part of the name) and extension
// Create a img element for each image in the images array
// Set the image src attribute with the image name (example: batmanwb.png)
// We'll show the black and white pictures When the document gets rendered
// Replace the black and white picture for the color one when the user rolls over the image element (like it's active)
// Replace the color image for the black and white one when the user rolls out of the image element (like it's inactive again)
// Show an alert with the superhero name in upper case when the user clicks on an image using
// Append all the created image elements to the body element
// Tip:
// The images has almost the same name for black and white and color
// You can use the picture name to show the superheroe name



window.onload=()=>{
    const imgArray=['batmanwb.png','flashwb.png','supermanwb.png','wonder_womanwb.png'];
    //create img array with wb picture names
    
    for(let i=0;i<imgArray.length;i++){
        var img=document.createElement('img');
        img.textContent=imgArray[i];
        img.src=`./img/${imgArray[i]}`;
        document.body.appendChild(img);
    };    
    //create imgs on web page
    
    const imgElement=document.querySelectorAll('img');
    //select img elements
    
    for(let j=0;j<imgElement.length;j++){
        imgElement[j].addEventListener('mouseover',function(){        
            imgElement[j].src=imgElement[j].src.replace('wb','');
        });
        imgElement[j].addEventListener('mouseout',function(){        
            imgElement[j].src=`./img/${imgArray[j]}`;
        });
        imgElement[j].addEventListener('click',function(){
            window.alert(`${imgArray[j].slice(0,imgArray[j].length-6)}`);
        });
    }
    //add event listener to each img element
}

