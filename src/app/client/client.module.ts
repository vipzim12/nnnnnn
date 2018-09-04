import { NgModule } from "@angular/core";
import { ClientComponent } from "./client.component";
import { HomeComponent } from "./home/home.component";
import { ClientRoutingModule } from "./client-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "../pages/miscellaneous/miscellaneous.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";

import { LoginClientComponent } from './login-client/login-client.component';
import { RegistorClientComponent } from './registor-client/registor-client.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductComponent } from "./product/product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";
import { NgSelectModule } from "../../../node_modules/@ng-select/ng-select";
import {OwlModule } from "../../../node_modules/ngx-owl-carousel";

const CLIENT_COMPONENTS = [
    ClientComponent,
];

@NgModule({
    imports: [
        ClientRoutingModule,
        ThemeModule,
        MiscellaneousModule,
        NgxPaginationModule,
        NgSelectModule,
        OwlModule
    ],
    declarations: [
        ...CLIENT_COMPONENTS,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ProductComponent,
        ListProductComponent,
        BodyComponent,
        LoginClientComponent,
        RegistorClientComponent,
        CartComponent,
        ProductDetailComponent
    ]
})

export class ClientModule { }