/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
import React from "react"
import ReactDOM from "react-dom"
  
  const page=(
  <navbar>

      <img id="cool" src="./react-logo.png"></img>
    <div>
      <h1>Fun facts about React</h1>
    </div>
    <div>
      <ul>
        <li>My name is Ujjwal Puri</li>
        <li>I'm learning react</li>
        <li>React is a very easy skill to learn</li>
        <li>React is very useful</li>
        <li>react can be written on a daily basis</li>
      </ul>
    </div>
    </navbar>
  )
  
  ReactDOM.render(page,document.getElementById("root"));