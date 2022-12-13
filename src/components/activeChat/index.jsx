import { useState } from 'react';
import { BsSearch, BsThreeDotsVertical, BsEmojiSmile, BsMic } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import CardMessageComponent from '../cardMessage';
import './style.activeChat.css';

function ActiveChatComponent({ dataChat }) {
  const [messageList] = useState([
    { senderUID: 'myID', message: 'OLA', messageDate: new Date(), },
    { senderUID: 'ID', message: 'HEHEH', messageDate: new Date(), },
  ]);
  const [message, setMessage] = useState('');

  return (
    <div className='activeChatContainer'>
      <div className='headerContainer'>
        <img
          src={dataChat.photoChat ?? 'https://www.w3schools.com/howto/img_avatar2.png'}
          alt='Chat'
          className='imageContainer'
        />
        <h2 className='titleChatText'> {dataChat.chatName} </h2>

        <div className='quickActionsContainer'>
          <BsSearch className='icon' />
          <BsThreeDotsVertical className='icon' />
        </div>
      </div>

      <div className='messagensContainer'>
        {messageList.map((item, key) => <CardMessageComponent key={key} dataMessage={item} />)}
      </div>

      <div className='inputMessagesContainer'>
        <BsEmojiSmile className='icon' />
        <input 
          type='text'
          placeholder='Message'
          className='inputDataMessage'
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />
        {message !== '' 
          ? <IoPaperPlaneOutline color='#43C553' className='icon' />
          : <BsMic className='icon' />}
      </div>
    </div>
  );
}

export default ActiveChatComponent;