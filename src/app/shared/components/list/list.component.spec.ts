import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataModel } from 'src/app/core/model/data';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should accept @Input link_list', () => {
    const testData: DataModel[] = [/* some mock data for testing */];
    component.link_list = testData;
    fixture.detectChanges();
    expect(component.link_list).toEqual(testData);
  });

  it('should emit copy_button event with correct id on copyLink call', () => {
    spyOn(component.copy_button, 'emit');
    const testId = 5;
    component.copyLink(testId);
    expect(component.copy_button.emit).toHaveBeenCalledWith(testId);
  });
});
