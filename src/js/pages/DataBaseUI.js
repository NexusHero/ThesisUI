import React from "react"
import DataTables from 'material-ui-datatables'

import DashboardHeader from '../pages/DashboardHeader'
import Image from '../pages/Image'

import { Card, CardImg, CardText, CardBlock,CardDeck,
  CardTitle, CardSubtitle, CardFooter ,Button, Container, Row, Col } from 'reactstrap';
import {fullWhite, darkWhite, lightWhite, blueGrey50, blueGrey100, grey50, blue900} from 'material-ui/styles/colors';
import { observer, inject } from "mobx-react"

import CodePosition from '../pages/CodePosition'
import LaserLine from '../pages/LaserLine'


const lstJobList = [
  {id: 1, place: "München", date: "26/07/2017", quality: 0.89, angle: 74.1, smile: 1, x:1, y:5},
  {id: 2, place: "München", date: "26/07/2017",quality: 0.90, angle: 40.3, smile: 1,x:0, y:6},
  {id: 3, place: "München", date: "26/07/2017",quality: 0.88, angle: 0.3, smile: 0,x:3, y:23},
  {id: 4, place: "München", date: "26/07/2017",quality: 0.89, angle: 0, smile: 0 ,x:8, y:12},
  {id: 5, place: "München", date: "26/07/2017", quality: 0.89, angle: 74.1, smile: 1,x:1, y:15},
  {id: 6, place: "München", date: "26/07/2017",quality: 0.90, angle: 40.3, smile: 0,x:1, y:15},
  {id: 7, place: "München", date: "26/07/2017",quality: 0.88, angle: 0.3, smile: 1,x:1, y:5},
  {id: 8, place: "München", date: "26/07/2017",quality: 0.88, angle: 0, smile: 1,x:1, y:5},
  {id: 9, place: "München", date: "26/07/2017", quality: 0.87, angle: 74.1, smile: 0,x:18, y:18},
  {id: 10, place: "München", date: "26/07/2017",quality: 0.88, angle: 40.3, smile: 0,x:20, y:9},
  {id: 11, place: "München", date: "26/07/2017",quality: 0.90, angle: 0.3, smile: 0,x:20, y:8},
  {id: 12, place: "München", date: "26/07/2017",quality: 0.90, angle: 0, smile: 0,x:15, y:5},
  {id: 13, place: "München", date: "26/07/2017", quality: 0.90, angle: 74.1, smile: 1,x:13, y:4},
  {id: 14, place: "München", date: "26/07/2017",quality: 0.89, angle: 40.3, smile: 1,x:8, y:22},
  {id: 15, place: "München", date: "26/07/2017",quality: 0.88, angle: 0.3, smile: 1,x:5, y:2},
  {id: 16, place: "München", date: "26/07/2017",quality: 0.90, angle: 0, smile: 0,x:5, y:4},
  {id: 17, place: "München", date: "26/07/2017", quality: 0.90, angle: 74.1, smile: 1,x:9, y:7},
  {id: 18, place: "München", date: "26/07/2017",quality: 0.89, angle: 40.3, smile: 1,x:12, y:5.5},
  {id: 19, place: "München", date: "26/07/2017",quality: 0.90, angle: 0.3, smile: 0,x:12, y:15},
  {id: 20, place: "München", date: "26/07/2017",quality: 0.90, angle: 0, smile: 0,x:1, y:5},

];

@inject('qdsstore')
@observer
export default class DataBaseUI extends React.Component {
  constructor(props){
    super(props);

    console.log("my data is finally coming: " + this.props.qdsstore.qdsData )
    this.state = {
        qds: this.props.qdsstore.qdsData,
        data: lstJobList,


       };
  }


  handleCellClick(rowIndex, columnIndex, row, column) {
       console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  }

  handleCellDoubleClick(rowIndex, columnIndex, row, column) {
     console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  }

  handleSortOrderChange(key, order) {
     console.log('key:' + key + ' order: ' + order);
  }

  handleRowSelection(selectedRows) {
    console.log('selectedRows: ' + selectedRows );

  }



  render() {
  debugger;
    const myReceivedData =  this.props.qdsstore.qdsData;
    console.log("my DATA: " + myReceivedData);
    // const {data, selectedRow} = this.state //this.props

    const table_columns = [
      {
        key: 'jobID',
        label: 'Job_ID',
        sortable: true,
        tooltip: 'Things...'
      },
      {
        key: 'date',
        label: 'Date',
      },
    ];

    const styles = {
      marginTop: "40px"
    }

 return(

  <div>
    <DashboardHeader data = {this.state.qds} />
    <div style={styles}>
    <div class="row">
         <div class="col-lg-4" >
            <Card class="myCard">
              <CardBlock>
                <CardTitle>Select your ID </CardTitle>
                              <DataTables
                                fixedHeader = {true}
                                selectable={true}
                                showRowHover={true}
                                enableSelectAll={false}
                                columns={table_columns}
                                selectable={true}
                                height={"800"}
                                 showCheckboxes={true}
                                data={this.state.qds}
                                showCheckboxes={true} 
                                onCellClick={this.handleCellClick}
                                onCellDoubleClick={this.handleCellDoubleClick}
                                onFilterValueChange={this.handleFilterValueChange}
                                onSortOrderChange={this.handleSortOrderChange}
                                onRowSelection={this.handleRowSelection.bind(this)}
                                count={30}/>
                    </CardBlock>
                  </Card>
              </div>

              <div class="col-lg-4">
                      <CodePosition data={this.state.qds}/>

                      <CardDeck>
                        <Image image={this.state.qds} title={"Before Image processing"}/>
                        <Image image={this.state.qds} title={"After Image processing"}/>
                      </CardDeck>
              </div>

              <div class="col-lg-4" >
                      <LaserLine data={this.state.qds} maxValue={0.93} minValue={0.85} qualityMin={0.86} qualityMax={0.905} smiley={1}/>
                      <LaserLine data={this.state.qds} maxValue={0.93} minValue={0.85} qualityMin={0.86} qualityMax={0.905} smiley={0}/>
              </div>
        </div>
      </div>
      </div>
  )
}
}
