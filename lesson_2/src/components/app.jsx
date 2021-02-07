import React from 'react'
import {Clock} from './clock'
import styles from '../styles/app.module.scss'
export class App extends React.Component {
    render() {
        return(
            <div className={styles.page}>
                <Clock/>
            </div>
        )
    }
}
