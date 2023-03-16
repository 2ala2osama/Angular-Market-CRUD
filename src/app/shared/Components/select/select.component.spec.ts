import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctComponent } from './selct.component';

describe('SelctComponent', () => {
  let component: SelctComponent;
  let fixture: ComponentFixture<SelctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
