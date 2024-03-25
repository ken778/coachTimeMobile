import { Component, OnInit } from '@angular/core';
import { DomSanitizer,  } from '@angular/platform-browser';
import { Pipe, PipeTransform} from "@angular/core";
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { VideoService } from 'src/app/services/video/video.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent  implements OnInit {
  videoUrl : any = "https://www.youtube.com/embed/61bPhdlqfPA"
  videos!:any
  constructor(private sanitizer:DomSanitizer, private pipe: SafePipe, private videoService: VideoService) { }
  
  ngOnInit() {
    console.log(SafePipe)
    this.getData()
  }

  showVideo(){
    //  this.sanitizer.bypassSecurityTrustResourceUrl(video)
     this.pipe.transform(this.videoUrl)

  }

  getData(){
    this.videoService.getdata().subscribe({
      next: ((data:any)=>{
        this.videos = data
        console.log(this.videos) 
      }),
      error: err => console.log(err)
    })
  }

  //conver url
   convertToEmbeddedLink(originalLink: string): string {
    // Extract the video ID from the original link
    const videoId = originalLink.split('v=')[1];

    // Construct the embedded link
    const embeddedLink = `https://www.youtube.com/embed/${videoId}`;

    return embeddedLink;
}

}
