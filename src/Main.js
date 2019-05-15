import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FileUpload from "./FileUpload";
import AudioPlayer from "./AudioPlayer";

/*
    We define our routes in this component.
 */

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={FileUpload}/>
            <Route path='/fileUpload' component={FileUpload}/>
            <Route path='/audioPlayer' component={AudioPlayer}/>
        </Switch>
    </main>
);

export default Main
