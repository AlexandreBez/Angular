import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VericaEmailComponent } from './verica-email.component';

describe('VericaEmailComponent', () => {
  let component: VericaEmailComponent;
  let fixture: ComponentFixture<VericaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VericaEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VericaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
