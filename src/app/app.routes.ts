import { Routes } from '@angular/router';
import { MenuComponent } from './Comp/menu/menu.component';
import { SliderComponent } from './Comp/slider/slider.component';
import { BodyComponent } from './Comp/body/body.component';
import { FooterComponent } from './Comp/footer/footer.component';

export const routes: Routes = [
    {
        path:'menu', component:MenuComponent
    },
    {
        path:'slider', component:SliderComponent
    },
    {
        path:'body', component:BodyComponent
    },
    {
        path:'footer', component:FooterComponent
    }

];
