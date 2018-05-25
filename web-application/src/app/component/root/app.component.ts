import { Component } from '@angular/core';
import {PublicationService} from "../publicationservice/publication.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers: [PublicationService]
})
export class AppComponent {

}
