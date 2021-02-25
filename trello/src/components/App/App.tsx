import * as React from 'react'
import { Header } from '../Header';
import { OAuth } from '../OAuth';
import { ProtectedRoute } from '../ProtectedRoute';
import { AppRoute, routes, ROUTES_URLS, } from './routes';

import { Route, Switch, Redirect, RouteChildrenProps, withRouter, RouteComponentProps } from 'react-router-dom'

import '../../styles/bace.scss'
import styles from '../../styles/app.module.scss';
import { init } from '../../store/initialization';
import { connect } from 'react-redux';


export interface Board {
    id: string;
    name: string;
    pinned: boolean;
    desc?: string;
}

interface AppState {
    token: string
    boards: Array<Board>
    userProfile: any
}

interface AppProps extends RouteComponentProps {
    onInit: () => void;
}

interface CustomToken {
    token: string, expireIn: number;
}

const INITIAL_STATE = {
    token: '',
    boards: [],
    userProfile: undefined,
    
}

class App extends React.Component<AppProps, AppState> {
    public state = INITIAL_STATE;

    componentWillMount() {
        this.props.onInit();
      }

    private renderContent() {
        return <main className={styles.main}>
            <Switch>
                {routes.map(this.renderRoute)}
                <Route path={ROUTES_URLS.OAUTH} render={(props: RouteChildrenProps) => <OAuth {...props} />} />
                <Redirect to={ROUTES_URLS.NOT_FOUND}/>     
            </Switch>        
        </main>
        
    }

    private renderRoute = (route: AppRoute, i: number) =>{
        if(route.isProtected) {
            return <ProtectedRoute 
                    exact={route.exact} 
                    key={i} 
                    path={route.path} 
                    render={route.render} 
                    
                    />   
        } else {
            return <Route 
                    exact={route.exact} 
                    key={i} 
                    path={route.path} 
                    render={(props) => route.render({...props})}/>
        }
    }

    public render() {  
        return(
            <div className="page">
                
                <Header onLogOut={() => console.log('log')} />
                {this.renderContent()}   
            </div>
        )
    }
}

const mapDispathToProps = (dispatch: any) => {
    return {
      onInit: () => dispatch(init())
    };
  };

const AppWithRouter = withRouter(connect(undefined, mapDispathToProps)(App));

export { AppWithRouter as App };