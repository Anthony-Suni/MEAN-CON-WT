import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logout(): void {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');

    // Aquí puedes agregar la lógica adicional, como redirigir al usuario a la página de inicio de sesión

    console.log('Cerrar sesión');
  }
}
