import  Jquery from 'jquery';

import setup from '../setup';

class User{
  constructor(){
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;

    if(localStorage.getItem('access_token')) {
      let {
        access_token,
        refresh_token,
        token_expires,
        token_create
      } = JSON.parse(localStorage.getItem('access_token'));
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = token_expires;
      this.token_create = token_create;
    }
  }


  isLoggedIn(){
    return this.access_token !== null;
    console.log("is be logged inned")
  }

  login(data, done){
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
      alert('You are logged in. Click Tweet List to send a tweet.')
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
      alert('You are registered. Now login to send a tweet.')
    })
  };
}

export default new User();
