import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) =>
 {
 const { project,authState } = props;
 
        if(!authState.uid) return <Redirect to='/signin'/>
    if(project)
    {
     return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                    {project.title}
                    </span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 greay-text">
                    <div>
                       Posted by {project.authorFirstName} {project.authorLastName}
                    </div>
                    <div>
                    {moment(project.createdAt.toDate()).calendar()}
                    </div>
                </div>
            </div>
        </div>
     )
 }else{
    return (
        <div className="center">
            <p>Loading Project</p>
        </div>
        )
 }
    
}
const mapStateToProps = (state, ownProps) =>
{
    const id = ownProps.match.params.id;
    const projects =state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    console.log(project);
    return{
            project: project,
            authState: state.firebase.auth
        }
}
export default compose(connect(mapStateToProps), firestoreConnect([
    {
        collection: 'projects'
    }
]))(ProjectDetails)