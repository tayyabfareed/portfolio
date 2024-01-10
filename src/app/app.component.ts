import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../common/services/data.service';
@Component({
  selector: 'codevty',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly destroy = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);


  tabs = this.dataService.tabs;
  skills = this.dataService.skills;
  projects = this.dataService.projects;
  reviews = this.dataService.reviews;

  ngOnInit(): void {
    console.log('ng onnint')
  }

}
