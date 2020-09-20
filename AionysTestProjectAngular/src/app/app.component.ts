import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId: number;

  constructor(
    public translate: TranslateService){
      translate.addLangs(['en', 'ru']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  onChange(se : any){
    console.log(se);
  }
}
