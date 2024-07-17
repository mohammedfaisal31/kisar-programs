import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/2">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/4">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 1</h2>
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
              Session 3: Gyneac leading to infertility(Chairperson: Dr Shilpa Reddy, Dr Chinmayee, Dr Sneha J)
            </th>
          </tr>
          <tr>
            <td className="time-slot">9:00 - 9:20 am</td>
            <td>Change in Diagnostic criteria over time in PCOS.</td>
            <td>Dr Sheela Balakrishnan</td>
          </tr>
          <tr>
            <td className="time-slot">9:20 - 9:40 am</td>
            <td>Pretreatment to MAR in PCOS</td>
            <td>Dr Radha Vembhu</td>
          </tr>
          <tr>
            <td className="time-slot">9:40 - 10:00 am</td>
            <td>Critical analysis of ART in endometriosis</td>
            <td>Dr Dhanabhagyam</td>
          </tr>
          <tr>
            <td className="time-slot">10:15 - 10:45 am</td>
            <td>Poor Ovarian Reserve - what all an embryologist should know?</td>
            <td>Dr Krishna Chaitanya</td>
          </tr>
          <tr>
            <td className="time-slot">10:00 - 10:20 am</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              11:15 - 11:30 am TEA BREAK
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 4: : Uterus - The Sanctum Santorum(Chairperson: Dr Chaitra, Dr Shalini, Dr Geeta Uttur)
            </th>
          </tr>
          <tr>
            <td className="time-slot">10:35 - 10:55 am</td>
            <td>Isthmocele: A new cause of infertility</td>
            <td>Dr Surakshit Batina</td>
          </tr>
          <tr>
            <td className="time-slot">10:55 - 11:15 am</td>
            <td>ERA: is it bygone?</td>
            <td>Dr Padmaja </td>
          </tr>
          <tr>
            <td className="time-slot">11:15 - 11:35 am</td>
            <td>Microbiome: Does it help in implantation</td>
            <td>Dr Asha Baxi</td>
          </tr>
          <tr>
            <td className="time-slot">11:35 - 11:55 am</td>
            <td>PGT-A Use and abuse</td>
            <td>Dr Devika Gunasheela</td>
          </tr>
          <tr>
            <td className="time-slot">12:00 - 1:00 pm</td>
            <td colSpan={"2"}>ISAR Presidential Oration: "Tic-Toc Y: Cracking the Code of paternal ageing" Dr Ameet Patki
              Chairpersons: Dr Manjunath C S, Dr Nivedita Shetty, Dr Ashwini G B</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:30 to 2:15 pm LUNCH
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session: 5: Chairpersons: Dr Anupama Gadag, Dr Sushma V Shivanagutti
            </th>
          </tr>
          <tr>
            <td className="time-slot">1:40 - 2:10 pm</td>
            <td>Keynote address: What are the factors which
              affects cycle to cycle variability in quantity and quality of
              oocytes during IVF cycles?</td>
            <td>Dr Rama Raju</td>
          </tr>
          <tr>
            <td className="time-slot">2:10 - 2:40 pm</td>
            <td>Keynote address: SET in patients (35 years & )35
              years in Indian scenarios
            </td>
            <td>Dr K U Kunjimoideen</td>
          </tr>
          <tr>
            <td className="time-slot">2:40 - 3:10 pm</td>
            <td>Keynote address: Impact of endometriosis and its
              surgery on embryo quality</td>
            <td>Dr Sujata Kar</td>
          </tr>

          <tr>
            <th colSpan="3" className="session-title">
              Session: 6: Chairpersons: Dr Shilpa Haresh, Dr Sneha Santosh
            </th>
          </tr>
          <tr>
            <td className="time-slot">3:10 - 3:50 pm</td>
            <td>Debate: Extensive hormonal monitoring of
              IVF cycle increases outcomes</td>
            <td></td>
          </tr>
          <tr>
            <td className="time-slot">3:10 - 3:25 pm</td>
            <td>For
            </td>
            <td>Dr Rupa Rajashekhar</td>
          </tr>
          <tr>
            <td className="time-slot">3:25 - 3:40 pm</td>
            <td>Against</td>
            <td>Dr Apoorva Pallam Reddy</td>
          </tr>
          <tr>
            <td className="time-slot">3:40 - 3:50 pm</td>
            <td>Expert Comment</td>
            <td>Dr Prashant Joshi</td>
          </tr>
          <tr>
            <td className="time-slot">3:50 - 4:20 pm</td>
            <td>Keynote address: Clinical and Laboratory Parameters
              affecting the euploidy rate</td>
            <td>Dr Nivedita Shetty</td>
          </tr>

          <tr>
            <th colSpan="3" className="session-title">
              Session: 7: Dr Dwarakanath, Dr Rubeena Zainab
            </th>
          </tr>
          <tr>
            <td className="time-slot">4:20 - 5:00 pm</td>
            <td>Debate: Natural/Modified natural FET protocol is better
              than HRT protocol</td>
            <td>Dr Rama Raju</td>
          </tr>
          <tr>
            <td className="time-slot">4:20 - 4:35 pm</td>
            <td>For
            </td>
            <td>Dr Mekhala Dwarakanath</td>
          </tr>
          <tr>
            <td className="time-slot">4:35 - 4:50 pm </td>
            <td>Against</td>
            <td>Dr Swapna Yesireddy</td>
          </tr>
          <tr>
            <td className="time-slot">4:35 - 4:50 pm </td>
            <td>Expert Comment</td>
            <td>Dr Runa Acharya</td>
          </tr>

          <tr>
            <td className="time-slot">5:00 - 5:20 pm </td>
            <td>Greed for more oocytes: Are we justified?</td>
            <td>Dr Sumana Gurunath</td>
          </tr>
          <tr>
            <td className="time-slot">5:20 - 6:20 pm</td>
            <td>Panel Discussion: Practical Management of poor responders
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Moderator:</td>
            <td>Dr Ashwini G B, Dr Santosh Gupta</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Panelists:</td>
            <td>Dr Yogitha Rao, Dr Phani Madhuri, Dr Chaitra S K, Dr
              Savitha Mahesh, Dr Animisha, Dr Aruna Kumari, Dr Sajja
              Padma, Dr Sindhuja, Dr Prashant Adiga
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
      <div className="coordinators">Hall Coordinators : Dr. Yogitha Rao | Dr. Savita Keranahalli</div>
      <div className="nav-btns">
        <Link to="/2">
          <button className="arrow-button">&larr;</button>
        </Link>
        <Link to="/4">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page3;
