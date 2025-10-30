import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Danelly } from './danelly';

describe('Danelly', () => {
  let component: Danelly;
  let fixture: ComponentFixture<Danelly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Danelly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Danelly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
