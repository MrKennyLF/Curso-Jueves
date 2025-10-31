import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rafael } from './rafael';

describe('Rafael', () => {
  let component: Rafael;
  let fixture: ComponentFixture<Rafael>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rafael]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rafael);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
