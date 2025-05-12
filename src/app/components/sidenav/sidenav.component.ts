import {
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SIDENAV_ITENS } from './sidenav.const';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'erp-sidenav',
  imports: [FontAwesomeModule, MatTooltipModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public data = SIDENAV_ITENS;
  public menuIcon = faBars;

  public expanded = signal<boolean>(true);
  public currentRoute = signal<string>('');
  public screenWidth = signal<number>(window.innerWidth);
  public viewMobile = computed<boolean>(() => {
    return this.screenWidth() < 768;
  });

  constructor(private route: Router) {
    this.currentRoute.set(route.url);
  }

  @HostListener('window:resize', ['$event'])
  onRezise() {
    this.screenWidth.set(window.innerWidth);
  }

  ngOnInit(): void {
    this.onRezise();
  }

  public toggleMenu() {
    this.expanded.update((prev) => !prev);
  }
}
