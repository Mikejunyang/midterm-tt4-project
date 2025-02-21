import './list-products.scss';

// images
import M9GammaDopplerEmerald from "./assets/images/1284-10_m9-bayonet-gamma-doppler-2a.jpg";
import M9DopplerRuby from "./assets/images/1266-4_m9-bayonet-ruby-3-300x300.jpg";
import M9DopplerSapphire from "./assets/images/1278-11_m9-bayonet-sapphire-3a.jpg";
import ButterflyFade from "./assets/images/1611-2_butterfly-fade-red-tip-1a.jpg";
import LogitechGProXSuperlight from "./assets/images/LogitechGProXSuperlight.jpg";
import RazerDeathadderV3Pro from "./assets/images/RazerDeathadderV3Pro.jpg";
import RazerHuntsmanV3ProTKl from "./assets/images/RazerHuntsmanV3ProTKl.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'M9 Bayonet Gamma Doppler Emerald',
            description: 'Forged with Emerald stones',
            image: M9GammaDopplerEmerald
        },
        {
            name: 'M9 Bayonet Doppler Ruby',
            description: 'Be red, be alive',
            image: M9DopplerRuby
        },
        {
            name: 'M9 Bayonet Doppler Sapphire',
            description: 'Extinguish your enemy',
            image: M9DopplerSapphire
        },
        {
            name: 'Butterfly Knife Fade',
            description: 'Confuse with multicolour',
            image: ButterflyFade
        },
        {
            name: 'Logitech G Pro X Superlight',
            description: 'Dominate your enemy with lighter grip',
            image: LogitechGProXSuperlight
        },
        {
            name: 'Razer Deathadder V3 Pro',
            description: 'Right-hand domination',
            image: RazerDeathadderV3Pro
        },
        {
            name: 'Razer Huntsman V3 Pro TKL',
            description: 'With minimum space',
            image: RazerHuntsmanV3ProTKl
        },
        {
            name: 'Tea',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});