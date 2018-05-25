import { Component} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PublicationService } from "./publication.service";
import { Publication} from "./publication.model";

@Component({
    selector: 'publication-input',
    templateUrl: './publication-input.component.html',
      styleUrls: ['./publication.component.css']
})
export class PublicationInputComponent {
    date: number = Date.now();
    time: string =this.date.toString();

    post: Publication;
    form: FormGroup;

    constructor(private Service: PublicationService) {}
    ngOnInit(){
        this.form = new FormGroup({
          
            content: new FormControl(null, Validators.required)
           
        });
      
    }
    
    onSubmit() {
        
            // Create
            const post = new Publication(this.form.value.content,this.time);
            this.Service.addPost(post);
                
                
        
        this.form.reset();
    }

  

 
    
}