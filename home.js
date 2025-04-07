// js maybe some react or angular where it can be applied(the faq section). replace 
// find something thick and heavy for the fonts 
// mobile version
// api for reviews
// Serach engine optimization

//


//finish the faq section
//make the card flippers work and look nice
//correct spacing between sections
//do a nice animation for links 
// google analytics 
//find good font(thick and heavy)
// SEO

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});