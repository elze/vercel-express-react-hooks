import './App.css';

import Skills from './Skills'
import Students from './Students'


function App() {
  return (
      <div className="App">
        <header className="my-app">
          <h1 className="Skills-title">Application with Express.js and React.js, running on Vercel</h1>
		  It was created for Women Who Code Austin, TX frontend meetup to investigate useSelector hook and re-renderings. Here is the Github repository: <a href="https://github.com/elze/vercel-express-react-hooks">https://github.com/elze/vercel-express-react-hooks</a>.<br/> 
		  Here is the <a href="http://geekitude.com">author's website</a>.<br/>
		  Here is my presentation explaining <a href="http://geekitude.com/Presentations/20211205-Vercel-Express-React/20211208-Vercel.html">how to run full-stack applications on Vercel</a>.<br/>
		  Here is my presentation on <a href="http://geekitude.com/Presentations/20220405-RevealMD-ReactMUITheming/slides.html">Theming in React.js using MUI (Material UI)</a>.<br/>		  
		  (The data in this application does not make much sense -- I borrowed it from another of my projects, which is still very much a work in progress.)<br/>  		  
        </header>	  
		<Skills/>
      </div>
  );  
}

export default App;
