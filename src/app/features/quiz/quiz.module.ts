import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    QuizPageComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class QuizModule { }
