import { html } from 'lit-html'
import './style.css'

type Week = '月' | '火' | '水' | '木' | '金'
type ContentName = string
type ContentType = 'hishusentaku' | 'hishu' | 'sentaku' | 'ippan'
type Content = [ContentName, ContentType?]

const CONTENTS: {
  [week in Week]: Content[]
} = {
  月: [[''], [''], [''], [''], ['']],
  火: [[''], [''], [''], [''], ['']],
  水: [[''], [''], [''], [''], ['']],
  木: [[''], [''], [''], [''], ['']],
  金: [[''], [''], [''], [''], ['']],
}

const TIMEINTERVALS = [
  '08:50 - 10:20',
  '10:30 - 12:00',
  '12:50 - 14:20',
  '14:30 - 16:00',
  '16:10 - 17:40',
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
        ${Object.values(CONTENTS).flatMap(
          (content) => html`
            <a class="content-item${` ${content[1]}`}">${content[0]}</a>
          `
        )}
      </div>
    </div>
  </div>
`

export default function Schedule() {
  return template
}
