show_menu = true;
theme_num = 0;
document.getElementById('menu_wrapper').style.visibility="hidden";
const links = document.querySelectorAll('a');
const horlines = document.querySelectorAll('hr');
const button = document.getElementById('menu_button');
const text_boxes = document.querySelectorAll('#text-block');
const lng_text = document.querySelectorAll('.lng__list a');

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
    if (theme_num == 0) {
        theme_num = 1;
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

    } else {
        theme_num = 0;
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