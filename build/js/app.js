document.addEventListener("DOMContentLoaded",()=>{
    darkmode();
    main();
    skills();
    qualifications();
    services();
    swiper_portfolio();
    show_menu();
    form_contact();
    fake_message();
})

function darkmode(){

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){

        const body=document.querySelector("body");
        body.classList.add("darkmode");
    
        const sun_moon = document.querySelector("#icon-sun-moon");
        const sun_moon_menu=document.querySelector(".sun_moon_bar");
        

        sun_moon.innerHTML=icons.sun;
        sun_moon_menu.innerHTML=icons.sun;

        sun_moon.onclick=()=>{

            if(body.classList.contains("darkmode")){
                body.classList.remove("darkmode");
                sun_moon.innerHTML=icons.moon;
            }else{
                body.classList.add("darkmode");
                sun_moon.innerHTML=icons.sun;
            }

        };

        sun_moon_menu.onclick=()=>{
            if(body.classList.contains("darkmode")){
                body.classList.remove("darkmode");
                sun_moon_menu.innerHTML=icons.moon;
            }else{
                body.classList.add("darkmode");
                sun_moon_menu.innerHTML=icons.sun;
            }
        }
    }

}

function main(){

    const social=document.querySelector(".social");
    social.innerHTML=icons.linkedin;
    social.innerHTML+=icons.github;
    social.innerHTML+=icons.mail;

}

function skills(){
    
    const fronted=document.querySelector(".fronted");
    show_fronted(fronted);
    fronted.addEventListener("click",fronted_event);

    const backend=document.querySelector(".backend");
    backend.addEventListener("click",backend_event);

}

function qualifications(){
    const qualifications=document.querySelector(".qualifications");
    qualifications.addEventListener("click",qualifications_event);
}

function services(){
    const fronted=document.querySelector(".fronted_developer");
    fronted.addEventListener("click",services_event);

    const backend=document.querySelector(".backend_developer")
    backend.addEventListener("click",services_event);

    const fullstack=document.querySelector(".fullstack_developer");
    fullstack.addEventListener("click",services_event);
}

function swiper_portfolio(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}

function fronted_event(e){
    const prev=document.querySelector("#fronted-content");
    prev? prev.remove() : null;
    show_hide_icons(e,show_fronted);
}

function backend_event(e){
    show_hide_icons(e,show_backend);
}

function show_hide_icons(e,callback){
    const abstract=e.target.parentElement;
    const parent=abstract.parentElement;
    if(e.target.id=="down"){
        e.target.remove();
        abstract.innerHTML+=icons.up;
        callback(parent);
    }
    if(e.target.id=="up"){
        e.target.remove();
        abstract.innerHTML+=icons.down;
        const content=abstract.parentElement.querySelector(".contents");
        content ? content.remove() : null;
    }
}

function show_fronted(fronted){
    fronted.innerHTML+=html.fronted;
}

function show_backend(backend){    
    backend.innerHTML+=html.backend;
}



function qualifications_event(e){
    e.preventDefault();
    const work=document.getElementById("work");
    const education=document.getElementById("education");

    if(e.target.classList.contains("f-3")){
        work.parentElement.classList.remove("selected");
        education.parentElement.classList.remove("selected");
        e.target==work? work.parentElement.classList.add("selected") : education.parentElement.classList.add("selected");
        show_qualifications(e.target.id);
    }
}

function show_qualifications(string){
    const sections=document.querySelector(".sections");
    clear_html(sections);
    string=="work"? sections.innerHTML=html.work : sections.innerHTML=html.education ;
}

function services_event(e){
    e.preventDefault();
     if(e.target.classList.contains("view_more") || e.target.parentElement.classList.contains("view_more") ){
        e.target.classList.contains("view_more")? show_services(e.target.id) : show_services(e.target.parentElement.id) ;
     }
}

function show_services(string){

    const card=document.querySelector(".container_card");
    card? card.remove():null;

    const body=document.querySelector("body");

    const div=document.createElement("DIV");
    div.classList.add("container_card","o-0");
    div.innerHTML=services_obj[string];
    body.appendChild(div)   
    setTimeout(() => {
        div.classList.remove("o-0");
        div.classList.add("o-1");
    }, 200);
    

    div.addEventListener("click",(e)=>{
        if(e.target.classList.contains("exit")){
            div.classList.add("o-0");
            div.classList.remove("o-1");
            setTimeout(() => {
                div.remove();
            }, 200);
        }
    })

    document.addEventListener("click",(e)=>{
        const card_service=document.querySelector(".card_service");
        if(e.target==div && e.target.contains(card_service)){
            div.classList.add("o-0");
            div.classList.remove("o-1");
            setTimeout(() => {
                div.remove();
            }, 200);
        }
    })
}

