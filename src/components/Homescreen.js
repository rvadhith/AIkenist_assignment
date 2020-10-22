import React from 'react';

class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      imageName: '', 
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    console.log(1);
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    console.log(2);
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
    console.log(6);
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleUploadImage}>
          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            <button type="submit">Detect</button>
          </div>
        </form>
      </div> 
    );
  }
}

export default Homescreen;