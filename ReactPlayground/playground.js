function Button() {
	return <button>Test!</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

/***************************/
function logRandom(){
  console.log(Math.random());
}
function Button() { 
  const [clickCount, setClickCount] = useState(0);
	return <button onClick={()=>setClickCount(clickCount+1)}>{clickCount}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
/*********************************/
function logRandom(){
  console.log(Math.random());
}
function Button() { 
  const [clickCount, setClickCount] = useState(5);
	return <button onClick={()=>setClickCount(clickCount*2)}>{clickCount}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
/*********************************/
function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1); 
	return (<button onClick={handleClick}>
    {counter}
  </button>
          );
}

function Display(){
  return (
  <div> ... </div>
  );
}

ReactDOM.render(
<div>
  <Button />
  <Display />
  </div>,
  document.getElementById('mountNode'),
);
/*********************************/
// same as above without new dom elements, React.Fragment can be replaced by <></>
function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1); 
	return (<button onClick={handleClick}>
    {counter}
  </button>
          );
}

function Display(){
  return (
  <div> ... </div>
  );
}

ReactDOM.render(
<React.Fragment>
  <Button />
  <Display />
  </React.Fragment>,
  document.getElementById('mountNode'),
);
/*********************************/
function Button(props) {
// 	const [counter, setCounter] = useState(25);
  
	return (<button onClick={props.handleClick}>
    +1
  </button>
          );
}

function Display(props){
  return (
  <div>{props.msg} </div>
  );
}
function App(){
  const [counter, setCounter] = useState(25);
  const handleClick = () => setCounter(counter+1); 
    return (
    <div>
    <Button handleClick = {handleClick}/>
    <Display msg={counter}/>
    </div>
  );
}
ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
