import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';
import React from 'react'
import Card from '../ui/Card';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit (event){
        event.preventDefault();
        const enteredTitle =titleInputRef.current.value;
        const enteredImage =imageInputRef.current.value;
        const enteredAddress =addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const formData ={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription 
        };
       props.onAddMeetup(formData);
    }
    return (
        <Card>
            <form className= {classes.form} onSubmit ={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor = 'title'>Meetup Title</label>
                    <input type='text' required id='title' ref = {titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor = 'image'>Meetup Image</label>
                    <input type='url' required id='image' ref = {imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor = 'address'>Address</label>
                    <input type='text' required id='address' ref = {addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor = 'description'>Description</label>
                    <input type='text' required id='desc' ref = {descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
