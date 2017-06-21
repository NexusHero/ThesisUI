import React from "react"
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardImg,CardHeader, CardText, CardBlock,
        CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class CodePosition extends React.Component {
  constructor(props){
    super(props);
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

  render(){
    const qds  = this.getLastItems(this.props.data);
    const label = {
      orientation: 'outer'
    };

    //must be generic
    return(
      <Card class="myCard">
        <CardBlock>
          <CardTitle>VisionLine</CardTitle>
          <ResponsiveContainer width='100%' aspect={4.0/3.0}>
          <ScatterChart>
           <XAxis dataKey={'x'} name='XAxis' unit='mm'/>
           <YAxis dataKey={'y'} name='YAxis' unit='mm'/>
           <Legend/>
           <Scatter name='Center of QR-Code in (mm |mm)' data={qds} fill='#295173'/>
           <CartesianGrid />
           <Tooltip cursor={{strokeDasharray: '3 3'}}/>
         </ScatterChart>
         </ResponsiveContainer>
         </CardBlock>
       </Card>
    )
  }
}
