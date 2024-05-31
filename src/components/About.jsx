import React, { useState } from "react";
import CountUp from 'react-countup';
import { useSpring, animated } from "react-spring";

export default function About() {
    const progressBarAnimations = [
        useSpring({ from: { width: "0%" }, to: { width: "100%" }, config: { duration: 2000 } }), // Pourcentage 100%
        useSpring({ from: { width: "0%" }, to: { width: "90%" }, config: { duration: 2000 } }),  // Pourcentage 90%
        useSpring({ from: { width: "0%" }, to: { width: "75%" }, config: { duration: 2000 } }),  // Pourcentage 75%
        useSpring({ from: { width: "0%" }, to: { width: "80%" }, config: { duration: 2000 } }),  // Pourcentage 80%
        useSpring({ from: { width: "0%" }, to: { width: "90%" }, config: { duration: 2000 } }),  // Pourcentage 90%
        useSpring({ from: { width: "0%" }, to: { width: "55%" }, config: { duration: 2000 } }),  // Pourcentage 55%
    ];
    return (
        <>



            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="src/assets/img/profile-img.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            
            <section id="facts" className="facts">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"></i>
                                <CountUp start={0} end={232} duration={10}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} className="purecounter"></span>
                                    )}
                                </CountUp>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <CountUp start={1} end={521} duration={10}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} className="purecounter"></span>
                                    )}
                                </CountUp>
                                
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <CountUp start={0} end={1463} duration={10}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} className="purecounter"></span>
                                    )}
                                </CountUp>
                                
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-award"></i>
                                <CountUp start={0} end={25} duration={10}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} className="purecounter"></span>
                                    )}
                                </CountUp>
                            
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[0]}></animated.div> </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[1]}></animated.div>

                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[2]}></animated.div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">PHP <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[3]}></animated.div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[4]}></animated.div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                <animated.div className="progress-bar" style={progressBarAnimations[5]}></animated.div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}