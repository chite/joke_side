import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    draft: [
      {
        object: '羅璟宸',
        main: '無主旨',
        content: '璟宸，很抱歉我突然離開，但希望你別來找我，我不知道該怎麼辦，我真的好累，好累.',
        data:'',
        clickable: true
      }
    ],
    company:[
      {
        object: '旺茂股份有限公司',
        main: '合作研發討論會議',
        content: '',
        data:'',
        clickable: true
      },
      {
        object: '林芸玄',
        main: '同學會邀請',
        content: '',
        data:'',
        clickable: true
      }
    ],
    receive:[
      {
        object: '昌聖股份有限公司',
        main: '股東大會邀請函',
        content: '公司將於2019/12/30，下午兩點於公司第一會議廳召開股東大會，商議公司經營方向與未來策略事宜，煩請轉發至各單位以及所有公司股東，謝謝。',
        data:'',
        clickable: true
      },
      {
        object: '昌聖股份有限公司',
        main: '昌盛耶誕舞會邀請函',
        content: '公司將於2019/12/25晚上1930於公司大廳舉辦耶誕舞會，屆時也將有百萬好禮抽獎活動，誠摯邀請所有公司同仁一起共襄盛舉這場盛會！',
        data:'',
        clickable: true
      },
      {
        object: '昌聖股份有限公司',
        main: '秘書部聯合大會',
        content: '秘書部將在2018/11/28早上0900召開秘書部聯合大會，請各單位秘書屆時務必參與會議商討秘書部工作分派，謝謝！',
        data:'',
        clickable: true
      },
      {
        object: '昌聖股份有限公司',
        main: '公司總部2019年度第10次例會紀錄',
        content: '會議紀錄如附檔，煩請秘書轉發至各單位部長，謝謝。',
        data:'',
        clickable: false
      },
      {
        object: '昌聖股份有限公司',
        main: '公司研發部預算申請',
        content: '您好，煩請秘書協助告知老闆我們研發部已經將預算表填寫完畢，預算表如附檔所示，謝謝！',
        data:'',
        clickable: true
      }
    ],
    trash:[
      {
        object: 'Behance',
        main: '您的新靈感來源！2020年3月8日',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'Dribbble',
        main: 'Beyond, Slickdeals.com, and others are hiring',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'The Economist today ',
        main: 'America’s public pensions are trillions of dollars short',
        content: '',
        data:'',
        clickable: false
      },{
        object: '公企中心',
        main: '【公企中心】別再死背英文單字了，更好的方法在這裡！',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'LinkedIn 聯絡人',
        main: '看看還有誰在 LinkedIn！',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'The Economist ',
        main: 'Try The Economist Espresso app and receive your first month free',
        content: '',
        data:'',
        clickable: false
      },{
        object: '系統管理者',
        main: '電算中心 MailGates Notification',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'Hostinger',
        main: 'Black Friday Sale',
        content: '',
        data:'',
        clickable: false
      },{
        object: '研發處',
        main: '109學年度學術研究特優獎獲獎人系列演講',
        content: '',
        data:'',
        clickable: false
      },{
        object: '方格子 | vocus',
        main: '看似無用無效的其實最需要 文藝/創作出版專題推荐｜方格子',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'Dribbble',
        main: 'Courtside: "5 design principles for building your first portfolio " and more…',
        content: '',
        data:'',
        clickable: false
      },{
        object: '外語學院',
        main: '外文中心第47期夜間推廣班：現正招生中',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'Taco from Trello',
        main: 'Trello + Post-it® = ❤️',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'Pinterest',
        main: '你可能會喜歡這些圖版',
        content: '',
        data:'',
        clickable: false
      },{
        object: 'The Readdle Team',
        main: '🤓 Spark Tip #1: Smart Inbox',
        content: '',
        data:'',
        clickable: false
      }
    ],
    backup:[
      {
        object: '朱映文',
        main: '公司資料備份',
        content: '',
        data:'screenshot',
        clickable: true
      },
      {
        object: '朱映文',
        main: '公司資料備份',
        content: '現在警察已經找到你，你應該很清楚知道你應該要做什麼、說什麼！是誰以誰的名義跟你交易就說是誰即可！說了不該說的，你會知道你家人的下場是什麼',
        data:'terrorPt',
        clickable: true
      },
      {
        object: '研發科Robert',
        main: '藥品查核資料',
        content: 'Robert你好，我這邊需要一份上一期藥品研發的\n檢驗報告書三份，可以的話麻煩在明天下午三點前寄給我，謝謝。',
        data:'',
        clickable: true
      },
      {
        object: '研發科Jasmine',
        main: '檢驗報告書問題',
        content: 'Jasmine你好，在準備上期產品檢驗彙報時，\n我注意到有一項成分標示為紅字，是否可以跟你約個時間詢問詳細的細節呢？',
        data:'',
        clickable: true
      },
      {
        object: '部長',
        main: '會議記錄',
        content: '附檔為本次會議記錄內容，麻煩部長參閱，謝謝。',
        data:'',
        clickable: false
      },
      {
        object: '會計部Debbie',
        main: '年度報表',
        content: '你好，董事長辦公室需要今年度的報表資料一份，麻煩在下週三提供，謝謝。',
        data:'',
        clickable: true
      },
      {
        object: '人事室 Wayne',
        main: '年度績效評定標準',
        content: '您好，今年度下旬將進行各單位主管對下屬的績效評估，麻煩人事部在下週五\n之前將訂立的年度績效評定標準發函至秘書室以及各單位，以利後續評估作業，謝謝。',
        data:'',
        clickable: true
      }
    ],
    specific:['receive', 0]
  },
  mutations:{
    chooseData(state, payload){
      state.specific = [payload.category, payload.index];
    }
  }
})
