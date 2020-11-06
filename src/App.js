import { Component } from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

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
          <DropzoneArea acceptedFiles={['.csv']} />
          </div>
        </div>
      </div>
    );
  }
}















export default App;
