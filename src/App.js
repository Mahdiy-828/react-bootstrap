import React from 'react';
import Navbar from './components/01. navbar/Navbar';
import Header from './components/02. header/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <div className='navcss'>
            <Navbar />
            <Header />
           
          </div>
      </div>
    );
  }
}


export default App;
