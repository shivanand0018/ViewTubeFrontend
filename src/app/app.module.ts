import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { VideoContentComponent } from './video-content/video-content.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoPlayComponent } from './video-play/video-play.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    VideoContentComponent,
    StudioUploadComponent,
    VideoUploadComponent,
    StudioLivestreamComponent,
    ChipsBarComponent,
    VideoPlayComponent,
    RegisterComponent,
    LoginComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
