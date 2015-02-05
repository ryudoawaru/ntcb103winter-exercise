// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

// Define then the messages
window.ParsleyConfig.i18n.zh_tw = $.extend(window.ParsleyConfig.i18n.zh_cn || {}, {
  defaultMessage: "不正確的值",
  type: {
    email:        "請輸入一個有效的電子郵箱地址",
    url:          "請輸入一個有效的鏈接",
    number:       "請輸入正確的數字",
    integer:      "請輸入正確的整數",
    digits:       "請輸入正確的號碼",
    alphanum:     "請輸入字母或數字"
  },
  notblank:       "請輸入值",
  required:       "不可為空",
  pattern:        "格式不正確",
  min:            "輸入值請大於或等於 %s",
  max:            "輸入值請小於或等於 %s",
  range:          "輸入值應該在 %s 到 %s 之間",
  minlength:      "請輸入至少 %s 個字符",
  maxlength:      "請輸入至多 %s 個字符",
  length:         "字符長度應該在 %s 到 %s 之間",
  mincheck:       "請至少選擇 %s 個選項",
  maxcheck:       "請選擇不超過 %s 個選項",
  check:          "請選擇 %s 到 %s 個選項",
  equalto:        "輸入值不同"
});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('zh_cn', window.ParsleyConfig.i18n.zh_cn, true);
    