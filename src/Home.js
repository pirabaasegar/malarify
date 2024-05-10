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
          <h1 className=''>Empowering Communities, One Flight at a Time.</h1>
          <p>
            Malarify Drones introduces a pioneering healthcare solution in Nigeria, deploying a fleet of drones to swiftly deliver life-saving treatments to remote areas, aiming to bridge the gap between medical resources and underserved communities nationwide.
          </p>
          <a href="/about">Learn More</a>
        </div>
      </div>
      <section id="problem" className="problem" data-aos="fade-up">
        <div className="section-title pb-0">
          <span>What's the problem?</span>
          <h2>The Toll of Inefficient Treatment Transportation in Nigeria</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div className="col-lg-4 col-md-6">
              <img
                src="/medicine.svg"
                alt="Delivery"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <p>
                In Nigeria, the burden of malaria is immense, with over 34% of global cases reported within its borders. Tragically, a significant number of lives are lost each year due to the inefficiency of transporting essential malaria treatments. This ineffective transportation system contributes to delays in delivering medications to those in need, leading to preventable deaths and exacerbating the already dire malaria crisis in the country. The lack of proper infrastructure and logistical support compounds the challenges of distributing malaria treatments efficiently across Nigeria's vast and often remote regions.
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
                <h4>Swift Delivery to Remote Areas</h4>
                <p>
                  Malarify Drones stationed at every health facility ensure timely delivery of malaria treatments to underserved communities, bridging resource gaps.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <i className="bi bi-star" />
                <h4>Efficient Healthcare Delivery</h4>
                <p>
                  By directly reaching remote areas, Malarify Drones optimize resource allocation, minimizing costs while ensuring equitable access to healthcare.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <i className="bi bi-star" />
                <h4>Equity and Accessibility</h4>
                <p>
                  Malarify Drones revolutionize healthcare access, delivering life-saving treatments swiftly to underserved areas, promoting equity and empowering communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="experts" className="experts">
        <div className="section-title pb-0" data-aos="fade-up">
          <span>What Experts Say</span>
          <h2>Revolutionizing Healthcare Delivery in Nigeria</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div
              className="col-lg-4 col-md-6 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <img
                src="/experts.svg"
                alt="Delivery"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <p data-aos="fade-up">
                With the introduction of Malarify Drones, Nigeria stands at the cusp of a transformative shift in healthcare accessibility. Experts commend the innovative approach, recognizing its potential to significantly reduce the burden of malaria and improve overall healthcare outcomes. By strategically stationing drones at every health facility and utilizing cutting-edge technology for swift and reliable deliveries, Malarify Drones addresses the critical issue of transportation inefficiency plaguing the nation. This solution not only saves lives by ensuring timely access to essential treatments but also fosters economic sustainability by minimizing infrastructure costs and optimizing resource allocation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="faq" className="faq section-bg">
        <div className="section-title pb-0" data-aos="fade-in">
          <span>Frequently Asked Questions</span>
          <h2>Revolutionizing Healthcare Delivery in Nigeria</h2>
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
                    How does Malarify Drones ensure the safety and reliability of medical deliveries to remote areas in Nigeria?
                  </button>
                </h2>
                <div
                  id="faqsTwo-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Malarify Drones prioritizes safety and reliability through precise route mapping and obstacle avoidance technology. Our UAVs are equipped to navigate vast distances with precision, ensuring efficient and secure deliveries to even the most remote communities.
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
                    What measures does Malarify Drones take to address potential concerns about the cost-effectiveness of drone-based healthcare delivery in Nigeria?
                  </button>
                </h2>
                <div
                  id="faqsTwo-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Malarify Drones prioritizes economic viability by minimizing infrastructure costs and optimizing resource allocation. By reaching underserved areas directly, we aim to reduce long-term healthcare expenses, contributing to economic sustainability and affordability of healthcare services.
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
                    How does Malarify Drones ensure equitable access to healthcare resources across diverse communities in Nigeria?
                  </button>
                </h2>
                <div
                  id="faqsTwo-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Malarify Drones operates on a strategic basis, with drones stationed at major hospitals and dispatched on schedules to deliver essential medical supplies to smaller local healthcare facilities in towns and villages. This ensures equitable access to healthcare resources, bridging the gap between urban centers and remote areas.
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
                    What technological advancements enable Malarify Drones to excel in speed, reliability, and safety in healthcare delivery?
                  </button>
                </h2>
                <div
                  id="faqsTwo-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Malarify Drones harnesses cutting-edge technology, including precise route mapping, obstacle avoidance systems, and real-time monitoring, to ensure efficient and secure deliveries. These advancements enhance speed, reliability, and safety, allowing us to deliver life-saving treatments swiftly to underserved communities.
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
                    How does Malarify Drones contribute to the overall impact on public health in Nigeria, beyond the immediate delivery of medical supplies?
                  </button>
                </h2>
                <div
                  id="faqsTwo-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-group-2"
                >
                  <div className="accordion-body">
                    Malarify Drones not only delivers life-saving treatments swiftly to underserved areas but also promotes equity and empowers the nation toward a healthier future. By revolutionizing healthcare access and bridging the gap between medical resources and remote communities, we pave the way for a more resilient healthcare system nationwide.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section id="contact" className="contact">
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
      </section>*/}
      <Footer />
    </>
  );
}

export default App;
