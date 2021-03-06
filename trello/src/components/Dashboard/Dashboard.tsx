import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import {connect} from 'react-redux'
import {AppState} from '../../store'
import {getBoards, getDataBoards} from '../../store/boards'
import { Board } from '../Board';
import styles from '../../styles/boardDetails.module.scss'

interface DashBoardProps extends RouteChildrenProps {
    token?: string; 
    boards?: Array<any>;
    getBoards?: () => void
}
class DashBoard extends React.Component<DashBoardProps> { 
    componentDidMount() {
       this.props.getBoards!()
    }
    render() {    
        console.log(this.props.boards);
        
        return <div>
                    <h1>DashBoard Page</h1> 
                    <div className={styles.boardWrapp}>
                        {this.props.boards!.map((item) => <Board key={item.id} {...item}/>)}
                    </div>
                    
                </div> 

    }
}

const mapStateToProps = (state: AppState) => {
    return {
        boards: getBoards(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getBoards: () => dispatch(getDataBoards())
    }
}

const ConnectDashboard = connect(mapStateToProps, mapDispatchToProps)(DashBoard)

export {ConnectDashboard as DashBoard}