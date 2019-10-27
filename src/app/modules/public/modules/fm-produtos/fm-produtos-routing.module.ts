import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmProdutosRoutingModule { }
