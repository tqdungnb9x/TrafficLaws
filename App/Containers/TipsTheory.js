import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import _ from 'lodash';
import { Colors, Metrics } from '../Theme';
// import Tips600 from '../Assets/data/tips600.html'

const Tips600 = require('../Assets/data/tips600.html');
const HTML = `<!DOCTYPE html>
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<title>Mẹo 600 câu hỏi ôn thi GPLX</title>


<style type="text/css">
body {
  font-family: Helvetica, arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  padding: 10px;
  background-color: white;
}

body > *:first-child {
  margin-top: 0 !important; }
body > *:last-child {
  margin-bottom: 0 !important; }

a {
  color: #4183C4; }
a.absent {
  color: #cc0000; }
a.anchor {
  display: block;
  padding-left: 30px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0; }

h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  position: relative; }

h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM2NjlDQjI4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM2NjlDQjM4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzY2OUNCMDg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzY2OUNCMTg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsQhXeAAAABfSURBVHjaYvz//z8DJYCRUgMYQAbAMBQIAvEqkBQWXI6sHqwHiwG70TTBxGaiWwjCTGgOUgJiF1J8wMRAIUA34B4Q76HUBelAfJYSA0CuMIEaRP8wGIkGMA54bgQIMACAmkXJi0hKJQAAAABJRU5ErkJggg==) no-repeat 10px center;
  text-decoration: none; }

h1 tt, h1 code {
  font-size: inherit; }

h2 tt, h2 code {
  font-size: inherit; }

h3 tt, h3 code {
  font-size: inherit; }

h4 tt, h4 code {
  font-size: inherit; }

h5 tt, h5 code {
  font-size: inherit; }

h6 tt, h6 code {
  font-size: inherit; }

h1 {
  font-size: 28px;
  color: black; }

h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black; }

h3 {
  font-size: 18px; }

h4 {
  font-size: 16px; }

h5 {
  font-size: 14px; }

h6 {
  color: #777777;
  font-size: 14px; }

p, blockquote, ul, ol, dl, li, table, pre {
  margin: 15px 0; }

hr {
  background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
  border: 0 none;
  color: #cccccc;
  height: 4px;
  padding: 0;
}

body > h2:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child {
  margin-top: 0;
  padding-top: 0; }
  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0; }
body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
  margin-top: 0;
  padding-top: 0; }

a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0; }

h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
  margin-top: 0; }

li p.first {
  display: inline-block; }
li {
  margin: 0; }
ul, ol {
  padding-left: 30px; }

ul :first-child, ol :first-child {
  margin-top: 0; }

dl {
  padding: 0; }
  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px; }
    dl dt:first-child {
      padding: 0; }
    dl dt > :first-child {
      margin-top: 0; }
    dl dt > :last-child {
      margin-bottom: 0; }
  dl dd {
    margin: 0 0 15px;
    padding: 0 15px; }
    dl dd > :first-child {
      margin-top: 0; }
    dl dd > :last-child {
      margin-bottom: 0; }

blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777; }
  blockquote > :first-child {
    margin-top: 0; }
  blockquote > :last-child {
    margin-bottom: 0; }

table {
  padding: 0;border-collapse: collapse; }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0; }
    table tr:nth-child(2n) {
      background-color: #f8f8f8; }
    table tr th {
      font-weight: bold;
      border: 1px solid #cccccc;
      margin: 0;
      padding: 6px 13px; }
    table tr td {
      border: 1px solid #cccccc;
      margin: 0;
      padding: 6px 13px; }
    table tr th :first-child, table tr td :first-child {
      margin-top: 0; }
    table tr th :last-child, table tr td :last-child {
      margin-bottom: 0; }

img {
  max-width: 100%; }

span.frame {
  display: block;
  overflow: hidden; }
  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto; }
  span.frame span img {
    display: block;
    float: left; }
  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0; }
span.align-center {
  display: block;
  overflow: hidden;
  clear: both; }
  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center; }
  span.align-center span img {
    margin: 0 auto;
    text-align: center; }
span.align-right {
  display: block;
  overflow: hidden;
  clear: both; }
  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right; }
  span.align-right span img {
    margin: 0;
    text-align: right; }
span.float-left {
  display: block;
  margin-right: 13px;
  overflow: hidden;
  float: left; }
  span.float-left span {
    margin: 13px 0 0; }
span.float-right {
  display: block;
  margin-left: 13px;
  overflow: hidden;
  float: right; }
  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right; }

code, tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px; }

pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent; }

.highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }

pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
  pre code, pre tt {
    background-color: transparent;
    border: none; }

sup {
    font-size: 0.83em;
    vertical-align: super;
    line-height: 0;
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font-size: 11px;
  line-height: 10px;
  color: #555;
  vertical-align: middle;
  background-color: #fcfcfc;
  border: solid 1px #ccc;
  border-bottom-color: #bbb;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #bbb
}

* {
    -webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
    body {
        width: 854px;
        margin:0 auto;
    }
}
@media print {
    table, pre {
        page-break-inside: avoid;
    }
    pre {
        word-wrap: break-word;
    }
}
</style>


</head>

<body>

<h3 id="toc_0">Mẹo 600 câu hỏi ôn thi GPLX</h3>

<h4 id="toc_1">Cấp phép</h4>

<ul>
<li>Đường cấm dừng, cấm đỗ, cấm đi do UBND cấp tỉnh cấp</li>
<li>Xe quá khổ, quá tải do: cơ quản quản lý đường bộ có thẩm quyền cấp phép</li>
</ul>

<h4 id="toc_2">Nồng độ cồn</h4>

<p>Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn: <strong>Bị nghiêm cấm</strong></p>

<h4 id="toc_3">Khoảng cách an toàn tối thiểu</h4>

<ul>
<li>35m nếu vận tốc lưu hành(V) = 60 (km/h)</li>
<li>55m nếu 60&lt;V≤80</li>
<li>70m nếu 80&lt;V≤100</li>
<li>100m nếu 100&lt;V≤120</li>
<li>Dưới 60km/h: Chủ động và đảm bảo khoảng cách.</li>
</ul>

<h4 id="toc_4">Hỏi về tuổi (T)</h4>

<ul>
<li>Tuổi tối đa hạng E: nam 55, nữ 50</li>
<li>Tuổi lấy bằng lái xe (cách nhau 3 tuổi)

<ul>
<li>Gắn máy: 16T (dưới 50cm3)</li>
<li>Mô tô + B1 + B2: 18T</li>
<li>C, FB: 21T</li>
<li>D, FC: 24T</li>
<li>E, FD: 27T</li>
</ul></li>
</ul>

<h4 id="toc_5">Trên đường cao tốc, trong đường hầm, đường vòng, đầu dốc, nơi tầm nhìn hạn chế</h4>

<ul>
<li>Không được quay đầu xe, không lùi, không vượt</li>
<li>Không được vượt trên cầu hẹp có một làn xe.</li>
<li>Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.</li>
<li>Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau.</li>
</ul>

<h4 id="toc_6">Tại nơi giao nhau không có tín hiệu đèn</h4>

<ul>
<li>Có vòng xuyến: Nhường đường bên trái</li>
<li>Không có vòng xuyến nhường bên phải</li>
</ul>

<h4 id="toc_7">Niên hạn sử dụng (tính từ năm sx)</h4>

<ul>
<li>25 năm: ô tô tải</li>
<li>20 năm: ô tô chở người trên 9 chỗ</li>
</ul>

<h4 id="toc_8">Biển báo cấm</h4>

<p>Cấm ô tô (Gồm: mô tô 3 bánh, Xe Lam, xe khách) --&gt; Cấm xe tải --&gt; Cấm Máy kéo --&gt; Cấm rơ moóc, sơ mi rơ moóc</p>

<h3 id="toc_9">Nhất chớm, nhì ưu, tam đường, tứ hướng</h3>

<ol>
<li>Nhất chớm: Xe nào chớm tới vạch trước thì được đi trước.</li>
<li>Nhì ưu: Xe ưu tiên được đi trước. Thứ tự xe ưu tiên: Hỏa-Sự-An-Thương (Cứu hỏa - Quân sự - Công an - Cứu thương - Hộ đê - Đoàn xe tang).</li>
<li>Tam đường: Xe ở đường chính, đường ưu tiên.</li>
<li>Tứ hướng: Thứ tự hướng: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.</li>
</ol>

<h4 id="toc_10">Thứ tự ưu tiên với xe ưu tiên: Hỏa-Sự-An-Thương</h4>

<ul>
<li>Hỏa: Xe Cứu hỏa</li>
<li>Sự : Xe Quân sự</li>
<li>An: Xe Công an</li>
<li>Thương: Xe cứu thương</li>
<li>Xe hộ đê, xe đi làm nhiệm vụ khẩn cấp</li>
<li>Đoàn xe tang</li>
</ul>

<h4 id="toc_11">Các hạng GPLX</h4>

<ul>
<li>A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật</li>
<li>A2 mô tô 175 cm3 trở lên</li>
<li>A3 xe mô tô 3 bánh</li>
<li>B1 không hành nghề lái xe</li>
<li>B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500kg</li>
<li>C đến 9 chỗ ngồi, xe trên 3.500kg</li>
<li>D chở đến 30 người</li>
<li>E chở trên 30 người.</li>
<li>FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc)</li>
<li>FE: E + kéo (ô tô chở khách nối toa)</li>
</ul>

<h4 id="toc_12">Phân nhóm biển báo hiệu: bao gồm</h4>

<ul>
<li>Biển nguy hiểm (hình tam giác vàng)</li>
<li>Biển cấm (vòng tròn đỏ)</li>
<li>Biển hiệu lệnh (vòng tròn xanh)</li>
<li>Biển chỉ dẫn (vuông hoặc hình chữ nhật xanh)</li>
<li>Biển phụ (vuông, chữ nhật trắng đen): Hiệu lực nằm ở biển phụ khi có đặt biển phụ</li>
</ul>

<h4 id="toc_13">Tốc độ tối đa <strong>TRONG</strong> khu vực đông dân cư</h4>

<ul>
<li>60km/h: Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ giới trở lên</li>
<li>50km/h: Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ giới</li>
</ul>

<h4 id="toc_14">Tốc độ tối đa <strong>NGOÀI</strong> khu vực đông dân cư (trừ đường cao tốc)</h4>

<h5 id="toc_15">1. Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ giới trở lên</h5>

<ul>
<li><strong>90km/h</strong>: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải ≤3.5 tấn.</li>
<li><strong>80km/h</strong>: Xe ô tô chở người trên 30 chỗ (trừ xe buýt), ô tô tải có trọng tải &gt;3.5 tấn (trừ ô tô xitec).</li>
<li><strong>70km/h</strong>: Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ mooc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).</li>
<li><strong>60km/h</strong>: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.</li>
</ul>

<h4 id="toc_16">2. Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ giới</h4>

<ul>
<li><strong>80km/h</strong>: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải ≤3.5 tấn.</li>
<li><strong>70km/h</strong>: Xe ô tô chở người trên 30 chỗ (trừ xe buýt), ô tô tải có trọng tải &gt;3.5 tấn (trừ ô tô xitec).</li>
<li><strong>60km/h</strong>: Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ mooc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).</li>
<li><strong>50km/h</strong>: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.</li>
</ul>

<h4 id="toc_17">Tốc độ tối đa cho phép đối với</h4>

<ul>
<li>Xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc): <strong>40km/h</strong></li>
<li>Tốc độ tối đa cho phép của các loại xe cơ giới, xe máy chuyên dùng trên đường cao tốc phải tuân thủ tốc độ tối đa, tốc độ tối thiểu và không vượt quá: <strong>120km/h</strong></li>
</ul>

<h4 id="toc_18">Tăng số, giảm số</h4>

<ul>
<li>Tăng 1 Giảm 2 (giảm số chọn ý có từ “vù ga”)</li>
</ul>

<h4 id="toc_19">Phương tiện giao thông đường bộ</h4>

<ul>
<li>Bao gồm phương tiện giao thông cơ giới đường bộ và phương tiện giao thông thô sơ đường bộ</li>
</ul>

<h4 id="toc_20">Phương tiện tham gia giao thông đường bộ</h4>

<p>Gồm phương tiện giao thông đường bộ và xe máy chuyên dùng</p>

<h4 id="toc_21">Xe máy chuyên dùng</h4>

<p>Gồm xe máy thi công, xe máy nông nghiệp, lâm nghiệp và các loại xe đặc chủng khác sử dụng và mục đích quốc phòng, an ninh có tham gia giao thông đường bộ</p>

<h4 id="toc_22">Hiệu lệnh người điều khiển giao thông</h4>

<ul>
<li>Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi</li>
<li>Giang ngang tay: Trái phải đi; Trước sau dừng</li>
<li>Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.</li>
</ul>

<h4 id="toc_23">Khái niệm và quy tắc</h4>

<ul>
<li>Tất cả các câu có đáp án bị nghiêm cấm, không cho phép hoặc không được phép thì chọn đáp án đó.</li>
<li>Tốc độ chậm đi về bên phải.</li>
<li>Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.</li>
<li>Trong đô thị sử dụng đèn chiếu gần.</li>
<li>Không được phép lắp đặt còi đèn không đúng thiết kế, trừ phi được chấp thuận của cơ quan có thẩm quyền.</li>
<li>Xe mô tô không được kéo xe khác.</li>
<li>05 năm không cấp lại nếu sử dụng bằng lái đã khai báo mất.</li>
<li>Chuyển làn đường phải có tín hiệu báo trước.</li>
<li>Xe thô sơ phải đi làn đường nên phải trong cùng.</li>
<li>Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe lên dốc.</li>
<li>Đứng cách ray đường sắt 5m.</li>
<li>Vào cao tốc phải nhường đường cho xe đang chạy trên đường.</li>
<li>Xe thiết kế nhỏ hơn 70km/h không được vào cao tốc.</li>
<li>Trên cao tốc chỉ được dừng xe, đỗ xe ở nơi quy định.</li>
<li>Trong hầm chỉ được dừng xe, đỗ xe ở nơi quy định.</li>
<li>Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.</li>
<li>Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.</li>
<li>Kéo xe không hệ thống hãm phải dùng thanh nối cứng.</li>
<li>Xe gắn máy tối đa 40km/h.</li>
<li>Xe cơ giới không bao gồm xe gắn máy.</li>
<li>Đường có giải phân cách được xem là đường đôi.</li>
<li>Giảm tốc độ, chú ý quan sát khi gặp biển báo nguy hiểm.</li>
<li>Giảm tốc độ, đi sát về bên phải khi xe sau xin vượt.</li>
<li>Điểm giao cắt đường sắt thì ưu tiên đường sắt.</li>
<li>Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.</li>
<li>Không vượt xe khác trên đường vòng, khuất tầm nhìn.</li>
<li>Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.</li>
<li>Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.</li>
<li>Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.</li>
<li>Giảm tốc độ trên đường ướt, đường hẹp và đèo dốc.</li>
<li>Xe buýt đang dừng đón trả khách thì giảm tốc độ và từ từ vượt qua xe buýt.</li>
</ul>

<h4 id="toc_24">Nghiệp vụ vận tải</h4>

<ul>
<li>Không lái xe liên tục quá 4 giờ.</li>
<li>Không làm việc 1 ngày của lái xe quá 10 giờ.</li>
<li>Người kinh doanh vận tải không được tự ý thay đổi vị trí đón trả khách.</li>
<li>Vận chuyển hàng nguy hiểm phải có giấy phép.</li>
</ul>

<h4 id="toc_25">Kỹ thuật lái xe</h4>

<ul>
<li>Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau để giảm tốc độ.</li>
<li>Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.</li>
<li>Thực hiện phanh tay cần phải bóp khóa hãm đẩy cần phanh tay về phía trước.</li>
<li>Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình.</li>
<li>Thực hiện quay đầu xe với tốc độ thấp.</li>
<li>Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.</li>
<li>Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.</li>
</ul>

<h4 id="toc_26">Cấu tạo và sữa chữa</h4>

<ul>
<li>Yêu cầu của kính chắn gió, chọn “Loại kính an toàn“.</li>
<li>Âm lượng của còi là từ 90dB đến 115 dB.</li>
<li>Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.</li>
<li>Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.</li>
<li>Động cơ 4 kỳ thì pít tông thực hiện 4 hành trình.</li>
<li>Hệ thống bôi trơn giảm ma sát.</li>
<li>Niên hạn ô tô trên 9 chỗ ngồi là 20 năm.</li>
<li>Niên hạn ô tô tải là 25 năm.</li>
<li>Động cơ ô tô biến nhiệt năng thành cơ năng.</li>
<li>Hệ thống truyền lực truyền mô men quay từ động cơ tới bánh xe.</li>
<li>Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.</li>
<li>Hộp số ô tô đảm bảo chuyển động lùi.</li>
<li>Hệ thống lái dùng để thay đổi hướng.</li>
<li>Hệ thống phanh giúp giảm tốc độ.</li>
<li>Ắc quy để tích trữ điện năng.</li>
<li>Khởi động xe tự động phải đạp phanh.</li>
</ul>

<h4 id="toc_27">Các quy tắc sa hình khác</h4>

<ul>
<li>Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.</li>
<li>Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.</li>
<li>Xe xuống dốc phải nhường đường cho xe đang lên dốc</li>
</ul>

</body>

</html>
`
const TipsTheory = () => {

    return (

        <WebView
            originWhitelist={['*']}
            source={{ html: HTML }}
            automaticallyAdjustContentInsets={false}
        />

    );
};

export default TipsTheory;

