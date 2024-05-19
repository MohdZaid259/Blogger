import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService{
  client = new Client();
  account;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl) 
      .setProject(conf.appwriteProjectId);   
    this.account=new Account(this.client)  
  }

  async signUp({email,password,name}){
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if(user){
        return true
      } return false
    } catch (error) {
        throw error
    }
  }


  async logIn({email,password}){
    try{
        const session = await this.account.createEmailPasswordSession(
          email,
          password
        )
        return session
    } catch(error){
        throw error
    }
  }

  async currentUser(){
    try {
      const currentUser = await this.account.get();
      return currentUser
    } catch (error) {
      console.log('Appwrite service :: currentUser :: error',error)
    } return null
  }
  
  async logOut(){
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log('Appwrite service :: logOut :: error',error)
    }
  }
}

const authService = new AuthService()
export default authService