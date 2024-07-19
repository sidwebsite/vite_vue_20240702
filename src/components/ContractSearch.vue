<template>
    <div class="row no-gutters select-group">
        <div class="col-md-6">
            <div class="select">
                <label>廠牌</label>
                <select id="brand" class="wide" aria-label="時間">
                    <option value="1">所有廠牌</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="select d-flex align-items-center">
                <div class="input-group">
                    <input type="text" class="form-control border-0 px-0 bg-transparent" placeholder="請輸入關鍵字">
                    <button type="button" class="btn input-group-text" id=""><i class="fa-regular fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
