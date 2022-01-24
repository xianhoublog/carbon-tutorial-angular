import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, TableModule } from 'carbon-components-angular';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { LinkModule, PaginationModule } from 'carbon-components-angular';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    RepoPageComponent,
    RepoTableComponent
  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    GridModule,
    TableModule,
    LinkModule,
    PaginationModule
  ]
})
export class RepositoriesModule { }
