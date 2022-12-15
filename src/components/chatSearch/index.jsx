import { useState, useEffect } from 'react';
import CardListComponents from '../cardChatList'
import './style.chatSeach.css';

function ChatSearchComponent({ inputSeachValue, listChat, handleActiveChat, handleClearSearchKey }) {
  const [chatNameFilterList, setChatNameFilterList] = useState([]);

  const handleAction = (dataChat) => {
    handleActiveChat(dataChat);
    handleClearSearchKey();
  };

  useEffect(() => {
    const filterList = listChat.filter((item) => {
      let chatNameLowerCase = item.chatName.toLocaleLowerCase();
      let searchKeyLowerCase = inputSeachValue.toLocaleLowerCase();
      
      if(chatNameLowerCase.includes(searchKeyLowerCase)) {
        return item;
      }
    });

    setChatNameFilterList(filterList);
  }, [inputSeachValue]);

  return (
    <div className={`chatSearchContainer ${inputSeachValue ? 'showChatSearchContainer' : ''}`}>
      <h2 className='titleText'> Chats </h2>
      
      <ul className='listFilterChatsContainer'>
        {chatNameFilterList.length > 0
          ? chatNameFilterList.map((item) => 
            <CardListComponents 
              key={item.chatUID}
              cardData={item}
              handleAction={() => handleAction(item)}
            />)
          : <h3 className='notFoundText'> Not Found </h3>}
      </ul>
    </div>
  );
}

export default ChatSearchComponent;