import React from 'react'
// import "./event.css"

// // event emitter method
// // parent 
// const Fun = (data) => {
//     return (
//         <div>
//             <button onClick = {() => {data.testFun('Hello')}} className='test'>Click</button>
//         </div>
//     )
// }

// // child
// const View = () => {
//     const check = (info) =>{
//         console.log('Message : ',info);
        
//     } 
//     return (
//         <div>
//          <Fun testFun = {check}/>      
//         </div>
//     )
// }
// export default View;

// class event emitter
// parent
export class First extends React.Component {
    render() {
        // console.log(this);
        return (
            <div>
               <button onClick = {() => this.props.data('Leowilson')} className = 'test'>Result</button>
            </div>
        )
    }
}

//child 
class Second extends React.Component {
    msg = (value) => {
        console.log('Name',value);
    };
    render() {
        // console.log(this);
        return (
            <div>
                <First data = {this.msg}/>
            </div>
        )
    }
}
export default Second;

