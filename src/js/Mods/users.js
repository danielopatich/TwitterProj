import  Jquery from 'jquery';

class User{
  constructor(){
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    // this.listeners = [];
  }

  // subscribe(callback) {
  //   this.listeners.push(callback)
  // }
  //
  // dispatch() {
  //   this.listeners
  // }

  isLoggedIn(){
    return this.access_token !== null;
    console.log("is be logged inned")
  }

  login(data){
    let url = 'https://twitterapii.herokuapp.com/oauth/token'
    data.grant_type = 'password';
    let options = {
      url: url,
      method: "POST",
      data: data
    }
    Jquery.ajax(options).then(response => {
      console.log(response, "oauth RESPONSE")
      let {access_token, refresh_token, expires_in} = response;
      this.access_token = access_token
      this.refresh_token = refresh_token
      this.token_expires = expires_in
      console.log(access_token)

      // this.dispatch()
    })
  };


  register(data){
    let url = 'https://twitterapii.herokuapp.com/users.json'
    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    Jquery.ajax(options).then(response =>{
      console.log(response)
    })
  };
}

export default new User();
