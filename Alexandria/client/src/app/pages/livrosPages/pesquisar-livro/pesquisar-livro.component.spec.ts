import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarLivroComponent } from './pesquisar-livro.component';

describe('PesquisarLivroComponent', () => {
  let component: PesquisarLivroComponent;
  let fixture: ComponentFixture<PesquisarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
