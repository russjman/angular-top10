import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Top10PanelComponent } from './top10/top10-panel/top10Panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Top10PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'angular-top10';
}
