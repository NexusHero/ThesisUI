import { observable } from "mobx"

class QDSStore {

  @observable qdsData = []
  @observable smiley0 = []
  @observable smiley1 = []
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
    if(this.qdsData.length <= 10){
      this.qdsData.unshift(data);
    }else{
      this.qdsData.pop()
      this.qdsData.unshift(data);
    }

    if(data.smiley == 0){
        this.smiley0.push(data);
    }else{
        this.smiley1.push(data);
    }
  }

/*separateSmileys (data, list){
    var lengthList = list.length;
    if(!(lengthList < 20)){
      list.shift();
    }
    if(data.power == 0 || data.power > 270){
         data.power = 249;
    }
    list.push(new SmileData(data.jobID, data.power));
  }*/


}
let Store = new QDSStore
export default Store
