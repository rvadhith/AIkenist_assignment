import React from 'react';

class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      imageName: '',
      selectedFile: null, 
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  onFileChange = event => {  
    this.setState({ selectedFile: event.target.files[0] }); 
  };

  handleUploadImage(ev) {
    ev.preventDefault();
    console.log(1);
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    console.log(2);
    console.log(this.state.selectedFile);
    

    if(this.state.selectedFile === null){
      return (
        alert("Please select a file")
      )
    }
    else {
      let name = this.state.selectedFile.name;
      if(name.endsWith(".jpeg") || name.endsWith(".jpg") || name.endsWith(".png")){
        fetch('http://localhost:8000/upload', {
          method: 'POST',
          body: data,
            }).then((response) => {
              console.log(response);
              console.log(3);
              response.json().then((body) => {
              console.log(body.fileName);
              let fname = body.fileName;
              this.setState({ imageName: fname });
              this.setState({ imageURL: `http://localhost:8000/${body.file}` });
              console.log(5);
              this.props.history.push('/result', this.state.imageName);
            });
          });
        }
      else{
        console.log(this.state.selectedFile.type);
        return (
          alert("Please upload either .jpg or .jpeg or .png file")
        )
      } 
    } 
    console.log(6);
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleUploadImage}>
          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.onFileChange} />
            <button type="submit">Detect</button>
          </div>
        </form>
      </div> 
    );
  }
}

export default Homescreen;