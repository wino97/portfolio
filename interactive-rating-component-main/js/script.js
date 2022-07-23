//  All data elements
let rating = document.querySelectorAll('[data-selected]');
let submit = document.querySelector('[data-submit]')
let sideRating = document.querySelector('[data-rating-side]');
let sideThankYou = document.querySelector('[data-thank-you-side]');
let rate = document.querySelector('[data-rating]');

//  Add onclick event listeners for every option
rating.forEach((e) =>{
    e.addEventListener('click', function() {
        if( (this.getAttribute('data-selected') === 'false') && (isVisible() !== true))
        {
            //  Set clicked option data to true and add active class
            this.setAttribute('data-selected', 'true');
            this.classList.add('active');
            //  Set value of selected option to submit
            rate.setAttribute('data-rating', this.getAttribute('data-rate'));
        }
        else if(this.getAttribute('data-selected') === 'true')
        {
            //  Set clicked option data to false and remove active class
            this.setAttribute('data-selected', 'false');
            this.classList.remove('active');
            //  Set value to submit to 0
            rate.setAttribute('data-rating', '0');
        }
        else
        {
            //  Remove all active classes from options and set value to submit to 0
            resetVisiblity();
            //  Set clicked option data to true and add active class
            this.setAttribute('data-selected', 'true');
            this.classList.add('active');
            //  Set value of selected option to submit
            rate.setAttribute('data-rating', this.getAttribute('data-rate'));
        }
    });
});

//  Check if there is selected option already
function isVisible(){
    for(let i=0; i < rating.length; i++){
        if(rating[i].getAttribute('data-selected') === 'true'){
            //  If true unselect all
            return true;
        }
    }
}

//  Remove all active classes from options and set value to submit to 0
function resetVisiblity(){
    rating.forEach((e) =>{
        e.setAttribute('data-selected', 'false');
        e.classList.remove('active');
        rate.setAttribute('data-rating', '0');
    });
}

//  Submit rating if any option is selected
submit.addEventListener('click', function(){
    if(rate.getAttribute('data-rating') !== '0')
    {
        //  Populate <span> with value
        rate.innerHTML = rate.getAttribute('data-rating');
        //  Change position of first side to absolute, opacity to 0
        //  and margin to 1.8rem to prevent breaking card
        sideRating.style.opacity="0";
        sideRating.style.position="absolute";
        sideRating.style.margin="1.8rem";
        //  Change position of second side to relative and opacity to 1
        sideThankYou.style.opacity="1";
        sideThankYou.style.position="relative";
    }
});