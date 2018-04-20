'use strict';

const MessageHistory = ({list}) => {

  if (!(list instanceof Array) || !list.length) {
    return null;
  }

  const createMessage = (message) => {
    let CurrentMessage;
    let type = message.type;

    //мб есть лучший способ проверки, чем этот....

    if (type === 'response') {
      CurrentMessage = Response;
    }

    if (type === 'typing') {
      CurrentMessage = Typing;
    }

    if (type === 'message' || !CurrentMessage) {
      CurrentMessage = Message;
    }

    return (
      <CurrentMessage
        from={message.from}
        message={message}
        key={message.id}
      />
    )
  };

  list = list.map(createMessage);

  return (
    <ul>
      {list}
    </ul>
  )
};

