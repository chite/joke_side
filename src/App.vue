<template>
  <div id="app">
    <nav class="bar">
      <hgroup class="bar__left">
        <font-awesome-icon icon="bars" />
        <div class="bar__icontainer">
          <div
            :style="{backgroundImage: 'url('+ icon +')'}"
            class="icon"
          ></div>
        </div>
      </hgroup>
      <div class="search">
        <div class="search__group">
          <font-awesome-icon icon="search" />
          <p class="search__title">搜尋郵件</p>
        </div>
        <p>&#x25BE;</p>
      </div>
      <hgroup class="bar__right">
        <question-icon></question-icon>
        <font-awesome-icon icon="th" />
        <span class="bar__self">沐安</span>
      </hgroup>
    </nav>
    <article class="body">
      <aside class="l-body">
        <div class="l-body__btn">
          <div
            :style="{backgroundImage: 'url('+ createIcon +')'}"
            class="icon"
          ></div>
          <span class="l-body__font--s">撰寫</span>
        </div>
        <div class="l-body__box">
          <ul class="l-body__list">
            <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ createIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">收件匣</span>
            </li>
            <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ createIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">已加星號</span>
            </li>
            <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ createIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">寄件備份</span>
            </li>
            <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ createIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">草稿</span>
            </li>
            <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ createIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">垃圾郵件</span>
            </li>
          </ul>
        </div>
        <div class="l-body__user">
          <div class="l-body__left">
            <div class="l-body__icontainer">
              <div
                :style="{backgroundImage: 'url('+ userPt +')'}"
                class="icon"
              ></div>
            </div>
            <span>杜沐安&nbsp;&#x25BE;</span>
          </div>
          <font-awesome-icon icon="plus" />
        </div>
        <div class="l-body__call">
          <font-awesome-icon icon="comment-dots" />
          <p class="l-body__font--s">最近未進行任何即時通訊</p>
          <p class="l-body__font--link">發起新的即時通訊</p>
        </div>
      </aside>
      <section class="m-body"></section>
      <aside class="r-body">
        <div class="r-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ smallIcon01 +')'}"
            class="icon"
          ></div>
        </div>
        <div class="r-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ smallIcon02 +')'}"
            class="icon"
          ></div>
        </div>
        <div class="r-body__line"></div>
        <font-awesome-icon icon="plus" />
      </aside>
    </article>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import gmailIcon from "./assets/gmailIcon.png";
import SmallIcon01 from "./assets/smallIcon01.png";
import SmallIcon02 from "./assets/smallIcon02.png";
import CreateIcon from "./assets/createIcon.png";
import UserPt from "./assets/unnamed.png";
import QuestionIcon from "./components/QuestionIcon";
export default {
  created() {
    document.title = "收件匣";
  },
  components: {
    QuestionIcon
  },
  data() {
    return {
      icon: gmailIcon,
      smallIcon01: SmallIcon01,
      smallIcon02: SmallIcon02,
      createIcon: CreateIcon,
      userPt: UserPt
    };
  }
};
</script>