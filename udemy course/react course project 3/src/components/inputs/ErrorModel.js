import React, {Fragment} from 'react';
import Button from '../Button';
import styles from './ErrorModel.module.css'
import ReactDOM  from 'react-dom';

function Backdrop(props) {
    return (<div className={styles.backdrop}/>)
}

function Model(props) {
    return(
    <div className={styles.modal}>
        <header className={styles.header}>
            <h1>{props.title}</h1>
        </header>
        <div className={styles.content}>
            <p>{props.content}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onClickOK}>Okey</Button>
        </footer>
    </div>)
}

export default function ErrorModel(props) {
  
    return ( 
      <Fragment>
          {ReactDOM.createPortal(<Backdrop />,document.getElementById("backdrop-root"))}
          {ReactDOM.createPortal(<Model title={props.title} content={props.content} onClickOK={props.onClickOK}/>,document.getElementById("model-root"))}
      </Fragment>
    );
}