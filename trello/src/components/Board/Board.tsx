import * as React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES_URLS } from '../App/routes'
import styles from '../../styles/boardDetails.module.scss'

export interface boardProps   {
    name: string,
    prefs: any,
    id: string,
    backgroundColor: string
}

export const Board = ({name, id, prefs}: boardProps) => {
        console.log(id);
        const boardStyles = {
            backgroundColor: prefs.backgroundColor
        }
        
        return <Link id={id} className={styles.link} to={`${ROUTES_URLS.BOARD_DETAILS}/${id}`}>
            <div  className={styles.board} style={boardStyles}>{name}</div>
        </Link>
    
}
