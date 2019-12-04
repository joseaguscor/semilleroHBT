import { Component, OnInit } from "@angular/core";

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

    //Variables
    public minombre: string;

    constructor(){

    }

    ngOnInit(): void {
       
    }

}