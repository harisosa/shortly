import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShortlyService } from 'src/app/core/services/shortly-service.service';
import { of, throwError } from 'rxjs';
import { IResult } from 'src/app/core/interface/IResponse';
import { AppearanceAnimation, DialogLayoutDisplay, IToastCoreConfig, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';
const toast_config : IToastCoreConfig = {
  autoCloseDelay: 5000, // optional
  textPosition: 'right', // optional
  layoutType: DialogLayoutDisplay.CUSTOM_TWO,
  progressBar: ToastProgressBarEnum.DECREASE,
  toastUserViewType: ToastUserViewTypeEnum.SIMPLE,
  animationIn: AppearanceAnimation.BOUNCE_IN,
  toastPosition: ToastPositionEnum.TOP_FULL_WIDTH,
}
describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockShortService: jasmine.SpyObj<ShortlyService>;
  beforeEach(() => {
    const shortlyServiceSpy = jasmine.createSpyObj('ShortlyService', [
      'shorten',
    ]);

    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ShortlyService, useValue: shortlyServiceSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockShortService = TestBed.inject(
      ShortlyService
    ) as jasmine.SpyObj<ShortlyService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add link to links array upon successful submission', () => {
    const testLink = 'https://test.com';
    const testResult: IResult = {
      short_link: 'https://short.ly/test',
      full_short_link: '',
      short_link2: '',
      full_short_link2: '',
      share_link: '',
      full_share_link: '',
      original_link: '',
    } as any;

    mockShortService.shorten.and.returnValue(of(testResult));

    component.onSubmit(testLink);
    expect(component.links.length).toBe(1);
    expect(component.links[0].short_link).toBe(testResult.short_link);
  });

  it('should call openToast with error message on service failure', () => {
    const testLink = 'https://test.com';
    const testError = {
      error: { error: 'Test Error', disallowed_reason: 'Disallowed URL' },
    };

    mockShortService.shorten.and.returnValue(throwError(testError));

    spyOn(component, 'openToast');

    component.onSubmit(testLink);

    expect(component.openToast).toHaveBeenCalledWith(
      testError.error.disallowed_reason,
      testError.error.error
    );
  });

  it('should set copy to true for matching link and false for others', async () => {
    component.links = [
      { id: 1, full_short_link: 'https://test1.com', copy: false } as any,
      { id: 2, full_short_link: 'https://test2.com', copy: false },
    ];

    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());

    await component.onCopy(1); // Use await here

    expect(component.links[0].copy).toBe(true);
    expect(component.links[1].copy).toBe(false);
  });

  it('should handle clipboard write error correctly', fakeAsync(() => {
    const errorMessage = 'Clipboard write failed';

    component.links = [
      { id: 1, full_short_link: 'https://test1.com', copy: false } as any,
      { id: 2, full_short_link: 'https://test2.com', copy: false },
    ];

    spyOn(navigator.clipboard, 'writeText').and.returnValue(
      Promise.reject(errorMessage)
    );
    spyOn(component, 'openToast');

    component.onCopy(1);

    tick();

    expect(component.openToast).toHaveBeenCalledWith(
      'Copy Faild',
      errorMessage
    );
  }));
});
