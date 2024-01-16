import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { delay, finalize, of, tap } from 'rxjs';
import { DataService } from '../../common/services/data.service';
@Component({
  selector: 'codevty',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly dataService = inject(DataService);

  tabs = this.dataService.tabs;
  skills = this.dataService.skills;
  projects = this.dataService.projects;
  reviews = this.dataService.reviews;

  fg = new FormGroup({
    name: new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'phone': new FormControl(''),
    'message': new FormControl('', [Validators.required]),
  })

  submitting = false;
  successMessage = '';

  submit(event: any) {
    event.preventDefault();
    this.successMessage = '';
    if(this.fg.invalid){
      return;
    }
    this.submitting = true;
    of(true).pipe(
      delay(2000),
      finalize(() => { this.submitting = false }),
      tap(() => {
        this.successMessage = 'Thanks for reaching out! I\'ll be in contact soon.'
        this.fg.reset();
      })
    ).subscribe()
  }


}
