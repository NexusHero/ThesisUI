import React from "react"
import { Card, CardImg, CardHeader, CardText, CardBlock,CardTitle, CardSubtitle, CardFooter ,Button } from 'reactstrap';

export default class Image extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    // const {data, selectedRow} = this.state //this.props
  //  const jobs  = this.props.image;
    const imageTitle = this.props.title;
    const image = "data:image/jpeg;base64," + this.props.image;

      return(

        <Card class="myCard">

            <CardImg bottom width="100%" src={image}/>
             <CardBlock>
               <CardTitle>{imageTitle}</CardTitle>
             </CardBlock>
        </Card>

  )
}
}
