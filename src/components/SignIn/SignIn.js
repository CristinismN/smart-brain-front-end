import React from 'react';


// const SignIn = (props) => {// converting to state, so going to use class
  class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        signInEmail: '',
        signInPassword: ''
      }
    }
    onEmailChange = (event) => {
      this.setState({signInEmail: event.target.value})
    } //in order to get the input values, we create a new function that will listen to the onChange event of the email

    onPasswordChange = (event) => {
      this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
      fetch('https://stark-temple-96311.herokuapp.com/signin', { // fetch by default does a get request, but we want to do a post here, so we can pass a 
      //second parameter that describes what the req will be
        method: 'post',
        headers: {'Content-Type' : 'application/json'}, // header accepts an object; we wrap 'Content-Type' in quotes because it contains '-'
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        }) , 
      })
        .then(response => response.json())
        .then(user => {
          // if (data === 'success') {
            // this.props.onRouteChange('home');
          // }
          if (user.id) {
            this.props.onRouteChange('home');
            this.props.loadUser(user);
          }
        })
      
    }

    render() {
      const {onRouteChange} = this.props;
      return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="pa4 black-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                      onChange= {this.onEmailChange} 
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                      type="email" 
                      name="email-address"  
                      id="email-address" />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                      type="password" 
                      name="password"  
                      id="password" 
                      onChange= {this.onPasswordChange}/>

                  </div>
                </fieldset>
                <div className="">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                         onClick={this.onSubmitSignIn}
                         type="submit" 
                         value="Sign in" />
                </div>
                <div className="lh-copy mt3">
                  <p onClick={()=> onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                </div>
              </div>
        </main>
    </article> 
    );
    }
    
}

export default Signin;

//part of front end / backend connection: 2 inputs here -> email & pass, that when we click sign in
//we have to send through req.body to the server, the server checks
//if the user exists and give us a response

//we can create the fetch function in the app.js, because signin is its own component and the rest of the app, after the signin
//doesn't really care if it succeeded or not, signin's functionality can stay the component. so we will change this into a smart component
// a component with STATE