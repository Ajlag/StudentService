import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazOcenaComponent } from './prikaz-ocena.component';

describe('PrikazOcenaComponent', () => {
  let component: PrikazOcenaComponent;
  let fixture: ComponentFixture<PrikazOcenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazOcenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
