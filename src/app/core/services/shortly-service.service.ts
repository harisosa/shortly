import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShortlyService } from '../interface/IShortlyService';
import { Observable,map } from 'rxjs';
import { IResponse, IResult } from '../interface/IResponse';
import CONSTANT_API from '../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class ShortlyServiceService implements IShortlyService {

  constructor(private http: HttpClient) {}

  shorten(url: string): Observable<IResult> {
    return this.http.get<IResponse>(`${CONSTANT_API.shorten_api}${url}`)
    .pipe(
      map((response: IResponse) => {
        return response.result;
      })
    );
  }
}
