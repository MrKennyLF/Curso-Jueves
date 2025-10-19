import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennyComponent } from './kenny';

describe('Kenny', () => {
  let component: KennyComponent;
  let fixture: ComponentFixture<KennyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KennyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
