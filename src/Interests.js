import React from 'react';
import { Tabs } from 'antd';

function Interests() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    return (
        <div className="interests">
            <Tabs onChange={callback} type="card">
                <TabPane tab="Tab 1" key="1">
                         Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                         Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Tab 4" key="4">
                        Content of Tab Pane 4
                 </TabPane>
            </Tabs>
        </div>
    )
}

export default Interests
