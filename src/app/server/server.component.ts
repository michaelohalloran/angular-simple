import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId : number;
  serverStatus: string;
  allowNewServer : boolean = false;
  showImage: boolean;
  imageSource: string;
  serverCreationStatus : string = 'No server created';
  serverName: string = '';
  serverCreated: boolean = false;
  username: string = '';
  servers = [];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
    this.imageDisplay();
    this.getImageSource();
    this.getColor();
  }

  ngOnInit() {
    this.setServerId();
    this.setServerStatus();
  }

  toggleServer() {
    this.allowNewServer = !this.allowNewServer;
  }

  setServerStatus() {
    return this.serverStatus = this.serverId > 25 ? 'offline' : 'online';
  }

  setServerId() {
    this.serverId = Math.floor(Math.random() * 50 + 1);
    return this.serverId;
  }

  getImageSource() {
    this.imageSource = 'https://picsum.photos/200/200/?random';
  }

  //sets boolean randomly
  imageDisplay() {
    let decidingFactor = Math.random();
    this.showImage = decidingFactor > 0.5 ? true : false;
  }

  onCreateServer(server) {
    this.serverCreated = true;
    this.serverCreationStatus = `Server created with name ${this.serverName}`;
    console.log('just created server: ', server);
    this.servers.unshift(server);
  }

  onUpdateServerName(e: Event) {
    // console.log('e: ', e);
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

}
