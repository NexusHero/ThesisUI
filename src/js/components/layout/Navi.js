import React from "react"
import { IndexLink, Link } from "react-router"
import {RaisedButton} from "material-ui"
import { Button } from 'reactstrap'
import Help from '../layout/Help'

export default class Nav extends React.Component {
  render() {

    return (

      <nav class="navbar navbar-light bg-faded">

        <Help></Help>

            <div style ={{marginTop: '30px', marginBottom: '10px', marginLeft: '15px'}}>
                <img src="/../../assets/vectorlogo.svg" width="70" height="70" class="d-inline-block align-mid" alt="" />
                <a href="https://www.trumpf.com/de_DE/produkte/services/truservices/">
                    <Button style={{ marginLeft: '50px'}}> TruServices </Button>
                </a>
            </div>
          </nav>

    )
  }
}
