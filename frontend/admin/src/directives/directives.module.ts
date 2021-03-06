/**
 * @license MIT
 * @version 1.1.0
 * @author M.A.R.S. Labs
 * @description Application directives module.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";

import { MarsElasticInputDirective } from "./mars-elastic-input";
import { MarsMaskDirective } from "./mars-mask";
import { MarsAddressAutocompleteDirective } from "./mars-address-autocomplete";
import { MarsCpfValidator } from "@directives/mars-cpf-validator";
import { MarsCnpjValidator } from "@directives/mars-cnpj-validator";

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [
        MarsElasticInputDirective,
        MarsMaskDirective,
        MarsAddressAutocompleteDirective,
        MarsCnpjValidator,
        MarsCpfValidator
    ],
    exports: [
        MarsElasticInputDirective,
        MarsMaskDirective,
        MarsAddressAutocompleteDirective,
        MarsCnpjValidator,
        MarsCpfValidator
    ]
})
export class DirectivesModule { }