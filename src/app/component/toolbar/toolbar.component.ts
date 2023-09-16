import { Component, Input } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  @Input() title?: string;

  constructor(private sidenavService: SidenavService) {}

  toggleDrawer() {
    this.sidenavService.toggleSidenav()
  }
}
