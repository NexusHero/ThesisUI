import React from "react"
import { Card, CardImg,CardHeader, CardText, CardBlock, CardTitle, CardSubtitle,  Button } from 'reactstrap';
import {ScatterChart,Scatter,AreaChart,ComposedChart,Bar, defs, Area, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';

export default class LaserLineSmiley1 extends React.Component {
  constructor(props){
    super(props);
  }

getMax(list){
  var res = Math.max.apply(Math,list.map(function(o){return o.jobID;}))
  return res
}

getMin(list){
  var res = Math.min.apply(Math,list.map(function(o){return o.jobID;}))
  return res
}

getLastItems(list){
  var size = list.length
  if(19 < size){
     var tmp = list.slice(Math.max(size - 19));
     return tmp;
  }else{
    return list;
  }
}
  getSmiley1List(list){
    var lstSmiley = [];
    for(var i=0; i<list.length; i++){
      if(list[i].smiley == 1){
        lstSmiley.push(list[i]);
      }
    }
    return lstSmiley;
  }

  render(){

    const qds = this.getLastItems(this.getSmiley1List(this.props.data));
    const qualityMin = this.props.qualityMin;
    const qualityMax = this.props.qualityMax;
    const minValueY = this.props.minValue;
    const maxValueY = this.props.maxValue;
    const minValueX = this.getMin(qds);
    const maxValueX = this.getMax(qds);

    const label = {
      orientation: 'outer'
    };
    //must be generic
    return(
      <Card class="myCard">
            <CardBlock>
            <CardTitle>
              <div>
                TruDiode 4001.5
                <img src="../../assets/card_02.svg" width="75" height="75"  alt="" />
              </div>
           </CardTitle>
            <ResponsiveContainer width='100%' aspect={4.0/3.0}>
            <LineChart  data={qds}>
             <XAxis dataKey="jobID" domain={[minValueX, maxValueX]}/>
             <YAxis domain={[minValueY, maxValueY]}/>
             <Tooltip/>
             <Legend/>
             <ReferenceLine y={qualityMin} label="MIN" stroke="#fe8336"/>
             <ReferenceLine y={qualityMax} label="Max" stroke="#fe8336"/>
             <Line type="monotone" dataKey="pulseEnergyAvgAct" stroke="#295173"  />
           </LineChart>
           </ResponsiveContainer>
          </CardBlock>
        </Card>

    )
  }
}
