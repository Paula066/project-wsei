import React, {Component} from 'react';
import Header from './components/Headers/headers';
import RegistractionForm from './components/RegistractionForm/registractionform'

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <RegistractionForm/>
        </div>
    )
  }
}

export default App;
