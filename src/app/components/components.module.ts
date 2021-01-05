import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderThumbnailsComponent } from './header-thumbnails/header-thumbnails.component';
import { AdminMainContentComponent } from './admin-main-content/admin-main-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarHeaderComponent,
    HeaderThumbnailsComponent,
    AdminMainContentComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarHeaderComponent,
    HeaderThumbnailsComponent,
    AdminMainContentComponent
  ]
})
export class ComponentsModule { }
