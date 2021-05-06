import React from 'react';
import './App.css';
import Basic from './components/Basic';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
     
        
        <AppBody>
          
          <Sidebar />
          <Basic />

        </AppBody>

    </div>
  );
}

export default App;


const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;