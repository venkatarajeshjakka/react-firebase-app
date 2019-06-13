import React , { Component } from 'react'
import Notifications from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component
{
    render()
    {
        const { projects,authState,notifications } = this.props;

        
        if(!authState.uid) return <Redirect to='/signin'/>
        
        console.log('logged in userId', authState.uid);
        console.log(projects);
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>
{ 
    console.log(state.firestore);
    
    return{
        authState: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.authState.uid) return []
        return [
            {collection: 'projects',
            where: [
                ['authorId', '==', props.authState.uid]
            ]
        },
        {
            collection: 'notifications', limit: 3, orderBy: ['time','desc']
            }
        ]
    } )
)(Dashboard);



