import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RelityLabComponent } from './relity-lab/relity-lab.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RelityLabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
