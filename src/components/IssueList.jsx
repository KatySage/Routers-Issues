import React, { Component } from "react";
import Issue from "./Issue";
import Router, { Route, Link } from 'react-router-dom'
class IssueList extends Component {
    state = {
        issueData: [],
    }
    loadData = async () => {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const data = await response.json();
        return data
        
    }
    async componentDidMount() {
        const issueData = await this.loadData();
        console.log(issueData)
        this.setState({
        issueData: issueData,
        });
    }
    render() {
        const { issueData } = this.state;
    
    return (
    <>
        {!!issueData.length ? (
        <>
            <h1>Github Issues List</h1>
            <Route exact path="/">
            <ul>
            {issueData.map((issue) => {
                return (
                    <li key={issue.id}>
                    {issue.title}
                    <Link to={`/issue/${issue.number}`}>View Details</Link>
                    </li>
                );
                })}
            </ul>
            </Route>
            <Route path={`/issue/:issue_number`}>
                <Issue issueData={issueData} />
            </Route>
        </>
        ) : (
        <p>Fetching issues...</p>
        )}
    </>
    );
}
}

export default IssueList;
