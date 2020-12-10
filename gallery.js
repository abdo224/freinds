const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const img = document.querySelectorAll('.img-gal');
let index = 0;

prevButton.addEventListener('click', function(){
    img[index].classList.remove("active");
    index--;
    img[index].classList.add("active");
    nextButton.disabled = false;
    if(index == 0){
        prevButton.disabled = true;
    }

})
nextButton.addEventListener('click' , function(){
    img[index].classList.remove("active");
    index++;
    img[index].classList.add("active");
    if(index !== 0){
        prevButton.disabled = false;
    }
    if(index === img.length - 1){
      
        nextButton.disabled = true;
       
    }
    

})