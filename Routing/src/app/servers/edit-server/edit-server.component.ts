import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router.snapshot.params);
    console.log(this.router.snapshot.queryParams);
    console.log(this.router.snapshot.fragment);

    this.router.params.subscribe();
    this.router.queryParams.subscribe();
    this.router.fragment.subscribe();
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
