import React, { Component} from "react";
import { FormGroup, Label, Input, FormText, Col, CustomInput,Collapse } from 'reactstrap';
import './test3.css';
import Comment from "./comment";
import ImageUploader from 'react-images-upload';

class CommentList extends Component {
  constructor(props) {
      super()

      this.state = {
          // Takes active tab from props if it is defined there
          flag: true,
          boolean : true,
          commentList:[
          {id:1,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description' ,
          List:[
          {id:11,
          image:'4',
          title:'Title11',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:12,
           image:'3',
          title:'Title112',
          rating:4,
          description:'description2'
          },
          {id:13,
           image:'5',
           title:'Title13',
           rating:2,
          description:'description3'
          }]         },
          {id:2,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2',
          List:[
          {id:14,
          image:'4',
          title:'Title14',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:15,
           image:'3',
          title:'Title15',
          rating:4,
          description:'description2'
          },
          {id:16,
           image:'5',
           title:'Title16',
           rating:2,
          description:'description3'
          }]
          },
          {id:3,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3',
          List:[
          {id:17,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:18,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2'
          },
          {id:19,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3'
          }]
          },
          {id:4,
           image:'6',
           title:'Titl4',
           rating:2,
          description:'description4',
          List:[
          {id:20,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:21,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2'
          },
          {id:22,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3'
          }]
        },
          {id:5,
           image:'3',
          title:'Title5',
          rating:4,
          description:'description5',
          List:[
          {id:23,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:24,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2'
          },
          {id:25,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3'
          }]
          },
          {id:6,
           image:'4',
           title:'Title6',
           rating:2,
          description:'description6',
          List:[
          {id:26,
          image:'4',
          title:'Title1',
          rating:3,
          description:'description2, i want to know what the maximum length of description'          },
          {id:27,
           image:'3',
          title:'Title2',
          rating:4,
          description:'description2'
          },
          {id:28,
           image:'5',
           title:'Title3',
           rating:2,
          description:'description3'
          }]
        },
        {id:7,
         image:'5',
         title:'Title7',
         rating:2,
        description:'description7',
        List:[
        {id:29,
        image:'4',
        title:'Title1',
        rating:3,
        description:'description2, i want to know what the maximum length of description'          },
        {id:30,
         image:'3',
        title:'Title2',
        rating:4,
        description:'description2'
        },
        {id:31,
         image:'5',
         title:'Title3',
         rating:2,
        description:'description3'
        }]
      },{id:8,
       image:'4',
       title:'Title8',
       rating:3,
      description:'description8',
      List:[
      {id:32,
      image:'4',
      title:'Title1',
      rating:3,
      description:'description2, i want to know what the maximum length of description'
      },
      {id:33,
       image:'3',
      title:'Title2',
      rating:4,
      description:'description2'
      },
      {id:34,
       image:'5',
       title:'Title3',
       rating:2,
      description:'description3'
      }]
    }],
      pictures: [],
      page : 0
 };
      this.onDrop = this.onDrop.bind(this);
      // Bind the dropdownSelect function already here (not in the render function)
      this.Change1 = this.Change1.bind(this);
      this.Change2 = this.Change2.bind(this);

  }
  onDrop(picture) {
       this.setState({
           pictures: this.state.pictures.concat(picture),
       });
   }
  Change1=()=>{
  console.log("clicked-----------------------");
  alert("clicked ");
  this.setState({
    flag : true});
  }
  Change2=()=>{
  console.log("clicked-----------------------");
  alert("clicked ");
  this.setState({
    flag : false});
  }
  handlePrevious=()=>{
    console.log("Previous-----------------------")
    if(this.state.page > 0){
      this.setState({page : this.state.page -1})
    }
  }
  handleNext=()=>{
    console.log("Next-----------------------")
    if(this.state.commentList.length - 3 * (this.state.page + 1) > 0){
      this.setState({page : this.state.page + 1})
    }
  }
  render() {
    return (
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1" id="logout">
        <div class="comment-tabs">
            <ul class="nav nav-tabs" role="tablist">
               <a class="btn btn-info btn-circle text-uppercase clicked"
                  onClick={this.Change1} href="#Comments" >
                 <h4 class="reviews text-capitalize">Comments</h4></a>
                <a class="btn btn-warning btn-circle text-uppercase"
                onClick={this.Change2}href="#replyOne">
                <h4 class="reviews text-capitalize">Add comment</h4></a>
            </ul>
            <div class="tab-content">

            <Collapse class="collapse" isOpen={this.state.flag}>
            <ul class="media-list">
            {this.state.commentList.slice(this.state.page * 3,(this.state.page + 1) * 3).map(comment=>
              <Comment comment={comment} List={comment.List}/>)
            }

						<nav aria-label="Page navigation" className="page-nav font">
						  <ul className="pagination justify-content-center">

              <button class="btn btn-info btn-circle text-uppercase" onClick={this.handlePrevious}
              >
  <h5 class="reviews text-capitalize">Prev</h5></button>
<button class="btn btn-info btn-circle text-uppercase" onClick={this.handleNext}
>
<h5 class="reviews text-capitalize">Next</h5></button>

						  </ul>
						</nav>
            </ul>
            </Collapse>
            <Collapse class="collapse" isOpen={!this.state.flag}>
                    <form action="#" method="post" class="form-horizontal" id="commentForm" role="form">
                        <div class="form-group">
                            <label for="email" class="col-sm-2 control-label">Comment</label>
                            <div class="col-sm-10">
                              <textarea class="form-control" name="addComment" id="addComment" rows="5"></textarea>
                              <ImageUploader
                   withIcon={true}
                   buttonText='Choose images'
                   onChange={this.onDrop}
                   imgExtension={['.jpg', '.gif', '.png', '.gif']}
                   maxFileSize={5242880}
               />
                            </div>
                        </div>
                        <div class="form-group">
                          <Label for="exampleFile" sm={2}>File</Label>
                          <Col sm={10}>
                            <CustomInput type="file" name="file" id="exampleFile" />
                          </Col>


                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button class="btn btn-info btn-circle text-uppercase" type="submit" id="submitComment">
                             Summit comment</button>
                            </div>
                        </div>
                    </form>
            </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentList;
