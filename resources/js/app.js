import Alpine from 'alpinejs';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './bootstrap';

gsap.registerPlugin(ScrollTrigger);

window.Alpine = Alpine;
window.gsap = gsap;

Alpine.start();

// Initialize GSAP Animations
document.addEventListener('DOMContentLoaded', () => {

    // Fade In Up Elements
    gsap.utils.toArray('.fade-in-up').forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Stagger Children (for lists/grids)
    gsap.utils.toArray('.stagger-parent').forEach(parent => {
        const children = parent.querySelectorAll('.stagger-item');
        gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: parent,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Specific animation for timeline items if they aren't covered by stagger-parent
    const timelineItems = document.querySelectorAll('.experience-section .stagger-item');
    if (timelineItems.length > 0) {
        gsap.fromTo(timelineItems,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".experience-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
});
