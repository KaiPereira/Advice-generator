import './App.scss';
import React from "react"
import axios from "axios"

function App() {
  const [advice, changeAdvice] = React.useState()

  React.useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
      .then(advice => changeAdvice(advice.data.slip))
  }, [])

  function changeAdviceFunction() {
    axios.get("https://api.adviceslip.com/advice")
      .then(advice => changeAdvice(advice.data.slip))
  }

  return (
    <main>{ advice &&
      <div className="card">
        <h1>ADVICE #{advice.id}</h1>
        <p className="cardDescription">{advice.advice}</p>
        <div className="cardDecoration">
          <div className="cardDecorationLine"></div>
          <i class="fa-solid fa-pause"></i>
          <div className="cardDecorationLine"></div>
        </div>
        <button className="newAdviceButton" onClick={changeAdviceFunction}>
          <i class="fa-solid fa-dice-four"></i>
        </button>
      </div>}
    </main>
  );
}

export default App;
