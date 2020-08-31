import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AboutPage} from './pages/AboutPage'
import {SingInPage} from './pages/SignInPage'
import {ChordPagesWrapper} from './components/ChordPagesWrapper'

export const useRoutes = (isAuthenticated) => {
    console.log('useRoutes execution!!!!---!!!!')
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/about' exact>
                    <AboutPage/>
                </Route>
                <Route path='/login' exact>
                    <SingInPage/>
                </Route>
                <Route path='/:chord'>
                    <ChordPagesWrapper/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/about' exact>
                <AboutPage/>
            </Route>
            <Route path='/login' exact>
                <SingInPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}
