import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template:`
  <nav-bar></nav-bar>
  <events-list></events-list>
    `,
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent {
  title = 'ng Events';
}

// import { Component } from '@angular/core';

// @Component({
//     selector: 'events-app',
//     templateUrl: '<events-list></events-list>'
// })


// export class EventsAppComponent {

// }