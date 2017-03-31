/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacebookInteComponent } from './facebook-inte.component';

describe('FacebookInteComponent', () => {
  let component: FacebookInteComponent;
  let fixture: ComponentFixture<FacebookInteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookInteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookInteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
