import { Component } from '@angular/core';
import { FooterComponent } from '../../elements/footer/footer.component';
import { HeaderHomeComponent } from "../../elements/header-home/header-home.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public carrossel = [
    {
      link: 'assets/img/streetwear_carrossel.jpg',
      tipo: 'Streetwear',
    },
    {
      link: 'assets/img/afro_carrossel.jpg',
      tipo: 'Afro',
    },
    {
      link: 'assets/img/oldmoney_carrossel.png',
      tipo: 'Old Money',
    },
  ];

  public contadorCarrossel: number = 0;
  public indiceMaxDoCarrossel: number = this.carrossel.length - 1;
  private intervalo: any;

  iniciarIntervalo(): void {
    this.intervalo = setInterval(() => {
      this.avancarCarrossel();
    }, 5000);
  }

  resetarIntervalo(): void {
    clearInterval(this.intervalo);
    this.iniciarIntervalo();
  }

  ngOnInit(): void {
    this.iniciarIntervalo();
  }

  avancarCarrossel(): void {
    this.contadorCarrossel++;
    if (this.contadorCarrossel > this.indiceMaxDoCarrossel) {
      this.contadorCarrossel = 0;
    }
  }

  avancarCarrosselManual() {
    this.resetarIntervalo();
    this.avancarCarrossel();
  }

  retrocederCarrossel(): void {
    this.contadorCarrossel--;
    if (this.contadorCarrossel < 0) {
      this.contadorCarrossel = this.indiceMaxDoCarrossel;
    }
  }
}
