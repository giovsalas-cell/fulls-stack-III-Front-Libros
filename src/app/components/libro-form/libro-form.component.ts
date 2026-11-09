import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-libro-form',
  imports: [FormsModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css',
})
export class LibroFormComponent implements OnInit {
  libro: Libro = {
    titulo: '',
    autor: '',
    anioPublicacion: new Date().getFullYear(),
    genero: '',
  };
  idEdicion: number | null = null;

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idEdicion = Number(id);
      this.libroService.obtenerPorId(this.idEdicion).subscribe({
        next: (datos) => {
          this.libro = datos;
          this.cdr.markForCheck();
        },
        error: (e) => console.error('Error al cargar el libro', e),
      });
    }
  }

  guardar(): void {
    if (this.idEdicion !== null) {
      this.libroService.actualizar(this.idEdicion, this.libro).subscribe({
        next: () => this.router.navigate(['/']),
        error: (e) => console.error('Error al actualizar', e),
      });
    } else {
      this.libroService.crear(this.libro).subscribe({
        next: () => this.router.navigate(['/']),
        error: (e) => console.error('Error al crear', e),
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
