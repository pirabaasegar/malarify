import './App.css';
import React, { useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    document.title = "Home - Malarify";
  }, []);

  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero-text" data-aos="fade-up">
          <h1 className=''>Lorem ipsum dolor sit amet, consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
            efficitur massa sit amet cursus.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
      <section id="problem" className="problem" data-aos="fade-up">
        <div className="section-title pb-0">
          <h2>The Problem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
            efficitur massa sit amet cursus.
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div className="col-lg-4 col-md-6">
              <img
                src="/driver.svg"
                alt="Delivery"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                vel pharetra ligula. Suspendisse tempus laoreet est eget imperdiet.
                Integer laoreet lectus a enim tincidunt mattis. Pellentesque
                volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="features" className="features section-bg" data-aos="fade-in">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <i className="bi bi-star" />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tincidunt arcu eu lorem rutrum iaculis. Phasellus at rutrum
                  libero. Pellentesque.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <i className="bi bi-star" />
                <h4>Feature #2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tincidunt arcu eu lorem rutrum iaculis. Phasellus at rutrum
                  libero. Pellentesque.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <i className="bi bi-star" />
                <h4>Feature #3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tincidunt arcu eu lorem rutrum iaculis. Phasellus at rutrum
                  libero. Pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="experts" className="experts">
        <div className="section-title pb-0" data-aos="fade-up">
          <h2>What Experts Say</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
            efficitur massa sit amet cursus.
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div
              className="col-lg-4 col-md-6 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <img
                src="/process.svg"
                alt="Delivery"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                vel pharetra ligula. Suspendisse tempus laoreet est eget imperdiet.
                Integer laoreet lectus a enim tincidunt mattis. Pellentesque
                volutpat mollis consectetur. Etiam placerat mattis condimentum. Nam
                ut eleifend dolor. Pellentesque ac massa porttitor, malesuada felis
                sit amet, lacinia massa. Aliquam non lacus velit. Morbi fermentum
                quam justo, et volutpat nibh bibendum vehicula. Donec quam lorem,
                viverra ut massa eu, consequat porta.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="faq" className="faq section-bg">
        <div className="section-title pb-0" data-aos="fade-in">
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
        </div>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="row">
            <div className="accordion accordion-flush" id="faq-group-2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#faqsTwo-1"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </button>
                </h2>
                <div
                  id="faqsTwo-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.Maecenas at turpis vitae dui laoreet
                    interdum. Nulla malesuada efficitur massa sit amet cursus.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#faqsTwo-2"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </button>
                </h2>
                <div
                  id="faqsTwo-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.Maecenas at turpis vitae dui laoreet
                    interdum. Nulla malesuada efficitur massa sit amet cursus.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#faqsTwo-3"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </button>
                </h2>
                <div
                  id="faqsTwo-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.Maecenas at turpis vitae dui laoreet
                    interdum. Nulla malesuada efficitur massa sit amet cursus.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#faqsTwo-4"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </button>
                </h2>
                <div
                  id="faqsTwo-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.Maecenas at turpis vitae dui laoreet
                    interdum. Nulla malesuada efficitur massa sit amet cursus.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#faqsTwo-5"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </button>
                </h2>
                <div
                  id="faqsTwo-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam.Maecenas at turpis vitae dui laoreet
                    interdum. Nulla malesuada efficitur massa sit amet cursus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="section-title pb-0" data-aos="fade-up">
          <h2>Still have questions?</h2>
          <p style={{ margin: "auto auto 25px" }}>
            Get in touch with a specialist member of our team via the form below.
          </p>
        </div>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="row justify-content-center">
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <i className="bi bi-person-fill" />
              </span>
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <i className="bi bi-envelope-fill" />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span
                className="input-group-text align-items-start"
                id="addon-wrapping"
              >
                <i className="bi bi-chat-fill" />
              </span>
              <textarea
                className="form-control"
                placeholder="Your Message"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
