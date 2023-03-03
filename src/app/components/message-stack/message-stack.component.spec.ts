import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStackComponent } from './message-stack.component';

describe('MessageStackComponent', () => {
  let component: MessageStackComponent;
  let fixture: ComponentFixture<MessageStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
