import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './sitio/menu/menu.component';
import { BodyComponent } from './sitio/body/body.component';
import { SliderComponent } from './sitio/slider/slider.component';
import { FooterComponent } from './sitio/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[CommonModule,RouterOutlet,MenuComponent,BodyComponent,SliderComponent,FooterComponent]
})
export class AppComponent {
  title = 'pineda';
}
