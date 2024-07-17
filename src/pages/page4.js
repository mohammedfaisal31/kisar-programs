import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page4 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/3">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/5">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 2</h2>
        <h2>Day 2 - 27th July, 2024</h2>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Topic</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time-slot">8:00 - 9:00 am</td>
            <td>Free papers</td>
            <td></td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 3: Endometrium(Chairperson: Dr Vasundara Tyagarajan, Dr Anupama Gadag)
            </th>
          </tr>
          <tr>
            <td className="time-slot">9:00 - 9:20 am</td>
            <td>Indicators of good endometrial response</td>
            <td>Dr K S Rupa Iyangar</td>
          </tr>
          <tr>
            <td className="time-slot">9:20 - 9:40 am</td>
            <td>Pretreatment to MAR in PCOS</td>
            <td>Dr Radha Vembhu</td>
          </tr>
          <tr>
            <td className="time-slot">9:20 - 9:40 am</td>
            <td>ART laws & possible litigations in IUI clinics</td>
            <td>Dr Rekha Rajendrakumar</td>
          </tr>
          <tr>
            <td className="time-slot">9:40 - 10:00 am</td>
            <td>Personalized luteal support</td>
            <td>Dr Nirmala</td>
          </tr>
          <tr>
            <td className="time-slot">10:00 - 10:20 am</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              10:20 - 10:35 am TEA BREAK
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              10:35 - 12:00 am : IASRM Session 4: Regenerative medicine in infertility(Chairpersons: Dr Mangala Devi Dr Satwik Metgud)
            </th>
          </tr>
          <tr>
            <td className="time-slot">10:35 - 10:55 am</td>
            <td>Stem cell & Regenerative Medicine in Menopause &
              Premature Ovarian Failure</td>
            <td>Dr Prabhu Mishra </td>
          </tr>
          <tr>
            <td className="time-slot">10:55 - 11:15 am</td>
            <td>Platelet Rich Plasma Applications in Infertility &
              Gynecological Diseases</td>
            <td>Dr Manish Mahajan</td>
          </tr>
          <tr>
            <td className="time-slot">11:15 - 11:35 am</td>
            <td>Stem cell therapy in Thin Endometrium & Asherman Syndrome</td>
            <td>Dr Suyesh Khanijao</td>
          </tr>
          <tr>
            <td className="time-slot">11:35 - 11:55 am</td>
            <td>Interventions to optimize embryo transfer</td>
            <td>Dr Shwetha Agarwal </td>
          </tr>
          <tr>
            <td className="time-slot">11:50 am - 12:00 pm</td>
            <td colSpan={"2"}>Discussion</td>
          </tr>
          <tr>
            <td className="time-slot">12:00 - 1:00 pm</td>
            <td colSpan={"2"}>ISAR Presidential Oration: "Tic-Toc Y: Cracking the Code of paternal ageing" Dr Ameet Patki.
              Chairpersons: Dr Manjunath C S, Dr Nivedita Shetty, Dr Ashwini G B</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:00 to 1:40 pm LUNCH
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session: 5: Chairpersons: Chairpersons: Dr Ranganath, Dr Jyothi T R
            </th>
          </tr>
          <tr>
            <td className="time-slot">1:40 - 2:10 pm</td>
            <td>Keynote address: Non-conventional way of ovarian
              stimulation: understanding and practicing</td>
            <td>Dr N Sanjeeva Reddy</td>
          </tr>
          <tr>
            <td className="time-slot">2:10 - 2:40 pm</td>
            <td>Keynote address: Use of AMH and AFC - in diagnosis
              and management of PCOS

            </td>
            <td>Dr Madhuri Patil</td>
          </tr>
          <tr>
            <td className="time-slot">2:40 - 3:20 pm</td>
            <td colSpan={"2"}>Debate: 3 Lesions inside uterine cavity (small polyp/mild
              adhesion/septum) in otherwise unexplained infertility - to
              touch or not to touch</td>

          </tr>

          <tr>
            <td className="time-slot">2:40 - 2:55 pm</td>
            <td>For</td>
            <td>Dr Lakshmi Paavna jagarlamudi</td>
          </tr>
          <tr>
            <td className="time-slot">2:55 - 3:10 pm</td>
            <td>Against
            </td>
            <td>Dr Jayarani Kamaraj</td>
          </tr>
          <tr>
            <td className="time-slot">3:10 - 3:20 pm</td>
            <td>Expert Comment</td>
            <td>Uma Shankar S N</td>
          </tr>
          <tr>
            <td className="time-slot">3:20 - 3:50 pm</td>
            <td>Management of obesity in infertility (Sponsored by
              Novo Nordisk)</td>
            <td>Dr Shriprada Vinekar</td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session: 6: Chairpersons: Dr Deepa Hanumasagar, Dr S Nagajyothi, Dr
              Sri Harsha
            </th>
          </tr>
          <tr>
            <td className="time-slot">3:50-4:20 pm</td>
            <td>Keynote address: Poor Responder: Is there an ideal protocol?</td>
            <td>Dr Pratik Tambe</td>
          </tr>
          <tr>
            <td className="time-slot">4:20 - 4:35 pm</td>
            <td>For
            </td>
            <td>Dr Chandana Lakhi Reddy</td>
          </tr>
          <tr>
            <td className="time-slot">4:35 - 4:50 pm </td>
            <td>Against</td>
            <td>Dr Kundavi Shankar</td>
          </tr>
          <tr>
            <td className="time-slot">4:35 - 4:50 pm </td>
            <td>Expert Comment</td>
            <td>Dr Vijaya Ganesh</td>
          </tr>

          <tr>
            <td className="time-slot">5:00 - 5:20 pm </td>
            <td>Future of COH</td>
            <td>Dr Fessi Louise</td>
          </tr>
          <tr>
            <td className="time-slot">5:20 - 6:20 pm</td>
            <td>Panel Discussion: : Cost cutting IVF - is it impactful?
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Moderator:</td>
            <td>Dr.Kamini Rao/ Dr Vaishnavi Rao</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Panelists:</td>
            <td>Dr Aruna Ashok, Dr Vijaya Bharathi, Dr Anupama, Dr
              Narmatha Elango, Dr Arshi Iqbal, Dr Maheshwari, Dr
              Smriti, Dr Gyathri
            </td>
          </tr>
          <tr>
            <td className="time-slot">6:30 - 7:00 pm</td>
            <td>Inauguration
            </td>
            <td>Inauguration</td>
          </tr>
          <tr>
            <td className="time-slot">7:00 - 7:30 pm</td>
            <td>Dronacharya and young achievers award ceremoney
              from ISAR</td>
            <td></td>
          </tr>

          <tr>
            <td className="break" colSpan="3">
              7:30 PM CULTURAL EVENTS FOLLOWED BY DINNER
            </td>
          </tr>
        </tbody>
      </table>
      <div className="coordinators">Hall Coordinators: Dr. Phani Madhuri V | Dr. Chaitra S K</div>
      <div className="nav-btns">
        <Link to="/3">
          <button className="arrow-button">&larr;</button>
        </Link>
        <Link to="/5">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page4;
