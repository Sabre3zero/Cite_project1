show_menu = true;
theme_num = 1;
document.getElementById('menu_wrapper').style.visibility="hidden";
const links = document.querySelectorAll('a');
const horlines = document.querySelectorAll('hr');
const button = document.getElementById('menu_button');
const text_boxes = document.querySelectorAll('#text-block');
const lng_text = document.querySelectorAll('.lng__list a');
update_theme()

function menu() {
    if (show_menu) {
        show_menu = false;
        document.getElementById('menu_wrapper').style.visibility="visible";
    } else {
        show_menu = true;
        document.getElementById('menu_wrapper').style.visibility="hidden";
    }
}

function theme() {

    try {
        theme_num = localStorage.getItem('theme')
        if (theme_num == 0) {
            localStorage.setItem('theme', 1)
    
        } else if (theme_num == 1) {
            localStorage.setItem('theme', 0)
        }
    }
    catch(err){
        alert('An error occured while trying to access local storage: ', err)
    }

    update_theme()
}

function update_theme() {

    try {
        theme_num = localStorage.getItem('theme')
    }
    catch(err){
        alert('An error occured while trying to access local storage: ', err)
    }

    if (theme_num == 0) {
        document.body.style.backgroundColor='black';
        document.body.style.color='darkgreen';
        button.style.backgroundColor='darkgreen';
    
    
        links.forEach(link => {
            link.style.color='darkgreen';
        });
    
        horlines.forEach(line => {
            line.style.backgroundColor='darkgreen';
        });
    
        text_boxes.forEach(textbox => {
            textbox.style.backgroundColor='black';
            textbox.style.borderColor='darkgreen';
        });
    
        lng_text.forEach(text => {
            text.style.backgroundColor='black';
            text.style.borderColor='darkgreen';
        });
    
    } else if (theme_num == 1) {
        document.body.style.backgroundColor='darkgreen';
        document.body.style.color='black';
        button.style.backgroundColor='darkgreen';
    
        links.forEach(link => {
            link.style.color='black';
        });
    
        horlines.forEach(line => {
            line.style.backgroundColor='black';
        });
    
        text_boxes.forEach(textbox => {
            textbox.style.backgroundColor='green';
            textbox.style.borderColor='black';
        });
    
        lng_text.forEach(text => {
            text.style.backgroundColor='green';
            text.style.borderColor='black';
        });
    }
}