import React from "react"
import { Card, CardImg,CardHeader, CardText, CardBlock, CardTitle, CardSubtitle,  Button } from 'reactstrap';
import {LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';


export default class LaserLine extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const qds  = this.props.data;
    const minValue = this.props.minValue;
    const maxValue = this.props.maxValue;
    const smiley = this.props.smiley;
    const qualityMin = this.props.qualityMin;
    const qualityMax = this.props.qualityMax;
    const label = {
      orientation: 'outer'
    };
debugger;
    //must be generic
    return(

      <Card class="myCard">
        <CardBlock>
        <CardTitle> TruDiode 4001.5 </CardTitle>
        <ResponsiveContainer width='100%' aspect={4.0/3.0}>
        <LineChart  data={qds}>
       <XAxis dataKey="jobID" />
       <YAxis domain={[minValue, maxValue]}/>

       <Tooltip/>
       <Legend/>

       <ReferenceLine y={qualityMin} label="MIN" stroke="#fe8336"/>
       <ReferenceLine y={qualityMax} label="Max" stroke="#fe8336"/>
       <Line type="monotone" dataKey="power" stroke="#295173"  />
       </LineChart>
         {/*<CartesianGrid stroke='#A5C049' fill="white" />*/}


       </ResponsiveContainer>

      </CardBlock>
    </Card>

    )
  }
}
