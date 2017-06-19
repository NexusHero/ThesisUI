import React from "react"
import { Card, CardImg,CardHeader, CardText, CardBlock, CardTitle, CardSubtitle,  Button } from 'reactstrap';
import {ScatterChart,Scatter,AreaChart,ComposedChart,Bar, defs, Area, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';

export default class LaserLineSmiley0 extends React.Component {
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
  getSmiley0List(list){
    var lstSmiley = [];
    for(var i=0; i<list.length; i++){
      if(list[i].smiley == 0){
        lstSmiley.push(list[i]);
      }
    }
    debugger;
    return lstSmiley;
  }

  render(){
    debugger;
    const qds = this.getLastItems(this.getSmiley0List(this.props.data));
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
              <table >
                <tr>
                  <th>TruDiode 4001.5</th>
                  <th> <img src="../../assets/card_01.svg" width="75" height="75" class="d-inline-block align-mid" alt="" /></th>
                </tr>
               </table>
           </CardTitle>
            <ResponsiveContainer width='100%' aspect={4.0/3.0}>

            <ScatterChart>
             <XAxis dataKey={'jobID'} name='XAxis' unit=' JobID' domain={[minValueX, maxValueX]} interval={0}/>
             <YAxis dataKey={'power'} name='YAxis' unit=' Watt' domain={[minValueY, maxValueY]}/>
             <Legend/>
             <Scatter name='JobID in XAxis, Power in YAxis [W]' data={qds} fill='#295173'/>
             <ReferenceLine y={qualityMin} label="MIN" stroke="#fe8336"/>
             <ReferenceLine y={qualityMax} label="Max" stroke="#fe8336"/>
             <CartesianGrid />
             <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            </ScatterChart>

           </ResponsiveContainer>

          </CardBlock>
        </Card>

    )
  }
}
