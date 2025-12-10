import { Component } from '@angular/core';
import { HeaderAutenticadoComponent } from "../../elements/header-autenticado/header-autenticado.component";
import { SidebarNavComponent } from "../../elements/sidebar-nav/sidebar-nav.component";
import { FooterComponent } from "../../elements/footer/footer.component";
import { CommonModule, NgForOf } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { FormsModule } from "@angular/forms";
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-timeline',
  imports: [HeaderAutenticadoComponent, SidebarNavComponent, FooterComponent, CommonModule, NgForOf, FormsModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  constructor(private loginService: LoginService) {}

  ngOnInit() {
     const postsSalvos = localStorage.getItem('posts');
     if (postsSalvos) {
      this.posts = JSON.parse(postsSalvos)
     }
  }

  conteudoPost = "";
  editorPost: boolean = false;
  gerarData(): string {
    return new Date().toString()
  }

  public posts = [ 
    {
      tempoPostado: this.gerarData(),
      usuario: 'Jdbooty',
      conteudo: 'Vi uma jaqueta muito bonita e queria compartilhar com vocês!',
      // img: ,
    },
    {
      tempoPostado: this.gerarData(),
      usuario: 'LuanSantana',
      conteudo: 'Afropunk hoje!',
    },
    {
      tempoPostado: this.gerarData(),
      usuario: 'LuanSantana',
      conteudo: 'Descobri uma loja incrível hoje!',
    }
  ]

  mostrarEditorPost() {
    this.editorPost = true;
  }

  esconderEditorPost() {
    this.editorPost = false
  }

  criarPost() {
    this.posts.unshift (
      {
        tempoPostado: this.gerarData(),
        usuario: this.loginService.lerUsuarioLogado()?.usuario || 'usuario',
        conteudo: this.conteudoPost,
      }
    )
    
    localStorage.setItem('posts', JSON.stringify(this.posts));

    this.editorPost = false
  }

}
