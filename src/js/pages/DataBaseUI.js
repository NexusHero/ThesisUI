import React from "react"
import DataTables from 'material-ui-datatables'
import DashboardHeader from '../pages/DashboardHeader'
import Image from '../pages/Image'

import { Card, CardImg, CardText, CardBlock,CardDeck,
  CardTitle, CardSubtitle, CardFooter ,Button, Container, Row, Col } from 'reactstrap';
import {fullWhite, darkWhite, lightWhite, blueGrey50, blueGrey100, grey50, blue900} from 'material-ui/styles/colors';

import { observer, inject } from "mobx-react"
import CodePosition from '../pages/CodePosition'
import LaserLine from '../pages/LaserLine2'


@inject('qdsstore')
@observer
export default class DataBaseUI extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        qds: this.props.qdsstore.qdsData,
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
    this.setState(
      {
         normal: this.state.qds[selectedRows].camera,
         overlay: this.state.qds[selectedRows].overlay
       }
     );
  }



  render() {

    const table_columns = [
      {
        key: 'jobID',
        label: 'Job_ID',
      },
      {
        key: 'timestamp',
        label: 'Date',
      },
    ];

    const styles = {
      marginTop: "40px"
    }

 return(

  <div>
    <DashboardHeader data = {this.state.qds.length} />
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
                        <Image image={this.state.normal} title={"Before Image processing"}/>
                        <Image image={this.state.overlay} title={"After Image processing"}/>
                      </CardDeck>
              </div>

              <div class="col-lg-4" >
                      <LaserLine data={this.state.qds} maxValue={255} minValue={244} qualityMin={246} qualityMax={253} smiley={1}/>
              </div>
        </div>
      </div>
      </div>
  )
}
}
