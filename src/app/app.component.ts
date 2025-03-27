import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  showIntro = true;

  @ViewChild('myVideo', { static: false })
  myVideo!: ElementRef<HTMLVideoElement>;
typingEnded:boolean=false
  displayedText = '';
  displayedText2 = '';
  displayedText3 = '';
  fullText = "Hi, I'm S.V.S.S VARMA";
  description = 'A passionate Frontend Developer crafting responsive, dynamic web applications with modern technologies like HTML, CSS, JavaScript, and Angular.';
   skills = 'HTML, CSS, JavaScript, TypeScript, Angular';
  speed = 60; // Adjusted for smoother typing
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object,private router:Router) {}

  ngOnInit(): void {
    // Start typewriter effect only if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.startTypewriterEffect();
    }
  }

  ngAfterViewInit() {
    // Only manipulate video if running in the browser
    if (isPlatformBrowser(this.platformId) && this.myVideo) {
      this.myVideo.nativeElement.addEventListener('loadedmetadata', () => {
        this.myVideo.nativeElement.currentTime = 5;
      });
    }
  }

  startTypewriterEffect() {
    let i = 0;
    let d = 0;
    let e = 0;
    this.intervalId = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText.charAt(i);
        i++;
      } else if (d < this.description.length) {
        this.displayedText2 += this.description.charAt(d);
        d++;
      } else if (e < this.skills.length) {
        this.displayedText3 += this.skills.charAt(e);
        e++;
      } else {
        this.typingEnded = true
        clearInterval(this.intervalId); // Clear interval after text is fully displayed
      }
    }, this.speed);
  }

  showProjects() {
    this.showIntro = false;
  }

  openLink(url:any){
  
  }

  scrollToProjects() {
    // this.router.navigate([], { 
    //   fragment: 'projects',
    //   scrollPositionRestoration: 'enabled',
    //   anchorScrolling: 'enabled'
    // });
  }
}


