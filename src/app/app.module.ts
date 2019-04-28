import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { GeneralService} from './general.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
