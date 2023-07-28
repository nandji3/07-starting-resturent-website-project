import Header from './Components/Layout/Header/Header'
import { Fragment, useState } from 'react'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
