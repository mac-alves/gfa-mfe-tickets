import { Component } from '@angular/core';

import { EventBus } from '@gfa/gfa-infra';
import { GfaAuthService } from '@gfa/infra-angular';

@Component({
  selector: 'gfa-mfe-tickets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gfa-mfe-tickets';

  constructor(private service: GfaAuthService) {
    if (!this.service.isTokenValid()) {
      document.location.href = '/auth';
    } else {
      EventBus.instance.register('hello-world', (name: string) => {
        if (name) console.log('Hello ' + name);
        else console.log('Hello world');
      });
    }
  }

  send() {
    EventBus.instance.dispatch('hello-world');
  }
}
