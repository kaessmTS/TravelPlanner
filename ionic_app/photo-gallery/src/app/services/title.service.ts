import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title = new BehaviorSubject<string>('Building Guide');
  currentTitle = this.title.asObservable();

  constructor() { }

  setTitle(newTitle: string) {
    this.title.next(newTitle);
  }
}