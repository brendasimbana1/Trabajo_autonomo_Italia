import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.css'
})
export class CuestionarioComponent {
  @ViewChild('cuestionario') cuestionario!: NgForm;
  user= {
    nombre: '',
    nota: 0
  }
  
  constructor(private dataService:DataService,
    private router:Router
  ){}

  submitQuiz() {
    const respuestas = {
      nombre: this.user.nombre,
      q1: (document.querySelector('input[name="q1"]:checked') as HTMLInputElement)?.value,
      q2: (document.querySelector('input[name="q2"]:checked') as HTMLInputElement)?.value,
      q3: (document.querySelector('input[name="q3"]:checked') as HTMLInputElement)?.value,
      q4: (document.querySelector('input[name="q4"]:checked') as HTMLInputElement)?.value,
      q5: (document.querySelector('input[name="q5"]:checked') as HTMLInputElement)?.value
    };

    // Calcular puntaje
    this.user.nota = this.calcularPuntaje(respuestas);
      this.dataService.registrar(this.user)
      .subscribe(
        res => {
          console.log(res)
          alert(`Nombre: ${this.user.nombre}\nNota: ${this.user.nota}`);
          if (this.cuestionario) {
            this.cuestionario.resetForm();
            this.deseleccionarRadios();
          }
        },
        err => console.log(err)
      );
  }

  calcularPuntaje(respuestas: any): number {
    let puntaje = 0;

    if (respuestas.q1 === 'Renacimiento') {
      puntaje++;
    }
    if (respuestas.q2 === 'Roma') {
      puntaje++;
    }
    if (respuestas.q3 === 'Carnevale di Venezia') {
      puntaje++;
    }
    if (respuestas.q4 === 'Roma') {
      puntaje++;
    }
    if (respuestas.q5 === 'Risotto') {
      puntaje++;
    }

    return puntaje;
  }
  deseleccionarRadios() {
    // Deseleccionar todos los radios manualmente
    (document.getElementById('q1a') as HTMLInputElement).checked = false;
    (document.getElementById('q1b') as HTMLInputElement).checked = false;
    (document.getElementById('q1c') as HTMLInputElement).checked = false;
    (document.getElementById('q2a') as HTMLInputElement).checked = false;
    (document.getElementById('q2b') as HTMLInputElement).checked = false;
    (document.getElementById('q2c') as HTMLInputElement).checked = false;
    (document.getElementById('q3a') as HTMLInputElement).checked = false;
    (document.getElementById('q3b') as HTMLInputElement).checked = false;
    (document.getElementById('q3c') as HTMLInputElement).checked = false;
    (document.getElementById('q4a') as HTMLInputElement).checked = false;
    (document.getElementById('q4b') as HTMLInputElement).checked = false;
    (document.getElementById('q4c') as HTMLInputElement).checked = false;
    (document.getElementById('q5a') as HTMLInputElement).checked = false;
    (document.getElementById('q5b') as HTMLInputElement).checked = false;
    (document.getElementById('q5c') as HTMLInputElement).checked = false;
  }
}
