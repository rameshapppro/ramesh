'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Ramesh
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[650px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a ability app developer to modernize legacy applications, migrate hybrid systems to native Android architectures, and significantly improve app stability, performance, and scalability. Experienced in leading and mentoring Android teams, driving clean architecture adoption, reducing technical debt, and ensuring predictable delivery in Agile/Scrum environments.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Strong collaborator with Product Owners, stakeholders, and backend teams, translating business requirements into robust technical solutions. Actively leverage AI-assisted development tools (Figma AI, GitHub Copilot, Gemini, Cursor AI) to accelerate development, improve code quality, and optimize engineering workflows. Passionate about building reliable mobile products, mentoring engineers, and owning technical outcomes at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
