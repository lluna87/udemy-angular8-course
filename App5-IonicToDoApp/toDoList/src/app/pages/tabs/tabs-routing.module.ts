import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'todo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/todo-tab/todo-tab.module').then(m => m.ToDoTabPageModule)
          },
          {
            path: 'add/:listId',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../../pages/add/add.module').then(m => m.AddPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'done',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/done-tab/done-tab.module').then(m => m.DoneTabPageModule)
          },
          {
            path: 'add/:listId',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../../pages/add/add.module').then(m => m.AddPageModule)
              }
            ]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/todo',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/todo/add/:listId',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/done',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/todo',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/done',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
