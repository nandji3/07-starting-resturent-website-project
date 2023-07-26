import React from 'react'
import Header from './Components/Layout/Header/Header'
import { Fragment } from 'react'
import Meals from './Components/Meals/Meals'

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
