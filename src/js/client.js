// eslint-disable-next-line no-unused-vars
import React from "react"
import ReactDOM from "react-dom"
import { IndexRoute, Router, Route, createMemoryHistory } from 'react-router'
import { Provider} from "mobx-react"
import Layout from "./pages/Layout"
import DataBaseUI from "./pages/DataBaseUI"
import DefaultStore from "./stores/DefaultStore"
import QDSStore from "./stores/QDSStore"

function show(id, api) {

  debugger;
  DefaultStore.setApi(api);
  QDSStore.setApi(DefaultStore);

  const stores = {
    defaultStore : DefaultStore,
    qdsstore: QDSStore
  }

  ReactDOM.render(
    <Provider { ...stores }>
      <Router history={ createMemoryHistory() }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ DataBaseUI }/>
        </Route>
      </Router>
  </Provider>,

  document.getElementById(id))
}

// TODO: adjust name to your namespace
window.TrumpfLaserMessePlugin = {
  init: show
}
