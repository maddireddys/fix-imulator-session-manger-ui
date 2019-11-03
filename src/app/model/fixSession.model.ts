export interface DialogData {
  senderCompId: string;
  targetCompId: string;
  beginString: string;
  startTime: string;
  endTime: string;
  heartBtInt: string;
  socketConnectPort: string;
  socketConnectHost: string;
}

export class FixSession {
  senderCompId: string;
  targetCompId: string;
  beginString: string;
  startTime: string;
  endTime: string;
  heartBtInt: string;
  socketConnectPort: string;
  socketConnectHost: string;
  status: string;
  isLoggedOn: boolean = false;
  showStop: boolean = false;
  showStart: boolean = false;
}