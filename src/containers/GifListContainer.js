import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifArray: []
    }

    searchFormSubmit = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(data => this.setState({gifArray: [data.data[0], data.data[1], data.data[2]]}))
    }
    render(){
        console.log(this.state.gifArray)
        return(
            <div>
                <GifSearch submitHandler={this.searchFormSubmit}/>
                <GifList gifList={this.state.gifArray}/>
            </div>
            )
    }
}

export default GifListContainer