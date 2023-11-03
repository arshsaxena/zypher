function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const answerContent = answer.querySelector('.answer-content');
    const faqItem = button.parentElement;

    if (faqItem.classList.contains('open')) {
        // If the FAQ item is open, close it
        answer.style.height = '0';
        answer.style.padding = '0';
        answerContent.style.overflow = 'hidden';
        faqItem.classList.remove('open');
    } else {
        // If the FAQ item is closed, open it
        answer.style.height = answerContent.scrollHeight + 'px';
        answer.style.padding = '10px';
        answerContent.style.overflow = 'visible';
        faqItem.classList.add('open');
    }
}
