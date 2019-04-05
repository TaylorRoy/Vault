import React,{Component,createContext} from "react";
// import API from "./utils/API";
// import axios from "axios";
const {Provider, Consumer} = createContext()

class GlobalState extends Component {
	constructor (props){
		super (props)
		this.state = {
			test: "I am the test",
			username:"",
			authenticated: false,
			adminAuthenticated: false,
			authRes: null
		}
	}
	
	updateUsername = (event) => {
		this.setState({
			username: event.target.value
		})
	}
	
	setAuthRes = (authStatus) => {
		console.log("in global setAuthRes", authStatus);
		if (authStatus.user.username === "auth"){
			console.log("in setAuthRes if")
			this.setState({
				authRes: authStatus,
				username: authStatus.user.username,
				authenticated: true,
				adminAuthenticated:true
			})
			// this.props.history.push('/newpassword')

		}
		else {
			console.log("in setAuthRes else")
			this.setState({
				authRes: authStatus,
				username: authStatus.user.username,
				authenticated: true,
			})

			// this.props.history.push('/newpassword')
		}
	}

	// logOut = () =>{
	// 	API.signOut()
	// 	.then(res => {
	// 		this.handleAuthRes(res)
	// 		this.props.history.push('/login')
			
  //   }).catch(err => {
  //     console.log(err)
  //   })
		
	// 	this.props.history.push('/login')
	// 	console.log("Logged out successfully")
		
	// }


	setPage = (page) => {
		this.props.history.push(page)
	}
//verify login

	// componentWillMount(){
  //   this.isSignedIn()
  // }

  // isSignedIn = () => {
    
	// 	API.verifySignIn()
	// 	.then(res => {
	// 		this.handleAuthRes(res)
	// 		console.log("verify api call")
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  handleAuthRes = (res) => {
		// if(res.data.message){alert(res.data.message)}
		console.log(res)
    this.setState({
      username:res.data.username,
			authenticated:res.data.auth,
			adminAuthenticated:res.data.admin
    })
  }
	

	render() {
		console.log(this.state)
		return (
			<Provider
				value={{
					state: this.state,
					updateUsername: this.updateUsername,
					setAuthRes: this.setAuthRes,
					logOut: this.logOut,
					setPage:this.setPage
				}}
			>
				{this.props.children}
			</Provider>
			
		)
	};
}
export default Consumer;
export {GlobalState}