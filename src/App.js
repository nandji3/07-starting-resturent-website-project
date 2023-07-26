import React from 'react'
import Header from './Components/Layout/Header/Header'
import { Fragment } from 'react'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
