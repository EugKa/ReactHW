import * as React from 'react'
import { Login } from '../Login'
import { DashBoard } from '../Dashboard'
import { NotFound } from '../NotFound'
import {Redirect, RouteChildrenProps} from 'react-router-dom'
import { OAuth } from '../OAuth'
 
export interface AppRoute {
    path: string,
    render: (props: any) => any,
    title?: string,
    isHidden?: boolean,
    exact?: boolean
}

export const routes: Array<AppRoute> = [
    {
        path: "/login",
        render: (props: any) => <Login {...props}/>,
        title: 'Login',
    },
    {
        path: "/dashbodard",
        render: (props: RouteChildrenProps) => <DashBoard {...props}/>,
        title: 'Dashboard',
    },
    {
        path: "/",
        render: () => <Redirect to="/login"/>,
        isHidden: true,
        exact: true
    },
    {
        path: "/404",
        render: (props: RouteChildrenProps) => <NotFound {...props}/>,
        isHidden: true,
    },
    
]