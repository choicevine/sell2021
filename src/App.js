import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import Homescreen from './screens/Homescreen/homescreen'

import './_app.scss'
import './_base.scss'

const App = () => {
    return (
        <div>
           <Header />
           <div className="app__container border border-info">
            <Sidebar/>
            <Container fluid className="app_main border border-warning"> <Homescreen/> One Two Three
            </Container> 
           </div>
        </div>
    )
}

export default App
