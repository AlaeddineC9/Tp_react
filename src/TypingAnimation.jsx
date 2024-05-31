import React, { useEffect } from 'react';
import Typed from 'typed.js';


const TypingAnimation = () => {
    useEffect(() => {
        const options = {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"], // Mots à afficher
            typeSpeed: 100, // Vitesse de frappe
            backSpeed: 50, // Vitesse de suppression
            loop: true, // Répéter l'animation en boucle
        };

        // Créer une instance Typed
        const typed = new Typed('.typed', options);

        // Nettoyer la Typed instance lors du démontage du composant
        return () => {
            typed.destroy();
        };
    }, []);
return (
<div>
   
</div>
);
    };
    export default TypingAnimation;