import './App.css';

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PrimaryTerm from './PrimaryTerm'
// import Student from './Student'

function App() {
  //const count = useRenderTimes();
  const dispatch = useDispatch();
	const allStudentState = useSelector((state) => state);

	useEffect(() => {   
		console.log(`App: useEffect: about to dispatch getStudents`);
		dispatch({type: 'getStudents'});

		return () => {
			console.log('App component is being destroyed');
		};

	}, [dispatch]); 	

  return (
      <div className="App">
      {
        allStudentState?.students?.map((student, ind) => { 
		  	  console.log(`ind = ${ind}`);
            return (
			      <PrimaryTerm key={student.id} num={ind}/>
			      )
          }
        )
      } 
      </div>
  );
}


export default App;
