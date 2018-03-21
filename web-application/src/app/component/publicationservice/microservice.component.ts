import { Component,OnInit} from "@angular/core";

import {PublicationService} from "./publication.service";

@Component({
    selector: 'microservice',
    templateUrl: './microservice.component.html',
     styleUrls: ['./publication.component.css']
   
})
export class MicroserviceComponent {
      constructor(private service : PublicationService) {}   
                              
    ngOnInit() {
        this.service.getPosts();
    }
   
   
}