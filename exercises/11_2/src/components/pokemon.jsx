import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
    <div className="poke-card">
      <div className="poke-info">
        <h3>{this.props.name}</h3>
        <h4>{this.props.type}</h4>
        <h4>Average Weight: {this.props.weight}</h4>
      </div>
      <img className="poke-image" src={this.props.image} alt={this.props.name} />
    </div>
    )
  }
}

export default Pokemon;