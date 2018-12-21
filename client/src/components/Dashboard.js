import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () =>{
  return (
    <div>
     New Dashboard
     <div class="fixed-action-btn">
        <Link to="/surveys/new" class="btn-floating btn-large red">

          <i class="material-icons md-18">add</i>
        </Link>

      </div>
     </div>
    )
}

export default Dashboard;