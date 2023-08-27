import { Observable } from "rxjs";
import { IResult } from "./IResponse";

export interface IShortlyService {
    shorten(url:string): Observable<IResult>;
  }