import { useState } from 'react';
import { IconButton } from '@mui/material';
import { BsXLg } from 'react-icons/bs';
import CardChatListComponents from '../cardChatList';
import './style.newChats.css';

function NewChatsComponent({ open, handleClose }) {
  const [newChatsList] = useState([
    { chatUID: 'Lucas01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Lucas Samuel'  },
    { chatUID: 'lucas01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Lucas Samuel' },
    { chatUID: 'Gabriel01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Gabriel Alexandre' },
    { chatUID: 'mateus01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Mateus' },
    { chatUID: 'Luiz01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Luiz Said' },
  ]);

  return (
    <div className={`newChatsContainer ${open ? 'newChatsContainerShow' : ''}`}>
      <div className='headerNewChatsContainer'>
        <IconButton className='iconContainer' onClick={handleClose}>
          <BsXLg className='icon' />
        </IconButton>

        <h2 className='headerTitleText'> New Chats </h2>
      </div>

      <ul className='listNewsChatsContainer'>
        {newChatsList.map((item) => 
          <CardChatListComponents 
            key={item.chatUID}
            cardData={item} 
            handleAction={(chatData) => console.log(chatData)} 
          />)}
      </ul>
    </div>
  );
}

export default NewChatsComponent;