import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
// import Spinner from 'react-bootstrap/Spinner'


import PrimaryTerm from './PrimaryTerm'

function Skills() {
	//const count = useRenderTimes();
	const dispatch = useDispatch();
	const allSkillsState = useSelector((state) => state);
	const [errorState, setErrorState] = React.useState([]);	

	useEffect(() => {   

		async function getAllSkills() {
			let allSkillsInfo;	
			let errorInfo;
			try {
				const uri = `/api/terms`;
				const response = await fetch(uri);
				if (response.status !== 200) {
					const error = response.json()
						.then(data => {
							const errorMessage = error.error?.message;
							errorInfo = `Server error: ${errorMessage}`
							setErrorState(errorInfo);
							allSkillsInfo = {};
							console.log(`getAllSkills: an error occurred: allSkillsInfo = ${JSON.stringify(allSkillsInfo)} errorInfo = ${errorInfo}`);
						})
						.catch((err) => {
							errorInfo = `Unable to retrieve data`;
							console.log(`getAllSkills: an error occurred. The error result is not a valid JSON object; err = ${err}`);
							setErrorState(errorInfo);
						});
				}			
				else {
					allSkillsInfo = await response.json();			
					console.log(`getAllSkills: got response.json() ; response.status = ${response.status} errorInfo = ${errorInfo}`);
					setErrorState(null);
				}
			}
			catch(err) {
				console.log(`getAllSkills: a network error occurred: err = ${err}`);
				errorInfo = `Server error: ${err}`
				allSkillsInfo = {};
				setErrorState(errorInfo);
			}
			const action = {type: 'stateFromBackend', allSkills: allSkillsInfo}
			dispatch(action);
		}
		getAllSkills();
		
		return () => {
			console.log('App component is being destroyed');
		};

	}, [dispatch]); 	

  return (
	<div className="App">  
		 <div style={{ display: (allSkillsState?.primary_skills && allSkillsState?.primary_skills.length > 0) || errorState ? "none" : "block" }}>
			<CircularProgress role="status">
			</CircularProgress>	
		 </div>		
		<div className="text-center">
		  { 
			(errorState && errorState.length > 0) ? 
			<Alert color="error">
				An error occurred: { errorState }
			</Alert>
			: ''	
		  }			
		</div>		 
      {
		allSkillsState?.primary_skills?.map((primarySkill, ind) => { 
		  	  console.log(`ind = ${ind}`);
            return (
			      <PrimaryTerm key={primarySkill.primary_term} num={ind}/>
			      )
          }
        )
      } 
	</div>
  );
}

export default Skills;