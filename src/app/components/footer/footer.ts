import { Component, signal } from '@angular/core';

@Component({
  selector: 'footer_component',
  imports: [],
  templateUrl: './footer.html',
})
export default class Footer {

  fecha = signal(new Date().getFullYear())
}
