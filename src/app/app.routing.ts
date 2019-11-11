import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PartnershipComponent} from './partnership/partnership.component';
import {HeaderComponent} from './home/header/header.component';
import {InfluencersDetailComponent} from './influencers-detail/influencers-detail.component';
import { RfmComponent } from'./rfm/rfm.component';

import {
    BlogComponent,
    ContactComponent,
    HowItWorksComponent,
    PrivacyAndPolicyComponent,
    TermsAndConditionsComponent,
    WhatIsInfluexpaiComponent
} from './contact/contact.component';

import {AuthGuard} from "./_guards/auth.guard";
import {BrandComponent} from './brand/brand.component';
import {InfluencersComponent} from './influencers/influencers.component';
import {AgenciesComponent} from './Agencies/Agencies.component';
// import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import { SuperadminComponent } from './layout/superadmin/superadmin.component';
import { DashboardComponent } from './admin/dashboard.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {AdminComponent} from './admin/admin.component';
import {ManageRfmComponent} from './admin/manage-rfm/manage-rfm.component';
import {ManageShowcaseComponent} from './admin/manage-showcases/manage-showcase.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {BasicInfoComponent} from './Basic-info/basic-info.component';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {AdminPaymentComponent} from './Admin-Payment/admin-payment.component';
import {ManageReviewsComponent} from './admin/manage-reviews/manage-reviews.component';
// import {PricingComponent} from './home/pricing/pricing.component';
// import {PricingstepsComponent} from './home/pricingsteps/pricingsteps.component';
import { PricingComponent} from './pricing/pricing.component';
import {PaymentmethodComponent} from './paymentmethod/paymentmethod.component';
import {AllBrandsComponent} from './home/allbrands/allbrands.component';
import {AllinfluxComponent} from './home/allinflux/allinflux.component';
import {AllContentComponent} from './home/allcontent/allcontent.component';
import { ContentComponent } from './home/content/content.component';
import { from } from 'rxjs/observable/from';
export const AppRoutes: Routes = [
    // { path: '', component: HomepageComponent },
     {
         path: '',
         component: ContentComponent
     },
    {
        path: 'pay',
        component: AboutComponent
    },
    {
        path: 'allcontents',
        component: AllContentComponent
    },
    {
        path: 'allinfluexpert',
        component: AllinfluxComponent
    },
    {
        path: 'allbrands',
        component: AllBrandsComponent
    },
    {
        path: 'partnership',
        component: PartnershipComponent
    },
    {
        path : 'influencers-detail', component: InfluencersDetailComponent
    },
    {
        path: 'rfm', component: RfmComponent 
    },
    {
        path : 'agencies', component: AgenciesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'what-is-InfluExpAI',
        component: WhatIsInfluexpaiComponent
    },
    {
        path: 'How-It-Works',
        component: HowItWorksComponent
    },
    {
        path: 'terms',
        component: TermsAndConditionsComponent
    },
    {
        path: 'privacy',
        component: PrivacyAndPolicyComponent
    },

    {
        path: 'brand',
        component: BrandComponent
    },
    {
        path: 'influencers',
        component: InfluencersComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'admin',
        component:AdminComponent
    },
        {
        path: '',
        component: SuperadminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'manage-rfm',
                component: ManageRfmComponent
            },
            {
                path: 'manage-showcase',
                component: ManageShowcaseComponent
            },
            {
              path: 'manage-reviews',
              component: ManageReviewsComponent
            },
            {
                path: 'admin/profile',
                component: AdminProfileComponent,
                children: [
                    {path: '', component: BasicInfoComponent},
                     // {path: 'admin/profile/account', component: AdminAccountComponent},
                ]
            },
            {
                path: 'admin/profile/account',
                component: AdminProfileComponent,
                children: [
                    {path: '', component: AdminAccountComponent},
                ]
            },

            {
                path: 'admin/profile/payment',
                component: AdminProfileComponent,
                children: [
                    {path: '', component: AdminPaymentComponent},
                ]
            }
        ]
    },
    { path: 'pricing',  component:PricingComponent },
    // { path: 'pricing/steps', component: PricingComponent, canActivate: [AuthGuard]},
    { path: 'paymentmethod', component: PaymentmethodComponent, canActivate: [AuthGuard]},

    // {   path: '**', component: HomeComponent
    // },
            //
    //
    // // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // // { path: 'register', component: RegisterComponent },
    // // { path: 'twlogin', component: TwloginComponent },
    // { path: 'reset-password',  loadChildren: './reset-password/reset-password.module#ResetPasswordModule' },
    // { path: 'page-not-found', loadChildren: './error400/error400.module#Error400Module' },
    // { path: 'new-password/:token', loadChildren: './reset-password/change-password.module#ChangePasswordModule' },
    // // { path: '**', loadChildren: './login/login.module#LoginModule' },
    //

];
