import {Component, OnInit} from '@angular/core';
import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number, name: string, status: string };

    constructor(private serversService: ServersService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        let iServerId: number = +this.route.snapshot.params['id'];

        let server = this.serversService.getServer(iServerId);
        console.log(server);

        this.server = server;

        this.route.params.subscribe(
            (params: Params) => {
                iServerId = +params['id'];
                server = this.serversService.getServer(iServerId);
                console.log(server);
                this.server = server;
            }
        );
    }

}
