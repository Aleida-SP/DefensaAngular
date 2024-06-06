import { Routes } from '@angular/router';
import { MenuComponent } from './sitio/menu/menu.component';
import { BodyComponent } from './sitio/body/body.component';
import { SliderComponent } from './sitio/slider/slider.component';
import { FooterComponent } from './sitio/footer/footer.component';
export const routes: Routes = [
    {
        path:'menu', component:MenuComponent
    },
    {
        path:'body',component:BodyComponent
    },
    {
        path:'slider', component:SliderComponent
    },
    {
        path:'footer',component:FooterComponent
    }
];
