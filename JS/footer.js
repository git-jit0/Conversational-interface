function selectLink(element) {
   
    document.querySelectorAll('.nav__link').forEach(link => 
    {
        link.classList.remove('selected');
    });

    
    element.classList.add('selected');
}

