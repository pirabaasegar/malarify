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
                        Malarify Drones revolutionizes healthcare access in Nigeria by strategically deploying unmanned aerial vehicles to deliver life-saving treatments swiftly to underserved communities, fostering economic viability, promoting equity, and paving the way for a resilient healthcare system.
                    </p>
                </div>
            </div>
            <section id="overview" className="overview" data-aos="fade-up">
                <div className="section-title pb-0">
                    <h2 style={{ margin: "auto auto 20px" }}>Our Vision</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-gap-5">
                        <div className="row justify-content-center gap-5">
                            <div className="col-lg-8 col-md-8">
                                <p className="text-center">
                                    Malarify Drones is driven by a vision to revolutionize healthcare access across Nigeria. By strategically stationing our fleet at every health facility nationwide, we empower underserved communities with swift and reliable delivery of life-saving treatments. With precision, speed, and safety as our pillars, our unmanned aerial vehicles bridge the gap between medical resources and remote areas, ensuring equitable access to healthcare for all.
                                    <br />
                                    <br />
                                    Our commitment extends beyond mere delivery logistics; it's about catalyzing profound change. Malarify Drones not only saves lives but also fosters economic viability by minimizing infrastructure costs and optimizing resource allocation. By directly reaching underserved regions, we mitigate long-term healthcare expenses, contributing to the economic sustainability of the nation.
                                    <br />
                                    <br />
                                    At the heart of our endeavor lies the profound impact on individuals and communities. Through innovation and efficiency, we pave the way for a healthier, more equitable future for Nigeria. By delivering essential medical supplies swiftly and reliably, we promote equity, empower communities, and lay the foundation for a resilient healthcare system capable of meeting the nation's needs, today and tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="divider" />
            <section id="values" className="values section-bg" data-aos="fade-in">
                <div className="section-title pb-0" data-aos="fade-in">
                    <span>Team Values</span>
                    <h2>Guiding Principles of Malarify Drones</h2>
                </div>
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i class="bi bi-bullseye"></i>
                                <h4>Precision</h4>
                                <p>
                                    We prioritize accuracy in our drone deliveries, ensuring that essential medical supplies reach even the most remote communities with pinpoint efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i class="bi bi-lightning"></i>
                                <h4>Empowerment</h4>
                                <p>
                                    Through innovative technology, we empower underserved regions by bridging the gap between healthcare resources and those in need, fostering a healthier and more resilient future for all.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <i class="bi bi-heart"></i>
                                <h4>Compassion</h4>
                                <p>
                                    Our commitment to saving lives drives every aspect of our work, as we strive to bring hope and healing to every corner of Nigeria with empathy and dedication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="divider" />
            <section id="team" className="team">
            <div className="section-title pb-0" data-aos="fade-in">
                    <span>Our Team</span>
                    <h2>Meet the Minds Behind Malarify Drones</h2>
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
                                <h2 className="fw-bold m-0" style={{ color: "#8dc643" }}>
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
                                <h2 className="fw-bold m-0" style={{ color: "#8dc643" }}>
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
                                <h2 className="fw-bold m-0" style={{ color: "#8dc643" }}>
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
                                <h2 className="fw-bold m-0" style={{ color: "#8dc643" }}>
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
                                <h2 className="fw-bold m-0" style={{ color: "#8dc643" }}>
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
