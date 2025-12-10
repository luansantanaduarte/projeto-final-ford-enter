import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HeaderAutenticadoComponent } from '../../elements/header-autenticado/header-autenticado.component';
import { SidebarNavComponent } from '../../elements/sidebar-nav/sidebar-nav.component';
import { FooterComponent } from '../../elements/footer/footer.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-index',
  imports: [HeaderAutenticadoComponent, SidebarNavComponent, FooterComponent, CommonModule, NgFor, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  constructor (private produtos: ProdutosService) {}
  public produtosLista1: any
  public produtosLista2: any

  ngOnInit() {
    this.produtosLista1 = this.produtos.produtos1
    this.produtosLista2 = this.produtos.produtos2
  }

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
