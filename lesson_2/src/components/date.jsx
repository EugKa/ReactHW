import  React from 'react'
import styles from '../styles/app.module.scss'
const arrMonth = (value) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December',]
    return months[value];
}

export const Datee = ({format}) => {
    const date = new Date();
    console.log('TEST')

    return  <p className={styles.txt}> 
                {format === 'long'? `${date.getDate()}/${date.getMonth() + 1 }/${date.getFullYear()}`
                 : `${arrMonth(date.getMonth())} ${date.getDate() +'th'} ${date.getFullYear().toString().substr(-2)}`}</p>
}