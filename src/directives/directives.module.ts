import { NgModule } from '@angular/core';
import {LazySrcDirective} from "./lazy-src/lazy-src";
@NgModule({
	declarations: [LazySrcDirective],
	imports: [],
	exports: [LazySrcDirective]
})
export class DirectivesModule {}
