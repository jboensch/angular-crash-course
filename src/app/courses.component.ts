import {Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <img [src]="ImageUrl" />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
        </tr>
      </table>        
      <button class="btn btn-primary">Save</button>
    `
})
export class CoursesCompoment {
    title = "List of courses";
    courses;
    imageUrl = "";
    colSpan = 2;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}