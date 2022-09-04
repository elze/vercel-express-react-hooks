import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {prettyDOM} from '@testing-library/dom'

import { reducer } from './reducers';
import { SkillCategory } from './SkillCategory';
import { skillsReducer } from './skillsReducers';

import Student from './Student'

import { createStore } from 'redux';
// const store = createStore(skillsReducer);
const store = createStore(reducer);

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders running on Vercel link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/running on Vercel/i);
  expect(linkElement).toBeInTheDocument();
});


it("renders SkillCategory", () => {
	const catName = 'distributed streaming systems';
	const myCat = 	{
		categoryName: catName 
	};
	
  act(() => {
    render(<SkillCategory category={myCat} />, container);	
  });
  const myCategory = screen.getByText(catName);
  // expect(container.textContent).toBe("Hello, Jenny!");
  expect(myCategory).toBeTruthy();
  console.log(prettyDOM(myCategory))
});

it("renders Student", () => {
  act(() => {
    render(<Provider store={store}><Student num="2" /></Provider>, container);	
  });
  const myStudent = screen.getByText("Foo3 Bar3");
  // expect(container.textContent).toBe("Hello, Jenny!");
  expect(myStudent).toBeTruthy();
  // const myCN = getByText(container, catName);
  console.log(prettyDOM(myStudent))
});