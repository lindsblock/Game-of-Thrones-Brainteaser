import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Link to='/episodes'>
          <Button>Episodes</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
