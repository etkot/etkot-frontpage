import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/context';
import './App.scss';
import Main from './components/Main';
import Menu from './components/Menu';

const App: FC = () => {
  return (
    <div className='App'>
      <AppContextProvider>
        <Menu />
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
