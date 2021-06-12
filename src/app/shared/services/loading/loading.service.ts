import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading!: Subject<boolean>
  constructor() {
    this.loading = new Subject()
  }

  on() {
    this.loading.next(true)
  }
  off() {
    this.loading.next(false)

  }
}
