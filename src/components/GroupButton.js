import React, {Component} from 'react'




class GroupButton extends Component {
    render(){
        return(
            <div>  
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-3 rounded-l">
                        previous
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        next
                    </button>
            </div> 
            )
    } 
  }

export default GroupButton