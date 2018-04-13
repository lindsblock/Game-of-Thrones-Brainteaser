import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import axios from 'axios';

class Episodes extends React.Component {
  state= {
    episodes: [{}]
  }

  componentDidMount() {
        axios.get('https://api.got.show/api/episodes/')
    .then( res => {
      this.setState({episodes: res.data });
    })
    .catch(err => {
      // TODO: handle client side errors better. Maybe a use the Flash Component?
      console.log(err.response);
    });
  }



  render() {
    const { episodes } = this.state
    return(
      <div>
        <Header>Episodes</Header>
        <Card.Group itemsPerRow={5}>
          { episodes.map(episodes =>
          <Card key={episodes._id}>
            <Card.Content>
              <Card.Header>{episodes.name}</Card.Header>
              <Card.Description>Season: {episodes.season}</Card.Description>
              <Card.Description>Air Date: {episodes.airDate}</Card.Description>
              <Card.Description>Director: {episodes.director}</Card.Description>
            </Card.Content>
          </Card>
        )}
        </Card.Group>
      </div>
    )
  }

}

export default Episodes;
