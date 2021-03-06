import * as React from 'react'
import { connect } from 'react-redux'
import { RouteChildrenProps } from 'react-router-dom'
import { AppState } from '../../store'
import { getDataCards, getCards } from '../../store/cards'
import { getDataLists, getLists } from '../../store/lists'
import styles from '../../styles/boardDetails.module.scss'

interface ListsProps extends RouteChildrenProps {
    lists?: Array<any>
    cards?: Array<any>
    filtCard?: Array<any>  
    getLists?: () => void
    getCards?: () => void
    

}

class BoardDetails extends React.Component<ListsProps> {
    componentDidMount() {
        this.props.getLists!()
        this.props.getCards!()
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
        getLists: () => dispatch(getDataLists()),
        getCards: () => dispatch(getDataCards())
    }
}

const ConnectLists = connect(mapStateToProps, mapDispatchToProps)(BoardDetails)

export {ConnectLists as BoardDetails}