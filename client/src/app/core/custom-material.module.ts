import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

// tslint:disable-next-line:typedef
const MODULES = [
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
];

@NgModule({
    imports: [MODULES],
    exports: [MODULES],
})

export class CustomMaterialModule { }
