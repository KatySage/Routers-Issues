import React from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

const Issue = (props) => {
  const { issueData } = props;
  const { issue_number } = useParams();
  const issue = issueData.find((issue) => {
    return issue.number === Number(issue_number) ? issue : null;
  })

  return (
  <>
    <h2>{issue.title}</h2>
    <p>
      <a href={issue.url}>{issue.url}</a>
    </p>
    <ReactMarkdown source={issue.body} escapeHtml={false}></ReactMarkdown>
  </>
);
  }
export default Issue;