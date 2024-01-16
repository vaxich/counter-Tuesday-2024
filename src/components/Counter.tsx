
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    incHandler: () => void
    resetCounter: () => void
    disabled: boolean
}

export const Counter = (props: CounterPropsType) => {  

    const incHandler = () => {
        props.incHandler()
    }

    const resetCounter = () => {
        props.resetCounter()
    }

    return (
        <div className={s.container}>
            <span className={s.span}>  {props.counter} </span>
            <button className={s.button} disabled={props.disabled} onClick={incHandler}>inc</button>
            <button className={s.button} onClick={resetCounter}>reset</button>
        </div>
    )
}