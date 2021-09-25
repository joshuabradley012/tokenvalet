import React from 'react';
import Button from '../button';

const Ui = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
        <h1>Hello world!</h1>
        <p>This is some copy in a <a href="#">paragraph tag</a>. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
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
        <form>
          <label>First</label>
          <input type="text" />
          <label>Second</label>
          <input type="text" />
          <label>Third</label>
          <input type="text" />
          <label>Fourth - textarea</label>
          <textarea />
          <input type="button" value="Button" />
          <input type="checkbox" />
          <input type="radio" />
          <input type="color" />
          <input type="date" />
          <input type="datetime-local" />
          <input type="email" />
          <input type="file" />
          <input type="hidden" />
          <input type="image" src="//via.placeholder.com/350x150" />
          <input type="month" />
          <input type="number" />
          <input type="password" />
          <input type="range" />
          <input type="reset" />
          <input type="search" />
          <input type="submit" />
          <input type="tel" />
          <input type="time" />
          <input type="url" />
          <input type="week" />
          <select>
            <option value="">Select an option</option>
            <option value="1">Test 1</option>
            <option value="2">Test 2</option>
            <option value="3">Test 3</option>
            <option value="4">Test 4</option>
            <option value="5">Test 5</option>
          </select>
          <Button href="#">Submit</Button>
        </form>
        <hr />
        <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
        <ul>
          <li>This is an unordered list item</li>
          <li>This is an unordered list item</li>
          <li>This is an unordered list item</li>
          <li>This is an unordered list item</li>
        </ul>
        <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
        <ol>
          <li>This is an ordered list item</li>
          <li>This is an ordered list item</li>
          <li>This is an ordered list item</li>
          <li>This is an ordered list item</li>
          <li>This is an ordered list item</li>
        </ol>
        <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
        <blockquote>
          And this is a blockquote! It should be longer though, quotes are always lengthy expositions meant to highlight oneself, not the subject.
          <cite>Andrew Jackson</cite>
        </blockquote>
        <p>This is some copy in a paragraph tag. Yes it is. This is some copy in a paragraph tag. Yes it is.</p>
      </div>
    </div>
  </div>
);

export default Ui;

