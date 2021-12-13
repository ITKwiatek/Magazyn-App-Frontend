import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/model/project.model';
import { SharedService } from 'src/app/service/shared.service';
import { VirtualOrderService } from '../../service/virtual-order.service';

declare function dropdownActivate():void ;

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})

export class ProjectsViewComponent implements OnInit {

  project:Project;
  projects: Array<any>;
  totalRecords:number;
  page: number = 1;


  constructor(private actRoute: ActivatedRoute, private sharedService: SharedService, private virtualOrderService: VirtualOrderService) {
    this.project = this.sharedService.getProject();
    this.projects = new Array<any>(1,22,2,43,423,432,432,432,432,4,5,7,4,67,67,8,6,6,76,8,86,67,8,8,8,6,6,4,43,4,44,4,6,3,3,22,2,2,2,3,4,4,4,4,2,6,2,2,34,23,42,34,23423);
    this.totalRecords = this.projects.length;
   }

  ngOnInit(): void {
    dropdownActivate();
  }

  isMergeMode():boolean {
    return this.virtualOrderService.isChangeMode();
  }

}
