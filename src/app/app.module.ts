import {

    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCommonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatRadioModule,

    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {PreloaderModule} from './components/preloader.module';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { RecaptchaModule } from 'ng-recaptcha';
import {AlertComponent} from './_directives';
import {AlertService} from './services/alert.service';
import {BlackgeeksRecaptchaModule} from 'recaptcha-blackgeeks';
// import {} from '@angular/material';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PartnershipComponent} from './partnership/partnership.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './home/header/header.component';
import {LoaderModule} from './loader/loader.module';
import {InfluencersDetailComponent} from './influencers-detail/influencers-detail.component';
import {ManageReviewsComponent} from './admin/manage-reviews/manage-reviews.component';
// import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import {
  BlogComponent,
  ContactComponent,
  HowItWorksComponent,
  PrivacyAndPolicyComponent,
  TermsAndConditionsComponent,
  WhatIsInfluexpaiComponent
} from './contact/contact.component';
import {ContentComponent} from './home/content/content.component';
import {SliderComponent} from './home/slider/slider.component';
import {FooterComponent} from './home/footer/footer.component';
import {AllBrandsComponent} from './home/allbrands/allbrands.component';
import {AllContentComponent} from './home/allcontent/allcontent.component';
import {AllinfluxComponent} from './home/allinflux/allinflux.component';
import { AuthGuard } from './_guards/index';
import {PendingChangesGuard} from './_guards/pending-changes.guard';
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrandComponent } from './brand/brand.component';
import { InfluencersComponent } from './influencers/influencers.component';
import {AgenciesComponent} from './Agencies/Agencies.component';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './admin/dashboard.component';
import {AppRoutes} from './app.routing';
import { SuperadminComponent } from './layout/superadmin/superadmin.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {ManageShowcaseComponent} from './admin/manage-showcases/manage-showcase.component';
import {ManageRfmComponent} from './admin/manage-rfm/manage-rfm.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {BasicInfoComponent} from './Basic-info/basic-info.component';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {AdminPaymentComponent} from './Admin-Payment/admin-payment.component';
import {PricingstepsComponent} from './home/pricingsteps/pricingsteps.component';
import {PricingComponent} from './home/pricing/pricing.component';
import {PaymentmethodComponent} from './paymentmethod/paymentmethod.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { CountdownModule } from "ng2-countdown-timer";

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
      AgenciesComponent,
      AdminPaymentComponent,
    SliderComponent,
      PricingstepsComponent,
      PricingComponent,
      AdminAccountComponent,
      AdminComponent,
      SidebarComponent,
      NavbarComponent,
      ManageReviewsComponent,
    ContentComponent,
      BasicInfoComponent,
      DashboardComponent,
    FooterComponent,
    AboutComponent,
      PaymentmethodComponent,
    PartnershipComponent,
    AllBrandsComponent,
    ContactComponent,
    AllinfluxComponent,
    AllContentComponent,
ManageRfmComponent,
      ManageShowcaseComponent,
    // NavbarComponent,
    // DashboardComponent,
      // AdminLayoutComponent,
      SuperadminComponent,
    WhatIsInfluexpaiComponent,
    HowItWorksComponent,
      AlertComponent,
      AdminProfileComponent,
    TermsAndConditionsComponent,
    PrivacyAndPolicyComponent,
    BlogComponent,
    BrandComponent,
    InfluencersComponent,
      InfluencersDetailComponent
  ],
  entryComponents: [WhatIsInfluexpaiComponent, HowItWorksComponent, TermsAndConditionsComponent],
  imports: [
    CountdownTimerModule.forRoot(),
    BrowserModule,
    CountdownModule,
      // CarouselModule,
    // PricingModule,
      MatCommonModule,
      MatOptionModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonToggleModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatChipsModule,
      LoaderModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatRadioModule,
      MatRippleModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatCardModule,
      MatTooltipModule,
      MatStepperModule,
      BrowserAnimationsModule,
      MatInputModule,
      NgbModule.forRoot(),
      BrowserModule.withServerTransition({ appId: 'InfluExpAI' }),
    BrowserTransferStateModule,
      NgbModule.forRoot(),
      ReactiveFormsModule,
      TextMaskModule, RecaptchaModule,BlackgeeksRecaptchaModule,
      RouterModule.forRoot(AppRoutes),
      FormsModule, PreloaderModule, HttpModule,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: HomeComponent
    //   },
    //   {
    //     path: 'about',
    //     component: AboutComponent
    //   },
    //   {
    //     path: 'partnership',
    //     component: PartnershipComponent
    //   },
    //   {
    //     path: 'contact',
    //     component: ContactComponent
    //   },
    //   {
    //     path: 'what-is-InfluExpAI',
    //     component: WhatIsInfluexpaiComponent
    //   },
    //   {
    //     path: 'How-It-Works',
    //     component: HowItWorksComponent
    //   },
    //   {
    //     path: 'Terms-and-Conditions',
    //     component: TermsAndConditionsComponent
    //   },
    //   {
    //     path: 'privacy_policy',
    //     component: PrivacyAndPolicyComponent
    //   },
    //
    //   {
    //     path: 'brand',
    //     component: BrandComponent
    //   },
    //   {
    //     path: 'influencers',
    //     component: InfluencersComponent
    //   },
    //   {
    //     path: 'blog',
    //     component: BlogComponent
    //   },
    //   { path: 'pricing',  loadChildren: './home/pricing/pricing.module#PricingModule' },
    //   {
    //     path: 'pricing/steps',
    //     loadChildren: './home/pricingsteps/pricingsteps.module#PricingstepsModule',
    //     canActivate: [AuthGuard]
    //   },
    //     {
    //      path : 'influencers-detail', component: InfluencersDetailComponent
    //     },
    //     {
    //         path : 'agencies', component: AgenciesComponent
    //     },
    //   {
    //     path: '**',
    //     component: HomeComponent
    //   },
    //
    //
    //     {
    //         path: '',
    //         component: AdminLayoutComponent,
    //         children: [
    //             {
    //                 path: 'admin',
    //                 loadChildren: '../admin/admin.module#AdminModule'
    //             },
    //             {
    //                 path: 'admin/dashboard',
    //                 loadChildren: '../admin/dashboard.module#DashboardModule.'
    //             }
    //         ]
    //     }
    // ])
  ],
  providers: [
    AuthGuard,
    PendingChangesGuard,
      AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
