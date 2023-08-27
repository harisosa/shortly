import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShortlyService } from '../interface/IShortlyService';
import { Observable,map } from 'rxjs';
import { IResponse, IResult } from '../interface/IResponse';
import CONSTANTS from '../constant/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ShortlyServiceService implements IShortlyService {

  constructor(private http: HttpClient) {}

  shorten(url: string): Observable<IResult> {
    return this.http.get<IResponse>(`${CONSTANTS.shorten_api}${url}`)
    .pipe(
      map((response: IResponse) => {
        return response.result;
      })
    );
  }
}
