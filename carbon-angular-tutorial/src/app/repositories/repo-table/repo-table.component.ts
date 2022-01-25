import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableModel,
  TableItem,
  TableHeaderItem,
  Table
} from 'carbon-components-angular';

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
  model = new TableModel();
  skeletonModel = Table.skeletonModel(10, 6);
  skeleton = true;
  data = [];

  @ViewChild('linkTemplate') 
  protected linkTemplate: TemplateRef<any> | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.getData().subscribe(console.log)
    this.getData().subscribe((response: any)=> {
      console.log("======0================="+ response)
      if (response.error){
        console.log("======1=================")

      }else if (response.loading) {
        console.log("======2=================")
        this.skeleton = true;
      } else {
        console.log("======3=================")
        // if we're heare , we've got our data!
        // this.data = response.json
        // console.log(response.data)

        // this.model.data = this.prepareData(
        //   response.data
        // );

        this.data = response.data.organization.repositories.nodes;
        console.log('Apollo nodes; ', this.data);
        this.model.pageLength = 10;
        this.model.totalDataLength = response.data.organization.repositories.totalCount;
        this.selectPage(1);
      }
    })

    this.model.header = [
			new TableHeaderItem({ data: 'Name' }),
			new TableHeaderItem({ data: 'Created' }),
			new TableHeaderItem({ data: 'Updated' }),
			new TableHeaderItem({ data: 'Open Issues' }),
			new TableHeaderItem({ data: 'Stars' }),
			new TableHeaderItem({ data: 'Links' })
		];
		this.model.pageLength = 10;

    this.model.data = [
      [
        new TableItem({ data: 'Repo 1', expandedData: 'Row description' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: '123' }),
        new TableItem({ data: '456' }),
        new TableItem({ data: 'Links' }),
      ],
      [
        new TableItem({ data: 'Repo 2', expandedData: 'Row description' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: '123' }),
        new TableItem({ data: '456' }),
        new TableItem({ data: 'Links' }),
      ],
      [
        new TableItem({ data: 'Repo 3', expandedData: 'Row description' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: 'Date' }),
        new TableItem({ data: '123' }),
        new TableItem({ data: '456' }),
        new TableItem({ data: 'Links' }),
      ],
    ];
 

  }

  getData() {
    // return this.http.get("http://localhost:12306/api/1")
    return this.http.get("/api/1")
  }

  selectPage(page:any) {
    const offset = this.model.pageLength * (page - 1);
    const pageRawData = this.data.slice(offset, offset + this.model.pageLength);
    this.model.data = this.prepareData(pageRawData);
    this.model.currentPage = page;
  }

  prepareData(data:any) {
    this.skeleton = false;
    const newData = [];
  
    for (const datum of data) {
      newData.push([
        new TableItem({ data: datum.name, expandedData: datum.description }),
        new TableItem({ data: new Date(datum.createdAt).toLocaleDateString() }),
        new TableItem({ data: new Date(datum.updatedAt).toLocaleDateString() }),
        new TableItem({ data: datum.issues.totalCount }),
        new TableItem({ data: datum.stargazers.totalCount }),
        new TableItem({
          data: {
            github: datum.url,
            homepage: datum.homepageUrl
          },
          template: this.linkTemplate
        })
      ]);
    }
    return newData;
  }

}
