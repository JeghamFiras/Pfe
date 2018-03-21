import { Component,ElementRef ,Input } from "@angular/core";
import { Publication } from "./publication.model";
import { PublicationService } from "./publication.service";


@Component({
    selector: 'publication',
    templateUrl: './publication.component.html',
     styleUrls: ['./publication.component.css']
   
})
export class PublicationComponent {
    @Input() post: Publication;
  
   
   
    constructor(
        private Service: PublicationService
        ) {}

    onDelete() {
        this.Service.deletePost(this.post);
    }
    

   
   
}