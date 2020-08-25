import React, { Component} from "react";
import { FormGroup, Label, Input, FormText, Col, CustomInput,Collapse } from 'reactstrap';
import './css/comment.css';
import Comment from "./comment";
import ImageUploader from 'react-images-upload';

class CommentList extends Component {

    constructor(props) {
        super()

        this.state = {
            list: [],
            favorites: [],
            flag: true,
            commentList:[
                {id:1,
                 image:'4',
                 imgPost:'4',
                 userName :'userName1',
                 date:3,
                 description:'description2, i want to know what the maximum length of description' ,
                 List:[
                     {id:11,
                      image:'4',
                      userName:'userName11',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:12,
                      image:'3',
                      userName:'userName112',
                      date:4,
                      description:'description2'
                     },
                     {id:13,
                      image:'5',
                      userName:'userName13',
                      date:2,
                      description:'description3'
                     }]         },
                {id:2,
                 image:'3',
                 imgPost:'4',
                 userName:'userName2',
                 date:4,
                 description:'description2',
                 List:[
                     {id:14,
                      image:'4',
                      userName:'userName14',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:15,
                      image:'3',
                      userName:'userName15',
                      date:4,
                      description:'description2'
                     },
                     {id:16,
                      image:'5',
                      userName:'userName16',
                      date:2,
                      description:'description3'
                     }]
                },
                {id:3,
                 image:'5',
                 imgPost:'4',
                 userName:'userName3',
                 date:2,
                 description:'description3',
                 List:[
                     {id:17,
                      image:'4',
                      userName:'userName1',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:18,
                      image:'3',
                      userName:'userName2',
                      date:4,
                      description:'description2'
                     },
                     {id:19,
                      image:'5',
                      userName:'userName3',
                      date:2,
                      description:'description3'
                     }]
                },
                {id:4,
                 image:'6',
                 imgPost:'4',
                 userName:'Titl4',
                 date:2,
                 description:'description4',
                 List:[
                     {id:20,
                      image:'4',
                      userName:'userName1',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:21,
                      image:'3',
                      userName:'userName2',
                      date:4,
                      description:'description2'
                     },
                     {id:22,
                      image:'5',
                      userName:'userName3',
                      date:2,
                      description:'description3'
                     }]
                },
                {id:5,
                 image:'3',
                 imgPost:'4',
                 userName:'userName5',
                 date:4,
                 description:'description5',
                 List:[
                     {id:23,
                      image:'4',
                      userName:'userName1',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:24,
                      image:'3',
                      userName:'userName2',
                      date:4,
                      description:'description2'
                     },
                     {id:25,
                      image:'5',
                      userName:'userName3',
                      date:2,
                      description:'description3'
                     }]
                },
                {id:6,
                 image:'4',
                 imgPost:'4',
                 userName:'userName6',
                 date:2,
                 description:'description6',
                 List:[
                     {id:26,
                      image:'4',
                      userName:'userName1',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:27,
                      image:'3',
                      userName:'userName2',
                      date:4,
                      description:'description2'
                     },
                     {id:28,
                      image:'5',
                      userName:'userName3',
                      date:2,
                      description:'description3'
                     }]
                },
                {id:7,
                 image:'5',
                 imgPost:'4',
                 userName:'userName7',
                 date:2,
                 description:'description7',
                 List:[
                     {id:29,
                      image:'4',
                      userName:'userName1',
                      date:3,
                      description:'description2, i want to know what the maximum length of description'          },
                     {id:30,
                      image:'3',
                      userName:'userName2',
                      date:4,
                      description:'description2'
                     },
                     {id:31,
                      image:'5',
                      userName:'userName3',
                      date:2,
                      description:'description3'
                     }]
                },{id:8,
                   image:'4',
                   imgPost:'4',
                   userName:'userName8',
                   date:3,
                   description:'description8',
                   List:[
                       {id:32,
                        image:'4',
                        userName:'userName1',
                        date:3,
                        description:'description2, i want to know what the maximum length of description'
                       },
                       {id:33,
                        image:'3',
                        userName:'userName2',
                        date:4,
                        description:'description2'
                       },
                       {id:34,
                        image:'5',
                        userName:'userName3',
                        date:2,
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
        this.addFavorite = this.addFavorite.bind(this);
    }
    addFavorite = favorite => {
        const { favorites } = this.state;

        if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
            this.setState({
                commentList: [...this.state.commentList, favorite]
            });
        }
    };
onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
Change1=()=>{
    this.setState({
        flag : true});
}

Change2=()=>{
    this.setState({
        flag : false});
}
handlePrevious=()=>{
    if(this.state.page > 0){
        this.setState({page : this.state.page -1})
    }
}
handleNext=()=>{
    if(this.state.commentList.length - 3 * (this.state.page + 1) > 0){
        this.setState({page : this.state.page + 1})
    }
}
render() {
    const user =
          {id:66,
           image:'5',
           userName:'userName66',
           date:2,
           description:'description66'
          }
    return (
        <div class="row justify-content-center">
            <div class="col-sm-10 col-sm-offset-1" id="logout">
                <div class="comment-tabs">
                    <ul class="nav nav-tabs" role="tablist">
                        <a class="btn btn-info btn-circle text-uppercase clicked"
                            style={{background: "#12A898"}}
                            onClick={this.Change1} href="#Comments" >
                            <h4 class="reviews text-capitalize">Comments</h4></a>
                        <a class="btn btn-warning btn-circle text-uppercase"
                            onClick={this.Change2}href="#replyOne">
                            <h4 class="reviews text-capitalize">Add comment</h4></a>
                    </ul>
                    <div class="tab-content"  style={{background: "#12A898"}}>

                        <Collapse class="collapse" isOpen={this.state.flag}>
                            <ul class="media-list">
                                {this.state.commentList.slice(this.state.page * 3,(this.state.page + 1) * 3).map(comment=>
                                                                                                                 <Comment comment={comment} List={comment.List}/>
                                                                                                                )
                                                                                                                 }

                                <nav aria-label="Page navigation" className="page-nav font" style={{ padding: '1rem'}}>
                                    <ul className="pagination justify-content-center">

                                        <button class="btn btn-info btn-circle text-uppercase"
                                            style={{background: "#eee"}}
                                            onClick={this.handlePrevious}
                                            >
                                            <h5 class="reviews text-capitalize">Prev</h5></button>
                                        <button class="btn btn-info btn-circle text-uppercase"
                                            style={{background: "#eee"}}
                                            onClick={this.handleNext}
                                            >
                                            <h5 class="reviews text-capitalize">Next</h5></button>

                                    </ul>
                                </nav>
                            </ul>
                        </Collapse>
                        <Collapse class="collapse" isOpen={!this.state.flag}>
                            <form class="form-horizontal" id="commentForm" role="form">
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
                                            background = {'#eee'}
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
                                        <button class="btn btn-circle text-uppercase"
                                            style={{background: "#eee"}}
                                            >
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
