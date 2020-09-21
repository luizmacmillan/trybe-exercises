import React from 'react';
import './DogPhoto.css'

class DogPhoto extends React.Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.nextDog = this.nextDog.bind(this);
    this.state = {
      currentImage: '',
      isLoading: true,
    }
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => this.setState(() => ({
      currentImage: data.message,
      isLoading: false,
    })));
  }

  componentDidMount() {
    const { fetchDog } = this;
    this.setState({ isLoading: true }, () => {fetchDog()});
  }

  nextDog() {
    const { fetchDog } = this;
    this.setState({ isLoading: true }, () => {fetchDog()});
  }

  render() {
    const { currentImage, isLoading } = this.state;
    return (
      <div className="dog-area">
        <button className="next-dog-btn" onClick={this.nextDog}>Next Dog Image</button>
        <div>{(isLoading) ? <h1>Loading...</h1> : <img src={currentImage} alt={currentImage.substr(30)} height="800" />}</div>
      </div>
    )
  }
}

export default DogPhoto;
