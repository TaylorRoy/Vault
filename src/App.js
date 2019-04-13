import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../src/components/pages/About";
import PasswordList from "../src/components/pages/PasswordList";
import Login from "../src/components/pages/Login";
import NewPassword from "../src/components/pages/NewPassword";
import CreateUser from "../src/components/pages/CreateUser";
import './reset.css';
import './App.css';
import Consumer, { GlobalState } from './GlobalState';


// class App extends Component {

//   render() {
//     return (
    
//         <Router>
//           <div>
//             <Route exact path="/" component={Login} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/newpassword" component={NewPassword} />
//             <Route exact path="/list" component={List} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/CreateUser" component={CreateUser} />
//           </div>
//         </Router>

//     );
//   }
// }


// export default App;


const App = (props) => (
	<GlobalState history={props.history}>
		<Consumer>
			{(global) => (
				<React.Fragment>
					
          <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/newpassword" component={NewPassword} />
            <Route exact path="/list" component={PasswordList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/createuser" component={CreateUser} />
          </div>
        </Router>
  
					{/* <Switch>
						<div>

							<Route exact path="/" component={Login} />
							<Route exact path="/login" component={Login} />
							{global.state.authenticated && <Route exact path="/profile" component={Profile} />}
							{(global.state.authenticated && global.state.adminAuthenticated) && <Route exact path="/admin" component={Admin} />}
							{(global.state.authenticated && global.state.adminAuthenticated) && <Route exact path="/badge" component={Badge} />}
							{(global.state.authenticated && global.state.adminAuthenticated) && <Route exact path="/sameday" component={Sameday} />}
							{(global.state.authenticated) && <Route exact path="/ManualLead" component={ManualLead} />}


						</div>
					</Switch> */}
				</React.Fragment>
			)}
		</Consumer>
	</GlobalState>
);

// export default withRouter(App);
export default App;