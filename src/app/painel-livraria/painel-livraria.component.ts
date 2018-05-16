import { Livro } from './../Model/Livro';
import { RequestService} from './../request-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatFormField } from '@angular/material';
import { ModalNovoLivroComponent } from '../modal-novo-livro/modal-novo-livro.component';

@Component({
  selector: 'painel-livraria',
  templateUrl: './painel-livraria.component.html',
  styleUrls: ['./painel-livraria.component.css']
})

export class PainelLivrariaComponent implements OnInit {

  constructor(private requestService:RequestService) { }

  listaLivros:Array<Livro>;

  cadastro:boolean=false;

  ngOnInit() {
    this.requestService.get<Livro>('livros/listarlivros').subscribe(Response=>{ this.listaLivros = Response; console.log(this.listaLivros);});
  }

  openCadastro(){
    this.cadastro = !this.cadastro;
  }
}
