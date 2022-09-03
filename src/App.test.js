import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { SkillCategory } from './SkillCategory';
import { skillsReducer } from './skillsReducers';

import { createStore } from 'redux';
const store = createStore(skillsReducer);

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

it("renders with or without a name", () => {
	const catName = 'distributed streaming systems';
	const myCategory = 	{
		categoryName: catName 
	};
	
  act(() => {
    render(<SkillCategory category={myCategory} />, container);	
  });
  const myCategoryName = screen.getByText(catName);
  // expect(container.textContent).toBe("Hello, Jenny!");
  expect(myCategoryName).toBeTruthy();

/*
  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
  */
});