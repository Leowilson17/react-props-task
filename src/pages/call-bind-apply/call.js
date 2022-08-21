import React from 'react'
const Call = () => {
    const testObj = {
        name : 'Jeya'
    }
    
    function getData(data){
        return this.name + data;
    }
    console.log(getData.call(testObj,'Sankar'));
    console.log(getData.apply(testObj,['Sankar']));
    var store = getData.bind(testObj,'Sri')
    console.log(store());
    return (
        <div>
            
        </div>
    )
}

export default Call


