import {Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesCompoment {
    title = "List of courses";
    getTitle() {
        return this.title;
    }
}