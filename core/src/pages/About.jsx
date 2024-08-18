import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'aos/dist/aos.css'

import tyson from '../images/bg_3.jpg'
import logoimg from '../assets/images/site/logo.jpg';
import p1img from '../assets/images/site/aboutpeople/1.jpg';
import p2img from '../assets/images/site/aboutpeople/2.jpg';
import p3img from '../assets/images/site/aboutpeople/3.jpg';
import p4img from '../assets/images/site/aboutpeople/4.jpg';
import p5img from '../assets/images/site/aboutpeople/5.jpg';
import p6img from '../assets/images/site/aboutpeople/6.jpg';
import p7img from '../assets/images/site/aboutpeople/7.jpg';
import p8img from '../assets/images/site/aboutpeople/8.jpg';
import Aos from 'aos'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
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
              <img src={logoimg} className="img-fluid" alt="The rising people welfare society" />
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

      {/* TEAM SECTION */}

      <section id="about-team-team" className="about-team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h1><b>OUR TEAM</b></h1>
          </div>
          <hr />


           {/* Team Member 1 */}
           <div className="row content align-items-center mb-5">
            <div className="col-md-5" data-aos="fade-left">
              <img src={p1img} className="img-fluid w-100" alt="princy" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-right">
              <h2>Dr. Princy</h2>
              <h4><b>Director</b></h4>
              <p className="font-italic">
                An academician, lawyer, social worker, feminist, certified posh
                trainer and author, Dr. Princy has completed her Ph.D. in law
                from Delhi University. Currently, a faculty in the Department of
                Law at Gurugram University, she has academic experience of
                more than a decade. She is also a certified POSH trainer. She is
                also a visiting faculty at Haryana Institute of Public
                Administration, Haryana. Dr. Princy has written numerous
                articles on contemporary issues of laws and presented papers at
                Various national and international conferences. She is a parent
                member of the Board of School Management at Manav Rachna
                International School. She was the General Secretary of Disha - an
                ngo under the aegis of Commissioner of Police, Gurugram. She
                has edited a book on legal issues and is currently supervising
                dissertations. She has delivered online lectures under various
                programs of Central Government including ugc-epg pathshala
                and swayam portal etc.
              </p>
            </div>
          </div>
          <hr />


          {/* Team Member 2 */}
          <div className="row content align-items-center mb-5">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
              <img src={p2img} className="img-fluid w-100" alt="Harman Arora" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
              <h2>Mr. Rajesh Singh Chahar</h2>
              <h4><b>Director</b></h4>
              <p className="font-italic">
                Rajesh Singh Chahar, one of the director in Rekart innovations Pvt. Ltd. And a
                dynamic profession possesses more than 13 years of extensive experience in waste
                management projects. His expertise extends beyond traditional waste
                management realms, delving into the realms of sustainability, energy, power, and
                environmental commodities. His proactive involvement in preparing ESG reports,
                developing corporate-level carbon, water, and resource footprints, and identifying
                opportunities for sustainable management underscores his commitment to
                environmental stewardship. Moreover, He plays a pivotal role in the conception
                and execution of carbon credit projects, offering invaluable services to
                stakeholders while assessing GHG reduction potentials across various sectors. His
                dedication to environmental responsibility and regulatory compliance extends
                beyond borders. His active engagement in global initiatives, exemplified by his
                distinguished membership in COP28, underscores his commitment to championing
                sustainability on both local and global scales
              </p>
            </div>
          </div>
          <hr />


          
          {/* Team Member 3 */}
          <div className="row content align-items-center mb-5">
            <div className="col-md-5" data-aos="fade-left">
              <img src={p3img} className="img-fluid w-100" alt="Yashvi Parwani" />
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-right">
              <h2>Mr. M.C. Chaturvedi</h2>
              <h4><b>Director</b></h4>
              <p className="font-italic">
                Mr. Chaturvedi is one of the most dynamic and renowned
                social worker of Gurugram who bears many feathers in his
                hat. Along with his role as social worker, he holds the
                position of Managing Director at Chaturvedi Associates and
                fulfilling his professional commitments as taxation
                consultant. He is the Chairman of Shanti Charitable
                Foundation (regd.) and Shiv Shakti Sewa Samita (regd.)
                registered under Society Registration Act. He is also the VicePresident of MCBOA. He has held various respectable
                positions in past like President, Dusshera Mela Samiti; VicePresident, Shree Khatu Shayam Sewa Mandal; VicePresident, Nishtha Sanskritik Manch; General Secretary,
                Income Tax Practitioner Association, Chairman, Resident
                Welfare Association Laxman Vihar and various others.
              </p>
            </div>
          </div>
          <hr />


           {/* Team Member 4 */}
           <div className="row content align-items-center mb-5">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
              <img src={p4img} className="img-fluid w-100" alt="Avleen Kaur" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
              <h2>Adv. Arun Singh Chahar</h2>
              <p className="font-italic">
                Arun Singh Chahar, is a senior renowned lawyer practicing in
                the field of taxation. He has his offices in Gurugram as well as in
                Rewari district of Haryana. He has an extensive experience in
                the field of direct and indirect taxes including income tax, Gst
                etc. His remarkable interpretation and argumentative skills are
                evident from the orders passed by various appellate bodies
                where he appeared on behalf of his assessee. He is the District
                coordinator of Haryana Tax Bar Association and a very active
                member of Rewari District Bar Association. He is also a
                member of District Taxation Bar Association of Gurugram as
                well as of Rewari.
              </p>
            </div>
          </div>
          <hr />


          {/* Team Member 5 */}
          <div className="row content align-items-center mb-5">
            <div className="col-md-5" data-aos="fade-left">
              <img src={p5img} className="img-fluid w-100" alt="princy" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-right">
              <h2>Prof. Vageshwari Deswal</h2>
              <h4><b>Chief Advisor</b></h4>
              <p className="font-italic">
                Prof. Vageshwari Deswal, a distinguished professor of
                Law at the University of Delhi, is a renowned with over
                20 years of teaching and research experience.
                Specializing in family law, criminal law, jurisprudence
                and gender justice , Dr. Deswal’s research
                contributions, spanning topics such as rape laws, acid
                violence and judicial discourse have been widely
                published in esteemed journals. Recognized with
                multiple awards and honors her expertise extends to
                supervising research with a keen focus on gender
                issues, she is a leading voice in shaping legal discourse
                on women’s right in India.
              </p>
            </div>
          </div>
          <hr />


          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
              <img src={p6img} className="img-fluid" alt="Harman Arora" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
              <h2>Mr. Arjun Chaturvedi</h2>
              <h4><b>Auditor</b></h4>
              <p className="font-italic">
                Arjun is a fellow member of The Institute of Chartered
                Accountants of India and is a partner with N V A & Co. he
                Arjun mainly deals in International and Domestic
                taxation issues of the clients and represents clients in
                their assessment and appellate matters. He is an
                alumnus of KPMG - one of the big four accounting firms
                of the world, where he has assisted in the practice of
                International and Corporate taxation. Arjun has served
                various international and domestic corporate clients and
                helped them cutting their complexities by providing
                them out of the box ideas which are practically
                implementable. Arjun is graduated from Delhi College of
                Arts and Commerce, popularly know as DCAC, Delhi
                University and also holds degree of LLB.
              </p>
            </div>
          </div>
          <hr />


          <div className="row content">
            <div className="col-md-5" data-aos="fade-left">
              <img src={p7img} className="img-fluid" alt="princy" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-right">
              <h2>Mr. Jagvinder Brar</h2>
              <h4><b>Volunteer</b></h4>
              <p className="font-italic">
                Jagvinder is a Partner and Heads the Forensic Services practice in KPMG in India.He is a
                forensic accountant and investigator with over 24 years of experience: 20 years with KPMG
                in Canada and India, and over four years with the Integrity Vice Presidency at the World
                Bank Group in Washington, DC. His geographical experience includes USA (4 years), Canada
                (8 years) and India (12 years). His expertise includes M&A due diligence involving
                transaction forensics, validations, anti-money laundering concerns, share purchase
                agreements, etc.; Cross-border investigations of fraud/corruption allegations under
                the U.S. and Indian anti-bribery and corruption as third party agents, employees;
                Investigation of vendor frauds, construction frauds, government, regulatory and other
                inspections, internal investigations, and litigation support, international investigations on
                procurement and financial statement frauds, bid-rigging, corruption, collusion, kickbacks,
                and obstructive practices.
                Jagvinder has presented and delivered trainings on anti-fraud and anti-corruption measures,
                forensic accounting, and investigation techniques to various corporates, investigating
                agencies, anti-corruption commissions and supreme audit institutions in various countries.
                His areas of expertise include cross-border investigations of fraud and corruption
                allegations, US FCPA and UKBA investigations, employee and third-party agent frauds,
                government, regulatory and other internal investigations, related litigation support.
              </p>
            </div>
          </div>
          <hr />


          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-right">
              <img src={p8img} className="img-fluid" alt="Harman Arora" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-left">
              <h2>Ms. Vaishnavi Kaushik</h2>
              <h4><b>Volunteer</b></h4>
              <p className="font-italic">
                Vaishanavi is a self-motivated law student from Gurugram
                University who is always keen to work for the society. She has
                been appointed as Student Council Member and Internship Cell
                Member in the University. An alumni of University of Delhi, she
                was the President of E-journal Department of Mata Sundri
                College. She was also a committee member of internal
                committee in her college. She has completed written and spoken
                English course from Trinity College London, Gurugram. During
                her school days, she won numerous certificates and medals and
                volunteered at Anganwadi at Bhondsi, Haryana
              </p>
            </div>
          </div>
          <hr />


        </div>
      </section>

    </div>
  );
};

export default About;
