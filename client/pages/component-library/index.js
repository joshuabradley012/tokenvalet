import React from 'react';
import { Button, Qr, Section } from 'components';

const ComponentLibrary = () => (
  <Section className="component-library-section">
    <h1>Components</h1>
    <p>Displayed below are many of the core components used throughout tokenvalet. They are only superficially functional.</p>
    <form>
      <h2>Form</h2>
      <p>This is an example form with all possible input types</p>
      <label>First</label>
      <input type="text" />
      <label>Second</label>
      <input type="text" />
      <label>Third</label>
      <input type="text" />
      <label>Fourth - textarea</label>
      <textarea />
      <label>Buttons</label>
      <input type="button" value="Button" />
      <input type="checkbox" />
      <input type="radio" />
      <label>Color</label>
      <input type="color" />
      <label>Date</label>
      <input type="date" />
      <label>Datetime local</label>
      <input type="datetime-local" />
      <label>Email</label>
      <input type="email" />
      <label>File</label>
      <input type="file" />
      <label>Image</label>
      <input type="image" src="//via.placeholder.com/350x150" />
      <label>Month</label>
      <input type="month" />
      <label>Number</label>
      <input type="number" />
      <label>Password</label>
      <input type="password" />
      <label>Range</label>
      <input type="range" />
      <label>Reset</label>
      <input type="reset" />
      <label>Search</label>
      <input type="search" />
      <label>Submit</label>
      <input type="submit" />
      <label>Tel</label>
      <input type="tel" />
      <label>Time</label>
      <input type="time" />
      <label>Url</label>
      <input type="url" />
      <label>Week</label>
      <input type="week" />
      <label>Select</label>
      <select>
        <option value="">Select an option</option>
        <option value="1">Test 1</option>
        <option value="2">Test 2</option>
        <option value="3">Test 3</option>
        <option value="4">Test 4</option>
        <option value="5">Test 5</option>
      </select>
      <Button href="/page">Page</Button>
      <Button href="#">Second</Button>
    </form>
    <Qr id="1234567890" />
  </Section>
);

export default ComponentLibrary;

