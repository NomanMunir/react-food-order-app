import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './mealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const addAmountHandler = amount => {
        const item = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }
        cartCtx.addItem(item)
    }
    const price = `$${props.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} addAmountToCart={addAmountHandler} />
        </div>


    </li>
}

export default MealItem