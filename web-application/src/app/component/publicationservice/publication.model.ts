export class Publication {
    content: string;
    
    
postId?: string;

    
constructor(content: string,postId?: string)
 {
        this.content = content;
     
        this.postId = postId;
       

    }
}