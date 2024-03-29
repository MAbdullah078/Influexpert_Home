import {Component, OnInit} from '@angular/core';
import {Config} from '../../config';
import {AlertService} from '../../services/alert.service';
import {Router} from '@angular/router';
import swal from "sweetalert2";
import {AppService} from '../../app.service';

@Component({
  selector: 'app-header',
    templateUrl: './header.html',
    providers: [AlertService, AppService],
  styles: []
})
export class HeaderComponent implements OnInit {
  loginurl: string = "http://brand.influexpai.com/login";
  infurl: string = "http://influencer.influexpai.com/authentication/signin";
  loginsurl: string = 'https://brand.influexpai.com/register';
  infsurl: string = "http://influencer.influexpai.com/authentication/signup";
  influencersppurl: string = 'https://influencer.influexpai.com/authentication/signin';
  brand_app_cat_url= 'https://brand.influexpai.com/dashboard';
  brand_app_fb_url = 'https://brand.influexpai.com/facebook/search';
  brand_app_insta_url = 'https://brand.influexpai.com/instagram/search';
  brand_app_twi_url = 'https://brand.influexpai.com/twitter/search';
  brand_app_blog_url = 'https://brand.influexpai.com/blogosphere/search';
  brand_app_yt_url = 'https://brand.influexpai.com/youtube/search';
  brand_app_ld_url = 'https://brand.influexpai.com/linkedin/search';
  brand_app_pt_url = 'https://brand.influexpai.com/pinterest/search';
  brand_app_ps_url = 'https://brand.influexpai.com/periscope/search';
  brand_app_md_url = 'https://brand.influexpai.com/medium/search';
  brand_app_fl_url = 'https://brand.influexpai.com/flickr/search';
  create_showcase = 'https://influencer.influexpai.com/create-showcase';
  create_rfm = 'https://brand.influexpai.com/rfm';
  hire_influencer='https://brand.influexpai.com/dashboard';
  rfm_url='https://brand.influexpai.com/my-rfm'

    checkflag: any;
    pricing: number;
    name: any;
    email: any;
    phone: any;
    wesites: any;
    services: any;

    title: any;
    category: any;
    description: any;
    pictures: any;
    video: any;
    file: any;
    questions: any;
    offer_to_influencer: any;

    constructor(private router:Router, private obj: AppService) {
  }
 

