import { observable } from "mobx"

class QDSStore {

  @observable qdsData = []
  @observable camera = null
  @observable overlay = null
  setApi(api) {
    debugger;
    let updateQDS = this.updateQDS.bind(this)
    let addQDSMessages = this.addQDSMessages.bind(this)

    this.api = api
    this.api.on("QDS_DATA_UPDATED", updateQDS)
    this.api.getAllQDSData().then(ds => {
        addQDSMessages(ds);
    })
  }

  addQDSMessages(data){
    const addQds = this.updateQDS.bind(this)
    if(data != null){
        data.forEach(r => addQds(r))
    }

  }

  updateQDS(data){

    if(this.qdsData.length < 50){
      this.qdsData.unshift(data);
    }
    else{
      this.qdsData.pop();
      this.qdsData.unshift(data);
    }
    this.camera = data.camera;
    this.overlay = data.overlay;
  }
}
let Store = new QDSStore
export default Store
