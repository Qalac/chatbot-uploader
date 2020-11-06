import { Component } from 'react';
import axios from 'axios';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

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
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
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
