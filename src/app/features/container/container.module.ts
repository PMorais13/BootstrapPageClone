import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';

import { NavbarModule } from './navbar/navbar.module';
import { BodyModule } from './body/body.module';
import { SectionModule } from './section/section.module';
import { FooterModule } from './footer/footer.module';




@NgModule({
    declarations: [
        ContainerComponent,
    ],
    imports: [
        CommonModule,
        NavbarModule,
        BodyModule,
        SectionModule,
        FooterModule,
    ],
    exports: [
        ContainerComponent,
    ]
})
export class ContainerModule { }
