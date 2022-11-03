import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} to Setbuilder</div>`,
})
export class AppComponent {
  value = 'World';
}
