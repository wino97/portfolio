let accordion = document.querySelectorAll('[data-accordion] li');

accordion.forEach((e) =>{
    e.addEventListener("click", function() {
        if( (!this.classList.contains('active') ) && ( isVisible() == true) ) {
            resetVisiblity();
            this.classList.toggle('active');
        }
        else{
            this.classList.toggle('active');
        }
    });
});

function isVisible(){
    for(let i=0; i < accordion.length; i++){
        if(accordion[i].classList.contains('active')){
            return true;
        }
    }
}

function resetVisiblity(){
    accordion.forEach((e) =>{
        e.classList.remove('active');
        // e.style.maxHeight='55px';
    });
}