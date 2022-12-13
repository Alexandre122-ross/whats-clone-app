import { useState } from 'react';
import { BsThreeDotsVertical, BsSearch, } from 'react-icons/bs';
import CardChatListComponents from '../../components/cardChatList';
import ActiveChatComponent from '../../components/activeChat';
import WelcomeMessageComponent from '../../components/welcomeMessage';
import './style.home.css';

function HomeScreen() {
  const [chatList] = useState([
    { chatUID: 'Lucas01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Lucas Samuel', lastMessage: 'HEHEH', lastMessageTime: new Date()  },
    { chatUID: 'Sarah01293', chatPhoto: 'https://www.w3schools.com/howto/img_avatar2.png', chatName: 'Sarah Rebeca', lastMessage: 'OHH', lastMessageTime: new Date()  },
  ]);
  const [activeChat, setActiveChat] = useState(null);

  const handleActiveChat = (chatData) => setActiveChat(chatData);

  return (
    <div className='homeContainer'>

      <div className='homeChatContainer'>
        <div className='homeChatCol'>
          <div className='headerContainer'>
            <div className='headerActionContainer'> 
              <img 
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='User' 
                className='imageContainer' 
              />

              <BsThreeDotsVertical className='icon' />
            </div>
            <div className='headerSearchContainer'> 
              <div className='inputSearchContainer'>
                <BsSearch className='icon' />
                <input 
                  type='search'
                  className='input'
                  placeholder='Search for a chat...'
                />
              </div>
            </div>
          </div>

          <ul className='chatListContainer'>
            {chatList.length > 0
              ? chatList.map((item) => <CardChatListComponents key={item.chatUID} cardData={item} handleAction={handleActiveChat} />)
              : <h3> Nenhum chat foi iniciado </h3>}
          </ul>

        </div>

        <div className='homeChatCol'>
          {activeChat && <ActiveChatComponent dataChat={activeChat} />}
          {!activeChat && <WelcomeMessageComponent />}
        </div>
      </div>    

      <div className='homeBorderContainer' />
    </div>
  );
}

export default HomeScreen;