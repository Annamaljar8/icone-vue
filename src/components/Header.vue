<template>
    <div class="content">
      <nav class="navbar navbar-expand-lg navbar-light navigation  nav-color">
         <a class="navbar-brand">
           <ion-icon name="color-palette" width="30" height="30" class="d-inline-block align-top  nav-color"></ion-icon>
           <router-link
             tag="li"
             to="/"
             class="dropdown-item navigation order" style="cursor: pointer">ИС СПАС</router-link>
         </a>
   <button class="navbar-toggler nav-color" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav-color" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-color">
      <li class="nav-item active dropdown">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Иконописная мастерская "Спас" <span class="sr-only">(current)</span></a>
        <div class="dropdown-menu p-0 nav-color" aria-labelledby="navbarDropdown">
            <router-link
              tag="li"
              to="/workshop"
              class="dropdown-item navigation" style="cursor: pointer">О Нас</router-link>
              <router-link
              tag="li"
              to="/workshop/stepworkshop"
              class="dropdown-item navigation " style="cursor: pointer">Этапы</router-link>
              <router-link
              tag="li"
              to="/workshop/articles"
              class="dropdown-item navigation " style="cursor: pointer">Статьи</router-link>
            </div>
      </li>
      <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Иконы
            </a>
            <div class="dropdown-menu p-0 nav-color" aria-labelledby="navbarDropdown">
                <router-link
                  tag="li"
                  to="/icons/married"
                  class="dropdown-item navigation" style="cursor: pointer">Венчальные Иконы</router-link>
                  <router-link
                  tag="li"
                  to="/icons/name"
                  class="dropdown-item navigation " style="cursor: pointer">Именные Иконы</router-link>
                  <router-link
                  tag="li"
                  to="/icons/measure"
                  class="dropdown-item navigation " style="cursor: pointer">Мерные Иконы</router-link>
                  <router-link
                  tag="li"
                  to="/icons/church"
                  class="dropdown-item navigation " style="cursor: pointer">Храмовые Иконы</router-link>
                  <router-link
                  tag="li"
                  to="/icons/churchpainting"
                  class="dropdown-item navigation " style="cursor: pointer">Храмовая Роспись</router-link>
            </div>
          </li>
      <li class="nav-item active dropdown nav-color">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Иконописная Школа "Зограф"
        </a>
        <div class="dropdown-menu p-0 nav-color" aria-labelledby="navbarDropdown">
            <router-link
              tag="li"
              to="/school"
              class="dropdown-item navigation" style="cursor: pointer">О Нас</router-link>
              <router-link
              tag="li"
              to="/school/workpupils"
              class="dropdown-item navigation " style="cursor: pointer">Работы Учеников</router-link>
              <router-link
              tag="li"
              to="/school/entrant"
              class="dropdown-item navigation " style="cursor: pointer">Абитуриенту</router-link>
            </div>
      </li>
          <li class="nav-item p-1">
              <router-link
              tag="li"
              to="/order"
              class="dropdown-item navigation order" style="cursor: pointer">Заказать Икону</router-link>
    </li>
  </ul>
  </div>
</nav>
 </div>
</template>

<style>

.nav-color{
    color: var(--frenchPuce) !important;
    border-color: var(--frenchPuce) !important;

}

.navigation{
    font-weight: bold;
    text-transform: uppercase;
    background: var(--brightYellow);
    color: var(--frenchPuce);
    border-color: var(--rust);
    z-index: 3;
}
.dropdown-item:hover {
    background-color: var(--rust);
}
.navigation ul{
  list-style: none;
  margin: 0 auto;
  padding: 0;
  color:#ffffff;
}
.navigation li{
  display: inline-block;
  }
.navigation a{
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5em;
  color: #bc3908;
}
.order {
    border: 3px solid var(--rust);
    border-radius: 15px;
}

</style>
