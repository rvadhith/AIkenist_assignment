import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ''
    };
  }

  componentDidMount(){
    console.log(1);
    
    fetch('http://localhost:8000/get-image', {
    })
    .then((response) => {
      return response.blob();
    })
    .then((image) => {
      const objectURL = URL.createObjectURL(image);
      this.setState({ imageURL: objectURL });
    })
  }

  
  render() {
    return (
      <div>
        <h2>Your covid result is: </h2>
        <img src={this.state.imageURL} />
      </div>
    );
  }
}

export default Result;