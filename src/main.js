// Import modules
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
import { Handler, Lightbox } from "@farvell/jflow-core";
import Typed from "typed.js";


<<<<<<< HEAD
=======
import Handler from "./handler";
import Lightbox from "./lightbox";
import Typed from "typed.js";

>>>>>>> eacaccd3865fa86ba0a0e96ce481b5e7d0c06caa
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
// Webpack styles
import "./styles/index.scss";

// Initialize menu event.
const initMenu = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
	const menu = new Handler({
		element: "menu",
		css: ["hideLeft", "showLeft"],
	},
	{
		element: "menu-button",
		css: ["unrotateRight", "rotateRight"],
	});

	return menu.onClick( "menu-control" );
<<<<<<< HEAD
=======
    return new Promise(( resolve ) => {
        const menu = new Handler({
            element: "menu",
            css: [ "hideLeft", "showLeft" ],
        },
        {
            element: "menu-button",
            css: [ "unrotateRight", "rotateRight" ],
        });

        resolve( menu.onClick( ".menu-control" ) );
    });
};


// Initialize lightbox event.
const initLightbox = () => {
    return new Promise(( resolve ) => {
        const lightbox = new Lightbox(
            {
                images: ".grid-image",
                texts: ".grid-caption",
                animation: { 
                    element: "lightbox",
                    css: [ "disappear", "appear" ],
                },
                photo: "lightbox-photo",
                caption: "lightbox-caption",
                roullette: "lightbox-roullette"
            }
        );
        
        resolve( lightbox.listen() );
    });
>>>>>>> eacaccd3865fa86ba0a0e96ce481b5e7d0c06caa
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
};

// Initialize document event.
const initDocument = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584

	const document = new Handler({
		element: "document",
		css: ["disappear", "appear"]
	},
	{
		element: "loader",
		css: "disappear"
	});

	return document.onTimeout( 900 );
<<<<<<< HEAD
=======
    return new Promise(( resolve ) => {
        const document = new Handler(
            {
                element: "document",
                css: [ "disappear", "appear" ]
            },
            {
                element: "loader",
                css: "disappear"
            }
        );

        resolve( document.timeout( 900 ) );
    });
>>>>>>> eacaccd3865fa86ba0a0e96ce481b5e7d0c06caa
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
};

// Main function.
window.addEventListener("load", () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
	initMenu()
		.then( initDocument() )
		.then(new Lightbox({
			images: "grid-image",
			texts: "grid-caption",
			css: ["disappear", "appear"]
		}));
});

// Typed.js
new Typed("#typed", {
	strings: [ "d", "designers.", "d", "developers.", "", "you!" ],
	typeSpeed: 90,
	backSpeed: 50,
	startDelay: 2000,
	backDelay: 1000,
	loop: true
<<<<<<< HEAD
=======
    initMenu()
        .then( initLightbox() )
        .then( initDocument() );
});


//Typed.js
new Typed( "#typed", {
    strings: [ "d", "designers.", "d", "developers.", "", "you!"],
    typeSpeed: 90,
    backSpeed: 50,
    startDelay: 2000,
    backDelay: 1000,
    loop: true
>>>>>>> eacaccd3865fa86ba0a0e96ce481b5e7d0c06caa
=======
>>>>>>> d50cf8c487dae237be9234d959a9d7430af2e584
});

console.log("Hot reloading...");