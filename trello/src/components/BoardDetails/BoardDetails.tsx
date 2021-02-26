import * as React from 'react'
import { connect } from 'react-redux'
import { RouteChildrenProps } from 'react-router-dom'
import { AppState } from '../../store'
import { getDataLists, getLists } from '../../store/lists'
import styles from '../../styles/boardDetails.module.scss'

interface ListsProps extends RouteChildrenProps {
    lists?: Array<any>
    getLists?: () => void
}

class BoardDetails extends React.Component<ListsProps> {
    componentDidMount() {
        this.props.getLists!()
     }
    render() {
        return <div className={styles.boardDetails}>
            <h2>BoardDetails</h2>
            <div className={styles.wrapper}>
            {this.props.lists!.map((item) => 
                <div className={styles.item} 
                    key={item.id}>
                        {item.name}
                </div>
            )}
            </div>
            
        </div>
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        lists: getLists(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getLists: () => dispatch(getDataLists())
    }
}

const ConnectLists = connect(mapStateToProps, mapDispatchToProps)(BoardDetails)

export {ConnectLists as BoardDetails}