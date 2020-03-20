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
            <li
              :class="[`${category == 'receive' ? 'l-body__item--chosen' : ''} l-body__item`]"
              @click="clickCategory('receive')"
            >
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ box +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">收件匣</span>
            </li>
            <!-- <li class="l-body__item">
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ starIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">已加星號</span>
            </li>-->
            <li
              :class="[`${category == 'backup' ? 'l-body__item--chosen' : ''} l-body__item`]"
              @click="clickCategory('backup')"
            >
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ backupIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">寄件備份</span>
            </li>
            <li
              :class="[`${category == 'draft' ? 'l-body__item--chosen' : ''} l-body__item`]"
              @click="clickCategory('draft')"
            >
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ draftIcon +')'}"
                  class="icon"
                ></div>
              </div>
              <span class="l-body__catergory">草稿</span>
            </li>
            <li
              :class="[`${category == 'trash' ? 'l-body__item--chosen' : ''} l-body__item`]"
              @click="clickCategory('trash')"
            >
              <div class="l-body__icontainer--s">
                <div
                  :style="{backgroundImage: 'url('+ garbageIcon +')'}"
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
      <section class="m-body">
        <div class="m-body__bar">
          <div class="m-body__l">
            <div class="m-body__checkbox"></div>
            <span>&#x25BE;</span>
            <font-awesome-icon icon="redo-alt" />
            <font-awesome-icon icon="ellipsis-v" />
          </div>
          <div class="m-body__r">
            <span>&#9666;</span>
            <span>&#9656;</span>
            <font-awesome-icon icon="cog" />
          </div>
        </div>
        <router-view :category="category" />
      </section>
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
  </div>
</template>
<script>
import gmailIcon from "./assets/gmailIcon.png";
import SmallIcon01 from "./assets/smallIcon01.png";
import SmallIcon02 from "./assets/smallIcon02.png";
import CreateIcon from "./assets/createIcon.png";
import UserPt from "./assets/unnamed.png";
import DraftIcon from "./assets/draft.png";
import BackUpIcon from "./assets/backup.png";
// import StarIcon from "./assets/star.png";
import QuestionIcon from "./components/QuestionIcon";
import Download from "./assets/box.png";
import Garbage from "./assets/garbagecan.png";
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
      userPt: UserPt,
      draftIcon: DraftIcon,
      backupIcon: BackUpIcon,
      // starIcon: StarIcon,
      box: Download,
      garbageIcon: Garbage,
      category: "receive"
    };
  },
  methods: {
    clickCategory(category) {
      this.$router.push('/').catch(()=>{})
      this.category = category;
    }
  }
};
</script>