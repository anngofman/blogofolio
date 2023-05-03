import React, { useCallback, useState } from 'react';
import Button from './components/buttons/button';
import BurgerButton from './components/buttons/burgerButton';
import Tab from './components/buttons/Tabs/Tab';
import TabsPanel from './components/buttons/Tabs/TabPanel';
import { Post } from './components/Posts';

// import './App.css';


function App() {

  const [burgerState, setBurgerState ] = useState(true)
  const BurgerOnClick = useCallback(() => {
  setBurgerState((burgerState)=>burgerState ? burgerState=false : burgerState=true )
  },[])

  return (
    <div className="App">
      <Button text='Primary' type='primary' />
      <Button text='Primary' type='primary' disabled={true} />
      <Button text='Secondary' type='secondary' />
      <Button text='Secondary' type='secondary' disabled={true} />
      <Button text='Secondary2' type='secondary2' />
      <Button text='Secondary2' type='secondary2' disabled={true} />
      <BurgerButton onClick={BurgerOnClick} isActive={burgerState} />
      <Tab text='All' id='1' name='all' />
      <TabsPanel tabsList={['All', 'My favorites']} name='tab' />
      <Post view='head'/>
    </div>
  );
}

export default App;
