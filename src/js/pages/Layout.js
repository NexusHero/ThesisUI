import React from "react"


import TrumpfHeader from "../components/layout/TrumpfHeader"
import Navi from "../components/layout/Navi"
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/card.css';



injectTapEventPlugin();

export default class Layout extends React.Component {

static childContextTypes = {
  muiTheme: React.PropTypes.object
}

getChildContext() {
 return {
   muiTheme: getMuiTheme()
 }
}
  render() {
    const containerStyle = {
      marginTop: "10px"
    }
    return (

      <div class="myLayout">
        <Navi/>
        <TrumpfHeader/>
        <div style={ containerStyle }>
          <div>
            <div>
              {this.props.children }
            </div>
          </div>
        </div>
      </div>

    )
  }
}
