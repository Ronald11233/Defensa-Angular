import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './Comp/menu/menu.component';
import { BodyComponent } from './Comp/body/body.component';
import { FooterComponent } from './Comp/footer/footer.component';
import { SliderComponent } from './Comp/slider/slider.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MenuComponent,BodyComponent,FooterComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EscobarChavez';

  
}
