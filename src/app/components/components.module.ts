import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EditorComponent } from './editor/editor.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageStackComponent } from './message-stack/message-stack.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidenavComponent,
    EditorComponent,
    MessageComponent,
    MessageStackComponent,
    NotFoundComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    LayoutComponent,
    NavbarComponent,
    SidenavComponent,
    EditorComponent,
    MessageComponent,
    MessageStackComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
