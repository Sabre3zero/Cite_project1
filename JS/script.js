import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


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

function testDB(){
    const db = open({
        filename: 'DB\TeaPopic.db',
        driver: sqlite3.Database
    });

    alert(db.exec('SELECT * FROM Price_list'))
}


const editableElements = document.querySelectorAll('.changable')

editableElements.forEach(function(element){
    element.addEventListener('click', function(event){   
        change(element);
    });
});


const testButton = document.querySelectorAll('.test_button')

testButton.forEach(function(element){
    element.addEventListener('click', function(event){
        testDB();
    });
});
