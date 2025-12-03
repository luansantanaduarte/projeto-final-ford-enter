  import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
  import { HeaderAutenticadoComponent } from '../../elements/header-autenticado/header-autenticado.component';
  import { SidebarNavComponent } from '../../elements/sidebar-nav/sidebar-nav.component';

  @Component({
    selector: 'app-index',
    imports: [HeaderAutenticadoComponent, SidebarNavComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
  })
  export class IndexComponent {
    @ViewChild('carrosselTendencias') carrosselTendencias!: ElementRef;
    @ViewChild('carrosselStreetwear') carrosselStreetwear!: ElementRef;

    passarEsquerda(carrossel: string): void {
      if (carrossel == 'tendencias') {
        this.carrosselTendencias.nativeElement.scrollLeft -= 300;
      } else if (carrossel == 'streetwear') {
        this.carrosselStreetwear.nativeElement.scrollLeft -= 300;
      }
    }

    passarDireita(carrossel: string): void {
      if (carrossel == 'tendencias') {
        this.carrosselTendencias.nativeElement.scrollLeft += 300;
      } else if (carrossel == 'streetwear') {
        this.carrosselStreetwear.nativeElement.scrollLeft += 300;
      }
    }
  }
