import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project, ProjectService } from '../../services/project';

@Component({
  selector: 'app-kenny',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kenny.html',
  styleUrl: './kenny.scss'
})
export class KennyComponent implements OnInit {

  projects: Project[] = [];
spotifyUrl = 'https://open.spotify.com/embed/playlist/0a2T0uMvjQ539SfOvjvksB?utm_source=generator&theme=0';
  
safeSpotifyUrl: SafeResourceUrl;
constructor(
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
  ) {
    this.safeSpotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyUrl);
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}