  ngOnInit() {
    window.scroll(0, 0);
    window.onscroll = function () { myFunction() };
    
    var header = document.getElementById("MYHeader");
    var sticky = header.offsetTop;
  
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("box_shadow");
      } else {
        header.classList.remove("box_shadow");
      }
    }



  }
  
  
    login_Admin(){
        this.router.navigate(['admin'])
    }

  
    // openSA() {
    //     swal.mixin({
    //         // input: 'text',
    //         confirmButtonText: 'Next &rarr;',
    //         showCancelButton: true,
    //         customClass: 'swalcustom',
    //         progressSteps: ['1', '2', '3', '4', '5', '6', '7'],
    //         reverseButtons: true,
    //         progressStepsDistance: '35px',
    //         width: '65em',
    //         imageHeight: 400,
    //         imageWidth: 400,



    //     }).queue([
    //         {
    //             imageUrl: 'https://www.influexpai.com/assets/images/brand/Marketing.jpg',
    //             title: 'Looking for a Top Influencer Marketing Agency?\n',
    //             text: 'Please fill the form to connect with an agency that can meet your needs.\n' +
    //                 '\n',

    //         },
    //         {
    //             title: 'Pricing',
    //             text: 'Your Monthly Influencer Budget is: *\n ',
    //             input: 'text',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to write Budget!'
    //             },
    //             inputPlaceholder: '$',
    //             preConfirm: (result)=>{
    //                 return new Promise( (resolve, reject)=>{
    //                     setTimeout(()=>{
    //                         if(result===''){
    //                             reject()
    //                         }
    //                         else if(result) {
    //                             resolve();
    //                             this.pricing= result;
    //                         }
    //                     })
    //                 })
    //             }
    //         },
    //         {
    //             title: 'Profile',
    //             text: 'Please Write your Name: *\n ',
    //             input: 'text',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to write Your Name!'
    //             },
    //             inputPlaceholder: 'Name',
    //             preConfirm : (result)=>{
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                             this.name= result;
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }

    //         },
    //         {
    //             title: 'Email',
    //             text: 'Please Write your Email here: *\n ',
    //             input: 'text',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to write Email!'
    //             },
    //             inputPlaceholder: 'Valid Email',
    //             preConfirm : (result)=>{
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                             this.email= result;
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }

    //         },
    //         {
    //             title: 'Phone No',
    //             text: 'Please Write your Phone Number here: *\n ',
    //             input: 'text',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to write Phone Number'
    //             },
    //             inputPlaceholder: 'Phone Number',
    //             preConfirm : (result)=>{
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                             this.phone= result;
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }

    //         },
    //         {
    //             title: 'Website',
    //             text: 'Please Write Website URL here: *\n ',
    //             input: 'text',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to write Valid URL'
    //             },
    //             inputPlaceholder: 'https://',
    //             preConfirm : (result)=>{
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                             this.wesites= result;
    //                             console.log('Result is', this.wesites);
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }

    //         }, {
    //             title: 'Wait',
    //             text: 'What Services do you need: *\n ',
    //             input: 'textarea',
    //             inputPlaceholder: 'Writer Service here ',
    //             inputValidator: (value) => {
    //                 return !value && 'You need to Your Valid Services that you need'
    //             },
    //             confirmButtonText: 'Submit',
    //             preConfirm : (result)=>{
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                             this.Post_Marketing_request();
    //                             this.services= result;
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }

    //         },

    //     ]).then((result) => {
    //             if (result) {
    //                 return new Promise( (resolve, reject)=> {
    //                     setTimeout( () => {
    //                         if (result) {
    //                             resolve();
    //                         } else {
    //                             reject(swal('Cancelled', '', 'error'))
    //                         }
    //                     }, 1)
    //                 })
    //             }
    //         }
    //     )
    // }


    openSA() {
        swal.mixin({
            // input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            customClass: 'swalcustom',
            progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8'],
            reverseButtons: true,
            progressStepsDistance: '35px',
            width: '65em',
            imageHeight: 400,
            imageWidth: 400,



        }).queue([
            {
                imageUrl: 'https://www.influexpai.com/assets/images/brand/Marketing.jpg',
                title: 'Looking for a Top Influencer Marketing Agency?\n',
                text: 'Please fill the form to connect with an agency that can meet your needs.\n' +
                    '\n',

            },
            {
                title: 'Title',
                text: 'Title for Request for Marketing: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'You need to write Title!'
                // },
                // inputPlaceholder: '$',
                preConfirm: (result)=>{
                    return new Promise( (resolve, reject)=>{
                        setTimeout(()=>{
                            if(result===''){
                                reject()
                            }
                            else if(result) {
                                resolve();
                                this.title= result;
                            }
                        })
                    })
                }
            },
            {
                title: 'Category',
                text: 'Insert Category: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'You need to write Category!'
                // },
                inputPlaceholder: 'Name',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.category= result;
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Description',
                text: 'Please Write your Description here: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'You need to write Description!'
                // },
                inputPlaceholder: 'Description',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.description= result;
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Picture',
                text: 'Please add picture here: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'Picture'
                // },
                inputPlaceholder: 'Picture Here',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.pictures= result;
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Video',
                text: 'Please add video here: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'Video'
                // },
                // inputPlaceholder: 'https://',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.video= result;
                                console.log('Result is', this.wesites);
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Upload File',
                text: 'Please add file here: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'File here'
                // },
                // inputPlaceholder: 'https://',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.file= result;
                                console.log('Result is', this.file);
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Question',
                text: 'Any Questions: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'Question'
                // },
                // inputPlaceholder: 'https://',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.questions= result;
                                console.log('Result is', this.questions);
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            {
                title: 'Wait',
                text: 'Do you have any offer: *\n ',
                input: 'text',
                // inputValidator: (value) => {
                //     return !value && 'Offer'
                // },
                // inputPlaceholder: 'https://',
                preConfirm : (result)=>{
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                                this.offer_to_influencer= result;
                                console.log('Result is', this.offer_to_influencer);
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }

            },
            //  {
            //     title: 'Wait',
            //     text: 'What Services do you need: *\n ',
            //     input: 'textarea',
            //     inputPlaceholder: 'Writer Service here ',
            //     inputValidator: (value) => {
            //         return !value && 'You need to Your Valid Services that you need'
            //     },
            //     confirmButtonText: 'Submit',
            //     preConfirm : (result)=>{
            //         return new Promise( (resolve, reject)=> {
            //             setTimeout( () => {
            //                 if (result) {
            //                     resolve();
            //                     this.Post_Marketing_request();
            //                     this.services= result;
            //                 } else {
            //                     reject(swal('Cancelled', '', 'error'))
            //                 }
            //             }, 1)
            //         })
            //     }

            // },

        ]).then((result) => {
                if (result) {
                    return new Promise( (resolve, reject)=> {
                        setTimeout( () => {
                            if (result) {
                                resolve();
                            } else {
                                reject(swal('Cancelled', '', 'error'))
                            }
                        }, 1)
                    })
                }
            }
        )
    }

    // Post_Marketing_request(){
    //     this.obj.post_Request(this.title, this.category, this.description, this.pictures, this.video, this.file, this.questions, this.offer_to_influencer).subscribe(
    //         data =>{
    //             console.log(data);
    //         },
    //         error1 => {
    //             swal('Your Data is invalid', 'or we have some server error ', 'error')
    //         })
    // }




    
  // gotoLogin() {
  //   window.location.href = 'https://influexpapi.herokuapp.com/login';
  // }

}
