export const createProject = (project)=>{
    return (dispatch,getState, {getFirebase,getFirestore}) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName : profile.firstName,
            authorId : authorId,
            authorLastName : profile.lastName,
            createdAt : new Date()

        }).then(()=>{

            dispatch({type:'ADD_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'ADD_PROJECT_ERROR',err});
            }
        );



        // async code


    }


}

export const getProjectDetail = (project_id)=>{

}