import React from 'react';
import styles from '../../styles/boardDetails.module.scss'
import  '../../styles/boardDetails.module.scss'
import { RouteChildrenProps } from 'react-router';


interface FormProps extends RouteChildrenProps  {
    handleSubmit:(text:string, id:any) =>void
    id?:any
}

interface FormState {
    activeForm?:boolean
    name?:string,
    e?:any,
    
    
}

export class AddCardForm extends React.Component<FormProps,FormState> {
    state = {
        activeForm: false,
        name:''
    }
    onFormChange = () => {
        this.setState(({activeForm}:any) => {
                         return {
                            activeForm: !activeForm
                         }
                   })    
    }
    onChange = (e: any) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name);
        
      };
    onSubmitForm = (e:any, id:any) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.name, id)
    }
    
    render() {
        const {id} = this.props
        return  <div className="add-card" >
            {this.state.activeForm ? 
            <form className={styles.form} 
                    onSubmit={(e:any)=>
                    this.onSubmitForm(e,id)}>
                <textarea 
                    className={styles.textarea} 
                    name="text"
                    placeholder="Ввести заголовок для этой карточки"
                    onChange={this.onChange}
                    value={this.state.name}
                />
                
            <div className={styles.btnWrapper}>
                <button type='submit' 
                        className={styles.submitBtn}>Добавить карточку
                </button>
                <button onClick={this.onFormChange} 
                        className={styles.closeBtn}>X
                </button>
            </div>
            </form>:<button onClick={this.onFormChange} 
                            className={styles.addCardBtn}>+ Добавить еще одну карточку
                    </button>
            }

    </div>   
    }
}



