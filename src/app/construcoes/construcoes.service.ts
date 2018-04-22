import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContrucoesService {

  construcoesUrl = 'http://localhost:3004/construcoes';

  constructor(private http: HttpClient) {
  }

  listar() {
  return this.http.get<any[]>('${this.construcoesUrl');
  }

}
