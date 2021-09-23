import React from 'react';
import Button from '../button';
import './style.scss';

const App = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <h2>Hello world!</h2>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <h3>Hello world!</h3>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <h4>Hello world!</h4>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <h5>Hello world!</h5>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <h6>Hello world!</h6>
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <hr />
      <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      <ul>
        <li>This is an unordered list item</li>
        <li>This is an unordered list item</li>
        <li>This is an unordered list item</li>
        <li>This is an unordered list item</li>
      </ul>
      <ol>
        <li>This is an ordered list item</li>
        <li>This is an ordered list item</li>
        <li>This is an ordered list item</li>
        <li>This is an ordered list item</li>
        <li>This is an ordered list item</li>
      </ol>
      <blockquote>
        And this is a blockquote!
        <cite>Andrew Jackson</cite>
      </blockquote>
      <hr />
      <label>First</label>
      <input type="text" />
      <label>Second</label>
      <input type="text" />
      <label>Third</label>
      <input type="text" />
      <label>Fourth</label>
      <input type="text" />
      <Button href="#">Submit</Button>
    </>
  );
};

export default App;

