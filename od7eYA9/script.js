import { animate, scroll, inView } from "https://esm.run/framer-motion@10";

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const animatedElements = document.querySelectorAll('.animated-element');

    animatedElements.forEach(element => {
        inView(element, () => {
            animate(
                element,
                { 
                    opacity: 1, 
                    y: [20, 0] 
                },
                { 
                    duration: 0.6, 
                    ease: 'easeOut' 
                }
            );
        }, {
            margin: "0px 0px -100px 0px"
        });
    });


    const heroImage = document.querySelector('#hero .mockup-image');
    if (heroImage) {
        scroll(
            ({ y }) => {
                const scale = 1 - (y.progress * 0.1);
                const rotate = 15 - (y.progress * 15);
                if (scale >= 0.8 && y.progress <= 1) {
                     heroImage.style.transform = `perspective(2000px) rotateX(${rotate}deg) scale(${0.9 * scale})`;
                }
            }
        );
    }
});
