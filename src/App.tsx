import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import store from './redux/store';

const App: React.FC = () => {
  return <div className="App">123</div>;
};

const ManagementInterface = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default ManagementInterface;
