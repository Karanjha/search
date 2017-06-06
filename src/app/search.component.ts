import { Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
    selector:'search',
    template:`
        <input list="courses" value="Select Course" onfocus="this.value = this.value=='Select Course'?'':this.value;" onblur="this.value = this.value==''?'Select Course':this.value;" >
            <datalist id="courses">
                <option *ngFor="let course of courses" value="{{course}}">
            </datalist>
              
    `,
    styles:[`
    `]
})

export class SearchComponent {
    courses = [];
    constructor (private coursesService: CoursesService) {
        coursesService.getCourses().subscribe(courses => {this.courses = courses});
    }
}