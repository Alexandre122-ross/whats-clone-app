import { useState } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import { BsPlusLg, BsThreeDotsVertical, BsSearch } from 'react-icons/bs';
import MenuComponents from '../../components/menu';
import NewChatsComponent from '../../components/newChats';
import ChatSearchComponent from '../../components/chatSearch';
import CardChatListComponents from '../../components/cardChatList';
import ActiveChatComponent from '../../components/activeChat';
import WelcomeMessageComponent from '../../components/welcomeMessage';
import './style.home.css';

function HomeScreen() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);
  const [chatList] = useState([
    { chatUID: 'Sarah01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Sarah Rebeca', lastMessage: 'OHH', lastMessageTime: new Date() },
    { chatUID: 'lucas01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Lucas Samuel', lastMessage: 'OHH', lastMessageTime: new Date() },
    { chatUID: 'Gabriel01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Gabriel Alexandre', lastMessage: 'OHH', lastMessageTime: new Date() },
    { chatUID: 'mateus01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Mateus', lastMessage: 'OHH', lastMessageTime: new Date() },
    { chatUID: 'Luiz01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Luiz Said', lastMessage: 'OHH', lastMessageTime: new Date() },
  ]);
  const [inputSeachValue, setInputSeachValue] = useState('');
  const [activeChat, setActiveChat] = useState(null);

  // Actions  
  const handleActiveMenu = (ev) => setMenuAnchorEl(ev.currentTarget);
  const handleCloseMenu = () => setMenuAnchorEl(null);
  const toggleNewChat = () => setShowNewChat((state) => !state);
  const handleSetSearchKey = (ev) => setInputSeachValue(ev.target.value);
  const handleClearSearchKey = () => setInputSeachValue('');
  const handleActiveChat = (chatData) => setActiveChat(chatData);
  const handleCloseActiveChat = () => setActiveChat(null);

  return (
    <div className='homeContainer'>

      <div className='homeChatContainer'>
        <div className={`homeChatCol ${activeChat ? 'hiddenCol' : ''}`}>
          <NewChatsComponent open={showNewChat} handleClose={toggleNewChat} />

          <div className='headerContainer'>
            <div className='headerActionContainer'> 
              <img 
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='User' 
                className='imageContainer' 
              />

              <div className='actionIconsContainer'>
                <IconButton onClick={toggleNewChat}>
                  <BsPlusLg size={20} className='icon' />
                </IconButton>
                <IconButton onClick={handleActiveMenu}>
                  <BsThreeDotsVertical size={20} className='icon' />
                </IconButton>
              </div>

              <MenuComponents anchorEl={menuAnchorEl} handleClose={handleCloseMenu}>
                <MenuItem className='menuItemContainer'> Profile </MenuItem>
                <MenuItem className='menuItemContainer'> Settings </MenuItem>
                <MenuItem className='menuItemContainer'> Desconect </MenuItem>
              </MenuComponents>
            </div>
            <div className='headerSearchContainer'> 
              <div className='inputSearchContainer'>
                <BsSearch className='icon' />
                <input 
                  type='search'
                  className='input'
                  placeholder='Search...'
                  value={inputSeachValue}
                  onChange={handleSetSearchKey}
                />
              </div>
            </div>
          </div>

          <ul className='chatListContainer'>
            <ChatSearchComponent 
              inputSeachValue={inputSeachValue} 
              listChat={chatList} 
              handleActiveChat={handleActiveChat}
              handleClearSearchKey={handleClearSearchKey}
            />

            {chatList.length > 0
              ? chatList.map((item) =>
                <CardChatListComponents
                  key={item.chatUID}
                  cardData={item}
                  activeChat={false}
                  handleAction={handleActiveChat}
                />
              )
              : <h3> Nenhum chat foi iniciado </h3>}
          </ul>
        </div>

        <div className={`homeChatCol ${activeChat ? 'hiddenCol' : ''}`}>
          {activeChat && <ActiveChatComponent dataChat={activeChat} handleCloseActiveChat={handleCloseActiveChat} />}
          {!activeChat && <WelcomeMessageComponent />}
        </div>
      </div>    

      <div className='homeBorderContainer' />
    </div>
  );
}

export default HomeScreen;