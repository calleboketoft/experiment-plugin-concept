// This component instantiates the currently routed plugin-app
declare var iFrameResize: any

import { Component, Input } from '@angular/core'
import { DomSanitizationService } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'

import { NotificationService } from '../notification.service'

@Component({
  selector: 'plugin-app',
  styles: [`
    iframe {
      width:100%
    }
  `],
  template: `
    <button type="button" class="btn btn-primary"
      (click)="sendMessageToPluginApp('manual from source to plugin')">
      Send message to plugin app
    </button>
    <iframe
      *ngIf="iframeSrc"
      [src]="iframeSrc"
      scrolling="no"
      frameborder="0"
      marginheight="0"
      marginwidth="0">
    </iframe>
  `
})
export class PluginAppComponent {
  public attachedIFrameResizer;
  public iframeSrc;

  constructor (
    private domSanitizationService: DomSanitizationService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute
  ) {
    let pluginAppOptions = this.activatedRoute.data['value']
    let indexPath = pluginAppOptions.indexPath
    this.iframeSrc = this.domSanitizationService.bypassSecurityTrustResourceUrl(indexPath)
  }

  public ngAfterViewInit () {
    // Lib to handle iFrame communication and resizing
    iFrameResize({
      // log: true,
      messageCallback: (event) => {
        this.receivedMessageFromPluginApp(event)
      },
      initCallback: (init) => {
        this.attachedIFrameResizer = init.iFrameResizer
        this.initializePluginApp()
      }
    })
  }

  // Send first message to plugin app to start up 2 way communication
  // TODO send all initialization options here
  public initializePluginApp () {
    this.sendMessageToPluginApp('[pluginAppInit]:{"pluginAppOptions": "here"}')
  }

  // Communication with plugin app
  // #############################

  public sendMessageToPluginApp (messageToSend) {
    this.attachedIFrameResizer.sendMessage(messageToSend, window.location.origin)
  }

  public receivedMessageFromPluginApp (event) {
    this.notificationService.notify(event.message)
  }
}
