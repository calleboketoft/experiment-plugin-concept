import { Component } from '@angular/core'
import { NotificationService } from './notification.service'

@Component({
  selector: 'nav-top',
  styles: [`
    .navbar-fixed-top {
      border-bottom: 1px solid #e7e7e7;
      background-color: #f8f8f8;
    }

    .navbar-fixed-top .navbar-brand {
      color: #5e5e5e;
    }
  `],
  template: `
    <nav class="navbar navbar-light navbar-fixed-top">
      <button type="button" class="navbar-toggler hidden-sm-up"
        data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" id="tenant-brand">
        Platform Experiment
      </a>

      <div id="navbar">
        <nav class="nav navbar-nav pull-xs-right">
          <h4><span class="tag tag-success">{{notificationService.beep | async}}</span></h4>
        </nav>
      </div>
    </nav>
  `
})
export class TopNavContainer {
  constructor (private notificationService: NotificationService) {
    notificationService.beep.subscribe(res => {
      console.log('NOTIFICATION: ', res)
    })
  }
}
