import React from "react"
import { Card, CardImg, CardText, CardBlock,CardTitle, CardHeader, CardSubtitle, CardFooter ,Button,CardDeck} from 'reactstrap';

export default class DashboardHeader extends React.Component {

  render() {

    // const {data, selectedRow} = this.state //this.props #295173
      const jobs = this.props.data;

      return(
        <div class="row">
             <div class="col-lg-4" >
                <Card block inverse style={{ backgroundColor: '#295173', borderColor: '#295173' }} class="myCard" >
                    <CardHeader></CardHeader>
                     <CardBlock>
                       <CardTitle>Jobs</CardTitle>
                     </CardBlock>
                     <CardFooter></CardFooter>
                </Card>
             </div>
            <div class="col-lg-4" >
            <Card block inverse style={{ backgroundColor: '#295173', borderColor: '#295173' }} class="myCard">
              <CardHeader></CardHeader>
                 <CardBlock>
                   <CardTitle>
                  Image processing </CardTitle>
                 </CardBlock>
              <CardFooter></CardFooter>
            </Card >
            </div>
        <div class="col-lg-4" >
          <Card block inverse style={{ backgroundColor: '#295173', borderColor: '#295173' }} class="myCard">
            <CardHeader></CardHeader>
               <CardBlock>
                 <CardTitle>Welding</CardTitle>
               </CardBlock>
            <CardFooter></CardFooter>
          </Card>
      </div>
    </div>


  )
}
}
