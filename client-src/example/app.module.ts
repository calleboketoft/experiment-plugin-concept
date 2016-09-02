import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { routes } from './app.routes'
import { PluginAppComponent } from './routes/plugin-app.component'
import { AppHomeComponent } from './routes/app-home.component'
import { NotificationService } from './notification.service'

import { NavLeftComponent } from './nav-left.component'
import { TopNavContainer } from './nav-top.component'

@NgModule({
  declarations: [
    AppComponent,
    PluginAppComponent,
    AppHomeComponent,
    NavLeftComponent,
    TopNavContainer
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    NotificationService
  ]
})
export class AppModule { }
