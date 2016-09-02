import { Component } from '@angular/core'

@Component({
  selector: 'nav-left',
  styles: [`
    .nav-sidebar {
      margin-right: -21px; /* 20px padding + 1px border */
      margin-bottom: 20px;
      margin-left: -20px;
    }

    li {
      border-bottom: 1px solid #e7e7e7;
    }

    i {
      margin-right: 5px;
    }

    a,
    .link-section-header {
      padding: 5px 15px;
      display: block;
    }

    a:hover,
    a:focus,
    a:active {
      background-color: #eee;
      text-decoration: none;
    }
  `],
  template: `
    <ul class="nav nav-sidebar">
      <li>
        <span class="link-section-header">
          <strong>Platform</strong>
        </span>
      </li>
      <li>
        <a [routerLink]="['home']">
          Home
        </a>
      </li>
      <br>
      <li>
        <span class="link-section-header">
          <strong>Plugin Apps</strong>
        </span>
      </li>

      <!-- Generated links for plugin apps -->
      <li *ngFor="let pluginApp of pluginApps">
        <a [routerLink]="[pluginApp.path]">
          {{pluginApp.data.linkTitle}}
        </a>
      </li>
    </ul>
  `
})
export class NavLeftComponent {
  public pluginApps = window['ssgPluginApps'].routes;
}
