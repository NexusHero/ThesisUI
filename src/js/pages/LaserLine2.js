import React from "react"
import { Card, CardImg,CardHeader, CardText, CardBlock, CardTitle, CardSubtitle,  Button } from 'reactstrap';
import {ScatterChart,Scatter,AreaChart,ComposedChart,Bar, defs, Area, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';


export default class LaserLine2 extends React.Component {
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
  if(5 < size){
     var tmp = list.slice(-20);
     return tmp;
  }else{
    return list;
  }

}
  render(){
    const qds = this.getLastItems(this.props.data);
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
            <CardTitle> Quality Data from TruDiode 4001 </CardTitle>
            <ResponsiveContainer width='100%' aspect={4.0/3.0}>

            <ScatterChart>
             <XAxis dataKey={'jobID'} name='XAxis' unit=' JobID' domain={[minValueX, maxValueX]}/>
             <YAxis dataKey={'power'} name='YAxis' unit=' Watt' domain={[minValueY, maxValueY]}/>
             <Legend/>
             <Scatter name='Power' data={qds} fill='#295173'/>
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
