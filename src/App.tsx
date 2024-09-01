import React, { Component } from 'react'
import Form from './components/Form'
import TraficLight from './components/TraficLight'
import Signal from './components/Signal'

export default class App extends Component {
  render() {
    return (
      <div>
   <TraficLight light={["green","yellow","red"]}/>
      </div>
    )
  }
}
