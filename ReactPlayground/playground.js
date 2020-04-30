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
    {props.profiles.map(profile=><Card {...profile}/>)}
  </div>
  );

class Form extends React.Component {
  userNameInp = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameInp.current.value);
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder = "Github Username" required ref={this.userNameInp}/>
    <button>Add</button>
    </form>
    );
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles : testData,
    };
  }
  // state = {
  //   profiles : testData,
  // }
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form/>
        <CardList profiles ={ this.state.profiles}/>
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
/*********************************/

// 	const testData = [
// 			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//       {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// 	];

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
    {props.profiles.map(profile=><Card {...profile}/>)}
  </div>
  );

class Form extends React.Component {
  state = {userName : ''}
    handleSubmit = async (event) => {
    event.preventDefault();      console.log(this.state.userName);
 const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
      this.setState({userName : ''});
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder = "Github Username"  value = {this.state.userName}
      onChange={event=>this.setState({userName:event.target.value})}required/>
    <button>Add</button>
    </form>
    );
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles : [],
    };
  }
  addNewProfile = (profileData) =>{
    console.log('profileData',profileData);
      // this.setState(prevState=>(
      // {profiles : [...prevState.profiles,profileData]}
      // ));    
    
    this.setState({...this.state,profiles:[...this.state.profiles,profileData]});
    
    // let temp=Object.assign({}, this.state);
    // temp.profiles.push(profileData);
    //  this.setState(temp);
    
  };
  // state = {
  //   profiles : testData,
  // }
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit = {this.addNewProfile}/>
        <CardList profiles ={ this.state.profiles}/>
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
/*********************************/
// STAR MATCH - Starting Template

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  const btns = 9;
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1,stars).map(starId => <div key={starId} className="star" />)}
        </div>
        <div className="right">
          {utils.range(1,btns).map(btnId => <button key={btnId} className="number">{btnId}</button>)}
                  </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);

/*********************************/
// STAR MATCH - V2
const PlayNumber = props =>{
  return (
  <button  className="number" 
    style={{backgroundColor : colors[props.status]}}
    onClick={()=>props.onClick(props.number, props.status)}
    >{props.number}
    </button>)
}
const StarsDisplay = props =>(
  // console.log(props.stars);
    <>
    {utils.range(1, props.stars).map(starId =>
  <div key={starId} className="star" />
      )}
      </>
)
const StarMatch = () => {
  
	const [stars, setStars] = useState(utils.random(1, 9));
//   
  const [availableNum, setAvailableNum] = useState(utils.range(1, 9));   const [candidateNum, setCandidateNum] = useState([]);
  const candidatesAreWrong = ()=>{
   return ( utils.sum(candidateNum)>stars?'wrong':'candidate');
  };
 const onNumberClick = (number,status) =>{
   console.log('num',number);
    console.log('status',status);
    if(status=='used'){
      return ;
    }
    const newCandidateNum = 
          status === 'available'
          ?candidateNum.concat(number) :candidateNum.filter(
          cn => cn !== number
          );
    if(utils.sum(newCandidateNum) !== stars)
      {
        setCandidateNum(newCandidateNum);
      }
       else{
         const newAvailableNum = availableNum.filter(
         n => !newCandidateNum.includes(n)
         );
         setStars(utils.randomSumIn(newAvailableNum,9));
         setAvailableNum(newAvailableNum);
         setCandidateNum([]);
       }
 } 
  const numberStatus = (number) =>{
    if(!availableNum.includes(number)){
      return 'used';
    }
    if(candidateNum.includes(number)){
      return candidatesAreWrong();
    } 
    return 'available';
  }
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
        <StarsDisplay stars={stars}/>
       </div>
       <div className="right">
        	{utils.range(1, 9).map(number =>
          <PlayNumber 
            key={number} 
            status = {numberStatus(number)}
            onClick = {onNumberClick}
            number={number}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/
/*********************************/

