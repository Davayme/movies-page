import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'movies-page';

    constructor(private titleService: Title, private router: Router) { }

    ngOnInit() {
        // Observa los eventos de navegación del router
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd) // Solo nos interesan los eventos de finalización de navegación
        ).subscribe(() => {
            // Obtiene el primer hijo del estado del router
            const child = this.router.routerState.snapshot.root.firstChild;
            // Si el hijo tiene datos de título, establece el título de la página
            if (child && child.data['title']) {
                this.titleService.setTitle(child.data['title']);
            } else {
                this.titleService.setTitle(this.title); // Si no, usa el título por defecto
            }
        });
    }
}