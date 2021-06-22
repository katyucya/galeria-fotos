import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

<galeria-component 
titulo="Foto de viagens"
[fotos] = "[
 'assets/DSC_0003.JPG',
  'assets/DSC_0622.JPG',
  'assets/DSC_0624.JPG',
  'assets/DSC_2617.JPG',
  'assets/IMG_20190130_132040.jpg',
]">
</galeria>
export class AppComponent { 
}
