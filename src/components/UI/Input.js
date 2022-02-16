import React, {useImperativeHandle, useRef} from "react";
import classes from "./Input.module.css";


const Input = React.forwardRef((props, ref) => {
    const {input, labelText} = props;
    // const myRef = useRef();
    // useImperativeHandle(ref, () => ({
    //     outputIt: () => {
    //         console.log('這是一個Handle測試')
    //     },
    //     getVal:() => {
    //         return myRef.current.value;
    //     }
    // }));
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{labelText}</label>
            <input {...input} ref={ref}/>
        </div>
    )

});

export default Input;