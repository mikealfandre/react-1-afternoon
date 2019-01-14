import React, {Component} from 'react'

class FilterObject extends Component{ //How do we create new objects and pull in arguments dynamically?
    constructor(){ // <-- Should this contructor require perameters? What is a constructor exactly? What is this constructing?
    super()
        this.state = {
            students: [
                {
                    name: 'Rasmus',
                    age: 16,
                    hair: 'red'
                },
                {
                    name: 'Sally',
                    age: 23,
                    hair: 'blonde'
                },
                {
                    name: 'Petty',
                    eyes: 'brown'
                }
            ],
            userInput: '',
            filteredStudents: []

        }
    }

    handleUserInput(e){
        this.setState({
            userInput: e //dont we need to clear out the input? It seems to be doing it automatically
            // (^ Why don't we create a new var for 'userInput' like I did below for 'students & filteredStudents'? Dont we need *everything* to be immutable?)
            // dont add things to state here. Add them up top in the contsructor function
            // Every time we type in a character it will add to the (e) of target.value
        })
    }

    filterStudents(userInputProp){
       let students = this.state.students //Why do we make the new variable name the exact name as the object property? Too confusing
       let filteredStudents = []

       for (let i=0; i<students.length; i++){
           if (students[i].hasOwnProperty(userInputProp)){
               filteredStudents.push(students[i])
           }
       }

       this.setState({
            filteredStudents: filteredStudents,
        })
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.students, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)}></input>
                                                       {/* ^ The arrow function has something to do with 'bind'.. */}
                <button className="confirmationButton" onClick={() => this.filterStudents(this.state.userInput)}>Filter</button>
                                                             {/* ^ why is there no argument here. What does this space represent exactly? */}
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredStudents, null, 10) }</span>


            </div>

        )
    }
}
export default FilterObject