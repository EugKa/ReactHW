import  React from 'react'
import { Time } from './time';
import { Datee } from './date'
import styles from '../styles/app.module.scss'
import '../styles/bace.scss'
export class Clock extends React.Component  {
    state = {
        activeMode: 0
    }
    getRandonNumber = max => {
        return Math.floor(Math.random() * max)
    }
    
    getRandomColor = () => {
        return `rgb(${this.getRandonNumber(225)}, 
                    ${this.getRandonNumber(225)},
                     ${this.getRandonNumber(225)})`
                    ;
    }
    
    renderContent = ()=>  {
        switch (this.state.activeMode) {
            case 0:
                return <Time  format='long'/>
            case 1:
                return <Time format='short' />
            case 2: 
                return <Datee format='long'/>
            case 3: 
                return <Datee format='short'/>
            default:
                return <h2>HELLO</h2>;
        }
    }
  
   increesMode = () =>{  
        this.getRandomColor()
        if(this.state.activeMode + 1 < 4) {
            this.setState((state) => {
                return {activeMode: state.activeMode + 1}
              });
        } else {
            this.setState((state) => {
                return {activeMode: state.activeMode = 0}
              });
        }
}
    render() {
        return(
            <div className={styles.component } style={{backgroundColor: this.getRandomColor()}}  onClick={this.increesMode}>
                {
                    this.renderContent()
                }
            </div>
        )
    }
    
    
    
}