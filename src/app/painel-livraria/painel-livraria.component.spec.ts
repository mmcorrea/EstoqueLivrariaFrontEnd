import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLivrariaComponent } from './painel-livraria.component';

describe('PainelLivrariaComponent', () => {
  let component: PainelLivrariaComponent;
  let fixture: ComponentFixture<PainelLivrariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelLivrariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelLivrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
