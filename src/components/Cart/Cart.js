import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
const cartItem = <ul className={classes["cart-items"]}>
    {[{ id: 'c1', name: "Sushi", amount: 2, price: 12.99 }].map(item => <li>{item.name}</li>)}
</ul>
const Cart = props => {
    return <Modal onCloseCart={props.onCloseCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.66</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCloseCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart