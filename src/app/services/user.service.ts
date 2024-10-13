import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserById(id: string): Promise<user> {
    const result = await fetch(`http://localhost:4000/users/${id} `);
    const user = await result.json();
    console.log(user)
    return user 
  }
}
