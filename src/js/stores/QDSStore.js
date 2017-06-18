import { observable } from "mobx"

class QDSStore {

  @observable qdsData = []

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
    debugger;
    if(data != null){
        data.forEach(r => addQds(r))
    }

  }

  updateQDS(data){
      this.qdsData.push(data)
  }


}
let Store = new QDSStore
export default Store
