import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page6 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/5">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 2</h2>
        <h2>Day 3 - 28th July, 2024</h2>
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
            <td className="session-title">9:00 - 9:32 am</td>
            <td className="session-title">Session 7 :  Short Capsule-I (6+2 minutes)</td>
            <td className="session-title">Chairpersons: Dr Meeta Angadi, Dr Prabhu Patil.</td>
          </tr>

          <tr>
            <td className="time-slot"></td>
            <td>(1) Use of Atosiban</td>
            <td>Dr Aruna Ashok</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>(2) Uterine NK cell</td>
            <td>Dr Anupama Patil</td>
          </tr><tr>
            <td className="time-slot"></td>
            <td>(3) PRP for RIF</td>
            <td>Dr Navyashree M S</td>
          </tr><tr>
            <td className="time-slot"></td>
            <td>(4)  IVF Pregnancies: Why they are different from
              natural pregnancies?</td>
            <td>Dr Vishwanath Shivanagutti</td>
          </tr>

          <tr>
            <td className="session-title">9:35 - 10:45 am</td>
            <td className="session-title">Session 8 : Mixed Bag</td>
            <td className="session-title">Chairpersons: Dr Sowmya Dinesh ,
              Dr Komal Revankar</td>
          </tr>
          <tr>
            <td className="time-slot">9:35 - 9:50 am</td>
            <td>Non-conventional use of letrozole in infertility
              management</td>
            <td>Dr Kundan Ingale</td>
          </tr>
          <tr>
            <td className="time-slot">9:50 - 10:05 am</td>
            <td>Does RIF really exist?</td>
            <td>Dr Kedar Ganla</td>
          </tr><tr>
            <td className="time-slot">10:05 - 10:20 am</td>
            <td>DOR and Management</td>
            <td>Dr Navyashree M S</td>
          </tr><tr>
            <td className="time-slot">10:20 - 10:35 am</td>
            <td>MAR in PCOS</td>
            <td>Dr Seema Pandey</td>
          </tr>

          <tr>
            <td className="time-slot">10:35 - 10:45 am</td>
            <td>Discussion</td>
            <td>Discussion</td>
          </tr>

          <tr>
            <td className="session-title">10:45 -11:20 am</td>
            <td className="session-title">Session 9 : Short Capsule-II (6+2 minutes)</td>
            <td className="session-title">Chairpersons: Dr Prathibha G, Dr Vijay Kumar S
            </td>
          </tr>

          <tr>
            <td className="time-slot"></td>
            <td>(1) Ovulation trigger</td>
            <td>Dr.Kavya Sharma</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>(6)  Growth Hormone in POR</td>
            <td>Dr Rashmi Nayak</td>
          </tr><tr>
            <td className="time-slot"></td>
            <td>(7)  Measuring progesterone in FET </td>
            <td>Dr Sowmya Mahesh koregal</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>(8)Testosterone for POR</td>
            <td>Dr Sangeetha</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              11:20 - 11:30 am TEA BREAK
            </td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 12:15 pm</td>
            <td>Plannery Session :</td>
            <td></td>
          </tr>

          <tr>
            <td className="session-title">12:15 - 1:35 pm</td>
            <td className="session-title">Session 10 : Different Perspective </td>
            <td className="session-title">Chairpersons: Dr Archana Karthik, Dr Guru
              Pattar</td>
          </tr>
          <tr>
            <td className="time-slot">12:15 - 12:30 pm</td>
            <td>Role of HSG in infertility</td>
            <td>Dr.Mahesh Koregal</td>
          </tr>
          <tr>
            <td className="time-slot">12:30 - 12:45 pm</td>
            <td>Natural conception after a live birth via
              ART</td>
            <td>Dr Kalpana</td>
          </tr><tr>
            <td className="time-slot">12:45 -1:00 pm</td>
            <td>Sustainable living : What doctors need to know</td>
            <td>Dr.Shanthi Tummala</td>
          </tr><tr>
            <td className="time-slot">1:00 - 1:15 pm</td>
            <td>Risk factors for poor oocyte yield and oocyte
              immaturity after GnRH agonist triggering</td>
            <td>Dr Kavitha Gautam</td>
          </tr>

          <tr>
            <td className="time-slot">1:15 - 1:30 pm</td>
            <td>Discussion</td>
            <td>Discussion</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:30 - 1:45 pm VALEDICTORY FUNCTION
            </td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:45 PM LUNCH
            </td>
          </tr>
        </tbody>
      </table>
      <div className="coordinators">Hall Coordinators : Dr. Sneha J | Dr. Smrithi D Nayak</div>
      <div className="nav-btns">
        <Link to="/5">
          <button className="arrow-button">&larr;</button>
        </Link>
        <Link to="/">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page6;
