import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const EmptyCart = cartList.length === 0
      return (
        <>
          {EmptyCart ? (
            <EmptyCartView />
          ) : (
            <ul className="cart-list">
              {cartList.map(eachCartItem => (
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                />
              ))}
            </ul>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
