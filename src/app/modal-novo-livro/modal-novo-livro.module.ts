import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNovoLivroComponent } from './modal-novo-livro.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, 
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ModalNovoLivroComponent
  ],
  declarations: [ModalNovoLivroComponent]
})
export class ModalNovoLivroModule { }
