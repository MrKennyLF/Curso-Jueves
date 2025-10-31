import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdanComponent } from './adan.component';

describe('AdanComponent', () => {
  let component: AdanComponent;
  let fixture: ComponentFixture<AdanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
