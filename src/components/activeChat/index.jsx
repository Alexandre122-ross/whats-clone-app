import { useState } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import { BsChevronLeft, BsSearch, BsThreeDotsVertical, BsEmojiSmile, BsMic } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import MenuComponent from '../menu';
import CardMessageComponent from '../cardMessage';
import ChatSearchMessageComponents from '../chatSearchMessage';
import './style.activeChat.css';

function ActiveChatComponent({ dataChat, handleCloseActiveChat }) {
  const [showSearchMessage, setShowSearchMessage] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList] = useState([
    { senderUID: 'myID', senderMessage: 'Sarah Rebeca', message: 'OLA', messageDate: new Date(), },
    { senderUID: 'ID', senderMessage: 'Alex', message: 'HEHEH', messageDate: new Date(), },
  ]);

  const toggleSearchMessage = () => setShowSearchMessage((state) => !state);
  const handleActiveMenu = (ev) => setMenuAnchorEl(ev.currentTarget);
  const handleCloseMenu = () => setMenuAnchorEl(null);

  return (
    <div className='activeChatContainer'>
      <ChatSearchMessageComponents
        open={showSearchMessage}
        messageList={messageList}
        handleClose={toggleSearchMessage}
      />

      <div className='headerContainer'>
        <IconButton className='iconContainer isHidden' onClick={handleCloseActiveChat}>
          <BsChevronLeft size={20} />
        </IconButton>
        
        <img
          src={dataChat.photoChat ?? 'https://www.w3schools.com/howto/img_avatar2.png'}
          alt='Chat'
          className='imageContainer'
        />
        <h2 className='titleChatText'> {dataChat.chatName} </h2>

        <div className='quickActionsContainer'>
          <IconButton onClick={toggleSearchMessage}>
            <BsSearch size={20} className='icon' />
          </IconButton>
          
          <IconButton onClick={handleActiveMenu}>
            <BsThreeDotsVertical size={20} className='icon' />
          </IconButton>

          <MenuComponent anchorEl={menuAnchorEl} handleClose={handleCloseMenu}>
            <MenuItem className='menuItemContainer'> Profile </MenuItem> 
            <MenuItem className='menuItemContainer'> Delete Chat </MenuItem> 
          </MenuComponent>
        </div>
      </div>

      <div className='messagensContainer'>
        {messageList.map((item, key) => <CardMessageComponent key={key} dataMessage={item} />)}
      </div>

      <div className='inputMessagesContainer'>
        <IconButton>
          <BsEmojiSmile className='icon' />
        </IconButton>

        <input 
          type='text'
          placeholder='Message'
          className='inputDataMessage'
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />
        
        {message !== ''
          ? (
            <IconButton>
              <IoPaperPlaneOutline color='#43C553' className='icon' />
            </IconButton>
          )
          : (
            <IconButton>
              <BsMic className='icon' />
            </IconButton>
          )}
      </div>
    </div>
  );
}

export default ActiveChatComponent;