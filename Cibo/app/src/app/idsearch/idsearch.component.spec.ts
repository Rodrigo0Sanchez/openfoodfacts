import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsearchComponent } from './idsearch.component';

describe('IdsearchComponent', () => {
  let component: IdsearchComponent;
  let fixture: ComponentFixture<IdsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
