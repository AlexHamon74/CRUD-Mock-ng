import { Routes } from '@angular/router';
import { CitationListComponent } from './citation-list/citation-list.component';
import { CitationDetailsComponent } from './citation-details/citation-details.component';
import { CitationsAdminComponent } from './citations-admin/citations-admin.component';
import { CitationCreateComponent } from './citation-create/citation-create.component';

export const routes: Routes = [
    {path:'', redirectTo:'/citation-list', pathMatch:'full'},
    {path:'citation-list', component:CitationListComponent},
    {path: 'citation-details/:id', component:CitationDetailsComponent},
    {path: 'citation-admin', component:CitationsAdminComponent},
    {path: 'citation-create', component:CitationCreateComponent},
];
