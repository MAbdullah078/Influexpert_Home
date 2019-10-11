import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-manage-showcase',
    templateUrl: './manage-showcase.component.html',
    styleUrls: ['./manage-showcase.component.css']
})
export  class ManageShowcaseComponent implements OnInit{
    date: Date;
    public Pending_ScsList;
    public Approved_ScsList;
    public Rejected_ScsList;

    constructor(private  obj: AppService){}
    ngOnInit(){}

}
