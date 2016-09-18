import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Partner } from './partner';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PartnerService {

  constructor (private http: Http) {}
  private partnersUrl = 'http://localhost:3333/api/partners';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});


  getPartners(): Promise<Partner[]> {
    return this.http.get(this.partnersUrl)
               .toPromise()
               .then(response => response.json().data as Partner[])
               .catch(this.handleError);
  }

  getPartner(id: number): Promise<Partner> {
    /*
        return this.http.get(this.partnersUrl + '/' + id)
                   .toPromise()
                   .then(response => response.json().data as Partner)
                   .catch(this.handleError);
                   */
      return this.getPartners()
        .then(partners => partners.find(partner => partner.id === id));
  }

  updatePartner(partner: Partner): Promise<Partner> {
    const url = `${this.partnersUrl}/${partner.id}`;
    return this.http
      .put(url, JSON.stringify(partner), {headers: this.headers})
      .toPromise()
      .then(() => partner)
      .catch(this.handleError);
    }

  createPartner(partner: Partner): Promise<Partner> {
      return this.http
        .post(this.partnersUrl, JSON.stringify(partner), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

  deletePartner(id: number): Promise<void> {
    let url = `${this.partnersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  };
}
