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
import Tips600 from '../Assets/data/tips600.html'

// const Tips600 = require('../Assets/data/tips600.html');
const HTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>HƯỚNG DẪN 11 BÀI THI SA HÌNH B2</title>

    <link href="bootstrap.min.css" rel="stylesheet">
</head>

<body style="padding-bottom: 10px;">
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<section id="home">
    <div class="container">
        <h2>Hướng dẫn 11 bài thi sa hình</h2>
        <p>
            Đây là hướng dẫn 11 bài thi sa hình mới nhất dành cho các bạn thi bằng lái xe ô tô hạng
            B2.
        </p>
        <p>
            Hệ thống cảm biến điện tử trên sân sát hạch tại Trung tâm sát hạch sẽ thực hiện chấm
            điểm tự động, nếu không bị lỗi thì điểm tối đa là 100 điểm. Điểm đậu là từ 80 điểm trở
            lên).<br/>Tổng thời gian toàn bộ bài thi là <strong>18 phút</strong>, thời gian mỗi bài
            thi sẽ được tính từ khi vào bài thi (vạch màu trắng trên đường) đến khi ra khỏi bài thi.
        </p>

        <br/>
        <p class="lead">
            Khi lái xe trong sa hình bạn cần phải đi chậm, thật chậm. Đi chậm sẽ giúp ta đánh lái
            được chính xác, không vội vàng (khi qua chữ Z, chữ S, lùi vào ga ra), có thời gian căn
            chỉnh bánh xe khi đi vào hàng đinh, dừng đúng chỗ và nhẹ nhàng tại điểm dừng xe nhường
            đường cho người đi bộ, trên dốc và trước đường sắt.
        </p>
        <p class="lead">
            Các xe thi thường để ga-răng-ti cao nên vào số 1, không đặt vào chân ga thì xe đi cũng
            đã khá nhanh. Vì vậy muốn xe đi chậm thì phải đỡ được côn, tức là chân trái ấn côn vào
            sâu gần hết (không ấn hết côn) và giữ nguyên ở mức đó cho đến khi xe đi chậm như mình
            mong muốn. Đỡ được côn và rà phanh sẽ giúp bạn điều khiển chiếc xe được theo ý mình.
        </p>
    </div>
</section>
<section id="tableOfContents">
    <div class="container">
        <h2>Có 11 bài thi chính và 1 bài thi phụ:</h2>
        <ol>
            <li><a href="#bai1">Xuất phát</a></li>
            <li><a href="#bai2">Dừng xe nhường đường cho người đi bộ</a></li>
            <li><a href="#bai3">Dừng xe, khởi hành ngang dốc (thường gọi là đề-pa lên dốc)</a></li>
            <li><a href="#bai4">Đi xe qua hàng đinh vuông góc (chữ Z)</a></li>
            <li><a href="#bai5">Đi qua ngã tư có tín hiệu điều khiển giao thông</a></li>
            <li><a href="#bai6">Đi xe qua đường vòng quanh co (chữ S)</a></li>
            <li><a href="#bai7">Ghép xe vào nơi đỗ (lùi nhà xe)</a></li>
            <li><a href="#bai8">Dừng xe nơi giao nhau với đường sắt</a></li>
            <li><a href="#bai9">Tăng tốc, tăng số</a></li>
            <li><a href="#bai10">Ghép xe ngang - Đỗ xe song song</a></li>
            <li><a href="#bai11">Kết thúc</a></li>
            <li><a href="#bai12">Bài phụ: Dừng xe nguy hiểm</a></li>
        </ol>
    </div>
</section>

<section id="bai1">
    <div class="container">
        <h2>Bài 1. Xuất phát</h2>
        <h4>Trước lúc xuất phát, khi mới lên xe, bạn cần:</h4>
        <ul>
            <li>Kiểm tra lại ghế ngồi xem có phù hợp với người không, nếu cần thiết thì chỉnh xa
                vành tay lái hoặc gần lại
                để đạp hết được côn, phanh, ga.
            </li>
            <li>Kiểm tra hai gương sao cho nhìn thấy được điểm bánh xe sau tiếp xúc với mặt đường.
            </li>
            <li>Cài dây an toàn, để máy nổ và chờ lệnh xuất phát.</li>
            <li>Khi có lệnh xuất phát (Đèn màu xanh trong xe bật sáng, loa phát lệnh “Xe số xxx xuất
                phát”), bạn thực hiện
                xuất phát.
            </li>
        </ul>
        <h4>Các bước xuất phát:</h4>
        <ul>
            <li>Bật đèn xi–nhan trái.</li>
            <li>Vào số 1, nhả côn từ từ để xe đi.</li>
            <li>Khi đèn xanh trong xe tắt hoặc khi qua vạch xuất phát khoảng 5 m thì tắt đèn
                xi-nhan.
            </li>
            <li>Khi xe đã đi, bạn có thể nhả hết côn ra cho xe tự bò, không cần đặt chân vào bàn đạp
                ga. Và đi đến bài số 2.
            </li>
        </ul>
        <h4>Các lỗi nhẹ: (Mỗi lỗi trừ 5 điểm)</h4>
        <ul>
            <li>Không thắt dây an toàn.</li>
            <li>Không bật đèn xi nhan trái khi xuất phát.</li>
            <li>Không tắt đèn xi nhan sau khi xe qua vạch xuất phát 5m.</li>
            <li>Quá 20 giây sau khi có lệnh xuất phát (đèn xanh sáng) mà xe chưa đi qua vạch xuất
                phát.
            </li>
            <li>Xe chết máy khi đã có lệnh xuất phát.</li>
            <li>Để tốc độ động cơ quá 4000 vòng/phút (Đạp ga quá lớn).</li>
            <li>Lái xe vượt tốc độ quy định.</li>
        </ul>
        <h4>Lỗi nặng: (Bị loại)</h4>
        <ul>
            <li>Quá 10 giây mà xe chưa qua được vạch xuất phát.</li>
            <li>Gây tai nạn.</li>
        </ul>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai2">
    <div class="container">
        <h3>Bài 2. Dừng xe nhường đường cho người đi bộ</a>
        </h3>
        <p>Yêu cầu của bài này là dừng xe đúng chỗ trước vạch trắng và đường vằn dành cho người đi
            bộ (cản xe phía trước cách vạch dừng không quá 0,5m).</p>
        <p>Đỗ già quá (chạm vào vạch trắng) hoặc non quá (quá xa vạch trắng) đều bị trừ 5 điểm.</p>
        <p>Các sân thi thường "giúp" học viên bằng cách đánh dấu sẵn bằng vạch trên cọc biển báo
            hiệu. Nếu khi vai người lái xe (hoặc Nút chốt cửa hoặc vạch trên cửa xe) đến ngang cọc
            đó thì phải dừng.</p>
        <p>Sau khi xuất phát, bạn để xe đi chậm. Khi xe vừa tới vị trí thì đạp côn và ấn nhẹ phanh
            là xe dừng.</p>
        <p>Dừng xe xong, bạn lại nhả côn cho xe đi tiếp luôn. Dừng lâu quá 30 giây sẽ bị trừ
            điểm.</p>
        <div class="alert alert-success">
            <strong>Mẹo:</strong> Cách điểm đến 5m, đạp hết côn cho xe chạy từ từ theo đà, để sẳn
            chân trên thắng (phanh), vươn người để đưa tầm mắt ngang với vạch trên cửa xe và ngắm ra
            vạch trên sân thi, khi thấy thẳng hàng thì đạp mạnh châng thắng (chân phanh). Mẹo này áp
            dụng cho cả bài thi qua đường sắt và bài thi lên dốc nếu muốn ăn trọn điểm.
        </div>
        <h4>Các lỗi nhẹ: (mỗi lỗi trừ 5 điểm)</h4>
        <ul>
            <li>Dừng xa vạch (quá 0,5 m).</li>
            <li>Dừng quá vạch.</li>
            <li>Xe chết máy.</li>
            <li>Để tốc độ động cơ quá 4000 vòng/phút (Đạp ga quá lớn).</li>
        </ul>
        <h4>Các lỗi nặng: (Bị loại)</h4>
        <ul>
            <li>Quá 30 giây mà xe chưa qua được vạch xuất phát.</li>
            <li>Gây tai nạn.</li>
        </ul>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai3">
    <div class="container">
        <h3>Bài 3. Dừng xe, khởi hành ngang dốc</h3>
        <p>Yêu cầu của bài này là xe không vượt quá vạch quy định, không bị tuột dốc quá 50 cm, phải
            vượt khỏi dốc trong khoảng thời gian 30 giây (nếu bị các lổi này sẽ bị loại).</p>
        <p>Không được tăng ga quá lớn (số vòng quay động cơ trên quá 3 hoặc 4 nghìn vòng/phút).
            Chính vì nếu vượt quá vạch quy định là bị loại ngay nên nhiều người đành phải đỗ non khi
            chưa đến đúng vị trí, chấp nhận mất 5 điểm cho chắc ăn.</p>
        <p>Sau khi qua bài 2, bạn nhả hết côn, phanh cho xe tự bò lên dốc. Về bản chất, bài này
            giống bài 2 ở chỗ dừng xe rồi lại đi tiếp. Nhưng vì xe đang ở trên dốc nên bạn không thể
            đỡ côn cho xe đi chậm lại vì nếu đỡ côn thì xe sẽ bị trôi ngược về chân dốc. Vì thế, chỉ
            có thể nhắm đúng vị trí cần đỗ (qua vạch đỏ trên ta-luy hoặc mặt đường) để đạp côn,
            phanh đúng lúc.</p>
        <p>Nếu như ở bài 2, sau khi dừng xe, để đi tiếp bạn chỉ việc bỏ chân phanh ra rồi mới từ từ
            nhả côn. Nhưng ở bài 3 thì không thể làm như vậy vì xe đang trên dốc, bỏ phanh chân ra
            thì xe sẽ trôi. Do vậy cách xử lý ở bài 3 khác bài 2.</p>
        <br/>
        <p>Có hai cách xử lý:</p>
        <ul>
            <li>Cách 1: Là cách dạy chính thống trong trường. Sau khi xe đã dừng trên dốc, bạn kéo
                phanh tay với mục đích là thay phanh chân giữ xe tại điểm dừng. Khi đó, bạn có thể
                bỏ chân phanh ra và đặt vào chân ga mớm lên. Đồng thời chân trái nhả côn từ từ, đến
                khi thấy tay lái hoặc cần số rung lên (báo hiệu các lá côn đã bắt vào nhau) thì nhả
                nhẹ phanh tay, nghe ngóng nếu thấy xe không trượt thì thả nốt phanh tay, xe sẽ tự bò
                lên.
            </li>
            <li>Cách 2: Là cách các lái già thường làm trong thực tế, không dùng đến phanh tay.<br/>Sau
                khi canh cho núm cửa gần tới ngang cọc biển báo vạch xe dừng thì bạn đạp côn, thắng
                dừng xe.<br/>Sau đó bạn nhả côn từ từ (thật chậm), đến khi thấy tay lái hoặc cần số
                rung rung thì nhả nhẹ phanh chân, nghe ngóng. Nếu cảm thấy xe trôi thì đạp phanh
                vào, làm lại. Nếu thấy xe không trượt thì thả cho hết phanh chân, xe sẽ tự bò lên.
                Nếu nhả hết phanh chân mà xe vẫn đứng yên thì tiếp vào chân ga một chút, đồng thời
                hơi nhả côn ra thêm. (Chú ý nếu nhả côn nhanh quá xe có thể bị tắt máy (bị trừ
                điểm). Bạn phải nhanh chóng đề xe lại và tiếp tục bài)Khi xe đã đi thì giữ nguyên vị
                trí chân côn và ga cho đến khi xe qua khỏi đỉnh dốc.<br/>Nhiều người mới học lại
                thấy cách làm này dễ hơn cách 1, vì không cần dùng đến phanh tay mà chỉ tập trung
                vào hai chân điều chỉnh côn, phanh (thực tế khi hạ phanh tay, những người chưa quen
                có thể bị choạng tay lái hoặc ấn mạnh vào bàn đạp ga làm rú ga).
            </li>
        </ul>
        <div class="alert alert-danger">
            <strong>Chú ý:</strong> Vì bài này nếu để xe quá vạch quy định bị loại luôn, để an toàn
            các bạn nên cho dừng xe sớm trước vạch chấp nhận bị trừ 5 điểm.
        </div>
        <p/><a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai4">
    <div class="container">
        <h3>Bài 4 – Đi xe qua hàng đinh vuông góc - chữ Z</h3>
        <p>Yêu cầu của bài này là 2 bánh xe bên phải phải đi lọt qua một vạch đường có bề rộng
            khoảng 30-35cm ( dấu B). Mỗi lần bánh xe chạm vạch sẽ bị trừ 5 điểm, bánh xe đè vạch cứ
            5s bị trừ 5 điểm ( quá 2 phút chưa qua bài bị trừ 5 điểm)</p>
        <p>Khi rẽ vào đường hàng đinh bạn nên đánh lái muộn một chút để xe áp sát lề đường bên phải.
            Đi thật chậm và nhìn
            gương phải để quan sát bánh xe phía sau. Các sân thi cũng như sân tập thường kẻ sẵn vạch
            dẫn đường. Vạch
            này bằng mép ngoài hàng đinh, vì vậy nếu bánh xe cách vạch đó khoảng 10-15cm thì xe sẽ
            đi qua hàng đinh mà
            không chạm mép 2 bên.</p>
        <p>Ngoài việc nhìn gương phải, bạn phải căn và bám vào một điểm mốc ở phía trước, thường là
            một vạch dánh dấu trên
            lể đường trước mặt vì có khi lúc đầu xe đi đúng khoảng cách với vạch căn bên phải nhưng
            sau đó do giữ lái
            không tốt nên xe bị chệch hướng.</p>
        <div class="alert alert-danger">
            <strong>Chú ý:</strong> Nếu bánh xe bên phải đi ngoài hàng đinh thì sẽ bị loại.
        </div>
        <p>Sau khi đi qua hàng đinh, bạn thấy gương chiếu hậu ngang với góc bên trái thì đánh hết
            lái sang trái, đồng thời
            quan sát gương chiếu hậu và trả lái phù hợp để thành xe song song với vạch giới hạn và
            cách 30-40cm khi song
            song thì trả thẳng lái tiến đến góc vuông thứ 2.</p>
        <p>Quan sát khi thấy gương chiếu hậu bên phải ngang với góc thứ 2, dánh hết lái sang phải và
            trả thẳng lái tiến
            ra khỏi hình.</p>
        <p>Để có thể đánh hết lái và trả thẳng lái cho nhanh, trong quá trình học bạn nên tập thuần
            thục động tác….. quay
            tay! (xoay vô lăng).</p>
        <p>Đặc biệt chú ý trong bài này <strong class="text-danger">phải vê côn để xe đi thật
            chậm</strong> mới đánh lái
            kịp.</p>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai5">
    <div class="container">
        <h3>Bài 5. Qua ngã 4 có tín hiệu điều khiển giao thông</h3>
        <p>Yêu cầu phải chấp hành nghiêm tín hiệu giao thông, dừng xe cách vạch dừng quy định không
            quá 0,5m, đi ngang ngã
            4 trong thời gian 20s, nếu:</p>
        <ul>
            <li>Đi qua ngã 4 khi đèn đỏ bị trừ 10 điểm.</li>
            <li>Dừng xe cách vạch hoặc quá vạch trên 0,5m bị trừ 5 điểm, chết máy mỗi lần trừ 5
                điểm.
            </li>
            <li>Không bật xi nhan trái qua ngã 4, xi nhan phải khi qua ngã 4 rẽ phải bị trừ 5
                điểm.
            </li>
            <li>Không thực hiện đúng quy trình bài thi bị trừ 5 điểm.</li>
            <li>Tốc độ vòng quay quá 4000 vòng/phút thì cứ 3s bị trừ 1 điểm.</li>
        </ul>
    </div>
