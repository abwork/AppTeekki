import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import MedicineList from './components/MedicineList';
import MedicineModal from './components/MedicineModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <NavBar />
            <MedicineList />
            <MedicineModal />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
