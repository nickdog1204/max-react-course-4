import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from "react";


const MealItemForm = prop => {
    const {id, onAmountConfirm} = prop;
    const inputRef = useRef();
    const [isFormValid, setIsFormValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        // inputRef.current.outputIt()
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 | enteredAmountNumber > 5) {
            setIsFormValid(false);
            return;
        }
        onAmountConfirm(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                labelText="數量"
                input={{id: 'amount_' + id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}}/>
            <button>+ 添加</button>
            {!isFormValid && <p style={{color: 'red'}}>數字不合法</p>}
        </form>
    )
}

export default MealItemForm;