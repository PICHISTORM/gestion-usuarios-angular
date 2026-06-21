import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentacion',
  imports: [CommonModule],
  templateUrl: './documentacion.html',
  styleUrl: './documentacion.scss',
})
export class Documentacion implements OnInit, OnDestroy {
  slides = [
    {
      src: 'assets/img/node.png',
      title: 'NodeJS',
      subtitle: 'Servidor y ecosistema JavaScript para aplicaciones backend.'
    },
    {
      src: '../../../assets/img/typeScript.png',
      title: 'TypeScript',
      subtitle: 'JavaScript con tipos estáticos y mejor mantenimiento.'
    },
    {
      src: 'assets/img/angular.png',
      title: 'Angular',
      subtitle: 'Framework para aplicaciones frontend modernas.'
    },
    {
      src: 'assets/img/ionic.png',
      title: 'Ionic',
      subtitle: 'Desarrollo móvil híbrido con componentes web.'
    },
    {
      src: 'assets/img/npm.png',
      title: 'NPM',
      subtitle: 'Administrador de paquetes para JavaScript y TypeScript.'
    }
  ];

  activeIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  select(index: number): void {
    this.activeIndex = index;
  }
}
