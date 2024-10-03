import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container"><h1>Shell Application</h1></div>`,
  styles: [
    `
      .container {
        padding: 20px;
        margin: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {}
