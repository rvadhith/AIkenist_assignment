import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ''
    };
  }

  componentDidMount(){
    let fileName = this.props.location.state; 
    //console.log(this.props.location.state);
    fetch(`http://localhost:8000/get-image/${fileName}`, {
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
        <img src={this.state.imageURL} alt="Covid_Result" />
      </div>
    );
  }
}

export default Result;