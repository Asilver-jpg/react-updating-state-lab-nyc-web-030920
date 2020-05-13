// Code DigitalClicker Component Here
import React from 'react';
export default class DigitalClicker extends React.Component{

    state= {
        timesClicked :0
    }
render(){
    return(<button onClick= {this.incrementCounter} label= {this.state.timesClicked}>{this.state.timesClicked}</button>
    )
}

incrementCounter= ()=>{
    this.setState(previousState=> {return{timesClicked: previousState.timesClicked +1
    }
})
}
}