import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajOceneComponent } from './dodaj-ocene.component';

describe('DodajOceneComponent', () => {
  let component: DodajOceneComponent;
  let fixture: ComponentFixture<DodajOceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajOceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajOceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
