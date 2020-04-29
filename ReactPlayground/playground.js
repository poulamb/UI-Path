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
function Button(props) {
// 	const [counter, setCounter] = useState(25);
const ownHandleClick =() => props.handleClick(props.increment);
	return (<button onClick={ownHandleClick}>
    +{props.increment}
  </button>
          );
}

function Display(props){
  return (
  <div>{props.msg} </div>
  );
}
function App(){
  const [counter, setCounter] = useState(0);
  const handleClick = (incVal) => setCounter(counter+incVal); 
    return (
    <div>
    <Button handleClick = {handleClick} increment = {1} />
    <Button handleClick = {handleClick} increment = {5} />
        <Button handleClick = {handleClick} increment = {10} /><Button handleClick = {handleClick} increment = {100} />
    <Display msg={counter}/>
    </div>
  );
}
ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);
/*********************************/

	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];


class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}
const CardList = (props) => (
  <div>
    {testData.map(profile=><Card {...profile}/>)}
  </div>
  );
class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <CardList />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
/*********************************/
/*********************************/
/*********************************/
