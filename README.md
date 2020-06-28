# internalization-in-ionic-4
How to  use internalization in ionic 4 and using services and pipe transform.


Hello fellow user , please go to detail knowledge https://gitsof.com/2020/06/28/how-to-use-internalization-in-ionic-i18n-ngx-translate-core/

Please follow on twiter https://twitter.com/divyajeetfx

#Prerequisite setup   

How to use internalization -i18n in ionic 4

// app.module.ts
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}	


//
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
})


//Inside assets "Folder" 
Make folder  i18n  --> Inside the "i18n" folder make file en.json  ,  gr.json  ,Whatever language  you want  to translate  here.



//Detail knowledge https://gitsof.com/2020/06/28/how-to-use-internalization-in-ionic-i18n-ngx-translate-core/
