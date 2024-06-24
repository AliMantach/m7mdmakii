import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangmentComponent } from './admin-mangment.component';

describe('AdminMangmentComponent', () => {
  let component: AdminMangmentComponent;
  let fixture: ComponentFixture<AdminMangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMangmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
