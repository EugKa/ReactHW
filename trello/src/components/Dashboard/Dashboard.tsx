import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import {connect} from 'react-redux'
import {decreaseCount, increaseCount, AppState, getCount} from '../../store'
import {getBoards, getDataBoards} from '../../store/boards'


interface DashBoardProps extends RouteChildrenProps {
    token?: string; 
    myCount?: number;
    boards?: Array<any>;
    onIncrease?: () => void
    onDecrease?: () => void
    getBoards?: () => void
}
class DashBoard extends React.Component<DashBoardProps> { 
    componentDidMount() {
       this.props.getBoards!()
    }
    increase = () => {
        this.props.onIncrease && this.props.onIncrease()
    }
    decrease =() => {
        this.props.onDecrease && this.props.onDecrease()
    }
    render() {    
        return <div>
                    <h1>DashBoard Page</h1> 
                    <div>{this.props.myCount}</div>
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                    {this.props.boards!.map((item) => <div key={item.id}>{item.name}</div>)}
                </div> 

    }
}

const mapStateToProps = (state: AppState) => {
    return {
        myCount: getCount(state),
        boards: getBoards(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onIncrease: () => dispatch(increaseCount()),
        onDecrease: () => dispatch(decreaseCount()),
        getBoards: () => dispatch(getDataBoards())
    }
}

const ConnectDashboard = connect(mapStateToProps, mapDispatchToProps)(DashBoard)

export {ConnectDashboard as DashBoard}