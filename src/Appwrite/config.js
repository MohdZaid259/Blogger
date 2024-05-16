import { Client, Databases, ID , Storage , Query} from "appwrite";
import conf from "../conf/conf";

class Service{
  client = new Client
  databases
  storage

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.databases =new Databases(this.client);
    this.storage = new Storage(this.client)
  }

  async createPost({slug,title,content,image,userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          image,
          userId
        }
      )
    } catch (error) {
      console.log('Appwrite service :: createPost :: error',error)
    }
  }

  async updatePost(slug,{title,content,image}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          image
        }
      )
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error',error)
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error',error)
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log('Appwrite service :: getPost :: error',error)
    } return null
  }

  async getAllPost(){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // Todo : [Query.equal('','')] 
      )
    } catch (error) {
      console.log('Appwrite service :: getAllPost :: error',error)
    } return null
  }

  async uploadFile(file){
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error',error)
    }
  }

  async deleteFile(fileId){
    try {
      await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId
    );
    } catch (error) {
      console.log('Appwrite service :: deleteFile :: error',error)
    }
  }

  getFilePreview(fileId){
    try {
      this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log('Appwrite service :: getFilePreview :: error',error)
    } return null
  }
}

const service=new Service()
export default service