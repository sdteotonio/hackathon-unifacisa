import { Component, OnInit } from '@angular/core';
import { FmContribuinteService } from '../../services/fm-contribuinte.service';

@Component({
  templateUrl: './pesquisar-contribuinte.component.html',
  styleUrls: ['./pesquisar-contribuinte.component.css']
})
export class PesquisarContribuinteComponent implements OnInit {

  constructor(
    private service: FmContribuinteService
  ) { }

  ngOnInit() {
  }

}
