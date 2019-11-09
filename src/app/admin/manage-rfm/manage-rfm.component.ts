import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-manage-rfm',
    templateUrl: './manage-rfm.component.html',
    styleUrls: ['./manage-rfm.component.css'],
    providers: [AppService]
})
export  class ManageRfmComponent implements OnInit{
    date: Date;
    public Pending_RFMsList;
    public Approved_RFMsList;
    public Rejected_RFMsList;


    constructor(private  obj: AppService){}
    ngOnInit(){
        this.obj.get_pending_RFM().subscribe(response => {
            this.Pending_RFMsList = response.Message;
            console.log('Pending are ........', this.Pending_RFMsList)
            // this.loaded = true;
        });


        this.obj.get_approved_RFM().subscribe(response => {
            this.Approved_RFMsList = response.Message;
            console.log('Approved are ........', this.Approved_RFMsList)
            // this.loaded = true;
        });
        this.obj.get_rejected_RFM().subscribe(response => {
            this.Rejected_RFMsList = response.Message;
            console.log('Rejected are........', this.Rejected_RFMsList)
            // this.loaded = true;
        });
    }

    reject_RFM(id) {
        this.obj.rejectRFM(id).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    approved_RFM(id) {
        this.obj.approved_RFM(id).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

}