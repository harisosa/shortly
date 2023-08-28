import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle "display-mobile-nav" attribute on navClick', () => {
    const primaryNavigationElement: HTMLElement = fixture.debugElement.query(By.css('.navigation')).nativeElement;
    expect(primaryNavigationElement.hasAttribute('display-mobile-nav')).toBeFalsy();
    component.navClick();
    fixture.detectChanges();

    expect(primaryNavigationElement.hasAttribute('display-mobile-nav')).toBeTruthy();
  });
});
