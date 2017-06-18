import {observable} from "mobx"
export default class SmileData {

  @observable jobID
  @observable power

  constructor(jobID, power){
    this.jobID = jobID
    this.power = power
  }
}
