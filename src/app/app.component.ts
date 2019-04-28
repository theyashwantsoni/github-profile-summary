import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { catchError } from "rxjs/operators";
import { GeneralService } from './general.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bakwas : any;
  repos:any;
  skills=[];
  skill : any;
  picked=[];
  title = 'git-api';
  userForm : FormGroup=new FormGroup({
  username:new FormControl(null,[Validators.required]),
    
  });

  constructor( private _user:GeneralService) { }
  pickmeup(aa){
    this.picked.push(aa);
  }
  search(){
    if(!this.userForm.valid){
     
      alert('invalid form data');
      return;
    }
    
    this._user.searchval(this.userForm.controls.username.value)
    .subscribe(a => {
     this.bakwas= a;
     
        this._user.findrepo(this.userForm.controls.username.value)
        .subscribe(b =>{
                  this.repos=b;
                  this.skills.length=0;
                  for (let i=0;i<Object.keys(b).length;i++) {
                  this._user.allskills(b[i].languages_url)
                  .subscribe(c =>{
                    var lang='';
                    for (let key in c) {
                      lang = lang + key +' ';
                      // this.skills.push(c);
                    }
                    this.skills.push(lang);
                    // this.skills = this.skills.filter((el, i, a) => i === a.indexOf(el));
                  })
                };
                console.log(this.skills);
                document.getElementById('second').scrollIntoView();
         })
    }
    )
  }
}
