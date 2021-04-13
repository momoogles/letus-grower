import { html } from 'lit-html'
import './style.css'

export default function Schedule() {
  return html`
    <div class="schedule-wrapper">
      <div class="schedule">
        <div class="week-list">
          <div class="week-item">月</div>
          <div class="week-item">火</div>
          <div class="week-item">水</div>
          <div class="week-item">木</div>
          <div class="week-item">金</div>
        </div>
        <div class="timeinterval-list">
          <div class="timeinterval-item">08:50 - 10:20</div>
          <div class="timeinterval-item">10:00 - 12:00</div>
          <div class="timeinterval-item">12:00 - 14:00</div>
          <div class="timeinterval-item">14:00 - 16:00</div>
          <div class="timeinterval-item">16:00 - 18:00</div>
        </div>
        <div class="content-list">
          <!-- 月 -->
          <a class="content-item"></a>
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
}
