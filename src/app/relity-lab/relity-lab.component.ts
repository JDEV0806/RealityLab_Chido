import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-relity-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relity-lab.component.html',
  styleUrl: './relity-lab.component.css'
})
export class RelityLabComponent {
  faqItems = [
    {
      question: "¿Qué es Reality Lab?",
      answer: "Reality Lab es una iniciativa enfocada en el desarrollo y aplicación de tecnologías inmersivas como AR, VR y MR.",
      isOpen: false
    },
    {
      question: "¿Cómo pueden las empresas beneficiarse de AR/VR/MR?",
      answer: "Estas tecnologías permiten experiencias más inmersivas e interactivas, mejorando la interacción con clientes y la percepción de marca.",
      isOpen: false
    },
    {
      question: "¿Qué servicios ofrece Reality Lab?",
      answer: "Ofrecemos desarrollo de soluciones AR/VR/MR, análisis de datos y estrategias para optimizar campañas de realidad aumentada.",
      isOpen: false
    }
  ];

  toggleAnswer(item: any): void {
    item.isOpen = !item.isOpen;
  }
}
