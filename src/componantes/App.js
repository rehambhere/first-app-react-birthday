
import React ,{Component} from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
import './App.css'
import AgeStates from "./AgeStates";

class App extends Component
{
    constructor(){
        super();
        this.state = {
            newDate :'',
            birthday:'1992-10-22',
            showState:false
        }
    }
    changeBirthday =()=>{
        console.log(this.state);
        this.setState({
            birthday:this.state.newDate,
            showState:true
        })
    }

   render(){
       return(
           <div className='App'>
               <h2>welcome my first App<br/>
                   How many days is left for your birthday?
               </h2>
               <Form inline className='cen'>
               <FormControl type='date' onChange ={event=>this.setState({
                   newDate:event.target.value
                })}>
               </FormControl>
                   {' '}
                   <Button onClick={()=>this.changeBirthday()}>Click</Button>
               </Form>
               {
                   this.state.showState ?
                   <AgeStates date={this.state.birthday}/>
                   :null
               }

           </div>
       )
   }
}


export default App;
