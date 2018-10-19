import {Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesCompoment {
    title = "List of courses";
    courses = ["Course 1", "Course 2", "Course 3"];
}