import { ChangeEvent } from 'react'
import s from './Settings.module.css'

type SettingsType = {
    minValue: number
    maxValue: number
    onChangeMinValue: any
    onChangeMaxValue: any
    saveSettings: () => void
    error: boolean
}


export const Settings = (props: SettingsType) => {

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMinValue(e.currentTarget.value)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.value)
    }
    
    return (
        <div className={s.container}>
            <input className={props.error ? s.error : " "} type="number" min="1" max="10" value={props.maxValue} onChange={onChangeMaxValue} />
            <input className={props.error ? s.error : " "} type="number" min="1" max="10" value={props.minValue} onChange={onChangeMinValue} />
            <button className={s.button} disabled={props.error}  onClick={props.saveSettings}>save</button>
        </div>
    )
}