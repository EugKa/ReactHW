import  React, { useState , useEffect } from 'react'
import styles from '../styles/app.module.scss'
export const Time = ({format}) => {
    const [date,setDate] = useState(new Date());
    console.log('TEST')
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return  <p className={styles.txt}>
        {format === 'long' ? date.toLocaleTimeString() +' AM' : `${date.getHours()}:${date.getMinutes()} AM`}
    </p> 
            
}