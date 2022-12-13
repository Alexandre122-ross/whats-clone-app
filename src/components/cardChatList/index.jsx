import './style.cardChat.css';

function CardChatListComponents({ cardData, handleAction }) {
  let date = cardData.lastMessageTime.toLocaleTimeString('en-US', { hour12: false });

  return (
    <li className='chatItemContaier' onClick={() => handleAction(cardData)}>
      <img 
        src={cardData.chatPhone ?? 'https://www.w3schools.com/howto/img_avatar2.png'}
        alt='Chat'
        className='chatImage'
      />

      <div className='chatInfoContainer'>
        <h3 className='titleChatText'> {cardData.chatName} </h3>
        <p className='lastMsgText'> {cardData.lastMessage} </p>
        <span className='timeText'> {date.slice(0, 5)} </span>
      </div>
    </li>
  );
}

export default CardChatListComponents;