import React from 'react';
import { Tabs } from 'antd';
import Sports from "./Sports"
import Music from "./Music"
import Dance from "./Dance"
import Photography from './Photography';
import Fitness from "./Fitness"
import Travel from "./Travel"
import "./Interests.css"


function Interests() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    return (
        <div className="interests">
            <h1>Search by Interest</h1>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Sports" key="1">
                         <Sports/>
                </TabPane>
                <TabPane tab="Music" key="2">
                        <Music/>
                </TabPane>
                <TabPane tab="Dance" key="3">
                         <Dance/>
                </TabPane>
                <TabPane tab="Photography" key="4">
                        <Photography/>
                 </TabPane>
                 <TabPane tab="Fitness" key="5">
                        <Fitness/>
                 </TabPane>
                 <TabPane tab="Travel" key="6">
                       <Travel/>
                 </TabPane>
            </Tabs>
        </div>
    )
}

export default Interests
