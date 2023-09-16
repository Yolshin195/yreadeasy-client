import { Component, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav/sidenav.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isSidenavOpen=false;
  title = 'yreadeasy-client';
  showFiller = false;

  constructor(private sidenavService: SidenavService) {
    sidenavService.getSidenavState().subscribe(isOpen => {
      this.isSidenavOpen = isOpen
    })
  }
}
