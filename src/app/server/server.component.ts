import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId : number;
  serverStatus: string = this.serverId > 25 ? 'offline' : 'online';
  allowNewServer : boolean = false;
  showImage: boolean;
  imageSource: string;
  serverCreationStatus : string = 'No server created';
  inputText: string = '';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
    this.imageDisplay();
    this.getImageSource();
  }

  ngOnInit() {
    this.getServerId();
  }

  toggleServer() {
    this.allowNewServer = !this.allowNewServer;
  }

  getServerId() {
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

  onCreateServer() {
    this.serverCreationStatus = 'Server created!';
  }

  onUpdateServerName(e: Event) {
    // console.log('e: ', e);
    this.inputText = (<HTMLInputElement>e.target).value;
  }

}
