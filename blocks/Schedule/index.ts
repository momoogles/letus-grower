import { customElement, LitElement, css, html, property } from 'lit-element'

type Week = '月' | '火' | '水' | '木' | '金'
type ContentName = string
type ContentType = 'hishusentaku' | 'hishu' | 'sentaku' | 'ippan'
type ContentId = number
type Content = [ContentName, ContentId?, ContentType?]

@customElement('lg-schedule')
export class LgSchedule extends LitElement {
  @property()
  render() {
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
    return html`
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
          ${Object.values(CONTENTS).flatMap((weekContents) =>
            weekContents.map(
              (content) => html`<a class="content-item">${content[0]}</a>`
            )
          )}
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        --border-color: #4b4b4b;

        --grid-colomn: 120px;
        --grid-row: 60px;

        --hishu-color: #ce6a6b;
        --hishusentaku-color: #9ac7d9;
        --sentaku-color: #f2dbae;
        --ippan-color: #f2c6a0;

        display: flex;
        overflow: auto;
        width: fit-content;
        margin: auto;
      }

      .schedule {
        display: grid;
        grid-template-areas:
          '. week'
          'time content';
        grid-template-columns: var(--grid-colomn);
        grid-template-rows: var(--grid-row);
        justify-content: center;
      }

      .schedule .week-list {
        grid-area: week;
        display: grid;
        /* NOTE: 月から金までの5列用意する */
        grid-template-columns: repeat(5, var(--grid-colomn));
        font-size: 12px;
      }

      .schedule .timeinterval-list {
        grid-area: time;
        display: grid;
        /* NOTE: 一限から五限の5行用意する */
        grid-template-rows: repeat(5, var(--grid-row));
        font-size: 14px;
      }

      .schedule .content-list {
        grid-area: content;
        display: grid;
        grid-auto-flow: column;
        /* NOTE: 月から金までの5列用意する */
        grid-template-columns: repeat(5, var(--grid-colomn));
        /* NOTE: 一限から五限の5行用意する */
        grid-template-rows: repeat(5, var(--grid-row));
      }

      .schedule .week-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        box-shadow: inset 1px 0 0 var(--border-color);
      }

      .schedule .timeinterval-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 1px 0 0 var(--border-color);
      }

      .schedule .content-item {
        text-decoration: none;
        font-weight: bold;
        color: #4b4b4b;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        box-shadow: inset 1px 0 0 var(--border-color),
          inset 0 1px 0 0 var(--border-color);
      }

      .schedule .content-item.hishu {
        background-color: var(--hishu-color);
      }

      .schedule .content-item.hishusentaku {
        background-color: var(--hishusentaku-color);
      }

      .schedule .content-item.sentaku {
        background-color: var(--sentaku-color);
      }

      .schedule .content-item.ippan {
        background-color: var(--ippan-color);
      }
    `
  }
}
