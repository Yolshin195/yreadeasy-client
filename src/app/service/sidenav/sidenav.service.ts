import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private isSidenavOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSidenavState() {
    return this.isSidenavOpen.asObservable();
  }

  toggleSidenav() {
    this.isSidenavOpen.next(!this.isSidenavOpen.value);
  }
}
