
/**
 *
 * notice - объект, оповещение пользователя, содержит несколько функций, принимающих следующие параметры
 *
 *  @message : String,
 *  @location : String (top|right|bottom|left)
 *
 * */
import template from './template.js';
import Handlebars from 'handlebars';

const DEFAULT_MESSAGE = "";
const DEFAULT_LOCATION = "top";
const BLOCK_WIDTH = 350;

var notice_template = Handlebars.compile(template);

function notice(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, style = "info", clientTitle = "Сообщение"){

  var noticeBlock = document.createElement("div"),
      icon = document.createElement("i"),
      messageBlock = document.createElement("p");

  var marginLeft = "0px",
      faIconName = "info";

  var title = "";

  noticeBlock.className =`notice-wrapper`;


    switch (style){
      case "info" :
        faIconName = "info-circle";
        title = clientTitle ? clientTitle : "Информация";
        break;
      case "warning" :
        faIconName = "exclamation-triangle";
        title = clientTitle ? clientTitle : "Внимание!";
        break;
      case "error" :
        faIconName =  "times-circle";
        title = clientTitle ? clientTitle : "Упс... Что-то пошло не так =(";
        break;
      case "success" :
        faIconName = "check-circle";
        title = clientTitle ? clientTitle : "Успешно =)";
        break;
      default :
        faIconName = "info";
        title = clientTitle ? clientTitle : "Информация";
    }


  noticeBlock.innerHTML = notice_template(
      {
        title : title,
        iconClass :"notice-icon fa fa-" + faIconName,
        message : message,
        noticeStyle : style
      });

// TODO: Работает пока только top-location. Недо сделать: top-left, top-right, right, bottom-right, bottom, bottom-left, left.
  switch (location){
    case "top" : {
      marginLeft = (document.documentElement.clientWidth - BLOCK_WIDTH)/2 + 40;
    } break;
    default : marginLeft = (document.documentElement.clientWidth - BLOCK_WIDTH)/2 + 40;
  }


// TODO: Положение статично.
// TODO: При изменении размера окна необходимо добавить адаптивности. Т.е. менять marginLeft в зависимости от измененной ширины окна
  noticeBlock.style.maxWidth = `${BLOCK_WIDTH}px`;
  noticeBlock.style.marginLeft = `${marginLeft}px`;

  noticeBlock.onclick = function(ev){ document.body.removeChild(noticeBlock)}

  document.body.appendChild(noticeBlock);


}

export default {

  error : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "error", clientTitle)
  },

  success : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "success", clientTitle)
  },

  warning : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "warning", clientTitle)
  },

  info : function(message = DEFAULT_MESSAGE, location = DEFAULT_LOCATION, clientTitle){
    notice(message, location, "info", clientTitle)
  },
}