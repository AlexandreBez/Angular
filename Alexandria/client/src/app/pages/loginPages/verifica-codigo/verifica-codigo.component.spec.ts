import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaCodigoComponent } from './verifica-codigo.component';

describe('VerificaCodigoComponent', () => {
  let component: VerificaCodigoComponent;
  let fixture: ComponentFixture<VerificaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificaCodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
