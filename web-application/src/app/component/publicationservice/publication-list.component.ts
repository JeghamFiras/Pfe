import { Component , OnInit } from '@angular/core';
import { Publication } from "./publication.model";
import {PublicationService} from "./publication.service";


@Component({
    selector: 'publication-list',
    templateUrl: './publication-list.component.html',
     styleUrls: ['./publication.component.css']
})
export class PublicationListComponent {
   posts : Publication [];

    constructor(private service : PublicationService) {}   
                              
    ngOnInit() {
        this.posts=this.service.getPosts();
    }
}
