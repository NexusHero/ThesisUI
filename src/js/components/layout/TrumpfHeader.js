import React from "react"
import { Jumbotron, Container  } from 'reactstrap';
import {Card, CardActions, CardText, CardTitle, CardMenu} from 'react-mdl/lib/Card';

export default class TrumpfHeader extends React.Component {

  render() {

    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Quality Data Storage</h1>
            <p className="lead">The Power of Choice</p>
          </Container>
        </Jumbotron>
      </div>
   )
  }
}
