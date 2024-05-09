import './App.css';
import React, { useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    useEffect(() => {
        document.title = "About - Malarify";
    }, []);

    return (
        <>
            <Header />
            <div className="hero">
                <div className="hero-text" data-aos="fade-up">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
            </div>
            <section id="overview" className="overview" data-aos="fade-up">
                <div className="section-title pb-0">
                    <h2>Our Vision</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-gap-5">
                        <div className="row justify-content-center gap-5">
                            <div className="col-lg-8 col-md-8">
                                <p className="text-center">
                                    Here at Blossom, we want to provide every person with the
                                    opportunity to overcome their breast cancer in a simpler and
                                    efficient manner. Usual treatments can be significantly harsh
                                    sometimes with side effects like hair loss, fatigue, infections,
                                    etc. At Blossom, we want to combat this by making breast cancer
                                    merely an obstacle rather than a lifelong battle.
                                    <br />
                                    <br />
                                    We are a community of hardworking individuals who want to make the
                                    world a better place through an improved breast cancer vaccine
                                    that not only kills the cancer cells, but also trains the body to
                                    eliminate the tumor if the cancer were to ever come back in later
                                    years.
                                    <br />
                                    <br />
                                    At Blossom, it is essential that the workers feel a connection to
                                    the problem and are passionate about solving this issue with our
                                    vision. We encourage a work environment where as a team, we are
                                    inspired by the vision of the company and everyday are striving to
                                    reach our goal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="divider" />
            <section id="values" className="values section-bg" data-aos="fade-in">
                <div className="section-title pb-0">
                    <h2>Our Values</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.
                    </p>
                </div>
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i className="bi bi-sliders" />
                                <h4>Personalized Care</h4>
                                <p>
                                    Tailored assistance for daily activities, medication management,
                                    and companionship to support independence and well-being.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i className="bi bi-cpu" />
                                <h4>Technology Integration</h4>
                                <p>
                                    Advanced monitoring technologies to track health metrics,
                                    medication adherence, and provide real-time communication with
                                    caregivers.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i className="bi bi-house" />
                                <h4>Home Safety Assessment</h4>
                                <p>
                                    Evaluation of home environment to identify and address potential
                                    safety hazards, ensuring a secure living space for seniors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="divider" />
            <section id="team" className="team">
                <div className="section-title pb-0">
                    <h2>Our Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-gap-5">
                        <div className="row justify-content-center gap-5" data-aos="fade-up">
                            <div className="col-auto">
                                <img
                                    src="https://ca.slack-edge.com/TCKE4QSG5-U05QJEFV668-0345ac48681b-512"
                                    alt="Delivery"
                                    className="img-fluid rounded-circle shadow"
                                    width={275}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <h2 className="fw-bold m-0" style={{ color: "#185ee0" }}>
                                    Pirabaa Segar&nbsp;&nbsp;
                                    <a href="https://www.linkedin.com/in/pirabaasegar/">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </h2>
                                <p className="mb-2" style={{ color: "#939393" }}>
                                    Co-founder
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                    Pellentesque volutpat mollis consectetur. Etiam placerat mattis
                                    condimentum. Nam ut eleifend dolor.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5" data-aos="fade-up">
                            <div className="col-auto">
                                <img
                                    src="https://ca.slack-edge.com/TCKE4QSG5-U05QFU7JH7V-68418b455abe-512"
                                    alt="Delivery"
                                    className="img-fluid rounded-circle shadow"
                                    width={275}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <h2 className="fw-bold m-0" style={{ color: "#185ee0" }}>
                                    Gaurav Sharma&nbsp;&nbsp;
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </h2>
                                <p className="mb-2" style={{ color: "#939393" }}>
                                    Co-founder
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                    Pellentesque volutpat mollis consectetur. Etiam placerat mattis
                                    condimentum. Nam ut eleifend dolor.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5" data-aos="fade-up">
                            <div className="col-auto">
                                <img
                                    src="https://ca.slack-edge.com/TCKE4QSG5-U05QFTTE98B-f966109f7091-512"
                                    alt="Delivery"
                                    className="img-fluid rounded-circle shadow"
                                    width={275}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <h2 className="fw-bold m-0" style={{ color: "#185ee0" }}>
                                    Gurtaj Othi&nbsp;&nbsp;
                                    <a href="https://www.linkedin.com/in/gurtajothi/">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </h2>
                                <p className="mb-2" style={{ color: "#939393" }}>
                                    Co-founder
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                    Pellentesque volutpat mollis consectetur. Etiam placerat mattis
                                    condimentum. Nam ut eleifend dolor.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5" data-aos="fade-up">
                            <div className="col-auto">
                                <img
                                    src="https://ca.slack-edge.com/TCKE4QSG5-U05QUKM9P5X-63cc224c633a-512"
                                    alt="Delivery"
                                    className="img-fluid rounded-circle shadow"
                                    width={275}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <h2 className="fw-bold m-0" style={{ color: "#185ee0" }}>
                                    Hayyan Fahad&nbsp;&nbsp;
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </h2>
                                <p className="mb-2" style={{ color: "#939393" }}>
                                    Co-founder
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                    Pellentesque volutpat mollis consectetur. Etiam placerat mattis
                                    condimentum. Nam ut eleifend dolor.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5" data-aos="fade-up">
                            <div className="col-auto">
                                <img
                                    src="https://ca.slack-edge.com/TCKE4QSG5-U05QUKMN4HX-234e2c3b2f3b-512"
                                    alt="Delivery"
                                    className="img-fluid rounded-circle shadow"
                                    width={275}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <h2 className="fw-bold m-0" style={{ color: "#185ee0" }}>
                                    Kulveer Purba&nbsp;&nbsp;
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </h2>
                                <p className="mb-2" style={{ color: "#939393" }}>
                                    Co-founder
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                    Pellentesque volutpat mollis consectetur. Etiam placerat mattis
                                    condimentum. Nam ut eleifend dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
