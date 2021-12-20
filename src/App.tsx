import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/context';
import './App.scss';
import Main from './components/Main';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';

const App: FC = () => {
  return (
    <div className='App'>
      <AppContextProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/calendar' element={<Calendar />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
