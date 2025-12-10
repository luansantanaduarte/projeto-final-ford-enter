import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor() { }

  public produtos1 = [
    {
      id: 1,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto1.jpg',
      descricao: 'Camisa oversized com caimento amplo, perfeita para o estilo streetwear. A peça é destacada pela estampa frontal em tipografia marcante, trazendo identidade urbana e atitude. Confeccionada em tecido macio, oferece conforto e um visual estiloso para o dia a dia ou fotos para redes sociais.'
    },
    {
      id: 2,
      nome: 'Short streetwear',
      valor: 'R$ 49,99',
      img: 'assets/img/index-produto2.jpg',
      descricao: 'Short estilo streetwear em modelagem solta, feito para conforto e estilo. A peça aparece em tom claro e combina com camisetas oversized, tênis esportivos e acessórios urbanos. Ideal para dias quentes ou para quem curte um lifestyle mais descolado.'
    },
    {
      id: 3,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto3.jpg',
      descicao: 'Camisa oversized branca com estampa grande de tubarão nas costas — icônica, moderna e com forte estética hypebeast. O modelo possui caimento solto, oferecendo conforto e personalidade ao look. Combina perfeitamente com shorts largos, jeans soltos e acessórios de rua.'
    },
    {
      id: 4,
      nome: 'Óculos',
      valor: 'R$ 29,99',
      img: 'assets/img/index-produto4.jpg',
      descricao: 'Um óculos de armação leve com design moderno e minimalista. A estrutura apresenta um tom amadeirado claro, trazendo um visual natural e artesanal. As lentes redondas dão personalidade ao acessório, ideal para quem busca estilo casual e contemporâneo. Perfeito para completar looks fashion ou streetwear.'
    },
    {
      id: 5,
      nome: 'Camisa Polo',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto5.jpg',
      descricao: 'Camisa polo masculina em tom terroso, feita em tecido confortável e elegante. O colarinho clássico e o zíper frontal substituindo os botões tornam a peça moderna, sem perder a simplicidade. Uma opção ideal para compor looks casuais mais arrumados, combinando bem com jeans, calças claras ou até peças esportivas.'
    },
  ];

  public produtos2 = [
    {
      id: 1,
      nome: 'Conjunto de Jóias',
      valor: 'R$ 169,99',
      img: 'assets/img/index-produto6.jpg',
      descricao: 'Conjunto masculino de acessórios estilo street, composto por colares e braceletes que reforçam uma estética sofisticada e moderna. As peças possuem design marcante e combinam com looks pretos, monocromáticos ou minimalistas. Um conjunto ideal para quem gosta de destacar personalidade através de acessórios.'
    },
    {
      id: 2,
      nome: 'Suéter',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto7.jpg',
      descricao: 'Suéter masculino verde texturizado, com design estiloso e versátil. O tecido aparenta ser macio, trazendo conforto térmico e caimento elegante. O visual combina perfeitamente com jeans, calças de alfaiataria leve ou acessórios urbanos, como pochetes transversais. Excelente para dias mais frios com pegada streetwear premium.'
    },
    {
      id: 3,
      nome: 'Camisa Oversized',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto1.jpg',
      descricao: 'Camisa oversized com caimento amplo, perfeita para o estilo streetwear. A peça é destacada pela estampa frontal em tipografia marcante, trazendo identidade urbana e atitude. Confeccionada em tecido macio, oferece conforto e um visual estiloso para o dia a dia ou fotos para redes sociais.'
    },
    {
      id: 4,
      nome: 'Camisa Polo',
      valor: 'R$ 69,99',
      img: 'assets/img/index-produto5.jpg',
      descricao: 'Camisa polo masculina em tom terroso, feita em tecido confortável e elegante. O colarinho clássico e o zíper frontal substituindo os botões tornam a peça moderna, sem perder a simplicidade. Uma opção ideal para compor looks casuais mais arrumados, combinando bem com jeans, calças claras ou até peças esportivas.'
    },
  ]

  getProdutoPorId(id: number) {
    return [...this.produtos1, ...this.produtos2].find(p => p.id === id);
  }
}
