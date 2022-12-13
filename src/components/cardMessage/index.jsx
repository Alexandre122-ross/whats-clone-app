import './style.cardMessage.css';

function CardMessageComponent({ dataMessage }) {
  const date = dataMessage.messageDate.toLocaleTimeString('en-US', { hour12: false });
  let myId = 'myID';

  return (
    <div className={`cardMessageContainer ${dataMessage.senderUID === myId ? 'cardMyMessage' : ''}`}>
      <h4 className='msgText'> {dataMessage.message} </h4>
      <span className='timeMsgText'> {date.slice(0, 5)} </span>
    </div>
  );
}

export default CardMessageComponent;