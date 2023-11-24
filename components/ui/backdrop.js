import classes from './backdrop.module.css'

export default function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClick} />
}
