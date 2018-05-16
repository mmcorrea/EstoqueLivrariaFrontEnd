import { ModalNovoLivroComponent } from './../modal-novo-livro/modal-novo-livro.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelLivrariaComponent } from './painel-livraria.component';
import { ModalNovoLivroModule } from './../modal-novo-livro/modal-novo-livro.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ModalNovoLivroModule
    ],
  exports: [
    PainelLivrariaComponent
  ],
  declarations: [PainelLivrariaComponent]
})
export class PainelLivrariaModule { }
