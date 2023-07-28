import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { MovieReview } from '../models/movie-review.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firestore: Firestore = inject(Firestore);

  constructor(){}
  
  public getReviews(): Observable<any[]>{
    const collectionInstance = collection(this.firestore,'movie-reviews');
    const movieReviews = collectionData(collectionInstance, {idField: 'id'});
    return movieReviews;
  }

  /*
  mapResultToMovieReview = (result: any): MovieReview => {
    
    return {
        id: result.id,
        author: result.author,
        authorId: result.authorId,
        title: result.title,
        date: result.date,
        content: result.content,
        photo_url:result.photo_url
    };
}
*/
  public getPosts(){}
  
  public addUsers(f: any){
    console.log(f.value);
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data saved successfully');
    })
    .catch((error)=>{
      console.log(error);
      
    })
  }
  
  public getUsers(): Observable<any[]>{
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, {idField: 'id'}).subscribe(val =>{
      console.log(val);
    })
    
    const userData = collectionData(collectionInstance, {idField: 'id'});
    return userData;
  }
  
  public updateUsers(id: string){
    const docInstance = doc(this.firestore, 'users', id);
    const updateData = {
      name: "updated name"
    }
    updateDoc(docInstance, updateData)
    .then(()=>{
      console.log('Data update');
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  public deleteUsers(id: string){
    const docInstance = doc(this.firestore, 'users', id);
    deleteDoc(docInstance).then(()=>{
      console.log('Deleted');
    })
  }
}

