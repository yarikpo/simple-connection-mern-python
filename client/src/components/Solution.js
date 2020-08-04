import React from 'react';
import './Solution.css';

class Solution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="solution">
          <h2>Solution {this.props.match.params.id}</h2>
      </div>
    );
  }
}

export default Solution;
