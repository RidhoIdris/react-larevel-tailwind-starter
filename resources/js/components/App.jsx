import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Footer from './Footer'

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/page1' component={Page1} />
                <Route exact path='/page2' component={Page2} />
                <Route exact path='/page3' component={Page3} />
              </Switch>
              <Footer/>
            </div>
        </BrowserRouter>
    )
}
