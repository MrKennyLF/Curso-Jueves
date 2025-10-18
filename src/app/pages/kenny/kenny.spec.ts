import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kenny } from './kenny';

describe('Kenny', () => {
  let component: Kenny;
  let fixture: ComponentFixture<Kenny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kenny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kenny);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
