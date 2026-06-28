// =================================
// BUILDCORE WEBSITE JAVASCRIPT
// =================================


async function loadComponent(
    element,
    file
){

    try{

        const response =
        await fetch(
        `./src/components/${file}`
        );


        const html =
        await response.text();


        document
        .getElementById(element)
        .innerHTML = html;


    }
    catch(error){

        console.log(
        "Component error:",
        error
        );

    }

}



// LOAD COMPONENTS

loadComponent(
"navbar",
"navbar.html"
);


loadComponent(
"hero",
"hero.html"
);


loadComponent(
"stats",
"stats.html"
);


loadComponent(
"services",
"services.html"
);


loadComponent(
"projects",
"projects.html"
);


loadComponent(
"process",
"process.html"
);


loadComponent(
"about",
"about.html"
);


loadComponent(
"team",
"team.html"
);


loadComponent(
"testimonials",
"testimonials.html"
);


loadComponent(
"contact",
"contact.html"
);


loadComponent(
"footer",
"footer.html"
);





// ================================
// NAVBAR SCROLL EFFECT
// ================================


window.addEventListener(
"scroll",
()=>{


const nav =
document.querySelector("nav");


if(nav){


if(window.scrollY > 50){

nav.style.background =
"rgba(0,0,0,.9)";


}
else{


nav.style.background =
"rgba(0,0,0,.65)";


}



}


});





// ================================
// SIMPLE FORM VALIDATION
// ================================


document.addEventListener(
"submit",
function(e){


if(
e.target.classList.contains(
"contact-form"
)
){


e.preventDefault();


alert(
"Message sent successfully!"
);


}


});





// ================================
// MOBILE MENU
// ================================


document.addEventListener(
"click",
function(e){


if(
e.target.classList.contains(
"menu-btn"
)
){


document
.querySelector(".nav-links")
.classList.toggle(
"active"
);


}


});