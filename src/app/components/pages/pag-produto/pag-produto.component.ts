import { Component } from '@angular/core';
import { FooterComponent } from "../../elements/footer/footer.component";
import { HeaderAutenticadoComponent } from "../../elements/header-autenticado/header-autenticado.component";
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-pag-produto',
  imports: [FooterComponent, HeaderAutenticadoComponent],
  templateUrl: './pag-produto.component.html',
  styleUrl: './pag-produto.component.css'
})
export class PagProdutoComponent {
  produto: any;

  constructor(private route: ActivatedRoute, private produtosService: ProdutosService ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produto = this.produtosService.getProdutoPorId(id);

    console.log('Produto carregado:', this.produto);
  }
}
