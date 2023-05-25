import {Component} from '@angular/core';
@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning, you are in danger!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid yellow;
        width: 50%;
        height: 5vh;
        text-align: center;
        color: purple;
      }
    `
  ]
})
export class WarningAlertComponent{

}
