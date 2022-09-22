import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [sortBy, setSortBy] = useState('upvotes');
    const sortFn = (a, b) => {
        if (a[sortBy] > b[sortBy]){
            return -1;
        }
        if (a[sortBy] < b[sortBy]){
            return 1;
        }
        return 0;
    }

    const [articleList, setArticleList] = useState(articles.sort(sortFn));
    const sortByUpvoted = () => {
        setSortBy('upvotes')
        setArticleList(articleList.sort(sortFn))
    } 

    const sortByRecent = () => {
        setSortBy('date')
        setArticleList(articleList.sort(sortFn))
    } 


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortByRecent}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
