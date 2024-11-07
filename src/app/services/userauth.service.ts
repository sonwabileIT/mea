import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  isLoggedIn: boolean = false;

  constructor() { }

  getIsLoggedIn(){
    return this.isLoggedIn
  }

  async getUsers(): Promise<user[]>{
    let response = await fetch('http://localhost:4000/users');
    let users = await response.json()

    return users
  }

  async getUser(id: string): Promise<user>{
    let response = await fetch(`http://localhost:4000/users/${id}`)
    let user = await response.json()

    return user
  }

  setIsLoggedIn(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn
  }

  signIn(){
    this.setIsLoggedIn(true)
  }

  async login(email: string, password: string){
    //get users
    let users = await this.getUsers()
    try{
      let user = users.find(u => u.email === email && u.password === password)
      if(user === undefined){
        console.log('User does not exist.')
      }else{
        console.log("From userAuth:  " + user?.id + " " + user?.firstName)
      // let user = await this.getUser()
      localStorage.setItem('user', JSON.stringify(user));
      this.setIsLoggedIn(true)
      console.log(this.getIsLoggedIn())
      }
      
    }catch(err){
      console.log("Error message: " + err)
    }
    
    
    // let user = users.
    
  }

  logout(){
    if(this.isLoggedIn === true){
      localStorage.removeItem('user')
      this.setIsLoggedIn(false)
      console.log("Logout from Service")
      console.log("isLoggedIn: " + this.getIsLoggedIn())
    }
    
  }
}
