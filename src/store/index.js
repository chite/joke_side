import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes:[
      {
        id:0, 
        text: '跟一女同事玩打手背的遊戲，不小心抓到了她的手，破了一點表皮，然後女同事一臉認真的拿出手機，正在我以為她要拍照發朋友圈控訴我的時候…只見她在網上搜索：被單身狗抓了需要打狂犬疫苗嗎？',
        catergy: 0
      },
      {
        id:1, 
        text: '最近來親戚了，不舒服就和男朋友鬧彆扭，持續了一周了，最近兩天死皮賴臉的纏著我！我懶得搭理他，就指了指壞掉的空調說道：男人都是大豬蹄子，就和破空調一樣，我熱了偏要吹熱風，我冷了偏要吹涼風！男朋友也怒了，說到：你連空調都不如，最起碼它知道吹。',
        catergy: 0
      },
      {
        id:2, 
        text: '早上我去菜市場買青菜，我問小販：“你這菜打過農藥嗎？”小販想了想說：“估計打不過。”',
        catergy: 0
      },
      {
        id:3, 
        text: '我一同學，前段時間賣掉了上海的一間房子，家人怎麼攔都沒有用，問他原因，他說:就這一間房，將來住都住不下，也買不起了，不如在家鄉買個十來間，寧做雞頭不做牛尾嘛！直到前兩天聽說他開了個桑拿中心，總算明白他的苦心！',
        catergy: 0
      },
      {
        id:4, 
        text: '有一天我問我媽，“媽，我是你的什麼？ ”我媽撇了我一眼 “媽的智障”！',
        catergy: 0
      },
      {
        id:5, 
        text: "在經歷了漫長的十幾小時飛機後，我終於如願以償的到達了，美國洛杉磯，啊！美國，他們說的空氣，我一聞，果然是極其香甜的，完全沒有霧霾，於是我摘下了在中國所戴的厚厚的口罩，換上了厚厚的防彈衣！",
        catergy: 0
      },
      {
        id:6, 
        text: '和一個漂亮的MM約了個會，看完電影后，她邀請我去她家，我覺得不能這麼空著手去，說先去超市買點東西，但這時她羞澀的對我說，“不用了，家裡還有剩的。”',
        catergy: 0
      }
    ],
    rank:[
      {
        id: 0,
        name: 'Asdfs11',
        score: 23312
      },
      {
        id: 1,
        name: 'SSD112',
        score: 19870
      },
      {
        id: 2,
        name: 'ddfre33',
        score: 13009
      },
      {
        id: 3,
        name: 'Becky210',
        score: 10020
      },
      {
        id: 4,
        name: 'AUnuty2s',
        score: 4901
      },
      {
        id: 5,
        name: 'KKJU',
        score: 1344
      },
      {
        id: 6,
        name: 'ssna0',
        score: 600
      }
    ],
    keyword: '時'
  },
  mutations: {
    setKeyWord(state, payload){
      state.keyword = payload.text;
    }
  },
  actions: {
  }
})
