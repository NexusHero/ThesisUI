import { observable } from "mobx"

class QDSStore {

  @observable qdsData = []
  setApi(api) {

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

    if(data.power == 0 || data.power > 260){
      data.power = 250;
    }

    if(this.qdsData.length < 50){
      this.qdsData.unshift(data);
    }
    else{
      this.qdsData.pop();
      this.qdsData.unshift(data);
    }

  }
}
let Store = new QDSStore
export default Store
