


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

if(btn_open && side_menu && body){
    document.getElementById("btn_open").addEventListener("click",open_close_menu);
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side__move");
    }
    
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side__move");
    }
    
    window.addEventListener("resize",function(){
        if(window.innerWidth > 760){
            body.classList.remove("body_move");
            side_menu.classList.remove("menu__side__move");
        }
    
        if(window.innerWidth < 760){
            body.classList.add("body_move");
            side_menu.classList.add("menu__side__move");
        }
    });
}



