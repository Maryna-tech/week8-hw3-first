import './App.css';
import { useEffect, useState } from 'react';

function App() {
const[quote,setQuote] = useState("");
//1

useEffect(()=>{
getNewQuote();
}, [])

const getNewQuote = async()=>{
const response = await fetch('https://api.quotable.io/random');
const data = await response.json();
console.log(data);
setQuote(data.content)
}
  return (
    <div className="App">
<p>{quote}</p>
    </div>
  );
}

export default App;
