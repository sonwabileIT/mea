import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModulesComponent } from './my-modules.component';

describe('MyModulesComponent', () => {
  let component: MyModulesComponent;
  let fixture: ComponentFixture<MyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
