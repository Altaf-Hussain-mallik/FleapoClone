import { Component, HostListener } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHeaderVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isHeaderVisible = (window.pageYOffset > 100);
  };
}

