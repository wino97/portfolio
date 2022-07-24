let questions = document.querySelectorAll('[data-answer-visible]');

questions.forEach((e) =>{
    e.addEventListener("click", function() {
        if( (this.getAttribute('data-answer-visible') === 'false') && (isVisible() !== true))
        {
            this.setAttribute('data-answer-visible', 'true');
            this.classList.add('active');
            this.style.maxHeight='100px';
        }
        else if(this.getAttribute('data-answer-visible') === 'true')
        {
            this.setAttribute('data-answer-visible', 'false');
            this.classList.remove('active');
            this.style.maxHeight='55px';
        }
        else
        {
            resetVisiblity();
            this.setAttribute('data-answer-visible', 'true');
            this.classList.add('active');
            this.style.maxHeight='100px';
        }
    });
});

function isVisible(){
    for(let i=0; i < questions.length; i++){
        if(questions[i].getAttribute('data-answer-visible') === 'true'){
            return true;
        }
    }
}

function resetVisiblity(){
    questions.forEach((e) =>{
        e.setAttribute('data-answer-visible', 'false');
        e.classList.remove('active');
        e.style.maxHeight='55px';
    });
}