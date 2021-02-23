import * as React from 'react'
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { AppState } from '../../store';
import { getUser, getUserProfile } from '../../store/userProfile';

interface UserPageProps extends RouteChildrenProps{
    UserParam?: any
    getUser?: () => void
}

class UserPage extends React.Component<UserPageProps> {
    componentDidMount() {
        this.props.getUser!()
    }

    render() {
        const {fullName, initials, username} = this.props.UserParam
        return <div>
            <div>{fullName}</div>
            <div>{initials}</div>
            <div>{username}</div>
        </div>
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        UserParam: getUser(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: () => dispatch(getUserProfile())
    }
}

const ConnectUser = connect(mapStateToProps,mapDispatchToProps)(UserPage)

export {ConnectUser as UserPage}
