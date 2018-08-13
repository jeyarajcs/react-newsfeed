import React, {Component} from 'react'
import NewSingle from './NewSingle'

class News extends Component{

    constructor(props){
        super(props)

        this.state = {
            news : []
        }
        this.renderItems = this.renderItems.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    componentDidMount(){
        console.log("***", this.props.info)
        var url = `https://newsapi.org/v2/${this.props.info}&apiKey=f47d1fb370df43b7b0905f0fe5c8ccd7`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                news : data.articles
            })
        })
        .catch((error) => console.log(error))
    }

    renderItems(){
        return this.state.news.map((item) => (
              <NewSingle key={item.url} item={item} />
        ))
        
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    render(){
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News