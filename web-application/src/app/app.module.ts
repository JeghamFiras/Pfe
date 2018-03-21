import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicationComponent } from './component/publicationservice/publication.component';
import { PublicationService } from './component/publicationservice/publication.service';
import { PublicationListComponent } from './component/publicationservice/publication-list.component';
import { PublicationInputComponent } from './component/publicationservice/publication-input.component';
import { MicroserviceComponent } from './component/publicationservice/microservice.component';
import { Publication} from './component/publicationservice/publication.model';
import { AppComponent } from './component/root/app.component';
import { DataComponent } from './component/data/data.component';
import { MenuComponent } from './component/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GatewayService } from './service/gateway/gateway.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service-one', component: MicroserviceComponent},
  {path: 'service-two', component: DataComponent},
  {path: 'service-three', component: DataComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    PublicationComponent,
    PublicationInputComponent,
    PublicationListComponent,
    MicroserviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GatewayService,PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
