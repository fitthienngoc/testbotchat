var request = require("request");

sendMessage(2248424415276865, ":D " ); 
       


// Gửi thông tin tới REST API để trả lời
function sendMessage(senderId, message) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: "EAADnYEgNbWEBAFzf8XLon7ZB65ggvI2wdsVyK8ROf78VIW2S2wYsCZCItqLMTOM1ZCMXqsYVkLTjTZAHptN6Loes1O4IHOtARuHQPhbkv1M0u7fWbqZCRSCNvlfzbFVGX71kD0ATFX62ZAguBwmeijuWnjZBkaJVZCP9hZA7Ns85CcJnNUl5pPkUj",
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
