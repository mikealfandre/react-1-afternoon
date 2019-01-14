import React, {Component} from 'react'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import EvenAndOdd from '../Topics/EvenAndOdd';


class TopicBrowser extends Component{
    render(){
        return(
        <div>
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <EvenAndOdd />



        </div>
        )
    }

    
}

export default TopicBrowser