$(function () {
  const domainList = [
    'au.com',
    'augps.ezweb.ne.jp',
    'biz.ezweb.ne.jp',
    'disney.ne.jp',
    'docomo.ne.jp',
    'dwmail.jp',
    'emnet.ne.jp',
    'emobile-s.ne.jp',
    'emobile.ne.jp',
    'excite.co.jp',
    'ezweb.ne.jp',
    'gmail.com',
    'googlemail.com',
    'hotmail.co.jp',
    'hotmail.com',
    'i.softbank.jp',
    'icloud.com',
    'ido.ne.jp',
    'jp-c.ne.jp',
    'jp-d.ne.jp',
    'jp-h.ne.jp',
    'jp-k.ne.jp',
    'jp-n.ne.jp',
    'jp-q.ne.jp',
    'jp-r.ne.jp',
    'jp-s.ne.jp',
    'jp-t.ne.jp',
    'live.jp',
    'me.com',
    'mineo.jp',
    'mopera.net',
    'nifty.com',
    'outlook.com',
    'outlook.jp',
    'pdx.ne.jp',
    'sky.tkc.ne.jp',
    'sky.tkk.ne.jp',
    'sky.tu-ka.ne.jp',
    'softbank.ne.jp',
    'uqmobile.jp',
    'vodafone.ne.jp',
    'wcm.ne.jp',
    'willcom.com',
    'y-mobile.ne.jp',
    'yahoo.co.jp',
    'yahoo.ne.jp',
    'ybb.ne.jp',
    'ymobile.ne.jp',
    'ymobile1.ne.jp',
  ];

  // suggestの一覧を表示
  // ======================
  let tmp1 ='';
  const domainViewList = domainList.map((e)=> {
    tmp1 += `<li>${e}</li>`;
  });
  $('#suggestList').html(tmp1);

  const result = $("#result");
  $("#mail").on("keyup", function (e) {
    let _self = $(this).val().trim();
    let index = _self.search(/[@＠]/);
    let user = _self.substring(0, index);

    // @が含まれるとき
    if (index > 0) {
      let domainInput = _self.substring(index + 1);
      let tmp = "";

      // @マーク以降を評価
      if (domainInput.length > 0) {
        for (let domain of domainList) {
          // ドメインリスト内にマッチする文字列があればdomainに代入
          domain = domain.indexOf(domainInput) === 0 ? domain : null;
          if (domain) {
            tmp += `<li class="suggestItem">${domain}</li>`;
          }
        }

        // 描画
        result.html(tmp);
      }
    }
  });

  $(document).on("click", ".suggestItem", function () {
    let _self = $(this).text();
    let target = $("#mail").val();
    let index = target.indexOf("@");
    let user = target.substring(0, index);

    // ユーザ@ドメイン で連結
    $("#mail").val(user + "@" + _self);
    // 初期化
    result.html("");
  });

  let clickCount = 0;
  $('#viewMore').on('click', function(){
    let listHeight = $('#suggestList').innerHeight();
    if(clickCount < 3) {
      clickCount++;
      $('#suggestList').css('height', listHeight + 504);
    } else {
      $(this).hide();
    }
    
  });
});
