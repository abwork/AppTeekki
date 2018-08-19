import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <AppNavbar />
          <Container>
            <MedicineModal />
            <MedicineList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
