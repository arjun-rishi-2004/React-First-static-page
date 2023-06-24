import React from 'react';
import ReactDOM from 'react-dom';

const page=(
<div>
  <img src={require("./logo192.png")}alt='im' width="40px"/>

  <h1>
    Fun Facts About React
  </h1>
  <ul>
    <li>First released in 2013</li>
    <li>Was originally created by Jordan Walker</li>
    <li>Has well over 100k stars in github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of apps including mobile apps</li>

  </ul>
</div>
  
 )
ReactDOM.render(page,document.getElementById("root"));
// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';


// function App() {
//  const page=(
//   <h1>Testing</h1>
//  )
// ReactDOM.render(page,document.getElementById("root"))

// }

// export default App;