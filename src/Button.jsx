import { useDispatch } from "react-redux"
import { addMoney } from "./store"
import { removeMoney } from "./store"

export default function Button() {
    const dispatch = useDispatch();
    return (
        
        <div>
        <button onClick={() => dispatch(addMoney(500))}>
            Add 500
        </button>
        <br />
        <button onClick={() => dispatch(removeMoney(500))}>
            Subtract 500
        </button>
        </div>
    )
}