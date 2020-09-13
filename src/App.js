import React, {Component} from 'react';
import './App.css';
import Csv from './components/Csv'
import Json from './components/Json'

class App extends Component {
  state = {
    csv: 'Id,UserName\n1,Sam Smith\n2,Fred Frankly\n1,Zachary Zupers',
    json: ''
  }

  handleChange = (ev) => {
    let csv
    try { csv = ev.target.value }
    catch { csv = this.state.csv }
    let lines = csv.split("\n");
    let result = [];
    let headers = lines[0].split(",");

    for(let i = 1; i < lines.length; i++){

        let obj = {};
        let currentline = lines[i].split(",");

        for(let j = 0; j < headers.length; j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    let jsonOutput = JSON.stringify(result); //JSON
    console.log(result)

    this.setState({
      json: jsonOutput
    })
     
}
  componentDidMount() {
    this.handleChange()
  }

  render() {
    return (
      <>
        <h1>CSV to JSON converter</h1>
        <Csv data={this.state.csv} handleChange={this.handleChange}/>  
        <Json data={this.state.json}/>
      </>
    )
  }
}

export default App;
