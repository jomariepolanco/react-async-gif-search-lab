import React from 'react'

function GifList(props){

    const renderGifs = () => {
        return props.gifList.map(gif => <li><img alt={gif.title} src={gif.images.original.url}/></li>)
    }

    return (
        <ul>
            {renderGifs()}
        </ul>
        )
}

export default GifList