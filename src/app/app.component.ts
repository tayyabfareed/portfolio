import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';
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
  private readonly http = inject(HttpClient);

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
    
    this.http.post('/api/contact', this.fg.value).pipe(
      finalize(() => { this.submitting = false })
    ).subscribe({
      next: () => {
        this.successMessage = 'Thanks for reaching out! I\'ll be in contact soon.';
        this.fg.reset();
      },
      error: (err) => {
        console.error('Error sending message:', err);
        alert('Failed to send message. Please try again later or contact me directly via email.');
      }
    });
  }


}
