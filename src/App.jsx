// import React, { useState } from "react";
 import "./styles/style.css";
// import Profile from "./components/Profile";
// import Button from "./components/button";
import React from "react";
import MyForm from "./components/form";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const userDetails = [
//     { name: "Segun" },
//     { name: "Arinze", desc: "Egbe belu ugo belu..." },
//     { name: "Cosmas", desc: "Okirikiri ka an agba ukwu ose..." },
//   ];

//   const names = userDetails.map((detail) => {
//     const { name, desc } = detail;
//     return (
//       <div key={name}>
//         <Profile profileName={name} userDesc={desc} />
//       </div>
//     );
//   });
//   return (
//     <>
//       <section className="container">
//         <Form />
//         <Button />
//         <Button color='red' label="Sign in"/>
//         <Button color='dark' label={"Sign out"}/>
//          <p>{count}</p>
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <button onClick={() => setCount(count - 1)}>-</button> 
//         {names}
//       </section>
//     </>
//   );
// };
// App.js


const App = () => {
  return (
    <div className="container">
      <h1>My Form</h1>
      <MyForm />
    </div>
  );
};

export default App;













