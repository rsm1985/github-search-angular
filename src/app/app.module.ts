import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { SearchComponent } from './search/search.component';
import { RepositoryComponent } from './repository/repository.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanelComponent } from './panel/panel.component';


const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'list', component: ListComponent},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    SearchComponent,
    RepositoryComponent,
    ListComponent,
    NotFoundComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
