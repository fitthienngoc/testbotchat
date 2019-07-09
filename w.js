var request = require("request");

sendMessage(2248424415276865, "Nội dung tin nhắn" ); 
       


// Gửi thông tin tới REST API để trả lời
function sendMessage(senderId, message) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: "EAADnYEgNbWEBAEbbZCKpzkOfbw2MYxeHjiEo3pZAouSnc1XuM2rEYml5UZAmyuk4m0Km5gNaOoHYGkq8uKElUC0Wskfg0zsuIH7Hv4aTxaUkOJAZAOXUly1qq6ZBaTXHoqRmZCirzfz7FohsIaBAG2bjPEv0DHLSMxfD0iG5HnTcKwaSCh11pX",
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message: {
        text: message
      },
    }
  });
}
