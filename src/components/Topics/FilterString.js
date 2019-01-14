import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['hello', 'my', 'name', 'is', 'mike', 'this', 'is', 'fun'],
            userInput: '',
            filteredArray: []


        }
    }

    handleChange(e){
        this.setState({
            userInput: e
        })
    }

    filterStrings(userInputStr){
        let nameArray = this.state.unFilteredArray
        let filteredNameArray = []
        for (let i = 0; i <nameArray.length; i++){
            if (nameArray[i].includes(userInputStr)){
                filteredNameArray.push(nameArray[i])
            }
        }

        this.setState({
            filteredArray: filteredNameArray,
            userInput: '' //this is not reseting the input... Also when I click submit again it returns the whole unfiltered array...?
        })
        
    }

    render(){

        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered Array: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterStrings(this.state.userInput)}>Submit</button>
                <span className="resultsBox filterStringRB">Filtered Array: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>      
        )
    }
}

export default FilterString