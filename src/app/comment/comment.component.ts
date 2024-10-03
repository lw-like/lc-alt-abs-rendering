import { Component, computed, HostBinding, input } from '@angular/core';

const CANVAS_SIZE = 600;

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  template: `
    <div class="comment__content">
        <ng-content></ng-content>
    </div>
  `,
  styleUrl: './comment.component.scss',
  host: {
    '[style.transform]': 'transform()',
    '[style.color]': 'color()',
    '[style.border-color]': 'color()'
  }
})
export class CommentComponent {
  x = input.required<number>();
  y = input.required<number>();
  color = input.required<string>();

  xVw = computed(() => {
    return `${this.translatePositionToView(this.x())}vw`;
  })
  
  yVh = computed(() => {
    return `${this.translatePositionToView(this.y())}vh`;
  })
  
  transform = computed(() => {
    return this.getTransform(this.xVw(), this.yVh())
  });

  getTransform(x: string, y: string) {
    return `translateX(${x}) translateY(${y})`;
  }

  translatePositionToView(size: number) {
    return  (size / CANVAS_SIZE) * 100;
  }
}