function show_menu(){

    const open_menu=document.querySelector(".open_menu");
    const close_menu=document.querySelector(".close_menu");
    const nav_menu=document.querySelector(".nav_menu");
    const bar_menu=document.querySelector(".bar_menu");
    const container_menu=document.querySelector(".deploy_menu");

    open_menu.onclick=()=>{

        bar_menu.classList.add("h-25_p-0");

        container_menu.classList.remove("hidden");
        container_menu.classList.add("show_menu");

        nav_menu.appendChild(create_div_svg(icons.home,"Home"));
        nav_menu.appendChild(create_div_svg(icons.about,"About"));
        nav_menu.appendChild(create_div_svg(icons.skills,"Skills"));
        nav_menu.appendChild(create_div_svg(icons.services,"Services"));
        nav_menu.appendChild(create_div_svg(icons.portfolio,"Portfolio"));
        nav_menu.appendChild(create_div_svg(icons.contactme,"ContactMe"));

    }

    close_menu.onclick=()=>{
        clear_html(nav_menu);
        
        bar_menu.classList.remove("h-25_p-0");

        container_menu.classList.add("hidden");
        container_menu.classList.remove("show_menu");
    }

    nav_menu.onclick=()=>{
        clear_html(nav_menu);
        
        bar_menu.classList.remove("h-25_p-0");

        container_menu.classList.add("hidden");
        container_menu.classList.remove("show_menu");
    }
}

function form_contact(){
    const form=document.querySelector(".form_contact");
    form.addEventListener("submit",event_form);
}

function validation_email(){
    const name=document.querySelector("#name");
    const email=document.querySelector("#email");
    const message=document.querySelector("#message");
    const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if(name.value=="" || message.value=="" || er.test(email.value)==false){
        return false;
    }else{
        return true;
    }
}

function create_alert(text,state=false){
    
    const body=document.querySelector("body");

    const div=document.createElement("DIV");

    div.classList.add("container-error","o-0");

    if(!state){

        const error=document.createElement("DIV");

        error.classList.add("error");
    
        const header=document.createElement("H2");
        header.classList.add("header_error","m-0");
        text=="Your Message has been send Successfully" ? header.textContent="Congratulations !" :header.textContent="An Error Occurred !";

        const p=document.createElement("P");
        p.textContent=text;
        let svg;

        if(text=="Your Message has been send Successfully"){
            svg=document.createElement("DIV");
            svg.classList.add("container_svg");
            svg.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04bf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
            </svg>`;        
        }else{
            svg=document.createElement("DIV");
            svg.classList.add("container_svg");
            svg.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
            </svg>`;
        }


    
        const body_error=document.createElement("DIV");
        body_error.classList.add("body_error");
        body_error.appendChild(p);
        body_error.appendChild(svg);
    
        const footer=document.createElement("DIV");
        footer.classList.add("footer_error","ok");
        footer.classList.add("button");
    
        const button=document.createElement("P");
        button.classList.add("button","ok");
        button.textContent="OK";
        footer.appendChild(button);
    
        error.appendChild(header);
        error.appendChild(body_error);
        error.appendChild(footer);
    
    
        div.appendChild(error);

        setTimeout(() => {
        div.classList.remove("o-0");
        div.classList.add("o-1");
        }, 100);


        div.addEventListener("click",(e)=>{
            if(e.target.classList.contains("ok")){
                div.classList.add("o-0");
                div.classList.remove("o-1");
                setTimeout(() => {
                    div.remove();
                }, 100);
            }
        })

    }else{

        const error=document.createElement("DIV");
        error.classList.add("spinner_form");
        error.innerHTML=`<div class="sk-chase hw-8">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        </div>`;

        div.appendChild(error);
        div.classList.remove("o-0");
    }
    
    body.appendChild(div);

    document.addEventListener("click",(e)=>{
        const error=document.querySelector(".error");
        if(e.target==div && e.target.contains(error)){
            div.classList.add("o-0");
            div.classList.remove("o-1");
            setTimeout(() => {
                div.remove();
            }, 100);
        }
    })

}

function event_form(e){
    const email=document.querySelector("#email");
    const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    e.preventDefault();

    const state=validation_email();
    if(state){
        create_alert("",true);
        send_email(e.target);
    }else{
        //filter errors
        !er.test(email.value) && email.value!="" ? create_alert("Please enter a valid email") : create_alert("All fields are required")
    }

}

function send_email(form){

    const data= new FormData(form);
    let url="https://guarded-wildwood-78277.herokuapp.com/index.php/pages/email";
    //  url = `https://api.allorigins.win/get?url=${ encodeURIComponent(url) }`;
    const send_data=fetch(url,{
        method:"POST",
        body:data,
    })
    .then(()=>{
        const error=document.querySelector(".container-error");
        error.remove();
        create_alert("Your Message has been send Successfully");
        form.reset();
        document.getElementById("fake_message").innerText="";
    })//use spinner and final alert 
    .catch(()=>{
        create_alert("An error occurred");
    })

    const get_info=fetch(url)
    .then(result=>result.json())
    .then(response=>console.log(response))
    
}

function fake_message(){
    const fake=document.getElementById("fake_message");
    const message=document.querySelector("#message");
    fake.addEventListener("input",()=>{
        message.textContent=fake.innerText;
    })
}