
tblĐồGiỗ = '01f20dda670f525894655f0ba414e5cf';
tblGóiGiỗ = 'dc97ae89c735c854c07efeb6c24a4399';
tblMộ = '9ae41c73ace40a7a368ff162fffafd00';
plink = "https://lachongvien.inevn.com/cung-gio-online/";
_mảng = [
    { avt: "/image/noavt.webp", ảnh: "/image/ảnhDemo.jpg", ngày: "14/10/2019 (16/09 âm lịch)", tên: "Cụ PHAN THỊ NHỊ", địaChỉ: "Lô 96 khu D5 đồi Kim" }
];
base64image = '';
idNgườiMất = ''
tiềnVàng = 0;
mảngChọn = []
đồCúng = 0;
cuộnMâm = 0;
tgChờ = 5 * 60;
lưuMâm = 0;
hóaVàng = 0;
spĐãChọn = [];
usage = { id: 59284, cấp: "2", hiểnThị: "Lạc Hồng Viên", phạmVi: "24", quyền: [], sởHữu: null, tên: "admin", ảnh: null };
PI = Math.PI;
$(function () {
    var dai = $(window).width();
    tảiTrước({
        youtube: 1,
        riêng: 1,
        koChờ: true,
        biểuTượng: "/img/logoLHV.png",
        xong: function () {
            // tựBảoVệ();
            CẦN.js("/cunggio.js", function () {
                if (là("U")) {
                    $.post("/xu_ly.php", { action: "thêmSession", option: 2 }, function (id) {
                        if (id <= 0) {
                            tôi.đăngXuất(function () {
                                location.reload();
                            })
                        }
                    })
                }
                var name = location.pathname,
                    màuC = $.đệm("mãMàu"),
                    tìmMộ = {};
                mãMàu = ["#251e1e", "#f6f7f8", $.đệm("mãMàu")];
                function đổiTG1() {
                    var b = iDate(new Date());
                    return b.f + "-" + b.n + "-" + b.j + "T" + b.h + ":" + b.m + ":" + b.s + "+" + "07:00";
                };
                function đổiTG(a) {
                    var b = iDate(a);
                    return b.h + ":" + b.m + ":" + b.s + "  " + b.j + "/" + b.n + "/" + b.f;
                };
                function đổiTG2(a) {
                    var b = iDate(a);
                    return b.j + "/" + b.n + "/" + b.f;
                };

                range(0, 40).map(function (v) {
                    mãMàu.push(màu(1));
                });
                ka = $.đệm("khungẢnh");
                function toDataUrl(src, callback, outputFormat) {
                    var img = new Image(),
                        k = 0;
                    img.onload = function () {
                        var canvas = document.createElement('CANVAS'),
                            ctx = canvas.getContext('2d'),
                            dataURL;
                        canvas.height = this.naturalHeight;
                        canvas.width = this.naturalWidth;
                        ctx.drawImage(this, 0, 0);
                        dataURL = canvas.toDataURL(outputFormat);
                        callback(dataURL);
                        canvas = null;
                    };
                    img.onerror = function () {
                        $.post("/function.isp", { act: "base64image", src: src }, function (e) {
                            if (e) {
                                callback("data:image/png;base64," + e);
                            }
                        })
                    };
                    img.crossOrigin = '*';
                    img.src = src;
                    if (img.complete || img.complete === undefined) {
                        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
                        img.src = src;
                    }
                };
                function đổiTiềnToString1(num) {
                    var số = num.toString();
                }

                function tìmÔ(O, callback) {
                    var kt = 0,
                        data = [],
                        c = $(".sẽChứa"),
                        o = $.extend({
                            cột: 2,
                            dòng: 2
                        }, O),
                        f = function (ob) {
                            $.each(range(0, ob.cột - 1), function (i) {
                                var anhEm = ob.dòng.find(".ô" + (i + ob.index));
                                if (!anhEm.cóLớp("cóRồi") && !anhEm.attr("tách") && anhEm.length) {
                                    ob.data.push(anhEm);
                                } else {
                                    ob.kt = 1;
                                }
                            });
                        }
                    $(".cácDòng").each(function () {
                        var dòng = $(this);
                        dòng.children().each(function () {
                            var ô = $(this),
                                index = ô.index() + 1;
                            if (kt) {
                                data = [];
                            }
                            if (!ô.cóLớp("cóRồi") && !ô.attr("tách")) {
                                if (o.cột * 1 > 1) {
                                    f({
                                        data: data,
                                        index: index,
                                        kt: kt,
                                        cột: o.cột,
                                        dòng: dòng,
                                    });
                                }
                                if (o.dòng * 1 > 1) {
                                    $.each(range(dòng.index() + 1, dòng.index() + (o.dòng - 1)), function (t, v) {
                                        f({
                                            data: data,
                                            index: index,
                                            kt: kt,
                                            cột: o.cột,
                                            dòng: $(".dòng" + (v + 1))
                                        });
                                    })
                                }
                            }
                            if (data.length >= (o.cột * 1) * (o.dòng * 1) - 1) {
                                data.unshift(ô);
                                return false;
                            } else {
                                data = [];
                            }
                        });
                        if (data.length >= (o.cột * 1) * (o.dòng * 1)) {
                            return false;
                        }
                    });
                    if (data.length >= (o.cột * 1) * (o.dòng * 1)) {
                        data.map(function (v) {
                            v.sửaLớp("cóRồi");
                        });
                        callback(data);
                    } else {
                        callback([])
                    }
                };
                đổiNgày = function (a) {
                    var b = iDate(a);
                    return c = b.d + " - " + b.j + " / " + b.n + " / " + b.f;
                };
                lênĐầu = function () {
                    $('html,body').animate({
                        scrollTop: 0,
                    })
                };
                thêmDanhSáchMộ = function (input) {
                    var mảng = input;
                    cl(mảng.length)
                    for (k in mảng) {
                        cl(mảng[k][0]);
                    }
                };
                đổiTiềnToNumber = function (txt) {
                    var num = txt.replace(/\D/g, '');
                    return pI(num);
                };
                đổiTiềnToString = function (num) {
                    var số = num.toString();
                    return số.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                };
                bàiViếtLiênQuan = function (v) {
                    return $("<div>", { class: "cb ptb5" }).append(
                        $("<div>", { class: "fl w30  mr10" }).append(
                            $("<div>", { class: "pb43" }).css({ background: "url('" + v.a + "') center/cover" })
                        ),
                        $("<div>", { class: "plr10 vat oh" }).append(
                            $("<div>", { text: v.t.cắt(80) })
                        )
                    )
                };
                //?
                tảiBảnĐồ = function (dai) {
                    return $("<div>", { class: "mlra tac bgcfx", id: "bando", style: "" }).append(
                        $("<div>", { class: "ptb25 pb50", style: "" }).append(
                            $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                            ),
                            $("<div>", { class: "fs2 fs12-xs lh1 ttu" + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", style: "", text: "Liên hệ" }),
                            $("<div>", { class: "fs12 mc1", text: "Công viên tâm linh Lạc Hồng Viên" }),
                            $("<div>", { class: "divider green" }),
                            $("<div>", { class: "grid w90 mlra tac mlra mt25" + (dai > 700 ? " df jcsa" : "") }).append(
                                $("<div>", { class: "col-md-5 col-sm-5 col-xs-0 vat" + (dai > 700 ? " plr35" : " plr10") }).append(
                                    $("<div>", { class: "bgcf ptb15 bencanh wh1 pr" }).append(
                                        $("<div>", { class: "plr25 grid pa w1 tl50 tt" }).append(
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1 mc1 tac", text: "Những mục đánh dấu (*) là những mục bắt buộc phải điền thông tin" })
                                            ),
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1", text: "Email liên hệ (*)" }),
                                                $("<input>", { class: "w1 mt5 pa5 bra3 bcd email" })
                                            ),
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1", text: "Tên liên hệ (*)" }),
                                                $("<input>", { class: "w1 mt5 pa5 bra3 bcd tên" })
                                            ),
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1", text: "Địa chỉ" }),
                                                $("<input>", { class: "w1 mt5 pa5 bra3 bcd địachỉ" })
                                            ),
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1", text: "Số điện thoại" }),
                                                $("<input>", { class: "w1 mt5 pa5 bra3 bcd sđt" })
                                            ),
                                            $("<div>", { class: "w1 tal mt15" }).append(
                                                $("<div>", { class: "w1", text: "Nội dung liên hệ (*)" }),
                                                $("<input>", { class: "w1 mt5 pa5 bra3 hmn1 bcd nd" })
                                            ),
                                            $("<div>", { class: "w1 tar mt15 pl10" }).append(
                                                $("<div>", { class: "plr10 bấmĐc ptb7 cf dib", style: "background:#f9a36b", text: "Gửi Thông Tin" }).on("click", function () {
                                                    //cl(now())
                                                    var t = $(this),
                                                        e = $(".email").iVal(),
                                                        te = $(".tên").iVal(),
                                                        d = $(".địachỉ").iVal(),
                                                        s = $(".sđt").iVal(),
                                                        n = $(".nd").iVal();
                                                    if (e == "" || te == "" || n == "") {
                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                    } else {
                                                        xửLý("đốiTượng.tạo.5a58844cf2b19d53bbbb6e5e8ccb3abb", function (doituong) {
                                                            xửLý("thuộcTính.sửa.5a58844cf2b19d53bbbb6e5e8ccb3abb", { d: Je([doituong, { "220108": e, "220109": te, "220110": d, "220111": s, "220112": n, "223206": now().u }]) }, function (them) {
                                                                if (them == 1) {
                                                                    notice({ t: "Đã gửi liên hệ của khách hàng", loại: true })
                                                                } else {
                                                                    notice({ t: "Kiểm tra lại thông tin nhập", loại: false })
                                                                }
                                                            })
                                                        })
                                                    }
                                                })
                                            )
                                        )
                                    )
                                ),
                                $("<div>", { class: "col-md-7 col-sm-7 col-xs-12 fni vat bando" + (dai > 700 ? " plr35" : " plr10") }).append(
                                    $("<div>", { class: "fs12 mb10 fs09-xs", text: "Bản đồ đường đến Công ty ĐTXD & TM Toàn Cầu" }),
                                    $("<div>", { class: " pb10" + (dai > 700 ? " h50" : " mt25") }).html(
                                        '<iframe id="zutub" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119135.25744463908!2d105.812701!3d21.073589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4285553579046692!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gxJBUWEQgdsOgIFRNIFRvw6BuIEPhuqd1!5e0!3m2!1svi!2sus!4v1570417913997!5m2!1svi!2sus" width="100%" height="250px"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
                                    ),
                                    $("<div>", { class: "fs12 fs09-xs mt10", text: "Bản đồ đường đến dự án Lạc Hồng Viên" }),
                                    $("<div>", { class: " pt10" + (dai > 700 ? " h50" : " mt15") }).html(
                                        '<iframe id=zutub1 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59630.27690522021!2d105.453591!3d20.916652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d5f483e90453e15!2zTmdoxKlhIHRyYW5nIEzhuqFjIEjhu5NuZyBWacOqbg!5e0!3m2!1svi!2sus!4v1570789847487!5m2!1svi!2sus" width="100%" height="250px"frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
                                    )
                                )
                            )
                        )
                    )
                };
                tảiThêm = function (id, thẻ) {
                    var cuối = thẻ.find("a").last(),
                        vịTrí = cuối.offset().top,
                        cuốiCao = cuối.outerHeight(),
                        cuốiId = cuối.attr("id"),
                        cuộn = $(window).scrollTop();
                    if (cuộn >= vịTrí + cuốiCao) {
                        CẦN.db("bàiViết." + cuốiId, function (e) {
                            xửLý("bàiViết.tải.6", { d: Je({ ụ: id, ko: cuốiId }), e: "<" + e.ấ }, function (data) {
                                if (!empty(data)) {
                                    data.map(function (v1, vt1) {
                                        thẻ.append(
                                            $("<a>", { id: v1, href: dữLiệu.url(v1, "ế"), class: (dai > 700 ? " w33 pa15 vat bấmĐc" : " w50 pa5") }).append(
                                                $("<div>", { class: "w1 pb43 bgcd ảnh" }).css({ background: "url('" + dữLiệu.ảnh(v1, "ế", "500x") + "') center/cover" }),
                                                $("<div>", { class: "ptb10 mt15 fs09-xs fs13 tduh bấmĐc chữ", text: dữLiệu.tên(v1, "ế").cắt(40) })
                                            )
                                        )
                                    })
                                }
                            })
                        })
                    }
                };
                //cậpNhật.cấuHình(function(d){//#51ab88
                $("body").iStyle(Chíp.làmMàu(["#198244", "#84ceb1", "#eae0e0", "#282a2bc2"]), "làmMàu");
                window.onpopstate = function () {
                    vàoURL();
                };
                // đây là đoạn đổi url
                $.each({
                    xửLý: "https://xhr.inevn.com/xửLý",
                    0: function () {
                        //cl(name);
                        //the video
                        lênĐầu();
                        $("#phim").sửaLớp("-dn");
                        $("#body").empty().append(
                            //video
                            $("<div>", { id: "phim", class: "pr" }).append(
                                $("<div>", { class: "pb169 pr oh", classM: "pb169,-pb249" }).append(
                                    $("<div>", { class: "bgcd ol" }).html(
                                        tôi.lấy("i") == 59260 ? $("<mp4>", { id: "tIoRWT0PKk8", class: "ol", src: "youtube" }).change().chờ(function () {
                                            $(this).click();
                                        }, 2000) : '<video style="object-fit:fill;width:100%" autoplay controls loop muted playsinline src="upload/video1-banner.mp4" type="video/mp4"></video>',
                                    ),
                                    // $("<div>",{class:"ol db thevideo",id:"thevideo"}),
                                    // $("<div>",{class:"pa tl50 tt z9 fs25 bgc03 dn cf pa15  bra50",icon:"volume_up"}).each(function(){
                                    // 	var t = $(this);
                                    // 	setInterval(function(){
                                    // 	    t.fadeIn(500);
                                    // 	    chờ(function(){
                                    // 	    	t.fadeOut(500);
                                    // 	    },500)
                                    // 	},10000);
                                    // })

                                    // .on("click",function(){
                                    // 	var t = $(this);
                                    // 		tắt = t.hasClass("trậttự");
                                    // 	if(tắt){
                                    // 		t.sửaLớp("-trậttự");
                                    // 		play.unMute();
                                    // 		play.playVideo();
                                    // 	} else {
                                    // 		t.sửaLớp("trậttự");
                                    // 		play.mute();
                                    // 		play.playVideo();
                                    // 	}
                                    // }),
                                    // $("<div>",{class:"pa wh1 z7 tl50 tt đèlên dn-xs",style:"background:url('img/nen31.JPG') center/cover"})
                                )
                                //.thayVideo()
                            ),
                            //Giới thiệu
                            $("<div>", { class: " mlra" + (dai > 700 ? " plr15 w90" : "") }).append(
                                $("<div>", { class: " bgcfx grid " + (dai > 700 ? " plr15 ptb50 mt25" : " plr10 ptb15") }).append(
                                    $("<div>", { class: "grid pl35 pt25" + (dai > 700 ? " w60" : " w1") }).append(
                                        $("<div>", { class: "w35 bg1 pr z1 bóng", style: "transform:scale(1.2,1.8)" }).append(
                                            $("<div>", { class: "pb43 w1" }).append(
                                                $("<div>", { class: "pai tl50 tt" + (dai > 700 ? " w80" : " w90"), style: "" }).css({
                                                    // fontFamily:"cursive"
                                                    fontVariant: "petite-caps"
                                                }).append(
                                                    $("<div>", { class: "tal fsi cf" + (dai > 700 ? " fs15" : " fs07"), classM: "-fs15", text: "'Lạc Hồng Viên" }),
                                                    $("<div>", { class: "tar mt10 fsi cf" + (dai > 700 ? " fs13" : " fs06"), classM: "-fs13", text: "Trọn Một Chữ Tình'" })
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "w50 bss bcf bw2 bra3 bóng z7", style: "transform:scale(0.9,1.1)" }).append(
                                            $("<div>", { class: "pb43 w1" }).css({ background: "url('img/anh5.jpg') center/cover" })
                                        ),
                                        $("<div>", { class: "w40 bss bcf bw2 bra3 bóng z5", style: "transform:scale(.9,1.2)" }).append(
                                            $("<div>", { class: "pb43 w1" }).css({ background: "url('img/anh6.jpg') center/cover" })
                                        ),
                                        $("<div>", { class: "w35 bss bcf bw2 bra3 bóng z7", style: "transform:scale(1.2,1.1)" }).append(
                                            $("<div>", { class: "pb43 w1" }).css({ background: "url('img/anh7.jpg') center/cover" })
                                        )
                                    ),
                                    $("<div>", { class: "vat " + (dai > 700 ? " w40 ml-4" : " w1 tac pt25 plr10"), style: "text-align:justify" }).append(
                                        //??
                                        $("<div>", { class: " mt25 mb35 grid " + (dai > 700 ? "" : " tac") }).append(
                                            $("<a>", { href: "c/4593/Gioi-thieu", class: "fs2 mc1 lh1 bấmĐc ttu", text: "Giới thiệu" }),
                                            (là("U") ?
                                                $("<div>").append(
                                                    $("<div>", { class: "ml15 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth dib", icon: "edit" }).on("click", function () {
                                                        var t = $(this),
                                                            b = config("bàiViết.46930");
                                                        khung(
                                                            $("<div>", { class: "pa35 bgcf " }).append(
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(b.ê)
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 noidung" }).soạnThảo({
                                                                        cỡ: 15,
                                                                        html: true,
                                                                        sẵn: b.ộ
                                                                    })
                                                                ),
                                                                $("<div>", { class: "tar" }).append(
                                                                    $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                                        var t = $(this),
                                                                            te = $(".tiêuđề").iVal(),
                                                                            n = $(".noidung").iVal();
                                                                        CẦN.db("bàiViết.46930", function (bài) {
                                                                            t.xửLý("bàiViết.sửa.46930", { d: Je({ ê: te, ộ: n }) }, function (i) {
                                                                                notice(
                                                                                    { t: "Đã cập nhật bài viết", loại: true }
                                                                                );
                                                                                $("#khungThôngBáo").remove();
                                                                                đồngBộ(function () {
                                                                                    xửLý("bàiViết.tải.1", { d: Jd({ ụ: 4881 }) }, function (data) {
                                                                                        var c = config("bàiViết." + data[0]);
                                                                                        $(".lờiđầu").html(c.ộ);
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                )
                                                            )
                                                            , {
                                                                thanh: false,
                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                viền: false,
                                                                koTắt: true
                                                            }
                                                        )
                                                    }).on("mouseenter mouseleave", function (e) {
                                                        var dí = e.type == "mouseenter",
                                                            t = $(this);
                                                        if (dí) {
                                                            t.append(
                                                                $("<div>", { class: "pr t0  chúThích" }).append(
                                                                    $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Tạo bài giới thiệu mới" })
                                                                )
                                                            )
                                                        } else {
                                                            $(".chúThích").remove();
                                                        }
                                                    }),
                                                    $("<div>", { class: "ml15 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth dib", icon: "add" }).on("click", function () {
                                                        khung(
                                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                                $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài giới thiệu:" }),
                                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).append(
                                                                            $("<div>", { class: "pa w1 tac tl50 tt cd làmMàu1", text: "Chọn ảnh đại diện" })
                                                                        ).tảiLên({
                                                                            loại: "ảnh",
                                                                            đổi: function (s) {
                                                                                //console.log(s)
                                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                $(this).attr("id", s[0]);
                                                                                $(".làmMàu1").sửaLớp("dn");
                                                                            },
                                                                            lỗi: function () {
                                                                                $(this).lỗi("Vui lòng thử lại.");
                                                                            }
                                                                        })
                                                                    )
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđềgiớithiệu", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtảgiớithiệu", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nộidunggiớithiệu" }).soạnThảo({
                                                                        cỡ: 15,
                                                                        html: true
                                                                    })
                                                                ),
                                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                                    var t = $(this),
                                                                        te = $(".tiêuđềgiớithiệu").iVal(),
                                                                        d = $(".môtảgiớithiệu").iVal(),
                                                                        n = $(".nộidunggiớithiệu").iVal(),
                                                                        anh = $(".đạidiện").attr("id");
                                                                    if (t == "" || d == "") {
                                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                    } else {
                                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: 4593, ả: anh, ê: te, ô: d, ộ: n }) }, function (e) {
                                                                            if (e > 0) {
                                                                                notice(
                                                                                    { t: "Đăng tin thành công", loại: true }
                                                                                );
                                                                                $("#khungThôngBáo").remove();
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            ),
                                                            {
                                                                thanh: false,
                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                viền: false,
                                                                koTắt: true
                                                            }
                                                        )
                                                    }).on("mouseenter mouseleave", function (e) {
                                                        var dí = e.type == "mouseenter",
                                                            t = $(this);
                                                        if (dí) {
                                                            t.append(
                                                                $("<div>", { class: "pr t0  chúThích" }).append(
                                                                    $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Sửa bài giới thiệu" })
                                                                )
                                                            )
                                                        } else {
                                                            $(".chúThích").remove();
                                                        }
                                                    })
                                                )
                                                : "")
                                        ),
                                        $("<div>", { class: "fs12 fs09-xs c6 mt15 lờiđầu" }).each(function () {
                                            var t = $(this);
                                            t.xửLý("bàiViết.tải.1", { d: Jd({ ụ: 4881 }) }, function (data) {
                                                var b = config("bàiViết." + data[0]);
                                                t.attr("id", data[0])
                                                t.html(b.ộ);
                                            })
                                        }),
                                        // $("<div>",{class:"fs12 fs09-xs c6 mt15",icon:"bubble_chart::vam cd mr10",style:"line-height:1.2",text:"Tọa lạc trên khuôn viên 9 quả đồi rộng 98 hécta tại huyện Kỳ Sơn – tỉnh Hòa Bình, ngay sát trục đường Quốc lộ 6 cách trung tâm Hà Nội 52 km và cách Thành phố Hòa Bình 20km, Lạc Hồng Viên – Kỳ Sơn với Sơn Thủy hữu tình là một vị trí Đắc địa để làm một Công viên Nghĩa trang.   "}),
                                        // $("<div>",{class:"fs12vw fs09-xs c6 mt15",icon:"bubble_chart::vam cd mr10",style:"line-height:1.2",text:"Được chọn lựa rất kỹ dựa trên những phân tích tâm linh và khoa học của các Nhà Phong Thủy, Địa lý Việt Nam, Đài Loan và Trung Quốc."}),
                                        // $("<div>",{class:"fs12vw fs09-xs c6 mt15",icon:"bubble_chart::vam cd mr10",style:"line-height:1.2",text:"Công viên nghĩa trang Lạc Hồng Viên nằm trên vị trí hội tụ đủ Tứ Linh: Long – Ly – Quy – Phượng, 9 quả đồi mang hình dáng một con rùa khổng lồ đang bơi cùng 9 con suối tự nhiên tượng trưng cho một đời người khi trở về nơi 9 suối. Công viên nghĩa trang Lạc Hồng Viên có thế Long Chầu – Hổ Phục, Phong Thủy tuyệt vời, tạo nên một khung cảnh huyền ảo, nên thơ và trữ tình, mang dáng dấp một nơi An nghỉ Thiên thu vĩnh hằng, Lạc Hồng Viên xứng đáng là nghĩa trang đẹp nhất miền Bắc, là một nơi Linh thiêng Cửu Tuyền Chín Suối."}),
                                        // $("<div>",{class:"fs12vw fs09-xs c6 mt15",icon:"bubble_chart::vam cd mr10",style:"line-height:1.2",text:"Công viên nghĩa trang Lạc Hồng Viên có thế Long Chầu – Hổ Phục, Phong Thủy tuyệt vời, tạo nên một khung cảnh huyền ảo, nên thơ và trữ tình, mang dáng dấp một nơi An nghỉ Thiên thu vĩnh hằng, Lạc Hồng Viên xứng đáng là nghĩa trang đẹp nhất miền Bắc, là một nơi Linh thiêng Cửu Tuyền Chín Suối."}),
                                        $("<div>", { class: "tar" }).append(
                                            $("<a>", { href: "c/4593/Gioi-Thieu", class: "btn dib cf bg1 ptb10 plr15 mt25 bn bra5", text: "Xem Thêm" })
                                        )
                                    )
                                )
                            ),
                            //Mẫu mộ
                            $("<div>", { class: " mlra tac " + (dai > 700 ? " w90 ptb50" : "ptb35"), text: "", style: "" }).append(
                                $("<div>", { class: "pr dib tac" }).append(
                                    $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                        $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                                    ),
                                    $("<div>", { class: "pr grid" }).append(
                                        $("<div>", { class: "fs2 fs12-xs lh1 ttu" + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", text: "Mẫu mộ" }),
                                        (là("U") ?
                                            $("<div>", { class: "pa t0 ml15 fs1 z7 grid" }).append(
                                                $("<div>", { class: " btn bgcd bra3 bcf mc1h c6 nuth", icon: "add" }).on("click", function () {
                                                    var mang = [],
                                                        idBố;
                                                    CẦN.db("chuyênLực.4595", function (e) {
                                                        if (e) {
                                                            e.map(function (v, i) {
                                                                m = config("chuyênMục." + v);
                                                                mang.push(m)
                                                            })
                                                        }
                                                    })
                                                    khung(
                                                        $("<div>", { class: "pa35 bgcf", text: "" }).append(
                                                            $("<div>", { class: "fs15", text: "Thêm bài viết mẫu mộ:" }),
                                                            // $("<div>",{class:"mt25 fs12 grid"}).append(
                                                            // 	$("<div>",{class:"mr15",text:"Chọn chuyên mục được thêm"}),
                                                            // 	$("<div>",{class:"bra3 ptb10 bss bcd bw1 pl15",text:"",id:"chọndanhmục"}).sổ(
                                                            // 		mang.map(function(v,i){
                                                            // 			return {chữ:v.ê,giáTrị:v.i}
                                                            // 		}),
                                                            // 		{
                                                            // 			đổi:function(a){
                                                            // 				idBố = a;
                                                            // 			},
                                                            // 			nhãn:"Chọn mục"
                                                            // 		}
                                                            // 	)
                                                            // ),
                                                            $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                    $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                        loại: "ảnh",
                                                                        đổi: function (s) {
                                                                            //console.log(s)
                                                                            $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                            $(this).attr("id", s[0]);
                                                                        },
                                                                        lỗi: function () {
                                                                            $(this).lỗi("Vui lòng thử lại.");
                                                                        }
                                                                    })
                                                                )
                                                            ),
                                                            $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" })
                                                            ),
                                                            $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" })
                                                            ),
                                                            $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                $("<div>", { class: "mt25 w1 bss bcd bw1 nộidungbàimộ" }).soạnThảo({
                                                                    cỡ: 15,
                                                                    html: true
                                                                })
                                                            ),
                                                            $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3", text: "Thêm" }).on("click", function () {
                                                                var t = $(this),
                                                                    te = $(".tiêuđề").iVal(),
                                                                    d = $(".môtả").iVal(),
                                                                    dd = $(".đạidiện").attr("id"),
                                                                    n = $(".nộidungbàimộ").iVal();
                                                                //cl(dd)
                                                                if (te == "" || n == "") {
                                                                    t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                } else if (!idBố) {
                                                                    t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời chọn danh mục bài viết !" }))
                                                                } else {
                                                                    xửLý("bàiViết.đăng", { d: Je({ ụ: 4595, ê: te, ô: d, ộ: n, ả: dd }) }, function (e) {
                                                                        if (e > 0) {
                                                                            notice(
                                                                                { t: "Đăng tin thành công", loại: true }
                                                                            );
                                                                            $("#khungThôngBáo").remove();
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        ),
                                                        {
                                                            thanh: false,
                                                            trong: "col-md-5 col-sm-5 col-xs-10 ",
                                                            viền: false,
                                                            kotắt: false
                                                        }
                                                    )
                                                }).on("mouseenter mouseleave", function (e) {
                                                    var dí = e.type == "mouseenter",
                                                        t = $(this);
                                                    if (dí) {
                                                        t.append(
                                                            $("<div>", { class: "pr chúThích" }).append(
                                                                $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Thêm bài viết mẫu mộ" })
                                                            )
                                                        )
                                                    } else {
                                                        $(".chúThích").remove();
                                                    }
                                                })
                                            )
                                            : "")
                                    ),
                                    $("<div>", { class: "fs12 mc1 ", text: "Công viên tâm linh Lạc Hồng Viên" })
                                ),
                                $("<div>", { class: "divider green" }),
                                $("<div>", { class: "grid tac pb25 tabbai" }).each(function () {

                                }),
                                $("<div>", { class: "", style: "" }).append(
                                    $("<div>", { class: "grid" + (dai > 700 ? " df" : "") }).append(
                                        $("<div>", { class: "db col-md-6 col-sm-6 col-xs-12 fni plr15 mẫuto" }),
                                        $("<div>", { class: "col-md-6 col-sm-6 col-xs-12 fni vat grid pr tac mẫubé" })
                                    )
                                ).each(function () {
                                }),
                                $("<div>", { class: "ptb25 tac" }).append(
                                    $("<a>", { href: "c/4595/Mau-mo", class: "bấmĐc fs12 mc1 tduh", text: "Xem thêm" })
                                )
                            ).each(function () {
                                var t = $(this);
                                t.xửLý("bàiViết.tải.6", { d: Jd({ ụ: 4595 }) }, { delay: 2000 }, function (data) {
                                    data.map(function (v, vt) {
                                        $(".tabbai").append(
                                            $("<a>", { href: dữLiệu.url(v, "ế"), text: dữLiệu.tên(v, "ế"), class: "bấmĐc fs12 bss bcd c6 mlr3 bw1 pa10 bg1cfh" + (dai > 700 ? "" : " mtb5") })
                                        )
                                    });
                                    data.map(function (v, vt) {
                                        if (vt == 0) {
                                            //cl(t.find(".mẫuto"))
                                            $(".mẫuto").append(
                                                $("<a>", { href: dữLiệu.url(v, "ế"), class: "col-md-12 col-sm-12 col-xs-12 fni pr bgcfx db shineh", style: "padding-bottom:65%" }).append(
                                                    $("<a>", { href: dữLiệu.url(v, "ế"), class: "db pa b0 ptb15 plr10 cf fs13 denmo w1 tac", text: dữLiệu.tên(v, "ế") })
                                                ).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" })
                                            )
                                        } else if (vt > 0 && vt < 5) {
                                            //cl(t.find(".mẫubé"))
                                            $(".mẫubé").append(
                                                $("<a>", { href: dữLiệu.url(v, "ế"), class: "w50 plr15 shineh " + (dai > 700 ? "" : " mt25 vat") + (vt == 2 ? (dai > 700 ? " pa b0 l0" : "") : (vt == 3) ? (dai > 700 ? " pa b0 r0" : "") : "") }).append(
                                                    $("<div>", { class: "bgcd pr w1", style: "padding-bottom:65%" }).append(
                                                        $("<a>", { href: dữLiệu.tên(v, "ế").toURL(), class: "pa db b0 ptb15 plr10 cf fs11 denmo w1 tac", classM: "fs1,ptb5,-ptb15,-fs11", text: dữLiệu.tên(v, "ế") })
                                                    ).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" })
                                                )
                                            )
                                        }
                                    })
                                })
                            }),
                            //Dịch vụ
                            $("<div>", { class: "bgaf bgpt bgsc bgrn cb tac bgcfx", id: "dichvu" }).append(
                                $("<div>", { class: "tac pr" + (dai > 700 ? " ptb50" : " ptb35") }).append(
                                    $("<div>", { class: "pr dib", style: "" }).append(
                                        $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                            $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                                        ),
                                        $("<div>", { class: "pr grid" }).append(
                                            $("<a>", { href: "c/4594/Dich-Vu", class: "fs2 fs12-xs lh1 db bấmĐc ttu " + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", text: "Dịch vụ" }),
                                            (là("U") ?
                                                $("<div>", { class: "pa t0 ml15 fs1 z7 grid" }).append(
                                                    $("<div>", { class: "btn bgcd bra3 bcf mc1h c6 nuth", icon: "add" }).on("click", function () {
                                                        khung(
                                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                                $("<div>", { class: "pb10 tac mc1 fs15", text: "Thêm bài dịch vụ:" }),
                                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                            loại: "ảnh",
                                                                            đổi: function (s) {
                                                                                //console.log(s)
                                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                $(this).attr("id", s[0]);
                                                                            },
                                                                            lỗi: function () {
                                                                                $(this).lỗi("Vui lòng thử lại.");
                                                                            }
                                                                        })
                                                                    )
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs11 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđềdịchvụ", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs11 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtảdịchvụ", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs11 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nộidungdịchvụ" }).soạnThảo({
                                                                        cỡ: 15,
                                                                        html: true
                                                                    })
                                                                ),
                                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                                    var t = $(this),
                                                                        te = $(".tiêuđềdịchvụ").iVal(),
                                                                        d = $(".môtảdịchvụ").iVal(),
                                                                        n = $(".nộidungdịchvụ").iVal(),
                                                                        anh = $(".đạidiện").attr("id");
                                                                    cl(t, d, n)
                                                                    if (t == "" || n == "") {
                                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                    } else {
                                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: 4594, ả: anh, ê: te, ô: d, ộ: n }) }, function (e) {
                                                                            if (e > 0) {
                                                                                notice(
                                                                                    { t: "Đăng tin thành công", loại: true }
                                                                                );
                                                                                $("#khungThôngBáo").remove();
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            ),
                                                            {
                                                                thanh: false,
                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                kotắt: false,
                                                                viền: false
                                                            }
                                                        )
                                                    }).on("mouseenter mouseleave", function (e) {
                                                        var dí = e.type == "mouseenter",
                                                            t = $(this);
                                                        if (dí) {
                                                            t.append(
                                                                $("<div>", { class: "pr chúThích" }).append(
                                                                    $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Thêm bài viết dịch vụ" })
                                                                )
                                                            )
                                                        } else {
                                                            $(".chúThích").remove();
                                                        }
                                                    })
                                                )
                                                : "")
                                        ),
                                        $("<div>", { class: "fs12 mc1", text: "Công viên tâm linh Lạc Hồng Viên" })
                                    ),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "pr " + (dai > 700 ? "w90 mlra" : "") }).append(
                                        $("<div>", { class: "mlra grid thecha1 oh wsn" }).append(
                                        ).each(function () {
                                            var t = $(this);
                                            t.xửLý("bàiViết.tải.5", { d: Je({ ụ: 4594 }) }, { delay: 4000 }, function (li) {
                                                li.map(function (v, vt) {
                                                    CẦN.db("", function () {
                                                        var a = config("bàiViết." + v);
                                                        t.append(
                                                            $("<a>", { href: dữLiệu.url(v, "ế"), class: "col-md-4 col-sm-4 col-xs-12 fni plr25 vat thecon1" + (dai > 700 ? " plr15" : " plr10"), style: "white-space:normal" }).append(
                                                                $("<div>", { class: "bgcf pb35 bra3 oh" }).append(
                                                                    $("<div>", { class: "pb43" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "200x") + "') center/cover" }),
                                                                    $("<div>", { class: "mt25 plr15 c6 fs13 tal lh12 fwb", text: dữLiệu.tên(v, "ế").cắt(30) }),
                                                                    $("<div>", { class: "bg1 w15 mt10 mlr15", style: "height:3px" }),
                                                                    $("<div>", { class: "mt10 plr15 tal", text: dE(lọc(a.ộ).cắt(90)) })
                                                                )
                                                            )
                                                        )
                                                    })
                                                })
                                            })
                                        }),
                                        $("<div>", { class: "pa tl50 w1 tt" }).append(
                                            $("<div>", { class: "pr" }).append(
                                                $("<div>", { class: "pa3 fs15 prev nutslide pa bấmĐc " + (dai > 700 ? "l-4 bgcf o1h bra50 mc1 o05 bfh" : "l5 bgcsb cf "), classM: "-fs15,fs11", icon: "navigate_before::vam fs2 " }),
                                                $("<div>", { class: "pa3 fs15 next nutslide pa bấmĐc " + (dai > 700 ? "r-4 bgcf o1h bra50 mc1 o05 bfh" : "r5 bgcsb cf "), classM: "-fs15,fs11", icon: "navigate_next::vam fs2 " })
                                            )
                                        )
                                    ),
                                    $("<div>", { class: "mt25" }).append(
                                        $("<a>", { href: "c/4594/Dich-vu", class: "bấmĐc fs12 mc1 tduh dib", text: "Xem thêm" })
                                    )
                                )
                            ),
                            //thư viện video//đây
                            $("<div>", { class: " tac" + (dai > 700 ? " ptb50" : " ptb35"), id: "thuvien", style: "" }).append(
                                $("<div>", { class: "pr dib" }).append(
                                    $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                        $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                                    ),
                                    $("<a>", { href: "c/4598/Thu-vien", class: "db fs2 fs12-xs tac bấmĐc ttu" + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", text: "Thư viện video" }),
                                    $("<div>", { class: "fs12 mc1", text: "Công viên tâm linh Lạc Hồng Viên" })
                                ),
                                $("<div>", { class: "divider green" }),
                                $("<div>", { class: "grid " + (dai > 700 ? "df w90 mlra" : "") }).append(
                                    // + (dai >700 ? "" : " wsn oh thecha2" )
                                    $("<div>", { class: "col-md-6 col-xs-12 col-sm-6 fni plr15 thecon2 to", classM: "w1,-w50" }),
                                    $("<div>", { class: "col-md-6 col-xs-12 col-sm-6 fni vat grid pr thecon2 bé" })
                                ).each(function () {
                                    $.get("https://www.googleapis.com/youtube/v3/channels",
                                        {
                                            part: "contentDetails",
                                            id: "UCt54UXv9LmF1YHk2h-UdIHg",
                                            key: "AIzaSyD_xqHJpN5dS7EEE1FoS6ZuI16nGsGqmWM"
                                        },
                                        function (data) {
                                            $.each(data.items, function (i, item) {
                                                // Upload ID
                                                var id = item.contentDetails.relatedPlaylists.uploads;

                                                $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                                                    part: "snippet",
                                                    maxResults: "5",
                                                    playlistId: id,
                                                    key: "AIzaSyD_xqHJpN5dS7EEE1FoS6ZuI16nGsGqmWM"
                                                },
                                                    function (result) {
                                                        var mang = result.items;
                                                        $.map(mang, function (v, i) {
                                                            var t = v.snippet.title,
                                                                id = v.snippet.resourceId.videoId;
                                                            //cl(id);
                                                            if (i == 0) {
                                                                $(".to").append(
                                                                    //.ảnh(id)
                                                                    $("<div>", { id: id, class: "w1 pr bgpc bgsc bấmĐc " + (dai > 700 ? " dn" : ""), style: "padding-bottom:65%" }).append(
                                                                        $("<div>", { class: "wh1 pa t0 l0 denmo bgsc bgrn bgpc", style: "padding-bottom:65%" }).ảnh(id).append(
                                                                        ),
                                                                        $("<div>", { class: "wh1 pa t0 l0 bgc03" }).append(
                                                                            $("<div>", { class: "wh1 pr" }).append(
                                                                                $("<div>", { class: "pa tl50 tt fs15", icon: "play_circle_outline::vam fs2 cd" })
                                                                            )
                                                                        )
                                                                    ).on("click", function () {
                                                                        var id = $(this).attr("id");
                                                                        khung(
                                                                            $("<div>", { class: "pb43 bgcf" }).append(
                                                                                $("<iframe>", { class: "ol wh1", src: "https://www.youtube.com/embed/" + id })
                                                                            ),
                                                                            {
                                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                viền: false,
                                                                                kotắt: false
                                                                            }
                                                                        )
                                                                    }),
                                                                    $("<div>", { id: id, class: "w1 pr bgpc bgsc bấmĐc " + (dai > 700 ? "" : " dn"), style: "padding-bottom:65%" }).append(
                                                                        $("<iframe>", { class: "ol wh1", src: "https://www.youtube.com/embed/" + id })
                                                                    )
                                                                )
                                                            } else {
                                                                $(".bé").append(
                                                                    $("<div>", { id: id, class: "w50 plr15 bấmĐc " + (dai > 700 ? "" : " mt25 vat") + (i == 2 ? (dai > 700 ? " pai b0 l0" : "") : (i == 3) ? (dai > 700 ? " pai b0 r0" : "") : "") }).append(
                                                                        $("<div>", { id: id, class: "pr denmo vdt" + (dai > 700 ? " dn" : ""), style: "padding-bottom:65%" }).append(
                                                                            $("<div>", { class: "wh1 pa bgsc bgrn bgpc" }).ảnh(id).append(
                                                                                //$("<iframe>",{class:"ol wh1"})
                                                                            ),
                                                                            $("<div>", { class: "wh1 pa t0 l0 bgc03" }).append(
                                                                                $("<div>", { class: "wh1 pr" }).append(
                                                                                    $("<div>", { class: "pa tl50 tt fs15", icon: "play_circle_outline::vam fs2 cd" })
                                                                                )
                                                                            )
                                                                        ),
                                                                        $("<div>", { id: id, class: "bấmĐc bgcfx pr" + (dai > 700 ? "" : " dn"), style: "padding-bottom:65%" }).append(
                                                                            $("<iframe>", { class: "ol wh1", src: "https://www.youtube.com/embed/" + id })
                                                                        )
                                                                    ).on("click", ".vdt", function () {
                                                                        var id = $(this).attr("id");
                                                                        khung(
                                                                            $("<div>", { class: "pb43 bgcf" }).append(
                                                                                $("<iframe>", { class: "ol wh1", src: "https://www.youtube.com/embed/" + id })
                                                                            ),
                                                                            {
                                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                viền: false,
                                                                                kotắt: false
                                                                            }
                                                                        )
                                                                    })
                                                                )
                                                            }
                                                            $(".videoxem").append(
                                                                $("<div>", { class: "col-md-4 col-sm-4 col-xs-6 fni plr10 dib" }).append(
                                                                    $("<div>", { class: "pb43 pr" }).append(
                                                                        $("<div>", { class: "wh1 pa" }).append(
                                                                            $("<iframe>", { class: "ol", src: "https://www.youtube.com/embed/" + id })
                                                                        )
                                                                    ),
                                                                    $("<div>", { class: "ptb10 fs12", text: t.cắt(30) })
                                                                )
                                                            )
                                                        })
                                                    }
                                                )
                                            })
                                        }
                                    )
                                }),
                                $("<div>", { class: "pt25" }).append(
                                    $("<a>", { href: "c/4598/Thu-vien", class: "bấmĐc fs12 mc1 tduh", text: "Xem thêm" })
                                )
                            ),
                            //Tin tức
                            //,style:"background-image:url('img/ttback.jpg')"
                            $("<div>", { class: "bgaf bgpt bgsc bgrn cb tac pr bgcfx", id: "tintuc" }).append(
                                $("<div>", { class: "tac p" + (dai > 700 ? " ptb50" : " ptb35") }).append(
                                    $("<div>", { class: "pr dib", style: "" }).append(
                                        $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                            $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                                        ),
                                        $("<div>", { class: "pr grid" }).append(
                                            $("<div>", { class: "fs2 fs12-xs lh1 tac ttu" + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", text: "Tin tức & sự kiện" }),
                                            (là("U") ?
                                                $("<div>", { class: "pa t0 ml15 fs1 z7 grid wsn" }).append(
                                                    $("<div>", { class: " btn bgcd bra3 bcf mc1h c6 nuth mr15", icon: "add" }).on("click", function () {
                                                        var mang = [];
                                                        CẦN.db("chuyênLực.4597", function (e) {
                                                            if (e) {
                                                                e.map(function (v, i) {
                                                                    m = config("chuyênMục." + v);
                                                                    mang.push(m)
                                                                })
                                                            }
                                                        })
                                                        khung(
                                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                                $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài tin tức:" }),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                    $("<div>", { class: "pa10", id: "mụctintức" }).sổ(
                                                                        mang.map(function (v, i) {
                                                                            return { chữ: v.ê, giáTrị: v.i }
                                                                        }),
                                                                        {
                                                                            đổi: function (a) {
                                                                                console.log(a)
                                                                            },
                                                                            nhãn: "Chọn mục đăng tin"
                                                                        }
                                                                    )
                                                                ),
                                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                            loại: "ảnh",
                                                                            đổi: function (s) {
                                                                                //console.log(s)
                                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                $(this).attr("id", s[0]);
                                                                            },
                                                                            lỗi: function () {
                                                                                $(this).lỗi("Vui lòng thử lại.");
                                                                            }
                                                                        })
                                                                    )
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 bsi tiêuđềtin", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 bsi môtảtin", type: "text", text: "" })
                                                                ),
                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nộidungtin" }).soạnThảo({
                                                                        cỡ: 15,
                                                                        html: true
                                                                    })
                                                                ),
                                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                                    var t = $(this),
                                                                        m = $("#mụctintức").iVal(),
                                                                        te = $(".tiêuđềtin").iVal(),
                                                                        d = $(".môtảtin").iVal(),
                                                                        n = $(".nộidungtin").iVal(),
                                                                        anh = $(".đạidiện").attr("id");
                                                                    cl(m, t, d, n)
                                                                    if (m == "" || t == "" || n == "") {
                                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                    } else {
                                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: m, ả: anh, ê: te, ô: d, ộ: n }) }, function (e) {
                                                                            if (e > 0) {
                                                                                notice(
                                                                                    { t: "Đăng tin thành công", loại: true }
                                                                                );
                                                                                $("#khungThôngBáo").remove();
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            ),
                                                            {
                                                                thanh: false,
                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                viền: false,
                                                                kotắt: false
                                                            }
                                                        )
                                                    }).on("mouseenter mouseleave", function (e) {
                                                        var dí = e.type == "mouseenter",
                                                            t = $(this);
                                                        if (dí) {
                                                            t.append(
                                                                $("<div>", { class: "pr t0  chúThích" }).append(
                                                                    $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Thêm bài viết tin tức" })
                                                                )
                                                            )
                                                        } else {
                                                            $(".chúThích").remove();
                                                        }
                                                    })
                                                )
                                                : "")
                                        ),
                                        $("<div>", { class: "fs12 mc1 ", text: "Công viên tâm linh Lạc Hồng Viên" })
                                    ),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "" + (dai > 700 ? " df w90 mlra" : "") }).append(
                                        // + (dai >700 ? "" : " wsn oh thecha2" )
                                        $("<div>", { class: "col-md-6 col-xs-12 col-sm-6 fni thecon2 " + (dai > 700 ? " pr25" : "plr10 mb15"), classM: "w1,-w50" }).append(
                                            $("<div>", { class: "bgcf to1" + (dai > 700 ? " wh1" : " w1 pb15") })
                                        ),
                                        $("<div>", { class: "tal col-md-3 col-xs-12 col-sm-3 fni vat grid pr thecon2 bé1 " + (dai > 700 ? " pr25" : " plr10 mb15 dn") }),
                                        $("<div>", { class: "tal col-md-3 col-xs-12 col-sm-3 bgcf pt5 fni vat thecon2 bé2" })
                                    ).each(function () {
                                        var t = $(this);
                                        t.xửLý("bàiViết.tải.12", { d: Je({ ụ: ["4625", "4626", "4627", "4628", "4629"] }) }, { delay: 3000 }, function (li) {
                                            //cl(li)
                                            li.map(function (v, vt) {
                                                var a = config("bàiViết." + v);
                                                //console.log(dữLiệu.ảnh(v,"ế","500px"));
                                                if (vt == 0) {
                                                    $(".to1").append(
                                                        // $("<a>",{href:a.e.toURL()+".a"+v+".html",class:"col-md-12 col-sm-12 col-xs-12 fni pr bgcfx db shineh",style:"padding-bottom:65%"}).append(
                                                        // 	$("<a>",{href:dữLiệu.tên(v,"ế").toURL()+".a"+v+".html",class:"db pa b0 ptb15 plr10 cf fs13 denmo w1 tac",text:dữLiệu.tên(v,"ế")})
                                                        // ).css({background:"url('"+dữLiệu.ảnh(v,"ế","500x")+"') center/cover"})
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), class: "col-md-12 col-sm-12 col-xs-12 fni pr db shineh" }).append(
                                                            $("<a>", { href: dữLiệu.url(v, "ế"), class: "pb169 w1 db" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" }),
                                                            $("<div>", { class: "plr15" }).append(
                                                                $("<a>", { href: dữLiệu.url(v, "ế"), class: "db tal lh15 mc1 fs15 fs12-xs  ptb15", text: a.ê }),
                                                                $("<a>", { href: dữLiệu.url(v, "ế"), class: "tal fs1 db lh16", text: a.ô ? a.ô : dE(lọc(a.ộ).cắt(250)) })
                                                            )
                                                        )
                                                    )
                                                } else if (vt == 1 || vt == 2) {
                                                    $(".bé1").append(//+(dai>700 ? "" : " mt25 vat") + (vt==2 ? (dai>700 ?" pa b0 l0" : "") : (vt==3) ? (dai>700 ?" pa b0 r0" : "") : "" )
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), class: "w1 shineh " + (vt == 1 ? " mb25" : "") }).append(
                                                            $("<div>", { class: "pb169 w1" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" }),
                                                            $("<div>", { class: "pt10 mc1 tduh fs11", text: dữLiệu.tên(v, "ế").cắt(30) }),
                                                            $("<div>", { class: "pt5 10", text: a.ô ? a.ô : dE(lọc(a.ộ).cắt(50)) })
                                                            // $("<div>",{class:"bgcd pr w1 pb43"}).append(//style:"padding-bottom:65%"
                                                            // 	$("<a>",{href:dữLiệu.tên(v,"ế").toURL()+".a"+v+".html",class:"pa db b0 ptb15 plr10 cf fs11 denmo w1 tac",text:dữLiệu.tên(v,"ế").cắt(30)})
                                                            // )
                                                        )
                                                    )
                                                } else {
                                                    $(".bé2").append(
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), class: "pb15 grid db plr10 pt5", style: "text-align:justify" }).append(
                                                            $("<div>", { class: " " + (dai > 700 ? " dn" : " w40") }).append(
                                                                $("<div>", { class: " w1 pb43 bgrn bgsc bgpc", classM: "-pb43,pb169" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(v, "ế", "200px", "https://i0.wp.com/cdn.inevn.com/img/thumb/35576.1kx.isij?w=200&quality=100") + "')" })
                                                            ),
                                                            $("<div>", { class: " grid " + (dai > 700 ? " w1" : " w60 vat") }).append(
                                                                $("<div>", { class: "vat w5 dn-xs", icon: "bubble_chart::vam fs1 mc1 " }),
                                                                $("<div>", { class: " vat tduh fs11 pl10 " + (dai > 700 ? " w90" : " w1"), text: dữLiệu.tên(v, "ế").cắt(50) }),
                                                                $("<div>", { class: "pt10 dn c6 pl10 fs08", classM: "-dn", text: "Lạc Hồng Viên - " + đổiTG2(config("bàiViết." + v)["ấ"]) })
                                                            )
                                                        )
                                                    )
                                                }
                                            })
                                        })
                                    }),
                                    $("<div>", { class: "mt25" }).append(
                                        $("<a>", { href: "c/4625/Lac-Hong-Vien", class: "bấmĐc fs12 mc1 tduh dib", text: "Xem thêm" })
                                    )
                                )
                            ),
                            //Cảm nhận khách hàng
                            $("<div>", { class: "mlra tac ptb50 pr", style: "" }).append(
                                $("<div>", { class: "pr dib" }).append(
                                    $("<div>", { class: "w10 dib " + (dai > 700 ? " pb35" : " pb15") }).append(
                                        $("<img>", { class: "w1", src: "img/logo_lhv.png" })
                                    ),
                                    $("<div>", { class: "pr grid" }).append(
                                        $("<div>", { class: "fs2 fs12-xs tac ttu lh1" + (dai > 700 ? " pb35" : " pb15"), style: "color:#3e8a6c", text: "Cảm nhận của khách hàng" }),
                                        (là("U") ? $("<div>", { class: "pa t0 ml15 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth", icon: "add" }).on("click", function () {
                                            khung(
                                                $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                    $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài cảm nhận khách hàng:" }),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" })
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" })
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Link chia sẻ video:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 link", type: "text", text: "" })
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Bài cảm nhận:" }),
                                                        $("<div>", { class: "mt25 w1 bss bcd bw1 nộidungcảmnhận" }).soạnThảo({
                                                            cỡ: 15,
                                                            html: true
                                                        })
                                                    ),
                                                    $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                        var t = $(this),
                                                            te = $(".tiêuđề").iVal(),
                                                            l = $(".link").iVal().split("/")[3],
                                                            d = $(".môtả").iVal(),
                                                            n = $(".nộidungcảmnhận").iVal();
                                                        if (t == "" || n == "" || l == "") {
                                                            t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                        } else {
                                                            xửLý("bàiViết.đăng", { d: Je({ ụ: 4663, ê: te, ô: d, ộ: n, ả: l }) }, function (e) {
                                                                if (e > 0) {
                                                                    notice(
                                                                        { t: "Đăng tin thành công", loại: true }
                                                                    );
                                                                    $("#khungThôngBáo").remove();
                                                                }
                                                            })
                                                        }
                                                    })
                                                ),
                                                {
                                                    thanh: false,
                                                    trong: "col-md-6 col-sm-6 col-xs-11",
                                                    viền: false,
                                                    kotắt: false
                                                }
                                            )
                                        }).on("mouseenter mouseleave", function (e) {
                                            var dí = e.type == "mouseenter",
                                                t = $(this);
                                            if (dí) {
                                                t.append(
                                                    $("<div>", { class: "pr t0  chúThích" }).append(
                                                        $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Thêm bài cảm nhận của khách hàng" })
                                                    )
                                                )
                                            } else {
                                                $(".chúThích").remove();
                                            }
                                        })
                                            : "")
                                    ),
                                    $("<div>", { class: "fs12 mc1 ", text: "Công viên tâm linh Lạc Hồng Viên" })
                                ),
                                $("<div>", { class: "divider green" }),
                                $("<div>", { class: "mt25", style: "" }).append(
                                    $("<div>", { class: "pr w90 mlra " }).append(
                                        $("<div>", { id: "camnhankh", class: "w1 oh wsn jcsa grid camnhan1 pb15 pt50 " + (dai > 700 ? "" : " thecha3") }).each(function () {
                                            var t = $(this);
                                            t.xửLý("bàiViết.tải.4", { d: Je({ ụ: 4663 }) }, { delay: 3500 }, function (li) {
                                                li.map(function (v, vt) {
                                                    CẦN.db("bàiViết." + v, function () {
                                                        var a = config("bàiViết." + v);
                                                        t.append(
                                                            $("<a>", { href: dữLiệu.url(v, "ế"), class: v + " col-md-4 col-sm-4 col-xs-12 fni plr25 camnhan2 vat " + (dai > 700 ? "" : " thecon3"), style: "white-space:normal" }).append(
                                                                $("<div>", { class: "bóng bgcf bra3 tac" }).append(
                                                                    $("<div>", { class: "bra50 wh100 oh bóng dib mlra bgpc bgsc ảnh", style: "margin-top:-50px;background-image:url('" + dữLiệu.ảnh(v, "ế", "50x") + "') " }).append(
                                                                    ),
                                                                    $("<div>", { class: "w90 mlra ffm ptb35 fs12 fs09-xs", text: dE(lọc(a.ộ).cắt(100)) }),
                                                                    $("<div>", { class: "bss bc1 bb2 w10 mlra", style: "" }),
                                                                    $("<div>", { class: "ptb25", text: v.t })
                                                                )
                                                            )
                                                        )
                                                    })
                                                })
                                            })
                                        }),
                                        $("<div>", { class: "pa tl50 w1 tt" }).append(
                                            $("<div>", { class: "pr" }).append(
                                                $("<div>", { class: "pa3 o05 o1h bgcf fs15 bfh bra50 prev camnhan trai pa mc1 bấmĐc l-4", classM: "-fs15,fs11", icon: "navigate_before::vam fs2 " }),
                                                $("<div>", { class: "pa3 o05 o1h bgcf fs15 bfh bra50 next camnhan phai pa mc1 bấmĐc r-4", classM: "-fs15,fs11", icon: "navigate_next::vam fs2 " })
                                            )
                                        )
                                    )
                                )
                            ),
                            tảiBảnĐồ(dai)
                        );
                        //chay slide
                        $(".nutslide").on("click", function () {
                            var a = $(this).hasClass("next"),
                                w = $(".thecon1").outerWidth();
                            $(".thecha1").animate({
                                scrollLeft: (a ? "+" : "-") + "=" + w
                            })
                        })
                        $(".nutslide1").on("click", function () {
                            var a = $(this).hasClass("next"),
                                w = $(".thecon4").outerWidth();
                            $(".thecha4").animate({
                                scrollLeft: (a ? "+" : "-") + "=" + w
                            })
                        })
                        //hien cam nhan
                        $(".camnhan").on("click", function () {
                            var t = $(this),
                                a = t.hasClass("phai"),
                                w = $(".camnhan1").outerWidth();
                            $(".camnhan1").animate({
                                scrollLeft: (a ? "+" : "-") + "=" + w
                            }, "slow")
                        })
                        //slide video trên điện thoại
                        $(".videodt").on("click", function () {
                            var t = $(this),
                                a = t.hasClass("phai1"),
                                w = $(".thecha2").outerWidth();
                            t.sửaLớp("bg1,-bgcd").siblings().sửaLớp("-bg1,bgcd");
                            $(".thecha2").animate({
                                scrollLeft: (a ? "+" : "-") + "=" + w
                            })
                        })
                        //vuốt trên điện thoại trang chủ
                        $("#tintuc").on("swiperight swipeleft", function (e) {
                            var a = e.type,
                                w = $(".thecon4").outerWidth();
                            $(".thecha4").animate({
                                scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w
                            })
                        })
                        $("#dichvu").on("swiperight swipeleft", function (e) {
                            var a = e.type,
                                w = $(".thecon1").outerWidth();
                            $(".thecha1").animate({
                                scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w
                            })
                        })
                        $("#thuvien").on("swiperight swipeleft", function (e) {
                            var a = e.type,
                                w = $(".thecon2").outerWidth();
                            $(".thecha2").animate({
                                scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w
                            })
                        })
                        $("#camnhankh").on("swiperight swipeleft", function (e) {
                            var a = e.type,
                                w = $(".thecon3").outerWidth();
                            $(".thecha3").animate({
                                scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w
                            })
                        })
                        var play;

                    },
                    404: function () {
                        vàoURL("/");
                    },
                    //bài tiêu đề
                    c: function (i) {
                        if (i != 4599) {
                            lênĐầu();
                            $("#phim").sửaLớp("dn");
                        } else if (i == 4599) {
                            // showLoading();
                        }
                        //trang con thư viện
                        if (i == 4598) {
                            var url = location.pathname,
                                tcm = location.pathname.split("/")[3];
                            trang = url.match(/(page)+\w/g) ? url.match(/(page)+\w+/g)[0].match(/\d+/g) : 1,
                                goc = dữLiệu.url(i, "ụ");
                            cl(trang)
                            cl(tcm)
                            $("#body").empty().append(
                                $("<div>", { class: "" + (dai > 700 ? "w90 mlra tac" : "") }).append(
                                    $("<div>", { class: "ttu ptb10 fs2 c9 fs12-xs pt25 tac", text: "thư viện ảnh & video lạc hồng viên" }),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "grid tac " + (dai > 700 ? "" : "plr10") }).append(
                                        $("<div>", { class: "bra3 dib col-md-3 col-ms-3 col-xs-6 fni plr15 ptb10 fs15 fs09-xs bấmĐc bg1 cf tabthưviện", text: "Thư viện ảnh" }),
                                        $("<div>", { class: "bra3 dib col-md-3 col-ms-3 col-xs-6 fni plr15 ptb10 fs15 fs09-xs bấmĐc c6 tabthưviện bgcd", text: "Thư viện video" })
                                    ),
                                    $("<div>", { class: "ptb25" }).append(
                                        $("<div>", { class: "grid tal pr" }).append(
                                            $("<div>", { class: "w1 grid fakediv pa t0 l0" }).append(
                                                range(0, 5).map(function (v, i) {
                                                    return $("<a>", { class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc pa15", text: "" }).append(
                                                        $('<div>', { class: 'pr' }).append(
                                                            $("<div>", { class: "w1 pb43 bgcd shine ảnh" }),
                                                            $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc bgcd chữ" })
                                                        )
                                                    )
                                                })
                                            ),
                                            $("<div>", { class: "hienbai w1 grid" }),
                                            $("<div>", { class: "phântrang pt25 tac grid w1" }).append(
                                                $("<div>", { class: "ptb5 trangtruoc bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", icon: "keyboard_arrow_left::fs1" }),
                                                //$("<div>",{class:"dautien grid"}),
                                                $("<div>", { class: "giua grid" }),
                                                $("<div>", { class: "ogiua pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." }),
                                                //$("<div>",{class:"cuoicung grid"}),
                                                $("<div>", { class: "ptb5 trangsau bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", icon: "keyboard_arrow_right::fs1" })
                                            )
                                        ).each(function () {
                                            var t = $(this);
                                            xửLý("đốiTượng.tải.3c0c958398cae6607d5d04b6a735df99", function (data1) {
                                                var data = data1.reverse(),
                                                    sotrang = Math.ceil(data.length / 6),
                                                    tu = (trang * 1 - 1) * 6,
                                                    den = tu + 5;
                                                //cl(sotrang)
                                                if (sotrang < 3) {
                                                    $(".ogiua").remove();
                                                }
                                                $.map(data, function (v, vt) {
                                                    chờ(function () {
                                                        $(".fakediv").remove();
                                                    }, 1200)
                                                    if (vt >= tu && vt <= den) {
                                                        var lay = config("3c0c958398cae6607d5d04b6a735df99." + v),
                                                            anh = Jd(lay["219791"]),
                                                            pic = anh["ậ"][0],
                                                            url = lay["219790"].replace(/(\/)/g, "-");
                                                        // cl(pic)
                                                        //cl(lay)
                                                        //cl(t.find(".4"))
                                                        $(".hienbai").append(
                                                            $("<a>", { href: "/v/" + v + "/" + url.toURL(), id: v, class: " col-md-4 col-sm-4 col-xs-12 fni bấmĐc pa15", text: "" }).append(
                                                                $('<div>', { class: 'pr' }).append(
                                                                    $("<div>", { class: "w1 pb43 bgcd shineh " }).css({ background: "url('" + dữLiệu.ảnh(pic, "i", "500x") + "') center/cover" }),
                                                                    $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc", text: lay["219790"].cắt(40) })
                                                                )
                                                            )
                                                        )
                                                    }
                                                })
                                                // Số lượng trang
                                                for (y = 1; y <= sotrang; y++) {
                                                    if (y == 1) {
                                                        $(".trangtruoc").after(
                                                            $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3 caidau" + ((y == 1 || y == 2) ? "" : " dn"), text: y, stt: y })
                                                        )
                                                    } else if (y > 1 && y < sotrang) {
                                                        $(".giua").append(
                                                            $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin pa10 bra3 fs1 dn bss bcd bw1 bgcfx mc1 mlr3", text: y, stt: y })
                                                        )
                                                    } else if (y == sotrang) {
                                                        //cl(y)
                                                        $(".trangsau").before(
                                                            $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3 caicuoi", text: y, stt: y })
                                                        )
                                                    }
                                                }
                                                if (trang == sotrang || trang >= sotrang - 2) {
                                                    $(".ogiua").sửaLớp("dn")
                                                } else {
                                                    $(".ogiua").sửaLớp("-dn")
                                                }
                                                //phân trang 2
                                                $("#" + trang).sửaLớp("bg1,cf,-bgcf,-mc1,-dn").siblings().sửaLớp("-bg1,-cf,bgcf,mc1");
                                                var sau = trang * 1 + 1,
                                                    truoc = trang * 1 - 1;
                                                cl(truoc, sau);
                                                $("#" + sau).sửaLớp("-dn");
                                                $("#" + truoc).sửaLớp("-dn");
                                                if (truoc - 1 > 1) {
                                                    $("<div>", { class: " pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." }).insertBefore($("#" + truoc))
                                                } else {
                                                    for (i = 2; i < truoc; i++) {
                                                        $("#" + i).sửaLớp("-dn")
                                                    }
                                                }
                                            })
                                        }),
                                        $("<div>", { class: "dn ", text: "" }).append(
                                            $("<div>", { class: "fni tal videoxem grid", style: "" }).append(
                                            )
                                        )
                                    )
                                ).thêmBàiThưViện(i)
                            );
                            $(document).on("click", ".trangsau,.trangtruoc", function () {
                                var ht = $("#" + trang),
                                    htsau = $("#" + (trang * 1 + 1)),
                                    httrc = $("#" + (trang * 1 - 1)),
                                    sau = $(this).hasClass("trangsau");
                                //cl($(this))
                                //cl(ht)
                                if (sau) {
                                    //cl(htsau)
                                    htsau.trigger("click");
                                } else {
                                    //cl(httrc)
                                    httrc.trigger("click");
                                }
                            })
                            $(window).on("scroll", function () {
                                tảiThêm(i, $(".fakediv"))
                            })
                            $.get("https://www.googleapis.com/youtube/v3/channels",
                                {
                                    part: "contentDetails",//UCketJp7J7N2hQ6yAx_TIl3w
                                    id: "UCt54UXv9LmF1YHk2h-UdIHg",
                                    key: "AIzaSyD_xqHJpN5dS7EEE1FoS6ZuI16nGsGqmWM"
                                },
                                function (data) {
                                    $.each(data.items, function (i, item) {
                                        // Upload ID
                                        var id = item.contentDetails.relatedPlaylists.uploads;

                                        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                                            part: "snippet",
                                            maxResults: "10",
                                            playlistId: id,
                                            key: "AIzaSyD_xqHJpN5dS7EEE1FoS6ZuI16nGsGqmWM"
                                        },
                                            function (result) {
                                                var mang = result.items;
                                                $.map(mang, function (v, i) {
                                                    var t = v.snippet.title,
                                                        id = v.snippet.resourceId.videoId;
                                                    $(".videoxem").append(
                                                        $("<div>", { class: "col-md-4 col-sm-4 col-xs-6 fni pa10 dib pr bấmĐc", id: id }).append(
                                                            $("<div>", { class: "denmo bgsc bgrn bgpc pb43" }).ảnh(id),
                                                            $("<div>", { class: "wh1 pa t0 l0 pa10" }).append(
                                                                $("<div>", { class: "wh1 bgc03" }).append(
                                                                    $("<div>", { class: "wh1 pr" }).append(
                                                                        $("<div>", { class: "pa tl50 tt fs15", icon: "play_circle_outline::vam fs2 cd" })
                                                                    )
                                                                )
                                                            )
                                                        ).on("click", function () {
                                                            var id = $(this).attr("id");
                                                            khung(
                                                                $("<div>", { class: "pb43 bgcf" }).append(
                                                                    $("<iframe>", { class: "ol wh1", src: "https://www.youtube.com/embed/" + id })
                                                                ),
                                                                {
                                                                    trong: "col-md-6 col-sm-6 col-xs-11",
                                                                    viền: false,
                                                                    kotắt: false
                                                                }
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                        );
                                    });
                                }
                            );
                            $(".tabthưviện").on("click", function () {
                                alert(1);
                                var t = $(this),
                                    p = t.parent(),
                                    ts = t.index();
                                t.sửaLớp("-c6,bg1,mc1,cf,-bgcd").siblings().sửaLớp("-bg1,-mc1,c6,-cf,bgcd");
                                cl(ts)
                                p.next().children().eq(ts).sửaLớp("-dn").siblings().sửaLớp("dn");
                            })
                        } else if (i == 4593) {//trang con giới thiệu
                            $("#body").empty().append(
                                $("<div>", { class: "tac " + (dai > 700 ? "w90 mlra ptb35" : "plr10 ptb25") }).append(
                                    $("<div>", { class: "mc1 ttu fs2 lh1", text: "giới thiệu" }),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "grid tal" }).append(
                                        $("<div>", { class: "w1 grid chờgiớithiệu" }).append(
                                            range(0, 2).map(function (v, i) {
                                                return $("<a>", { class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc " + (dai > 700 ? "plr15" : "ptb15"), text: "" }).append(
                                                    $('<div>', { class: 'pr tal' }).append(
                                                        $("<div>", { class: "w1 pb43 bgcd shine ảnh" }),
                                                        $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc bgcd chữ" })
                                                    )
                                                )
                                            })
                                        )
                                    ).each(function () {
                                        var t = $(this);
                                        t.xửLý("bàiViết.tải.6", { d: Je({ ụ: 4593 }) }, function (i) {
                                            cl(i.length);
                                            CẦN.db("bàiViết" + i, function () {
                                                i.map(function (v, vt) {
                                                    var a = t.find("." + vt);
                                                    if (vt == i.length - 1) {
                                                        a.next().remove();
                                                    }
                                                    a.attr("id", v);
                                                    a.attr("href", dữLiệu.url(v, "ế"));
                                                    a.find(".ảnh").sửaLớp("-bgcd,-shine,shineh").css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" });
                                                    a.find(".chữ").sửaLớp("-bgcd,-shine").text(dữLiệu.tên(v, "ế").cắt(60));
                                                    a.sửaLớp("-" + vt);
                                                })
                                            })
                                        })
                                    })
                                )
                            )
                            $(window).on("scroll", function () {
                                var cuối = $(".chờgiớithiệu").find("a").last(),
                                    vịTrí = cuối.offset().top,
                                    cuốiCao = cuối.outerHeight(),
                                    cuốiId = cuối.attr("id");
                                //cl(cuốiId,vịTrí,cuốiCao,cuốiId);
                                var daco = [],
                                    list = $(".chờgiớithiệu").find("a");
                                list.map(function (v, i) {
                                    daco.push($(i).attr("id"))
                                })
                                //cl(daco)//,e:"<"+e.ấ
                                if (cuốiId) {
                                    if ($(window).scrollTop() >= vịTrí - (cuốiCao)) {
                                        CẦN.db("bàiViết." + cuốiId, function (e) {
                                            xửLý("bàiViết.tải.6", { d: Je({ ụ: Jd(e.ụ) }), e: "<" + e.ấ }, function (data) {
                                                //cl(data)
                                                data.map(function (v, vt) {
                                                    $(".chờgiớithiệu").find("#" + v).remove();
                                                    $(".chờgiớithiệu").append(
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), id: v, class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc mtb10 " + (dai > 700 ? "plr15" : ""), text: "" }).append(
                                                            $('<div>', { class: 'pr' }).append(
                                                                $("<div>", { class: "w1 pb43 ảnh" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" }),
                                                                $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc chữ", text: dữLiệu.tên(v, "ế") })
                                                            )
                                                        )
                                                    )
                                                })
                                            })
                                        })
                                    }
                                }
                            })
                        } else if (i == 4650) { // trang con đặt giỗ
                            $("#body").empty().append(
                                $("<div>", { class: "ptb35 " + (dai > 700 ? "w90 mlra" : "plr10") }).append(
                                    $("<div>", { class: "ttu fs15 mc1 tac pl5 lh1", text: "Đặt gói giỗ" }),
                                    $("<div>", { class: "tac pt25 grid" }).append(
                                        [
                                            "gói Bình An", "gói Như Ý", "gói Phú Quý", "gói động thổ", "gói giỗ/giỗ đầu", "gói thanh minh", "gói vu lan", "gói tạ mộ", "trọn gói"
                                        ].map(function (v, i) {
                                            return $("<div>", { class: "pa10 mlr3 góigiỗ fs15p ttu bấmĐc bss bcd bw1 bg1h cfh " + (dai > 700 ? "" : " mtb2") + (i == 0 ? " bg1 cf" : " c9"), stt: i, text: v }).append(
                                                $("<div>", { class: "" })
                                            )
                                        })
                                    ).on("click", ".góigiỗ", function () {
                                        var t = $(this),
                                            stt = t.attr("stt");
                                        t.sửaLớp("bg1,cf,-c9,-bgcf").siblings().sửaLớp("-bg1,-mc1,c9,bgcf");
                                        $(".góicon").children().eq(stt).sửaLớp("-dn").siblings().sửaLớp("dn");
                                    }),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "pb15 tac góicon" }).append(
                                        $("<div>", { class: "grid" }).append(
                                            $("<div>", { class: "mlr3 ttu fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói ba1 bg1 cf", id: "ba1", text: "bình an 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói ba2", id: "ba2", text: "bình an 2" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "ny1", text: "như ý 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "ny2", text: "như ý 2" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "ny3", text: "như ý 3" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "pq1", text: "phú quý 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "pq2", text: "phú quý 2" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "pq3", text: "phú quý 3" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "dt1", text: "động thổ 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", id: "dt2", text: "động thổ 2" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "giỗ" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "giỗ đầu" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "thanh minh 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "thanh minh 2" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "vu lan 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "vu lan 2" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "tạ mộ 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "tạ mộ 2" })
                                        ),
                                        $("<div>", { class: "grid dn" }).append(
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "trọn gói 1" }),
                                            $("<div>", { class: "mlr3 ttu c9 fs15p fs09-xs plr25 ptb5 bấmĐc bss bcd bw1 bg1h cfh gói", text: "trọn gói 2" })
                                        )
                                    ).on("click", ".gói", function () {
                                        var t = $(this),
                                            id = t.attr("id");
                                        t.sửaLớp("bg1,cf,-c9,-bgcf").siblings().sửaLớp("-bg1,-cf,c9,bgcf");
                                        $(".môtảgói").find("." + id).sửaLớp("-dn").siblings().sửaLớp("dn");
                                    }),
                                    $("<div>", { class: "môtảgói" }).append(
                                        $("<div>", { class: "ba1" }).append(
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Diễn giải dịch vụ:" }),
                                                $("<div>", { class: "", text: "Thắp hương đến 49 ngày" })
                                            ),
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Tần suất:" }),
                                                $("<div>", { class: "", text: "Hàng ngày" })
                                            ),
                                            $("<div>", { class: "pb15 fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 dib mc1", text: "- Hạng mục:" }),
                                                $("<div>", { class: "dib", text: "hương 3 nén" }),
                                                $("<div>", { class: "sảnphẩm" }).append(
                                                    //,{a:"img/xoiche1.jpg",text:"Xôi chè"},{a:"img/trung2.jpg",text:"Trứng sống"},{a:"img/tienvang1.jpg",text:"Tiền vàng mã"},{a:"img/ruoucung1.jpg",text:"Rượu cúng"},{a:"img/hoaqua1.jpg",text:"Hoa quả"},{a:"img/traucau1.jpg",text:"Trầu cau"},{a:"img/nguama1.jpg",text:"Ngựa thần linh"},{a:"img/lavie1.jpg",text:"Nước khoáng Lavie"},{a:"img/oan1.jpg",text:"Oản lễ"},{a:"img/thuocla1.jpg",text:"Thuốc lá Vinataba"},
                                                    $("<div>", { class: "grid pt25" }).append(
                                                        [
                                                            { a: "img/huong.png", text: "Hương nén" }
                                                        ].map(function (v, i) {
                                                            return $("<div>", { class: "col-md-3 col-sm-3 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx bss bcd bw1" }).css({ background: "url('" + v.a + "') center/cover" }),
                                                                $("<div>", { class: "w1 ptb10 tac tduh bấmĐc", text: v.text })
                                                            )
                                                        })
                                                    ),
                                                    $("<div>", { class: "tac w1 ptb15" }).append(
                                                        $("<div>", { class: "btn bg1 ptb10 plr15 bra3 cf fs11 mc1 dib bấmĐc", icon: "add_shopping_cart::fs1 mr10", text: "Đặt lễ" }).on("click", function () {
                                                            var a = $.đệm("hàngđặt");
                                                            if (!a) {
                                                                $.đệm("hàngđặt", ["ba1"])
                                                            }
                                                            notice(
                                                                { t: "Đã thêm vào giỏ hàng", loại: true }
                                                            );
                                                            $(".giỏHàng").báo("cóbáo")
                                                        })
                                                    ),
                                                    $("<div>", { class: "hiểnthịgóigiỗ grid dn" }).append(
                                                        range(1, 8).map(function (v, i) {
                                                            return $("<div>", { class: "col-md-2 col-sm-2 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx" }).css({ background: "" }),
                                                                $("<div>", { class: "w1 pb169" })
                                                            )
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "ba2 dn" }).append(
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Diễn giải dịch vụ:" }),
                                                $("<div>", { class: "", text: "Thắp hương đến 100 ngày" })
                                            ),
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Tần suất:" }),
                                                $("<div>", { class: "", text: "Hàng ngày" })
                                            ),
                                            $("<div>", { class: "pb15 fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 dib mc1", text: "- Hạng mục:" }),
                                                $("<div>", { class: "dib", text: "hương 3 nén" }),
                                                $("<div>", { class: "sảnphẩm" }).append(
                                                    $("<div>", { class: "grid pt25" }).append(
                                                        [
                                                            { a: "img/huong.png", text: "Hương nén" }
                                                        ].map(function (v, i) {
                                                            return $("<div>", { class: "col-md-3 col-sm-3 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx bss bcd bw1" }).css({ background: "url('" + v.a + "') center/cover" }),
                                                                $("<div>", { class: "w1 ptb10 tac tduh bấmĐc", text: v.text })
                                                            )
                                                        })
                                                    ),
                                                    $("<div>", { class: "tac w1 ptb15" }).append(
                                                        $("<div>", { class: "btn bg1 ptb5 plr10 bra3 cf fs11 mc1 dib bấmĐc", icon: "add_shopping_cart::fs1 mr10", text: "Đặt lễ" }).on("click", function () {
                                                            var a = $.đệm("hàngđặt");
                                                            if (!a) {
                                                                $.đệm("hàngđặt", ["ba1"])
                                                            }
                                                            notice(
                                                                { t: "Đã thêm vào giỏ hàng", loại: true }
                                                            );
                                                            $(".giỏHàng").báo("cóbáo")
                                                        })
                                                    ),
                                                    $("<div>", { class: "hiểnthịgóigiỗ grid dn" }).append(
                                                        range(1, 8).map(function (v, i) {
                                                            return $("<div>", { class: "col-md-2 col-sm-2 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx" }).css({ background: "" }),
                                                                $("<div>", { class: "w1 pb169" })
                                                            )
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "ny1 dn" }).append(
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Diễn giải dịch vụ:" }),
                                                $("<div>", { class: "", text: "Thắp hương hoa tươi, nến, tiền vàng, quả" })
                                            ),
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Tần suất:" }),
                                                $("<div>", { class: "", text: "Hương nến thắp hàng ngày, hoa,trái cây và tiền vàng thay 3 ngày 1 lần" })
                                            ),
                                            $("<div>", { class: "pb15 fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 dib mc1", text: "- Hạng mục:" }),
                                                $("<div>", { class: "dib", text: "Hương 3 nén, 1 đĩa trái cây nhỏ (3 loại quả), 5 bông cúc/hồng, 1 cốc nhở, 1 lễ tiền vàng, mâm cỗ chay nhỏ" }),
                                                $("<div>", { class: "sảnphẩm" }).append(
                                                    $("<div>", { class: "grid pt25" }).append(
                                                        [
                                                            { a: "img/huong.png", text: "Hương nén" }, { a: "img/nencoc.png", text: "Nến" }, { a: "img/hoacuc1.png", text: "Hoa cúc" }, { a: "img/hoaqua.png", text: "Trái cây" }, { a: "img/tienvang.png", text: "Tiền vàng" }, { a: "img/cochay.png", text: "Mâm cỗ chay" }
                                                        ].map(function (v, i) {
                                                            return $("<div>", { class: "col-md-3 col-sm-3 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx bss bcd bw1" }).css({ background: "url('" + v.a + "') center/cover" }),
                                                                $("<div>", { class: "w1 ptb10 tac tduh bấmĐc", text: v.text })
                                                            )
                                                        })
                                                    ),
                                                    $("<div>", { class: "tac w1 ptb15" }).append(
                                                        $("<div>", { class: "btn bg1 ptb5 plr10 bra3 cf fs11 mc1 dib bấmĐc", icon: "add_shopping_cart::fs1 mr10", text: "Đặt lễ" }).on("click", function () {
                                                            var a = $.đệm("hàngđặt");
                                                            if (!a) {
                                                                $.đệm("hàngđặt", ["ba1"])
                                                            }
                                                            notice(
                                                                { t: "Đã thêm vào giỏ hàng", loại: true }
                                                            );
                                                            $(".giỏHàng").báo("cóbáo")
                                                        })
                                                    ),
                                                    $("<div>", { class: "hiểnthịgóigiỗ grid dn" }).append(
                                                        range(1, 8).map(function (v, i) {
                                                            return $("<div>", { class: "col-md-2 col-sm-2 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx" }).css({ background: "" }),
                                                                $("<div>", { class: "w1 pb169" })
                                                            )
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "pq1 dn" }).append(
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Diễn giải dịch vụ:" }),
                                                $("<div>", { class: "", text: "Thắp hương hoa tươi, nến, tiền vàng" })
                                            ),
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Tần suất:" }),
                                                $("<div>", { class: "", text: "Hương nến thắp hàng ngày, hoa 3 ngày thay 1 lần" })
                                            ),
                                            $("<div>", { class: "pb15 fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 dib mc1", text: "- Hạng mục:" }),
                                                $("<div>", { class: "dib", text: "Hương 3 nén, 5 bông cúc/hồng, 1 cốc nhở, 1 lễ tiền vàng" }),
                                                $("<div>", { class: "sảnphẩm" }).append(
                                                    $("<div>", { class: "grid pt25" }).append(
                                                        [
                                                            { a: "img/huong.png", text: "Hương nén" }, { a: "img/nencoc.png", text: "Nến" }, { a: "img/hoacuc1.png", text: "Hoa cúc" }, { a: "img/hoaqua.png", text: "Trái cây" }, { a: "img/tienvang.png", text: "Tiền vàng" }
                                                        ].map(function (v, i) {
                                                            return $("<div>", { class: "col-md-3 col-sm-3 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx bss bcd bw1" }).css({ background: "url('" + v.a + "') center/cover" }),
                                                                $("<div>", { class: "w1 ptb10 tac tduh bấmĐc", text: v.text })
                                                            )
                                                        })
                                                    ),
                                                    $("<div>", { class: "tac w1 ptb15" }).append(
                                                        $("<div>", { class: "btn bg1 ptb5 plr10 bra3 cf fs11 mc1 dib bấmĐc", icon: "add_shopping_cart::fs1 mr10", text: "Đặt lễ" }).on("click", function () {
                                                            var a = $.đệm("hàngđặt");
                                                            if (!a) {
                                                                $.đệm("hàngđặt", ["ba1"])
                                                            }
                                                            notice(
                                                                { t: "Đã thêm vào giỏ hàng", loại: true }
                                                            );
                                                            $(".giỏHàng").báo("cóbáo")
                                                        })
                                                    ),
                                                    $("<div>", { class: "hiểnthịgóigiỗ grid dn" }).append(
                                                        range(1, 8).map(function (v, i) {
                                                            return $("<div>", { class: "col-md-2 col-sm-2 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx" }).css({ background: "" }),
                                                                $("<div>", { class: "w1 pb169" })
                                                            )
                                                        })
                                                    )
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "dt1 dn" }).append(
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Diễn giải dịch vụ:" }),
                                                $("<div>", { class: "", text: "Thắp hương đến 100 ngày" })
                                            ),
                                            $("<div>", { class: "pb15 grid fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 mc1 ", text: "- Tần suất:" }),
                                                $("<div>", { class: "", text: "Hàng ngày" })
                                            ),
                                            $("<div>", { class: "pb15 fs12 fs09-xs c6" }).append(
                                                $("<div>", { class: " mr10 dib mc1", text: "- Hạng mục:" }),
                                                $("<div>", { class: "dib", text: "hương 3 nén" }),
                                                $("<div>", { class: "sảnphẩm" }).append(
                                                    $("<div>", { class: "grid pt25" }).append(
                                                        [
                                                            { a: "img/huong.png", text: "Hương nén" }
                                                        ].map(function (v, i) {
                                                            return $("<div>", { class: "col-md-3 col-sm-3 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx bss bcd bw1" }).css({ background: "url('" + v.a + "') center/cover" }),
                                                                $("<div>", { class: "w1 ptb10 tac tduh bấmĐc", text: v.text })
                                                            )
                                                        })
                                                    ),
                                                    $("<div>", { class: "tac w1 ptb15" }).append(
                                                        $("<div>", { class: "btn bg1 ptb5 plr10 bra3 cf fs11 mc1 dib bấmĐc", icon: "add_shopping_cart::fs1 mr10", text: "Đặt lễ" }).on("click", function () {
                                                            var a = $.đệm("hàngđặt");
                                                            if (!a) {
                                                                $.đệm("hàngđặt", ["ba1"])
                                                            }
                                                            notice(
                                                                { t: "Đã thêm vào giỏ hàng", loại: true }
                                                            );
                                                            $(".giỏHàng").báo("cóbáo")
                                                        })
                                                    ),
                                                    $("<div>", { class: "hiểnthịgóigiỗ grid dn" }).append(
                                                        range(1, 8).map(function (v, i) {
                                                            return $("<div>", { class: "col-md-2 col-sm-2 col-xs-6 fni pa5" }).append(
                                                                $("<div>", { class: "w1 pb43 bgcfx" }).css({ background: "" }),
                                                                $("<div>", { class: "w1 pb169" })
                                                            )
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                                //.thaoTácGóiSảnPhẩm()
                            )
                        } else if (i == 4594) {//trang con dịch vụ
                            $("#body").empty().append(
                                $("<div>", { class: "tac " + (dai > 700 ? "w80 mlra pt35" : "pt25") }).append(
                                    $("<div>", { class: "ttu mc1 fs15 tac", text: "dịch vụ lạc hồng viên" }),
                                    $("<div>", { class: "mc1 fs11 tac pt15", text: "Danh sách dịch vụ hiện có của chúng tôi" })
                                ).thêmBàiDịchVụ(i),
                                $("<div>", { class: "divider green" }),
                                $("<div>", { class: "grid " + (dai > 700 ? "w85 mlra pb35" : "plr10 pb25") }).append(
                                    $("<div>", { class: "w1 grid chờdịchvụ" }).append(
                                        range(0, 5).map(function (v, i) {
                                            return $("<a>", { class: " " + i + (dai > 700 ? " w33 pa15 vat bấmĐc" : " w1 pa5") }).append(
                                                $('<div>', { class: 'pr' }).append(
                                                    $("<div>", { class: "w1 pb43 bgcd shine ảnh" }),
                                                    $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc bgcd chữ" })
                                                )
                                            )
                                        })
                                    )
                                ).each(function () {
                                    var t = $(this);
                                    t.xửLý("bàiViết.tải.6", { d: Je({ ụ: i }) }, function (li) {
                                        CẦN.db("bàiViết" + li, function () {
                                            if (li.length <= 0) {
                                                t.children().remove()
                                            } else {
                                                li.map(function (v, vt) {
                                                    var a = t.find("." + vt),
                                                        n = a.next();
                                                    if (vt == li.length - 1) {
                                                        n.next().remove();
                                                        n.remove();
                                                    }
                                                    a.attr("id", v);
                                                    a.attr("href", dữLiệu.url(v, "ế"));
                                                    a.find(".ảnh").sửaLớp("-bgcd,-shine,shineh").css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" });
                                                    a.find(".chữ").sửaLớp("-bgcd,-shine").text(dữLiệu.tên(v, "ế").cắt(35));
                                                    a.sửaLớp("-" + vt);
                                                })
                                            }
                                        })
                                    })
                                })
                            )
                            $(window).on("scroll", function () {
                                var cuối = $(".chờdịchvụ").find("a").last(),
                                    vịTrí = cuối.offset().top,
                                    cuốiCao = cuối.outerHeight(),
                                    cuốiId = cuối.attr("id");
                                //cl(cuốiId,vịTrí,cuốiCao,cuốiId);
                                var daco = [],
                                    list = $(".chờdịchvụ").find("a");
                                list.map(function (v, i) {
                                    daco.push($(i).attr("id"))
                                })
                                //cl(daco)//,e:"<"+e.ấ
                                if (cuốiId) {
                                    if ($(window).scrollTop() >= vịTrí - (cuốiCao)) {
                                        CẦN.db("bàiViết." + cuốiId, function (e) {
                                            xửLý("bàiViết.tải.6", { d: Je({ ụ: Jd(e.ụ) }), e: "<" + e.ấ }, function (data) {
                                                //cl(data)
                                                data.map(function (v, vt) {
                                                    $(".chờdịchvụ").find("#" + v).remove();
                                                    $(".chờdịchvụ").append(
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), id: v, class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc mtb10 " + (dai > 700 ? "plr15" : ""), text: "" }).append(
                                                            $('<div>', { class: 'pr' }).append(
                                                                $("<div>", { class: "w1 pb43 ảnh shineh " }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" }),
                                                                $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc chữ", text: dữLiệu.tên(v, "ế") })
                                                            )
                                                        )
                                                    )
                                                })
                                            })
                                        })
                                    }
                                }
                            })
                        } else if (i == 4603 || i == 4607 || i == 4608 || i == 4613 || i == 4616 || i == 4617 || i == 4595) {//trang con mẫu mộ
                            var thẻ;
                            //mục = (i==4595 ? ["4603","4607","4608","4613","4616","4617"] : i);
                            $("#body").empty().append(
                                $("<div>", { class: "tac " + (dai > 700 ? "w90 mlra" : "plr10") }).append(
                                    $("<div>", { class: "mc1 ttu fs2 lh1 pt25 fs12-xs ttu", text: "Mẫu mộ" }),
                                    $("<div>", { class: "divider green" }),
                                    $("<div>", { class: "grid tal pb35 chờmẫu " + (dai > 700 ? "" : "") }).append(
                                        (i == 4595 ?
                                            range(0, 5).map(function (v, i) {
                                                return $("<a>", { class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc mtb10 " + (dai > 700 ? "plr15" : ""), text: "" }).append(
                                                    $('<div>', { class: 'pr' }).append(
                                                        $("<div>", { class: "w1 pb43 bgcd shine ảnh" }),
                                                        $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc bgcd chữ" })
                                                    )
                                                )
                                            }) : range(0, 2).map(function (v, i) {
                                                return $("<a>", { class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc mtb10 " + (dai > 700 ? "plr15" : ""), text: "" }).append(
                                                    $('<div>', { class: 'pr' }).append(
                                                        $("<div>", { class: "w1 pb43 bgcd shine ảnh" }),
                                                        $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc bgcd chữ" })
                                                    )
                                                )
                                            })
                                        )
                                    ).each(function () {
                                        var t = $(this);
                                        t.xửLý("bàiViết.tải.6", { d: Je({ ụ: i }) }, function (li) {
                                            if (li.length <= 0) {
                                                t.empty();
                                                t.append(
                                                    $("<div>", { class: "fs15 c6 tac w1", text: "Chuyên mục này hiện chưa có bài viết!" })
                                                )
                                            } else {
                                                li.map(function (v, vt) {
                                                    // var co = config("bàiViết."+v)
                                                    // cl(co.ấ,co.ụ)
                                                    var a = t.find("." + vt);
                                                    n = a.next();
                                                    cl(a)
                                                    if (vt == li.length - 1) {
                                                        n.next().remove();
                                                        n.remove();
                                                    }
                                                    a.attr("id", v);
                                                    a.attr("href", dữLiệu.url(v, "ế"));
                                                    a.find(".ảnh").sửaLớp("-bgcd,-shine,shineh").css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" });
                                                    a.find(".chữ").sửaLớp("-bgcd,-shine").text(dữLiệu.tên(v, "ế").cắt(40));
                                                    a.sửaLớp("-" + vt);
                                                })
                                            }
                                        })
                                    })
                                ).thêmBàiMẫuMộ(i)
                            )
                            $(window).on("scroll", function () {
                                var cuối = $(".chờmẫu").find("a").last(),
                                    vịTrí = cuối.offset().top,
                                    cuốiCao = cuối.outerHeight(),
                                    cuốiId = cuối.attr("id");
                                var daco = [],
                                    list = $(".chờmẫu").find("a");
                                list.map(function (v, i) {
                                    daco.push($(i).attr("id"))
                                })
                                if ($(window).scrollTop() >= vịTrí - (cuốiCao)) {
                                    CẦN.db("bàiViết." + cuốiId, function (e) {
                                        // cl(e.ụ)
                                        // cl(mục)
                                        xửLý("bàiViết.tải.6", { d: Je({ ụ: i }), e: "<" + e.ấ }, function (data) {
                                            data.map(function (v, vt) {
                                                $(".chờmẫu").find("#" + v).remove();
                                                $(".chờmẫu").append(
                                                    $("<a>", { href: dữLiệu.url(v, "ế"), id: v, class: i + " col-md-4 col-sm-4 col-xs-12 fni bấmĐc mtb10 " + (dai > 700 ? "plr15" : ""), text: "" }).append(
                                                        $('<div>', { class: 'pr' }).append(
                                                            $("<div>", { class: "w1 pb43 ảnh" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" }),
                                                            $("<div>", { class: "pa b0 l0 w1 ptb15 pl10 fs09-xs fs1 cf bgc06 bấmĐc chữ", text: dữLiệu.tên(v, "ế") })
                                                        )
                                                    )
                                                )
                                            })
                                        })
                                    })
                                }
                            })
                        } else if (i == 4599) { // cúng giỗ online
                            // if (!là("U")) {
                            // 	$(".loginicon").trigger("click")
                            // } else {
                            tìmKiếmChânLinh();
                            //}
                        } else {//trang con tin tức
                            CẦN.db("chuyênMục." + i, function (ttmuc) {
                                cl(ttmuc);
                                //console.log(1);
                                url = location.pathname;
                                trang = url.match(/(page)+\w/g) ? url.match(/(page)+\w+/g)[0].match(/\d+/g) : 1;
                                cl(trang);
                                $("#body").empty().append(
                                    $("<div>", { class: "ptb35 " + (dai > 700 ? "w80 mlra" : "") }).append(
                                        $("<div>", { class: "fs2 ttu fs13-xs mc1 lh1 tac", text: "tin tức" }),
                                        $("<div>", { class: "divider green" }),
                                        $("<div>", { class: "col-md-8 col-sm-8 col-xs-12 fni " + (dai > 700 ? "pr35 dib " : "plr10 pt25") }).append(
                                            $("<div>", { class: "pr listbài" }).append(
                                                $("<div>", { class: "divchờ pa t0 l0 w1 z5 bgcf" }).append(
                                                    ["", "", "", "", "", "", ""].map(function (v, i) {
                                                        return $("<div>").append(
                                                            $("<div>", { class: "tintuc grid ptb10 db" }).append(
                                                                $("<div>", { class: "w30" }).append(
                                                                    $("<div>", { class: "w1 pb43 bgcd shine" })
                                                                ),
                                                                $("<div>", { class: "w60 pl15 vat" }).append(
                                                                    $("<div>", { class: "bgcfx mb10 w1 ptb10 shine" }),
                                                                    $("<div>", { class: "bgcfx mb15 w1 ptb10 shine", text: "" }),
                                                                    $("<div>", { class: "bgcfx w1 ptb15 shine", text: "" })
                                                                )
                                                            )
                                                        )
                                                    })
                                                )
                                            ).each(function () {
                                                var t = $(this);
                                                t.xửLý("bàiViết.tải.300", { d: Je({ ụ: i }) }, function (m) {
                                                    //CẦN.db("bàiViết"+m,function(){
                                                    //cl(m)
                                                    var tu = (trang - 1) * 10,
                                                        den = tu * 1 + 9;
                                                    chờ(function () {
                                                        $(".divchờ").remove();
                                                    }, 1500)
                                                    m.map(function (v, vt) {
                                                        if (vt >= tu && vt <= den) {
                                                            var c = config("bàiViết." + v),
                                                                ảnh = $("<div>").html(c.ộ).find("img:eq(0)").attr("src") || "";
                                                            if (!ảnh.match(/wp-content/)) {
                                                                if (c.ả == null || empty(c.ả))
                                                                    c.ả = "";
                                                                var m = c.ả.match("http");
                                                                ảnh = m ? c.ả : dữLiệu.ảnh(v, "ế", "500x", "https://lachongvien.inevn.com/img/thunen5.jpg");
                                                            }
                                                            // else if(ảnh.match(/wp-content/)){
                                                            // 	ảnh = c.ả;
                                                            // }
                                                            $(".listbài").append(
                                                                $("<a>", { id: v, href: dữLiệu.url(v, "ế"), class: "tintuc grid ptb15 db" }).append(
                                                                    $("<div>", { class: "w30" }).append(
                                                                        $("<div>", { class: "w1 pb169 bgcfx", classM: "-pb169,pb43" }).css({ background: "url('" + ảnh + "') center/cover" })
                                                                    ),
                                                                    $("<div>", { class: "w60 pl15 vat" }).append(
                                                                        $("<div>", { class: "fs11 fwb fs11-xs lh15", text: dữLiệu.tên(v, "ế").cắt(80) }),
                                                                        $("<div>", { class: "grid" }).append(
                                                                            $("<div>", { class: "fs085 c9 pb10 mr3", text: dữLiệu.tên(i, "ụ") + " -" }),
                                                                            $("<div>", { class: "fs085 c9 pb10", text: đổiTG(c.ấ) }),
                                                                        ),
                                                                        $("<div>", { class: "fs1 dn-xs", style: "text-align:justify", text: c.ô ? c.ô.cắt(150) : dE(lọc(c.ộ.cắt(150))) })
                                                                    )
                                                                )
                                                            )
                                                        }
                                                    })

                                                    //phân trang
                                                    var sotrang = Math.ceil(m.length / 10);
                                                    //cl(sotrang)
                                                    for (y = 1; y <= sotrang; y++) {
                                                        if (y == 1) {
                                                            $(".dautien").append(
                                                                $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3" + ((y == 1 || y == 2) ? "" : " dn"), text: y, stt: y })
                                                            )
                                                        } else if (y > 1 && y < sotrang) {
                                                            $(".giua").append(
                                                                $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin dn pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3" + ((y == 1 || y == 2) ? "" : " dn"), text: y, stt: y })
                                                            )
                                                        } else {
                                                            $(".cuoicung").append(
                                                                $("<a>", { href: dữLiệu.url(i, "ụ") + "/page" + y, id: y, class: "bấmĐc trangtin pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3" + ((y == sotrang) ? "" : " dn"), text: y, stt: y })
                                                            )
                                                        }
                                                    }
                                                    //cl($(".phansau").children().first());
                                                    $("#" + trang).sửaLớp("bg1,cf,-bgcf,-mc1,-dn").siblings().sửaLớp("-bg1,-cf,bgcf,mc1");
                                                    var sau = trang * 1 + 1,
                                                        truoc = trang * 1 - 1;
                                                    //cl(truoc)
                                                    $("#" + sau).sửaLớp("-dn");
                                                    if ($("#" + sau).prevAll(".cuoicung").length() > 2) {
                                                        $(".ogiua").sửaLớp("dn");
                                                    }
                                                    $("#" + truoc).sửaLớp("-dn");
                                                    if (truoc - 1 > 1) {
                                                        $("<div>", { class: " pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." }).insertBefore($("#" + truoc))
                                                    } else {
                                                        for (i = 2; i < truoc; i++) {
                                                            $("#" + i).sửaLớp("-dn")
                                                        }
                                                    }
                                                    //})
                                                })
                                            }),
                                            $("<div>", { class: "phântrang pt25 grid tac" }).append(
                                                $("<div>", { class: "ptb5 trangtruoc bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", icon: "keyboard_arrow_left::fs1" }),
                                                $("<div>", { class: "dautien grid" }),
                                                $("<div>", { class: "giua grid" }),
                                                $("<div>", { class: "ogiua pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." }),
                                                $("<div>", { class: "cuoicung grid" }),
                                                $("<div>", { class: "ptb5 trangsau bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", icon: "keyboard_arrow_right::fs1" })
                                            )
                                        ),
                                        $("<div>", { class: "vmlq col-md-4 col-sm-4 col-xs-12 fni tac vat pr " + (dai > 700 ? "dib" : "mt15 plr10") }).append(
                                            $("<div>", { class: "phầnfix" }).append(
                                                $("<div>", { class: "pb169 bgsc bgpc bgrn pr" }).css({ backgroundImage: "url('/img/toancanh.jpg')" }).append(
                                                ),
                                                $("<div>", { class: "", text: "" }).append(
                                                    $("<div>", { class: "grid tac mc1 fs12 fs09-xs pt10 pb5" }).append(
                                                        $("<div>", { class: "bg1 cf w50 ptb5 brbl3 brtl3 tab bấmĐc", text: "Tin đọc nhiều nhất " }),
                                                        $("<div>", { class: "bgcfx c6 w50 ptb5 brtr3 brbr3 tab bấmĐc", text: "Danh mục liên quan " })
                                                    ).on("click", ".tab", function () {
                                                        var t = $(this),
                                                            vt = t.index();
                                                        t.sửaLớp("bg1,cf,-c6,-bgcd").siblings().sửaLớp("bgcd,c6,-bg1,-cf");
                                                        t.parent().next().children().eq(vt).sửaLớp("-dn").siblings().sửaLớp("dn");
                                                    }),
                                                    $("<div>", { class: "tal", text: "" }).append(
                                                        $("<div>", { class: "" }).each(function () {
                                                            var t = $(this);
                                                            var mục = ["4625", "4626", "4627", "4628", "4629"];
                                                            t.xửLý("bàiViết.tải.3", { d: Je({ ụ: mục, ko: i }) }, function (li) {
                                                                li.map(function (v, vt) {
                                                                    var ảnh = '',
                                                                        c = config("bàiViết." + v),
                                                                        ảnh = $("<div>").html(c.ộ).find("img:eq(0)").attr("src") || "";
                                                                    if (!ảnh.match(/wp-content/)) {
                                                                        if (c.ả == null || empty(c.ả))
                                                                            c.ả = "";
                                                                        var m = c.ả.match("http");
                                                                        ảnh = m ? c.ả : dữLiệu.ảnh(v, "ế", "500x", "https://lachongvien.inevn.com/img/thunen5.jpg");
                                                                    }
                                                                    t.append(
                                                                        $("<a>", { href: dữLiệu.url(v, "ế"), class: "grid ptb10 db" }).append(
                                                                            $("<div>", { class: "w30" }).append(
                                                                                $("<div>", { class: "w1 pb169 bấmĐc" }).css({
                                                                                    background: "url('" + ảnh + "') center/cover"
                                                                                })
                                                                            ),
                                                                            $("<div>", { class: "w70 plr10 vat oh bấmĐc" }).append(
                                                                                $("<div>", { class: "fwb mc1h", text: dữLiệu.tên(v, "ế").cắt(80) }),
                                                                                $("<div>", { class: "pt5 c6 grid fs09", text: "Lạc Hồng Viên - " + đổiTG2(config("bàiViết." + v)["ấ"]) })
                                                                            )
                                                                        )
                                                                    )
                                                                })
                                                            })
                                                        }),
                                                        $("<div>", { class: "dn" }).each(function () {
                                                            var t = $(this);
                                                            CẦN.db("chuyênLực.4597", function (muc) {
                                                                //cl(muc)
                                                                muc.map(function (v, vt) {
                                                                    if (v != i) {
                                                                        t.append(
                                                                            $("<a>", { href: dữLiệu.url(v, "ụ"), class: "vat oh bấmĐc c6 bra3 tduh ptb10 bgcfx mtb10 fs11 fs09-xs db pl10" }).append(
                                                                                $("<div>", { text: dữLiệu.tên(v, "ụ").cắt(80) })
                                                                            )
                                                                        )
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    ).thêmBàiMiêuTả(i)
                                );
                                $(document).on("click", ".trangsau,.trangtruoc", function () {
                                    var t = $(this),
                                        ts = t.hasClass(".trangsau"),
                                        ht = $("#" + trang),
                                        httrc = $("#" + (trang * 1 - 1)),
                                        htsau = $("#" + (trang * 1 + 1));
                                    if (ts) {
                                        htsau.trigger("click");
                                    } else {
                                        httrc.trigger("click");
                                    }
                                });
                            });
                        }
                    },
                    //bài viết mộ
                    v: function (i) {
                        lênĐầu();
                        CẦN.db("3c0c958398cae6607d5d04b6a735df99." + i, function (lay) {
                            //cl(lay)
                            var anh = Jd(lay["219791"]),
                                pic = anh["ậ"][0],
                                url = lay["219790"].replace(/(\/)/g, "-");
                            $("#menu").sửaLớp("-bss,-bb1,-bcd");
                            $("#phim").sửaLớp("dn");
                            //CẦN.db("bàiViết."+i,function(){
                            //var a = config("bàiViết."+i);
                            $("#body").empty().append(
                                $("<div>", { class: "pt50 grid " + (dai > 700 ? "w90 mlra" : "") }).append(
                                    $("<div>", { class: "col-md-8 col-sm-8 col-xs-12 fni " + (dai > 700 ? "pr35" : "plr10") }).append(
                                        $("<div>", { class: "fwb mc1 pb15 ttu pb10 bb1 bss bcd fs15 fs12-xs lh12", text: lay["219790"] }),
                                        //$("<div>",{class:"c9 mt10",text:iDate(a.ấ,"{j} / {n} / {f}")}).thaotácBàiViết(i,a.ê,a.ô,a.ộ,"v"),
                                        $("<div>", { class: "pt25 grid pr pa10" }).append(
                                            $("<div>", { class: "w1 pb169 slideanh oh wsn grid bgso bgpc bgrn bgcfx" }).append(
                                                // $("<div>",{class:"w1 pb169 bgcf"}),
                                                // $("<div>",{class:"w1 pb169 bgcd"}),
                                                // $("<div>",{class:"w1 pb169 bgcfx"}),
                                                // $("<div>",{class:"w1 pb169 bg1"}),
                                                // $("<div>",{class:"w1 pb169 bgcrd"}),
                                            ),
                                            $("<div>", { class: "pa tl50 w1 tt plr10" }).append(
                                                $("<div>", { class: "pr" }).append(
                                                    $("<div>", { class: "pa3 prev fs15 sang pa bấmĐc l0 cf bgc03 brtr3 brbr3", classM: "-fs15,fs11", icon: "navigate_before::vam fs2 " }),
                                                    $("<div>", { class: "pa3 next fs15 sang pa bấmĐc r0 cf bgc03 brtl3 brbl3", classM: "-fs15,fs11", icon: "navigate_next::vam fs2 " })
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "w1 slidecon cat-list mb25 wsn grid", style: "overflow-x:auto" }).append(
                                            // $("<div>",{class:" bgcf anhcon w33 h1 hiện",mau:"bgcf"}),
                                            // $("<div>",{class:" bgcd anhcon w33 h1",mau:"bgcd"}),
                                            // $("<div>",{class:" bgcfx anhcon w33 h1",mau:"bgcfx"}),
                                            // $("<div>",{class:" bg1 anhcon w33 h1",mau:"bg1"}),
                                            // $("<div>",{class:" bgcrd anhcon w33 h1",mau:"bgcrd"}),
                                        ),
                                        $("<div>", { class: "fs12 lh15", style: "text-align:justify", text: lay["219792"] })
                                        // $("<div>",{class:"ptb35"}).append(
                                        // 	$("<div>",{class:"bss bcd bb1 pb10 mc1 fs15 fs12-xs mc1",text:"Bài viết liên quan"}),
                                        // 	$("<div>",{class:"grid mt25"}).append(
                                        // 	).each(function(){
                                        // 		//cl(a.ụ,i);
                                        // 		var t = $(this);
                                        // 		t.xửLý("bàiViết.tải.3",{d:Je({ụ:Jd(a.ụ)[0],ko:i})},function(li){
                                        // 			li.map(function(v,vt){
                                        // 				CẦN.db("bàiViết."+v,function(bài){
                                        // 					t.append(
                                        // 						$("<a>",{href:dữLiệu.tên(v,"ế").toURL()+".m"+v+".html",class:"w33 plr10 vat bấmĐc"}).append(
                                        // 							$("<div>",{class:"pb169"}).css({background:"url('"+dữLiệu.ảnh(v,"ế","300x")+"') center/cover"}),
                                        // 							$("<div>",{class:"mt10 tduh fs09",text:dữLiệu.tên(v,"ế").cắt(40)})
                                        // 						)
                                        // 					)
                                        // 				})
                                        // 			})
                                        // 		})
                                        // 	})
                                        // )
                                    ),
                                    //thanh bên cạnh
                                    $("<div>", { class: "vmlq col-md-4 col-sm-4 col-xs-12 fni tac vat pr " + (dai > 700 ? "plr10" : "mt15 plr10 dn") }).append(
                                        $("<div>", { class: "phầnfix" }).append(
                                            $("<div>", { class: "pb169 bgsc bgpc bgrn pr" }).css({ backgroundImage: "url('/img/toancanh.jpg')" }),
                                            $("<div>", { class: "", text: "" }).append(
                                                $("<div>", { class: "grid tac mc1 fs12 fs09-xs pt10 pb5" }).append(
                                                    $("<div>", { class: "bg1 cf w50 ptb5 brbl3 brtl3 tab bấmĐc", text: "Tin đọc nhiều nhất " }),
                                                    $("<div>", { class: "bgcfx c6 w50 ptb5 brtr3 brbr3 tab bấmĐc", text: "Bài viết liên quan " })
                                                ).on("click", ".tab", function () {
                                                    var t = $(this),
                                                        vt = t.index();
                                                    t.sửaLớp("bg1,cf,-c6,-bgcd").siblings().sửaLớp("bgcd,c6,-bg1,-cf");
                                                    t.parent().next().children().eq(vt).sửaLớp("-dn").siblings().sửaLớp("dn");
                                                }),
                                                $("<div>", { class: "tal", text: "" }).append(
                                                    $("<div>", { class: "" }).each(function () {
                                                        var t = $(this);
                                                        var mục = ["4625", "4626", "4627", "4628", "4629"];
                                                        t.xửLý("bàiViết.tải.3", { d: Je({ ụ: mục }) }, function (li) {
                                                            li.map(function (v, vt) {
                                                                t.append(
                                                                    $("<a>", { href: dữLiệu.url(v, "ế"), class: "grid ptb10 db" }).append(
                                                                        $("<div>", { class: "w30" }).append(
                                                                            $("<div>", { class: "w1 pb169 bấmĐc" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "200x") + "') center/cover" })
                                                                        ),
                                                                        $("<div>", { class: "w70 plr10 vat oh bấmĐc" }).append(
                                                                            $("<div>", { class: "fwb mc1h", text: dữLiệu.tên(v, "ế").cắt(80) }),
                                                                            $("<div>", { class: "pt5 c6 grid fs09", text: "Lạc Hồng Viên - " + đổiTG2(config("bàiViết." + v)["ấ"]) })
                                                                        )
                                                                    )
                                                                )
                                                            })
                                                        })
                                                    })
                                                    // $("<div>",{class:"dn"}).each(function(){
                                                    // 	var t = $(this);
                                                    // 	t.xửLý("bàiViết.tải.3",{d:Je({ụ:Jd(a.ụ)[0],ko:i})},function(li){
                                                    // 		li.map(function(v,vt){
                                                    // 			t.append(
                                                    // 				$("<a>",{href:dữLiệu.url(v,"ế"),class:"grid ptb5 db"}).append(
                                                    // 					$("<div>",{class:"w30"}).append(
                                                    // 						$("<div>",{class:"w1 pb43 bấmĐc"}).css({background:"url('"+dữLiệu.ảnh(v,"ế","200x")+"') center/cover"})
                                                    // 					),
                                                    // 					$("<div>",{class:"w70 plr10 vat oh bấmĐc"}).append(
                                                    // 						$("<div>",{text:dữLiệu.tên(v,"ế").cắt(80)})
                                                    // 					)
                                                    // 				)
                                                    // 			)
                                                    // 		})
                                                    // 	})
                                                    // })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                            anh["ậ"].map(function (v, vt) {
                                var l = dữLiệu.ảnh(v, "i", "1000px");
                                //cl(l);
                                if (vt == 0) {
                                    $(".slideanh").css({ backgroundImage: "url('" + l + "')" });
                                }
                                $(".slidecon").append(
                                    $("<div>", { class: "anhcon w20 pa10" + (vt == 0 ? " hiện o1" : " o05"), link: l }).append(
                                        $("<div>", { class: " w1 pb43 bgrn bgso bgpc" }).css({ backgroundImage: "url('" + l + "')" })
                                    )
                                ).on("click", ".anhcon", function () {
                                    var t = $(this),
                                        link = t.attr("link");
                                    t.sửaLớp("hiện,o1,-o05").siblings().sửaLớp("-hiện,-o1,o05");
                                    $(".slideanh").css({ backgroundImage: "url('" + link + "')" })
                                })
                            })
                            $(".sang").on("click", function () {
                                var t = $(this),
                                    a = $(this).hasClass("next"),
                                    w = $(".slideanh").outerWidth(),
                                    w1 = $(".anhcon").outerWidth(),
                                    h = $(".slidecon").find(".hiện"),
                                    link;
                                // $(".slideanh").animate({
                                // 	scrollLeft:(a?"+":"-")+"="+w,
                                // })
                                //console.log(h)
                                if (a) {
                                    if (h.next().length) {
                                        h.sửaLớp("-hiện,-o1,o05").next().sửaLớp("hiện,o1,-o05");
                                        link = $(".slidecon").find(".hiện").attr("link");
                                    } else {
                                        $(".slidecon .anhcon:first").sửaLớp("hiện,o1,-o05").siblings().sửaLớp("-hiện,-o1,o05");
                                        link = $(".slidecon .anhcon:first").attr("link");
                                    }
                                    $(".slideanh").css({ backgroundImage: "url('" + link + "')" });
                                } else {
                                    if (h.prev().length) {
                                        h.sửaLớp("-hiện,-o1,o05").prev().sửaLớp("hiện,o1,-o05");
                                        link = $(".slidecon").find(".hiện").attr("link");
                                    } else {
                                        $(".slidecon .anhcon:last").sửaLớp("hiện,o1,-o05").siblings().sửaLớp("-hiện,-o1,o05");
                                        link = $(".slidecon .anhcon:last").attr("link");
                                    }
                                    $(".slideanh").css({ backgroundImage: "url('" + link + "')" });
                                }
                                $(".slidecon").animate({
                                    scrollLeft: (a ? "+" : "-") + "=" + w1,
                                })
                            })
                            $(document).on("swipeleft swiperight", ".slidecon", function (e) {
                                var vtrai = e.type == "swiperight",
                                    tiep = $(".slidecon").find(".hiện"),
                                    t = $(this);
                                if (vtrai) {
                                    t.animate({
                                        scrollLeft: "-=" + tiep.outerWidth()
                                    })
                                } else {
                                    t.animate({
                                        scrollLeft: "+=" + tiep.outerWidth()
                                    })
                                }

                            })
                            //})
                            $(".vmlq").on("swiperight swipeleft", function (e) {
                                var a = e.type,
                                    w = $(".thecon4").outerWidth();
                                $(".thecha4").animate({
                                    scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w,
                                }, "slow")
                            })
                            //slide ảnh mộ
                            $(".điềuHướng").sửaLớp("mc1,-cf");
                        })
                    },
                    a: function (i) {
                        function bìnhLuận(v, a, y, id) {
                            //cl(v,a,y,id)
                            //cl(y.à)
                            var quyen = "";
                            if (y) {
                                quyen = y.à;
                            }
                            cl(quyen)
                            return $("<div>", { class: "thẻBìnhLuận " + (a.p == 0 ? " dn" : "") }).append(
                                $("<div>", { class: "grid bss bt1 bcd plr10 pr" }).append(
                                    $("<div>", { class: "pa10 w10" }).append(
                                        $("<div>", { class: "bgcd pb1" })
                                    ),
                                    $("<div>", { class: "vat pr" }).append(
                                        $("<div>", { class: "fs12 pt10", text: (a.ở > 0 ? dữLiệu.tên(a.ở, "à") : (a.ở == "" ? "Khách hàng" : a.ở)) + " viết:" }),
                                        $("<div>", { class: "fs09 pt10", text: đổiTG(a.ấ) }),
                                        (a.g == 1 ? $("<div>", { class: "pa l1 t0 mr35", style: "color:chocolate", icon: "bookmark::fs2" }) : "")
                                    ),
                                    (là("A") ? $("<div>", { class: "pa t0 r0 mt10 mr10 grid" }).append(
                                        $("<div>", { class: " cf bg1 bra3 pa3 bấmĐc mr15 " + (a.g == 0 ? "" : " dn"), text: "Ghim" }).on("click", function () {
                                            xửLý("bàiViết.sửa." + v, { d: Je({ g: 1 }) }, { delay: 1500 }, function (i) {
                                                notice(
                                                    { t: "Đã ghim bài viết", loại: true }
                                                );
                                                đồngBộ(function () {
                                                    vàoURL(dữLiệu.url(id, "ế"));
                                                    //cl(id)
                                                })
                                            })
                                        }),
                                        $("<div>", { class: " cf bg1 bra3 pa3 bấmĐc mr15 " + (a.g == 1 ? "" : " dn"), text: "Bỏ ghim" }).on("click", function () {
                                            xửLý("bàiViết.sửa." + v, { d: Je({ g: 0 }) }, { delay: 2000 }, function (i) {
                                                notice(
                                                    { t: "Đã bỏ ghim bài viết", loại: true }
                                                );
                                                đồngBộ(function () {
                                                    //cl(id)
                                                    vàoURL(dữLiệu.url(id, "ế"));
                                                })
                                            })
                                        }),
                                        (quyen == "admin" ? $("<div>", { class: " grid " }).append(
                                            $("<div>", { class: "cf bg1 bra3 pa3 bấmĐc mr15", text: "Sửa" }).on("click", function () {
                                                cl("sửa è")
                                                $(".nộiDungBình" + v).sửaLớp("dn");
                                                $(".sửaBình" + v).sửaLớp("-dn");
                                            }),
                                            $("<div>", { class: "cf bg1 bra3 pa3 bấmĐc pr", text: "Xóa" }).on("click", function () {
                                                var th = $(this);
                                                th.append(
                                                    $("<div>", { class: "hỏi pa b1 l1 tal bss bcd pa10 bw1 bra3 bgcf wsn" }).append(
                                                        $("<div>", { class: "pb15 c3 db", text: "Bạn có muốn xóa bình luận này ?" }),
                                                        $("<div>", { class: "bgcrd dib cf  bra3 btn pa5", text: "Hủy" }).on("click", function () {
                                                            $(this).closest(".hỏi").remove();
                                                        }),
                                                        $("<div>", { class: "bg1 dib cf fr bra3 btn pa5", text: "Có" }).on("click", function () {
                                                            var th1 = $(this);
                                                            // xửLý("bàiViết.sửa."+v,{d:Je([v,"a",1])},function(kq){
                                                            // 	if (kq==1) {
                                                            // 		notice({t:"Đã xóa bình luận",loại:true})
                                                            // 		th1.closest(".hỏi").remove();
                                                            //		th1.closest(".thẻBìnhLuận").hide();
                                                            // 	} else {
                                                            // 		notice({t:"Chưa xóa được bình luận",loại:false})
                                                            // 	}
                                                            // })//sửa bình luận
                                                        })
                                                    )
                                                )
                                            })
                                        ) : ""
                                        )
                                    )
                                        : "")
                                ),
                                $("<div>", { class: "fs1 pl35 pb15 pt25 nộiDungBình" + v, text: a.ộ }),
                                $("<div>", { class: "pr pt25 pl35 pr15 dn sửaBình" + v }).append(
                                    $("<div>", { class: "pa t0 r0 mr10 mt10 bấmĐc fs09 bg1 pa3 bss bcd bw1 cf bra3", text: "cập nhật" }).on("click", function () {
                                        var th1 = $(this),
                                            p = th1.parent(),
                                            nd = th1.next().val();
                                        xửLý("bàiViết.sửa." + v, { d: Jd({ ộ: nd }) }, function (r) {
                                            if (r == 1) {
                                                p.sửaLớp("dn");
                                                p.prev().sửaLớp("-dn");
                                                đồngBộ(function () {
                                                    var db = config("bàiViết." + v);
                                                    p.prev().text(db.ộ);
                                                })
                                            } else {
                                                notice({ t: "Chưa sửa được bình luận", loại: false })
                                            }
                                        })
                                    }),
                                    $("<textarea>", { class: "fs1 pa15 mt25 mb15 bra3 bss bcd bw1 w1" }).val(a.ộ),
                                    $("<div>", { class: "pa b0 r0 mr10 mt10 cd bấmĐc fs12 c6", icon: "close" }).on("click", function () {
                                        $(".sửaBình" + v).sửaLớp("dn");
                                        $(".nộiDungBình" + v).sửaLớp("-dn");
                                    }),
                                ),
                                $("<div>", { class: "dib mtb10 bấmĐc pa3 bra3 bg1 cf ml25", text: "Trả lời" }).on("click", function () {
                                    $(this).next().sửaLớp("-dn")
                                }),
                                $("<div>", { class: "dn pr pb15" }).append(
                                    $("<div>", { class: "pa r0 t0 fs12 bấmĐc", icon: "close" }).on("click", function () {
                                        $(this).parent().sửaLớp("dn")
                                    }),
                                    $("<input>", { class: " ttkhach" + (là("U") ? " dn" : "") }).append(
                                        $("<input>", { class: "w80 plr10 ptb5 ml10 mt10 bss bcd bw1 tenkhach", placeholder: "Tên khách hàng" }),
                                        $("<input>", { class: "w80 plr10 ptb5 ml10 mt10 bss bcd bw1 email", placeholder: "Email khách hàng" }).on("change", function () {
                                            var t = $(this),
                                                p = t.prev(),
                                                email = t.val(),
                                                tenkhach = p.val();
                                            xửLý("tàiKhoản.trựcTuyến", { e: Je({ ê: tenkhach, e: email }) }, function () {

                                            })
                                        })
                                    ),
                                    $("<textarea>", { class: "w80 ml10 binhluan h100 bcd mt10" }),
                                    $("<div>", { class: " grid bấmĐc vat ml10" }).append(
                                        $("<div>", { class: "bg1 cf bra3 pa5 mt15", text: "Gửi bình luận" }).on("click", function () {
                                            var t = $(this),
                                                bl = t.parent().prev().val();
                                            //console.log(bl,i,v);
                                            if (là("U")) {
                                                xửLý("bàiViết.đăng", { d: Je({ ế: [i, v], p: (là("A") ? 1 : 0), ộ: bl }) }, function (m) {
                                                    console.log(m)
                                                    if (m > 0) {
                                                        $(".binhluan").empty();
                                                        notice({
                                                            t: "Bình luận đã được gửi, chờ xét duyệt!",
                                                            loại: true
                                                        })
                                                    }
                                                })
                                            } else {
                                                var ttin = t.parent().siblings(".ttkhach").find(".tenkhach"),
                                                    ngviet = ttin.val();
                                                xửLý("bàiViết.đăng", { d: Je({ ế: [i, v], ộ: bl, p: 0, ở: ngviet }) }, function (m) {
                                                    console.log(m)
                                                    if (m > 0) {
                                                        $(".binhluan").empty();
                                                        notice({
                                                            t: "Bình luận đã được gửi,chờ xét duyệt!",
                                                            loại: true
                                                        })
                                                    }
                                                })
                                            }
                                            t.parent().parent().sửaLớp("dn");
                                        })
                                    )
                                ),
                                $("<div>", { id: a.i, class: "pl35" })
                            )
                        }
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        lênĐầu();
                        $("#menu").sửaLớp("-bss,-bb1,-bcd");
                        $("#phim").sửaLớp("dn");
                        CẦN.db("bàiViết." + i, function () {
                            var a = config("bàiViết." + i);
                            //cl(a.ụ[0])
                            $("#body").empty().append(
                                $("<div>", { class: "pt50 grid " + (dai > 700 ? "w90 mlra" : "") }).append(
                                    $("<div>", { class: "col-md-8 col-sm-8 col-xs-12 fni " + (dai > 700 ? "pr35" : "plr10") }).append(
                                        $("<h1>", { class: "db fwb mc1 pb15 ttu pb10 bb1 lh12 bss bcd fs15 fs12-xs", text: a.ê }),
                                        $("<div>", { class: "grid" }).append(
                                            $("<div>", { class: "c9 mt10 mr15", text: dữLiệu.tên(Jd(a.ụ)[0], "ụ") }),
                                            $("<div>", { class: "c9 mt10", text: iDate(a.ấ, "{j} / {n} / {f}") })
                                        ).thaotácBàiViết(i, a.ê, a.ô, a.ộ, "a"),
                                        $("<div>", { class: "ptb25 grid" }).append(
                                            range(0, 2).map(function (v, i) {
                                                return $("<a>", { href: "", class: i + " w33 plr15 vat bấmĐc db pr" }).append(
                                                    $("<div>", { class: "pb169 w1 bgcd shine ảnh" }),
                                                    //.css({background:"url('"+dữLiệu.ảnh(v,"ế","200x")+"') center/cover"}),
                                                    $("<div>", { class: "pt5 tduh fs09 tduh bgcd shine chữ" })
                                                )
                                            })
                                        ).each(function () {
                                            var t = $(this);
                                            CẦN.db("chuyênLực.4591", function (cmuc) {
                                                lấyChuyênLực(cmuc, function (l) {
                                                    t.xửLý("bàiViết.tải.3", { d: Je({ ụ: l, g: 1 }) }, { delay: 1500 }, function (li) {
                                                        //cl(li);
                                                        li.map(function (v, vt) {
                                                            var a = t.find("." + vt);
                                                            n = a.next();
                                                            a.attr("id", v);
                                                            a.attr("href", dữLiệu.url(v, "ế"));
                                                            a.children(".ảnh").sửaLớp("-bgcd,-shine").css({ background: "url('" + dữLiệu.ảnh(v, "ế", "500x") + "') center/cover" });
                                                            a.children(".chữ").sửaLớp("-bgcd,-shine").text(dữLiệu.tên(v, "ế").cắt(30));
                                                            a.sửaLớp("-" + vt);
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        $("<div>", { class: "fs12 lh15", style: "text-align:justify" }).html(a.ộ),
                                        $("<div>", { class: "ptb35" }).append(
                                            $("<div>", { class: "bss bcd bb1 pb10 mc1 fs15 fs12-xs mc1", text: "Bài viết liên quan" }),
                                            $("<div>", { class: "grid mt25" }).append(
                                            ).each(function () {
                                                //cl(a.ụ,i);
                                                var t = $(this);
                                                t.xửLý("bàiViết.tải.3", { d: Je({ ụ: ["4593", "4594", "4595", "4625", "4628", "4629",], ko: i }), e: "<" + a.ấ }, function (li) {
                                                    li.map(function (v, vt) {
                                                        CẦN.db("bàiViết." + v, function (bài) {
                                                            t.append(
                                                                $("<a>", { href: dữLiệu.url(v, "ế"), class: "w33 plr15 vat bấmĐc" }).append(
                                                                    $("<div>", { class: "pb169" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "300x") + "') center/cover" }),
                                                                    $("<div>", { class: "mt5 tduh fs09", text: dữLiệu.tên(v, "ế").cắt(30) })
                                                                )
                                                            )
                                                        })
                                                    })
                                                })
                                            })
                                        ),
                                        $("<div>", { class: "" }).append(
                                            $("<div>", { class: "" }).append(
                                                $("<div>", { class: "fs2 pb15 bss bcd bb1 mc1", text: "Bình luận" }),
                                                $("<div>", { class: "fs09 ptb10 c6 pl10 dn", text: "Khách hàng cần đăng nhập để sử dụng chức năng bình luận" }),
                                                $("<div>", { class: "" + (là("U") ? " dn" : "") }).append(
                                                    $("<input>", { class: "w80 plr10 ptb5 ml10 mt10 bss bcd bw1 tenkhach1", placeholder: "Tên khách hàng" }),
                                                    $("<input>", { class: "w80 plr10 ptb5 ml10 mt10 bss bcd bw1 emailkhach1", placeholder: "Email khách hàng" }).on("change", function () {
                                                        var t = $(this),
                                                            p = t.prev(),
                                                            email = t.val(),
                                                            tenkhach = p.val();
                                                        xửLý("tàiKhoản.trựcTuyến", { e: Je({ ê: tenkhach, e: email }) }, function () {

                                                        })
                                                    })
                                                ),
                                                $("<textarea>", { class: "w80 pl10 ml10 binhluan mt15 h100 bcd" }),
                                                $("<div>", { class: "grid bấmĐc vat ml10" }).append(
                                                    $("<div>", { class: "bg1 cf bra3 pa5 mt15", text: "Gửi bình luận" }).on("click", function () {
                                                        var bl = $(".binhluan").val();
                                                        //console.log(bl,i,ngviet);
                                                        if (là("U")) {
                                                            xửLý("bàiViết.đăng", { d: Je({ ế: i, ộ: bl, p: (là("A") ? 1 : 0) }) }, function (m) {
                                                                console.log(m)
                                                                if (m > 0) {
                                                                    if (là("A")) {
                                                                        $(".binhluan").val("");
                                                                        notice({
                                                                            t: "Bình luận đã được gửi!",
                                                                            loại: true
                                                                        })
                                                                    } else {
                                                                        $(".binhluan").val("");
                                                                        notice({
                                                                            t: "Bình luận đã được gửi, chờ xét duyệt!",
                                                                            loại: true
                                                                        })
                                                                    }

                                                                }
                                                            })
                                                        } else {
                                                            var ngviet = $(".tenkhach1").val();
                                                            xửLý("bàiViết.đăng", { d: Je({ ế: i, ộ: bl, p: (là("A") ? 1 : 0), ở: ngviet }) }, function (m) {
                                                                console.log(m)
                                                                if (m > 0) {
                                                                    $(".tenkhach1,.email1,.binhluan").empty();
                                                                    notice({
                                                                        t: "Bình luận đã được gửi,chờ xét duyệt!",
                                                                        loại: true
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                )
                                            ),
                                            $("<div>", { class: "pt25" }).append(
                                                $("<div>", { class: "blGhim pb25" })
                                            ).each(function () {
                                                var t = $(this);
                                                CẦN.db("bàiLực." + i, function (binh) {
                                                    //cl(binh)
                                                    if (binh) {
                                                        // binh.map(funciton(){

                                                        // })
                                                        CẦN.db("bàiViết." + binh, function () {
                                                            var idtk = $.map(binh, function (v, vt) {
                                                                var a = config("bàiViết." + v + ".ở");
                                                                if (a > 0) {
                                                                    return a;
                                                                }
                                                            })
                                                            cl(idtk)
                                                            CẦN.db("tàiKhoản." + idtk, function () {
                                                                binh.map(function (v, vt) {
                                                                    var a = config("bàiViết." + v),
                                                                        y = config("tàiKhoản." + a.ở);
                                                                    //console.log(Jd(a.ế).length)
                                                                    //cl(a.p)
                                                                    if (Jd(a.ế).length < 2) {
                                                                        if (a.g == 0) {
                                                                            t.append(
                                                                                bìnhLuận(v, a, y, i)
                                                                            )
                                                                        } else if (a.g == 1) {
                                                                            $(".blGhim").append(
                                                                                bìnhLuận(v, a, y, i)
                                                                            )
                                                                        }
                                                                    } else {
                                                                        var cmd = Jd(a.ế)[1],
                                                                            t1 = t.find("#" + cmd)
                                                                        //cl(cmd,t1);
                                                                        t1.append(
                                                                            bìnhLuận(v, a, y, i)
                                                                            // $("<div>",{class:"grid bss bt1 bcd plr10"}).append(
                                                                            // 	$("<div>",{class:"pa10 w10"}).append(
                                                                            // 		$("<div>",{class:"bgcd pb1"})
                                                                            // 	),
                                                                            // 	$("<div>",{class:"vat"}).append(
                                                                            // 		$("<div>",{class:"fs12 pt10",text:(y.ể ? y.ể : "Khách hàng" )+" viết:"}),
                                                                            // 		$("<div>",{class:"fs09 pt10",text:đổiTG(a.ấ)})
                                                                            // 	)
                                                                            // ),
                                                                            // $("<div>",{class:"fs1 pl35 pb15 pt25",text:a.ộ})
                                                                        )
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        )
                                    ),
                                    //thanh bên cạnh
                                    $("<div>", { class: "vmlq col-md-4 col-sm-4 col-xs-12 fni tac vat pr " + (dai > 700 ? "plr10" : "mt15 plr10 dn") }).append(
                                        $("<div>", { class: "phầnfix" }).append(
                                            $("<div>", { class: "pb169 bgsc bgpc bgrn pr" }).css({ backgroundImage: "url('/img/toancanh.jpg')" }).append(
                                                // (là("U")
                                                // 	? $("<div>",{class:"pa t0 r0 mt5 mr5 fs15 z7 btn bgcd bra3 bcf mc1h c6 nuth",icon:"add"}).on("click",function(){
                                                // 		khung(
                                                // 			$("<div>",{class:"pa35 bgcf ",text:""}).append(
                                                // 				$("<div>",{class:"fs12 ptb15",text:"Chọn ảnh"}),
                                                // 				$("<input>",{class:"ptb5 bcf",type:"file"}),
                                                // 				$("<div>",{class:" mt25"}).append(
                                                // 					$("<div>",{class:"btn btn bg1 cf dib bra3 ptb10 plr15",text:"Thay đổi"})
                                                // 				)
                                                // 			),
                                                // 			{
                                                // 				thanh:false,
                                                // 				trong:"col-md-4 col-sm-4 col-xs-11",
                                                // 				viền:false,
                                                // 				kotắt:false
                                                // 			}
                                                // 		)
                                                // 	}) : ""
                                                // )
                                            ),
                                            $("<div>", { class: "", text: "" }).append(
                                                $("<div>", { class: "grid tac mc1 fs12 fs09-xs pt10 pb5" }).append(
                                                    $("<div>", { class: "bg1 cf w50 ptb5 brbl3 brtl3 tab bấmĐc", text: "Tin đọc nhiều nhất " }),
                                                    $("<div>", { class: "bgcfx c6 w50 ptb5 brtr3 brbr3 tab bấmĐc", text: "Bài viết liên quan " })
                                                ).on("click", ".tab", function () {
                                                    var t = $(this),
                                                        vt = t.index();
                                                    t.sửaLớp("bg1,cf,-c6,-bgcd").siblings().sửaLớp("bgcd,c6,-bg1,-cf");
                                                    t.parent().next().children().eq(vt).sửaLớp("-dn").siblings().sửaLớp("dn");
                                                }),
                                                //tin đọc nhiều nhất nhất
                                                $("<div>", { class: "tal", text: "" }).append(
                                                    $("<div>", { class: "" }).each(function () {
                                                        var t = $(this);
                                                        var mục = ["4625", "4628", "4629"];
                                                        t.xửLý("bàiViết.tải.3", { d: Je({ ụ: mục }) }, { delay: 2000 }, function (li) {
                                                            li.map(function (v, vt) {
                                                                cl(config("bàiViết." + v))
                                                                t.append(
                                                                    $("<a>", { href: dữLiệu.url(v, "ế"), class: "grid ptb10 db" }).append(
                                                                        $("<div>", { class: "w30" }).append(
                                                                            $("<div>", { class: "w1 pb169 bấmĐc" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "200x") + "') center/cover" })
                                                                        ),
                                                                        $("<div>", { class: "w70 plr10 vat oh bấmĐc" }).append(
                                                                            $("<div>", { class: "fwb mc1h", text: dữLiệu.tên(v, "ế").cắt(80) }),
                                                                            $("<div>", { class: "pt5 c6 grid fs09", text: "Lạc Hồng Viên - " + đổiTG2(config("bàiViết." + v)["ấ"]) })
                                                                        )
                                                                    )
                                                                )
                                                            })
                                                        })
                                                    }),
                                                    $("<div>", { class: "dn" }).each(function () {
                                                        var t = $(this);
                                                        //cl(a.ấ)
                                                        t.xửLý("bàiViết.tải.3", { d: Je({ ụ: Jd(a.ụ)[0], ko: i }), e: "<" + a.ấ }, { delay: 1500 }, function (li) {
                                                            //cl(li)
                                                            li.map(function (v, vt) {
                                                                t.append(
                                                                    $("<a>", { href: dữLiệu.url(v, "ế"), class: "grid ptb10 db" }).append(
                                                                        $("<div>", { class: "w30" }).append(
                                                                            $("<div>", { class: "w1 pb169 bấmĐc" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "200x") + "') center/cover" })
                                                                        ),
                                                                        $("<div>", { class: "w70 plr10 vat oh bấmĐc" }).append(
                                                                            $("<div>", { class: "fwb mc1h", text: dữLiệu.tên(v, "ế").cắt(80) }),
                                                                            $("<div>", { class: "pt5 c6 grid fs09", text: "Lạc Hồng Viên - " + đổiTG2(config("bàiViết." + v)["ấ"]) })
                                                                        )
                                                                    )
                                                                )
                                                            })
                                                        })
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                            var b = $("#body");
                            b.find("mp4").trigger("change").sửaLớp("mtb15");
                            b.find("img[id]").sửaLớp("mt25,mb10").trigger("change");
                            b.find("h2").sửaLớp("mt15,mb10");
                            var anh = b.find("img").removeAttr("style").sửaLớp("w1,bgso,bgrn,bgpc,mtb15,hai").trigger("change");
                        })
                        $(".vmlq").on("swiperight swipeleft", function (e) {
                            var a = e.type,
                                w = $(".thecon4").outerWidth();
                            $(".thecha4").animate({
                                scrollLeft: (a == "swipeleft" ? "+" : "-") + "=" + w,
                            })
                        })
                        //slide ảnh mộ
                        $(".điềuHướng").sửaLớp("mc1,-cf");
                        //Xét fix cho thanh bên phải khi cuộn
                        // $(window).on("scroll",function(){
                        // 	var menuheight = $("#menu").height();
                        // 	if(dai>700){
                        // 		if($(window).scrollTop()- menuheight >=0 ){
                        // 			$(".phầnfix").sửaLớp("pf,t0").css({width:$(".vmlq").outerWidth()-20,marginTop:$("#menu").height()})
                        // 		} else {
                        // 			$(".phầnfix").sửaLớp("-pf,-t0").css({width:"100%",marginTop:"0"})
                        // 		}
                        // 		var a = $("#footer").offset().top - ($(window).outerHeight() + $(this).scrollTop());
                        // 		cl(a);
                        // 		$(".phầnfix").css({
                        // 			top:a<0?a-60:0
                        // 		})
                        // 	} else {
                        // 	}
                        // })
                        //vuốt video
                    },
                    "khuon-vien-cac-mo-gia-toc": function (i) {
                        vàoURL("/a/46842/Khuon-vien-mau-mo-Gia-toc")
                    },
                    "cach-xem-tuoi-boc-mo": function (i) {
                        vàoURL("/a/47647/Xem-tuoi-boc-mo")
                    },
                    z: function (e) {
                        if (e) {
                            $.post("/function.isp", { act: "lấyLc", idMất: e, loại: "lấy1" }, function (rel) {
                                if (!empty(rel)) {
                                    var d = rel[0];
                                    k = khung(
                                        $("<div>", { class: "" }).append(
                                            $("<img>", { class: "w1", src: d.ảnh }),
                                            $("<div>", { class: "pa10" }).each(function () {
                                                var è = $(this);
                                                $.post("/function.isp", { act: "lấyNgườiMất", id: d.id }, function (e) {
                                                    if (e) {
                                                        $.post("/xu_ly.php", { action: "thongtinmo", id: e[0].idNgườiMất }, function (data) {
                                                            var dữL = Jd(data)[0],
                                                                danh = chứcDanh(dữL.tho * 1, dữL.gioitinh);
                                                            if (dữL) {
                                                                è.append(
                                                                    $("<div>", { class: "pb10 fs13", classM: "lh13" }).html(
                                                                        '<b>' + usage.hiểnThị + '</b> Đã' + (d.ảnh ? " thắp hương" : " gửi lời nhắn") + ' cho <a href="' + dữL.hotenchanlinh.toURL() + ".t" + e[0].idNgườiMất + '.html" class="tduh cl1h bấmĐc">' + danh + dữL.hotenchanlinh + '</a>&nbsp;'
                                                                    ),
                                                                    $("<div>", { class: " fs09 c6", text: iDate(d.ấ, "{j}/{n}/{y} - {h}:{m}"), icon: "timer::vam,tac,lh-1" })
                                                                )
                                                            }
                                                        })
                                                    }
                                                }, 'json')
                                            })
                                        ), {
                                        trong: "col-md-6 col-xs-12",
                                        ngoài: "z99",
                                        viền: false,
                                        động: "fadeIn",
                                        thanh: false
                                    }
                                    )
                                } else {
                                    thôngBáo({
                                        t: "Lịch sử cúng giỗ không tồn tại",
                                        loại: false
                                    })
                                    vàoURL("/Cung-gio-online.c4599.html");
                                }
                            }, 'json');
                        }
                    },
                    //bài dịch vụ
                    d: function (i) {
                        lênĐầu();
                        $("#menu").sửaLớp("-bss,-bb1,-bcd")
                        $("#phim").sửaLớp("dn")
                        if (i == 111) {
                            $("#body").empty().append(
                                $("<div>", { class: "w90 mlra mt25 grid " + (dai > 700 ? "" : "") }).append(
                                    $("<div>", { class: "col-md-9 col-sm-9 col-xs-12 fni " + (dai > 700 ? "plr10" : ""), text: "" }).append(
                                        $("<div>", { class: "ptb10 bss bb1 bcd mc1 " + (dai > 700 ? "fs15" : "fs11"), text: "Dịch vụ thiết kế xây dựng phần mộ và khuôn viên cảnh quan của Lạc Hồng Viên" }),
                                        $("<div>", { class: " " + (dai > 700 ? "fs12" : "fs1") }).append(
                                            $("<div>", { class: "mt15", text: "Dự án nghĩa trang công viên – hiện đại được gọi là Công viên Nghĩa trang Kỳ Sơn -Lạc Hồng Viên. Từ Hà Nội đi về hướng Tây là đi về cõi Tây Phương Cực Lạc, về với Cõi Phật, về nơi không gian tâm linh, bình yên, không còn những tư tưởng Tham, Sân, Si, đau khổ và tuyệt vọng, nơi cái tâm con người tìm đến bến bờ của sự thanh thản, thoát khỏi vòng luân hồi Sinh – Lão – Bệnh -Tử. Xây dựng công viên nghĩa trang này Ban lãnh đạo công ty Toàn Cầu mong muốn đây sẽ là nơi mà tâm linh của người đi xa và những người đến thăm viếng tại nghĩa trang đều cảm thấy sự bình yên, tĩnh lặng." }),
                                            $("<div>", { class: "mt15 fs1" + (dai > 700 ? "" : "fs1"), text: "Quy hoạch các ngôi mộ trong tiểu khu được bố trí theo mô hình Bát Quái dựa trên cơ sở của mệnh người đã khuất, kết hợp cùng với đội ngũ kiến trúc sư cùng đội ngũ nhân viên xây dựng lành nghề, chuyên nghiệp sẽ làm nên những công trình kiến trúc mộ lưu lại ngàn đời sau cùng với những nét truyền thống mang đậm sắc thái người Việt, cũng như tiếp thu những tinh hoa tiên tiến trong nghệ thuật kiến trúc trên thế giới chúng tôi sẽ thiết kế những mẫu mộ đẹp toát lên vẻ thanh bình, sang trọng. Bên cạnh đó, khuân viên và cảnh quan sẽ được thiết kế theo phong thủy ngũ hành, vừa đảm bảo được tính tâm linh mà vẫn mang vẻ đẹp nhẹ nhàng, ấm áp, thấp thoáng dáng hình vườn địa đàng, vườn âm dương." }),
                                            $("<div>", { class: "" }).append(
                                                $("<div>", { class: "mt15 fwb", text: "Một số hình ảnh về dịch vụ tại lạc Hồng Viên:" }),
                                                $("<div>", { class: "grid", text: "" }).append(
                                                    [
                                                        "img/thietke1.jpg", "img/thietke2.jpg", "img/thietke3.jpg", "img/thietke4.jpg", "img/thietke5.jpg"
                                                    ].map(function (v, i) {
                                                        return $("<div>", { class: "mt15 col-md-6 col-sm-6 col-xs-12 fni " + (dai > 700 ? "plr5" : "") }).append(
                                                            $("<div>", { class: "pb169 w1" }).css({ background: "url('" + v + "') center/cover" })
                                                        )
                                                    })
                                                ),
                                                $("<div>", { class: "mt15 fwb", text: "Một số video về dịch vụ tại lạc Hồng Viên:" }),
                                                $("<div>", { class: "grid", text: "" }).append(
                                                    [
                                                        "img/thietke1.jpg", "img/thietke2.jpg", "img/thietke3.jpg", "img/thietke4.jpg", "img/thietke5.jpg"
                                                    ].map(function (v, i) {
                                                        return $("<div>", { class: "mlra col-md-6 col-sm-6 col-xs-12 fni pr bgpc bgsc mt15 " + (dai > 700 ? "plr5" : "") }).append(
                                                            $("<div>", { class: "w1 pr t0 l0 denmo pb169" }).css({ background: "url('" + v + "') center/cover" }).append(
                                                                $("<div>", { class: "w1 pa t0 l0 denmo pb169" }),
                                                                $("<div>", { class: "pa tl50 tt fs15", icon: "play_circle_outline::vam fs2 cd" })
                                                            )
                                                        )
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    $("<div>", { class: "col-md-3 col-sm-3 col-xs-12 fni vat " + (dai > 700 ? "" : "mt25"), text: "" }).append(
                                        $("<div>", { class: "fs12 ptb10 bg1 cf tac ", text: "Dịch vụ khác" }),
                                        $("<div>", { class: "" + (dai > 700 ? "pl15 fs11" : "fs09") }).append(
                                            [
                                                "Chăm sóc các khuôn viên phần mộ",
                                                "Dịch vụ bán đất mộ theo từng loại",
                                                "Dịch vụ vận chuyển mộ từ nơi khác đến",
                                                "Xe thăm quan miễn phí lên công viên nghĩa trang",
                                                "Dịch vụ cúng giỗ online",
                                                "Dịch vụ cầu siêu của công viên tâm linh Lạc Hồng Viên",
                                                "Dịch vụ cầu an của công viên tâm linh Lạc Hồng Viên",
                                                "Dịch vụ cho người thân",
                                                "Dịch vụ lưu trữ và bảo quản tro cốt cho người mất"
                                            ].map(function (v, i) {
                                                return $("<div>", { class: "mtb15 tduh bấmĐc" }).append(
                                                    $("<div>", { class: "", text: v })
                                                )
                                            })
                                        )
                                    )
                                )
                            )
                        }
                    },//tìm kiếm
                    "search": function (i) {
                        cl(i)
                        // dữLiệu.tìm("xem mộ","ế",function(kq){
                        // 	cl(kq)
                        // });
                        $(".dautrang").trigger("click");
                        $("#phim").sửaLớp("dn");
                        $("#body").empty().append(
                            $("<div>", { class: "tac " + (dai > 700 ? "w85 mlra ptb35" : "plr10 ptb25") }).append(
                                $("<div>", { class: "grid" }).append(
                                    $("<div>", { class: "mr10 fs15 fs12-xs c6 kqtkiem", text: "Kết quả tìm kiếm cho:" }),
                                    $("<div>", { class: "fs15 c6 fs12-xs", text: i })
                                ),
                                $("<div>", { class: "pt35 c6 grid tal" }).each(function () {
                                    //cl(1)
                                    var t = $(this);
                                    dữLiệu.tìm(i, "ế", function (data) {
                                        cl(data);
                                        if (data.length == 0) {
                                            t.append(
                                                $("<div>", { class: "fs15 c6 tac w1", text: "Không có kết quả phù hợp !" })
                                            )
                                        } else {
                                            data.map(function (v, vt) {
                                                CẦN.db("bàiViết." + v, function (tr) {
                                                    cl(tr.ụ)
                                                    t.append(
                                                        $("<a>", { href: dữLiệu.url(v, "ế"), class: "col-md-3 col-xs-6 col-sm-6 fni vat plr10 pb15 " }).append(
                                                            $("<div>", { class: "" }).append(
                                                                $("<div>", { class: "pb43 w1 bss bcd bw1" }).css({ background: "url('" + dữLiệu.ảnh(v, "ế", "200x") + "') center/cover" })
                                                            ),
                                                            $("<div>", { class: "pt10 tal tduh fs12 lh12 fs09-xs", text: tr.ê.cắt(50) })
                                                        )
                                                    )
                                                })
                                            })
                                        }
                                    })
                                })
                            )
                        )
                    },
                    t: function (id) { // giao diện cúng giỗ online
                        giaoDiệnCúngGiỗ(id)
                    }
                }, function (á, à) {
                    config("url." + á, à);
                });
                //tánGẫu.khởiTạo(true);
                $(document).on("đổiURL", function (a, u) {
                    var trang = đọcURL(u)[1],
                        idURL = đọcURL(u)[2];
                    cl(idURL);
                    // if(){
                    // if(!idURL){
                    // 	vàoURL("https://lachongvien.vn/")
                    // }
                    // } else {
                    if ($('.animenu a[id="' + idURL + '"]').hasClass('mn_con')) {
                        $('.doimaumenu').sửaLớp('-doimaumenu');
                        $('.animenu a[id="' + idURL + '"]').closest('.mn_cha').sửaLớp('doimaumenu');
                    }
                    else if (idURL == 4599 && là('A') == false) {
                        $('.doimaumenu').sửaLớp('-doimaumenu');
                    }
                    else {
                        $('.doimaumenu').sửaLớp('-doimaumenu');
                        $('.animenu a[id="' + idURL + '"]').sửaLớp('doimaumenu');
                    }
                    if (idURL != "4599") {
                        $("body").sửaLớp("-oh").find("#chứa").remove();
                    }
                    //cl(trang,idURL)
                    //đôi title
                    if (trang == "c") {
                        CẦN.db("chuyênMục" + idURL, function (ten) {
                            $('title').text(ten.ê)
                        })
                    } else if (trang == "a") {
                        //cl(dữLiệu.tên(idURL,"ế"))
                        CẦN.db("bàiViết." + idURL, function (b) {
                            $('title').text(b.ó ? b.ó : b.ê)
                        })
                    } else if (trang == "v") {
                        CẦN.db("3c0c958398cae6607d5d04b6a735df99." + idURL, function (lay) {
                            $('title').text(lay["219790"])
                        })
                    } else {
                        $('title').text("Công viên nghĩa trang Lạc Hồng Viên")
                    }
                    //}
                }).on("mouseleave mouseenter", ".chứaTìmKiếm", function (e) {
                    // var x = $(this),
                    // 	c = x.children(".tìmKiếmRotate"),
                    // 	d = $(".kếtQủaTìmKiếm"),
                    // 	t = e.type == "mouseenter",
                    // 	tran = "perspective("+(t?0:"283px")+") rotateX("+(t?0:"-10deg")+")";
                    // if($(".chứaKếtQủa").children().length && !d.is(":hidden")){
                    // 	c.stop().css({
                    // 		transform:tran
                    // 	});
                    // 	d.stop().css({
                    // 		marginTop:t?"0":"-100px"
                    // 	})
                    // }
                }).on("click", ".xóaTấtCả", function () {
                    $(this).parents("table").find("tbody").empty();
                    $(".tìmXóa").tổngTiền();
                    đệmGiỏ($(".danhsáchhàng"));
                }).on("click", ".giỏHàng", function () {
                    var k = khung(
                        $("<div>", { class: "ptb15 tìmXóa rỏGóiHàng", text: "" }).each(function () {
                            var t = $(this);
                            t.empty().append(
                                bảngRỏHàng().each(function () {
                                    var t = $(this);
                                    lsp = $.đệm("giỏHàng");
                                    if (lsp) {
                                        if (lsp.length > 0) {
                                            CẦN.db(tblĐồGiỗ + "." + $.map(lsp, function (v) {
                                                return v.id;
                                            }), function () {
                                                lsp.map(function (v, i) {
                                                    t.append(
                                                        dòngGiỏ1(i + 1, v)
                                                    )
                                                })
                                            });
                                        } else {
                                            t.append(
                                                $("<div>", { class: "tac ptb10", text: "Chưa có sản phẩm nào được chọn!" })
                                            )
                                        }
                                    } else {
                                        t.append(
                                            $("<div>", { class: "tac ptb10", text: "Chưa có sản phẩm nào được chọn!" })
                                        )
                                    }
                                }),
                                $("<div>", { class: "tal df jcsb mt25 pr" }).append(
                                    $("<div>", { class: "grid pl15" }).append(
                                        $("<div>", { class: "mc1 fs12", text: "Tổng số tiền:" }),
                                        $("<div>", { class: "tổngtiền ml10 vat", text: "0" }),
                                        $("<div>", { class: "ml3", text: "₫" })
                                    ),
                                    $("<div>", { class: "btn bg1 cf bra3 dib bss bw1 bcd plr15 ptb7 thanhToán", text: "Thanh toán" })
                                )
                            )
                        }), {
                        trong: " col-md-6 col-xs-12",
                        động: "fadeIn",
                        viền: false
                    }
                    );
                    chờ(function () {
                        k.tổngTiền();
                    }, 2000)
                }).on("click", ".nềnChèn", function () {
                    $(".chứaGợiÝ").hide();
                    $(this).remove();
                }).on("click", ".bấmTắtKếtQủa", function () {
                    $(this).parents(".chứaKếtQủa").parent().ẩn("slideOutUp", 345, function () {
                        $(this).hide();
                        $(".chứaDanhSách").sửaLớp("-w1,h1").children().sửaLớp("pa,l50,t50,tt,w80,-w1");
                        // $(".tìmKiếmRotate").css({
                        // 	transform:"perspective(0px) rotateX(0deg)"
                        // })
                        $(".chứaTìmKiếm").sửaLớp("-o0,o1")
                    });
                }).on("thànhTiền", ".thànhtiền", function () {
                    var x = $(this),
                        bố = x.parents("tr"),
                        giáGốc = bố.find(".giá").text(),
                        sl = bố.find(".sốlượng").text();
                    if (sl.length > 3) {
                        sl = sl.replace(/,/g, "").cắt(3).replace(/…/g, "");
                    }
                    bố.find(".thànhtiền").text(phẩy((bỏPhẩy(giáGốc) * 1) * sl * 1));
                    cl(bố, sl, giáGốc);
                }).on("click", ".nútThêmĐồ", function () {
                    var t = $(this),
                        bố = t.parents("tr"),
                        tăng = t.cóLớp("tăng"),
                        sl = bố.find(".sốlượng"),
                        th = bố.find(".thànhtiền"),
                        kt = 1,
                        giáGốc = bỏPhẩy(bố.find(".giá").text()) * 1;
                    if (sl.text() * 1 == 1) {
                        if (!tăng) {
                            kt = 0;
                            t.lỗi("Số lượng sản phẩm đang ở mức tối thiểu");
                        }
                    }
                    if (kt) {
                        sl.text(sl.text() * 1 + (tăng ? 1 : -1));
                        th.trigger("thànhTiền");
                        t.parents(".danhsáchhàng").tổngTiền();
                        đệmGiỏ($(".danhsáchhàng"));
                    }
                }).on("click", ".xóasp", function () {
                    cl("haha");
                    var t = $(this);
                    $(this).iConfirm("Bạn có chắc muốn xóa sản phẩm này không?", function () {
                        var p = t.closest(".dòng");
                        p.remove();
                        $(".tìmXóa").tổngTiền();
                        đệmGiỏ($(".danhsáchhàng"));
                    })
                }).on("click", ".thanhToán", function () {
                    if ($.đệm("giỏHàng").length == 0) {
                        alert("Giỏ hàng trống!")
                    } else {
                        CẦN.db("tàiKhoản." + tôi.lấy("i"), function () {
                            var ttin = config("tàiKhoản." + tôi.lấy("i")),
                                hoten = "", sdt = "", mail = "";
                            if (ttin) {
                                hoten = ttin.ê ? ttin.ê : "";
                                sdt = ttin.ố ? ttin.ố : "";
                                mail = ttin.e ? ttin.e : "";
                            }
                            var x = $(this),
                                bố = x.parents("#khungThôngBáo") ? x.parents("#khungThôngBáo").find(".chứaRỏHàng") : x.parents(".chứaRỏHàng");
                            // if(là("U")){
                            // 	đặtHàng({bảng:bố});
                            // }else{
                            var dai = $(window).width();
                            var k = khung(
                                $("<div>", { class: "plr10 chứathôngTin" }).append(
                                    $("<div>", { class: "fs2 fs12-xs mc1 ptb15 cl1 tac lh1", text: "Thông tin khách hàng" }),
                                    formThôngTin(hoten, sdt, mail),
                                    $("<div>", { class: "ptb15 grid tar" }).append(
                                        $("<div>", { class: "btn bra3 bg1 cf bấmĐặtHàng plr15 ptb5 fs1", text: "Đặt hàng" })
                                    )
                                ), {
                                viền: false,
                                thanh: false,
                                trong: "col-md-4 col-sm-8 col-xs-12"
                            });
                            k.on("click", ".bấmĐặtHàng", function () {
                                var mảng = {},
                                    kt = 0,
                                    giohang = $.đệm("giỏHàng"),
                                    sanpham = "",
                                    gia = 0;
                                giohang.map(function (v, i) {
                                    sanpham += (i == 0 ? "" : ",") + v.tên + "(" + v.sốlượng + ")";
                                    gia += v.giá.replace(",", "") * 1;
                                })
                                //thêm đơn hàng////////////////
                                xửLý("đốiTượng.tạo.2408985723fba8ec57dfd7c17e06ac23", function (doituong) {
                                    //cl(doituong)
                                    var ten = $(".tênkhách1").iVal(),
                                        diachi = $(".địachỉ1").iVal(),
                                        dienthoai = $(".điệnthoại1").iVal(),
                                        email = $(".emailkhách1").iVal(),
                                        ghichu = $(".ghichú1").iVal(),
                                        id = tôi.lấy("i");
                                    //cl(ten,diachi,dienthoai,email,ghichu)
                                    if (!ten || !diachi || !dienthoai || !email) {
                                        alert("Mời nhập đủ thông tin!")
                                    } else {
                                        xửLý("thuộcTính.sửa.2408985723fba8ec57dfd7c17e06ac23", { d: Je([doituong, { "173104": id ? id : "", "173105": ten, "173106": email, "173107": dienthoai, "173108": diachi, "173109": sanpham, "173110": "", "173111": gia, "173112": "", "173113": "" }]) },
                                            function (them) {
                                                if (them == 1) {
                                                    notice({ t: "Đã thêm đơn hàng thành công", loại: true });
                                                    $.đệm("giỏHàng", [], 1);
                                                    x.closest(".khungThôngBáo").remove();
                                                    $(".rỏGóiHàng").closest("#khungThôngBáo").remove();
                                                    $(".inputThôngTin").each(function () {
                                                        var x = $(this),
                                                            v = x.iVal(),
                                                            id = x.ID();
                                                        if (id != "ghiChú") {
                                                            if (v) {
                                                                mảng[id] = v;
                                                            } else {
                                                                kt = 1;
                                                                x.lỗi("Vui lòng nhập mục này");
                                                            }
                                                        } else {
                                                            mảng[id] = v;
                                                        }
                                                        if (kt) {
                                                            return false;
                                                        }
                                                    });
                                                    if (!kt) {
                                                        đặtHàng({
                                                            bảng: bố,
                                                            chứa: $(".chứaThôngTin")
                                                        }, mảng);
                                                    }
                                                } else {
                                                    notice({ t: "Thêm đơn hàng thất bại", loại: false })
                                                }
                                            }
                                        )
                                    }
                                })
                                ///////////////////////////////
                            })
                            // }
                        })
                    }
                })
                //đăng kí tư vấn
                sựkiện = function (thờigian, noidung) {
                    chờ(function () {
                        khung(
                            $("<div>", { class: "" }).append(
                                $("<div>", { class: "grid df" }).append(
                                    $("<div>", { class: "col-md-6 col-sm-6 col-xs-0 fni" }).append(
                                        $("<div>", { class: "w1 pb1" }).css({ background: "url('img/toancanh.jpg') center/cover" })
                                    ),
                                    $("<div>", { class: "col-md-6 col-sm-6 col-xs-12 fni ptb35" }).css({ background: "url('img/nengiay.jpg') center/cover" }).append(
                                        $("<div>", { class: "mc1 fs15 fs1-xs lh1 ttu tac", text: "mẫu đăng kí thông tin khách hàng" }),
                                        $("<div>", { class: "pt15 tac", text: "Nội dung gắn dấu (*) là nội dung bắt buộc" }),
                                        $("<div>", { class: "w1 plr25 mt15" }).append(
                                            $("<div>", { class: "pb5" }).append(
                                                $("<div>", { class: "pt7 dib pb3", text: "Họ và tên" }), $("<div>", { class: "crd dib", text: "*" })
                                            ),
                                            $("<input>", { class: "ptb5 w1" })
                                        ),
                                        $("<div>", { class: "w50 dib pl25 pr10 mt15" }).append(
                                            $("<div>", { class: "pb5" }).append(
                                                $("<div>", { class: "pt15 dib pb3", text: "Email" }), $("<div>", { class: "crd dib", text: "*" })
                                            ),
                                            $("<input>", { class: "ptb5 w1" })
                                        ),
                                        $("<div>", { class: "w50 dib pl10 pr25 mt15" }).append(
                                            $("<div>", { class: "pb5" }).append(
                                                $("<div>", { class: "pt15 dib pb3", text: "Điện thoại" }), $("<div>", { class: "crd dib", text: "*" })
                                            ),
                                            $("<input>", { class: "ptb5 w1" })
                                        ),
                                        $("<div>", { class: "w1 plr25 mt15" }).append(
                                            $("<div>", { class: "pb5" }).append(
                                                $("<div>", { class: "pt15 pb3", text: "Nội dung cần tư vấn thêm" })
                                            ),
                                            $("<input>", { class: "ptb5 w1" })
                                        ),
                                        $("<div>", { class: "mt25 plr15 tac" }).append(
                                            $("<div>", { class: "btn plr10 ptb5 bg1 cf dib bra3", text: "Đăng ký nhận tin" }).on("click", function () {
                                                var tên, email, điệnthoại;
                                            })
                                        )
                                    )
                                )
                            )
                            , {
                                trong: "col-md-8 col-sm-8 col-xs-10",
                                viền: false,
                                thanh: false
                            }
                        )
                    }, 7000)
                }
                //hàm tự tạo cho Dom
                $.extend($.fn, {
                    // Hàm tạo khung thêm bài tin tức
                    thêmBàiMiêuTả: function (idBố) {
                        return this.each(function () {
                            if (là("U")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "ml15 fs15 z7 btn bgcd bra3 bcf mc1h c6 nuth dib pa t0 r0 mt10", icon: "add" }).on("click", function () {
                                        var ghim = 0;
                                        khung(
                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài:" }),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđềgiớithiệu", type: "text", text: "" }).on("keyup", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        $(".hienurl").val(val.toURL().cắt(128));
                                                    })
                                                ),
                                                $("<div>", { class: "grid" }).append(
                                                    $("<div>", { class: "mt25 mr25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Ghim bài" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                var t = $(this);
                                                                if (t.is(":checked")) {
                                                                    ghim = 1;
                                                                } else {
                                                                    ghim = 0;
                                                                }
                                                            })
                                                        )
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Gửi tin đến khách hàng" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                            })
                                                        )
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titletin", type: "text", text: "", maxlength: 74 })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                    $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        CẦN.db("chuyênLực.4597", function (e) {
                                                            e.map(function (a, b) {
                                                                t.append(
                                                                    $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                )
                                                            })
                                                        })
                                                    })
                                                ),
                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso pr bgpc đạidiện" }).append(
                                                            $("<div>", { class: "pa w1 tac tl50 tt cd làmMàu1", text: "Chọn ảnh đại diện" })
                                                        ).tảiLên({
                                                            loại: "ảnh",
                                                            đổi: function (s) {
                                                                //console.log(s)
                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                $(this).attr("id", s[0]);
                                                                $(".làmMàu1").sửaLớp("dn");
                                                            },
                                                            lỗi: function () {
                                                                $(this).lỗi("Vui lòng thử lại.");
                                                            }
                                                        })
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).on("change", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        t.iVal(val.toURL())
                                                    })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtảgiớithiệu", type: "text", text: "" })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nộidunggiớithiệu" }).soạnThảo({
                                                        cỡ: 15,
                                                        html: true
                                                    })
                                                ),
                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                    var t = $(this),
                                                        te = $(".tiêuđềgiớithiệu").iVal() ? $(".tiêuđềgiớithiệu").iVal() : $(".titletin").iVal(),
                                                        d = $(".môtảgiớithiệu").iVal(),
                                                        n = $(".nộidunggiớithiệu").iVal(),
                                                        anh = $(".đạidiện").attr("id"),
                                                        u = $(".hienurl").iVal(),
                                                        tt = $(".titletin").iVal(),
                                                        muc = $(".chuyênMụcTin").iVal(),
                                                        manglink = [];
                                                    //cl(muc)
                                                    listẢnh = $(".soạnThảo").find("img:not([id])");
                                                    if (listẢnh.length > 0) {
                                                        listẢnh.map(function (a, b) {
                                                            var lk = $(b).attr("src");
                                                            manglink.push(lk);
                                                        })
                                                        $.post("/xu_ly.php", { action: "đổiLinkẢnh", manglink: manglink }, function (linkmoi) {
                                                            listẢnh.map(function (a, b) {
                                                                $(b).attr("src", "/" + linkmoi[a]);
                                                                //cl($(b).attr("src"))
                                                            })
                                                            var n1 = $(".nộidunggiớithiệu").iVal();
                                                            //cl(n1)
                                                            if (te == "" || n == "") {
                                                                t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                            } else {
                                                                xửLý("bàiViết.đăng", { d: Je({ ụ: muc, g: ghim, ó: tt, ê: te, ô: d, ộ: n1, ả: anh, r: u }) }, function (e) {
                                                                    if (e > 0) {
                                                                        notice({
                                                                            loại: true,
                                                                            t: "Đăng tin thành công"
                                                                        });
                                                                        $("#khungThôngBáo").remove();
                                                                        đồngBộ(function () {
                                                                            vàoURL("/" + dữLiệu.tên(idBố, "ụ").toURL() + ".c" + idBố + ".html")
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        }, "json")
                                                    } else {
                                                        if (te == "" || n == "") {
                                                            t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                        } else {
                                                            xửLý("bàiViết.đăng", { d: Je({ ụ: muc, g: ghim, ó: tt, ê: te, ô: d, ộ: n, ả: anh, r: u }) }, function (e) {
                                                                if (e > 0) {
                                                                    notice({
                                                                        loại: true,
                                                                        t: "Đăng tin thành công"
                                                                    });
                                                                    $("#khungThôngBáo").remove();
                                                                    đồngBộ(function () {
                                                                        vàoURL("/" + dữLiệu.tên(idBố, "ụ").toURL() + ".c" + idBố + ".html")
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            ),
                                            {
                                                thanh: false,
                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                viền: false,
                                                koTắt: true
                                            }
                                        )
                                    }).each(function () {
                                        var t = $(this);
                                        t.parent().sửaLớp("pr,bgcg")
                                    })
                                )
                            }
                        })
                    },
                    thêmBàiDịchVụ: function (idBố) {
                        return this.each(function () {
                            if (là("U")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "ml15 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth dib pa t0 r0 mt15", icon: "add" }).on("click", function () {
                                        var ghim = 0;
                                        khung(
                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài dịch vụ:" }),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđềgiớithiệu", type: "text" }).on("keyup", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        $(".hienurl").val(val.toURL().cắt(128));
                                                    })
                                                ),
                                                $("<div>", { class: "grid" }).append(
                                                    $("<div>", { class: "mt25 mr25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Ghim bài" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                var t = $(this);
                                                                if (t.is(":checked")) {
                                                                    ghim = 1;
                                                                } else {
                                                                    ghim = 0;
                                                                }
                                                            })
                                                        )
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Gửi tin đến khách hàng" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                            })
                                                        )
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).append(
                                                            $("<div>", { class: "pa w1 tac tl50 tt cd làmMàu1", text: "Chọn ảnh đại diện" })
                                                        ).tảiLên({
                                                            loại: "ảnh",
                                                            đổi: function (s) {
                                                                //console.log(s)
                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                $(this).attr("id", s[0]);
                                                                $(".làmMàu1").sửaLớp("dn");
                                                            },
                                                            lỗi: function () {
                                                                $(this).lỗi("Vui lòng thử lại.");
                                                            }
                                                        })
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titledịchvụ", type: "text", text: "", maxlength: 74 })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).on("change", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        t.iVal(val.toURL())
                                                    })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtảgiớithiệu", type: "text", text: "" })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nộidunggiớithiệu" }).soạnThảo({
                                                        cỡ: 15,
                                                        html: true
                                                    })
                                                ),
                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                    var t = $(this),
                                                        te = $(".tiêuđềgiớithiệu").iVal() ? $(".tiêuđềgiớithiệu").iVal() : $(".titledịchvụ").iVal(),
                                                        d = $(".môtảgiớithiệu").iVal(),
                                                        n = $(".nộidunggiớithiệu").iVal(),
                                                        anh = $(".đạidiện").attr("id"),
                                                        tt = $(".titledịchvụ").iVal(),
                                                        u = $(".hienurl").iVal();
                                                    //cl(t,d,n)
                                                    if (te == "" || n == "") {
                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                    } else {
                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: idBố, g: ghim, ó: tt, ả: anh, ê: te, ô: d, ộ: n, r: u }) }, function (e) {
                                                            if (e > 0) {
                                                                notice(
                                                                    { t: "Đăng tin thành công", loại: true }
                                                                );
                                                                $("#khungThôngBáo").remove();
                                                            }
                                                            đồngBộ(function () {
                                                                vàoURL("Dich-vu.c4594.html")
                                                            })
                                                        })
                                                    }
                                                })
                                            ),
                                            {
                                                thanh: false,
                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                viền: false,
                                                koTắt: true
                                            }
                                        )
                                    }).each(function () {
                                        var t = $(this);
                                        t.parent().sửaLớp("pr,bgcg")
                                    })
                                )
                            }
                        })
                    },
                    thêmBàiThưViện: function (idBố) {
                        return this.each(function () {
                            if (là("U")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "ml15 fs15 z7 btn bgcd bra3 bcf mc1h c6 nuth dib pa t0 r0 mt15", icon: "add" }).on("click", function () {

                                        quảnTrị.bảng('3c0c958398cae6607d5d04b6a735df99')
                                    }).each(function () {
                                        var t = $(this);
                                        t.parent().sửaLớp("pr,bgcg")
                                    })
                                )
                            }
                        })
                    },
                    thêmBàiMẫuMộ: function (idBố) {
                        return this.each(function () {
                            if (là("U")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "ml15 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth dib pa t0 r0 mt15", icon: "add" }).on("click", function () {
                                        khung(
                                            $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                $("<div>", { class: "pt15 pl10 fs15", text: "Thêm bài mẫu mộ:" }),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).on("keyup", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        $(".hienurl").val(val.toURL().cắt(128));
                                                    })
                                                ),
                                                $("<div>", { class: "grid" }).append(
                                                    $("<div>", { class: "mt25 mr25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Ghim bài" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                var t = $(this);
                                                                if (t.is(":checked")) {
                                                                    ghim = 1;
                                                                } else {
                                                                    ghim = 0;
                                                                }
                                                            })
                                                        )
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 ", text: "Gửi tin đến khách hàng" }),
                                                        $("<div>", { class: "tal" }).append(
                                                            $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                            })
                                                        )
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                            loại: "ảnh",
                                                            đổi: function (s) {
                                                                //console.log(s)
                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                $(this).attr("id", s[0]);
                                                            },
                                                            lỗi: function () {
                                                                $(this).lỗi("Vui lòng thử lại.");
                                                            }
                                                        })
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlemẫumộ", type: "text", text: "", maxlength: 74 })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "w20" }),
                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                    $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).on("change", function () {
                                                        var t = $(this),
                                                            val = t.iVal();
                                                        t.iVal(val.toURL())
                                                    })
                                                ),
                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                        $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                            loại: "ảnh",
                                                            đổi: function (s) {
                                                                //console.log(s)
                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                $(this).attr("id", s[0]);
                                                            },
                                                            lỗi: function () {
                                                                $(this).lỗi("Vui lòng thử lại.");
                                                            }
                                                        })
                                                    )
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" })
                                                ),
                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nd" }).soạnThảo({
                                                        cỡ: 15,
                                                        html: true
                                                    })
                                                ),
                                                $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                    var t = $(this),
                                                        te = $(".tiêuđề").iVal(),
                                                        d = $(".môtả").iVal(),
                                                        n = $(".nd").iVal(),
                                                        anh = $(".đạidiện").attr("id"),
                                                        tt = $(".titlemẫumộ").iVal(),
                                                        u = $(".hienurl").iVal();
                                                    cl(t, d, n)
                                                    if (te == "" || n == "") {
                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                    } else {
                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: 4595, g: ghim, ả: anh, ê: te, ô: d, ộ: n, r: u }) }, function (e) {
                                                            if (e > 0) {
                                                                notice(
                                                                    { t: "Đăng tin thành công", loại: true }
                                                                );
                                                                $("#khungThôngBáo").remove();
                                                                đồngBộ(function () {
                                                                    vàoURL("/" + dữLiệu.url(v, "ụ"))
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            ),
                                            {
                                                thanh: false,
                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                viền: false,
                                                koTắt: true
                                            }
                                        )
                                    }).each(function () {
                                        var t = $(this);
                                        t.parent().sửaLớp("pr,bgcg")
                                    }).on("mouseenter mouseleave", function (e) {
                                        var dí = e.type == "mouseenter",
                                            t = $(this);
                                        if (dí) {
                                            t.append(
                                                $("<div>", { class: "pr chúThích" }).append(
                                                    $("<div>", { class: "pa mb25 z3 b1 l50 ttx bgcf bra3 pa3 fs08 c1 bss bcd bw1 wsn", text: "Thêm bài viết mẫu mộ" })
                                                )
                                            )
                                        } else {
                                            $(".chúThích").remove();
                                        }
                                    })
                                )
                            }
                        })
                    },
                    thaoTácGóiSảnPhẩm: function () {
                        return this.each(function () {
                            if (là("U")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "ml15 fs12 z7 btn bgcd bra3 bcf mc1h c6 nuth dib pa t0 r0 mt15 pa3", icon: "grid_on" }).on("click", function () {

                                    })
                                )
                            }
                        })
                    },
                    //Hàm để sửa, xóa bài viết
                    thaotácBàiViết: function (idBài, ê, ô, ộ, loại) {
                        return this.each(function () {
                            var mang;
                            lay = config("bàiViết." + idBài),
                                url = lay.u,
                                ngay = lay.ấ,
                                cmuc = Jd(lay.ụ)[0],
                                ghim = 0;
                            //ndmoi = ộ.replace(/(http:\/\/lachongvien\.vn)/g,"");
                            //cl(ndmoi);
                            if (là("U")) {
                                cl($(this))
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "grid pa t0 r0 plr15 ptb5 bg1 bw1 bss bra3 bcf" }).css({

                                    }).append(
                                        $("<div>", { class: "m15 z7 bra3 bcf cf nuth fs16 ", icon: "edit::bấmĐc", tip: "Sửa bài viết" }).on("click", function () {
                                            khung(
                                                $("<div>", { class: "pa35 bgcf " }).append(
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(ê)
                                                    ),
                                                    $("<div>", { class: "grid" }).append(
                                                        $("<div>", { class: "mt25 mr25 pl10 fs13 grid" }).append(
                                                            $("<div>", { class: "mr15", text: "Ghim bài" }),
                                                            $("<div>", { class: "tal" }).append(
                                                                $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                    var t = $(this);
                                                                    if (t.is(":checked")) {
                                                                        ghim = 1;
                                                                    } else {
                                                                        ghim = 0;
                                                                    }
                                                                }).each(function () {
                                                                    if (lay.g == 1) {
                                                                        $(this).prop("checked", true);
                                                                        $(this).trigger("change");
                                                                    }
                                                                })
                                                            )
                                                        ),
                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                            $("<div>", { class: "mr15 w", text: "Gửi tin đến khách hàng" }),
                                                            $("<div>", { class: "tal" }).append(
                                                                $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "w20" }),
                                                        $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                        $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlebài", type: "text", text: "", maxlength: 74 }).val(lay.ó)
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" + ((cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? "" : " dn") }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                        $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                            var t = $(this),
                                                                val = t.iVal();
                                                            CẦN.db("chuyênLực.4597", function (e) {
                                                                e.map(function (a, b) {
                                                                    t.append(
                                                                        $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                    )
                                                                })
                                                            })
                                                        }).each(function () {
                                                            $(this).val(cmuc);
                                                        })
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Ngày đăng:" }),
                                                        $("<div>", { class: "w30 plr10 ptb3 bra3 bss bcd bw1 ngaydang" }).attr({ contenteditable: true, }).chọnNgày({
                                                            quáKhứ: true,
                                                            nổi: true,
                                                        }).iVal(ngay)
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "w20" }),
                                                        $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                        $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).val(url ? url : ê.toURL().cắt(128))
                                                    ),
                                                    $("<div>", { class: "mt25 fs12 grid" }).append(
                                                        $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                        $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text" }).append(
                                                            $("<div>", { class: "pb43 bgcfx w1 pr bgrn bgso bgpc đạidiện" }).append(
                                                                $("<div>", { class: "pa w1 tac tl50 tt cd làmMàu1", text: "Chọn ảnh đại diện" })
                                                            ).tảiLên({
                                                                loại: "ảnh",
                                                                đổi: function (s) {
                                                                    //console.log(s)
                                                                    $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                    $(this).attr("id", s[0]);
                                                                    $(".làmMàu1").sửaLớp("dn");
                                                                },
                                                                lỗi: function () {
                                                                    $(this).lỗi("Vui lòng thử lại.");
                                                                }
                                                            }).each(function () {
                                                                var t = $(this),
                                                                    b = config("bàiViết." + idBài);
                                                                cl(b)
                                                                if (b.ả) {
                                                                    cl(b.ả)
                                                                    t.sửaLớp("-bgcfx");
                                                                    t.css({ backgroundImage: "url('" + dữLiệu.ảnh(idBài, "ế", "200px") + "')" });
                                                                } else {
                                                                    t.append(
                                                                        $("<div>", { class: "tl50 tt fs12 fs09-xs c6", text: "Chưa có ảnh" })
                                                                    )
                                                                }
                                                            })
                                                        )
                                                    ),
                                                    $("<div>", { class: "mt25 pb15 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 pb3", text: "Danh mục ảnh bài viết:" }),
                                                        $("<div>", { class: " w1 oxa oh wsn pa15 grid bss bcd bw1 bra3" }).each(function () {
                                                            var t = $(this),
                                                                ds = ộ.match(/(id=")+[0-9]+/g);
                                                            ds1 = ộ.match(/(src=")+[A-z0-9\:\/\-]+\.+[A-z]+\"/g);
                                                            //cl(ds1);
                                                            if (ds) {
                                                                ds.map(function (v, vt) {
                                                                    var id = v.match(/[0-9]+/g);
                                                                    t.append(
                                                                        $("<div>", { class: "w30 pa5 vat", id: id }).append(
                                                                            $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" })
                                                                        ).on("click", function () {
                                                                            var t = $(this),
                                                                                id = t.attr("id");
                                                                            t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                            $(".đạidiện").css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" });
                                                                            $(".đạidiện").attr("id", id);
                                                                        })
                                                                    )
                                                                })
                                                            }
                                                            if (ds1) {
                                                                ds1.map(function (v, vt) {
                                                                    var link = v.replace(/(src=")/g, "").replace(/(")/g, "");
                                                                    cl(link)
                                                                    t.append(
                                                                        $("<div>", { class: "w30 pa5 vat" }).append(
                                                                            $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + link + "')" })
                                                                        ).on("click", function () {
                                                                            var t = $(this),
                                                                                id = t.attr("id");
                                                                            t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                            $(".đạidiện").css({ backgroundImage: "url('" + link + "')" });
                                                                            $(".đạidiện").attr("id", link);
                                                                        })
                                                                    )
                                                                })
                                                            }
                                                        })
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                        $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" }).val(ô)
                                                    ),
                                                    $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                        $("<div>", { class: "mt25 w1 bss bcd bw1 nd pnd" }).soạnThảo({
                                                            cỡ: 15,
                                                            html: true,
                                                            sẵn: ộ
                                                        })
                                                    ).each(function () {
                                                        var lanh = $(this).find("img[id]"),
                                                            tcanh = $(this).find("img");
                                                        cl(tcanh)
                                                        lanh.each(function () {
                                                            var id = $(this).attr("id");
                                                            if (id > 0) {
                                                                $(this).attr("src", dữLiệu.ảnh(id, "i", "500x"))
                                                            }
                                                            //$(vt).trigger("change")

                                                        })
                                                        tcanh.each(function () {
                                                            $(this).sửaLớp("w1");
                                                            $(this).attr("height", "auto");
                                                        })
                                                    }),
                                                    $("<div>", { class: "tar" }).append(
                                                        $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                            var t = $(this),
                                                                te = $(".tiêuđề").iVal() ? $(".tiêuđề").iVal() : $(".titlebài").iVal(),
                                                                m = $(".môtả").iVal(),
                                                                n = $(".nd").iVal(),
                                                                anh = $(".đạidiện").attr("id"),
                                                                u = $(".hienurl").iVal(),
                                                                tt = $(".titlebài").iVal(),
                                                                muc = (cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? $(".chuyênMụcTin").iVal() : cmuc,
                                                                ngay = $(".ngaydang").iVal();
                                                            cl(Jd(lay.ụ)[0])
                                                            if (te == "" || n == "") {
                                                                t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời nhập thông tin bài viết !" }))
                                                            } else {
                                                                CẦN.db("bàiViết." + idBài, function (bài) {
                                                                    t.xửLý("bàiViết.sửa." + idBài, { d: Je({ g: ghim, ả: anh, ó: tt, ê: te, ô: m, ộ: n, r: u, ấ: ngay, ụ: [muc] }) }, function (i) {
                                                                        notice(
                                                                            { t: "Đã cập nhật bài viết", loại: true }
                                                                        );
                                                                        $("#khungThôngBáo").remove();
                                                                        đồngBộ(function () {
                                                                            vàoURL(dữLiệu.url(idBài, "ế"));
                                                                            var tómTắt = config("bàiViết." + idBài).ó;
                                                                            $('title').text(tómTắt);
                                                                            cl(config("bàiViết." + idBài))
                                                                        })
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    )
                                                )
                                                , {
                                                    thanh: false,
                                                    trong: "col-md-6 col-sm-6 col-xs-11",
                                                    viền: false,
                                                    koTắt: true
                                                }
                                            )
                                        }),
                                        //nút xóa bài
                                        $("<div>", { class: "ml15 z7 bra3 bcf cf nuth fs16 ", icon: "delete_outline::bấmĐc", tip: "Xóa bài viết" }).on("click", function () {
                                            var t = $(this);
                                            t.iMsg($("<div>", { class: "" }).append(
                                                $("<div>", { class: "", text: "Bạn muốn xóa bài viết ?" }),
                                                $("<div>", { class: "pr pb249" }).append(
                                                    $("<div>", { class: "bgcrd cf plr10 btn ptb5 bra3 pa t50 tty l0", text: "Không" }).on("click", function () {
                                                        t.iMsg()
                                                    }),
                                                    $("<div>", { class: "bg1 cf plr10 ptb5 btn bra3 pa t50 tty r0", text: "Có" }).on("click", function () {
                                                        CẦN.db("bàiViết." + idBài, function (bài) {
                                                            var a = config("bàiViết." + idBài);
                                                            xửLý("bàiViết.sửa", { d: Je([idBài, "a", 1]) }, function (i) {
                                                                notice(
                                                                    { t: "Đã xóa bài viết", loại: true }
                                                                )
                                                                //đồngBộ(function(){
                                                                vàoURL(dữLiệu.url(Jd(bài.ụ)[0], "ụ"))
                                                                //})
                                                            })
                                                        })
                                                    })
                                                )
                                            )
                                                , 1)
                                        })
                                    )
                                ).each(function () {
                                    //cl($(".pnd"))
                                })
                            }
                        })
                    },
                    thayVideo: function () {
                        return this.each(function () {
                            if (là("A")) {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "btn c6 bra3 fs12 pa3 bgcd pa t0 r0 ma10 bcd", icon: "pan_tool" }).on("click", function () {
                                        cl(1)
                                        khung(
                                            $("<div>", { class: "pa25" }).append(
                                                $("<div>", { class: "mr25" }).append(
                                                    $("<div>", { class: "fs12 mc1 tac pb15", text: "Thay đổi video giới thiệu" }),
                                                    $("<input>", { class: "c6 pa10 bss bcd bra3 mt15 url", placeholder: "Dán URL tại đây" }),
                                                    $("<div>", { class: "pt15 grid" }).append(
                                                        $("<div>", { class: "btn bg1 cf bss bcd bra3 pa7", text: "Thay đổi" }).on("click", function () {
                                                            var t = $(this),
                                                                url = $(".url").val(),
                                                                tach = url.match(/(v=)+\w+.+\w+/g)[0].replace("v=", "");
                                                            $.post("xu_ly.php", { action: "downloadVideo", url: url }, function () {

                                                            })
                                                        })
                                                    )
                                                ),
                                                // $("<label>",{class:"bss bcd bw1 bra3 pa25 fs12 w1 c9 db tac ",for:"chonv",text:"Chọn file mp4"}),
                                                // $("<input>",{class:"",id:"chonv",type:"file"}),
                                                // $("<div>",{class:"dib mt15 btn bra3 bg1 cf plr15 ptb7 fs09",text:"Thay video"}).on("click",function(){
                                                // 	var video = document.getElementById('chonv').files;
                                                // 	cl(video[0]);
                                                // 	if(video[0].type != "video/mp4"){
                                                // 		notice(
                                                // 			{t:"File bạn chọn không phải định dạng mp4",loại:false}
                                                // 		)
                                                // 	} else {
                                                // 		if(video[0].type > (50*1024*1024)){
                                                // 			notice(
                                                // 				{t:"File không được quá 50MB",loại:false}
                                                // 			)
                                                // 		} else {
                                                // 			var frmdata = new FormData(),
                                                // 				action = "uploadvideo";
                                                // 			frmdata.append('action',action);
                                                // 			frmdata.append('file',video[0]);
                                                // 			$.ajax({
                                                // 				url: "/xu_ly.php",
                                                // 				dataType: 'text',
                                                // 				cache: false,
                                                // 				contentType: false,
                                                // 				processData: false,
                                                // 				data: frmdata,
                                                // 				type: 'POST',
                                                // 				success: function (data) {
                                                // 					cl(data)
                                                // 				},
                                                // 				error: function (data) {
                                                // 				}
                                                // 			},"json");
                                                // 		}
                                                // 	}
                                                // })
                                                // ,
                                                // $("<div>",{class:"vat"}).append(
                                                // 	$("<div>",{class:"dib mc1 fs12 pb10",icon:"visibility"}),
                                                // 	$("<div>",{class:"dib fs12 pl7",text:"Preview"}),
                                                // 	$("<div>",{class:"pr pb43 w200 bgcd"}).append(
                                                // 		$("<video>",{type:"video/mp4",class:"ol wh1 ",src:"https://www.youtube.com/watch?v=ymPD2Qd9gV4"})
                                                // 	)
                                                // )
                                            )
                                            , {
                                                viền: false
                                            }
                                        )
                                    })
                                )
                            }
                        })
                    },
                    báo: function (loại) {
                        return this.each(function () {
                            if (loại == "cóbáo") {
                                $(this).sửaLớp("pr").append(
                                    $("<div>", { class: "bra50 pa5 bgcf bóng pa cóbáo", style: "top:-20%;" + (dai > 700 ? "left:-20%" : "right:-20%") }).append(
                                        $("<div>", { class: "bra50 pa5", style: "background:#24da48" })
                                    )
                                )
                            } else {
                                $(this).sửaLớp("-pr").children(".cóbáo").remove();
                            }
                        })
                    }
                });
                //Khung chứa toàn bộ phần giao diện
                $("#chua").append(
                    //$("<div>",{class:"icon1 pf t0 l0 w5 z11 pa1 dn-xs",style:"margin-top:80px"}).append(
                    // 	$("<img>",{class:"w1",src:"/img/caudoi.png",style:"height:auto"})
                    // ),
                    // $("<div>",{class:"icon2 pf r0 b0 dn wh150 z11 pa1 bgc03",style:"margin-top:80px"}),
                    //$("<div>",{class:"icon3 pf b0 l0 wh100 z11 bgpc bgrn bgsc dn-xs"}).css({backgroundImage:"url('/img/caydao.png')"}),
                    //các nút
                    $("<div>", { class: "pfi l0 b0 col-md-6 col-xs-12", id: "chứaCopy" }).css({
                        zIndex: "-1"
                    }),
                    $("<div>", { class: "pf z5 cf phuluc " + (dai > 700 ? " t50 tty r0" : " b0 w1 df bgcf bóng") }).append(
                        /*//nút thông báo và giỏ hàng
                    $("<div>",{class:"pf z5 l0 "+(dai>700?"b0 ":"t50 tty"),style:"margin: 0px 0px 7px "}).append(
                        $("<a>",{href:"Gio-Hang.g1.html",class:"db bóng bgc03 tac ptb10 plr5 bấmĐc brbr5 brtr5 giỏHàng",icon:"shopping_cart::vam crd fs15"}).each(function(){
                            // var t = $(this),
                            // 	a = $.đệm("hàngđặt").length;
                            // a?t.báo("cóbáo"):"";
                        }),
                        $("<div>",{class:"fs11 bóng bgcrd tac ptb10 plr5 bấmĐc brbr5 brtr5 dn",classM:"-fs15,fs10",icon:"notification_important::vam"})
                    ),*/
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen o0 t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>", { class: "wsn mc1 fs12", text: "0911 61 68 68" })
                            ),
                            $("<a>", { href: "tel:+84911616868", target: "_blank", class: "tac bấmĐc db " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 bg1" : " mc1 ptb15") }).append(
                                $("<div>", { class: "fs15", icon: "phone::vam" })
                            ).on("mouseenter mouseleave", function (e) {
                                var type = e.type == "mouseenter",
                                    t = $(this);
                                if (type) {
                                    t.prev().sửaLớp("o0,o1")
                                } else {
                                    t.prev().sửaLớp("-o1,o0")
                                }
                            }).on("click", function () {
                                var goi = cfg("lầnGọi");
                                cfg("lầnGọi", goi * 1 + 1);
                            })
                        ),
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen o0 t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>").html('<script src="https://apis.google.com/js/platform.js"><' + "/" + 'script><div class="g-ytsubscribe" data-channelid="UCt54UXv9LmF1YHk2h-UdIHg" data-layout="full" data-count="default"></div>')
                            ),
                            $("<a>", { href: "https://www.youtube.com/lachongvientv", target: "_blank", class: "tac bấmĐc db " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 nềnđỏ" : " cđỏ ptb15") }).append(
                                $("<div>", { class: "fs15 bgsc bra50 bgrn bgpc", style: "width:21px;height:21px" }).css({ backgroundImage: "url('/img/youtube.png')" })
                            ).on("mouseenter mouseleave", function (e) {
                                var type = e.type == "mouseenter",
                                    t = $(this);
                                if (type) {
                                    t.prev().sửaLớp("-o0,o1");
                                } else {
                                    t.prev().sửaLớp("-o1,o0");
                                }
                            })
                        ),
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen dn t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>").html('<div class="fb-page" data-href="https://www.facebook.com/congvientamlinhlachongvien/" data-height="100" data-width="250" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false" data-show-posts="false"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=118035745195680";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));<' + "/" + 'script>')
                            ),
                            $("<a>", { href: "https://www.facebook.com/congvientamlinhlachongvien/", target: "_blank", class: "tac bấmĐc db " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 nềnxanh" : " w20 cxanh ptb15") }).append(
                                $("<div>", { class: "fs15 bgso bgrn bgpc", style: "width:21px;height:21px" }).css({ backgroundImage: "url('/img/facebook.png')" })
                            ).on("mouseenter mouseleave", function (e) {
                                var type = e.type == "mouseenter",
                                    t = $(this);
                                if (type) {
                                    t.prev().sửaLớp("-dn");
                                } else {
                                    t.prev().sửaLớp("dn");
                                }
                            })
                        ),
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen o0 t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>", { class: "wsn mc1 fs12", text: "Tư vấn trực tiếp" })
                            ),
                            $("<div>", { class: "tac bấmĐc " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 nềncam" : " ccam ptb15") }).append(
                                $("<div>", { class: "fs15", icon: "question_answer::vam" })
                            ).on("mouseenter click mouseleave", function (e) {
                                var type = e.type,
                                    t = $(this);
                                if (type == "mouseenter") {
                                    t.prev().sửaLớp("o0,o1")
                                } else if (type == "click") {
                                    tánGẫu.khởiTạo(true);
                                    $('#hỗTrợTrựcTuyến').trigger('click');
                                } else {
                                    t.prev().sửaLớp("-o1,o0")
                                }
                            })
                        ),
                        // $("<div>",{class:"tac bấmĐc "+(dai>700?" zum t03s bra50 pa10 bóng mtb15 mr7 nềncam":"w25 ccam ptb15")}).append(
                        // 	$("<div>",{class:"fs15",icon:"question_answer::vam"})
                        // ).on("click mouseenter",function(e){
                        // 	var t = e.type == "click";
                        // 	if(t){
                        // 		tánGẫu.khởiTạo(true);
                        // 		$('#hỗTrợTrựcTuyến').trigger('click');
                        // 	} else {
                        // 		$(this).iMsg($("<div>",{class:"fwb crd fs11",text:"Tư vấn trực tuyến"}),2000)
                        // 	}
                        // }),
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen o0 t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>", { class: "wsn mc1 fs12", text: "Bản đồ" })
                            ),
                            $("<div>", { class: "tac bấmĐc " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 nềntím" : " w20  ctím ptb15") }).append(
                                $("<div>", { class: "fs15", icon: "room::vam" })
                            ).on("click", function () {
                                var idURL = đọcURL(location.href)[2];
                                if (idURL == ud) {
                                    $("html,body").animate({ scrollTop: $("#bando").offset().top }, "slow");
                                }
                                else {
                                    khung(
                                        $('<div>').append(
                                            tảiBảnĐồ()
                                        ),
                                        {
                                            trong: '',
                                            kín: true
                                        }
                                    )
                                }
                            }).on("mouseenter mouseleave", function (e) {
                                var type = e.type == "mouseenter",
                                    t = $(this);
                                if (type) {
                                    t.prev().sửaLớp("o0,o1")
                                } else {
                                    t.prev().sửaLớp("-o1,o0")
                                }
                            })
                        ),
                        $("<div>", { class: "grid pr w20 tac" + (là("M") ? " " : " mtb15") }).append(
                            $("<div>", { class: "pa10 bgcf pa pen o0 t50 tty mr10 bss bcd bw1 dn-xs", style: "right:100%" }).append(
                                $("<div>", { class: "wsn mc1 fs12", text: "Giỏ hàng" })
                            ),
                            $("<div>", { class: "tac bấmĐc db giỏHàng " + (dai > 700 ? " zum t03s bra50 pa10 bóng mr7 bgcf cbrown" : "w20 mc1 ptb15 cbrown") }).append(
                                $("<div>", { class: "fs15", icon: "shopping_cart::vam" })
                            ).on("mouseenter mouseleave", function (e) {
                                var type = e.type == "mouseenter",
                                    t = $(this);
                                if (type) {
                                    t.prev().sửaLớp("o0,o1")
                                } else {
                                    t.prev().sửaLớp("-o1,o0")
                                }
                            })
                        )
                    ),
                    $("<div>", { class: "pf b0 r0 pa10 bra50 bóng bg1 z5 cf dautrang tac dn bấmĐc " + (dai > 700 ? "" : "dn"), style: "margin: 0px 7px 50px 0px " }).append(
                        $("<div>", { class: "fs15", classM: "-fs15,fs1", icon: "expand_less::vam" })
                    ).on("click", function () {
                        $("html,body").animate({ scrollTop: 0 }, "slow");
                    }),
                    $("<div>", { class: (là("M") ? "" : "psi t0 l0 z9") }).each(function () {
                        var thẻ = $(this);
                        CẦN.db("chuyênLực.4591", function (e) {
                            thẻ.append(
                                //menu Responsive
                                $("<div>", { id: "menu-dt1", class: "ptb15 grid pr bóng z9 bgcf " + (dai > 700 ? "dn" : ""), style: "" }).append(
                                    $("<a>", { href: "/", class: "db tal pl10" }).append(
                                        $("<div>", { class: "dib w25" }).append(
                                            $("<img>", { class: "w1 mlra", src: "/img/logo_lhv.jpg" })
                                        ),
                                        $("<div>", { class: "fs11  mc1 lh1 dib c9 mt3 vab wsn ttu pl3 bl2 bc1 bss mc1", style: "margin-bottom:-1px", text: "Lạc Hồng Viên" })
                                    ),
                                    $("<div>", { class: "pa t50 tty r0 mr10 grid" }).append(
                                        $("<div>", { class: "fs15 mr15 mc1 " + (là("U") ? "" : "dn"), icon: "exit_to_app" }).on("click", function () {
                                            tôi.đăngXuất(function () {
                                                location.reload()
                                            })
                                        }),
                                        $("<div>", { class: "fs15 mr15 mc1 loginicon" + (là("U") ? "dn" : ""), icon: "account_circle" }).on("click", function () {
                                            k = khung(
                                                $("<div>", { class: "ptb25" }).append(
                                                    $("<div>", { class: "plr15" }).append(
                                                        $("<div>", { class: "ttu fs12 mc1 pb10 bss bc1 bb2 tac", text: "đăng nhập" }),
                                                        $("<div>", { text: "Tên tài khoản", class: "mt15 mc1 ttu" }),
                                                        $("<input>", { id: "taikhoan", class: "mt5 pa3 w1 bra3" }),
                                                        $("<div>", { text: "Mật khẩu", class: "mt15 mc1 ttu" }),
                                                        $("<input>", { id: "matkhau", type: "password", class: "mt5 pa3 w1 bra3" }).bind("keypress", function (e) {
                                                            if (e.keyCode == 13) {
                                                                $(".vào").trigger("click")
                                                            }
                                                        }),
                                                        $("<div>", { class: "tar mt15" }).append(
                                                            $("<div>", { class: "vào bóng bg1 cf bra3 plr10 ptb5 dib bấmĐc", text: "Đăng nhập" }).on("click", function () {
                                                                var taikhoan = $("#taikhoan").iVal(),
                                                                    matkhau = $("#matkhau").iVal();
                                                                if ($("#taikhoan").val() == "" || $("#matkhau").val() == "") {
                                                                    alert("Mời nhập tài khoản !")
                                                                } else {
                                                                    tôi.đăngNhập(taikhoan, matkhau, function (d) {
                                                                        $.post("/xu_ly.php", { action: "thêmSession", option: 1, id: d.i }, function (kq) {
                                                                            cl(kq)
                                                                        })
                                                                        location.reload();
                                                                    }, function (e) {
                                                                        $("#taikhoan,#matkhau").val("");
                                                                        alert("Tài khoản hoặc mật khẩu không đúng, mời nhập lại !")
                                                                    })
                                                                }
                                                            })
                                                        )
                                                    )
                                                ),
                                                {
                                                    thanh: false,
                                                    trong: "col-md-3 col-sm-3 col-xs-10 ",
                                                    viền: false,
                                                    kotắt: false
                                                }
                                            )
                                        }),
                                        $("<div>", { class: "mr10 fs2 mc1 3que", icon: "dehaze" }).on("click", function () {
                                            $("#menu-dt").trigger("mở");
                                        })
                                    )
                                ),
                                $("<div>", { class: "pf t0 l0 wh1 dn z9 bgc03", id: "menu-dt" }).append(
                                    $("<div>", { id: "menudoc", class: "w75 pa h1 r0 oh oxy oa bgcfx pr", text: "" }).append(
                                        $("<div>", { class: "pa b0 l0 ma25 btn dib cf bg1 ptb10 plr15 mt25 bn bra5", text: "Đóng" }).on("click", function () {
                                            $("#menu-dt").trigger("đóng");
                                        }),
                                        $("<div>", { class: "pr", text: "" }).css({
                                            backgroundImage: "url('/image/bgmn.jpg')",
                                            backgroundSize: "cover",
                                            padding: "65px 0px 65px 0px"
                                        }).append(
                                            $("<div>", { class: "pa t0 l0 b0 r0" }).css({
                                                background: "#01230169"
                                            }),
                                            $("<div>", { class: "pa t0 r0 fs15 tar pr10 ptb5 cf", icon: "close" }).on("click", function () {
                                                $("#menu-dt").trigger("đóng");
                                            }),
                                            //tìm kiếm responsive
                                            $("<div>", { class: "grid tac plr15" }).append(
                                                $("<div>", { class: "pr w1" }).append(
                                                    $("<input>", { class: "db bra5 w1", placeholder: "Nhập nội dung tìm kiếm" }),
                                                    $("<div>", { icon: "search::vam", class: "pa t50 r0 tty pr10" }).on("click", function () {
                                                        var tìm = $(this).prev().iVal();
                                                        if (tìm == "") {
                                                            alert("Mời bạn nhập nội dung tìm kiếm")
                                                        } else {
                                                            vàoURL("/search/" + tìm);
                                                            $("#menu-dt").trigger("đóng");
                                                            cuộn();
                                                        }
                                                    })
                                                )
                                            )
                                        ),
                                        $("<div>", { class: "mt10 plr15" }).append(
                                            $("<a>", { href: "/", class: "db plr10 ptb15 bấmĐc mc1 bb1 bss bc3 fwb", text: "Trang chủ" })
                                        ).each(function () {
                                            var t = $(this);
                                            //CẦN.db("chuyênLực.4591",function(e){
                                            if (e) {
                                                dãymenu = e;
                                                e.map(function (v, i) {
                                                    m = config("chuyênMục." + v);
                                                    con = config("chuyênLực." + v);
                                                    t.append(
                                                        (con.length ?
                                                            (v == 4595 || v == 4599 ?
                                                                $("<a>", { href: dữLiệu.url(v, "ụ"), class: "db plr10 ptb15 bấmĐc mc1 bb1 bss bc3 fwb" + (v == 4599 ? " dn" : ""), text: m.ê })
                                                                : $("<div>").append(
                                                                    $("<div>", { class: "db plr10 ptb15 bấmĐc mc1 bb1 bss bc3 fwb mrht df jcsb" }).append(
                                                                        $("<div>", { text: m.ê }),
                                                                        $.icon("keyboard_arrow_down::fs14,plr5")
                                                                    ).on("click", function () {
                                                                        $(this).next("").slideToggle("slow");
                                                                    }),
                                                                    $("<div>", { class: "w1 dn" }).each(function () {
                                                                        var a = $(this),
                                                                            id = a.attr("id");
                                                                        CẦN.db("chuyênLực." + v, function (e1) {
                                                                            if (e1) {
                                                                                e1.map(function (x, y) {
                                                                                    m1 = config("chuyênMục." + x);
                                                                                    a.append(
                                                                                        $("<a>", { icon: "layers::mr7 fs08", href: dữLiệu.url(x, "ụ"), class: "db pl25 ptb15 bấmĐc mc1 fwb", id: x, text: m1.ê })
                                                                                    )
                                                                                })
                                                                            }
                                                                        })
                                                                    })
                                                                )
                                                            )
                                                            : (v == 4600 ? $("<div>", { class: "db plr10 ptb15 bấmĐc mc1 bb1 bss bc3 fwb", text: m.ê }).on("click", function () {
                                                                $('html,body').animate({ scrollTop: $("#footer").offset().top - 100 }, "slow");
                                                                $("#menu-dt").trigger("đóng");
                                                            }) : (v == 4663 || v == 4881) ? "" : $("<a>", { href: dữLiệu.url(v, "ụ"), class: "db plr10 ptb15 bấmĐc mc1 bb1 bss bc3 fwb", text: m.ê })
                                                            )
                                                        )
                                                    ).on("click", "a", function () {
                                                        $("#menu-dt").trigger("đóng");
                                                    })
                                                })
                                            }
                                            //})
                                        })
                                    )
                                ).self("click", function () {
                                    $(this).trigger("đóng")
                                }).on("đóng mở", function (e) {
                                    try {
                                        var t = $(this),
                                            m = t.find("#menudoc"),
                                            d = e.type == "đóng",
                                            g = 600;
                                        t.show();
                                        m[d ? "ẩn" : "hiện"]("slideOutRight", g, function () {
                                            t[d ? "fadeOut" : "fadeIn"](g);
                                        })
                                    } catch (err) {
                                        alert(err)
                                    }
                                }).on("swiperight", function () {
                                    $(this).trigger("đóng")
                                }),
                                //Menu thường
                                $("<div>", { class: "df pr bss bb1 bcd bgcf bóng col-md-12 col-sm-12 col-xs-0 fni  " + (dai > 700 ? "" : "dn"), id: "menu" }).append(
                                    //nút thêm chuyên mục
                                    $("<div>", { class: "wh1 o03 bgso bgpc bgrn bgcf", style: "height:80px" }),
                                    (là("U") ?
                                        $("<div>", { class: "pa r0 t0 mt5 mr5 fs1 z7 btn bgcd bra3 bcf mc1h c6 nuth", icon: "add" }).on("click", function () {
                                            var mang = [];
                                            // CẦN.db("chuyênLực.4591",function(e){
                                            // 	if(e){
                                            // 		e.map(function(v,i){
                                            // 			if(v!=4881){
                                            // 				m = config("chuyênMục."+v);
                                            // 				mang.push(m)
                                            // 			}
                                            // 		})
                                            // 	}
                                            // })
                                            //cl(mang)
                                            khung(
                                                $("<div>", { class: "pa35 bgcf", text: "" }).append(
                                                    $("<div>", { class: "pt35 fs15", text: "Thêm chuyên mục lớn:" }),
                                                    $("<input>", { class: "ptb5 bra3 w1 bcd mt15", id: "cmlon" }).bind("keypress", function (e) {
                                                        if (e.keyCode == 13) {
                                                            $(".thêmmụclớn").trigger("click")
                                                        }
                                                    }),
                                                    $("<div>", { class: "btn dib bg1 plr15 ptb5 mt15 cf bra3 thêmmụclớn", text: "Thêm" }).on("click", function () {
                                                        var t = $(this),
                                                            a = $("#cmlon").iVal(),
                                                            b = a.split(","),
                                                            lỗi = 0;
                                                        //cl(a)
                                                        b.map(function (v, i) {
                                                            t.xửLý("chuyênMục.tạo", { d: Je({ ấ: 0, ụ: ["4591"], u: 1, ê: [v] }) }, function (d) { }, function (e) { lỗi = 1; })
                                                        });
                                                        notice(
                                                            { t: lỗi ? "Thêm thất bại" : "Thêm thành công", loại: lỗi ? false : true }
                                                        );
                                                        $("#cmlon").val("");
                                                    }),
                                                    $("<div>", { class: "pt35 fs15", text: "Thêm chuyên mục nhỏ:" }),
                                                    $("<div>", { class: "mt25 fs13 grid" }).append(
                                                        $("<div>", { class: "mr15", text: "Chọn chuyên mục được thêm" }),
                                                        $("<div>", { class: "bra3 ptb10 bss bcd bw1 pl15", text: "", id: "chọndanhmục" }).sổ(
                                                            mang.map(function (v, i) {
                                                                return { chữ: v.ê, giáTrị: v.i }
                                                            }),
                                                            {
                                                                đổi: function (a) {
                                                                    console.log(a)
                                                                },
                                                                nhãn: "Chọn mục"
                                                            }
                                                        )
                                                    ),
                                                    $("<input>", { class: "ptb5 bra3 w1 bcd mt15", id: "cmnho" }).bind("keypress", function (e) {
                                                        if (e.keyCode == 13) {
                                                            $(".thêmmụcnhỏ").trigger("click")
                                                        }
                                                    }),
                                                    $("<div>", { class: "btn dib bg1 plr15 ptb5 mt15 cf bra3 thêmmụcnhỏ", text: "Thêm" }).on("click", function () {
                                                        var t = $(this),
                                                            dm = $("#chọndanhmục").iVal(),
                                                            a = $("#cmnho").iVal(),
                                                            b = a.split(","),
                                                            lỗi = 0;
                                                        //cl(a)
                                                        b.map(function (v, i) {
                                                            t.xửLý("chuyênMục.tạo", { d: Je({ ấ: 1, ụ: [dm + ""], u: 1, ê: [v] }) }, function (d) {

                                                            }, function (e) {
                                                                lỗi = 1;
                                                            })
                                                        });
                                                        notice(
                                                            { t: lỗi ? "Thêm thất bại" : "Thêm thành công", loại: lỗi ? false : true }
                                                        );
                                                        $("#cmnho").val("")
                                                    })
                                                ),
                                                {
                                                    thanh: false,
                                                    trong: "col-md-5 col-sm-5 col-xs-10 ",
                                                    viền: false,
                                                    kotắt: false
                                                }
                                            )
                                        }).on("mouseenter mouseleave", function (e) {
                                            var dí = e.type == "mouseenter",
                                                t = $(this);
                                            if (dí) {
                                                t.append(
                                                    $("<div>", { class: "pr" }).append(
                                                        $("<div>", { class: "pa mt5 t1 r0 bgcf bra3 pa3 fs08 chúThích c1 bss bcd bw1 wsn", text: "Tạo thêm chuyên mục" })
                                                    )
                                                )
                                            } else {
                                                $(".chúThích").remove();
                                            }
                                        })
                                        : ""),
                                    $("<div>", { class: "pa w1 z1 cb" }).append(
                                        $("<div>", { class: "w90 mlra grid df" }).append(
                                            $("<a>", { href: "/", class: "col-sm-1 col-md-2 fni ptb3 tac" }).append(
                                                $("<img>", { class: " db mlra", width: "120px", height: "50px", src: "/img/logo_lhv1.png" })
                                            ).each(function () {
                                                var t = $(this),
                                                    sau = đọcURL()[1];
                                                if (sau) {
                                                    t.append(
                                                        $("<div>", { class: "fs08 c9 wsn fwb", style: "color: #7599e7", text: "Lạc Hồng Viên" })
                                                    )
                                                } else {
                                                    t.append(
                                                        $("<h1>", { class: "fs08 c9 wsn fwb", style: "color: #7599e7", text: "Lạc Hồng Viên" })
                                                    )
                                                }
                                            }),
                                            $("<div>", { class: "col-md-11 col-sm-11 fni grid tar fs11" }).append(
                                                $("<div>", { class: "animenu grid pr" }).append(
                                                    $("<a>", { href: "/", class: "animenuitem plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", text: "Trang chủ", style: "line-height:30px" })
                                                ).each(function () {
                                                    var t = $(this);
                                                    CẦN.db("chuyênLực.4591", function (e) {
                                                        $(".menucx").remove();
                                                        CẦN.db("chuyênLực." + e, function () {
                                                            if (e) {
                                                                dãymenu = e;
                                                                e.map(function (v, i) {
                                                                    m = config("chuyênMục." + v);
                                                                    con = config("chuyênLực." + v);
                                                                    //cl(con);
                                                                    t.append(
                                                                        (con.length ?
                                                                            (v == 4595 ? //|| v==4599
                                                                                $("<a>", { href: dữLiệu.url(v, "ụ"), class: "animenuitem menucx plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", id: v, text: m.ê, style: "line-height:30px" })
                                                                                : (v == 4599 ? $("<div>", { class: "mn_cha menucx plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", id: v, text: m.ê, style: "line-height:80px" }).append(
                                                                                    $("<div>", { class: "mn2 pa z3 bg1 cf dn" }).append(
                                                                                        $("<a>", { href: dữLiệu.url(4599, "ụ"), class: "mn_con pl10 bấmĐc wsn mn3 tal ptb10 lh1 db fwb", text: "Cúng giỗ & Đặt giỗ", style: "padding-right:70px" }),
                                                                                        $("<div>", { href: "", class: "mn_con pl10 bấmĐc wsn mn3 tal ptb10 lh1 db fwb", text: "Đặt gói giỗ", style: "padding-right:70px" }).on("click", function () {
                                                                                            var k = khung(
                                                                                                $("<div>", { class: "khung plr50 pb25 pr", classM: "-plr50" }).append(
                                                                                                    $("<div>", { class: "ttu fs15 mc1 tac pt15 pb5 lh1 cl1", text: "đặt gói giỗ" }),
                                                                                                    $("<div>", { class: "tac pa5 grid" }).each(function () {
                                                                                                        var t = $(this);
                                                                                                        góiGiỗ.all(function (a) {
                                                                                                            a.map(function (v, i) {
                                                                                                                var tên = góiGiỗ.tên(v);
                                                                                                                t.append(
                                                                                                                    $("<div>", { class: "pa5" }).append(
                                                                                                                        $("<div>", { class: "plr10 ptb7 bra3 góigiỗ fs095 bấmĐc bg1h bgcde cfh mtb2" + (i == 0 ? " bg1 cf" : ""), id: v, text: tên })
                                                                                                                    )
                                                                                                                )
                                                                                                            });
                                                                                                            $("#1000283").trigger("click");
                                                                                                        })
                                                                                                    }),
                                                                                                    $("<div>", { class: "mt25" }).append(
                                                                                                        $("<div>", { class: "hiểnThịGói vat grid tac ptb10" }),
                                                                                                        $("<div>", { class: " ptb25 bsdo bt1 bcd" }).append(
                                                                                                            $("<div>", { class: "fs11 fwb cl1 w1 mc1 ", text: "Chi tiết gói giỗ" }),
                                                                                                            $("<div>", { class: "hiểnThịMôTả pt10" })
                                                                                                        ),
                                                                                                        $("<div>", { class: "w1 mt15 grid tac" }).append(
                                                                                                            $("<div>", { class: "chọngói plr15 bra3 ptb7 cf bar bg1 fs09 fwb bấmĐc", text: "Đặt gói", icon: "add" }).on("click", function () {
                                                                                                                ///Giang xem ở đây
                                                                                                                var id = $(".khung").find(".hiểnThịMôTả").ID(),
                                                                                                                    giágói = 0,
                                                                                                                    k,
                                                                                                                    gsẵn = $.đệm("giỏHàng") || [],
                                                                                                                    mangid = [],
                                                                                                                    idgói = góiGiỗ.tên(id),
                                                                                                                    giá = góiGiỗ.giá(id) ? góiGiỗ.giá(id) * 1 : 0;
                                                                                                                giágói += giá;
                                                                                                                (gsẵn || []).map(function (v, i) {
                                                                                                                    mangid.push(v.id);
                                                                                                                });
                                                                                                                if ($.inArray(id, mangid) >= 0) {
                                                                                                                    notice({
                                                                                                                        t: "Gói hàng này đã có trong đơn hàng!",
                                                                                                                        loại: true
                                                                                                                    })
                                                                                                                } else {
                                                                                                                    gsẵn.push({
                                                                                                                        tên: idgói,
                                                                                                                        sốlượng: "1",
                                                                                                                        giá: phẩy(giágói * 1),
                                                                                                                        thànhtiền: phẩy(giágói * 1),
                                                                                                                        ảnh: góiGiỗ.ảnh(id),
                                                                                                                        id: id
                                                                                                                    })
                                                                                                                    notice({
                                                                                                                        loại: true,
                                                                                                                        t: "Đã thêm gói sản phẩm vào giỏ hàng!"
                                                                                                                    });
                                                                                                                    $.đệm("giỏHàng", gsẵn, 1);
                                                                                                                    if (!empty(gsẵn)) {
                                                                                                                        $(".giỏHàng").trigger("click")
                                                                                                                    }
                                                                                                                }
                                                                                                            })
                                                                                                        )
                                                                                                    ),
                                                                                                    $("<a>", { href: dữLiệu.url(4599, "ụ"), class: " pa t0 r0 mr25 mt25 fs09 btn pa 10 bra3 bg1cfh bgcfx pa3", text: "Cúng giỗ online" })
                                                                                                ), {
                                                                                                kín: true,
                                                                                                trong: "col-md-11 col-xs-12",

                                                                                                onShow: function () {

                                                                                                }
                                                                                            }
                                                                                            );
                                                                                            k.on("click", ".góigiỗ", function () {
                                                                                                var t = $(this),
                                                                                                    id = t.attr("id"),
                                                                                                    a = góiGiỗ.quanhệ(id),
                                                                                                    b = a.sởHữu;
                                                                                                t.sửaLớp("bg1,cf,-c1,-bgcf").parent().siblings().children().sửaLớp("-bg1,-mc1,c1,bgcf");
                                                                                                $(".hiểnThịGói,.hiểnThịMôTả").empty().ID(t.ID());
                                                                                                $(".hiểnThịMôTả").append(
                                                                                                    $("<div>", { class: "grid ptb7" }).append(
                                                                                                        $("<div>", { class: "fwb", text: "Tên gói giỗ : ", z: góiGiỗ.tên(id) })
                                                                                                    ),
                                                                                                    $("<div>", { class: "grid ptb7" }).append(
                                                                                                        $("<div>", { class: "fwb", text: "Mô tả gói giỗ : ", z: góiGiỗ.môtả(id) })
                                                                                                    ),
                                                                                                    $("<div>", { class: "grid ptb7" }).append(
                                                                                                        $("<div>", { class: "fwb", text: "Tần suất gói giỗ : ", z: góiGiỗ.tầnsuất(id) })
                                                                                                    )
                                                                                                );

                                                                                                var mangsp = [];
                                                                                                $.map(b["01f20dda670f525894655f0ba414e5cf"], function (v, i) {
                                                                                                    if (i != "l") {
                                                                                                        v.map(function (v1, i1) {
                                                                                                            mangsp.push(v1)
                                                                                                        })
                                                                                                    }
                                                                                                })

                                                                                                $.map(b["01f20dda670f525894655f0ba414e5cf"], function (v, i) {
                                                                                                    if (i != "l") {
                                                                                                        v.map(function (x, y) {
                                                                                                            CẦN.db("01f20dda670f525894655f0ba414e5cf." + x, function () {
                                                                                                                var ttdg = config("01f20dda670f525894655f0ba414e5cf" + x);
                                                                                                                cl(ttdg, x)
                                                                                                                $(".hiểnThịGói").append(
                                                                                                                    $("<div>", { class: "w20 pa5", classM: "-w20,w50" }).append(
                                                                                                                        $("<div>", { class: "bss bcd bw1 sảnPhẩm bgcf", id: x }).append(
                                                                                                                            $("<div>", { class: "w1 pb169 bgso bgpc bgrn" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(đồGiỗ.ảnh(x), "i", "300px") + "')" }),
                                                                                                                            $("<div>", { class: "pa7 tal", style: "background: linear-gradient(305deg, rgba(150,222,237,0.87718837535014) -1%, rgba(115,133,119,0.8799894957983193) 58%, rgba(81,171,136,1) 104%)" }).append(
                                                                                                                                $("<div>", { class: "cf", text: đồGiỗ.tên(x).cắt(30) }),
                                                                                                                                $("<div>", { class: "ptb0 cf", text: "Số lượng : " + i })
                                                                                                                            )
                                                                                                                        )
                                                                                                                    )
                                                                                                                )
                                                                                                            })
                                                                                                        })
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        })
                                                                                    )
                                                                                ) : $("<div>", { class: "mn_cha menucx plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", id: v, text: m.ê, style: "line-height:80px" }).append(
                                                                                    $("<div>", { class: "mn2 pa z3 bg1 cf dn", id: v }).each(function () {
                                                                                        var a = $(this),
                                                                                            id = a.attr("id");
                                                                                        CẦN.db("chuyênLực." + id, function (e1) {
                                                                                            if (e1) {
                                                                                                e1.map(function (x, y) {
                                                                                                    m1 = config("chuyênMục." + x);
                                                                                                    a.append(
                                                                                                        $("<a>", { href: dữLiệu.url(x, "ụ"), class: "mn_con plr10 bấmĐc wsn mn3 tal ptb10 lh1 db fwb", id: x, text: m1.ê })
                                                                                                    )
                                                                                                })
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                )
                                                                                )
                                                                            )
                                                                            : (v == 4600 ? $("<div>", { class: "animenuitem menucx plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", id: v, text: m.ê, style: "line-height:30px" }).on("click", function () {
                                                                                $('.doimaumenu').sửaLớp('-doimaumenu');
                                                                                $(this).sửaLớp('doimaumenu');
                                                                                $('html,body').animate({ scrollTop: $("#bando").offset().top }, "slow") - 100;
                                                                            })
                                                                                : (v == 4663 || v == 4881) ? "" : $("<a>", { href: dữLiệu.url(v, "ụ"), class: "animenuitem menucx plr15 bấmĐc mc1 mn5 vam bấmĐc mn1 fwb", id: v, text: m.ê, style: "line-height:30px" })
                                                                            )
                                                                        )
                                                                    )
                                                                })
                                                            }
                                                        })
                                                    })//Đóng CẦN
                                                }),
                                                //tìm kiếm tổng
                                                $("<div>", { href: "/search", class: "fs12 mc1 bấmĐc pr", icon: "search::lh8 fwb" }).append(
                                                    $("<div>", { class: "pa r0 tac ptb15 grid brbl3 brbr3 bgc03 w5 w10 plr10 dn otimkiem", style: "width:200px" }).append(
                                                        $("<input>", { class: "brtl3 brbl3 w80 fs08 bgcf bcd bss bw1 cantim" }).on("keypress", function (e) {
                                                            if (e.which == 13) {
                                                                $(".tim").trigger("click");
                                                            }
                                                        }),
                                                        $("<div>", { href: "/search", class: "lh1 cf bg1 brtr3 brbr3 pa5 bt1 bss bc1 tim", icon: "search::fs08" }).on("click", function () {
                                                            var tìm = $(".cantim").iVal();
                                                            tìm == "" ? alert("Mời bạn nhập nội dung tìm kiếm") : vàoURL("/search/" + tìm);
                                                        }),
                                                        $("<div>", { class: "pt10 cf w1" }).append(
                                                            $("<div>", { class: "tac", icon: "close::fs1" }).on("click", function () {
                                                                var t = $(this),
                                                                    tp = t.parent().parent();
                                                                cl(tp)
                                                                tp.prev().sửaLớp("-hienra");
                                                                tp.hide(500);
                                                            })
                                                        )
                                                    )
                                                ).on("click", "o", function () {
                                                    var t = $(this),
                                                        h = t.hasClass("hienra");
                                                    if (!h) {
                                                        t.sửaLớp("hienra").siblings(".otimkiem").show(500);
                                                    } else {
                                                        t.sửaLớp("-hienra").siblings(".otimkiem").hide(500);
                                                    }
                                                }),
                                                (là("U") ? $("<div>", { href: "/search", class: " fwb mc1 bấmĐc pr mn_cha mn5 vam plr15 mn1", icon: "settings::lh8 fs12" }).append( //menucx
                                                    $("<div>", { class: "mn2 pa l50 ttx z3 bg1 cf dn" }).append(
                                                        $("<div>", { class: "mn_con plr10 bấmĐc wsn mn3 tal ptb10 lh1 db fwb", text: "Đăng xuất" }).on("click", function () {
                                                            tôi.đăngXuất(function () {
                                                                location.reload()
                                                            })
                                                        }),
                                                        $("<div>", { href: "", class: "mn_con plr10 bấmĐc wsn mn3 tal ptb10 lh1 db fwb", text: "Đổi mật khẩu" }).on("click", function () {
                                                            khung(
                                                                $("<div>", { class: "ptb25" }).append(
                                                                    $("<div>", { class: "plr15" }).append(
                                                                        $("<div>", { class: "ttu fs12 mc1 pb10 bss bc1 bb2 tac", text: "Đổi mật khẩu" }),
                                                                        $("<div>", { class: "mt15 pr" }).append(
                                                                            $("<input>", { id: "mkcu", placeholder: "Tài khoản", type: "password", class: "pa5 w1 bra3" }),
                                                                            // $("<div>",{class:"pa r0 mr10 t50 tty fs09 bấmĐc",icon:"visibility"}).on("click",function(){
                                                                            // 	var t = $(this),
                                                                            // 		p = t.prev(),
                                                                            // 		a = p.attr("type");
                                                                            // 	if(a == "password"){
                                                                            // 		p.attr("type","text");
                                                                            // 		t.sửaLớp("mc1");
                                                                            // 	} else {
                                                                            // 		p.attr("type","password");
                                                                            // 		t.sửaLớp("-mc1");
                                                                            // 	}
                                                                            // })
                                                                        ),
                                                                        $("<div>", { class: "mt15 pr" }).append(
                                                                            $("<input>", { id: "mkm", placeholder: "Mật khẩu mới", type: "password", class: "pa5 w1 bra3" }).bind("keypress", function (e) {
                                                                                if (e.keyCode == 13) {
                                                                                    $(".vào").trigger("click")
                                                                                }
                                                                            }),
                                                                            $("<div>", { class: "pa r0 mr10 t50 tty fs09 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                var t = $(this),
                                                                                    p = t.prev(),
                                                                                    a = p.attr("type");
                                                                                if (a == "password") {
                                                                                    p.attr("type", "text");
                                                                                    t.sửaLớp("mc1");
                                                                                } else {
                                                                                    p.attr("type", "password");
                                                                                    t.sửaLớp("-mc1");
                                                                                }
                                                                            })
                                                                        ),
                                                                        $("<div>", { class: "mt15 pr" }).append(
                                                                            $("<input>", { id: "xnmk", placeholder: "Xác nhận mật khẩu", type: "password", class: "pa5 w1 bra3" }).bind("keypress", function (e) {
                                                                                if (e.keyCode == 13) {
                                                                                    $(".vào").trigger("click")
                                                                                }
                                                                            }),
                                                                            $("<div>", { class: "pa r0 mr10 t50 tty fs09 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                var t = $(this),
                                                                                    p = t.prev(),
                                                                                    a = p.attr("type");
                                                                                if (a == "password") {
                                                                                    p.attr("type", "text");
                                                                                    t.sửaLớp("mc1");
                                                                                } else {
                                                                                    p.attr("type", "password");
                                                                                    t.sửaLớp("-mc1");
                                                                                }
                                                                            })
                                                                        ),
                                                                        $("<div>", { class: "tar mt15" }).append(
                                                                            $("<div>", { class: "vào bóng bg1 cf bra3 plr10 ptb5 dib bấmĐc", text: "Đổi mật khẩu" }).on("click", function () {
                                                                                var taikhoan = $("#mkcu").iVal(),
                                                                                    matkhaumoi = $("#mkm").iVal(),
                                                                                    id = tôi.lấy("i"),
                                                                                    xacnhan = $("#xnmk").iVal();
                                                                                if (taikhoan == "" || matkhaumoi == "" || xacnhan == "") {
                                                                                    alert("Mời nhập đủ thông tin !");
                                                                                } else if (matkhaumoi != xacnhan) {
                                                                                    alert("Xác nhận lại mật khẩu mới !")
                                                                                } else {
                                                                                    xửLý("thuộcTính.sửa.tàiKhoản", { d: [id, { à: taikhoan, ậ: xacnhan }] }, function (d) {
                                                                                        if (d) {
                                                                                            notice(
                                                                                                { t: "Đã cập nhật bài viết", loại: true }
                                                                                            );
                                                                                            tôi.đăngXuất(function () {
                                                                                                location.reload()
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        )
                                                                    )
                                                                )
                                                                , {
                                                                    thanh: false,
                                                                    trong: "col-md-3 col-sm-3 col-xs-10 ",
                                                                    viền: false,
                                                                    kotắt: false
                                                                }
                                                            )
                                                        })
                                                    )
                                                ) : $("<div>", { class: "fs12 fwb mc1 plr15 bấmĐc", icon: "account_circle" }).on("click", function () {
                                                    k = khung(
                                                        $("<div>", { class: "ptb25" }).append(
                                                            $("<div>", { class: "plr15" }).append(
                                                                $("<div>", { class: "ttu fs12 mc1 pb10 bss bc1 bb2 tac", text: "Đăng nhập" }),
                                                                $("<div>", { text: "Tên tài khoản", class: "mt15 mc1 ttu" }),
                                                                $("<input>", { id: "taikhoan", class: "mt5 pa3 w1 bra3" }),
                                                                $("<div>", { text: "Mật khẩu", class: "mt15 mc1 ttu" }),
                                                                $("<div>", { class: "mt5 pr" }).append(
                                                                    $("<input>", { id: "matkhau", type: "password", class: "pa3 w1 bra3" }).bind("keypress", function (e) {
                                                                        if (e.keyCode == 13) {
                                                                            $(".vào").trigger("click")
                                                                        }
                                                                    }),
                                                                    $("<div>", { class: "pa r0 mr10 t50 tty fs09 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                        var t = $(this),
                                                                            p = t.prev(),
                                                                            a = p.attr("type");
                                                                        if (a == "password") {
                                                                            p.attr("type", "text");
                                                                            t.sửaLớp("mc1");
                                                                        } else {
                                                                            p.attr("type", "password");
                                                                            t.sửaLớp("-mc1");
                                                                        }
                                                                    })
                                                                ),
                                                                $("<div>", { class: "tar mt15" }).append(
                                                                    $("<div>", { class: "vào bóng bg1 cf bra3 plr10 ptb5 dib bấmĐc", text: "Đăng nhập" }).on("click", function () {
                                                                        var taikhoan = $("#taikhoan").iVal(),
                                                                            matkhau = $("#matkhau").iVal();
                                                                        if ($("#taikhoan").val() == "" || $("#matkhau").val() == "") {
                                                                            alert("Mời nhập tài khoản !")
                                                                        } else {
                                                                            tôi.đăngNhập(taikhoan, matkhau, function (d) {
                                                                                //cl(d);
                                                                                $.post("/xu_ly.php", { action: "thêmSession", option: 1, id: d.i }, function (kq) {
                                                                                    cl(kq)
                                                                                })
                                                                                location.reload();
                                                                            }, function (e) {
                                                                                $("#taikhoan,#matkhau").val("");
                                                                                alert("Tài khoản hoặc mật khẩu không đúng, mời nhập lại !")
                                                                            })
                                                                        }
                                                                    })
                                                                )
                                                            )
                                                        ),
                                                        {
                                                            thanh: false,
                                                            trong: "col-md-3 col-sm-3 col-xs-10 ",
                                                            viền: false,
                                                            kotắt: false
                                                        }
                                                    )
                                                })
                                                ),
                                                (là("A") ? $("<div>", { class: "fs12 fwb mc1 bấmĐc pr mn1 tinNhan mr15", style: "line-height:80px", icon: "comment::lh8" }).each(function () {
                                                    var t = $(this);
                                                    //tin nhắn hệ thống
                                                    t.append(
                                                        $("<div>", { class: "t1 dn pa r0 bóng bss bw1 bcd dstinnhan w300" }).append(
                                                            $("<div>", { class: "" }),
                                                            $("<div>", { class: "hmx4 hmx3 oha fs09 lh14 hiệnCuộn bgcf" }).each(function () {
                                                                var th = $(this);
                                                                xửLý("tánGẫu.danhSách", function (a) {
                                                                    CẦN.db("tánGẫu.danhSách." + a, function () {
                                                                        var manguid = []; mangkh = [];
                                                                        a.map(function (v, i) {
                                                                            var tin = config("tinNhắn." + v),
                                                                                ten = (tin.ừ == tôi.lấy("i")) ? tin.ế : tin.ừ;
                                                                            if (ten > 0) {

                                                                            } else {
                                                                                manguid.push(ten);
                                                                            }
                                                                            if (tin.ừ > 0 && tin.ừ != Infinity) {
                                                                                mangkh.push(tin.ừ)
                                                                            }
                                                                        })
                                                                        //cl(manguid);
                                                                        xửLý("tánGẫu.tìmKhách", { d: manguid }, { delay: 4500 }, function (l) {
                                                                            CẦN.db(["tinNhắn." + a, "tàiKhoản." + mangkh], function () {
                                                                                a.map(function (v, i) {
                                                                                    var tin = config("tinNhắn." + v),
                                                                                        ten = (tin.ừ == tôi.lấy("i")) ? tin.ế : tin.ừ,
                                                                                        tg = now().u - iDate(tin.ờ).u,
                                                                                        nd = tin.ộ;
                                                                                    tgtin = function (t) {
                                                                                        var phut = parseInt(t / 60),
                                                                                            gio = parseInt(phut / 60),
                                                                                            ngay = parseInt(gio / 24);
                                                                                        //return (ngay ? ngay+"ngày":(gio ? gio+"giờ" : (phut ? phut+"phút" : "vừa xong" )) );
                                                                                        return ngay ? ngay + " ngày" : ((gio ? gio + " giờ" : (phut ? phut + "  phút" : " vừa xong")));
                                                                                    }
                                                                                    if (tin.ừ != Infinity && tin.ừ > 0) {
                                                                                        //cl("lớn")
                                                                                        var ttin = config("tàiKhoản." + tin.ừ);
                                                                                        //cl(ttin.à);
                                                                                        if (ttin.à != "admin") {
                                                                                            th.append(
                                                                                                $("<div>", { class: "pa5 bss bcd pl10 bb1 fs08 tal bgcdh" }).append(
                                                                                                    $("<div>", { class: "pb3 c0", text: dữLiệu.tên(ten, (ten > 0 ? "à" : "k")) }),
                                                                                                    $("<div>", { class: "pb3 c9", text: nd }),
                                                                                                    $("<div>", { class: "c9 fs08", text: tgtin(tg) })
                                                                                                ).on("click", function () {
                                                                                                    tánGẫu.khởiTạo(ten);
                                                                                                })
                                                                                            )
                                                                                        }
                                                                                    } else {
                                                                                        //cl("ko lớn")
                                                                                        th.append(
                                                                                            $("<div>", { class: "pa5 bss bcd pl10 bb1 fs08 tal bgcdh" }).append(
                                                                                                $("<div>", { class: "pb3 c0", text: dữLiệu.tên(ten, (ten > 0 ? "à" : "k")) }),
                                                                                                $("<div>", { class: "pb3 c9", text: nd }),
                                                                                                $("<div>", { class: "c9 fs08", text: tgtin(tg) })
                                                                                            ).on("click", function () {
                                                                                                tánGẫu.khởiTạo(ten);
                                                                                            })
                                                                                        )
                                                                                    }
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            $("<div>", { class: "ptb10 tac bgcfx bss bcd bt1" }).append(
                                                                $("<div>", { class: "tduh crd fs08 lh1", text: "Close" }).on("click", function (event) {
                                                                    event.stopPropagation();
                                                                    $(".dstinnhan").hide();
                                                                })
                                                            )
                                                        ).on("mouseleave", function () {
                                                            // cl(1)
                                                            $(this).hide();
                                                        })
                                                    )
                                                }).on("click", function () {
                                                    $(".dstinnhan").show();
                                                }).on("mouseenter mouseleave", function (e) {
                                                    var dí = e.type == "mouseenter",
                                                        t = $(this);
                                                    if (dí) {
                                                        t.append(
                                                            $("<div>", { class: "pr t0 chúThích" }).append(
                                                                $("<div>", { class: "pa z3 b1 l50 ttx bgcf bra3 pa3 c1 bss bcd bw1 wsn", style: "font-size: 0.8em !important;font-weight: normal !important;line-height:normal !important", text: "Xem tin nhắn" })
                                                            )
                                                        )
                                                    } else {
                                                        $(".chúThích").remove();
                                                    }
                                                })
                                                    : ""),
                                                (là("A") ? $("<div>", { class: "fs12 fwb mc1 bấmĐc pr mn1 quanTri", style: "line-height:80px", icon: "assignment::lh8" }).on("click", function () {
                                                    // Hàm để tạo ra một dòng trong bảng quản trị tài khoản
                                                    function DTK(v, tk, vt) {
                                                        cl("sdhjhdf" + vt)
                                                        var ns = iDate(tk.b),
                                                            ns1 = ns.f + "-" + ns.n + "-" + ns.j;
                                                        //cl(tk.b)
                                                        return $("<tr>", { class: "dòngTàiKhoản", id: v }).append(
                                                            $("<td>", { class: "tac pa7 bss bcd bw1 sothutu", text: vt + 1 }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1", text: tk.i }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1", text: tk.ê }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1 ngaysinh", text: ns ? ns.j + "/" + ns.n + "/" + ns.f : "" }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1 minhthu", text: tk.ư }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1 gomeo", text: tk.e }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1 dienthoai", text: tk.ố }),
                                                            $("<td>", { class: "tal pa7 bss bcd bw1", text: tk.à }),
                                                            $("<td>", { class: "tac pa7 bss bcd grid bw1 bấmĐc" }).append(
                                                                $("<div>", { class: "bấmĐc mc1h", icon: "edit::vam fs13" }).on("click", function () {
                                                                    var gt;
                                                                    khung(
                                                                        $("<div>", { class: "pa25 " }).append(
                                                                            $("<div>", { class: "pb15 tac mc1 fs13", text: "Sửa thông tin tài khoản" }),
                                                                            $("<div>", { class: "bss bcd bb1 grid" }).append(
                                                                                $("<div>", { class: "pa10 bg1cfh bấmĐc brtl3 bcd bg1 cf", style: "border-width:1px 1px 0px 1px;", text: "Cập nhật thông tin" }).on("click", function () {
                                                                                    var tn = $(this);
                                                                                    tn.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                                    $(".thayĐổi").children().eq(0).sửaLớp("-dn").siblings().sửaLớp("dn")
                                                                                }),
                                                                                $("<div>", { class: "pa10 bg1cfh bấmĐc brtr3 bgcfx bcd", style: "border-width:1px 1px 0px 0px;", text: "Đổi mật khẩu" }).on("click", function () {
                                                                                    var tn = $(this);
                                                                                    tn.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                                    $(".thayĐổi").children().eq(1).sửaLớp("-dn").siblings().sửaLớp("dn")
                                                                                }),
                                                                            ),
                                                                            $("<div>", { class: "thayĐổi" }).append(
                                                                                $("<div>", { class: "" }).append(
                                                                                    $("<div>", { class: "grid" }).append(
                                                                                        $("<div>", { class: "mtb15 hoten w1", text: "Khách hàng:  " + tk.ê }),
                                                                                        $("<div>", { class: "grid w50" }).append(
                                                                                            $("<input>", { class: "mr15", type: "radio", name: "giới" }).on("change", function () {
                                                                                                gt = 0;
                                                                                            }).each(function () {
                                                                                                var t = $(this);
                                                                                                if (tk.ớ == 0) {
                                                                                                    gt = 0;
                                                                                                    t.prop('checked', true);
                                                                                                }
                                                                                            }),
                                                                                            $("<div>", { class: "mr25", text: "Nam" }),
                                                                                            $("<input>", { class: " mr15", type: "radio", name: "giới" }).on("change", function () {
                                                                                                gt = 1;
                                                                                            }).each(function () {
                                                                                                var t = $(this);
                                                                                                if (tk.ớ == 1) {
                                                                                                    gt = 1;
                                                                                                    t.prop('checked', true);
                                                                                                }
                                                                                            }),
                                                                                            $("<div>", { class: "", text: "Nữ" })
                                                                                        )
                                                                                    ),
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 ngaysinh1", type: "date" }).val(ns1 ? ns1 : "")
                                                                                    /*.chọnNgày({
                                                                                        quáKhứ:true,
                                                                                        nổi:true,
                                                                                        địnhDạng:"DD-MM-YYYY"
                                                                                    }).iVal(tk.b)*/
                                                                                    ,
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 imeo", hợpLệ: "em", placeholder: "Email" }).val(tk.e),
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 sdt", hợpLệ: "đt", placeholder: "SĐT" }).val(tk.ố),
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 cmthu", placeholder: "Chứng minh thư" }).val(tk.ư),
                                                                                    $("<div>", { class: "tar grid" }).append(
                                                                                        $("<div>", { class: "btn pa5 bra3 ", text: "Cập nhật" }).on("click", function () {
                                                                                            var dis = $(this),
                                                                                                nsinh = $(".ngaysinh1").val(),
                                                                                                mail = $(".imeo").val(),
                                                                                                sdt = $(".sdt").val(),
                                                                                                cmthu = $(".cmthu").val(),
                                                                                                ns2;
                                                                                            if (nsinh) {
                                                                                                cl(nsinh)
                                                                                                var tach = nsinh.split("-"),
                                                                                                    nsinh = new Date(tach[0], tach[1], tach[2]) / 1000;
                                                                                            }
                                                                                            xửLý("thuộcTính.sửa.tàiKhoản", { d: Je([v, { c: "0", ớ: gt, b: nsinh, e: mail, ố: sdt, ứ: cmthu }]) }, function (r) {
                                                                                                if (r == 1) {
                                                                                                    notice(
                                                                                                        { t: "Đã cập nhật tài khoản thành công", loại: true }
                                                                                                    )
                                                                                                    đồngBộ(function () {
                                                                                                        CẦN.db("taiKhoản." + v, function () {
                                                                                                            var cn = config("tàiKhoản." + v),
                                                                                                                nsm = iDate(cn.b);
                                                                                                            $("#" + v).children().eq(3).text(nsm ? nsm.j + "/" + nsm.n + "/" + nsm.f : "");
                                                                                                            $("#" + v).children().eq(4).text(cn.ứ);
                                                                                                            $("#" + v).children().eq(5).text(cn.e);
                                                                                                            $("#" + v).children().eq(6).text(cn.ố);
                                                                                                        })
                                                                                                    })
                                                                                                    dis.hide();
                                                                                                } else {
                                                                                                    notice(
                                                                                                        { t: "cập nhật tài khoản thất bại", loại: false }
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                    )
                                                                                ),
                                                                                $("<div>", { class: "mlr25 dn" }).append(
                                                                                    $("<div>", { class: "mtb15 hoten", text: "Khách hàng: " + tk.ê }),
                                                                                    $("<div>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1", text: "Tài khoản : " + tk.à }),
                                                                                    //$("<input>",{class:"mtb15 plr10 ptb5 w1 bra3 bss bcd bw1",placeholder:"Nhập mật khẩu"}),
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 mkhau", placeholder: "Mật khẩu mới" }),
                                                                                    $("<input>", { class: "mtb15 plr10 ptb5 w1 bra3 bss bcd bw1 mkhau1", placeholder: "Nhập lại mật khẩu mới" }).on("focusout", function () {
                                                                                        var dis = $(this);
                                                                                        if (dis.val() != dis.prev().val()) {
                                                                                            dis.sửaLớp("đỏ");
                                                                                        } else {
                                                                                            dis.sửaLớp("-đỏ");
                                                                                        }
                                                                                    }),
                                                                                    $("<div>", { class: "tar grid" }).append(
                                                                                        $("<div>", { class: "btn pa5 bra3 ", text: "Cập nhật" }).on("click", function () {
                                                                                            var d = $(this),
                                                                                                mkhau = $(".mkhau").val(),
                                                                                                mkhau1 = $(".mkhau1").val();
                                                                                            if (!mkhau || !mkhau1) {
                                                                                                alert("Mời nhập đủ thông tin!")
                                                                                            } else if (mkhau != mkhau1) {
                                                                                                alert("mời kiểm tra lại mật khẩu mới!")
                                                                                            } else {
                                                                                                xửLý("thuộcTính.sửa.tàiKhoản", { d: Je([v, { à: tk.à, ậ: mkhau }]) }, function (r) {
                                                                                                    if (r == 1) {
                                                                                                        notice({ t: "Đổi mật khẩu thành công", loại: true })
                                                                                                        $(".mkhau,.mkhau1").val("");
                                                                                                    } else {
                                                                                                        notice({ t: "Đổi mật khẩu thất bại", loại: false })
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        })
                                                                                    )
                                                                                )
                                                                            )
                                                                        ), {
                                                                        thanh: false,
                                                                        viền: false,
                                                                        trong: "col-md-4 col-sm-4 col-xs-10"
                                                                    }
                                                                    )
                                                                })
                                                            ),
                                                            $("<td>", { class: "tac pa7 bss bcd grid bw1 bấmĐc" }).append(
                                                                $("<div>", { class: "bấmĐc mc1h pr", icon: "close::vam fs13" }).on("click", function () {
                                                                    var th = $(this);
                                                                    th.append(
                                                                        $("<div>", { class: "bra3 hỏiLại pa t0 r1 wsn z9 grid" }).append(
                                                                            $("<div>", { class: "pr bgcfx pa10 bss bc6 bw1 mr10" }).append(
                                                                                $("<div>", { class: "ptb15 fs09", text: "Xóa khách hàng" + tk.ê + " không ?" }),
                                                                                $("<div>", { class: "grid" }).append(
                                                                                    $("<div>", { class: "btn pa5 bra3 bss bcd bw1 bgcrd cf fl", text: "Hủy" }).on("click", function (e) {
                                                                                        e.stopPropagation();
                                                                                        $(this).closest(".hỏiLại").remove();
                                                                                    }),
                                                                                    $("<div>", { class: "btn pa5 bra3 bss bcd bw1 bg1 cf fr", text: "Có" }).on("click", function () {
                                                                                        var dis = $(this);
                                                                                        xửLý("thuộcTính.sửa.tàiKhoản", { d: Je([v, "ẩ", 1]) }, function (r) {
                                                                                            if (r == 1) {
                                                                                                notice({ t: "Đã xóa tài khoản", loại: true })
                                                                                                dis.closest(".hỏiLại").remove();
                                                                                                $("#" + v).remove();
                                                                                                đồngBộ(function () {
                                                                                                    CẦN.db("tàiKhoản." + v, cl)
                                                                                                })
                                                                                            } else {
                                                                                                notice({ t: "Chưa xóa được tài khoản", loại: false })
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                ),
                                                                                $("<div>", { class: "rightTri vat pa l1 t0 " })
                                                                            )
                                                                        )
                                                                    )
                                                                })
                                                            )
                                                        )
                                                    }//Đóng DTK
                                                    //Bảng quản trị
                                                    khung(
                                                        $("<div>", { class: "grid wh1 pr" }).append(
                                                            $("<div>", { class: "bgsc bgpc wh1 bgrn o01" }).css({ backgroundImage: "url('/img/xentrongho.jpg')" }),
                                                            $("<div>", { class: "pa t0 l0 wh1" }).append(
                                                                $("<div>", { class: "col-md-2 col-sm-2 phần1 dib bss bcd br1 h1v" }).append(
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ghimbv bg1 cf", text: "Bài viết đã ghim" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        $(".phần2").empty().append(
                                                                            $("<table>", { class: "bảngBG w1", style: "border-collapse:collapse" }).append(
                                                                                $("<thead>", { class: "tiêuĐềBảng" }).append(
                                                                                    $("<tr>").append(
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Tên bài viết" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10 wsn", style: "font-weight:100", text: "Người viết" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Ngày" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xem " }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Sửa" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xóa" })
                                                                                    )
                                                                                ),
                                                                                $("<tbody>", { class: "listBàiGhim" }).each(function () {
                                                                                    var t = $(this);
                                                                                    //CẦN.db("chuyênLực.4591",function(cmuc){
                                                                                    //lấyChuyênLực(e,function(l){
                                                                                    xửLý("bàiViết.tải.2000", { d: Je({ g: 1 }) }, function (bviet) {
                                                                                        cl(bviet)
                                                                                        bviet.map(function (a, b) {
                                                                                            var bv = config("bàiViết." + a);
                                                                                            t.append(
                                                                                                $("<tr>").append(
                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 pl15", text: bv.ê }),
                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 wsn bấmĐc", text: bv.ở > 0 ? dữLiệu.tên(bv.ở, "à") : "Khách hàng" }),
                                                                                                    $("<td>", { class: "fs08 c6 bss bcd bw1 pa10 tac bấmĐc" }).append(
                                                                                                        $("<div>", { class: "dib" }).append(
                                                                                                            $("<div>", { class: "wsn", text: "Được đăng" }),
                                                                                                            $("<div>", { class: "", text: đổiTG2(bv.ấ) })
                                                                                                        )
                                                                                                    ),
                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                                        khung(
                                                                                                            $("<div>", { class: "pa25" }).append(
                                                                                                                $("<div>", { class: "fs15 mc1 lh1 pb10 bss bb1 bcd", text: bv.ê }),
                                                                                                                $("<div>", { class: "grid" }).append(
                                                                                                                    $("<div>", { class: "pr15 c6", text: dữLiệu.tên(Jd(bv.ụ[0]), "ụ") }),
                                                                                                                    $("<div>", { class: "pt10 c6", text: đổiTG(bv.ậ) })
                                                                                                                ),
                                                                                                                $("<div>", { class: "" }).html(bv.ộ)
                                                                                                            ).each(function () {
                                                                                                                var t = $(this);
                                                                                                                var b = $("#body");
                                                                                                                t.find("mp4").trigger("change").sửaLớp("mtb15");
                                                                                                                t.find("img[id]").sửaLớp("mt25,mb10").trigger("change");
                                                                                                                t.find("h2").sửaLớp("mt15,mb10");
                                                                                                                var anh = t.find("img").removeAttr("style").sửaLớp("w1,bgso,bgrn,bgpc,mtb15,hai").trigger("change");
                                                                                                            }), {
                                                                                                            viền: false,
                                                                                                            thanh: false,
                                                                                                            trong: "col-md-7 col-sm-7 col-xs-10"
                                                                                                        }
                                                                                                        )
                                                                                                    }),
                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "edit" }).on("click", function () {
                                                                                                        var mang,
                                                                                                            url = bv.u,
                                                                                                            ngay = bv.ấ,
                                                                                                            cmuc = Jd(bv.ụ)[0],
                                                                                                            ghim = 0;
                                                                                                        //cl(bv.ó)
                                                                                                        khung(
                                                                                                            $("<div>", { class: "pa35 bgcf " }).append(
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(bv.ê)
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Ghim bài" }),
                                                                                                                    $("<div>", { class: "tal" }).append(
                                                                                                                        $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                                                                            var t = $(this);
                                                                                                                            if (t.is(":checked")) {
                                                                                                                                ghim = 1;
                                                                                                                            } else {
                                                                                                                                ghim = 0;
                                                                                                                            }
                                                                                                                        }).each(function () {
                                                                                                                            if (bv.g == 1) {
                                                                                                                                $(this).prop("checked", true);
                                                                                                                                $(this).trigger("change");
                                                                                                                            }
                                                                                                                        })
                                                                                                                    )
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "w20" }),
                                                                                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlebài", type: "text", text: "", maxlength: 74 }).val(bv.ó ? bv.ó : bv.ê)
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" + ((cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? "" : " dn") }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                                                                                    $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                                                                                        var t = $(this),
                                                                                                                            val = t.iVal();
                                                                                                                        CẦN.db("chuyênLực.4597", function (e) {
                                                                                                                            e.map(function (a, b) {
                                                                                                                                t.append(
                                                                                                                                    $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                                                                                )
                                                                                                                            })
                                                                                                                        })
                                                                                                                    }).each(function () {
                                                                                                                        $(this).val(cmuc);
                                                                                                                    })
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Ngày đăng:" }),
                                                                                                                    $("<div>", { class: "w30 plr10 ptb3 bra3 bss bcd bw1 ngaydang" }).attr({ contenteditable: true, }).chọnNgày({
                                                                                                                        quáKhứ: true,
                                                                                                                        nổi: true,
                                                                                                                    }).iVal(ngay)
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "w20" }),
                                                                                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                                                                                    $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).val(url ? url : bv.ê.toURL().cắt(128))
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                                                                        $("<div>", { class: "pb43 bgcfx w1 pr bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                                                                            loại: "ảnh",
                                                                                                                            đổi: function (s) {
                                                                                                                                //console.log(s)
                                                                                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                                                                $(this).attr("id", s[0]);
                                                                                                                            },
                                                                                                                            lỗi: function () {
                                                                                                                                $(this).lỗi("Vui lòng thử lại.");
                                                                                                                            }
                                                                                                                        }).each(function () {
                                                                                                                            var t = $(this),
                                                                                                                                b = config("bàiViết." + bv.i);
                                                                                                                            cl(b)
                                                                                                                            if (b.ả) {
                                                                                                                                cl(b.ả)
                                                                                                                                t.sửaLớp("-bgcfx");
                                                                                                                                t.css({ backgroundImage: "url('" + dữLiệu.ảnh(bv.i, "ế", "200px") + "')" });
                                                                                                                            } else {
                                                                                                                                t.append(
                                                                                                                                    $("<div>", { class: "tl50 tt fs12 fs09-xs c6", text: "Chưa có ảnh" })
                                                                                                                                )
                                                                                                                            }
                                                                                                                        })
                                                                                                                    )
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pb15 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 pb3", text: "Danh mục ảnh bài viết:" }),
                                                                                                                    $("<div>", { class: " w1 oxa oh wsn pa15 grid bss bcd bw1 bra3" }).each(function () {
                                                                                                                        var t = $(this),
                                                                                                                            ds = bv.ộ.match(/(id=")+[0-9]+/g);
                                                                                                                        ds1 = bv.ộ.match(/(src=")+[A-z0-9\:\/\-]+\.+[A-z]+\"/g);
                                                                                                                        //cl(ds1);
                                                                                                                        if (ds) {
                                                                                                                            ds.map(function (v, vt) {
                                                                                                                                var id = v.match(/[0-9]+/g);
                                                                                                                                t.append(
                                                                                                                                    $("<div>", { class: "w30 pa5 vat", id: id }).append(
                                                                                                                                        $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" })
                                                                                                                                    ).on("click", function () {
                                                                                                                                        var t = $(this),
                                                                                                                                            id = t.attr("id");
                                                                                                                                        t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                        $(".đạidiện").css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" });
                                                                                                                                        $(".đạidiện").attr("id", id);
                                                                                                                                    })
                                                                                                                                )
                                                                                                                            })
                                                                                                                        }
                                                                                                                        if (ds1) {
                                                                                                                            ds1.map(function (v, vt) {
                                                                                                                                var link = v.replace(/(src=")/g, "").replace(/(")/g, "");
                                                                                                                                cl(link)
                                                                                                                                t.append(
                                                                                                                                    $("<div>", { class: "w30 pa5 vat" }).append(
                                                                                                                                        $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + link + "')" })
                                                                                                                                    ).on("click", function () {
                                                                                                                                        var t = $(this),
                                                                                                                                            id = t.attr("id");
                                                                                                                                        t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                        $(".đạidiện").css({ backgroundImage: "url('" + link + "')" });
                                                                                                                                        $(".đạidiện").attr("id", link);
                                                                                                                                    })
                                                                                                                                )
                                                                                                                            })
                                                                                                                        }
                                                                                                                    })
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" }).val(bv.ô)
                                                                                                                ),
                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nd pnd" }).soạnThảo({
                                                                                                                        cỡ: 15,
                                                                                                                        html: true,
                                                                                                                        sẵn: bv.ộ
                                                                                                                    })
                                                                                                                ).each(function () {
                                                                                                                    var lanh = $(this).find("img[id]"),
                                                                                                                        tcanh = $(this).find("img");
                                                                                                                    cl(tcanh)
                                                                                                                    lanh.each(function () {
                                                                                                                        var id = $(this).attr("id");
                                                                                                                        if (id > 0) {
                                                                                                                            $(this).attr("src", dữLiệu.ảnh(id, "i", "500x"))
                                                                                                                        }
                                                                                                                        //$(vt).trigger("change")

                                                                                                                    })
                                                                                                                    tcanh.each(function () {
                                                                                                                        $(this).sửaLớp("w1");
                                                                                                                        $(this).attr("height", "auto");
                                                                                                                    })
                                                                                                                }),
                                                                                                                $("<div>", { class: "tar" }).append(
                                                                                                                    $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                                                                                        var t = $(this),
                                                                                                                            te = $(".tiêuđề").iVal(),
                                                                                                                            m = $(".môtả").iVal(),
                                                                                                                            n = $(".nd").iVal(),
                                                                                                                            anh = $(".đạidiện").attr("id"),
                                                                                                                            u = $(".hienurl").iVal(),
                                                                                                                            tt = $(".titlebài").iVal(),
                                                                                                                            muc = (cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? $(".chuyênMụcTin").iVal() : bv.ụ,
                                                                                                                            ngay = $(".ngaydang").iVal();
                                                                                                                        cl(muc)
                                                                                                                        if (te == "" || n == "") {
                                                                                                                            t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời nhập thông tin bài viết !" }))
                                                                                                                        } else {
                                                                                                                            CẦN.db("bàiViết." + idBài, function (bài) {
                                                                                                                                t.xửLý("bàiViết.sửa." + idBài, { d: Je({ ả: anh, g: ghim, ó: tt, ê: te, ô: m, ộ: n, r: u, ấ: ngay, ụ: [muc] }) }, function (i) {
                                                                                                                                    notice(
                                                                                                                                        { t: "Đã cập nhật bài viết", loại: true }
                                                                                                                                    );
                                                                                                                                    t.closest("#khungThôngBáo").remove();
                                                                                                                                })
                                                                                                                            })
                                                                                                                        }
                                                                                                                    })
                                                                                                                )
                                                                                                            )
                                                                                                            , {
                                                                                                                thanh: false,
                                                                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                                                viền: false,
                                                                                                                koTắt: true
                                                                                                            }
                                                                                                        )
                                                                                                    }),
                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "delete" }).on("click", function () {
                                                                                                        //nút xóa bài
                                                                                                        var t = $(this);
                                                                                                        t.iMsg($("<div>", { class: "" }).append(
                                                                                                            $("<div>", { class: "", text: "Bạn muốn xóa bài viết ?" }),
                                                                                                            $("<div>", { class: "pr pb249" }).append(
                                                                                                                $("<div>", { class: "bgcrd cf plr10 btn ptb5 bra3 pa t50 tty l0", text: "Không" }).on("click", function () {
                                                                                                                    t.iMsg()
                                                                                                                }),
                                                                                                                $("<div>", { class: "bg1 cf plr10 ptb5 btn bra3 pa t50 tty r0", text: "Có" }).on("click", function () {
                                                                                                                    CẦN.db("bàiViết." + bv.i, function (bài) {
                                                                                                                        var a = config("bàiViết." + bv.i);
                                                                                                                        xửLý("bàiViết.sửa", { d: Je([bv.i, "a", 1]) }, function (i) {
                                                                                                                            notice(
                                                                                                                                { t: "Đã xóa bài viết", loại: true }
                                                                                                                            )
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            )
                                                                                                        )
                                                                                                            , 1)
                                                                                                    })
                                                                                                )
                                                                                            )
                                                                                        })
                                                                                    })
                                                                                    //})
                                                                                    //})//Đóng CẦN
                                                                                })
                                                                            )
                                                                        )
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc", text: "Quản lý bài viết" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        $(".phần2").empty().append(
                                                                            $("<div>", { class: "" }).append(
                                                                                $("<div>", { class: "grid pr" }).each(function () {
                                                                                    var t = $(this);
                                                                                    CẦN.db("chuyênLực.4591", function (cmuc) {
                                                                                        lấyChuyênLực(cmuc, function (l) {
                                                                                            t.append(
                                                                                                $("<div>", { class: "fs1 plr15 ptb10 mc1h bấmĐc bg1cfh tấtCảBài bg1 cf", text: "Tất cả" }).on("click", function () {
                                                                                                    xửLý("bàiViết.tải.500", { d: Je({ ụ: l }) }, function (bviet) {
                                                                                                        //cl(bviet)
                                                                                                        var t = $(this);
                                                                                                        $(".listBàiViết").sửaLớp("-dn").empty();
                                                                                                        t.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf")
                                                                                                        bviet.map(function (a, b) {
                                                                                                            var bv = config("bàiViết." + a);
                                                                                                            $(".listBàiViết").append(
                                                                                                                $("<tr>").append(
                                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 pl15 bấmĐc" }).append(
                                                                                                                        $("<a>", { href: dữLiệu.url(a, "ế"), class: "bấmĐc", text: bv.ê })
                                                                                                                    ),
                                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 wsn bấmĐc", text: bv.ở > 0 ? dữLiệu.tên(bv.ở, "à") : "Khách hàng" }),
                                                                                                                    $("<td>", { class: "fs08 c6 bss bcd bw1 pa10 bấmĐc tac" }).append(
                                                                                                                        $("<div>", { class: "dib" }).append(
                                                                                                                            $("<div>", { class: "wsn", text: "Được đăng" }),
                                                                                                                            $("<div>", { class: "", text: đổiTG2(bv.ấ) })
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                                                        khung(
                                                                                                                            $("<div>", { class: "pa25" }).append(
                                                                                                                                $("<div>", { class: "fs15 mc1 lh1 pb10 bss bb1 bcd", text: bv.ê }),
                                                                                                                                $("<div>", { class: "grid" }).append(
                                                                                                                                    $("<div>", { class: "pr15 c6", text: dữLiệu.tên(Jd(bv.ụ[0]), "ụ") }),
                                                                                                                                    $("<div>", { class: "pt10 c6", text: đổiTG(bv.ậ) })
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "" }).html(bv.ộ)
                                                                                                                            ).each(function () {
                                                                                                                                var t = $(this);
                                                                                                                                var b = $("#body");
                                                                                                                                t.find("mp4").trigger("change").sửaLớp("mtb15");
                                                                                                                                t.find("img[id]").sửaLớp("mt25,mb10").trigger("change");
                                                                                                                                t.find("h2").sửaLớp("mt15,mb10");
                                                                                                                                var anh = t.find("img").removeAttr("style").sửaLớp("w1,bgso,bgrn,bgpc,mtb15,hai").trigger("change");
                                                                                                                            }), {
                                                                                                                            viền: false,
                                                                                                                            thanh: false,
                                                                                                                            trong: "col-md-7 col-sm-7 col-xs-10"
                                                                                                                        }
                                                                                                                        )
                                                                                                                    }),
                                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "edit" }).on("click", function () {
                                                                                                                        var mang,
                                                                                                                            url = bv.u,
                                                                                                                            ngay = bv.ấ,
                                                                                                                            cmuc = Jd(bv.ụ)[0],
                                                                                                                            ghim = 0;
                                                                                                                        //cl(bv.ó)
                                                                                                                        khung(
                                                                                                                            $("<div>", { class: "pa35 bgcf " }).append(
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(bv.ê)
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Ghim bài" }),
                                                                                                                                    $("<div>", { class: "tal" }).append(
                                                                                                                                        $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                                                                                            var t = $(this);
                                                                                                                                            if (t.is(":checked")) {
                                                                                                                                                ghim = 1;
                                                                                                                                            } else {
                                                                                                                                                ghim = 0;
                                                                                                                                            }
                                                                                                                                        }).each(function () {
                                                                                                                                            if (bv.g == 1) {
                                                                                                                                                $(this).prop("checked", true);
                                                                                                                                                $(this).trigger("change");
                                                                                                                                            }
                                                                                                                                        })
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "w20" }),
                                                                                                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlebài", type: "text", text: "", maxlength: 74 }).val(bv.ó ? bv.ó : bv.ê)
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" + ((cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? "" : " dn") }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                                                                                                    $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                                                                                                        var t = $(this),
                                                                                                                                            val = t.iVal();
                                                                                                                                        CẦN.db("chuyênLực.4597", function (e) {
                                                                                                                                            e.map(function (a, b) {
                                                                                                                                                t.append(
                                                                                                                                                    $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    }).each(function () {
                                                                                                                                        $(this).val(cmuc);
                                                                                                                                    })
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Ngày đăng:" }),
                                                                                                                                    $("<div>", { class: "w30 plr10 ptb3 bra3 bss bcd bw1 ngaydang" }).attr({ contenteditable: true, }).chọnNgày({
                                                                                                                                        quáKhứ: true,
                                                                                                                                        nổi: true,
                                                                                                                                    }).iVal(ngay)
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "w20" }),
                                                                                                                                    $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).val(url ? url : bv.ê.toURL().cắt(128))
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                                                                                    $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                                                                                        $("<div>", { class: "pb43 bgcfx w1 pr bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                                                                                            loại: "ảnh",
                                                                                                                                            đổi: function (s) {
                                                                                                                                                //console.log(s)
                                                                                                                                                $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                                                                                $(this).attr("id", s[0]);
                                                                                                                                            },
                                                                                                                                            lỗi: function () {
                                                                                                                                                $(this).lỗi("Vui lòng thử lại.");
                                                                                                                                            }
                                                                                                                                        }).each(function () {
                                                                                                                                            var t = $(this),
                                                                                                                                                b = config("bàiViết." + bv.i);
                                                                                                                                            cl(b)
                                                                                                                                            if (b.ả) {
                                                                                                                                                cl(b.ả)
                                                                                                                                                t.sửaLớp("-bgcfx");
                                                                                                                                                t.css({ backgroundImage: "url('" + dữLiệu.ảnh(bv.i, "ế", "200px") + "')" });
                                                                                                                                            } else {
                                                                                                                                                t.append(
                                                                                                                                                    $("<div>", { class: "tl50 tt fs12 fs09-xs c6", text: "Chưa có ảnh" })
                                                                                                                                                )
                                                                                                                                            }
                                                                                                                                        })
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pb15 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 pb3", text: "Danh mục ảnh bài viết:" }),
                                                                                                                                    $("<div>", { class: " w1 oxa oh wsn pa15 grid bss bcd bw1 bra3" }).each(function () {
                                                                                                                                        var t = $(this),
                                                                                                                                            ds = bv.ộ.match(/(id=")+[0-9]+/g);
                                                                                                                                        ds1 = bv.ộ.match(/(src=")+[A-z0-9\:\/\-]+\.+[A-z]+\"/g);
                                                                                                                                        //cl(ds1);
                                                                                                                                        if (ds) {
                                                                                                                                            ds.map(function (v, vt) {
                                                                                                                                                var id = v.match(/[0-9]+/g);
                                                                                                                                                t.append(
                                                                                                                                                    $("<div>", { class: "w30 pa5 vat", id: id }).append(
                                                                                                                                                        $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" })
                                                                                                                                                    ).on("click", function () {
                                                                                                                                                        var t = $(this),
                                                                                                                                                            id = t.attr("id");
                                                                                                                                                        t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                                        $(".đạidiện").css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" });
                                                                                                                                                        $(".đạidiện").attr("id", id);
                                                                                                                                                    })
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                        if (ds1) {
                                                                                                                                            ds1.map(function (v, vt) {
                                                                                                                                                var link = v.replace(/(src=")/g, "").replace(/(")/g, "");
                                                                                                                                                cl(link)
                                                                                                                                                t.append(
                                                                                                                                                    $("<div>", { class: "w30 pa5 vat" }).append(
                                                                                                                                                        $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + link + "')" })
                                                                                                                                                    ).on("click", function () {
                                                                                                                                                        var t = $(this),
                                                                                                                                                            id = t.attr("id");
                                                                                                                                                        t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                                        $(".đạidiện").css({ backgroundImage: "url('" + link + "')" });
                                                                                                                                                        $(".đạidiện").attr("id", link);
                                                                                                                                                    })
                                                                                                                                                )
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                                                                                    $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" }).val(bv.ô)
                                                                                                                                ),
                                                                                                                                $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                    $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                                                                                    $("<div>", { class: "mt25 w1 bss bcd bw1 nd pnd" }).soạnThảo({
                                                                                                                                        cỡ: 15,
                                                                                                                                        html: true,
                                                                                                                                        sẵn: bv.ộ
                                                                                                                                    })
                                                                                                                                ).each(function () {
                                                                                                                                    var lanh = $(this).find("img[id]"),
                                                                                                                                        tcanh = $(this).find("img");
                                                                                                                                    cl(tcanh)
                                                                                                                                    lanh.each(function () {
                                                                                                                                        var id = $(this).attr("id");
                                                                                                                                        if (id > 0) {
                                                                                                                                            $(this).attr("src", dữLiệu.ảnh(id, "i", "500x"))
                                                                                                                                        }
                                                                                                                                        //$(vt).trigger("change")

                                                                                                                                    })
                                                                                                                                    tcanh.each(function () {
                                                                                                                                        $(this).sửaLớp("w1");
                                                                                                                                        $(this).attr("height", "auto");
                                                                                                                                    })
                                                                                                                                }),
                                                                                                                                $("<div>", { class: "tar" }).append(
                                                                                                                                    $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                                                                                                        var t = $(this),
                                                                                                                                            te = $(".tiêuđề").iVal(),
                                                                                                                                            m = $(".môtả").iVal(),
                                                                                                                                            n = $(".nd").iVal(),
                                                                                                                                            anh = $(".đạidiện").attr("id"),
                                                                                                                                            u = $(".hienurl").iVal(),
                                                                                                                                            tt = $(".titlebài").iVal(),
                                                                                                                                            muc = (cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? $(".chuyênMụcTin").iVal() : bv.ụ,
                                                                                                                                            ngay = $(".ngaydang").iVal();
                                                                                                                                        cl(muc)
                                                                                                                                        if (te == "" || n == "") {
                                                                                                                                            t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời nhập thông tin bài viết !" }))
                                                                                                                                        } else {
                                                                                                                                            CẦN.db("bàiViết." + idBài, function (bài) {
                                                                                                                                                t.xửLý("bàiViết.sửa." + idBài, { d: Je({ ả: anh, g: ghim, ó: tt, ê: te, ô: m, ộ: n, r: u, ấ: ngay, ụ: [muc] }) }, function (i) {
                                                                                                                                                    notice(
                                                                                                                                                        { t: "Đã cập nhật bài viết", loại: true }
                                                                                                                                                    );
                                                                                                                                                    t.closest("#khungThôngBáo").remove();
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                )
                                                                                                                            )
                                                                                                                            , {
                                                                                                                                thanh: false,
                                                                                                                                trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                                                                viền: false,
                                                                                                                                koTắt: true
                                                                                                                            }
                                                                                                                        )
                                                                                                                    }),
                                                                                                                    $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "delete" }).on("click", function () {
                                                                                                                        //nút xóa bài
                                                                                                                        var t = $(this);
                                                                                                                        t.iMsg($("<div>", { class: "" }).append(
                                                                                                                            $("<div>", { class: "", text: "Bạn muốn xóa bài viết ?" }),
                                                                                                                            $("<div>", { class: "pr pb249" }).append(
                                                                                                                                $("<div>", { class: "bgcrd cf plr10 btn ptb5 bra3 pa t50 tty l0", text: "Không" }).on("click", function () {
                                                                                                                                    t.iMsg()
                                                                                                                                }),
                                                                                                                                $("<div>", { class: "bg1 cf plr10 ptb5 btn bra3 pa t50 tty r0", text: "Có" }).on("click", function () {
                                                                                                                                    CẦN.db("bàiViết." + bv.i, function (bài) {
                                                                                                                                        var a = config("bàiViết." + bv.i);
                                                                                                                                        xửLý("bàiViết.sửa", { d: Je([bv.i, "a", 1]) }, function (i) {
                                                                                                                                            notice(
                                                                                                                                                { t: "Đã xóa bài viết", loại: true }
                                                                                                                                            )
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            )
                                                                                                                        )
                                                                                                                            , 1)
                                                                                                                    })
                                                                                                                )
                                                                                                            )
                                                                                                        })//Đóng map
                                                                                                    })
                                                                                                }).trigger("click"),
                                                                                                $("<div>", { class: "pa t50 r0 tty bra3 fs15 mr15 bss bcd bw1 bgcfx bấmĐc", icon: "add" }).on("click", function () {
                                                                                                    khung(
                                                                                                        $("<div>", { class: "pa35 bgcf ", text: "" }).append(
                                                                                                            $("<div>", { class: "pt35 pl10 fs15", text: "Thêm bài:" }),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđềgiớithiệu", type: "text", text: "" }).on("keyup", function () {
                                                                                                                    var t = $(this),
                                                                                                                        val = t.iVal();
                                                                                                                    $(".hienurl").val(val.toURL().cắt(128));
                                                                                                                })
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w20", text: "Ghim bài" }),
                                                                                                                $("<div>", { class: "tal" }).append(
                                                                                                                    $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                                                                        var t = $(this);
                                                                                                                        if (t.is(":checked")) {
                                                                                                                            ghim = 1;
                                                                                                                        } else {
                                                                                                                            ghim = 0;
                                                                                                                        }
                                                                                                                    })
                                                                                                                )
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "w20" }),
                                                                                                                $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                                                                                $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titletin", type: "text", text: "", maxlength: 74 })
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                                                                                $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                                                                                    var t = $(this),
                                                                                                                        val = t.iVal();
                                                                                                                    l.map(function (a, b) {
                                                                                                                        if (a == 4593 || a == 4594 || a == 4595 || a == 4625 || a == 4628 || a == 4629) {
                                                                                                                            t.append(
                                                                                                                                $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                                                                            )
                                                                                                                        }
                                                                                                                    })
                                                                                                                })
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                                                                $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                                                                    $("<div>", { class: "pb43 bgcfx w1 bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                                                                        loại: "ảnh",
                                                                                                                        đổi: function (s) {
                                                                                                                            //console.log(s)
                                                                                                                            $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                                                            $(this).attr("id", s[0]);
                                                                                                                        },
                                                                                                                        lỗi: function () {
                                                                                                                            $(this).lỗi("Vui lòng thử lại.");
                                                                                                                        }
                                                                                                                    })
                                                                                                                )
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "w20" }),
                                                                                                                $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                                                                                $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).on("change", function () {
                                                                                                                    var t = $(this),
                                                                                                                        val = t.iVal();
                                                                                                                    t.iVal(val.toURL())
                                                                                                                })
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                                                                $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtảgiớithiệu", type: "text", text: "" })
                                                                                                            ),
                                                                                                            $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                                                                $("<div>", { class: "mt25 w1 bss bcd bw1 nộidunggiớithiệu" }).soạnThảo({
                                                                                                                    cỡ: 15,
                                                                                                                    html: true
                                                                                                                })
                                                                                                            ),
                                                                                                            $("<div>", { class: "btn dib bg1 plr15 ptb5 mt25 cf bra3 ml10", text: "Thêm" }).on("click", function () {
                                                                                                                var t = $(this),
                                                                                                                    te = $(".tiêuđềgiớithiệu").iVal(),
                                                                                                                    d = $(".môtảgiớithiệu").iVal(),
                                                                                                                    n = $(".nộidunggiớithiệu").iVal(),
                                                                                                                    anh = $(".đạidiện").attr("id"),
                                                                                                                    u = $(".hienurl").iVal(),
                                                                                                                    tt = $(".titletin").iVal(),
                                                                                                                    muc = $(".chuyênMụcTin").iVal(),
                                                                                                                    manglink = [];
                                                                                                                //cl(muc)
                                                                                                                listẢnh = $(".soạnThảo").find("img:not([id])");
                                                                                                                if (listẢnh.length > 0) {
                                                                                                                    listẢnh.map(function (a, b) {
                                                                                                                        var lk = $(b).attr("src");
                                                                                                                        manglink.push(lk);
                                                                                                                    })
                                                                                                                    $.post("/xu_ly.php", { action: "đổiLinkẢnh", manglink: manglink }, function (linkmoi) {
                                                                                                                        listẢnh.map(function (a, b) {
                                                                                                                            $(b).attr("src", "/" + linkmoi[a]);
                                                                                                                            //cl($(b).attr("src"))
                                                                                                                        })
                                                                                                                        var n1 = $(".nộidunggiớithiệu").iVal();
                                                                                                                        //cl(n1)
                                                                                                                        if (te == "" || n == "") {
                                                                                                                            t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                                                                        } else {
                                                                                                                            xửLý("bàiViết.đăng", { d: Je({ ụ: muc, g: ghim, ó: tt, ê: te, ô: d, ộ: n1, ả: anh, r: u }) }, function (e) {
                                                                                                                                if (e > 0) {
                                                                                                                                    notice({
                                                                                                                                        loại: true,
                                                                                                                                        t: "Đăng tin thành công"
                                                                                                                                    });
                                                                                                                                    $("#khungThôngBáo").remove();
                                                                                                                                    đồngBộ(function () {
                                                                                                                                        vàoURL("/" + dữLiệu.tên(muc, "ụ").toURL() + ".c" + muc + ".html")
                                                                                                                                    })
                                                                                                                                }
                                                                                                                            })
                                                                                                                        }
                                                                                                                    }, "json")
                                                                                                                } else {
                                                                                                                    if (te == "" || n == "") {
                                                                                                                        t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời điền đủ thông tin !" }))
                                                                                                                    } else {
                                                                                                                        xửLý("bàiViết.đăng", { d: Je({ ụ: muc, g: ghim, ó: tt, ê: te, ô: d, ộ: n, ả: anh, r: u }) }, function (e) {
                                                                                                                            if (e > 0) {
                                                                                                                                notice({
                                                                                                                                    loại: true,
                                                                                                                                    t: "Đăng tin thành công"
                                                                                                                                });
                                                                                                                                $("#khungThôngBáo").remove();
                                                                                                                                đồngBộ(function () {
                                                                                                                                    vàoURL("/" + dữLiệu.tên(idBố, "ụ").toURL() + ".c" + idBố + ".html")
                                                                                                                                })
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            })
                                                                                                        ),
                                                                                                        {
                                                                                                            thanh: false,
                                                                                                            trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                                            viền: false,
                                                                                                            koTắt: true
                                                                                                        }
                                                                                                    )//Đóng khung
                                                                                                })
                                                                                            );
                                                                                            l.map(function (v, vt) {
                                                                                                if (v == 4593 || v == 4594 || v == 4595 || v == 4625 || v == 4628 || v == 4629 || v == 4663) {
                                                                                                    //cl(dữLiệu.tên(v,"ụ"));
                                                                                                    t.append(
                                                                                                        $("<div>", { class: "fs1 plr15 ptb10 mc1h bấmĐc bg1cfh", text: dữLiệu.tên(v, "ụ") }).on("click", function () {
                                                                                                            var t = $(this);
                                                                                                            $(".listBàiViết").sửaLớp("-dn").empty();
                                                                                                            t.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf")
                                                                                                            xửLý("bàiViết.tải.300", { d: Jd({ ụ: v }) }, function (data) {
                                                                                                                data.map(function (x, y) {
                                                                                                                    var bv = config("bàiViết." + x);
                                                                                                                    $(".listBàiViết").append(
                                                                                                                        $("<tr>").append(
                                                                                                                            $("<td>", { class: "fs09 bss bcd bw1 pl15 bấmĐc" }).append(
                                                                                                                                $("<a>", { href: dữLiệu.url(x, "ế"), class: "bấmĐc", text: bv.ê })
                                                                                                                            ),
                                                                                                                            $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", text: bv.ở > 0 ? dữLiệu.tên(bv.ở, "à") : "Khách hàng" }),
                                                                                                                            $("<td>", { class: "fs08 c6 bss bcd bw1 pa10 bấmĐc tac", text: "Ngày" }).append(
                                                                                                                                $("<div>", { class: "dib" }).append(
                                                                                                                                    $("<div>", { class: "wsn", text: "Được đăng" }),
                                                                                                                                    $("<div>", { class: "", text: đổiTG2(bv.ấ) })
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                                                                khung(
                                                                                                                                    $("<div>", { class: "pa25" }).append(
                                                                                                                                        $("<div>", { class: "fs15 mc1 lh1 pb10 bss bb1 bcd", text: bv.ê }),
                                                                                                                                        $("<div>", { class: "grid" }).append(
                                                                                                                                            $("<div>", { class: "pr15 c6", text: dữLiệu.tên(Jd(bv.ụ[0]), "ụ") }),
                                                                                                                                            $("<div>", { class: "pt10 c6", text: đổiTG(bv.ậ) })
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "" }).html(bv.ộ)
                                                                                                                                    ).each(function () {
                                                                                                                                        var t = $(this);
                                                                                                                                        var b = $("#body");
                                                                                                                                        t.find("mp4").trigger("change").sửaLớp("mtb15");
                                                                                                                                        t.find("img[id]").sửaLớp("mt25,mb10").trigger("change");
                                                                                                                                        t.find("h2").sửaLớp("mt15,mb10");
                                                                                                                                        var anh = t.find("img").removeAttr("style").sửaLớp("w1,bgso,bgrn,bgpc,mtb15,hai").trigger("change");
                                                                                                                                    }), {
                                                                                                                                    viền: false,
                                                                                                                                    thanh: false,
                                                                                                                                    trong: "col-md-7 col-sm-7 col-xs-10"
                                                                                                                                }
                                                                                                                                )
                                                                                                                            }),
                                                                                                                            $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "edit" }).on("click", function () {
                                                                                                                                var mang,
                                                                                                                                    url = bv.u,
                                                                                                                                    ngay = bv.ấ,
                                                                                                                                    cmuc = Jd(bv.ụ)[0],
                                                                                                                                    ghim = 0;
                                                                                                                                //cl(bv.ó)
                                                                                                                                khung(
                                                                                                                                    $("<div>", { class: "pa35 bgcf " }).append(
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(bv.ê)
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Ghim bài" }),
                                                                                                                                            $("<div>", { class: "tal" }).append(
                                                                                                                                                $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                                                                                                    var t = $(this);
                                                                                                                                                    if (t.is(":checked")) {
                                                                                                                                                        ghim = 1;
                                                                                                                                                    } else {
                                                                                                                                                        ghim = 0;
                                                                                                                                                    }
                                                                                                                                                }).each(function () {
                                                                                                                                                    if (bv.g == 1) {
                                                                                                                                                        $(this).prop("checked", true);
                                                                                                                                                        $(this).trigger("change");
                                                                                                                                                    }
                                                                                                                                                })
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "w20" }),
                                                                                                                                            $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlebài", type: "text", text: "", maxlength: 74 }).val(bv.ó ? bv.ó : bv.ê)
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" + ((cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? "" : " dn") }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                                                                                                            $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                                                                                                                var t = $(this),
                                                                                                                                                    val = t.iVal();
                                                                                                                                                CẦN.db("chuyênLực.4597", function (e) {
                                                                                                                                                    e.map(function (a, b) {
                                                                                                                                                        t.append(
                                                                                                                                                            $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            }).each(function () {
                                                                                                                                                $(this).val(cmuc);
                                                                                                                                            })
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Ngày đăng:" }),
                                                                                                                                            $("<div>", { class: "w30 plr10 ptb3 bra3 bss bcd bw1 ngaydang" }).attr({ contenteditable: true, }).chọnNgày({
                                                                                                                                                quáKhứ: true,
                                                                                                                                                nổi: true,
                                                                                                                                            }).iVal(ngay)
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "w20" }),
                                                                                                                                            $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).val(url ? url : bv.ê.toURL().cắt(128))
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                                                                                            $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                                                                                                $("<div>", { class: "pb43 bgcfx w1 pr bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                                                                                                    loại: "ảnh",
                                                                                                                                                    đổi: function (s) {
                                                                                                                                                        //console.log(s)
                                                                                                                                                        $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                                                                                        $(this).attr("id", s[0]);
                                                                                                                                                    },
                                                                                                                                                    lỗi: function () {
                                                                                                                                                        $(this).lỗi("Vui lòng thử lại.");
                                                                                                                                                    }
                                                                                                                                                }).each(function () {
                                                                                                                                                    var t = $(this),
                                                                                                                                                        b = config("bàiViết." + bv.i);
                                                                                                                                                    cl(b)
                                                                                                                                                    if (b.ả) {
                                                                                                                                                        cl(b.ả)
                                                                                                                                                        t.sửaLớp("-bgcfx");
                                                                                                                                                        t.css({ backgroundImage: "url('" + dữLiệu.ảnh(bv.i, "ế", "200px") + "')" });
                                                                                                                                                    } else {
                                                                                                                                                        t.append(
                                                                                                                                                            $("<div>", { class: "tl50 tt fs12 fs09-xs c6", text: "Chưa có ảnh" })
                                                                                                                                                        )
                                                                                                                                                    }
                                                                                                                                                })
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pb15 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 pb3", text: "Danh mục ảnh bài viết:" }),
                                                                                                                                            $("<div>", { class: " w1 oxa oh wsn pa15 grid bss bcd bw1 bra3" }).each(function () {
                                                                                                                                                var t = $(this),
                                                                                                                                                    ds = bv.ộ.match(/(id=")+[0-9]+/g);
                                                                                                                                                ds1 = bv.ộ.match(/(src=")+[A-z0-9\:\/\-]+\.+[A-z]+\"/g);
                                                                                                                                                //cl(ds1);
                                                                                                                                                if (ds) {
                                                                                                                                                    ds.map(function (v, vt) {
                                                                                                                                                        var id = v.match(/[0-9]+/g);
                                                                                                                                                        t.append(
                                                                                                                                                            $("<div>", { class: "w30 pa5 vat", id: id }).append(
                                                                                                                                                                $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" })
                                                                                                                                                            ).on("click", function () {
                                                                                                                                                                var t = $(this),
                                                                                                                                                                    id = t.attr("id");
                                                                                                                                                                t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                                                $(".đạidiện").css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" });
                                                                                                                                                                $(".đạidiện").attr("id", id);
                                                                                                                                                            })
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                                if (ds1) {
                                                                                                                                                    ds1.map(function (v, vt) {
                                                                                                                                                        var link = v.replace(/(src=")/g, "").replace(/(")/g, "");
                                                                                                                                                        cl(link)
                                                                                                                                                        t.append(
                                                                                                                                                            $("<div>", { class: "w30 pa5 vat" }).append(
                                                                                                                                                                $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + link + "')" })
                                                                                                                                                            ).on("click", function () {
                                                                                                                                                                var t = $(this),
                                                                                                                                                                    id = t.attr("id");
                                                                                                                                                                t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                                                $(".đạidiện").css({ backgroundImage: "url('" + link + "')" });
                                                                                                                                                                $(".đạidiện").attr("id", link);
                                                                                                                                                            })
                                                                                                                                                        )
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            })
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" }).val(bv.ô)
                                                                                                                                        ),
                                                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                                                            $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                                                                                            $("<div>", { class: "mt25 w1 bss bcd bw1 nd pnd" }).soạnThảo({
                                                                                                                                                cỡ: 15,
                                                                                                                                                html: true,
                                                                                                                                                sẵn: bv.ộ
                                                                                                                                            })
                                                                                                                                        ).each(function () {
                                                                                                                                            var lanh = $(this).find("img[id]"),
                                                                                                                                                tcanh = $(this).find("img");
                                                                                                                                            cl(tcanh)
                                                                                                                                            lanh.each(function () {
                                                                                                                                                var id = $(this).attr("id");
                                                                                                                                                if (id > 0) {
                                                                                                                                                    $(this).attr("src", dữLiệu.ảnh(id, "i", "500x"))
                                                                                                                                                }
                                                                                                                                                //$(vt).trigger("change")

                                                                                                                                            })
                                                                                                                                            tcanh.each(function () {
                                                                                                                                                $(this).sửaLớp("w1");
                                                                                                                                                $(this).attr("height", "auto");
                                                                                                                                            })
                                                                                                                                        }),
                                                                                                                                        $("<div>", { class: "tar" }).append(
                                                                                                                                            $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                                                                                                                var t = $(this),
                                                                                                                                                    te = $(".tiêuđề").iVal(),
                                                                                                                                                    m = $(".môtả").iVal(),
                                                                                                                                                    n = $(".nd").iVal(),
                                                                                                                                                    anh = $(".đạidiện").attr("id"),
                                                                                                                                                    u = $(".hienurl").iVal(),
                                                                                                                                                    tt = $(".titlebài").iVal(),
                                                                                                                                                    muc = (cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? $(".chuyênMụcTin").iVal() : bv.ụ,
                                                                                                                                                    ngay = $(".ngaydang").iVal();
                                                                                                                                                cl(muc)
                                                                                                                                                if (te == "" || n == "") {
                                                                                                                                                    t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời nhập thông tin bài viết !" }))
                                                                                                                                                } else {
                                                                                                                                                    CẦN.db("bàiViết." + idBài, function (bài) {
                                                                                                                                                        t.xửLý("bàiViết.sửa." + idBài, { d: Je({ ả: anh, g: ghim, ó: tt, ê: te, ô: m, ộ: n, r: u, ấ: ngay, ụ: [muc] }) }, function (i) {
                                                                                                                                                            notice(
                                                                                                                                                                { t: "Đã cập nhật bài viết", loại: true }
                                                                                                                                                            );
                                                                                                                                                            t.closest("#khungThôngBáo").remove();
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            })
                                                                                                                                        )
                                                                                                                                    )
                                                                                                                                    , {
                                                                                                                                        thanh: false,
                                                                                                                                        trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                                                                        viền: false,
                                                                                                                                        koTắt: true
                                                                                                                                    }
                                                                                                                                )
                                                                                                                            }),
                                                                                                                            $("<td>", { class: "fs09 bss bcd bw1 tac pa10 bấmĐc", icon: "delete" }).on("click", function () {
                                                                                                                                //nút xóa bài
                                                                                                                                var t = $(this);
                                                                                                                                t.iMsg($("<div>", { class: "" }).append(
                                                                                                                                    $("<div>", { class: "", text: "Bạn muốn xóa bài viết ?" }),
                                                                                                                                    $("<div>", { class: "pr pb249" }).append(
                                                                                                                                        $("<div>", { class: "bgcrd cf plr10 btn ptb5 bra3 pa t50 tty l0", text: "Không" }).on("click", function () {
                                                                                                                                            t.iMsg()
                                                                                                                                        }),
                                                                                                                                        $("<div>", { class: "bg1 cf plr10 ptb5 btn bra3 pa t50 tty r0", text: "Có" }).on("click", function () {
                                                                                                                                            CẦN.db("bàiViết." + bv.i, function (bài) {
                                                                                                                                                var a = config("bàiViết." + bv.i);
                                                                                                                                                xửLý("bàiViết.sửa", { d: Je([bv.i, "a", 1]) }, function (i) {
                                                                                                                                                    notice(
                                                                                                                                                        { t: "Đã xóa bài viết", loại: true }
                                                                                                                                                    )
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    )
                                                                                                                                )
                                                                                                                                    , 1)
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    )
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ),
                                                                            $("<table>", { class: "bảngQLB w1", style: "border-collapse:collapse" }).append(
                                                                                $("<thead>", { class: "tiêuĐềBảng " }).append(
                                                                                    $("<tr>").append(
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Tên bài viết" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Người viết" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Ngày" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xem " }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Sửa" }),
                                                                                        $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xóa" })
                                                                                    )
                                                                                ),
                                                                                $("<tbody>", { class: "listBàiViết dn" })
                                                                            )
                                                                        )
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc qlbLuận", text: "Quản lý bình luận" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        $(".phần2").empty().append(
                                                                            $("<table>", { class: "w1", style: "border-collapse:collapse" }).append(
                                                                                $("<thead>").append(
                                                                                    $("<tr>").append(
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn w25", text: "Bài viết" }),
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn w35", text: "Lời Bình" }),
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn", text: "Người Viết" }),
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn", text: "Ngày" }),
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn", text: "Duyệt" }),
                                                                                        $("<th>", { class: "bss fs09 bw1 bcd bgcfx pa7 wsn", text: "Xóa" })
                                                                                    )
                                                                                ),
                                                                                $("<tbody>", { class: "fs09" }).each(function () {
                                                                                    t = $(this);
                                                                                    // xửLý("bàiViết.bìnhLuậnChờ",function(bluan){
                                                                                    // 	if(bluan.length<1){
                                                                                    // 		$(".nocom").sửaLớp("-dn")
                                                                                    // 	} else {
                                                                                    // 		bluan.map(function(v,i){
                                                                                    // 			var pt = config("bàiViết."+v);
                                                                                    // 			cl(pt)
                                                                                    // 			t.append(
                                                                                    // 				$("<tr>",{class:"bìnhluận"}).append(
                                                                                    // 					$("<td>",{class:"tal pa10 bss bcd bw1",text:dữLiệu.tên(pt.ế,"ế")}),
                                                                                    // 					$("<td>",{class:"tal pa10 bss bcd bw1",text:pt.ộ}),
                                                                                    // 					$("<td>",{class:"tac pa10 bss bcd bw1 "}).append(
                                                                                    // 						$("<div>",{class:"bấmĐc fs13 bg1h cfh pa3 bra50 dib duyetbl",icon:"done",id:pt.i}).on("click",function(){
                                                                                    // 							var t = $(this),
                                                                                    // 								id = t.attr("id");
                                                                                    // 							xửLý("bàiViết.sửa."+id,{d:Je({p:1})},function(status){
                                                                                    // 								if(status==1){
                                                                                    // 									t.closest(".bìnhluận").sửaLớp("bgcfx")
                                                                                    // 									t.remove();
                                                                                    // 									$(".xoabl").remove();
                                                                                    // 								}
                                                                                    // 							})//danh sách bình luận
                                                                                    // 						})
                                                                                    // 					),
                                                                                    // 					$("<td>",{class:"tac pa10 bss bcd bw1 bấmĐc"}).append(
                                                                                    // 						$("<div>",{class:"bấmĐc fs13 bg1h cfh pa3 bra50 dib xoabl",icon:"close"}).on("click",function(){
                                                                                    // 							xửLý("bàiViết.sửa."+pt.i,{d:Je({a:1})},function(status){
                                                                                    // 								if(status==1){
                                                                                    // 									t.closest(".bìnhluận").remove();
                                                                                    // 								}
                                                                                    // 							})
                                                                                    // 						})
                                                                                    // 					)
                                                                                    // 				)
                                                                                    // 			)
                                                                                    // 		})
                                                                                    // 	}
                                                                                    // })
                                                                                    xửLý("bàiViết.tảiHoạtĐộng.20", function (bluan) {
                                                                                        if (bluan.length < 1) {
                                                                                            $(".nocom").sửaLớp("-dn")
                                                                                        } else {
                                                                                            cl(bluan)
                                                                                            //CẦN.db("bàiViết."+bluan,function(){
                                                                                            bluan.map(function (v, i) {
                                                                                                var pt = config("bàiViết." + v),
                                                                                                    baiviet, ten,
                                                                                                    tg = iDate(pt.ấ),
                                                                                                    tg1 = tg.j + "/" + tg.n + "/" + tg.f;
                                                                                                CẦN.db("bàiViết." + (Jd(pt.ế).length > 0 ? Jd(pt.ế)[0] : pt.ế), function () {
                                                                                                    if (Jd(pt.ế).length > 0) {
                                                                                                        cl(2)
                                                                                                        baiviet = dữLiệu.url(Jd(pt.ế)[0], "ế");
                                                                                                        ten = dữLiệu.tên(Jd(pt.ế)[0], "ế");
                                                                                                    } else {
                                                                                                        cl(dữLiệu.tên(pt.ế, "ế"))
                                                                                                        baiviet = dữLiệu.url(pt.ế, "ế");
                                                                                                        ten = dữLiệu.tên(pt.ế, "ế");
                                                                                                    }
                                                                                                    t.append(
                                                                                                        $("<tr>", { class: "bìnhluận", id: v }).append(
                                                                                                            $("<td>", { class: "tal pa10 bss bcd bw1" }).append(
                                                                                                                $("<a>", { href: baiviet, class: "bấmĐc", text: ten })
                                                                                                            ),
                                                                                                            $("<td>", { class: "tal pa10 bss bcd bw1", text: pt.ộ }),
                                                                                                            $("<td>", { class: "tal pa10 bss bcd bw1 wsn", text: pt.ở ? pt.ở : "Khách" }),
                                                                                                            $("<td>", { class: "tal fs08 c6 pa10 bss tac bcd bw1" }).append(
                                                                                                                $("<div>", { class: "dib " }).append(
                                                                                                                    $("<div>", { class: "wsn", text: "Được đăng" }),
                                                                                                                    $("<div>", { class: "", text: tg1 })
                                                                                                                )
                                                                                                            ),
                                                                                                            $("<td>", { class: "tac pa10 bss bcd bw1 " }).append(
                                                                                                                (pt.p == 0 ? $("<div>", { class: "bấmĐc fs13 bg1h cfh pa3 bra50 dib duyetbl", icon: "done", id: pt.i }).on("click", function () {
                                                                                                                    var t = $(this),
                                                                                                                        id = t.attr("id");
                                                                                                                    xửLý("bàiViết.sửa." + id, { d: Je({ p: 1 }) }, function (status) {
                                                                                                                        if (status == 1) {
                                                                                                                            t.closest(".bìnhluận").sửaLớp("bgcfx")
                                                                                                                            t.remove();
                                                                                                                            $(".xoabl").remove();
                                                                                                                            $(".quanTri").trigger("thôngBáo");
                                                                                                                            $(".qlbLuận").trigger("thôngBáo1");
                                                                                                                        }
                                                                                                                    })
                                                                                                                })
                                                                                                                    : $("<div>", { class: "pa3 bra50 fs09 c6 dib duyetbl", text: "Đã duyệt" }))
                                                                                                            ),
                                                                                                            $("<td>", { class: "tac pa10 bss bcd bw1 bấmĐc" }).append(
                                                                                                                $("<div>", { class: "bấmĐc fs13 bg1h cfh pa3 bra50 dib xoabl", icon: "close" }).on("click", function () {
                                                                                                                    var th = $(this);
                                                                                                                    xửLý("bàiViết.sửa." + pt.i, { d: Je({ a: 1 }) }, function (status) {
                                                                                                                        if (status == 1) {
                                                                                                                            cl("xóa bình luận")
                                                                                                                            notice({
                                                                                                                                t: "Đã xóa bình luận",
                                                                                                                                loại: true
                                                                                                                            })
                                                                                                                            th.closest(".bìnhluận").remove();
                                                                                                                            $(".quanTri").trigger("thôngBáo");
                                                                                                                            $(".qlbLuận").trigger("thôngBáo1");
                                                                                                                        }
                                                                                                                    })
                                                                                                                })
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                })

                                                                                            })
                                                                                            //})
                                                                                        }
                                                                                    })
                                                                                })
                                                                            ),
                                                                            $("<div>", { class: "w1 ptb15 tac dn fs13 nocom", text: "Không có bình luận chờ duyệt !" })
                                                                        )
                                                                    }).on("thôngBáo1", function () {
                                                                        cl("qlbl")
                                                                        var t = $(this);
                                                                        xửLý("bàiViết.bìnhLuậnChờ", function (bluan) {
                                                                            if (bluan.length > 0) {
                                                                                t.sửaLớp("pr").append(
                                                                                    $("<div>", { class: "bra50 pa pa5 fs08 crd r0 t50 tty mr10 lh1 bgcfx", text: bluan.length })
                                                                                )
                                                                            }
                                                                        })
                                                                    }).trigger("thôngBáo1"),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ", text: "Quản trị hợp đồng" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        quảnTrị.bảng('012b7365f8cb7ddaea55db72ba0ba898')
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ", text: "Quản trị đơn hàng" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        quảnTrị.bảng('2408985723fba8ec57dfd7c17e06ac23')
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ", text: "Quản trị mộ" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        quảnTrị.bảng('85a06270ffdb31728ad4dd341891d457')
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc qtTàiKhoản", text: "Quản trị tài khoản" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        CẦN.db("kháchHàngs", function (a) {
                                                                            CẦN.db("tàiKhoản." + a, function () {
                                                                                a = a.sort();
                                                                                a = a.reverse();
                                                                                $(".phần2").empty().append(
                                                                                    $("<div>", { class: " tar pr" }).append(
                                                                                        $("<div>", { class: " grid w40 pa l0 t50 tty ml35" }).append(
                                                                                            $("<input>", { class: "w80 mr10 bss bcd bw1 bra3" }).on("keypress", function (e) {
                                                                                                var next = $(this).next();
                                                                                                if (e.which == 13) {
                                                                                                    next.trigger("click");
                                                                                                }
                                                                                            }),
                                                                                            $("<div>", { class: "bấmĐc mr15 bss bg1cfh pa5 bra3 bss bcd bw1 mtb7", icon: "search" }).on("click", function () {
                                                                                                var th = $(this),
                                                                                                    tukhoa = th.prev().val();
                                                                                                if (!tukhoa) {
                                                                                                    alert("Mời nhập từ khóa để tìm kiếm !")
                                                                                                } else {
                                                                                                    //tìm kiếm tài khoản
                                                                                                    dữLiệu.tìm(tukhoa, "à", function (data) {
                                                                                                        if (data.length > 0) {
                                                                                                            $(".thânBảng").empty();
                                                                                                            CẦN.db("tàiKhoản." + data, function () {
                                                                                                                data.map(function (v, vt) {
                                                                                                                    var tk = config("tàiKhoản." + v);
                                                                                                                    $(".thânBảng").append(
                                                                                                                        DTK(v, tk, vt)
                                                                                                                    )
                                                                                                                })
                                                                                                                var t = $(".chiaTrang"),
                                                                                                                    st = Math.ceil(data.length / 30);
                                                                                                                //cl(st)
                                                                                                                t.empty();
                                                                                                                for (i = 1; i <= st; i++) {
                                                                                                                    t.append(
                                                                                                                        $("<div>", { class: " pa5 fs09 mlr3 bra3 bss bcd bw1  bấmĐc bg1cfh " + (i == 1 ? " đang bg1 cf" : " bgcfx"), text: i, stt: i }).on("click", function () {
                                                                                                                            var th = $(this),
                                                                                                                                stt = th.attr("stt"),
                                                                                                                                trc = (stt - 1) * 30,
                                                                                                                                sau = trc + 29;
                                                                                                                            //cl(stt-1,stt-1+99);
                                                                                                                            th.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                                                                            $(".thânBảng").empty();
                                                                                                                            a.slice(trc, sau).map(function (v, vt) {
                                                                                                                                //cl(trc,sau)
                                                                                                                                var tk = config("tàiKhoản." + v);
                                                                                                                                $(".thânBảng").append(
                                                                                                                                    DTK(v, tk, vt)
                                                                                                                                )
                                                                                                                            })
                                                                                                                        })
                                                                                                                    )
                                                                                                                }
                                                                                                            })

                                                                                                        } else {
                                                                                                            alert("Không thấy kết quả phù hợp !")
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        ),
                                                                                        $("<div>", { class: "bấmĐc dib mr15 bss bg1cfh pa5 div bra3 bss bcd bw1 mtb7", icon: "add" }).on("click", function () {
                                                                                            var gt;
                                                                                            khung(
                                                                                                $("<div>", { class: "pa25 " }).append(
                                                                                                    //khung thêm tài khoản
                                                                                                    $("<div>", { class: "pb15 bb1 bss bc1", text: "Tạo tài khoản" }),
                                                                                                    $("<input>", { class: "mtb10 plr10 ptb5 w1 bra3 bss bcd bw1 hoten", placeholder: "Họ tên khách hàng" }),
                                                                                                    $("<div>", { class: "grid" }).append(
                                                                                                        $("<input>", { class: "mr15", type: "radio", name: "giới" }).on("change", function () {
                                                                                                            gt = 1;
                                                                                                        }),
                                                                                                        $("<div>", { class: "mr25", text: "Nam" }),
                                                                                                        $("<input>", { class: " mr15", type: "radio", name: "giới" }).on("change", function () {
                                                                                                            gt = 2;
                                                                                                        }),
                                                                                                        $("<div>", { class: "", text: "Nữ" })
                                                                                                    ),
                                                                                                    $("<input>", { class: "mtb10 plr10 ptb5 w1 bra3 bss bcd bw1 taikhoan", placeholder: "Tài khoản" }),
                                                                                                    $("<input>", { class: "mtb10 plr10 ptb5 w1 bra3 bss bcd bw1 matkhau", placeholder: "Mật khẩu" }),
                                                                                                    $("<div>", { class: "tar grid" }).append(
                                                                                                        $("<div>", { class: "btn bra3 bss bcd bw1 pa5", text: "Tạo tài khoản" }).on("click", function () {
                                                                                                            var t = $(this),
                                                                                                                ten = $(".hoten").val(),
                                                                                                                tk = $(".taikhoan").val(),
                                                                                                                mk = $(".matkhau").val();
                                                                                                            //cl(gt,ten,tk,mk);
                                                                                                            if (!gt || !ten || !tk || !mk) {
                                                                                                                alert("Mời nhập đủ thông tin!")
                                                                                                            } else {
                                                                                                                xửLý("tàiKhoản.tạo", function (id) {
                                                                                                                    xửLý("thuộcTính.sửa.tàiKhoản", { d: Je([id, { c: "0", ớ: "0", ê: ten, à: tk, ợ: mk }]) }, function (r) {
                                                                                                                        if (r) {
                                                                                                                            notice(
                                                                                                                                { t: "Đã tạo tài khoản thành công", loại: true }
                                                                                                                            )
                                                                                                                            $(".hoten,.taikhoan,.matkhau").val("");
                                                                                                                            đồngBộ(function () {
                                                                                                                                CẦN.db("tàiKhoản." + id, function () {
                                                                                                                                    var tk = config("tàiKhoản." + id),
                                                                                                                                        stt = $(".thânBảng").find(".sothutu");
                                                                                                                                    cl($(".thânBảng"), stt)
                                                                                                                                    $(".thânBảng").prepend(
                                                                                                                                        DTK(id, tk, 0)
                                                                                                                                    )
                                                                                                                                    stt.map(function (x, y) {
                                                                                                                                        var socu = $(y).text();
                                                                                                                                        cl(socu)
                                                                                                                                        $(y).text(socu * 1 + 1);
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        } else {
                                                                                                                            notice(
                                                                                                                                { t: "Tạo tài khoản thất bại", loại: false }
                                                                                                                            )
                                                                                                                        }
                                                                                                                    })
                                                                                                                })
                                                                                                            }
                                                                                                        })
                                                                                                    )
                                                                                                ), {
                                                                                                viền: false,
                                                                                                thanh: false
                                                                                            }
                                                                                            )
                                                                                        })
                                                                                    ),
                                                                                    $("<table>", { class: "bảngBG w1", style: "border-collapse:collapse" }).append(
                                                                                        $("<thead>", { class: "tiêuĐềBảng" }).append(
                                                                                            $("<tr>").append(
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "STT" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Mã tài khoản" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Tên khách hàng" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Ngày sinh" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Chứng minh thư" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Email" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "SĐT" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Tài khoản" }),
                                                                                                // $("<th>",{class:"bss bgcfx bcd bw1 tac pa7",style:"font-weight:100",text:"Mật khẩu"}),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Sửa" }),
                                                                                                $("<th>", { class: "bss bgcfx bcd bw1 tac pa7", style: "font-weight:100", text: "Xóa" })
                                                                                            )
                                                                                        ),
                                                                                        $("<tbody>", { class: "fs09 thânBảng oh oya", style: "height:579px" }).each(function () {
                                                                                            var t = $(this);
                                                                                            // var dd = $(".phần2").outerHeight() - ($(".chiaTrang").outerHeight()+$(".tiêuĐềBảng").outerHeight());
                                                                                            // t.css({height:dd})
                                                                                            chờ(function () {
                                                                                                //cl($(".đang"));
                                                                                                var stt = $(".đang").attr("stt"),
                                                                                                    trc = (stt - 1) * 100,
                                                                                                    sau = trc + 100;
                                                                                                //cl(stt-1,stt-1+99);
                                                                                                a.slice(trc, sau).map(function (v, vt) {
                                                                                                    var tk = config("tàiKhoản." + v);
                                                                                                    //Dòng thông tin tài khoản
                                                                                                    var thutu = 100 * (stt - 1) + vt;
                                                                                                    t.append(
                                                                                                        DTK(v, tk, thutu)
                                                                                                    )
                                                                                                })
                                                                                            }, 1500)
                                                                                        })
                                                                                    ),
                                                                                    $("<div>", { class: "chiaTrang grid tac ptb7" }).each(function () {
                                                                                        var t = $(this),
                                                                                            st = Math.ceil(a.length / 100);
                                                                                        //cl(st)
                                                                                        for (i = 1; i <= st; i++) {
                                                                                            t.append(
                                                                                                $("<div>", { class: " pa5 fs09 mlr3 bra3 bss bcd bw1  bấmĐc bg1cfh " + (i == 1 ? " đang bg1 cf" : " bgcfx"), text: i, stt: i }).on("click", function () {
                                                                                                    var th = $(this),
                                                                                                        stt = th.attr("stt"),
                                                                                                        trc = (stt - 1) * 100,
                                                                                                        sau = trc + 100;
                                                                                                    //cl(stt-1,*1stt-1+99);
                                                                                                    th.sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                                                    $(".thânBảng").empty();
                                                                                                    a.slice(trc, sau).map(function (v, vt) {
                                                                                                        //cl(trc,sau)
                                                                                                        var tk = config("tàiKhoản." + v);
                                                                                                        var thutu = 100 * (stt - 1) + vt;
                                                                                                        $(".thânBảng").append(
                                                                                                            DTK(v, tk, thutu)
                                                                                                        )
                                                                                                    })
                                                                                                })
                                                                                            )
                                                                                        }
                                                                                    })
                                                                                )
                                                                            })
                                                                        });
                                                                        // cl($(".thânBảng"),$(".phần2").outerHeight(),$(".chiaTrang").outerHeight(),$(".tiêuĐềBảng").outerHeight());
                                                                        // $(".thânBảng").css({height:$(".phần2").outerHeight() - ($(".chiaTrang").outerHeight()+$(".tiêuĐềBảng").outerHeight())})
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ", text: "Quản trị đồ cúng" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf"); quảnTrị.bảng('01f20dda670f525894655f0ba414e5cf')
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc ", text: "Quản trị gói giỗ" }).on("click", function () {
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        quảnTrị.bảng('dc97ae89c735c854c07efeb6c24a4399')
                                                                    }),
                                                                    $("<div>", { class: "fs1 bss bcd bt1 ptb15 pl10 bg1cfh bấmĐc", text: "Đăng ký nhận tin" }).on("click", function () {
                                                                        $.đệm("xemliênhệ", now().u, 1);
                                                                        $(this).sửaLớp("bg1,cf").siblings().sửaLớp("-bg1,-cf");
                                                                        quảnTrị.bảng('5a58844cf2b19d53bbbb6e5e8ccb3abb')
                                                                    }).on("thôngBáo2", function () {
                                                                        var t = $(this), dem = 0, xemluc = $.đệm("xemliênhệ");
                                                                        xửLý("đốiTượng.tải.5a58844cf2b19d53bbbb6e5e8ccb3abb", function (a) {
                                                                            CẦN.db("5a58844cf2b19d53bbbb6e5e8ccb3abb." + a, function () {
                                                                                a.map(function (v, i) {
                                                                                    if (Jd(v["223206"]).u > xemluc) {
                                                                                        dem += 1;
                                                                                    }
                                                                                    if (dem > 0) {
                                                                                        t.sửaLớp("pr").append(
                                                                                            $("<div>", { class: "bra50 pa pa5 fs08 crd r0 t50 tty mr10 lh1 bgcfx", text: dem })
                                                                                        )
                                                                                    }
                                                                                })
                                                                            })
                                                                        })
                                                                    }).trigger("thôngBáo2"),
                                                                    $("<div>", { class: "pf b0 l0 pa10 c6 fs09 fwb z9 lienlac" }).each(function () {
                                                                        var th = $(this);
                                                                        cfg("lầnGọi", function (lg) {
                                                                            th.text("Lượt liên lạc: " + lg);
                                                                        })
                                                                    })
                                                                ),
                                                                $("<div>", { class: "col-md-10 col-sm-10 phần2 dib h1v oya oh bgsc bgrn bgpc" }).css({ backgroundImage: "url('')" }).append(
                                                                    $("<table>", { class: "bảngBG w1", style: "border-collapse:collapse" }).append(
                                                                        $("<thead>", { class: "tiêuĐềBảng" }).append(
                                                                            $("<tr>").append(
                                                                                $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Tên bài viết" }),
                                                                                $("<th>", { class: "bss fs09 wsn bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Người viết" }),
                                                                                $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Ngày" }),
                                                                                $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xem " }),
                                                                                $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Sửa" }),
                                                                                $("<th>", { class: "bss fs09 bgcfx bcd bw1 tac pa10", style: "font-weight:100", text: "Xóa" })
                                                                            )
                                                                        ),
                                                                        $("<tbody>", { class: "listBàiGhim" }).each(function () {
                                                                            var t = $(this);
                                                                            //CẦN.db("chuyênLực.4591",function(cmuc){
                                                                            //lấyChuyênLực(e,function(l){
                                                                            xửLý("bàiViết.tải.2000", { d: Je({ g: 1 }) }, function (bviet) {
                                                                                cl(bviet)
                                                                                bviet.map(function (a, b) {
                                                                                    var bv = config("bàiViết." + a);
                                                                                    t.append(
                                                                                        $("<tr>").append(
                                                                                            $("<td>", { class: "fs09 bss bcd bw1 pl15", text: bv.ê }),
                                                                                            $("<td>", { class: "tal fs09 pa10 bss bcd bw1", text: dữLiệu.tên(bv.ở, "à") }),
                                                                                            $("<td>", { class: "tal fs08 c6 pa10 bss bcd bw1" }).append(
                                                                                                $("<div>", { class: "dib" }).append(
                                                                                                    $("<div>", { class: "wsn", text: "Được đăng" }),
                                                                                                    $("<div>", { class: "", text: đổiTG2(bv.ấ) })
                                                                                                )
                                                                                            ),
                                                                                            $("<td>", { class: "fs1 bss bcd bw1 tac pa10 bấmĐc", icon: "visibility" }).on("click", function () {
                                                                                                khung(
                                                                                                    $("<div>", { class: "pa25" }).append(
                                                                                                        $("<div>", { class: "fs15 mc1 lh1 pb10 bss bb1 bcd", text: bv.ê }),
                                                                                                        $("<div>", { class: "grid" }).append(
                                                                                                            $("<div>", { class: "pr15 c6", text: dữLiệu.tên(Jd(bv.ụ[0]), "ụ") }),
                                                                                                            $("<div>", { class: "pt10 c6", text: đổiTG(bv.ậ) })
                                                                                                        ),
                                                                                                        $("<div>", { class: "" }).html(bv.ộ)
                                                                                                    ).each(function () {
                                                                                                        var t = $(this);
                                                                                                        var b = $("#body");
                                                                                                        t.find("mp4").trigger("change").sửaLớp("mtb15");
                                                                                                        t.find("img[id]").sửaLớp("mt25,mb10").trigger("change");
                                                                                                        t.find("h2").sửaLớp("mt15,mb10");
                                                                                                        var anh = t.find("img").removeAttr("style").sửaLớp("w1,bgso,bgrn,bgpc,mtb15,hai").trigger("change");
                                                                                                    }), {
                                                                                                    viền: false,
                                                                                                    thanh: false,
                                                                                                    trong: "col-md-7 col-sm-7 col-xs-10"
                                                                                                }
                                                                                                )
                                                                                            }),
                                                                                            $("<td>", { class: "fs1 bss bcd bw1 tac pa10 bấmĐc", icon: "edit" }).on("click", function () {
                                                                                                var mang,
                                                                                                    url = bv.u,
                                                                                                    ngay = bv.ấ,
                                                                                                    cmuc = Jd(bv.ụ)[0],
                                                                                                    ghim = 0;
                                                                                                //cl(bv.ó)
                                                                                                khung(
                                                                                                    $("<div>", { class: "pa35 bgcf " }).append(
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Tiêu đề:" }),
                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 tiêuđề", type: "text", text: "" }).val(bv.ê)
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Ghim bài" }),
                                                                                                            $("<div>", { class: "tal" }).append(
                                                                                                                $("<input>", { class: "ghimBài bấmĐc", style: "width:25px", type: "checkbox" }).on("change", function () {
                                                                                                                    var t = $(this);
                                                                                                                    if (t.is(":checked")) {
                                                                                                                        ghim = 1;
                                                                                                                    } else {
                                                                                                                        ghim = 0;
                                                                                                                    }
                                                                                                                }).each(function () {
                                                                                                                    if (bv.g == 1) {
                                                                                                                        $(this).prop("checked", true);
                                                                                                                        $(this).trigger("change");
                                                                                                                    }
                                                                                                                })
                                                                                                            )
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "w20" }),
                                                                                                            $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của title không quá 74 kí tự" }),
                                                                                                            $("<div>", { class: "mr15 w20", text: "Title:" }),
                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 titlebài", type: "text", text: "", maxlength: 74 }).val(bv.ó ? bv.ó : bv.ê)
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" + ((cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? "" : " dn") }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Chuyên mục:" }),
                                                                                                            $("<select>", { class: "w50 pl10 bra3 ptb5 bss bcd bw1 chuyênMụcTin", type: "text", text: "" }).each(function () {
                                                                                                                var t = $(this),
                                                                                                                    val = t.iVal();
                                                                                                                CẦN.db("chuyênLực.4597", function (e) {
                                                                                                                    e.map(function (a, b) {
                                                                                                                        t.append(
                                                                                                                            $("<option>", { class: "", value: a, text: dữLiệu.tên(a, "ụ") })
                                                                                                                        )
                                                                                                                    })
                                                                                                                })
                                                                                                            }).each(function () {
                                                                                                                $(this).val(cmuc);
                                                                                                            })
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Ngày đăng:" }),
                                                                                                            $("<div>", { class: "w30 plr10 ptb3 bra3 bss bcd bw1 ngaydang" }).attr({ contenteditable: true, }).chọnNgày({
                                                                                                                quáKhứ: true,
                                                                                                                nổi: true,
                                                                                                            }).iVal(ngay)
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "w20" }),
                                                                                                            $("<div>", { class: "w80 pb10 c9 fs08 tac ml15 pl5", text: "Độ dài của url không quá 128 kí tự" }),
                                                                                                            $("<div>", { class: "mr15 w20", text: "URL:" }),
                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 hienurl", type: "text", maxlength: 128 }).val(url ? url : bv.ê.toURL().cắt(128))
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 fs12 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w30", text: "Chọn ảnh đại diện:" }),
                                                                                                            $("<div>", { class: "w30 bra3 bss bcd bw1", type: "text", text: "" }).append(
                                                                                                                $("<div>", { class: "pb43 bgcfx w1 pr bgrn bgso bgpc đạidiện" }).tảiLên({
                                                                                                                    loại: "ảnh",
                                                                                                                    đổi: function (s) {
                                                                                                                        //console.log(s)
                                                                                                                        $(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "200px") + "')" });
                                                                                                                        $(this).attr("id", s[0]);
                                                                                                                    },
                                                                                                                    lỗi: function () {
                                                                                                                        $(this).lỗi("Vui lòng thử lại.");
                                                                                                                    }
                                                                                                                }).each(function () {
                                                                                                                    var t = $(this),
                                                                                                                        b = config("bàiViết." + bv.i);
                                                                                                                    cl(b)
                                                                                                                    if (b.ả) {
                                                                                                                        cl(b.ả)
                                                                                                                        t.sửaLớp("-bgcfx");
                                                                                                                        t.css({ backgroundImage: "url('" + dữLiệu.ảnh(bv.i, "ế", "200px") + "')" });
                                                                                                                    } else {
                                                                                                                        t.append(
                                                                                                                            $("<div>", { class: "tl50 tt fs12 fs09-xs c6", text: "Chưa có ảnh" })
                                                                                                                        )
                                                                                                                    }
                                                                                                                })
                                                                                                            )
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pb15 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 pb3", text: "Danh mục ảnh bài viết:" }),
                                                                                                            $("<div>", { class: " w1 oxa oh wsn pa15 grid bss bcd bw1 bra3" }).each(function () {
                                                                                                                var t = $(this),
                                                                                                                    ds = bv.ộ.match(/(id=")+[0-9]+/g);
                                                                                                                ds1 = bv.ộ.match(/(src=")+[A-z0-9\:\/\-]+\.+[A-z]+\"/g);
                                                                                                                //cl(ds1);
                                                                                                                if (ds) {
                                                                                                                    ds.map(function (v, vt) {
                                                                                                                        var id = v.match(/[0-9]+/g);
                                                                                                                        t.append(
                                                                                                                            $("<div>", { class: "w30 pa5 vat", id: id }).append(
                                                                                                                                $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" })
                                                                                                                            ).on("click", function () {
                                                                                                                                var t = $(this),
                                                                                                                                    id = t.attr("id");
                                                                                                                                t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                $(".đạidiện").css({ backgroundImage: "url('" + dữLiệu.ảnh(id, "i", "200px") + "')" });
                                                                                                                                $(".đạidiện").attr("id", id);
                                                                                                                            })
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                                if (ds1) {
                                                                                                                    ds1.map(function (v, vt) {
                                                                                                                        var link = v.replace(/(src=")/g, "").replace(/(")/g, "");
                                                                                                                        cl(link)
                                                                                                                        t.append(
                                                                                                                            $("<div>", { class: "w30 pa5 vat" }).append(
                                                                                                                                $("<div>", { class: "pb43 w1 bgpc bgrn bgsc" }).css({ backgroundImage: "url('" + link + "')" })
                                                                                                                            ).on("click", function () {
                                                                                                                                var t = $(this),
                                                                                                                                    id = t.attr("id");
                                                                                                                                t.sửaLớp("bóng").siblings().sửaLớp("-bóng");
                                                                                                                                $(".đạidiện").css({ backgroundImage: "url('" + link + "')" });
                                                                                                                                $(".đạidiện").attr("id", link);
                                                                                                                            })
                                                                                                                        )
                                                                                                                    })
                                                                                                                }
                                                                                                            })
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Mô tả:" }),
                                                                                                            $("<input>", { class: "w70 bra3 ptb5 bss bcd bw1 môtả", type: "text", text: "" }).val(bv.ô)
                                                                                                        ),
                                                                                                        $("<div>", { class: "mt25 pl10 fs13 grid" }).append(
                                                                                                            $("<div>", { class: "mr15 w20", text: "Nội dung:" }),
                                                                                                            $("<div>", { class: "mt25 w1 bss bcd bw1 nd pnd" }).soạnThảo({
                                                                                                                cỡ: 15,
                                                                                                                html: true,
                                                                                                                sẵn: bv.ộ
                                                                                                            })
                                                                                                        ).each(function () {
                                                                                                            var lanh = $(this).find("img[id]"),
                                                                                                                tcanh = $(this).find("img");
                                                                                                            cl(tcanh)
                                                                                                            lanh.each(function () {
                                                                                                                var id = $(this).attr("id");
                                                                                                                if (id > 0) {
                                                                                                                    $(this).attr("src", dữLiệu.ảnh(id, "i", "500x"))
                                                                                                                }
                                                                                                                //$(vt).trigger("change")

                                                                                                            })
                                                                                                            tcanh.each(function () {
                                                                                                                $(this).sửaLớp("w1");
                                                                                                                $(this).attr("height", "auto");
                                                                                                            })
                                                                                                        }),
                                                                                                        $("<div>", { class: "tar" }).append(
                                                                                                            $("<div>", { class: "btn bra3 bg1 dib cf fs12 fs09-xs plr10 ptb7 mt25", text: "Sửa" }).on("click", function () {
                                                                                                                var t = $(this),
                                                                                                                    te = $(".tiêuđề").iVal(),
                                                                                                                    m = $(".môtả").iVal(),
                                                                                                                    n = $(".nd").iVal(),
                                                                                                                    anh = $(".đạidiện").attr("id"),
                                                                                                                    u = $(".hienurl").iVal(),
                                                                                                                    tt = $(".titlebài").iVal(),
                                                                                                                    muc = (cmuc == 4625 || cmuc == 4628 || cmuc == 4629) ? $(".chuyênMụcTin").iVal() : bv.ụ,
                                                                                                                    ngay = $(".ngaydang").iVal();
                                                                                                                cl(muc)
                                                                                                                if (te == "" || n == "") {
                                                                                                                    t.iMsg($("<div>", { class: "fwb crd fs11", text: "Mời nhập thông tin bài viết !" }))
                                                                                                                } else {
                                                                                                                    CẦN.db("bàiViết." + idBài, function (bài) {
                                                                                                                        t.xửLý("bàiViết.sửa." + idBài, { d: Je({ ả: anh, g: ghim, ó: tt, ê: te, ô: m, ộ: n, r: u, ấ: ngay, ụ: [muc] }) }, function (i) {
                                                                                                                            notice(
                                                                                                                                { t: "Đã cập nhật bài viết", loại: true }
                                                                                                                            );
                                                                                                                            t.closest("#khungThôngBáo").remove();
                                                                                                                        })
                                                                                                                    })
                                                                                                                }
                                                                                                            })
                                                                                                        )
                                                                                                    )
                                                                                                    , {
                                                                                                        thanh: false,
                                                                                                        trong: "col-md-6 col-sm-6 col-xs-11",
                                                                                                        viền: false,
                                                                                                        koTắt: true
                                                                                                    }
                                                                                                )
                                                                                            }),
                                                                                            $("<td>", { class: "fs1 bss bcd bw1 tac pa10 bấmĐc", icon: "delete" }).on("click", function () {
                                                                                                //nút xóa bài
                                                                                                var t = $(this);
                                                                                                t.iMsg($("<div>", { class: "" }).append(
                                                                                                    $("<div>", { class: "", text: "Bạn muốn xóa bài viết ?" }),
                                                                                                    $("<div>", { class: "pr pb249" }).append(
                                                                                                        $("<div>", { class: "bgcrd cf plr10 btn ptb5 bra3 pa t50 tty l0", text: "Không" }).on("click", function () {
                                                                                                            t.iMsg()
                                                                                                        }),
                                                                                                        $("<div>", { class: "bg1 cf plr10 ptb5 btn bra3 pa t50 tty r0", text: "Có" }).on("click", function () {
                                                                                                            CẦN.db("bàiViết." + bv.i, function (bài) {
                                                                                                                var a = config("bàiViết." + bv.i);
                                                                                                                xửLý("bàiViết.sửa", { d: Je([bv.i, "a", 1]) }, function (i) {
                                                                                                                    notice(
                                                                                                                        { t: "Đã xóa bài viết", loại: true }
                                                                                                                    )
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    )
                                                                                                )
                                                                                                    , 1)
                                                                                            })
                                                                                        )
                                                                                    )
                                                                                })
                                                                            })
                                                                            //})
                                                                            //})//Đóng CẦN
                                                                        })
                                                                    )
                                                                )//Thẻ đóng của phần 2
                                                            )
                                                        )
                                                        , {
                                                            viền: false,
                                                            thanh: false,
                                                            trong: "col-md-11 col-sm-11 col-xs-10 h1v bgcf fni"
                                                        }
                                                    )
                                                }).on("thôngBáo", function () {
                                                    //cl("tbt")
                                                    var t = $(this); dem = 0, xemluc = $.đệm("xemliênhệ");
                                                    xửLý("đốiTượng.tải.5a58844cf2b19d53bbbb6e5e8ccb3abb", function (a) {
                                                        CẦN.db("5a58844cf2b19d53bbbb6e5e8ccb3abb." + a, function () {
                                                            xửLý("bàiViết.bìnhLuậnChờ", function (bluan) {
                                                                a.map(function (v, i) {
                                                                    if (Jd(v["223206"]).u > xemluc) {
                                                                        dem += 1;
                                                                    }
                                                                    if (dem > 0) {
                                                                        t.sửaLớp("pr").append(
                                                                            $("<div>", { class: "bra50 pa pa5 fs08 crd r0 t50 tty mr10 lh1 bgcfx", text: dem })
                                                                        )
                                                                    }
                                                                })
                                                                if ((dem + bluan.length) > 0) {
                                                                    t.sửaLớp("pr").append(
                                                                        $("<div>", { class: "bra50 pa pa5 fs08 crd l1 b1 lh1 bgcfx", style: "bottom:50%", text: dem + bluan.length })
                                                                    )
                                                                }
                                                                //cl(dem,bluan.length)
                                                            })
                                                        })
                                                    })

                                                }).trigger("thôngBáo").on("mouseenter mouseleave", function (e) {
                                                    var dí = e.type == "mouseenter",
                                                        t = $(this);
                                                    if (dí) {
                                                        t.append(
                                                            $("<div>", { class: "pr t0 chúThích" }).append(
                                                                $("<div>", { class: "pa z3 b1 l50 ttx bgcf bra3 pa3 c1 bss bcd bw1 wsn", style: "font-size: 0.8em !important;font-weight: normal !important;line-height:normal !important", text: "Bảng quản trị" })
                                                            )
                                                        )
                                                    } else {
                                                        $(".chúThích").remove();
                                                    }
                                                }) : ""
                                                )
                                            )
                                        )
                                    )
                                )//Thẻ đóng của menu thường
                            )
                        })//Đóng của CẦN
                    }),

                    $("<div>", { id: "body", class: "bgcf" }),
                    $("<div>", { id: "footer", class: "pr bt1 bss bcd" + (dai > 700 ? "" : " pl10"), style: "" }).append(
                        $("<div>", { class: "pa w10 t0 l50 ttx mtb10 dn" }).append(
                            $("<img>", { class: "w1", src: "/img/logo_lhv.jpg" })
                        ),
                        $("<div>", { class: "pa l50 ttx dn", style: "width: 0;height: 0;border-left: 30px solid transparent;border-right: 30px solid transparent;border-top: 30px solid #51ab88a4;" }),

                        $("<div>", { class: "" }).append(
                            $("<div>", { class: "bgpt bgrn bgsc cb", style: "" }).css({ backgroundImage: "url('img/channen.jpg')" }).append(
                                // $("<div>",{class:"bg1 tac ptb7 cf fs13",text:"Công Viên Tâm Linh Lạc Hồng Viên"}),
                                $("<div>", { class: " c6 ptb50", style: "background:rgba(255,255,255,.8)" }).append(
                                    $("<div>", { class: "" + (dai > 700 ? "w85 mlra mb15 grid bss bb1 bcd" : "w1") }).append(
                                        $("<div>", { class: "w40 tac bss bcd br1 " + (dai > 700 ? "bss bcd br1 " : "dn") }).append(
                                            $("<div>", { class: "w30 mlra" }).append($("<img>", { class: "w1", src: "/img/logo_lhv.png" })),
                                            $("<div>", { class: "ttu fs13 mc1 pt10", style: "color:#7599e7", text: "lạc hồng viên" })
                                        ),
                                        $("<div>", { class: " " + (dai > 700 ? "plr25 w60" : "pt10 w1") }).append(
                                            $("<div>", { class: "fs11 ttu c6", text: "Đăng ký nhận tin" }),
                                            $("<div>", { class: "fs09 pt15 dn-xs", text: "Vui lòng nhập thông tin của bạn để nhận thông tin mới nhất từ chúng tôi" }),
                                            $("<div>", { class: "w1 df pt3 pb15" }).append(
                                                $("<input>", { class: "w60 bgcf bss bcd bw1 brtl5 brbl5 bgcyl emailnhan", placeholder: "Vui lòng nhập email" }),
                                                $("<div>", { class: "ptb10 plr15 bg1 cf ttu fs12 brbr5 brtr5 bấmĐc", text: "Đăng ký" }).on("click", function () {
                                                    //đăng ký tin
                                                    var e = $(".emailnhan").iVal();
                                                    xửLý("đốiTượng.tạo.5a58844cf2b19d53bbbb6e5e8ccb3abb", function (doituong) {
                                                        xửLý("thuộcTính.sửa.5a58844cf2b19d53bbbb6e5e8ccb3abb", { d: Je([doituong, { "220108": e, "220112": "Đăng ký nhận thông tin từ Lạc Hồng Viên" }]) },
                                                            function (them) {
                                                                if (them == 1) {
                                                                    notice({ t: "Đã gửi liên hệ của khách hàng", loại: true });
                                                                    $(".emailnhan").val("");
                                                                } else {
                                                                    notice({ t: "Kiểm tra lại thông tin nhập", loại: false })
                                                                }
                                                            }
                                                        )
                                                    })
                                                })
                                            )
                                        )
                                    ),
                                    $("<div>", { class: "w85 mlra grid df ", classM: ",-w85,w1,-df,-ptb50,ptb15" }).append(
                                        $("<div>", { class: "w40 pr10 vat tal bss bcd br1", classM: "-w40,w1,-bss,-bcd,-br1" }).append(
                                            $("<div>", { class: "  ttu mc1 lh1 " + (dai > 700 ? "fs15" : "fs12"), text: "Chủ đầu tư" }),
                                            $("<div>", { class: " mtb10 ttu fs11 fs09-xs mc1", text: " Công ty Cổ phần Đầu tư XD & TM Toàn Cầu" }),
                                            $("<div>", { class: " mtb10", classM: "fs08,-mtb10,mtb5", icon: "room::vam", text: "Trụ sở: Số 683 Lạc Long Quân - Phú Thượng - Tây Hồ - Hà Nội" }),
                                            $("<div>", { class: " mtb10 bb1 bcd bss pb25", classM: "-pb25,pb10", icon: "call::vam", text: "Điện thoại:(84-24) 3787 6468 / 3787 6968 - Fax: (84-24) 3787 6466" }),
                                            $("<div>", { class: "fs12 ttu mt25", classM: "fs09,-fs13,-mt25", text: "Đơn vị Quản lý, Khai thác và Dịch vụ" }),
                                            $("<div>", { class: " mtb10", classM: "fs08,-mtb10,mtb5", text: "Chi nhánh công ty CP đầu tư XD & TM TOÀN CẦU - LẠC HỒNG VIÊN" }),
                                            $("<div>", { class: " mtb10", classM: "fs08,-mtb10,mtb5", icon: "room::vam", text: "Địa chỉ: Thôn Tân Lập, xã Dân Hòa, huyện Kỳ Sơn, tỉnh Hòa Bình" })
                                        ),
                                        $("<div>", { class: "w60 pl10 vat tal", classM: "-w60,w1" }).append(
                                            $("<div>", { class: "grid" }).append(
                                                [
                                                    { t: "VĂN PHÒNG 34 GIANG VĂN MINH", d: "Tầng 4 tòa nhà SHB, Giang Văn Minh, Ba Đình, Hà Nội.", h: "Hotline: 0911 61 68 68", k: "KD: 0243.999.2688" },
                                                    { t: "VĂN PHÒNG 85 NGUYỄN DU", d: "Số 85 Nguyễn Du, Hai Bà Trưng, Hà Nội.", h: "Hotline : 0911 61 68 68", k: "KD: 0243.999.2688" },
                                                    { t: "VĂN PHÒNG NGUYỄN HOÀNG", d: "Số 35 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội.", h: "Hotline: 0911 61 68 68", k: "KD: 0243.999.2688" },
                                                    { t: "VĂN PHÒNG YÊN LÃNG", d: "Số 26 Yên Lãng, Láng Hạ, Đống Đa, Hà Nội.", h: "Hotline 0911 61 68 68", k: "KD: 0243.999.2688" }
                                                ].map(function (v, i) {
                                                    var t1 = v.d.split(",").map(function (e) {
                                                        return "<c class='dib'>" + e + "</c>";
                                                    }).join(", ");
                                                    return $("<div>", { class: "w50 plr10 mb15 vat", classM: "-w50,-plr25,-mb15,mb7" }).append(
                                                        $("<div>", { class: " fs1 mb5 c6", classM: "fs09,-fs13", text: v.t }),
                                                        $("<div>", { class: " mtb5", classM: "fs08", icon: "room::vam" }).html(t1),
                                                        $("<div>", { class: " mtb5", classM: "fs08", icon: "call::vam", text: v.h }),
                                                        $("<div>", { class: " pl10 mtb5", classM: "fs08", text: v.k })
                                                    );
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        $("<div>", { class: "tac ptb15 lh15 fs12 fs09-xs cf", classM: "fs1", text: "Trang thông tin chính thức của Lạc Hồng Viên" }).css({
                            "color": "#198244",
                            "background": "rgb(248, 248, 248)",
                        }),
                        $("<div>", { class: "tac ptb15 cf grid", classM: "fs09", style: "background:#6d6969", text: "" }).append(
                            $("<div>", { class: "", text: "Copyright © 2019 Lạc Hồng Viên. Bảo trợ bởi" }),
                            $("<a>", { class: "cf ml3 tduh", href: "https://inevn.com/", target: "_blank", text: "I&E Corp" })
                        )
                    )
                )//Ngoặc đóng của append cho $("#chua")

                //Thao tác gửi mail
                xửLý("đốiTượng.tải.5a58844cf2b19d53bbbb6e5e8ccb3abb", function (lienhe) {
                    var mangmail = [];
                    lienhe.map(function (v, vt) {
                        var cf = config("5a58844cf2b19d53bbbb6e5e8ccb3abb." + v)
                        mangmail.push(cf["220108"])
                    })
                })
                //////////////////////////////////////////////////////////////////////
                $(window).on("resize", function () { })

                $(".cap1").on("click", function () {
                    var t = $(this),
                        c = t.next().children().length;
                    c > 0 ? (d ? t.next().slideToggle("slow") : t.next().slideToggle("slow")) : $("#menu-dt").trigger("đóng");
                });
                $(".cap2").on("click", function () {
                    $("#menu-dt").trigger("đóng")
                });
                $('video').prop("muted", true);
                //xét fix cho menu
                $(window).on("scroll", function () {
                    if ($(window).scrollTop() >= 250) {
                        if (dai > 700) {
                            $(".dautrang").sửaLớp("-dn");
                        }
                        $("#menu").sửaLớp("-bss,-bb1,-bcd")
                    } else {
                        $(".dautrang").sửaLớp("dn");
                        $("#menu").sửaLớp("bss,bb1,bcd")
                    }
                    if ($(window).scrollTop() >= 10) {
                        $("#menu-dt1").sửaLớp("ps,t0,l0")
                    } else {
                        $("#menu-dt1").sửaLớp("-ps,-t0,-l0")
                    }
                });
                $.post("/function.php", { act: "hệThống" }, function (e) {
                    cl(e);
                }, 'json');
                vàoURL(name);
            })
        }
    })
});
            //Nhúng bảng
