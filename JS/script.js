show_menu = true;
theme_num = 0;
const links = document.querySelectorAll('a');
const horlines = document.querySelectorAll('hr');
const dives = document.querySelectorAll('div');


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

        links.forEach(link => {
            link.style.color='darkgreen';
        });

        horlines.forEach(line => {
            line.style.backgroundColor='darkgreen';
        });
    } else {
        theme_num = 0;
        document.body.style.backgroundColor='darkgreen';
        document.body.style.color='black';

        links.forEach(link => {
            link.style.color='black';
        });

        horlines.forEach(line => {
            line.style.backgroundColor='black';
        });
    }
}