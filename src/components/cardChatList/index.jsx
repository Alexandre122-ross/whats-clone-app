import { ButtonBase } from '@mui/material';
import './style.cardChat.css';

function CardChatListComponents({ cardData, activeChat,handleAction }) {
  let date = cardData.lastMessageTime && cardData.lastMessageTime.toLocaleTimeString('en-US', { hour12: false });

  return (
    <li className={`chatItemContaier ${activeChat ? 'activeChatItem' : ''}`}>
      <ButtonBase className='buttonItemContainer' onClick={() => handleAction(cardData)}>
        <img 
          src={cardData.chatPhone ?? 'https://www.w3schools.com/howto/img_avatar2.png'}
          alt='Chat'
          className='chatImage'
        />

        <div className={`chatInfoContainer ${!cardData.lastMessage && 'newChatInfoContainer'}`}>
          <h3 className='titleChatText'> {cardData.chatName} </h3>
          {cardData.lastMessage && (
            <>
              <p className='lastMsgText'> {cardData.lastMessage} </p>
              <span className='timeText'> {date.slice(0, 5)} </span>
            </>
          )}
        </div>
      </ButtonBase>
    </li>
  );
}

export default CardChatListComponents;