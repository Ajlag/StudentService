import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazStudenataComponent } from './prikaz-studenata.component';

describe('PrikazStudenataComponent', () => {
  let component: PrikazStudenataComponent;
  let fixture: ComponentFixture<PrikazStudenataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazStudenataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
