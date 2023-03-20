// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';

// function App() {
class App extends Component {
  state = {
    title : 'Mon catalogue Voiture77777'
  }
  render(){
    return (
      <div className="App">
        {/* hello world */}
        <Mycars titre ={this.state.title} />
      </div>
    );
  }
}

export default App;
