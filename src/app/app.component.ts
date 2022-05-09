import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

 

  title= "students"

  students: any[];

  constructor(db: AngularFireDatabase ) {
   
    db.list('/Students').valueChanges().subscribe(students => {
      this.students = students;
      console.log(this.students)
    })
     
 }


}