</section>
<section id="bai6">
    <div class="container">
        <h3>Bài 6. Đi xe qua đường vòng quanh co (chữ S)</h3>
        <p>Yêu cầu của bài này giống bài 5 (mỗi lần bánh xe chạm vạch trừ 5 điểm).</p>
        <p>Khác với bài 5, do chữ S là đường cong liên tục nên bạn phải điều chỉnh tay lái theo
            đường cong.</p>
        <p>Các lái xe có câu "Tiến bám lưng, lùi bám bụng", có nghĩa là khi xe vào đường cua (ôm
            cua) nên căn theo phía
            đường cong dài hơn.</p>
        <p>Như vậy, khi vào đường chữ S, bạn cho xe bám sát về bên phải, đánh lái sang trái cho xe
            đi nửa vòng cua đầu tiên,
            sau đó lại bám sang lề đường bên trái, trả lái và đánh lái sang phải cho xe qua nốt nửa
            vòng cua còn lại.</p>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai7">
    <div class="container">
        <h3>Bài 7. Ghép xe vào nơi đỗ (lùi vào nhà xe)</h3>
        <p>Yêu cầu của bài này là trong vòng 2 phút bạn phải cho xe lùi được vào nơi đỗ (nhà xe),
            không chạm vạch và tiến
            ra khỏi nhà xe.</p>
        <h4>Các lỗi:</h4>
        <ul>
            <li>Mỗi lần bánh xe chạm vạch trừ 5 điểm (mỗi 2 giây)</li>
            <li>Quá thời gian 2 phút trừ 5 điểm (Mỗi 2 phút trừ 5 điểm)</li>
            <li>Bánh xe không chạm được vạch kiểm tra cuối nhà xe bị loại (Máy không báo)</li>
            <li>Không hạng xe bị loại (nhầm nhà xe hạng xe khác)</li>
        </ul>
        <p>Khi bắt đầu rẽ vào khu vực nhà xe, bám sát lề đường bên trái cách khoảng (30 cm – 50cm).
            Đi chậm(Số 1) khi (vai
            người lái) đi ngang qua cửa nhà xe thì đánh hết lái về bên phải, tiếp tục cho xe tiến
            lên khi thấy thân xe
            có góc khoảng 40-45 độ so với đường ngang cửa nhà xe thì trả thẳng lái và dừng lại trước
            vạch giới hạn.</p>
        <p>Sau đó nhìn kiếng chiếu hậu bên trái quan sát phía sau (bánh xe, thân xe và góc nhà xe) -
            xem thế xe rồi vào
            số lùi, tùy theo thế xe “lơi “ hay “dốc “ mà ta đánh tay lái sang trái nhiều hay ít,
            điều chỉnh sau cho bánh
            xe sau khi lùi vào cách góc nhà xe khoảng 10-15 cm – khi bánh xe sắp đến góc nhà xe thì
            đánh nhiều lái sang
            trái cho xe lùi vào bên trong nhà xe – quan sát thấy thành xe, bánh xe song song với nhà
            xe và cách vạch
            giới hạn 20cm -30 cm thì trả thẳng lái và lùi vào cho đến khi bánh xe sau đè lên vạch
            kiểm tra và nghe máy
            báo “Đã kiểm tra“ thì dừng lại.</p>
        <p>Cài số 1 và tiến ra khỏi nhà xe.Lưu ý khi tiến ra, người phải ra khỏi cửa nhà xe hoặc hơn
            một chút nữa bạn hãy
            đánh lái rẽ sang phải để tránh trường hợp bánh sau chưa ra khỏi cửa nhà xe mà đã rẽ sẽ
            bị chèn vạch, trừ
            điểm. Nếu lỡ lùi chưa chính xác, đuôi xe cách xa cửa nhà xe, có thể chèn lên vạch hoặc
            vỉa ba-toa, bạn cứ
            bình tĩnh về lại số 1, tiến lên phía trước, đánh lái sao cho xe ở vào vị trí thẳng trước
            cửa nhà xe, sau
            đó vào số lùi để làm lại việc lùi vào nhà xe. (Gọi là lùi xe 2 đỏ)</p>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai8">
    <div class="container">
        <h3>Bài 8. Dừng xe nơi giao nhau với đường sắt</h3>
        <p>Yêu cầu và thực hành của bài này giống bài 2.</p>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai9">
    <div class="container">
        <h3>Bài 9. Tăng tốc, tăng số</h3>
        <p>Yêu cầu của bài này là phải lên được số 2 và đạt tốc độ trên 20 km/h trước biển báo 20
            màu xanh (biển báo tốc
            độ tối thiểu phải đạt 20 km/h), sau đó lại phải về số 1 và giảm tốc độ xuống dưới 20
            km/h trước biển báo
            20 màu trắng (biển báo tốc độ tối đa không quá 20 km/h).
        </p>
        <p>Sau khi qua nơi giao nhau với đường sắt, bạn rẽ sang đường chuẩn bị tăng tốc. Chỉnh lái
            cho xe thẳng, giữ chắc
            tay lái, nhả hết côn, phanh. Qua biển "Tăng số, tăng tốc" (Bảng vuông) Nhấn ga để xe
            tăng tốc,rồi khẩn trương
            sang số 2, tiếp tục nhấn ga tiếp (nữa ga là đủ đạt tốc độ). Qua biển 20 màu xanh,nhả ga,
            rà phanh, cho xe
            đi chậm lại, thậm chí dừng hẳn, về số 1 từ từ để xe đi qua biển 20 màu trắng.</p>
        <div class="alert alert-danger">
            <strong>Chú ý:</strong> Bạn không được cắt côn để xe trôi từ từ qua biển 20 màu trắng,
            vì yêu cầu ở đây là
            bạn phải đi qua biển này khi xe có gài số. Vì thế nếu bạn cắt côn làm bánh răng số không
            quay thì sẽ bị trừ
            5 điểm.
        </div>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai10">
    <div class="container">
        <h3>Bài 10. Ghép xe ngang - Đỗ xe song song</h3>
        <p>Ghép xe ngang vào nơi đỗ - đỗ xe song song là lùi xe vào nơi cần đỗ khi 2 đầu và 1 mặt
            bên đều bị khóa bởi vật
            cản hoặc những xe khác có chiều dài là 6,45m và rộng 2,2m. Có thể đối với người lái xe
            quen và thường xuyên
            thực hiện bài này thì cực kỳ dễ nhưng hiện bài này đang làm học viên chuẩn bị thi sát
            hạch lái xe bối rối
            và cảm giác lo lắng.</p>
        <h4>Các bước thực hiện:</h4>
        <ul>
            <li>Bước 1: Cặp xe song song với bãi đỗ, cách xe đang đỗ 50-80cm, tiến xe tới khoảng 2/3
                bãi đỗ ( hoặc căn mũi
                xe ngang vạch trên)
            </li>
            <li>Bước 2: Đánh hết lái sang trái, tiến lên từ từ sao cho gương chiếu hậu bên trái +
                thành xe thẳng hàng 1 góc
                45 độ so với bãi đỗ.
            </li>
            <li>Bước 3: Lùi xe từ từ vào bãi cho tới khi gương chiếu hậu bên tay phải ngang với vạch
                giới hạn ngoài, đánh
                hết lái sang trái, lùi xe vô chuồng.
            </li>
            <li>Bước 4: Khi bánh sau bên phải cán lên vạch ngang - trả thẳng lái, chỉnh xe ngay
                ngắn. Hoàn thành bài thi.
            </li>
            <li>Đánh hết lái sang trái, tiến lên ra khỏi chuồng tới các bài thi tiếp theo.</li>
        </ul>
        <h4>Yêu cầu phải đạt được trong bài này:</h4>
        <ul>
            <li>Không được đè vạch cảm ứng giới hạn trong bài thi.</li>
            <li>Không vượt quá 2 phút trong bài thi này.</li>
            <li>Giữ vòng tua máy không quá 4000 vòng/ phút.</li>
            <li>Không bị tắt máy trong quá trình thực hiện bài tập và tốc độ không quá 24km.</li>
        </ul>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai11">
    <div class="container">
        <h3>Bài 11. Kết thúc</h3>
        <p>Yêu cầu của bài này là đi thẳng qua vạch kết thúc, trước đó phải bật đèn xi-nhan phải
            (với ý nghĩa là xe tấp
            vào lề đường bên phải, chuẩn bị dừng hoặc đỗ xe).
        </p>
        <p>Sau khi vòng qua ngã tư lần cuối cùng, bạn chỉnh xe cho thẳng và để xe đi từ từ về vạch
            xuất phát. Bật xi-nhan
            bên phải. Chú ý sau khi đã bật xi-nhan thì giữ thẳng tay lái, không đánh lái sang trái
            sẽ làm tắt đèn xi-nhan,
            mất điểm. Để cho chắc ăn, bạn có thể dùng ngón giữa tay trái giữ cần xi-nhan để không
            cho cần này bật xuống,
            hoặc hơi đánh lái sang phải một chút.
        </p><a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<section id="bai12">
    <div class="container">
        <h3>Bài phụ: Dừng xe nguy hiểm</h3>
        <p>Có 3 điểm xuất hiện bài thi phụ bao gồm:</p>
        <ul>
            <li>Qua ngã tư đèn xanh, đèn đỏ vào đoạn đường trước khi rẽ trái vào bài 8.</li>
            <li>Sau khi qua khỏi bài 9 và rẽ trái vào đoạn đường tiếp theo.</li>
            <li>Đoạn đường trước khi đến ngã tư để vào bài 10.</li>
        </ul>
        <p>Khi xe đi qua một số vị trí trên tuyến đường thi (một trong các vị trí trên), loa trong
            xe có thể vang lên "Dừng
            xe nguy hiểm! Dừng xe nguy hiểm!". Khi nghe hiệu lệnh này, bạn nhanh chóng dừng hẳn xe,
            ấn vào nút đèn báo
            hiệu nguy hiểm (nút có vẽ hình tam giác). Khi nào loa hết hiệu lệnh trên thì nhẩm từ 1
            đến 5 sau đó ấn nút
            lần nữa để tắt đèn và đi tiếp.
        </p>
        <p>Bài thi này chỉ xuất hiện một lần ở một trong ba điểm nêu trên.</p>
        <a href="#tableOfContents">Về đầu trang</a>
    </div>
</section>
<script>
        $('.nav a').on('click', function(){ 
            $('.navbar-toggle').click()
        });

</script>
</body>

</html>
`
const TipsPractice = () => {

    return (

        <WebView
            originWhitelist={['*']}
            source={{ html: HTML }}
            automaticallyAdjustContentInsets={false}
        />

    );
};

export default TipsPractice;

