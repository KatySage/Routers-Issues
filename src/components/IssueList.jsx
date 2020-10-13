import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import { Route, Link } from 'react-router-dom'

const IssueList = props =>{
    const [issueData, setIssues] = useState([]);
    useEffect(()=>{
        (async function(){
            const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
            const data = await response.json();
            setIssues(data)
        })();
    }, [setIssues])
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
export default IssueList;
