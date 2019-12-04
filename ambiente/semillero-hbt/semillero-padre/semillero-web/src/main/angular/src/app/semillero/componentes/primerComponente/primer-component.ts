import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

/**
 * @description La clase es para aprender a crear componentes y practicar
 * @autor José Gómez Flórez <joseaguscor@hotmail.com>
 */

@Component({
    selector: 'primer-componente',
    templateUrl: './primer-component.html',
    styleUrls: ['./primer-component.css']
})
/**
 * @descripcion Creamos la clase para desarrollar nuestro primer componente
 * @autor José Gómez Flórez
 */

export class PrimerComponent implements OnInit {

/**
 * @description Contanenar dos variables string
 * @autor José Gómez Flórez
 */
    public minombre: string = "José Gómez Flórez ";
    public ciudad: string = "- Montería";

    public misdatos: string = this.minombre.concat(this.ciudad);

    

    /**
   * Constructor de la clase
   * @param router permite direccionar a otros componentes
   */
    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

}