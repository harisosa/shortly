import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShortlyService } from './shortly-service.service';
import { IResponse, IResult } from '../interface/IResponse';
import CONSTANTS_API from '../constant/api.constant';

describe('ShortlyServiceService', () => {
  let service: ShortlyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortlyService]
    });
    service = TestBed.inject(ShortlyService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests.
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shorten the given url', () => {
    const dummyResponse : IResponse = {
      result: {
        short_link: 'https://short.ly/test',
        code: '',
      }  as any,
    } as any;

    const testUrl = 'https://test.com';

    service.shorten(testUrl).subscribe(response => {
      expect(response).toEqual(dummyResponse.result);
    });

    const req = httpMock.expectOne(`${CONSTANTS_API.shorten_api}${testUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
