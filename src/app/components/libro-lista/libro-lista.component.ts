import { Component, OnInit, signal } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libro-lista',
  imports: [RouterLink],
  templateUrl: './libro-lista.component.html',
  styleUrl: './libro-lista.component.css',
})
export class LibroListaComponent implements OnInit {
  libros = signal<Libro[]>([]);

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.libroService.obtenerTodos().subscribe({
      next: (datos) => this.libros.set(datos),
      error: (e) => console.error('Error al cargar libros', e),
    });
  }

  eliminar(id: number | undefined): void {
    if (id === undefined) return;
    this.libroService.eliminar(id).subscribe({
      next: () => this.cargar(),
      error: (e) => console.error('Error al eliminar', e),
    });
  }
}
