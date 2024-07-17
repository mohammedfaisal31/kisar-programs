import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/3">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 2</h2>
        <h2>Day 1 - 26th July, 2024</h2>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Workshop II - Sperm Sorter</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time-slot">9:00 - 9:15 am</td>
            <td>Introduction</td>
            <td>Dr Ashwini G B</td>
          </tr>
          <tr>
            <td className="time-slot">9:15 - 11:30 am</td>
            <td>SS-I (Chairpersons- )</td>
            <td>Chairpersons: Dr Anu Sadashiv, Mr Dileep Kumar</td>
          </tr>
          <tr>
            <td className="time-slot">9:15 - 9:45 am</td>
            <td>Sperm preparation for IVF & ICSI</td>
            <td>Dr Ravindranath Nirvani</td>
          </tr>
          <tr>
            <td className="time-slot">9:45 - 10:15 am</td>
            <td>DFI when and for whom</td>
            <td>Dr Sudha Padmashri</td>
          </tr>
          <tr>
            <td className="time-slot">10:15 - 10:45 am</td>
            <td>Poor Ovarian Reserve - what all an embryologist should know?</td>
            <td>Dr Krishna Chaitanya</td>
          </tr>
          <tr>
            <td className="time-slot">10:45 - 11:15 am</td>
            <td>Semen culture and its relevance in IVF/ICSI</td>
            <td>Dr Feseena Seethi</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              11:15 - 11:30 am TEA BREAK
            </td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 1:30 pm</td>
            <td>SS-II (Chairpersons: Dr Rashmi Naik, Dr Nandishwar Patil)</td>
            <td>Dr Vijayalakshmi Kurnool, Mr Hemanth Kumar</td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 11:50 pm</td>
            <td>Microfluidics</td>
            <td>Dr Keshav Malhotra</td>
          </tr>
          <tr>
            <td className="time-slot">11:50 - 12:10 pm</td>
            <td>IMSI: In or out?</td>
            <td>Dr Parashuram</td>
          </tr>
          <tr>
            <td className="time-slot">12:10 - 12:30 pm</td>
            <td>Magnetic assisted sperm selection</td>
            <td>Dr Sujatha</td>
          </tr>
          <tr>
            <td className="time-slot">12:30 - 12:50 pm</td>
            <td>ESHRE recommendations on add-ons in reproductive medicines</td>
            <td>Dr Revathy Sadasivam</td>
          </tr>
          <tr>
            <td className="time-slot">12:50 - 1:20 pm</td>
            <td>Keynote address: Consistent practice in high-performing IVF clinics</td>
            <td>Dr Poornima Durga</td>
          </tr>
          <tr>
            <td className="time-slot">1:20 - 1:30 pm</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:30 to 2:15 pm LUNCH
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 1: PGT Embryo under scrutiny (Chairpersons: Dr Rashmi Naik, Dr Nandishwar Patil)
            </th>
          </tr>
          <tr>
            <td className="time-slot">2:15 - 2:35 pm</td>
            <td>PICSI</td>
            <td>Dr Charulatha Chaterji</td>
          </tr>
          <tr>
            <td className="time-slot">2:35 - 2:55 pm</td>
            <td>Embryo Biopsy: Finest art of ART</td>
            <td>Dr Varsha Samson Roy</td>
          </tr>
          <tr>
            <td className="time-slot">2:55 - 3:15 pm</td>
            <td>The puzzle of Mosaicism
            </td>
            <td>Dr Charu Datt Joshi</td>
          </tr>
          <tr>
            <td className="time-slot">3:15 - 3:35 pm</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              3:35 - 3:45 pm TEA BREAK
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 2: Embryo assessment (Chairpersons: Dr Sudha Padmashri, Dr Revathy Sadasivam)
            </th>
          </tr>
          <tr>
            <td className="time-slot">3:45 - 4:05 pm</td>
            <td>Morphokinetics</td>
            <td>Dr Anupama (Germany)</td>
          </tr>
          <tr>
            <td className="time-slot">4:05 - 4:25 pm</td>
            <td>Future status of PGT & ni-PGT</td>
            <td>Dr Akash Agarwal</td>
          </tr>
          <tr>
            <td className="time-slot">4:25 - 4:45 pm</td>
            <td>AI in embryo selection</td>
            <td>Dr Goral Gandhi</td>
          </tr>
          <tr>
            <td className="time-slot">4:45 - 5:05 pm</td>
            <td>Does mitochondrial DNA in Euploid blastocysts
              affect implantation</td>
            <td>Dr Satya Balasubramanyam</td>
          </tr>
          <tr>
            <td className="time-slot">5:05 - 5:20 pm</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">Panel Discussion: Fertility Preservation</th>
          </tr>

          <tr>
            <td className="time-slot">5:20 - 6:10 pm</td>
            <td>Moderator:</td>
            <td>Dr Shobhana Patted/ Dr Madhuri Patil</td>
          </tr>

          <tr>
            <td className="time-slot">5:20 - 6:10 pm</td>
            <td>Panelists:</td>
            <td>Dr Shilpa Haresh, Dr Sridurga, Dr Saroja, Dr Sangeetha, Dr
              Sneha Shetty, Dr Asha Gangane, Dr Srividya, Dr Jaishree</td>
          </tr>

          <tr>
            <td className="time-slot">6:10 - 7:00 pm</td>
            <td>Quiz</td>
            <td></td>
          </tr>

          <tr>
            <td className="break" colSpan="3">
              7:30 PM CULTURAL EVENTS FOLLOWED BY DINNER
            </td>
          </tr>
        </tbody>
      </table>
      <div className="coordinators">Hall Coordinators: Dr Maheshwari M, Dr Sreeja Kiran, Dr Anupama Patil</div>
      <div className="nav-btns">
        <Link to="/1">
          <button className="arrow-button">&larr;</button>
        </Link>
        <Link to="/3">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page2;
