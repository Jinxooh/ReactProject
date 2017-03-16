import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contactData: [{
        name: 'Argone',
        phone: '010-0000-0001'
      },
      {
        name: 'Berry',
        phone: '010-0000-0002'
      },
      {
        name: 'Clare',
        phone: '010-0000-0003'
      },
      {
        name: 'Dave',
        phone: '010-0000-0004'
      },
      {
        name: 'Elly',
        phone: '010-0000-0005'
      }]
    };
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>)
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
