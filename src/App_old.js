
import {useState, useEffect } from 'react';
import Button from './Button';


function Hello() {
  useEffect(() => {
    console.log("Hi");
    return () => { console.log("Bye") }
  }, [])
  return (
    <div>Hello </div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);

  const onClick = () => {
    setCounter((prev) => prev + 1 );
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const buttonOnClick = () => {
    setShow((prev) => !prev);
  }


  console.log("I run all the time");
  const onlyOnce = () => {
    console.log("I run only once!")
  }

  useEffect(onlyOnce, []);

  useEffect(() => {
    console.log(keyword)
  }, [keyword]);

  useEffect(() => {
    console.log(counter)
  }, [counter])

  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>Hello!</h1>
      <p>PropType 를 설치하기 위해서는 : npm install prop-types</p>
      
      <div>
        <input value={keyword} placholder="영화를 검색하세요" onChange={onChange}></input>
      </div>
      
      <div>
        <p>{counter}</p>
        <Button 
          onClick={onClick} 
          text="Click Here" />
      </div>

      <div>
        {show ? <Hello /> : null}
        <button onClick={buttonOnClick}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
