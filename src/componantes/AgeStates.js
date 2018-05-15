import React ,{Component} from 'react'
import partyPaper from '../party-popper.jpg'

class AgeStates extends Component
{
    setTimeNew =(date)=>{
        let today = new Date().getTime();
        let anotherDay = new Date(date).getTime();
        let diffrents = Math.abs(today - anotherDay);
       // return `${diffrents}`;
        let days =Math.floor(diffrents/(1000*3600*24));
        let year = Math.floor(days/365);
        days -=year*365;
        let month = Math.floor(days/31);
        days -=month*31;
        return `${year} year`+`${month} month` +`${days} days`;

    }
    render(){
        return(
            <div>
                {this.props.date}
                <h3>{this.setTimeNew(this.props.date)} !</h3>
                <img src={partyPaper} alt='image'/>
            </div>

        )
    }
}
export  default AgeStates;