import { NgModule } from "@angular/core";
import { NavBarComponent } from './component/navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErroComponent } from './component/erro/erro.component';

@NgModule({
        declarations: [
                NavBarComponent,
                ErroComponent
        ],
        imports: [
                RouterModule.forChild([
                        {
                                path: '**', 
                                component: ErroComponent
                        },
                ])
        ],
        exports: [
                NavBarComponent
        ]
})

export class CoreModule {

}