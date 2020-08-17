import React, { useState } from 'react';

import './test3.css';
import { Collapse, Button, CardBody, Card ,Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen2(!isOpen2);

    return (
                      <li class="media" key={props.comment.id}>
                        <a class="pull-left" href="#">
                          <Image class="media-object" roundedCircle src={require('./img/' +props.comment.image+ '.jpg')}
                           style={{height: '8rem',width: '8rem' }}/>
                        </a>
                        <div class="media-body">
                          <div class="well well-lg">
                              <h4 class="media-heading text-uppercase reviews">{props.comment.title }</h4>
                              <ul class="media-date text-uppercase reviews list-inline" inline>
                              2020-09-25
                              </ul>
                              <p class="media-comment">
                                {props.comment.description}
                              </p>
                              <Card style={{background: "#66A5CC", height: '20rem',width: '50rem' }}>

                              <Image  class="media-object img-circle" style={{height: '20rem',width: '50rem' }} src={require('./img/' +props.comment.image+ '.jpg')} alt="profile"/>
</Card>
                              <a class="btn btn-info btn-circle text-uppercase"
                              onClick={toggle2} href="#reply">
                             Reply</a>
                              <a class="btn btn-warning btn-circle text-uppercase"
                              onClick={toggle} href="#replyOne">{props.List.length + " comments"}</a>
                              <Collapse class="collapse" isOpen={isOpen2}>
                              <Card style={{background: "#66A5CC"}}>
                              <form class="form-horizontal" id="commentForm" role="form">
                                  <div class="form-group">
                                      <label for="email" class="col-sm-2 control-label">Comment</label>
                                      <div class="col-sm-10">
                                        <textarea class="form-control" name="addComment" id="addComment" rows="5"></textarea>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <div class="col-sm-offset-2 col-sm-10">
                                          <button class="btn btn-info btn-circle text-uppercase"
                                          >
                                           Summit comment</button>
                                      </div>
                                  </div>
                              </form>
                              </Card>
                            </Collapse>
                              <Collapse class="collapse" isOpen={isOpen}>
                              <Card style={{background: "#66A5CC"}}>
                              <div class="tab-content">
                                  <div class="tab-pane active" id="comments-logout">
                                      <ul class="media-list">
                                    {props.List.map((comment, index) =>
                                    <li class="media" key={comment.id} style={{backgroundColor:"#b3ccff"}}>
                                        <a class="pull-left" href="#">
                                        <Image class="media-object" roundedCircle src={require('./img/' +comment.image+ '.jpg')}
                                         style={{height: '5rem',width: '5rem' }}/>
                                        </a>
                                        <div class="media-body">
                                          <div class="well well-lg">
                                              <h4 class="media-heading text-uppercase reviews">
                                              <span class="glyphicon glyphicon-share-alt"></span>{comment.title }</h4>
                                              <ul class="media-date text-uppercase reviews list-inline">
                                              2020-09-25
                                              </ul>
                                              <p class="media-comment">
                                              {comment.description}
                                              </p>
                                              <hr class="new4"/>

                                          </div>
                                        </div>
                                    </li>
                                    )
                                  }
                                  </ul>
                                  </div>
                                  </div>

                                  </Card>

                              </Collapse>
                              <hr class="new4"/>

                          </div>
                        </div>


                      </li>

    );
  }

  export default Example;
