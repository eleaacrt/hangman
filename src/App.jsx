import { AllCases } from './components/allcases';
import { Hangman } from './components/hangman/Hangman';
import { Word } from './components/word/Word';
import { Button } from './components/button/Button'
import { useState, useEffect } from 'react';


const App = () => {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [correctLetters, setcorrectLetters] = useState([]);
  const [nbDifferentLetters, setNbDifferentLetters] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const API_URL = 'http://localhost:3001';
  const [word, setWord] = useState('');
  
  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "locale = en-EN",
    })
      .then((res) => res.json())
      .then((data) => {
        setWord(data.word);
        console.log(data.word);
      });
  }, []);

    useEffect(() => {
        setNbDifferentLetters([...new Set(word.split(''))].length);
    }, [word]);

    console.log(nbDifferentLetters);


  return (

    <>
      <h1>Welcome on Hangman Game</h1>

      <p class="subtitle">press start button to take random word</p>

      <div className="div-button">
        <Button
              OnClick={()=>
                  window.location.reload()
              }
        >
                Start
        </Button>
      </div>

      <section className="game">
        <Hangman
          mistakes={mistakes}
        />
        <div className="container-right">
        
          <Word correctLetters={correctLetters}>{word}</Word>
          <div className="div-allcases">
              {alphabet.map((letter) => {
                return (
                  <AllCases
                    letter={letter}
                    onClick={() => {
                      console.log(letter)
                      if (word.includes(letter)) {
                        setcorrectLetters([...correctLetters, letter])
                      } else {
                        setMistakes(mistakes + 1)
                      }
                    }}
                  />
                )})}
          </div>
          <p class="p-text">
            {
              nbDifferentLetters === correctLetters.length ?
              "You won" :
              mistakes === 11 ? "You lost, the word was : "+word : null
            }
          </p>
        </div>
      </section>

    </>

  );

};

export default App;
