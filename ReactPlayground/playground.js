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
/*********************************//*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
