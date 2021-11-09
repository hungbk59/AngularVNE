import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  @ViewChild('sidenav')sidenav?: MatSidenav;
  public isOpened = false;
 
  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav?.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}
