import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'
import Page from '../components/Page'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App
