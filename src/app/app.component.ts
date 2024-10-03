import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './services/comment.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IComment } from './definitions/comment.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  comments$: Observable<IComment[]> = this.commentsService.fetchComments();
  constructor(private commentsService: CommentService) {}
}
