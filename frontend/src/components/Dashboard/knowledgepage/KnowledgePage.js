import React from 'react';
import Knowledge from '../knowledge/Knowledge';
import './knowledgepage.css';
import Dashsearch from '../dashSearch/Dashsearch';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
    
function KnowledgePage(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <div className='knowledgegpage'>
                    <Dashsearch />
                    <div className='knowledgetable'>
                        <Knowledge />
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default KnowledgePage;