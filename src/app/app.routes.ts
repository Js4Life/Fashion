import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path:'' , component : AppComponent},
    { path :'home1' , component : HomeComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, { useHash:true})
    ],
    exports: [RouterModule]
})

export class AppRouting {}