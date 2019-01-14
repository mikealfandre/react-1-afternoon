import React, {Component} from 'react'

class EvenAndOdd extends Component{

    constructor(e){
            super()
            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ''

            }
        }

        handleChange(e){
            this.setState({
                userInput: e
            })    
        }

        assignEvenAndOdds(userInput){
            let evenArray = []
            let oddArray = []

            // evenArray = userInput.filter((index, number, array) => {
            //     return parseInt(userInput % 2 === 0)
            // })

            for (let i = 0; i < userInput.length; i++){
                if (userInput[i] % 2 === 0){
                    evenArray.push(parseInt(userInput[i], 10))
                }else(
                    oddArray.push(parseInt(userInput[i],10))
                )
            }

            this.setState({
                evenArray: evenArray,
                oddArray: oddArray
            })

        }
    
        render(){

        
        
        return (
            <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine'></input>
            <button className='confirmationButton' onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Submit</button>
            
            {/* ^ return can only output 1 JSX item, that's why you need to wrap everything in 1 Div */}
            <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
            <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>

        )
    }



}
export default EvenAndOdd