
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

useGSAP(() => {
    gsap.from('about-llmamind', {
        x: 1000,
        duration: 1,
        scale : .6
    })
    gsap.from('about-llmamind', {
        x: 100,
        duration: 1,
        scale : 1
    })
}); 


