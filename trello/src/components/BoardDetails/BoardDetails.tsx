import * as React from 'react'
import { connect } from 'react-redux'
import { RouteChildrenProps } from 'react-router-dom'
import { AppState } from '../../store'
import { getDataCards, getCards, deleteCard, addCard } from '../../store/cards'
import { getDataLists, getLists } from '../../store/lists'
import styles from '../../styles/boardDetails.module.scss'
import { AddCardForm } from '../AddCardForm'
import { Card } from '../Card'

interface ListsProps extends RouteChildrenProps<{ id: string }> {
    lists?: Array<any>
    cards?: Array<any>
    getLists?: (id?: string) => void
    getCards?: (id?: string) => void
    deleteCard: (id: string) => string
    addCard: (data: any) => void
    // handleSubmit?:(text?:string, id?:any) =>void
}



class BoardDetails extends React.Component<ListsProps> {

    componentDidMount() {
        this.props.getLists!(this.props.match?.params.id)
        this.props.getCards!(this.props.match?.params.id)

    }

    onDelete = (id: string) => {
        this.props.deleteCard(id)

    }

    handleSubmit = (name: string, idList: any) => {
        this.props.addCard({ name, idList })

    }
    render() {

        const { cards, lists } = this.props;
        return <div className={styles.boardDetails}>
            <h2>BoardDetails</h2>
            <div className={styles.wrapper}>
                {
                    lists!.map((list) => {
                        return <div key={list.id} className={styles.list}>
                            <h3>{list.name}</h3>
                            <div className="card-wrapper">
                                {cards!.map((card) => {
                                    if (list.id === card.idList) {
                                        return <Card key={card.id}
                                            dataCard={card}
                                            onDelete={(id:string) => this.onDelete(id)}
                                        />
                                    }
                                })}
                            </div>
                            <AddCardForm {...list}
                                handleSubmit={(text: string, id: any) =>
                                    this.handleSubmit(text, id)}
                            />
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        getLists: (id?: string) => dispatch(getDataLists(id as any)),
        getCards: (id?: string) => dispatch(getDataCards(id as any)),
        deleteCard: (id: string) => dispatch(deleteCard(id)),
        addCard: (data?: any) => dispatch(addCard(data as any))

    }
}

const ConnectLists = connect(mapStateToProps, mapDispatchToProps)(BoardDetails)

export { ConnectLists as BoardDetails }
