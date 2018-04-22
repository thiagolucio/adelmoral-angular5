import { Injectable} from "@angular/core";
import { HttpClient }from '@angular/common/http';
import { IConstrucoes } from "./construcoes.component";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContrucoesService {
  
  private _url: string = "/assets/data/construcoes.json";
  
  constructor(private http: HttpClient) { }

getConstrucoes():Observable<IConstrucoes[]> {
  return this.http.get<IConstrucoes[]>(this._url);
}

}
