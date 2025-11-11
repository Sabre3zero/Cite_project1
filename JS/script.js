function change(element){
    const tmp = element.textContent;    

    const update = prompt('Enter new text:')

    if (update == "") {
        if(confirm('Are you sure you whant to clear the text?')){
            element.textContent = update;
            }
        else{
            element.textContent = tmp;
        }
    }
    else if (!update){
        element.textContent = tmp;
    }
    else {
        element.textContent = update;
    }
}


const editableElements = document.querySelectorAll('.changable')

editableElements.forEach(function(element){
    element.addEventListener('click', function(event){   
        change(element);
    });
});
