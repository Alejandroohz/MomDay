import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DiaDeLaMadre';
  mensaje = '';
  mostrarBoton = true;
  
  mostrarMensaje() {
    this.mensaje = '🌸 ¡Feliz Día de la Madre, querida suegra! 🌸 Gracias por ser una mujer tan especial, por tu cariño y tu sabiduría. Hoy quiero agradecerte de corazón por haber criado a una mujer responsable, fuerte y hermosa, tanto por dentro como por fuera. Gracias por todo el amor, los valores y el ejemplo que le diste, que hoy se reflejan en la gran persona que es Daniela. Además, gracias por tu apoyo incondicional hacia mí y nuestra relación; tu generosidad y tu confianza han hecho que cada día juntos sea más fuerte y lleno de amor. Me siento muy afortunado(a) de ser parte de esta familia y de poder celebrar contigo este día tan especial. ¡Te deseo un día lleno de alegría y momentos inolvidables! 😊';
    this.mostrarBoton = false;
  }
}