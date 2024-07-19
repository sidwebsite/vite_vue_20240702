<template>
    <div class="container position-relative">
        <!-- background images start -->
        <span class="contact_bg position-absolute">
            <img src="../assets/images/contact/contact_bg.svg" alt="" class="d-none d-lg-block">
            <img src="../assets/images/contact/contact_phone_bg.svg" alt="" class="d-block d-lg-none">
        </span>
        <!-- background images end -->
        <h1 class="page-title text-white">聯繫我們</h1>
        <div class="bg-white-80 border border-white backdrop-blur-60 pt-5 pb-9 mx-xs-1_5">
            <div class="mw-760">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>聯絡人姓名</label>
                        <input type="text" class="form-control" id="" placeholder="請輸入聯絡人姓名" required>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>公司名稱</label>
                        <input type="text" class="form-control" id="" placeholder="請輸入公司名稱" required>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>電子信箱 Email</label>
                        <input type="email" class="form-control" id="" placeholder="請輸入電子信箱 Email" required>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>聯絡電話（分機請加上#）</label>
                        <input type="text" class="form-control" id="" placeholder="請輸入聯絡電話" required>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>部門</label>
                        <select class="form-select">
                            <option selected>請選擇部門</option>
                            <option value="1">資訊系統/技術</option>
                            <option value="2">銷售</option>
                            <option value="3">公關/行銷</option>
                            <option value="4">電子商務</option>
                            <option value="5">財務/會計</option>
                            <option value="6">客服/支援</option>
                            <option value="7">製造/生產</option>
                            <option value="8">硏發</option>
                            <option value="9">管理</option>
                            <option value="10">採購</option>
                            <option value="11">人力資源</option>
                            <option value="12">工程</option>
                            <option value="13">法務</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>職務</label>
                        <select class="form-select">
                            <option selected>請選擇職務</option>
                            <option value="1">執行長</option>
                            <option value="2">資訊長</option>
                            <option value="3">營運長</option>
                            <option value="4">科技長</option>
                            <option value="5">行銷長</option>
                            <option value="6">財務長</option>
                            <option value="7">協理</option>
                            <option value="8">初/中階主管</option>
                            <option value="9">科長/課長</option>
                            <option value="10">董事會成員</option>
                            <option value="11">IT/MIS主管</option>
                            <option value="12">IT/MIS工程師</option>
                            <option value="13">IT-多重角色</option>
                            <option value="14">研發/技術/軟體主管</option>
                            <option value="15">專員/專業人員</option>
                            <option value="16">業務代表</option>
                            <option value="17">技術/商業顧問</option>
                            <option value="18">法務主管/人員</option>
                            <option value="19">行政人員</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label">公司統一編號</label>
                        <input type="text" class="form-control" id="" placeholder="請輸入公司統一編號" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="" class="form-label"><span>*</span>行業別</label>
                        <select class="form-select">
                            <option selected>請選擇行業別</option>
                            <option value="1">生技</option>
                            <option value="2">貿易百貨</option>
                            <option value="3">個人</option>
                            <option value="4">銀行</option>
                            <option value="5">證券</option>
                            <option value="6">保險</option>
                            <option value="7">金融業其他</option>
                            <option value="8">醫療</option>
                            <option value="9">資訊服務</option>
                            <option value="10">通信網路</option>
                            <option value="11">教育服務</option>
                            <option value="12">政府機關</option>
                            <option value="13">半導體業</option>
                            <option value="14">電腦週邊</option>
                            <option value="15">光電業</option>
                            <option value="16">電子零組件</option>
                            <option value="17">汽車工業</option>
                            <option value="18">製造業其他</option>
                            <option value="19">鋼鐵工業</option>
                            <option value="20">造紙工業</option>
                            <option value="21">塑膠工業</option>
                            <option value="22">化學工業</option>
                            <option value="23">紡織纖維</option>
                            <option value="24">電機機械</option>
                            <option value="25">食品工業</option>
                            <option value="26">運輸</option>
                            <option value="27">電子通路</option>
                            <option value="28">觀光餐飲</option>
                            <option value="29">專業服務</option>
                            <option value="30">建材營造</option>
                            <option value="31">水電/石油/燃氣供應業</option>
                            <option value="32">礦業及士石採取業</option>
                            <option value="33">文化創意業</option>
                            <option value="34">電子商務</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label"><span>*</span>資安預算</label>
                        <select class="form-select">
                            <option selected>請選擇資安預算</option>
                            <option value="1">100萬以下</option>
                            <option value="2">100萬~200萬</option>
                            <option value="3">200萬~300萬</option>
                            <option value="4">300萬以上</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="" class="form-label">貴公司資安專責人編制</label>
                        <select class="form-select">
                            <option selected>請選擇</option>
                            <option value="1">1~3人</option>
                            <option value="2">3~6人</option>
                            <option value="3">6~10人</option>
                            <option value="4">10人以上</option>
                        </select>
                    </div>
                    <div class="col-12 mb-3 fs-6">諮詢項目</div>
                    <div class="col-md-6 mb-3">
                        <label for="" class="form-label">資安法相關</label>
                        <select class="form-select">
                            <option selected>請選擇</option>
                            <option value="滲透測試">滲透測試</option>
                            <option value="弱點掃描">弱點掃描</option>
                            <option value="原始碼檢測">原始碼檢測</option>
                            <option value="APP 資安檢測">APP 資安檢測</option>
                            <option value="資通安全健診">資通安全健診</option>
                            <option value="政府組態基準 GCB">政府組態基準 GCB</option>
                            <option value="資安監控維運服務-MOC">資安監控維運服務-MOC</option>
                            <option value="社交工程演練-HEIS">社交工程演練-HEIS</option>
                            <option value="電子郵件過濾-SESC">電子郵件過濾-SESC</option>
                            <option value="系統資源監測-SRMAS">系統資源監測-SRMAS</option>
                            <option value="資通安全弱點通報-SIVAS">資通安全弱點通報-SIVAS</option>
                            <option value="日誌管理系統-LUCAS">日誌管理系統-LUCAS</option>
                            <option value="資通安全威脅偵測管理-SOC">資通安全威脅偵測管理-SOC</option>
                            <option value="代理產品相關">代理產品相關</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="" class="form-label">代理產品</label>
                        <select class="form-select">
                            <option selected>請選擇代理產品</option>
                            <option value="CELLOPOINT">CELLOPOINT</option>
                            <option value="Delinea">Delinea</option>
                            <option value="eLock">eLock</option>
                            <option value="ENTRUST">ENTRUST</option>
                            <option value="Illumio">Illumio</option>
                            <option value="Invicti">Invicti</option>
                            <option value="NEITHNET">NEITHNET</option>
                            <option value="OPSWAT">OPSWAT</option>
                            <option value="RAPID7">RAPID7</option>
                            <option value="SecurityScorecard">SecurityScorecard</option>
                            <option value="Skyhigh">Skyhigh</option>
                            <option value="Tufin">Tufin</option>
                        </select>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="form-check form-check-inline mb-3">
                            <input class="form-check-input" type="radio" id="InfoSec1" value="詢問產品價格" name="InfoSec">
                            <label class="form-check-label" for="InfoSec1">詢問產品價格</label>
                        </div>
                        <div class="form-check form-check-inline mb-3">
                            <input class="form-check-input" type="radio" id="InfoSec2" value="了解產品資訊" name="InfoSec">
                            <label class="form-check-label" for="InfoSec2">了解產品資訊</label>
                        </div>
                        <div class="form-check form-check-inline mb-3">
                            <input class="form-check-input" type="radio" id="InfoSec3" value="索取相關活動" name="InfoSec">
                            <label class="form-check-label" for="InfoSec3">索取相關活動</label>
                        </div>
                        <div class="form-check form-check-inline mb-3">
                            <input class="form-check-input" type="radio" id="InfoSec4" value="預約 POC" name="InfoSec">
                            <label class="form-check-label" for="InfoSec4">預約 POC</label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="radio" id="InfoSec-other" value="" name="InfoSec">
                            <label class="form-check-label" for="InfoSec-other">其他</label>
                        </div>
                        <textarea class="form-control" id="" rows="3" placeholder="請輸入其他諮詢項目"></textarea>
                    </div>
                    <div class="col-12">
                        <div class="text-center mb-4">
                            <button type="button" class="btn btn-contact">聯繫我們</button>
                        </div>
                        <div class="text-center">
                            <RouterLink to="/aboutMap" class="btn-block-primary text-gray-800" title="點我看營業據點">點我看營業據點 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>