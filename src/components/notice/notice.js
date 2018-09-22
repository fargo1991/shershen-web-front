
/**
 *
 * notice - объект, оповещение пользователя, содержит несколько функций, принимающих следующие параметры
 *
 *  @message : String,
 *  @location : String (top|right|bottom|left)
 *
 * */
import template from './template.html';

const DEFAULT_MESSAGE = "";
const DEFAULT_LOCATION = "top";
const BLOCK_WIDTH = 350;

function notice(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, style = "info", clientTitle){

  console.log(template)

  var noticeBlock = document.createElement("div"),
      icon = document.createElement("i"),
      messageBlock = document.createElement("p");

  var marginLeft = "0px",
      faIconName = "info";

  var title = clientTitle | null;

  noticeBlock.className =`notice notice-${style}`;


    switch (style){
      case "info" :
        faIconName = "info";
        title = title ? title : "Информация";
        break;
      case "alert" :
        faIconName = "exclamation-triangle";
        title = title ? title : "Внимание!";
        break;
      case "error" :
        faIconName =  "times-circle";
        title = title ? title : "Ошибка. Что-то пошло не так =(";
        break;
      case "success" :
        faIconName = "check-circle";
        title = title ? title : "Успешно =)";
        break;
      default :
        faIconName = "info";
        title = title ? title : "Информация";
    }


  icon.className ="notice-icon fa fa-" + faIconName;
  messageBlock.textContent=message;

  noticeBlock.appendChild(icon);
  noticeBlock.appendChild(messageBlock);

  switch (location){
    case "top" : {
      marginLeft = (document.documentElement.clientWidth - BLOCK_WIDTH)/2;
    } break;
    default : marginLeft = (document.documentElement.clientWidth - BLOCK_WIDTH)/2;
  }

  console.log("ml:" + marginLeft);
  console.log(document.documentElement.clientWidth)

  noticeBlock.style.width = `${BLOCK_WIDTH}px`;
  noticeBlock.style.marginLeft = `${marginLeft}px`;

  document.body.appendChild(noticeBlock);


}

export default {

  error : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "error", clientTitle)
  },

  success : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "success", clientTitle)
  },

  alert : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "alert", clientTitle)
  },

  info : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "info", clientTitle)
  },
}