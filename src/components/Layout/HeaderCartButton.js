import { Fragment } from "react/cjs/react.development"
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

const HeaderCartButton = props => {
    return <Fragment>
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>3</span>
        </button>
    </Fragment>
}
export default HeaderCartButton