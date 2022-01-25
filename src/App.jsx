import { useEffect, useMemo, useState } from 'react';
import './app.css';
import  Quiz  from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const[username , setUsername]= useState(null);
  const [questionNumber , setQuestionNumber]= useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  
  const data = [
    {
      id: 1,
      question: " Which of these is a side dish usually prepared with curd and vegetables?",
      answers: [
        {
          text: "Kheer",
          correct: false,
        },
        {
          text: "Basundi",
          correct: true,
        },
        {
          text: "Raita",
          correct: true,
        },
        {
          text: "Rabdi",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    
    {
      id: 5,
      question: "What is said to someone who is being blessed to have a long life span?",
      answers: [
        {
          text: "Vijayi Bhava",
          correct: false,
        },
        {
          text: "Aayushmaan Bhava",
          correct: true,
        },
        {
          text: "Yashasvi Bhava",
          correct: false,
        },
        {
          text: "Saubhagyavatee Bhava",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of these animals does not have spots on their bodies in their adulthood?",
      answers: [
        {
          text: "giraffe",
          correct: false,
        },
        {
          text: "leopard",
          correct: false,
        },
        {
          text: "cheetah",
          correct: false,
        },
        {
          text: "lion",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "In which of these tournaments would you have witnessed Rohit Sharma's team playing against MS Dhoni's team?",
      answers: [
        {
          text: "T20 World Cup",
          correct: false,
        },
        {
          text: "ICC World Cup",
          correct: false,
        },
        {
          text: "World Test Championship",
          correct: false,
        },
        {
          text: "Indian Premiere League",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which of these combinations can be used in this science experiment to make the volcano erupt?",
      answers: [
        {
          text: "vinegar and baking soda",
          correct: true,
        },
        {
          text: "ice and turmeric",
          correct: false,
        },
        {
          text: "sugar and water",
          correct: false,
        },
        {
          text: "baking powder and oil",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Haider Ali and Tipu Sultan were rulers of which place?",
      answers: [
        {
          text: "Vijaynagar",
          correct: false,
        },
        {
          text: "Travancore",
          correct: false,
        },
        {
          text: "Banganapalle",
          correct: false,
        },
        {
          text: "Mysore",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "From which of these rivers did our country get its name India?",
      answers: [
        {
          text: "Sutlej",
          correct: false,
        },
        {
          text: "Sindhu",
          correct: true,
        },
        {
          text: "Shipra",
          correct: false,
        },
        {
          text: "Hindon",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "The mother of which of these characters from the Mahabharata was a rakshasi?",
      answers: [
        {
          text: "Abhimanyu",
          correct: false,
        },
        {
          text: "Ghatotkcha",
          correct: true,
        },
        {
          text: "Sahadev",
          correct: false,
        },
        {
          text: "Dushasana",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of these planets is often referred to as an ‘Ice Giant’?",
      answers: [
        {
          text: "Uranus",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "According to the Guinness World Records, who, in 2014, became the youngest director of a professionally made feature length film in the world?",
      answers: [
        {
          text: "Saugat Bista",
          correct: true,
        },
        {
          text: "Damien Chazelle",
          correct: false,
        },
        {
          text: "Master Kishan",
          correct: false,
        },
        {
          text: "Oriwa Hakarala",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the longest mountain range on Earth, either on land or underwater?",
      answers: [
        {
          text: "Himalayas",
          correct: false,
        },
        {
          text: "Mid Ocean Ridge",
          correct: true,
        },
        {
          text: "Andes",
          correct: false,
        },
        {
          text: "Transantarctic mountains",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "PK Garg and Homi D Motiwala are athletes from which sport, where they have also won a Rajiv Gandhi Khel Ratna Award?",
      answers: [
        {
          text: "Golf",
          correct: false,
        },
        {
          text: "Polo",
          correct: false,
        },
        {
          text: "Yachting",
          correct: true,
        },
        {
          text: "Ice Hockey",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Which of these is not one of the names of three of Akbar’s grandsons when they were briefly converted to Christianity after being handed over to Jesuit priests?",
      answers: [
        {
          text: "Don Felipe",
          correct: false,
        },
        {
          text: "Don Henrique",
          correct: false,
        },
        {
          text: "Don Carlos",
          correct: false,
        },
        {
          text: "Don Francisco",
          correct: true,
        },
      ],
    },
  ];
  
  
  
  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"₹ 1,000"},
      {id:2, amount:"₹ 2,000"},
      {id:3, amount:"₹ 3,000"},
      {id:4, amount:"₹ 5,000"},
      {id:5, amount:"₹ 10,000"},
      {id:6, amount:"₹ 20,000"},
      {id:7, amount:"₹ 40,000"},
      {id:8, amount:"₹ 80,000"},
      {id:9, amount:"₹ 1,60,000"},
      {id:10, amount:"₹ 3,20,000"},
      {id:11, amount:"₹ 6,40,000"},
      {id:12, amount:"₹ 12,50,000"},
      {id:13, amount:"₹ 25,00,000"},
      {id:14, amount:"₹ 50,00,000"},
      {id:15, amount:"₹ 1 Crore"},
      {id:16, amount:"₹ 7 Crore"},
    ].reverse(),
  []);

  useEffect(()=>{
   questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber - 1).amount);
  },[moneyPyramid, questionNumber])
  return (
    <div className="app">
       {username ?(
         <>
         <div className="main">
        {stop ? <h1 className='endText'>You earned: {earned}</h1> : (
       <>
        <div className="top">
          <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
           <Quiz data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        </div>
      </>
        )}
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
        {moneyPyramid.map(m=>(
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
        ))}
          
        </ul>
      </div>
         </>
       ) : <Start setUsername={setUsername}/>}

    </div>
  );
}

export default App;
