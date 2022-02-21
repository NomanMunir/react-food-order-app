import { Fragment } from "react/cjs/react.production.min"
import AvailableMeal from "./AvailableMeal"
import MealSummery from "./MealSummery"


const Meal = props => {
    return <Fragment>
        <MealSummery />
        <AvailableMeal />
    </Fragment>
}

export default Meal