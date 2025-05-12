import { Component, computed, HostListener, OnInit, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SIDENAV_ITENS } from './sidenav.const';

@Component({
  selector: 'erp-sidenav',
  imports: [FontAwesomeModule, MatTooltipModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  public data = SIDENAV_ITENS;
  public screenWidth = signal<number>(window.innerWidth);
  public viewMobile = computed<boolean>(() => {
    return this.screenWidth() < 768;
  })
  
  @HostListener("window:resize", ['$event'])
  onRezise() {
    this.screenWidth.set(window.innerWidth);
    console.log('Tela atual:', this.screenWidth());
  }

  ngOnInit(): void {
    this.onRezise();  
  }
}
