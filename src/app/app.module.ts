import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesCompoment } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesCompoment,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
