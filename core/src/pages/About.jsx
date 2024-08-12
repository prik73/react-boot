import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
// import 'animate.css/animate.min.css';
// import 'venobox/venobox.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'aos/dist/aos.css'
// import '..css/style.css';
import tyson from '../images/bg_3.jpg'

const About = () => {
  return (
    <div>
      {/* <section id="hero1" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        </div>
      </section> */}

<section id="about-section" className="about-section">
  <div className="container">
    <div className="row no-gutters">
      <div className="col-lg-6 video-box">
        <img src={tyson} className="img-fluid" alt="The rising people welfare society" />
      </div>
      <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
        <div className="section-title">
          <h2>Who We Are</h2>
          <p>Our NGO is a club formed by youngsters whose main motto is social service. 
            In this organisation, everyone lives for one another and everybody lives for a cause. 
            It’s a non-profit organisation founded in 2012 with an employee margin of 2 to 10 main people. 
            We are specialised in NGO and teaching. This Non-Governmental Organisation (NGO) was formed by a group of young people who wanted to bring a change in society. 
            It was started by three people namely Avleen Kaur, Kuwarjeet Singh, and Harmandeep Kaur.</p>
        </div>
        
      </div>
    </div>
  </div>
</section>


<section id="about-team-approach" className="about-team">
  <div className="container">
    <div className="section-title" data-aos="fade-up">
      <h1><b>OUR APPROACH</b></h1>
      <hr />
      <p className="font-italic">
        We reach out to children and make them interact with young people from universities and teach them in a friendly way so as to provide them with a family environment for learning, make them understand our culture and hardships they need to overcome in the journey of their life.
      </p>
      <p className="font-italic">
        Our main motives are making children aware of the current scenario in which the world exists and train them to overcome the taboos of society. We also make them aware of the social issues they are in and how to make it a better place for them to survive and grow.
      </p>
      <br />
      <br />
      <p className="font-italic">
        A well-defined smile is what we care for and try to achieve with our constant approach.
      </p>
    </div>
  </div>
</section>

<section id="about-team-team" className="about-team">
  <div className="container">
    <div className="section-title" data-aos="fade-up">
      <h1><b>OUR TEAM</b></h1>
    </div>
    <hr />
    <div className="row content">
      <div className="col-md-5" data-aos="fade-left">
        <img src="assets/img/team/Kuwarjeet-Singh-200x300.jpeg" className="img-fluid" alt="Kuwarjeet Singh" />
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-right">
        <h2>Kuwarjeet Singh</h2>
        <h4><b>HEAD COORDINATOR & CO-FOUNDER</b></h4>
        <p className="font-italic">
          He has been working at managerial posts at various companies and is a constant creator. He is a socialist and a founder of TRPWS, a non-governmental organisation that strives to provide basic needs and education to unprivileged and marginalised children of society in New Delhi. The NGO has done a tremendous amount of good work under his leadership and he encourages people who work in the NGO.
        </p>
        <ul>
          <li>Leads all departments of the NGO.</li>
          <li>Conducts induction programs at the NGO.</li>
          <li>Manages and coordinates the work done by all members of the NGO.</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
        <img src="assets/img/team/Harman%20arora.jpeg" className="img-fluid" alt="Harman Arora" />
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
        <h2>Harman Arora</h4>
        <h4><b>COORDINATOR & CO-FOUNDER</b></h4>
        <p className="font-italic">
          She is also a co-founder of TRPWS. She completed her higher studies at JD Institute Of Fashion Technology. She works as a Visual Merchandiser at two companies and has also worked before as a wedding planner. She was one of the key members along with Kuwarjeet Singh when the NGO was established. She is a skilful person and has very good management skills.
        </p>
        <ul>
          <li>Programme coordinator at TRPWS.</li>
          <li>Planning of trips of the children to various knowledge centres and picnics.</li>
          <li>Managing funds donated to the NGO and implementation of those funds.</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row content">
      <div className="col-md-5" data-aos="fade-left">
        <img src="assets/img/team/Yashvi%20parwani.jpeg" className="img-fluid" alt="Yashvi Parwani" />
      </div>
      <div className="col-md-7 pt-5" data-aos="fade-right">
        <h2>Yashvi Parwani</h2>
        <h4><b>MEDIA, GRAPHICS & CONTENT HEAD</b></h4>
        <p className="font-italic">
          She is a socialist and has been handling the Media, Graphics, and Content of TRPWS. She completed her Bachelor of Arts degree from Shivaji University, New Delhi. She also worked as a Web Content Writer. She has extensive experience in leading, designing, and literature.
        </p>
        <ul>
          <li>Social media analyst at TRPWS.</li>
          <li>Marketing the events organised by the NGO on different social media platforms such as Facebook and Instagram.</li>
          <li>Supervises tasks assigned to interns.</li>
          <li>Manages all active social media platforms of the NGO.</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
        <img src="assets/img/team/Avleen%20kaur.jpg" className="img-fluid" alt="Avleen Kaur" />
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
        <h2>Avleen Kaur</h2>
        <h4><b>COORDINATOR & CO-FOUNDER</b></h4>
        <p className="font-italic">
          Avleen Kaur is among the founders of TRPWS. She completed her higher studies at Sri Guru Tej Bahadur Khalsa College. She is the editorial chief at Googly Networks and head of the team at TRPWS. She also has experience in marketing and content writing. She has amazing teaching and leadership skills.
        </p>
        <ul>
          <li>Teaching head at TRPWS.</li>
          <li>Conducts sessions at NGO.</li>
          <li>Leads educational content development at the NGO.</li>
          <li>Coordinates with other NGOs to organise joint events.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
