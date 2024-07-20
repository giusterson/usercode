import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddButtonComponent } from './task-add-button.component';

describe('TaskAddButtonComponent', () => {
  let component: TaskAddButtonComponent;
  let fixture: ComponentFixture<TaskAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
