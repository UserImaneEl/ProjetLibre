import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddresseComponent } from './edit-addresse.component';

describe('EditAddresseComponent', () => {
  let component: EditAddresseComponent;
  let fixture: ComponentFixture<EditAddresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAddresseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
