import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/Router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (param:Params) => this.server = this.serversService.getServer(+param["id"])
    )
  }

  onEditServer(){
    this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: "preserve"});
  }
}
