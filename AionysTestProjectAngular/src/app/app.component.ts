import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userId: number;

  constructor(
    public translate: TranslateService){
      
  }
  ngOnInit(): void {
    this.translate.addLangs(['en', 'ru']);
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  onChange(se : any){
    console.log(se);
  }
}
