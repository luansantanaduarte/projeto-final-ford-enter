import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HeaderAutenticadoComponent } from '../../elements/header-autenticado/header-autenticado.component';
import { SidebarNavComponent } from '../../elements/sidebar-nav/sidebar-nav.component';
import { FooterComponent } from '../../elements/footer/footer.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [HeaderAutenticadoComponent, SidebarNavComponent, FooterComponent, CommonModule, NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  public produtosLista1 = [
    {
      id: 1,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto1.jpg',
    },
    {
      id: 2,
      nome: 'Short streetwear',
      valor: 'R$ 49,99',
      img: 'assets/img/index-produto2.jpg',
    },
    {
      id: 3,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto3.jpg',
    },
    {
      id: 4,
      nome: 'Óculos',
      valor: 'R$ 29,99',
      img: 'assets/img/index-produto4.jpg',
    },
    {
      id: 5,
      nome: 'Camisa Polo',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto5.jpg',
    },
  ];

  public produtosLista2 = [
    {
      id: 1,
      nome: 'Conjunto de Jóias',
      valor: 'R$ 169,99',
      img: 'assets/img/index-produto6.jpg',
    },
    {
      id: 2,
      nome: 'Suéter',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto7.jpg',
    },
    {
      id: 3,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto1.jpg',
    },
    {
      id: 4,
      nome: 'Camisa Polo',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto5.jpg',
    },
  ]

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
