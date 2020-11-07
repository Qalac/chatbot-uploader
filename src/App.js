import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = e => {
    this.setState({
      selectedFile: e.target.files[0],
    })
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
     axios.post("http://127.0.0.1:5000/upload", data)
       .then(res => {
         console.log(res.status)
       })
       .catch(err => console.log(err))
  }


  render() {
    return (
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
            Choose file
          </label>
        </div>
      </div>
    );
  }
}


{/* <div className="file-form">
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" accept=".csv, .txt" onChange={this.onChangeHandler} />
          </div>
          <div className="input-group-append">
          <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </div>
        </div>
      </div> */}



export default App;
