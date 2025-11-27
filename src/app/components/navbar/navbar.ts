import { Component } from '@angular/core';
import { BuscarNavbarComponent } from "./buscar-navbar-component/buscar-navbar-component";
import { MenuNavbarComponent } from "./menu-navbar-component/menu-navbar-component";
import { TituloNavbarComponent } from "./titulo-navbar-component/titulo-navbar-component";

@Component({
  selector: 'navbar',
  imports: [BuscarNavbarComponent, MenuNavbarComponent, TituloNavbarComponent],
  templateUrl: './navbar.html',
})
export class Navbar {

}
