import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = e => {
    console.log(e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form-group files">
            <label>Upload files here</label>
            <input className="form-control" onChange={this.onChangeHandler} type="file" name="file" 
              accept=".csv, .xlsx, .xls" ></input>
          </div>
        </div>
      </div>
    );
  }
}















export default App;
