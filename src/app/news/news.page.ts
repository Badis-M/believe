import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage {
articles;

  constructor(private apiService: ApiService, private socialSharing: SocialSharing) {}

  ionViewDidEnter() {

    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data.articles;
    });
    }

    shareArticle(url) {
      const options = {
        message: 'share this', // not supported on some apps (Facebook, Instagram)
        subject: 'the subject', // fi. for email
        files: ['', ''], // an array of filenames either locally or remotely
        url: url,
        chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
       // appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
    //    iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
      };

      this.socialSharing.shareWithOptions(options).then((msg) => {console.log(msg); }).catch((err) => {console.log(err); });
     }
  }
