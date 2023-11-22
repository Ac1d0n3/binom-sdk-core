import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BnJSONloaderService {

  constructor() { }

  getData(url: string): Observable<any> {
    return from(fetch(url)).pipe(
      map(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      }),
      catchError(error => {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
      })
    );
  }
}
