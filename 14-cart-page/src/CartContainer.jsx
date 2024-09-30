import CartItem from './CartItem';
import { useGlobalContext } from './Content';
import cartItems from './data';
const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();

  // convert cart(new map()) to array using Array.from
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartArray.map((cartItem) => {
          //cartArray here has 2 items, 1 is id and 2nd is the item/s
          // array destruct key(id) and value(item)
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
