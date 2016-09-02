import { Component } from '@angular/core'

@Component({
  selector: 'app',
  styles: [`
    .main {
      padding: 20px;
    }
    @media (min-width: 768px) {
      .main {
        padding-right: 40px;
        padding-left: 40px;
      }
    }
    .main .page-header {
      margin-top: 0;
    }

    /* Hide for mobile, show later */
    .sidebar {
      display: none;
    }
    @media (min-width: 768px) {
      .sidebar {
        position: fixed;
        top: 51px;
        bottom: 0;
        left: 0;
        z-index: 1000;
        display: block;
        padding: 20px;
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
        background-color: #f8f8f8;
        border-right: 1px solid #e7e7e7;
      }
    }
  `],
  template: `
    <nav-top></nav-top>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <nav-left></nav-left>
        </div>
        <div class="col-sm-3 col-md-2"></div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppComponent { }
