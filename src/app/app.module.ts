import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { GeneralService} from './general.service';
import { ResumeComponent } from './resume/resume.component';
@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
