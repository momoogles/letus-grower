import { html } from 'lit-html'
import './style.css'

type Week = '月' | '火' | '水' | '木' | '金'
type ContentName = string
type ContentType = 'hishusentaku' | 'hishu' | 'sentaku' | 'ippan'
type Content = [ContentName, ContentType]

const CONTENTS: {
  [week in Week]: Content[]
} = {
  月: [],
  火: [],
  水: [],
  木: [],
  金: [],
}

const TIMEINTERVALS = [
  '08:50 - 10:20',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
]

const template = html`
  <div class="schedule-wrapper">
    <div class="schedule">
      <div class="week-list">
        ${Object.keys(CONTENTS).map(
          (week) => html`<div class="week-item">${week}</div>`
        )}
      </div>
      <div class="timeinterval-list">
        ${TIMEINTERVALS.map(
          (timeInterval) =>
            html`<div class="timeinterval-item">${timeInterval}</div>`
        )}
      </div>
      <div class="content-list">
        <!-- 月 -->
        <a class="content-item"></a>
        <a class="content-item"></a>
        <a class="content-item"></a>
        <a class="content-item"></a>
        <!-- 火 -->
        <a class="content-item"></a>
        <a class="content-item"></a>
        <a class="content-item"></a>
        <a class="content-item"></a>
        <a class="content-item"></a>
        <!-- 水 -->
        <a class="content-item hishusentaku" href="#">ほげほげほ論1 </a>
        <a class="content-item hishusentaku" href="#">ふがふが論1</a>
        <a class="content-item"></a>
        <a class="content-item hishu" href="#">ほげほげ研究1</a>
        <a class="content-item hishu" href="#">ほげほげ研究1</a>
        <!-- 木 -->
        <a class="content-item"></a>
        <a class="content-item sentaku" href="#">ほげほげほ1</a>
        <a class="content-item sentaku" href="#">ふがふがふ1</a>
        <a class="content-item ippan" href="#">ほげほげ及びふがふが1</a>
        <a class="content-item"></a>
        <!-- 金 -->
        <a class="content-item hishusentaku" href="#">ほげほげ学3</a>
        <a class="content-item hishusentaku" href="#">ふがふが論1</a>
        <a class="content-item ippan" href="#">ほげ学1</a>
        <a class="content-item sentaku" href="#"
          >ほげほげほげほげほげリサーチ1</a
        >
        <a class="content-item"></a>
      </div>
    </div>
  </div>
`

export default function Schedule() {
  return template
}
