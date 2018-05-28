import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobDescPageComponent } from './job-desc-page/job-desc-page.component';
import { JobApplyPageComponent } from './job-apply-page/job-apply-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DescBgPartComponent } from './desc-bg-part/desc-bg-part.component';
import { AuthInterceptor } from './interceptors/auth.service';
import { DataService } from './shared/data.service';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ExtractSpanPipe } from './pipe/extract-span.pipe';
import { RemoveMinusPipe } from './pipe/remove-minus.pipe';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { SafePipe } from './pipe/safe.pipe';
import { ExtractSummaryPipe } from './pipe/extract-summary.pipe';
import { DiffDaysPipe } from './pipe/diff-days.pipe';
import { ChoseUrlPipe } from './pipe/chose-url.pipe';


const routeConfig:Routes=[
  {path:'',component:JobListPageComponent},
  {path:'description/:id',component:JobDescPageComponent},
  {path:'apply/:id',component:JobApplyPageComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobListPageComponent,
    JobDescPageComponent,
    JobApplyPageComponent,
    SearchComponent,
    DescBgPartComponent,
    CapitalizePipe,
    ExtractSpanPipe,
    RemoveMinusPipe,
    SafeHtmlPipe,
    SafePipe,
    ExtractSummaryPipe,
    DiffDaysPipe,
    ChoseUrlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    DataService
    // AuthInterceptor
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi:true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
