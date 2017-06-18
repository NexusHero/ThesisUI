import { EventEmitter } from "events"

class DefaultStore extends EventEmitter {
  constructor(props) {
    super()
    this.setMaxListeners(200);
    console.log(this.props)
  }

  setApi(commgate){
    debugger;
   let emit = this.emit.bind(this);
   this.commgate = commgate;
   this.commgate.on("QDS_DATA_UPDATED", data => emit("QDS_DATA_UPDATED", data));

 }

  getAllQDSData(){
    return this.commgate.getAllQDSData(); //it's a promise
  }
}
let Store = new DefaultStore
export default Store
