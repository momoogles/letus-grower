import { html } from 'lit-html'
import './style.css'

type Week = '月' | '火' | '水' | '木' | '金'
type ContentName = string
type ContentType = 'hishusentaku' | 'hishu' | 'sentaku' | 'ippan'
type ContentId = number
type Content = [ContentName, ContentId?, ContentType?]

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

export const template = html`
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
        ${Object.values(CONTENTS).flatMap((contents) =>
          contents.map((content) => {
            const href = content[0]
              ? `href="https://letus.ed.tus.ac.jp/course/view.php?id=${content[0]}"`
              : ''
            return html`
              <a class="content-item${` ${content[2]}`}" ${href}}
                >${content[0]}</a
              >
            `
          })
        )}
      </div>
    </div>
  </div>
`
