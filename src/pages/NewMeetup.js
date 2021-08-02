import React from 'react';
import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(formData){
        fetch(
            'https://react-meetups-f69ec-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history.replace('/')
        });
    }
    return (
        <section>
            New Meetup Page
            <NewMeetupForm onAddMeetup ={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage
