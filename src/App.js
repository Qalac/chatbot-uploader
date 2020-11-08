import { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      fileName: 'Please choose file',
      message: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = e => {
    this.setState({
      selectedFile: e.target.files[0],
      fileName: e.target.files[0].name
    })
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('file', this.state.selectedFile)
     axios.post("http://45.32.16.104/upload", data)
       .then(res => {
         this.setState({
           message: res.data.response,
           fileName: 'want to upload another file?'
         })
       })
       .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="uploader">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              onChange={this.onChangeHandler}
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              accept=".csv"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {this.state.fileName}
            </label>
          </div>
        </div><br/>
        <Button onClick={this.onClickHandler}>submit</Button><br/>
        <p/>{this.state.message.toLowerCase()}
      </div>
    );
  }
}


export default App;
