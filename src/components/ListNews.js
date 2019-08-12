import React from 'react';
import News from './News'
import PropTypes from 'prop-types';

const ListNews = ({news}) => (
    <div className="row">
        {news.map( (data,index) => (
            <News 
                key={index}
                infoNew={data}
            />
        ))}
    </div>
)

ListNews.propTypes = {
    news: PropTypes.array,
}
 
export default ListNews;