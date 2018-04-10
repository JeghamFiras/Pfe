import { Publication } from "./publication.model";

import {Http,Response,Headers} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";


export class PublicationService {
    private posts:Publication[]=[];


 
                        addPost(post:Publication)
                        {
                           this.posts.push(post);
                           console.log(this.posts);
                                
                           
                    }
                                        getPosts(){
                                            console.log(this.posts);
                                           return this.posts   ; }
                                        
                        deletePost(post: Publication){
                            this.posts.splice(this.posts.indexOf(post), 1);
                        }
}