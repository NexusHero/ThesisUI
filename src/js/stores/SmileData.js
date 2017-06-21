import { observable } from "mobx"

export default class SmileData {

  constructor(jobID, power){
    this.jobID = jobID
    this.power = power
  }
}
