import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelityLabComponent } from './relity-lab.component';

describe('RelityLabComponent', () => {
  let component: RelityLabComponent;
  let fixture: ComponentFixture<RelityLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelityLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelityLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
