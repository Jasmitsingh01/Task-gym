let counter=0;

const slides= document.querySelectorAll('.slide')



slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
})
const SetSlides=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    
    })
}

const buttonPrve=document.getElementById('prveslide');
const nextButton=document.getElementById('nextslide');

nextButton.addEventListener('click',()=>{
    
    
    if(counter<slides.length -1){
        counter++;
        SetSlides();
    }
})

buttonPrve.addEventListener('click',()=>{
  
    if(counter>0){
        counter--;
        SetSlides();
    }
    

})

