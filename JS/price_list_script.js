// let SQL;

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


// async function testDB() {
//     try {
//         const SQL = await initSQLite();

//         const response = await fetch('C:\Users\bcham\Desktop\tea cite\Cite_project1\DB\TeaPopic.db');
//         const arrayBuffer = await response.arrayBuffer();
//         const db = new SQL.Database(new Uint8Array(arrayBuffer));

//         const result = db.exec('SELECT * FROM Price_list');
//         console.log(result);
//     } catch(err){
//         console.log('error', err)
//     }
// }


// testDB();

const editableElements = document.querySelectorAll('.changable')

editableElements.forEach(function(element){
    element.addEventListener('click', function(event){   
        change(element);
    });
});
