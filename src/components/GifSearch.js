import React from 'react'

class GifSearch extends React.Component{

    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.query)
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label>Enter a Search Term:</label><br/>
                <input type="text" name="query" value={this.state.query} onChange={this.handleChange}/>
                <button>Find Gifs</button>
            </form>
            )
    }
}

export default GifSearch