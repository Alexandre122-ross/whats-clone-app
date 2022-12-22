import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { BsXLg, BsSearch } from 'react-icons/bs';
import './style.chatSearchMessage.css';

function ChatSearchMessageComponents({ open = false, messageList = [], handleClose }) {
  const [inputSeachValue, setInputSeachValue] = useState('');
  const [searchList, setSeachList] = useState([]);

  useEffect(() => {
    const filterList = messageList.filter((item) => {
      let messageLowerCase = item.message.toLocaleLowerCase();
      let searchKeyLowerCase = inputSeachValue.toLocaleLowerCase();

      if(messageLowerCase.includes(searchKeyLowerCase) && inputSeachValue !== '') {
        return item;
      };
    });

    return setSeachList(filterList);
  }, [inputSeachValue, messageList]);

  return (
    <div className={`searchMessageContainer ${open ? 'showSearchMessageContainer' : ''}`}>
      <div className='headerContainer'>
        <div className='headerActionContainer'>
          <IconButton onClick={handleClose}>
            <BsXLg className='icon' />
          </IconButton>

          <h2 className='headerTitleText'> Search Message </h2>
        </div>
        <div className='headerSearchContainer'>
          <div className='inputSearchContainer'>
            <BsSearch className='icon' />
            <input
              type='search'
              placeholder='Search...'
              className='input'
              value={inputSeachValue}
              onChange={(ev) => setInputSeachValue(ev.target.value)}
            />
          </div>
        </div>
      </div>

      <ul className='listFilterMessageContainer'>
        {searchList.length > 0 
          ? searchList.map((item, key) => <CardSearchItemComponent key={key} searchData={item} />)
          : inputSeachValue !== '' 
              ? <h3 className='warningText'> Not Found </h3> 
              : <h3 className='warningText'> Search for a message </h3>}
      </ul>
    </div>
  );
}

function CardSearchItemComponent({ searchData }) {
  return (
    <li className='searchCardItemContainer'>
      <h2 className='senderText'> {searchData.messageDate.toLocaleDateString()} </h2>
      <h3 className='contentMessageText'> {searchData.senderMessage}: {searchData.message} </h3>
    </li>
  );
}

export default ChatSearchMessageComponents;