import React from 'react'
import styles from '../../styles/boardDetails.module.scss'
interface CardProps {
   dataCard:any
   onDelete: (id:string) => void
   
}

export const Card =({dataCard, onDelete}:CardProps) => {
    const {name, id} = dataCard
    return (
        <div className={styles.card}>{name}
            <button  onClick={()=>onDelete(id)}
                    className={styles.deleteBtn}>X</button>
        </div>
    )
    
}