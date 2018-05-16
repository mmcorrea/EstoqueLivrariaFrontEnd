import { Livro } from './../Model/Livro';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm, FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { RequestService } from '../request-service.service';

@Component({
  selector: 'novo-livro',
  templateUrl: './modal-novo-livro.component.html',
  styleUrls: ['./modal-novo-livro.component.css']
})
export class ModalNovoLivroComponent implements OnInit {
  
  @Output() cancelar = new EventEmitter<boolean>();
  
  formcadastro:FormGroup;
  
  constructor(private fb:FormBuilder, private reqService:RequestService) {
    this.formcadastro = this.fb.group({
      DS_Titulo :['', Validators.required],
      DS_Autor : ['', Validators.required],
      DT_Imagem : ''
    });
  }
  
  ngOnInit() {
  }
  
  fechar(){
    this.cancelar.emit(true)
  }
  
  salvar(){
    console.log(this.formcadastro.value);
    // this.reqService.post<any>('livros/adicionarlivro' , JSON.stringify(this.formcadastro.value))
    // .subscribe(data => {
    //   if(data.status == 200)
    // //   this.fechar();
    // })
  }
}
