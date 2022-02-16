import classes from "./Modal.module.css";
import {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    const {onClick} = props;
    return (
        <div className={classes.backdrop} onClick={onClick}/>
    )

}

const ModalOverlay = props => {
    const {onCloseBtnClick} = props;
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const overlays = document.getElementById('overlays')

const Modal = props => {
    const {onBackdropOrCloseBtnClick} = props;
    const backdropClickHandler = (event) => {
        onBackdropOrCloseBtnClick('backdrop');
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={backdropClickHandler}/>, overlays)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
        </Fragment>
    )

}

export default Modal;