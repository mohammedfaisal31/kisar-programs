import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page5 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/4">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/6">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 1</h2>
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
            <td className="session-title">9:00 - 10:20 am</td>
            <td className="session-title">Session 8 : Male Infertility - I</td>
            <td className="session-title">Chairpersons: Dr Arif, Dr Vidyashree G Poojari.</td>
          </tr>

          <tr>
            <td className="time-slot">9:00 - 9:20 am</td>
            <td>Medical management of male infertility</td>
            <td>Dr Vinod</td>
          </tr>
          <tr>
            <td className="time-slot">9:40 - 10:00 am</td>
            <td>Sperm retrieval surgeries in azoospermia </td>
            <td>Dr Karthikeyen, Dr Arun Karthik</td>
          </tr>
          <tr>
            <td className="time-slot">10:00 - 10:20 am</td>
            <td>Discussion</td>
            <td>Discussion</td>
          </tr>
          <tr>
            <td className="session-title">10:20 - 11:40 am</td>
            <td className="session-title">Session 9 : Male Infertility - II</td>
            <td className="session-title">Chairpersons: Dr Bhavya Sunil, Dr Chaitra Naik</td>
          </tr>
          <tr>
            <td className="time-slot">10:20 - 10:40 am</td>
            <td>Can we improve surgical sperm extraction by
              using endocrine stimulation protocol?</td>
            <td>Dr Vasan S S</td>
          </tr>
          <tr>
            <td className="time-slot">10:40 - 11:00 am</td>
            <td>Role of sperm in embryogenesis: Clinical
              perspective
            </td>
            <td>Dr M S Srinivas</td>
          </tr>

          <tr>
            <td className="time-slot">11:00 - 11:15 am</td>
            <td>Discussion</td>
            <td>Discussion</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              11:40 - 11:50 am am TEA BREAK
            </td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 12:15 pm</td>
            <td>Plannery Session: Overian ageing: Defying
              time, Defying the clock.

            </td>
            <td>Dr Nandita Palshetkar
              Chairpersons: Dr Lavanya Kiran, Dr Anuradha
              Khar, Dr Jyoti Budi</td>
          </tr>

          <tr>
            <td className="session-title">12:35 - 1:30 pm</td>
            <td className="session-title">Session 10: Endometriosis / Adenomyosis</td>
            <td className="session-title">Chairpersons: Dr Bhavana Girish,
              Dr Vidya Santosh
            </td>
          </tr>

          <tr>
            <td className="time-slot">12:35 - 12:50 pm</td>
            <td>Role of USG/MRI in endometriosis
            </td>
            <td>Dr Supriya Sheshadri</td>
          </tr>

          <tr>
            <td className="time-slot">12:50 - 1:05 pm</td>
            <td>Adenomyosis: Surgical/Medical option and
              outcome
            </td>
            <td>Dr Kavitha CH</td>
          </tr>

          <tr>
            <td className="time-slot">1:05 - 1:20 pm</td>
            <td>Keynote address: Critical analysis of fertility
              enhancing surgeries
            </td>
            <td>Dr Ramesh B</td>
          </tr>

          <tr>
            <td className="time-slot">1:20 - 1:30 pm</td>
            <td>Discussion
            </td>
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

export default Page5;
