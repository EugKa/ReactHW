import * as React from 'react'
import { connect } from 'react-redux'
import { RouteChildrenProps } from 'react-router-dom'
import { AppState } from '../../store'
import { getDataCards, getCards } from '../../store/cards'
import { getDataLists, getLists } from '../../store/lists'
import styles from '../../styles/boardDetails.module.scss'

interface ListsProps extends RouteChildrenProps<{id: string}> {
    lists?: Array<any>
    cards?: Array<any>
    filtCard?: Array<any>  
    getLists?: (id?: string) => void
    getCards?: (id?: string) => void
    

}

class BoardDetails extends React.Component<ListsProps> {
    componentDidMount() {
        console.log(this.props.match?.params.id)
    
        const queryParams = this.props.location.search.split('?')[1].split('&');
        console.log(queryParams.reduce((items, paramString) => {
            const [key, value] = paramString.split('=')
            items[key] = value
            return items
        }, {} as any))
        this.props.getLists!(this.props.match?.params.id)
        this.props.getCards!(this.props.match?.params.id)
    }

    render() {
        const {cards, lists} = this.props;
        return <div className={styles.boardDetails}>
            <h2>BoardDetails</h2>
            <div className={styles.wrapper}>
            {
                lists!.map((list) => {
                    return   <div key={list.id} className={styles.list}>
                            <h3>{list.name}</h3>
                            {cards!.map((card) => {
                                if(list.id === card.idList) {
                                    return <div key={card.id} className={styles.card}>{card.name}</div>
                                }  
                            })}
                    </div>
                })
            }
            </div>
        </div>
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        lists: getLists(state),
        cards: getCards(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getLists: (id?: string) => dispatch(getDataLists(id as any)),
        getCards: (id?: string) => dispatch(getDataCards(id as any))
    }
}

const ConnectLists = connect(mapStateToProps, mapDispatchToProps)(BoardDetails)

export {ConnectLists as BoardDetails}