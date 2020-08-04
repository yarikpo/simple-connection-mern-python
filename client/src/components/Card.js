import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
// import '../index.css';

class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {

        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 1,
                    borderStyle: "solid"
                }}
            />
        );

        return (
            <li className='container'>
                <div className='card'>
                    <div className='circle'>
                        <h2>{this.props.title}</h2>
                        <ColoredLine color="#dddddd" />
                    </div>
                    <div className='content'>
                        <p>{this.props.short_description}</p>
                        <ColoredLine color="#dddddd" />
                        <Link to={{pathname: `/create`, name: this.props.name}}>Read More {this.props.name}</Link>
                    </div>
                </div>
            </li>
        );
    }
}

  export default Card;