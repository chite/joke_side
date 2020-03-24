<template>
  <ul
    :style="{ display: `${this.clicked?'flex':'none'}`}"
    class="apps"
  >
    <li
      :style="{backgroundImage: 'url('+ SearchPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ YTPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ MapPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ DrivehPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ PlayPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ ContractsPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ GmailPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ CalendarPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
    <li
      :style="{backgroundImage: 'url('+ PhotoPt +')'}"
      class="apps__element"
    >
      <router-link :to="'aa'"></router-link>
    </li>
  </ul>
</template>
<script>
import SearchPt from "../assets/Search_icon.png";
import YTPt from "../assets/YouTube_icon.png";
import MapPt from "../assets/Maps_icon.png";
import DrivehPt from "../assets/Drive_icon.png";
import PlayPt from "../assets/Play_icon.png";
import ContractsPt from "../assets/Contacts_icon.png";
import GmailPt from "../assets/Gmail_icon.png";
import CalendarPt from "../assets/Calendar_icon.png";
import PhotoPt from "../assets/Photos_icon.png";
export default {
  name: "ThTable",
  props: {
    clicked: Boolean
  },
  data() {
    return {
      SearchPt,
      YTPt,
      MapPt,
      DrivehPt,
      PlayPt,
      ContractsPt,
      GmailPt,
      CalendarPt,
      PhotoPt
    };
  }
};
</script>