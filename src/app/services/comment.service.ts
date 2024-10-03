import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { IComment } from '../definitions/comment.interface';
import { commentMock } from '../definitions/comment.mock';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly apiUrlBase = '/api';
  private http = inject(HttpClient);

  constructor() {}

  fetchComments(): Observable<IComment[]> {
    return of(commentMock.data);
    // return this.http.get([this.apiUrlBase, 'comments'].join('/'))
    //   .pipe(
    //     map((data: any) => {
    //       return data.data as CommentDTO[]
    //     })
    //   );
  }
}
