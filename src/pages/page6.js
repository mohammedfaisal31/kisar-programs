import React from 'react';
import '../App.css'; // Ensure you have this CSS file for custom styles
import { Link } from 'react-router-dom';

const scheduleDataDay = [
  { time: "8:00 - 9:00 AM",
 session: "Free Papers",
  speaker: "Free Papers" 
},
  {
    time: "9:00 - 10:20 AM",
    session: "Session 3: Gynaec leading to infertility",
    speaker: "Chairperson: Dr Shilpa Reddy, Dr Chinmayee, Dr Sneha J"
  },
  {
    time: "9:00 - 9:20 AM",
    session: "Change in Diagnostic criteria over time in PCOS.",
    speaker: "Dr Sheela Balakrishnan"
  },
  {
    time: "9:20 - 9:40 AM",
    session: "Pretreatment to MAR in PCOS",
    speaker: "Dr Radha Vembhu"
  },
  {
    time: "9:40 - 10:00 AM",
    session: "Critical analysis of ART in endometriosis",
    speaker: "Dr Dhanabhaagyam"
  },
  {
    time: "10:00 - 10:20 AM",
    session: "Discussion",
    speaker: "Discussion"
  },
  {
    time: "10:20 - 10:35 AM",
    session: "TEA BREAK",
    speaker: "TEA BREAK"
  },
  {
    time: "10:35 - 1:00 PM",
    session: "Session 4: Uterus - The Sanctum Santorum",
    speaker: "Chairpersons: Dr Chaitra, Dr Shalini, Dr Geeta Uttur"
  },
  {
    time: "10:35 - 10:55 AM",
    session: "Isthmocoele: A new cause of infertility",
    speaker: "Dr Surakshit Batina"
  },
  {
    time: "10:55 - 11:15 AM",
    session: "ERA: is it bygone?",
    speaker: "Dr Padmaja"
  },
  {
    time: "11:15 - 11:35 AM",
    session: "Microbiome: Does it help in implantation",
    speaker: "Dr Asha Baxi"
  },
  {
    time: "11:35 - 11:55 AM",
    session: "PGT-A Use and abuse",
    speaker: "Dr Devika Gunasheela"
  },
  {
    time: "11:55 - 12:00 AM",
    session: "Discussion",
    speaker: "Discussion"
  },
  {
    time: "12:00 - 1:00 PM",
    session: "ISAR Presidential Oration: 'Tic-Toc Y: Cracking the Code of paternal ageing' Dr Ameet Patki",
    speaker: "Chairpersons: Dr Manjunath C S, Dr Nivedita Shetty, Dr Ashwini G B"
  },
  {
    time: "1:00 - 1:40 PM",
    session: "LUNCH",
    speaker: "LUNCH"
  },
  {
    time: "1:40 - 2:10 PM",
    session: "Session 5",
    speaker: "Chairpersons: Dr Anupama Gadag, Dr Sushma V Shivanagutti"
  },
  {
    time: "1:40 - 2:10 PM",
    session: "Keynote address: What are the factors which affects cycle to cycle variability in quantity and quality of oocytes during IVF cycle?",
    speaker: "Dr Rama Raju"
  },
  {
    time: "2:10 - 2:40 PM",
    session: "Keynote address: ESET in patients <35 years & >35 years in Indian scenarios",
    speaker: "Dr K U Kumjimoideen"
  },
  {
    time: "2:40 - 3:10 PM",
    session: "Keynote address: Impact of endometriosis and its surgery on embryo quality",
    speaker: "Dr Sujata Kar"
  },
  {
    time: "3:10 - 3:50 PM",
    session: "Session 6",
    speaker: "Chairpersons: Dr Shilpa Haresh, Dr Sneha Santosh"
  },
  {
    time: "3:10 - 3:25 PM",
    session: "Debate: Extensive hormonal monitoring of IVF cycle increases outcomes",
    speaker: "For: Dr Rupa Rajashekhar"
  },
  {
    time: "3:25 - 3:40 PM",
    session: "Against: Dr Apoorva Pallam Reddy",
    speaker: "Against: Dr Apoorva Pallam Reddy"
  },
  {
    time: "3:40 - 3:50 PM",
    session: "Expert Comment",
    speaker: "Dr Prashant Joshi"
  },
  {
    time: "3:50 - 4:20 PM",
    session: "Keynote address: Clinical and Laboratory Parameters affecting the euploidy rate",
    speaker: "Dr Nivedita Shetty"
  },
  {
    time: "4:20 - 5:00 PM",
    session: "Session 7",
    speaker: "Dr Dwarakanath, Dr Rubeena Zainab"
  },
  {
    time: "4:20 - 4:35 PM",
    session: "Debate: Natural/Modified natural FET protocol is better than HRT protocol",
    speaker: "For: Dr Mekhala Dwarakanath"
  },
  {
    time: "4:35 - 4:50 PM",
    session: "Against: Dr Swapna Yesisreddy",
    speaker: "Against: Dr Swapna Yesisreddy"
  },
  {
    time: "4:50 - 5:00 PM",
    session: "Expert Comment",
    speaker: "Dr Runa Acharya"
  },
  {
    time: "5:00 - 5:20 PM",
    session: "Greed for more oocytes: Are we justified?",
    speaker: "Dr Sumana Gurunath"
  },
  {
    time: "5:20 - 6:20 PM",
    session: "Panel Discussion: Practical Management of poor responders",
    speaker: "Moderator: Dr Ashwini G B, Dr Santosh Gupta"
  },
  {
    time: "5:20 - 6:20 PM",
    session: "Panelists: Dr Yogitha Rao, Dr Phani Madhuri, Dr Chaitra S K, Dr Savitha Mahesh, Dr Arnimish, Dr Aruna Kumar, Dr Sajja Padma, Dr Sindhuj, Dr Prashant Adiga.",
    speaker: "Panelists: Dr Yogitha Rao, Dr Phani Madhuri, Dr Chaitra S K, Dr Savitha Mahesh, Dr Arnimish, Dr Aruna Kumar, Dr Sajja Padma, Dr Sindhuj, Dr Prashant Adiga."
  },
  {
    time: "6:30 - 7:00 PM",
    session: "Inauguration",
    speaker: "Inauguration"
  },
  {
    time: "7:00 - 7:30 PM",
    session: "Dronacharya and young achievers award ceremony from ISAR",
    speaker: "Dronacharya and young achievers award ceremony from ISAR"
  },
  {
    time: "7:30 PM",
    session: "CULTURAL PROGRAM FOLLOWED BY DINNER",
    speaker: "CULTURAL PROGRAM FOLLOWED BY DINNER"
  }
];

const Page6 = () => {
  return (
    <div className="App">
      <h1>Scientific Program</h1>
      <h2>Hall 2</h2>
      <h2>Day 3 - 28th July, 2024</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Topic</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          {scheduleDataDay.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.session}</td>
              <td>{item.speaker}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="coordinators">
        <p>Hall Coordinators: Dr. Yogitha Rao | Dr. Savita Keranahalli</p>
      </div>
      <div className='nav-btns'>
        <Link to='/5'>
      <button>
        &larr; {/* Left arrow */}
      </button>
      </Link>
    </div>
    </div>
  );
};

export default Page6;