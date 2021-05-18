import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.model';
import { environment } from '../../../../../environments/environment';
import { delay } from 'rxjs/operators';
const { api } = environment;
@Injectable()
export class PhotoBoardService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${api}/photos`).pipe(delay(2000));
  }
}
