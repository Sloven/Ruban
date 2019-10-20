import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoSwipeService {

  currentImageIndex = new BehaviorSubject<number> (0);
  onClose$: Subject<null>;
  get CurrentImageIndex() {
    return this.currentImageIndex.getValue();
  }
  set CurrentImageIndex(state: number) {
    this.currentImageIndex.next(state);
  }

  get currentImageIndex$(): Observable<number> {
    return this.currentImageIndex.asObservable();
  }

  onClose() {
    this.onClose$.next(null);
  }
}
