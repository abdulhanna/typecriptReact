import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Person from './components/personn';
import PersonList from './components/person1';
import Status from './components/status';
import Heading from './components/heading';
import Oscar from './components/oscar';
import Button from './components/button';
import Input from './components/input';
import Counter from './components/state/counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/box';
import { UserContext,UserContextProvider } from './components/context/UserContext';
import User from './components/context/user';


function App() {
  const personName = {
    first :"Bruce",
    last:'Wayne'
  }
  const nameList = [
    { first:'Bruce',last:'wayne'},
    { first:'Johnn',last:'carter'},
    { first:'Amith',last:'sunnu'},
  ]
  return (
    <div className="App">
     <h1>Learn React with typescript</h1>
     {/* <Greet name={"Prince"}  isLoggedIn={true}/> */}
     {/* <Person name={personName}/> */}
     {/* <PersonList names={nameList}/> */}
     {/* <Status status={"loading"}/>
     <Heading>Placed Order</Heading>
     <Oscar>
      <Heading>Oscar goes to leonanrdo decaprio</Heading>
     </Oscar> */}

     {/* <Button hanndleClick={(event)=>console.log('event')}/> */}
      {/* <Input value='' handleChange={(event)=>console.log(event)}/> */}

      {/* <Counter/> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      <UserContextProvider>
      <User/>
      </UserContextProvider>
    
    </div>
  );
}

export default App;
