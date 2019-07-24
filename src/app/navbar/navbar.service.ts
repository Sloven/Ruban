import { Injectable } from '@angular/core';
import { BehaviorSubject, VirtualTimeScheduler } from 'rxjs';

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
}
