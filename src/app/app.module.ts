import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FileService } from './services/file.service';
import { MessagingService } from './services/messaging.service';
import { SocketService } from './services/socket.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    FileService,
    MessagingService,
    SocketService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
