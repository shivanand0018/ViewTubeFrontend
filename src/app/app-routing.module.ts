import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';

const routes: Routes = [
  {
    path: "studio",
    canActivate: [AuthGuard],
    component: StudioUploadComponent,
    children: [
      {
        path: "upload",
        component: VideoUploadComponent,
      },
      {
        path: "live",
        component: StudioLivestreamComponent,
      },
    ]
  },
  {
    path: "",
    component: SideBarComponent,
    children: [
      {
            path: "video-view/:imageid", component: VideoPlayComponent,
      },
    ]
  },
  {
    path:"auth",
    component:AuthenticateComponent,
    children:[
        {
          path: "register",
          component: RegisterComponent,
          
        },
        {
          path: "login",
          component: LoginComponent,
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
