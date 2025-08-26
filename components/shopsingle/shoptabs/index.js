import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Comment from '../reviewcomment'
import './style.css'

import rvw1 from '../../../images/shop/review/img-1.jpg'
import rvw2 from '../../../images/shop/review/img-2.jpg'
import rvw3 from '../../../images/shop/review/img-3.jpg'



const ShopTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           Reviews (3)
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           
           Descripation
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <div className="review">
                    <div className="reivew-section">
                        <h3>Review For item</h3>
                        <ul>
                            <li>
                                <div className="review-content">
                                    <div className="reviewer-img">
                                        <img src={rvw1} alt=""/>
                                    </div>
                                    <div className="reviewer-say">
                                        <h3>Cobus Besten <span>June 7’2018</span></h3>
                                        <ul className="rating">
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul>
                                        <p>Lorem is simply dummy text of the printing and typesetting industry. Lorem has been the industry's.</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="review-content">
                                            <div className="reviewer-img">
                                                <img src={rvw2} alt=""/>
                                            </div>
                                            <div className="reviewer-say">
                                                <h3>James Koster <span>June 7’2018</span></h3>
                                                <ul className="rating">
                                                    <li><span><i className="fa fa-star"></i></span></li>
                                                    <li><span><i className="fa fa-star"></i></span></li>
                                                    <li><span><i className="fa fa-star"></i></span></li>
                                                    <li><span><i className="fa fa-star"></i></span></li>
                                                    <li><span><i className="fa fa-star"></i></span></li>
                                                </ul>
                                                <p>Lorem is simply dummy text of the printing and typesetting industry. Lorem has been the industry's.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="review-content">
                                    <div className="reviewer-img">
                                        <img src={rvw3} alt=""/>
                                    </div>
                                    <div className="reviewer-say">
                                        <h3>Magnus <span>June 7’2018</span></h3>
                                        <ul className="rating">
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul>
                                        <p>Lorem is simply dummy text of the printing and typesetting industry. Lorem has been the industry's.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Comment/>
                </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </TabPane>
        
      </TabContent>
    </div>
  );
}

export default ShopTabs;