import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  imageUrls: string = '/assets/data/imageSource.js';

  constructor(private _http: HttpClient) { }

  getImageUrl(): Observable<any> {
    return this._http.get<string[]>(this.imageUrls);
  }
}
