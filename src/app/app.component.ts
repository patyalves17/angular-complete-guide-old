import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:string='recipe';
  title = 'aungular-complete-guide';

  onNavigate(event){
    this.loadedFeature=event;
  }
}
