import React from "react";
import moment from "moment";
import { Link } from 'react-router-dom'

const DisplayPost = ({codes}) => {
    if (!codes.length) {
        return <h3>No Codes Yet</h3>
    }
    return (
        <div>
            {codes && codes.map(code => (
                <div key={code._id} className="card mb-3">
                    <Link className="card-header btn btn-block btn-squared btn-light text-light" to={`/codes/${code._id}`}>
							<h3>[{code.programmingLanguage}] {code.title} </h3>
					</Link>            
                    <div className="card-body">
                        <p>{code.content}</p>
                    </div>
                    <p className="card-header">
                        {code.username} posted on {moment(parseInt(code.createdAt)).format('MMMM Do YYYY, h:mm:ss a')}
                    </p>
                </div>                
            ))}
        </div>
    )
}

export default DisplayPost;