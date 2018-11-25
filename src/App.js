import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from '../src/components/dashboard/Dashboard';
import ProjectDetail from "./components/projects/ProjectDetail";
import Sigin from "./components/auth/Sigin";
import SignUp from "./components/auth/SiginUp";
import CreateProject from "./components/projects/CreateProject";


class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Switch>
              <Route   exact path="/" component={Dashboard} />
                  <Route path="/project/:id" component={ProjectDetail}/>
                  <Route path="/sigin" component={Sigin} />
                  <Route path="/siginup" component={SignUp} />
                  <Route path="/create" component={CreateProject}/>
              </Switch>


          </div>
        </BrowserRouter>
    );
  }
}

export default App;
