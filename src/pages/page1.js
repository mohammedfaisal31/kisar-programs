import React from "react";
import "../App.css"; // Ensure you have this CSS file for custom styles
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/6">
          <button className="arrow-button">&larr;</button>
        </Link>
        <span className="nav-message">Use the arrows to switch between pages</span>
        <Link to="/2">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
      <div className="header">
        <h1>Scientific Program</h1>
        <h2>Hall 1</h2>
        <h2>Day 1 - 26th July, 2024</h2>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Workshop 1: Reproductive Immunology</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time-slot">8:00 - 9:00 am</td>
            <td className="workshop-title">Free Paper Presentation</td>
            <td></td>
          </tr>
          <tr>
            <td className="time-slot">9:00 - 9:15 am</td>
            <td className="workshop-title">Introduction</td>
            <td>Dr Rashmi Yogish</td>
          </tr>
          <tr>
            <td className="time-slot">9:15 - 11:05 am</td>
            <td className="workshop-title">RI-I (Chairperson -)</td>
            <td>Dr Arunima Haldar, Dr Kavya Pradeep</td>
          </tr>
          <tr>
            <td className="time-slot">9:15 - 9:45 am</td>
            <td>
              Going back to basic-innate and adaptive immunity in reproductive
              system
            </td>
            <td>Dr Aruna Ashok</td>
          </tr>
          <tr>
            <td className="time-slot">9:45 - 10:15 am</td>
            <td>Immune dysregulation in infertility and pregnancy loss</td>
            <td>Dr Mugdha Raut</td>
          </tr>
          <tr>
            <td className="time-slot">10:15 - 10:45 am</td>
            <td>
              Role of systemic inflammation index and Immunogenetics in
              Fertility
            </td>
            <td>Dr Vasanthi Palanivel</td>
          </tr>
          <tr>
            <td className="time-slot">10:45 - 11:15 am</td>
            <td>How Immune modulation strategies work in ART</td>
            <td>Dr Dharmanand</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              11:15 - 11:30 am TEA BREAK
            </td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 1:30 pm</td>
            <td className="workshop-title">RI-II (Chairperson -)</td>
            <td>Dr Chamaraju, Dr Nagesh, Dr Jyoti Bandi</td>
          </tr>
          <tr>
            <td className="time-slot">11:30 - 12:00 pm</td>
            <td>Immunogenetics-What is known already - A Global perspective</td>
            <td>Dr Vasanthi Palanivel</td>
          </tr>
          <tr>
            <td className="time-slot">12:00 - 12:45 pm</td>
            <td>
              Learning from case studies: Repeated Implantation Failure -
              Immunogenetics
            </td>
            <td>Dr Jayesh Amin</td>
          </tr>
          <tr>
            <td className="time-slot">12:45 - 1:30 pm</td>
            <td>
              Learning from case studies: Recurrent Miscarriages -
              Immunogenetics
            </td>
            <td>Dr Mohan Raut</td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              1:30 to 2:15 pm LUNCH
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 1: Fertility after 40 (Chairperson: Dr Sireesha Rani, Dr
              Savitha,, Dr Maheshwari)
            </th>
          </tr>
          <tr>
            <td className="time-slot">2:15 - 2:35 pm</td>
            <td>Newer drugs for older eggs</td>
            <td>Dr Jyothi Budi</td>
          </tr>
          <tr>
            <td className="time-slot">2:35 - 2:55 pm</td>
            <td>Can age-related infertility be prevented?</td>
            <td>Dr Vandana Hegde</td>
          </tr>
          <tr>
            <td className="time-slot">2:55 - 3:15 pm</td>
            <td>8 years of Poseidon stratification - where do we stand?</td>
            <td>Dr Vani Pujar</td>
          </tr>
          <tr>
            <td className="time-slot">3:15 - 3:30 pm</td>
            <td>Discussion</td>
            <td></td>
          </tr>
          <tr>
            <td className="break" colSpan="3">
              3:30 - 3:40 pm TEA BREAK
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="session-title">
              Session 2: Tricks in IVF clinic (Chairperson: Dr Sapna Vijaywada,
              Dr Suma Varsha)
            </th>
          </tr>
          <tr>
            <td className="time-slot">3:40 - 4:10 pm</td>
            <td>
              Keynote Address: Artificial Intelligence in Reproductive Medicine
            </td>
            <td>Dr Hrishikesh Pai</td>
          </tr>
          <tr>
            <td className="time-slot">4:10 - 4:30 pm</td>
            <td>Step by step method to screen the pelvis-tips and tricks</td>
            <td>Dr Aarthi Deendayal</td>
          </tr>
          <tr>
            <td className="time-slot">4:30 - 4:50 pm</td>
            <td>Does abstinence of male partner really affect ART results?</td>
            <td>Dr Sachin Kulkarni</td>
          </tr>
          <tr>
            <td className="time-slot">4:50 - 5:10 pm</td>
            <td>PPOS: The rising star</td>
            <td>Dr Padmalatha Yarasi</td>
          </tr>
          <tr>
            <td className="time-slot">5:10 - 5:30 pm</td>
            <td>Management of fluid in endometrium</td>
            <td>Dr Vasundara Jagannath</td>
          </tr>
          <tr>
            <td className="time-slot">5:30 - 6:20 pm</td>
            <td>Panel Discussion: Recurrent Implantation Failure</td>
            <td></td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Moderator:</td>
            <td>Dr Lavanya Kiran, Dr Anuradha Khar</td>
          </tr>
          <tr>
            <td className="time-slot"></td>
            <td>Panelists:</td>
            <td>
              Dr Shireeja, Dr Prathiba, Dr Anu Sadashiv, Dr Nalini, Dr
              Vijayalakshmi Pillai, Dr Dilip, Dr Hemalatha, Dr Pramoda Yedulla
              Reddy.
            </td>
          </tr>
          <tr>
            <td>6:20 - 7:10 pm</td>
            <td>Quiz</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Quiz Master: Dr Ashwath and Dr Ramesh P</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>5 Teams, 2 Clinician & 1 Embryologist in each team</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>(One team from each state)</td>
            <td></td>
          </tr>
          <tr>
            <td className="break">7:30 PM</td>
            <td className="break">CULTURAL EVENTS FOLLOWED BY DINNER</td>
            <td className="break">CULTURAL EVENTS FOLLOWED BY DINNER</td>
          </tr>
        </tbody>
      </table>
      <div className="coordinators">Hall Coordinators: Dr Anu Sadashiv B, Dr  Sangeetha M J, Dr . Prathiba Govindaiah</div>
      <div className="nav-btns">
        <Link to="/6">
          <button className="arrow-button">&larr;</button>
        </Link>
        <Link to="/2">
          <button className="arrow-button">&rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
