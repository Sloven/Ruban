import { Injectable } from '@angular/core';
import { BehaviorSubject, VirtualTimeScheduler, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  currentState = new BehaviorSubject<string> ('home');
  get CurrentState() {
    return this.currentState.getValue();
  }
  set CurrentState(state: string) {
    this.currentState.next(state);
  }

  get currentState$(): Observable<string> {
    return this.currentState.asObservable();
  }
}
