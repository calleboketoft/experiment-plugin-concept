import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class NotificationService {
  public beep = new EventEmitter()

  public notify (message) {
    this.beep.next(message)
  }
}
