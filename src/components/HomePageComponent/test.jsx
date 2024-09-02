import React from 'react';
// import './homePage.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                autoAlpha: 1, left: 0,
                duration: 1, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    // toggleActions: "play none none reverse"
                }
            });
        });
    }, []);

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    return (
        <div className='App'>
            <div className='divSpace text-white'>Scroll Down</div>
            <div className='box-container'>
                <div data-scroll   className="box">box1</div>
                <div data-scroll   className="box">box2</div>
                <div data-scroll   className="box">box3</div>
                <div data-scroll   className="box">box4</div>
                <div data-scroll   className="box">box5</div>
                <div data-scroll   className="box">box6</div>
                <div data-scroll   className="box">box7</div>
            </div>
        </div>
    );
};

export default App;
