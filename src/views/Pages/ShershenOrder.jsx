import React from 'react';

class ShershenOrder extends React.Component{

  render(){

    return(
      <div style={ { width : 700, margin : 'auto' } } className="shershen_order">
        <h1>Пользовательское Соглашение</h1>

        <p>Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем (далее или Администрация) с одной стороны и пользователем сайта с другой.
          Сайт не является средством массовой информации.</p>

        <p>Используя сайт, Вы соглашаетесь с условиями данного соглашения.
          Если Вы не согласны с условиями данного соглашения, не используйте сайт !</p>

        <h2>Права и обязанности сторон</h2>
        <p>
          <ul>
            <b>Пользователь имеет право:</b>
            <li>осуществлять поиск информации на сайте</li>
            <li>получать информацию на сайте</li>
            <li>использовать информацию сайта в личных некоммерческих целях</li>
          </ul>
        </p>

        <ul>
          <b>Администрация имеет право:</b>
          <li>по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
          <li>ограничивать доступ к любой информации на сайте</li>
        </ul>

        <ul>
          <b>Пользователь обязуется:</b>
          <li>не нарушать работоспособность сайта</li>
          <li>не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами</li>
        </ul>

        <ul>
          <b>Администрация обязуется:</b>
          <li>поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.</li>
        </ul>

        <h2>Ответственность сторон</h2>
          <ul>
            <li>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
            <li>в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса</li>
          </ul>

        <h2>Условия действия Соглашения</h2>

        <p>Данное Соглашение вступает в силу при любом использовании данного сайта.
        Соглашение перестает действовать при появлении его новой версии.
        Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
          Администрация не оповещает пользователей об изменении в Соглашении.</p>


        <p>Соглашение создано с помощью Правилль</p>
      </div>
    )

  }

}

export default ShershenOrder