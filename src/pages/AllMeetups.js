import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const Dummy_Data =[
    
        {
    id: 'm1',
    title: 'Johannesburg',
    image:
       'https://upload.wikimedia.org/wikipedia/commons/7/7e/Johannesburg_view_topofCC_03.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'Bustling Johannesburg metro, city full of energy and vibes. Logated in Gauteng, it is the biggest city in South Africa and it is the commercial capital',
  
    },
        {
    id: 'm2',
    title: 'Pretoria',
    image:
       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pr%C3%A9toria-skyline.jpg/1280px-Pr%C3%A9toria-skyline.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'Bustling Pretoria metro, city full of energy and vibes. Located in Gauteng, it is the  political capital',
  
    },
        {
    id: 'm3',
    title: 'Durban',
    image:
       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Durban_beach.jpg/1920px-Durban_beach.jpg',
    address: 'Meetupstreet 5, 12345 Durban City', 
    description:
      'Scenic Durban coast metro, city full of energy and vibes. Logated in Gauteng, it is the biggest city in South Africa and it is the commercial capital',
  
    },
];

function AllMeetupsPage() {
    return <section>
        <h2>All the meetups</h2>
        <MeetupList meetups= {Dummy_Data}/>
    </section>
}

export default AllMeetupsPage
