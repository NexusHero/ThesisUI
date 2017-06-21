import React from "react"
import { Card, CardImg,CardHeader, CardText, CardBlock, CardTitle, CardSubtitle,  Button } from 'reactstrap';
import {ScatterChart,Scatter,AreaChart,ComposedChart,Bar, defs, Area, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';


export default class LaserLine2 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const qds = this.props.data;
    const qualityMin = this.props.qualityMin;
    const qualityMax = this.props.qualityMax;
    const label = {
      orientation: 'outer'
    };
    //must be generic
    return(

      <Card class="myCard">
            <CardBlock>
            <CardTitle> Quality Data from TruDiode 4001 </CardTitle>
            <ResponsiveContainer width='100%' aspect={4.0/3.0}>
{/*
            <ComposedChart  data={this.state.qds}
                margin={{top: 20, right: 20, bottom: 20, left: 20}}>
              <XAxis dataKey="jobID"/>
              <YAxis />
              <Tooltip/>
              <Legend/>
              <CartesianGrid stroke='#f5f5f5'/>
              <Bar dataKey='power' barSize={10} fill='#413ea0'/>
              <Line type='monotone' dataKey='power' stroke='#ff7300'/>
           </ComposedChart>
*/}
            <ScatterChart>
             <XAxis dataKey={'jobID'} name='XAxis' unit='JobID'/>
             <YAxis dataKey={'power'} name='YAxis' unit='W'/>
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
