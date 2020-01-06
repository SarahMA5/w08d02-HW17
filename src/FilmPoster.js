
import React, {Component} from 'react';

class FilmPoster extends Component{

    render(){
        let posterURl="https://image.tmdb.org/t/p/w780"+this.props.poster;

        return(         
            <img src={posterURl} alt="" />
        )
    }

}

export default FilmPoster;