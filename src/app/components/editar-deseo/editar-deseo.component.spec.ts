import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeseoComponent } from './editar-deseo.component';

describe('EditarDeseoComponent', () => {
  let component: EditarDeseoComponent;
  let fixture: ComponentFixture<EditarDeseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDeseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
