import React from "react";
import donutImg from '../../images/food.png';



class Content2 extends React.Component {
    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
          <div class="content-box">
				<h4>Recent Transactions</h4>
    				<div class="entry">

    					<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						+$43
    					</div>
    				</div>


    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						+$43
    					</div>
    				</div>


    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						+$43
    					</div>
    				</div>



    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						+$43
    					</div>
    				</div>


    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						+$43
    					</div>
    				</div>



    			</div>
        );
    }
}

export default Content2
