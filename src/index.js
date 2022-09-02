import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

// import { reducer } from './reducers';
import { createStore } from 'redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';

import { skillsReducer } from './skillsReducers';

// const store = createStore(reducer);
const store = createStore(skillsReducer);

const tealOrangeTheme = createTheme({
  palette: {
    primary: {
	  main: teal[50],
	  contrastText: teal[600],
    },
    secondary: {
	  main: deepOrange[300],
	  contrastText: deepOrange[50]
    },
	/*
	error: {
		main: blue[700]
	},
	*/
	hasManyAssociations: {
		main: teal[100],
		contrastText: teal[600]
	},
	highlighted: {
		main: teal[500],
		contrastText: teal[50],
	},
	secondaryArea: {
		main: lime[50]
	}
  },
  spacing: 8,  
  typography: {
	button: {
		textTransform: "none",
		':hover': {
		  color: `${deepOrange[500]} !important`,
		  backgroundColor: `${deepOrange[50]} !important`,
		},
	}
  }  
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={tealOrangeTheme}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
