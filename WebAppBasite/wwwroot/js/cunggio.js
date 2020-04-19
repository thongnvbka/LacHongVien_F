đồGiỗ = {
	all: function (O) {
		xửLý("đốiTượng.tải." + tblĐồGiỗ, function (data) {
			O(data);
		})
	},
	tên: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.157564');
	},
	ảnh: function (id) {
		var r = 0;
		var a = Jd(config(tblĐồGiỗ + '.' + id + '.157566'));
		if (a.ậ != ud) {
			r = a.ậ[0];
		}
		return r;
	},
	giá: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.157567');
	},
	loại: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.173020');
	}
};

function clb(z) {
	cl("Bằng đang con so le chấm log: ")
	cl(z)
}
function jdFromDate(dd, mm, yy) { // dổi từ date sang timeStamp
	var a, y, m, jd;
	a = Math.floor((14 - mm) / 12);
	y = yy + 4800 - a;
	m = mm + 12 * a - 3;
	jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
	if (jd < 2299161)
		jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
	return jd;
};
function jdToDate(jd) { // từ timeStamp sang date
	var a, b, c, d, e, m, day, month, year;
	if (jd > 2299160) { // After 5/10/1582, Gregorian calendar
		a = jd + 32044;
		b = Math.floor((4 * a + 3) / 146097);
		c = a - Math.floor((b * 146097) / 4);
	} else {
		b = 0;
		c = jd + 32082;
	}
	d = Math.floor((4 * c + 3) / 1461);
	e = c - Math.floor((1461 * d) / 4);
	m = Math.floor((5 * e + 2) / 153);
	day = e - Math.floor((153 * m + 2) / 5) + 1;
	month = m + 3 - 12 * Math.floor(m / 10);
	year = b * 100 + d - 4800 + Math.floor(m / 10);
	return new Array(day, month, year);
};
function getNewMoonDay(k, timeZone) {
	var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
	T = k / 1236.85; // Time in Julian centuries from 1900 January 0.5
	T2 = T * T;
	T3 = T2 * T;
	dr = PI / 180;
	Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
	Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
	M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
	Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
	F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
	C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
	C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
	C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
	C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
	C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
	C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
	C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
	if (T < -11) {
		deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
	} else {
		deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
	};
	JdNew = Jd1 + C1 - deltat;
	return Math.floor(JdNew + 0.5 + timeZone / 24)
};
function getSunLongitude(jdn, timeZone) {
	var T, T2, dr, M, L0, DL, L;
	T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T * T;
	dr = PI / 180; // degree to radian
	M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
	DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
	DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
	L = L0 + DL; // true longitude, degree
	L = L * dr;
	L = L - PI * 2 * (Math.floor(L / (PI * 2))); // Normalize to (0, 2*PI)
	return Math.floor(L / PI * 6)
};
function getLunarMonth11(yy, timeZone) {
	var k, off, nm, sunLong;
	off = jdFromDate(31, 12, yy) - 2415021;
	k = Math.floor(off / 29.530588853);
	nm = getNewMoonDay(k, timeZone);
	sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
	if (sunLong >= 9)
		nm = getNewMoonDay(k - 1, timeZone);
	return nm;
};
function getLeapMonthOffset(a11, timeZone) {
	var k, last, arc, i;
	k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
	last = 0;
	i = 1; // We start with the month following lunar month 11
	arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
	do {
		last = arc;
		i++;
		arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
	} while (arc != last && i < 14);
	return i - 1;
};
function âmLịch(dd, mm, yy, timeZone) {
	var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
	dayNumber = jdFromDate(dd, mm, yy);
	k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
	monthStart = getNewMoonDay(k + 1, timeZone);
	if (monthStart > dayNumber) {
		monthStart = getNewMoonDay(k, timeZone);
	}
	a11 = getLunarMonth11(yy, timeZone);
	b11 = a11;
	if (a11 >= monthStart) {
		lunarYear = yy;
		a11 = getLunarMonth11(yy - 1, timeZone);
	} else {
		lunarYear = yy + 1;
		b11 = getLunarMonth11(yy + 1, timeZone);
	}
	lunarDay = dayNumber - monthStart + 1;
	diff = Math.floor((monthStart - a11) / 29);
	lunarLeap = 0;
	lunarMonth = diff + 11;
	if (b11 - a11 > 365) {
		leapMonthDiff = getLeapMonthOffset(a11, timeZone);
		if (diff >= leapMonthDiff) {
			lunarMonth = diff + 10;
			if (diff == leapMonthDiff) {
				lunarLeap = 1;
			}
		}
	}
	if (lunarMonth > 12) {
		lunarMonth = lunarMonth - 12;
	}
	if (lunarMonth >= 11 && diff < 4) {
		lunarYear -= 1;
	}
	return [lunarDay, lunarMonth, lunarYear];
};
function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap, timeZone) {
	var k, a11, b11, off, leapOff, leapMonth, monthStart;
	if (lunarMonth < 11) {
		a11 = getLunarMonth11(lunarYear - 1, timeZone);
		b11 = getLunarMonth11(lunarYear, timeZone);
	} else {
		a11 = getLunarMonth11(lunarYear, timeZone);
		b11 = getLunarMonth11(lunarYear + 1, timeZone);
	}
	off = lunarMonth - 11;
	if (off < 0) {
		off += 12;
	}
	if (b11 - a11 > 365) {
		leapOff = getLeapMonthOffset(a11, timeZone);
		leapMonth = leapOff - 2;
		if (leapMonth < 0) {
			leapMonth += 12;
		}
		if (lunarLeap != 0 && lunarMonth != leapMonth) {
			return new Array(0, 0, 0);
		} else if (lunarLeap != 0 || off >= leapOff) {
			off += 1;
		}
	}
	k = Math.floor(0.5 + (a11 - 2415021.076998695) / 29.530588853);
	monthStart = getNewMoonDay(k + off, timeZone);
	return jdToDate(monthStart + lunarDay - 1)
};
function lửa() {
	$(".khungPhòngThờ").append(
		$("<img>", { class: "pa t0 l0 w1 z1 pen o0 lửalư pen", src: "img/lua4.gif" }).css({
			Transition: "3s"
		})
	)
	setTimeout(function () {
		$(".lửalư").sửaLớp("-o0,o1")
	}, 100)
	setTimeout(function () {
		$(".lửalư").sửaLớp("-o1,o0")
		$(".khungPhòngThờ").append(
			$("<img>", { class: "pa t0 l0 w1 z1 pen o0 khóilư pen", src: "img/khoi4.gif" }).css({
				Transition: "4s"
			})
		)
		setTimeout(function () {
			$(".khóilư").sửaLớp("-o0,o1")
		}, 100)
	}, 10000)

	// b.empty().append(
	// 	(o ? e : $(e)).css({
	// 		position: "absolute",
	// 		zIndex: "0",
	// 		width: "100px",
	// 		height: "100px",
	// 		left: "50%",
	// 		top: "50%"
	// 	}).sửaLớp("o05,ttx")
	// );
	// $(".chứaĐốt").css({
	// 	height: "auto"
	// });
	// chờ(function () {
	// 	$(".chứaKhói").css({
	// 		opacity: ".8"
	// 	});
	// }, 4500);
	// chờ(function () {
	// 	(o ? e : $(e)).find(".sẽTo").css({
	// 		backgroundImage: "url('img/tro-tan.png')",
	// 		backgroundPosition: "initial",
	// 		backgroundSize: "cover"
	// 	});
	// 	$(".chứaKhói").css({
	// 		opacity: ".5"
	// 	});
	// 	$(".chứaĐốt").css({
	// 		height: "100px"
	// 	});
	// }, 8000);
	// (o ? e : $(e)).remove();
}
mâm = {
	tạoHương: function (xoay, i) {
		// return $("<div>",{ class:"pa hươngNha o0" }).css({
		// 	height:"190%",
		// 	width:"7%",
		// 	top:"-171%",
		// 	left:["20%","45%","70%"][i],
		// 	transition:"top 2s,left 2s,opacity 2s",
		// 	transitionDelay:["1s","0","1.3s"][i],
		// }).append(
		// 	$("<div>",{ class:"pa l50 b0 ttx h1 w50 que cóHiệuỨng" }).css({
		// 		backgroundColor:"#800000"
		// 	}),
		// 	$("<div>",{ class:"pa l0 z3 w1 bra3 vỏNgoài cóHiệuỨng" }).css({
		// 		backgroundColor:"#997c3a",
		// 		height:"70%",
		// 		bottom:"30%"
		// 	}).append(
		// 		$("<div>",{ class:"pr wh1" }).append(
		// 			$("<div>",{ class:"đốtCháy pa t0 l0 w1" }).css({
		// 				borderTopLeftRadius:"4px",
		// 				// overflow:"hidden"
		// 			}).append(
		// 				$("<div>",{ class:"pr" }).append(
		// 					$("<div>",{ class:"khóiNha pa l50 ttx b1 o05" }).append(
		// 						$("<div>",{ class:"h1 bgsc bgrn" }).css({
		// 							backgroundImage:"url('"+plink+"img/khoi-dong.png')",
		// 							backgroundPosition:0,
		// 							width:168/6,
		// 							height:691/6,
		// 						})
		// 					),
		// 					$("<div>",{ class:"màuĐỏ" }).css({
		// 						background:"linear-gradient(267deg, rgba(138,8,29,1) 0%, rgba(130,126,126,0.9864320728291317) 100%)",
		// 						height:"2px",
		// 						animationName:"màuĐỏ",
		// 						animationDuration:"20s"
		// 					}),
		// 					$("<div>",{ class:"màuĐen" }).css({
		// 						height:"3px",
		// 						background:"linear-gradient(0deg, rgba(6,1,2,1) 0%, rgba(130,126,126,0.9864320728291317) 100%)",
		// 						animationName:"màuĐen",
		// 						animationDuration:"20s"
		// 					})
		// 				)
		// 			)
		// 		)
		// 	)
		// Tạm Comment

		// $("<div>",{ class:"pa l50 h70 z1 t0 ttx bra5" }).css({
		// 	height:"70%",
		// 	width:"5px"
		// }).append(
		// 	range(0,9).map(function(v,i){
		// 		return $("<div>",{ class:"w1 tànHương o1" }).css({
		// 			backgroundColor:"#bfab93",
		// 			height:"10%",
		// 			transition:"opacity 6s"
		// 		})
		// 	})
		// )
		// )

	},

};
$.extend($.fn, {
	hiệnKếtQủa(O) {
		var x = (this),
			ạ = $(".chứaDanhSách"),
			o = $.extend({
				data: [],
				ngàyÂm: true,
				sl: 7
			}, O),
			t = now(),
			è = o.ngàyÂm,
			lớp = "";
		ạ.sửaLớp("-h1");
		if (!empty(o.data)) {
			var tháng = è[1],
				năm = è[2];
			è1 = è[0] + o.sl;
			if (è1 > 30) {
				è1 = è1 - 30 + 1;
				tháng = è[1] + 1;
				if (è[1] > 12) {
					tháng = 1;
					năm = è[2] + 1;
				}
			}
			// ngày dương
			var td = t.N,
				nd = t.J,
				nămD = t.f;
			n1 = nd + o.sl;
			if (n1 > 30) {
				n1 = n1 - 30 + 1;
				td = td + 1;
				if (td > 12) {
					nămD = nămD + 1;
				}
			}
			if (x.parent().is(":hidden")) {
				x.parent().fadeIn().động("slideInUp", 345);
				ạ.sửaLớp("w1,-pa,-l50,-t50,-tt,-w70");
			}
			x.empty().chờ(function () {
				$(this).css({
					height: $('html').outerHeight() * 75 / 100,//window.outerHeight - ạ.outerHeight() - 30,
					//overflowY: "auto"
				}).append(
					$("<div>", { class: "pa r0 t0 pa10 bgcf bấmĐc cl1 fs12 z5 bấmTắtKếtQủa", icon: "close::vam,tac,lh-1" }),
					// kq(o.data, "Danh sách ngày giỗ từ " + nd + "/" + t.N + "/" + t.f + " đến " + n1 + "/" + td + "/" + nămD + " (" + è[0] + "/" + è[1] + "/" + è[2] + " - " + è1 + "/" + tháng + "/" + năm + " - Âm lịch)" + " tới")
					kq(o.data, "<div>Danh sách ngày giỗ từ " + è[0] + "/" + è[1] + "/" + è[2] + " - " + è1 + "/" + tháng + "/" + năm + " - Âm lịch </br> <span Class='fs06 fsi'>tức " + nd + "/" + t.N + "/" + t.f + " đến " + n1 + "/" + td + "/" + nămD + " - Dương lịch</span></div>")
				).động("slideInUp", 345);
				$(".phântrang").children(":first").trigger("click")
			}, 100)
		}

	},
	//hàm di chuyển sản sảnPhẩm
	DiDi: function (o) {
		var x = $(this),
			o = $.extend({
				ảnh: false,
				động: "fadeIn",
				kTạo: false,
				chọn: true,
				loại: true,
				data: undefined
			}, o),
			c = o.chọn - 1,
			div;
		x.draggable({
			start: function (e) {
				$(".remove").fadeIn(300);
			},
			stop: function (e) {
				$(".remove").fadeOut(300);
				var of = e.clientX,
					left = (là("M") ? e.pageX : of) - e.offsetX,
					width = $(e.target).width(),
					ofh = e.clientY,
					top1 = (là("M") ? e.pageY : ofh) - e.offsetY,
					é,
					hóaVàng,
					loại = o.data.loại
				height1 = $(e.target).height();
				thêmVào = function (t, è, tag) {
					var c = t.find(loại == "vàngMã" ? ".đồVàngMã" : ".checkSp");
					if (c.length)
						$(tag.target).parent(".chứaĐồ").append(c)
					t.append(
						$(tag.target).sửaLớp("koTạo").css({
							top: "50%",
							left: "50%",
							border: "none",
							transform: "translate(-50%,-50%)",
						})
					)
				};
				if (o.data.loại == "vàng mã") {
					var b = $(".đútVàngMã"),
						of = b.offset(),
						bleft = of.left,
						btop = of.top;
					console.log('b: ', b);
					if ((top1 + (height1 / 2) > btop && top1 < (btop + b.height() + 5))) {
						if (left > bleft && left < bleft + b.width()) {
							lửa();
							hóaVàng = 1;
						}
					}
				};
				if (!hóaVàng) {
					$(".chứaĐồ").each(function () {
						var i = $(this),
							s = 0,
							left1 = i.offset().left,
							width1 = i.width(),
							m,
							// phần height
							top = i.offset().top,
							height = i.height(),
							// của thắng cha nó
							b = i.parents(".sẽCopy"),
							l = b.offset().left,
							t = b.offset().top;

						if (left + (width / 2) < l || left > l + b.width() || top1 + (height1 / 2) < t || t > (top1 + height1)) {
							// //Đây là đoạn lôi ra khỏi bàn
							$(e.target).fadeOut(function () {
								var id = $(this).ID(),
									tb = $(".danhsáchhàng");
								if (tb.length) {
									var tr = tb.find("tr[id='" + id + "']"),
										sl = tr.find(".sốlượng").text() * 1;
									if (sl > 1) {
										tr.find(".giảm").trigger("click");
									} else {
										tr.remove();
										$(".chứaRỏHàng").tổngTiền();
										đệmGiỏ($(".danhsáchhàng"));
									}
								}
								if (o.data.loại != "vàng mã") {
									var bố = $(this).parents(".bỏViền"),
										length = $(".bỏViền").length;
									bố.remove();
									if (length > 12 && length % 2 == 0) {
										$(".bỏViền").css({
											width: 100 / (length / 2) + "%"
										})
									}
								}
							})
						} else {
							if ((top1 > top && top1 < top + (height1 / 2)) || (Math.abs(top - top1) < height / 2)) {
								if (left + (width1 / 2) > left1 || left >= left1) {
									if (left + (width1 / 2) - left1 < 100 || left < left1 + (width1 / 2))
										m = i;
								}
								if (m)
									thêmVào(m, s, e);
							}
						}
					});
				}
			}
		});
		// O (offset)
		// 1 (Thằng được di chuyển)
		// 2 (Thằng chứa đồ)
		// đầu tiên kiểm tra O-Top sau đó kiểm tra O-Left
		// Đầu tiên sẽ chia thành 2 trường hợp 1 là O-top của thằng 1 sẽ nằm trên 1 nửa của thằng 2 hoặc là nằm dưới 1 nửa của thằng 2
		// vì chiều cao của thằng 2 lớp hơn thằng 1 nên ở trường hợp 1 thằng 1 sẽ phải + thêm hiệu số height giữa 2 thằng để loại bỏ sai số
		return x;
	},
	tog: function () {
		var x = $(this);
	},
	tìmKiếm: function (o) {
		var o = $.extend({
			loại: false,
			gợiÝ: false,
			pl: "Nhập dữ liệu",
			giaoDiện: false,
			kếtQủa: false
		}, o),
			x = $(this),
			i,
			h,
			chứa = o.kếtQủa;
		x[là("M") ? "show" : "empty"]().append(
			$("<div>", { class: "cb pr" }).append(
				$("<div>", { class: "pr" }).append(
					$("<div>", { class: "grid pr cb", classM: "ptb15" }).append(
						i = o.loại == "vịTrí" ? $("<div>", { class: "col-md-11 df col-xs-12", classM: "-df" }).append(
							range(0, 3).map(function (v, i) {
								return $("<div>", { class: " w25 plr10 inputVịTrí", classM: "mtb10,-w25,w1" }).append(
									$(!i ? "<div>" : "<input>", { class: "bss bw1 on bgcf tìmMộ bcd bra5 pr z7 pa10 lh1 w1 bsi", classM: "-pl0", id: "tìmMộ", placeholder: ["Chọn đồi", "Nhập khu", "Nhập dãy", "Nhập lô"][i], loại: o.loại, id: ["đồi", "khu", "dãy", "lô"][i] }).each(function () {
										if (!i) {
											$(this).sổ(
												["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"].map(function (é) {
													return { chữ: é, giáTrị: é }
												}),
												{
													nhãn: "Chọn đồi"
												}
											)
										}
									})
								)
							})
						) : o.loại == "ngàyMất" ? $("<div>", { class: "col-md-11 col-xs-12", classM: "-df" }).append(
							$("<div>", { class: "df jcsb" }).append(
								["Ngày", "Tháng"].map(function (v) {
									return $("<input>", { class: "bss bw1 on bgcf tìmMộ mlr5 bcd bra5 pr z7 pr25 w45 ptb10 lh1 bsi", id: v.toID(), placeholder: v + (v == "Ngày" ? " (Ví dụ: 12)" : " (Ví dụ: 8)") });
								})
							),
							$("<div>", { class: "fs08 lh1 ptb10 cf", text: "Lưu ý:", z: "Tìm kiếm theo ngày tháng âm lịch." })
						) : $("<input>", { class: "bss bw1 on bgcf tìmMộ bcd bra5 pr z7 pr25 ptb10 lh1 col-md-11 col-xs-10 bsi", classM: "-pl0", id: "tìmMộ", placeholder: o.pl, loại: o.loại }),
						$("<div>", { class: " grid tac pl10 col-md-1 col-xs-2" }).append(
							$("<div>", { class: "ptb10 w1 bg1 cf fwb bra5 bấmĐc bóngh lh1 nútBấmSearch fs13", classM: "plr10,-fs13,fs12", icon: "search::tac" })
						)
					),
					h = $("<div>", { class: "hiệnCácThứ pa t1 l0 w1 z7 tal" })
				)
			)
		);
		if (o.gợiÝ) {
			// i.chờKhóa("keyup", function (e) {
			// 	var ị = $(this);
			// 	if (!inArray(e.which, [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19, 45, 46, 36, 33, 34, 35, 37, 38, 39, 40, 91, 17, 9, 13])) {
			// 		var t = ị.iVal();
			// 		if (t) {
			// 			!$ost("/xu_ly.php", { action: "timkiem", keytim: t }, function (rel) {
			// 				if (rel) {
			// 					dữL = rel;
			// 					$("body").append(
			// 						!$(".nềnChèn").length ? $("<div>", { class: "nềnChèn pa l0 t0 wh1 z5" }) : ud
			// 					);
			// 					h.empty().append(
			// 						$("<div>", { class: "oh pb10 z7 bgcf w1 cb bóng chứaGợiÝ" }).append(
			// 							$("<div>", { class: "" }).css({
			// 								maxHeight: "500px"
			// 							}).append(
			// 								$("<div>", { class: "ptb10 bgcd cl1 pa10 fs09 pr", text: "Gợi ý tìm kiếm" }).append(
			// 									$("<div>", { class: "pa r0 t50 tt mr10 bấmĐc đóngSearch", icon: "close::vam,tac,lh1" }).click(function () {
			// 										$(".nềnChèn").trigger("click");
			// 									})
			// 								),
			// 								$("<div>", { class: "rỗngChờ oh oya" }).css({
			// 									height: 450
			// 								}).append(
			// 									rel.map(function (v, i) {
			// 										if (i < 8) {
			// 											return $("<a>", { class: "pa10 bsdo bb1 bcd bgc01h db tal", href: "/" + v.hotenchanlinh.toURL() + ".k" + v.id + ".html" }).append(
			// 												$("<div>", { class: "fs11 fwb cl1h tduh", text: v.hotenchanlinh }),
			// 												$("<div>", { text: "Ngày giỗ: ", z: v.ngaymatam, class: "ptb10 fs09 fwb" })
			// 											);
			// 										}
			// 									}),
			// 									rel.length > 8 ? $("<div>", { class: "ptb10 bgcf cl1 fs09 fwb tac", text: "Hiển thị thêm kết quả" }).click(function () {
			// 										var x = $(this);
			// 										x.sửaLớp("vôHiệu");
			// 										khung(
			// 											$("<div>", { class: "bgcf" }).append(
			// 												$("<div>", { class: "pa10 fwb cl1", text: "Kết quả tìm kiếm: " }),
			// 												$("<div>", { class: "" }).append(
			// 													rel.map(function (v, i) {
			// 														return $("<a>", { class: "pa10 bsdo bb1 bcd bgc01h db tal", href: "/" + v.hotenchanlinh.toURL() + ".k" + v.id + ".html" }).append(
			// 															$("<div>", { class: "fs11 fwb cl1h tduh", text: v.hotenchanlinh }),
			// 															$("<div>", { text: "Ngày giỗ: ", z: v.ngaymatam, class: "ptb10 fs09 fwb" })
			// 														);
			// 													})
			// 												)
			// 											), {
			// 											trong: "col-md-6 col-xs-12",
			// 											viền: false,
			// 											động: "fadeIn",
			// 											thanh: false,
			// 											onHide: function () {
			// 												x.sửaLớp("-vôHiệu");
			// 											}
			// 										}
			// 										);
			// 									}) : ud
			// 								)
			// 							)
			// 						)
			// 					);
			// 				} else {
			// 					$(".nềnChèn").trigger("click");
			// 				}
			// 			}, 'json');
			// 		} else {
			// 			$(".nềnChèn").trigger("click");
			// 		}
			// 	}
			// }, 100);
		}
		xửLý("đốiTượng.tải.85a06270ffdb31728ad4dd341891d457", function (data) {
			CẦN.db("85a06270ffdb31728ad4dd341891d457." + data, function (r) {
				x.on("click", ".nútBấmSearch", function () {

					var à = $(this),
						chữ = 0,
						chữ1 = "";
					à.iMsg($("<div>", { class: "wh50 bgpc bgsc bgrn" }).css({
						backgroundImage: "url(img/loading.gif)"
					}), 1);
					if (x.find(".inputVịTrí").length) {
						chữ = {};
						var á = 0;
						// 18 - 22 - D8 - đồi Kim
						x.find("input").each(function (v) {
							var x = $(this),
								id = x.attr("id");
							chữ[id] = x.iVal() || '';
						})
					} else {
						chữ = x.find("input").iVal();
					}
					var họTên = $("#tìmMộ").val(),
						ngày = $("#ngày").val(),
						tháng = $("#tháng").val(),
						năm = $("#năm").val(),
						đồi = $("#đồi").html() ? $("#đồi").html().slice($("#đồi").html().search("</o>") + 4) : ud,
						khu = $("#khu").val(),
						dãy = $("#dãy").val(),
						lô = $("#lô").val();
					if (họTên || ngày || tháng || năm || đồi || khu || dãy || lô) {
						switch (o.loại) {
							case "ngàyMất":
								ngày = ((ngày.length == 1) ? "0" + ngày : ngày);
								tháng = (tháng.length == 1) ? "0" + tháng : tháng;

								var chữngày = (ngày == "") ? "" : " Ngày " + ngày,
									chữtháng = (tháng == "") ? "" : " Tháng " + tháng,
									// chữnăm = (năm == "") ? "" : " Năm " + năm;
									chữ = chữngày + chữtháng;
								break;
							case "vịTrí":
								var chữđồi = (đồi == "") ? "" : " Đồi " + đồi,
									chữkhu = (khu == "") ? "" : " Khu " + khu,
									chữdãy = (dãy == "") ? "" : " Dãy " + dãy,
									chữlô = (lô == "") ? "" : " Lô " + lô,
									chữ = chữđồi + chữkhu + chữdãy + chữlô;
								break;
							case "họTên":
								chữ = họTên;
								break;
						}
						var e = [];
						$.map(data, function (dòng, i) {
							var dL = config("85a06270ffdb31728ad4dd341891d457." + dòng);
							switch (o.loại) {
								case "họTên":
									//xóa dấu
									function xóaDấu(z) {
										var str = z;
										str = str.toLowerCase();
										str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
										str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
										str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
										str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
										str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
										str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
										str = str.replace(/đ/g, "d");
										str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
										str = str.replace(/ + /g, " ");
										str = str.trim();
										return str;
									}
									if (họTên.length > 0 && xóaDấu(dL[226491]).search(xóaDấu(họTên)) > -1) {
										e.push(dL)
									}
									break;
								case "ngàyMất":
									var dktổng = ngày || tháng;
									if (dktổng) {
										var dkngày = ngày.length > 0 ? (dL[226496].search(ngày) >= 0 && dL[226496].search(ngày) <= 1) : true,
											dktháng = tháng.length > 0 ? (dL[226496].search(tháng) >= 3 && dL[226496].search(tháng) <= 4) : true;
										if (dkngày && dktháng) {
											e.push(dL)
										}
									}
									break;
								case "vịTrí":
									var dktổng = lô || dãy || khu || đồi;
									if (dktổng) {
										dãy = (dãy == "1" ? "I" : dãy),
											dãy = (dãy == "2" ? "II" : dãy),
											dãy = (dãy == "3" ? "III" : dãy),
											dãy = (dãy == "4" ? "IV" : dãy),
											dãy = (dãy == "5" ? "V" : dãy),
											dãy = (dãy == "6" ? "VI" : dãy),
											dãy = (dãy == "7" ? "VII" : dãy),
											dãy = (dãy == "8" ? "VIII" : dãy),
											dãy = (dãy == "9" ? "IX" : dãy),
											dãy = (dãy == "19" ? "X" : dãy),
											dãy = (dãy == "11" ? "XI" : dãy),
											dãy = (dãy == "12" ? "XII" : dãy);
										var tìmlô = (lô != '' || ud || null) ? (dL[226498].toLowerCase().search(lô.toLowerCase()) > -1) : true,
											tìmdãy = (dãy != '' || ud || null) ? (dL[226499].toLowerCase().search(dãy.toLowerCase())) > -1 : true,
											tìmkhu = (khu != '' || ud || null) ? (dL[226500].toLowerCase().search(khu.toLowerCase())) > -1 : true,
											tìmđồi = (đồi != '' || ud || null) ? (dL[226501].toLowerCase().search(đồi.toLowerCase())) > -1 : true;
										if (dktổng && tìmlô && tìmdãy && tìmkhu && tìmđồi) {
											e.push(dL)
										}
									}
									break;
							}
						})
						if (e) {
							$(".kếtQủaTìmKiếm").css({
								"display": "block",
								//"height": "100%",
							});
							à.iMsg();
							var á = $(".chứaDanhSách"),
								ạ = $(".chứaTìmKiếm");
							if (chứa) {
								á.sửaLớp("-h1");
								chứa.empty().chờ(function () {
									$(this).css({
										height: window.outerHeight - á.outerHeight() - 70,
										overflowY: "auto"
									}).append(
										$("<div>", { class: "pa r0 t0 pa10 bgcf z9 bấmĐc cl1 fs12 bấmTắtKếtQủa ta5", icon: "close::vam,tac,lh-1" }),
										kq(e, "Kết quả tìm kiếm cho: " + chữ)
									).động("slideInUp", 345);
									$(".phântrang").children(":first").trigger("click")
								}, 100)
								ạ.sửaLớp("w1,-pa,-l50,-t50,-tt,-w80,-plr10,o0,-o1");
							} else {
								var k = khung(
									$("<div>", { classM: "pb15" }).append(
										kq(e, "Kết quả tìm kiếm cho: " + chữ)
									), {
									trong: "col-md-6 col-xs-12",
									viền: false,
								}
								)
								$(".phântrang").children(":first").trigger("click")
							}
						} else {
							à.iMsg("Không Tìm thấy dữ liệu")
						}
						// !$ost("/xu_ly.php", { action: "timkiem", loại: o.loại, chữ: chữ }, function (e) {
						// 	if (e) {
						// 		à.iMsg();
						// 		var á = $(".chứaDanhSách"),
						// 			ạ = $(".chứaTìmKiếm");
						// 		if (o.loại == "vịTrí") {
						// 			chữ = "Lô " + $("#lô").val() + " - dãy " + $("#dãy").val() + " - khu " + $("#khu").val() + " - Đồi " + $("#đồi").html().slice($("#đồi").html().search("</o>") + 4);
						// 		}
						// 		if (chứa) {
						// 			á.sửaLớp("-h1");
						// 			chứa.empty().chờ(function () {
						// 				$(this).css({
						// 					height: window.outerHeight - á.outerHeight() - 70,
						// 					overflowY: "auto"
						// 				}).append(
						// 					$("<div>", { class: "pa r0 t0 pa10 bgcf z9 bấmĐc cl1 fs12 bấmTắtKếtQủa", icon: "close::vam,tac,lh-1" }),
						// 					kq(e, "Kết quả tìm kiếm cho: " + chữ)
						// 				).động("slideInUp", 345);
						// 			}, 100)
						// 			ạ.sửaLớp("w1,-pa,-l50,-t50,-tt,-w80,-plr10");
						// 		} else {
						// 			var k = khung(
						// 				$("<div>", { classM: "pb15" }).append(
						// 					kq(e, "Kết quả tìm kiếm cho: " + chữ)
						// 				), {
						// 				trong: "col-md-6 col-xs-12",

						// 				viền: false,
						// 			}
						// 			)
						// 		}
						// 	} else {
						// 		à.iMsg("Không Tìm thấy dữ liệu")
						// 	}
						// }, 'json');
					} else {
						return $(this).iMsg("Vui lòng nhập nội dung tìm kếm");
					}

				});
			})
		})
		///.///./././././//./././!!

		i.focus(function () {
			if (o.gợiÝ) {
				if ($(".chứaGợiÝ").length) {
					$("body").append(
						!$(".nềnChèn").length ? $("<div>", { class: "nềnChèn pa l0 t0 wh1 z5" }) : ud
					);
					$(".chứaGợiÝ").show();
				}
			}
			$(".xóaValue").sửaLớp("-o0,o1");
			if (chứa) {
				var ạ = $(".chứaDanhSách"),
					bố = chứa.parent();
				if (bố.is(":hidden")) {
					// bố.fadeIn().động("slideInUp", 345);
					// ạ.sửaLớp("-h1").children().sửaLớp("-pa,-l50,-t50,-tt,-w80,-plr10");
				}
			}
		}).keypress(function (e) {
			if (e.which == 13) {
				$(".nútBấmSearch").trigger("click");
			}
		});
		return x;
	},
	tổngTiền: function () {
		var x = $(this).find("tr"),
			v = $(".tổngtiền"),
			số = 0;
		cl($(this))
		x.each(function () {
			var a = $(this);
			if (a.ID() * 1 > 0) {
				var giá = bỏPhẩy(a.find(".thànhtiền").text()) * 1;
				số += giá;
			}
		});
		if (số * 1 > 0) {
			$(".khôngCóSp").fadeOut(345, function () {
				$(this).remove()
			});
			v.text(phẩy(số))
		} else {
			v.text(0)
			// $(".chứaRỏHàng").append(
			// 	$("<div>",{ class:"pa l50 t50 tt z9 tac khôngCóSp" }).append(
			// 		$("<img>",{ class:"mb15 o08", width:"100px", src:plink+"img/no-pr.png" }),
			// 		$("<div>",{ class:"fs3 wsn lh1 shine ", text:"Không có sản phẩm" }).css({
			// 			color:"#d0c5c5"
			// 		})
			// 	)
			// )
		}
		return $(this);
	},
	cắmHoa: function () {
		var x = $(this),
			d = x.data(),
			l = x.clone(),
			width1 = x.outerWidth(),
			height1 = x.outerHeight(),
			left = x.offset().left,
			tìmThẻ = function () {
				var x = $(".chứaHoa1").find(".checkSp"),
					l = x.length,
					r = 0;
				// return $(".chứaHoa" + (l < 8 ? "1" : "")).find("#ô90").children(".chứaĐồ");       từng bên 1
				return $(".chứaHoa1").find("#ô90").children(".chứaĐồ");

			},
			top = x.offset().top;
		$(".listSp").sửaLớp("vôHiệu");
		l.sửaLớp("-listSp").css({
			transition: "left .7s,top .7s,width 1.3s,height 1.3s",
		});
		chờ(function () {
			var t1 = tìmThẻ();
			if (t1) {
				$(".thắpHương").animate({
					scrollTop: 0
				}, function () {
					var vừaBấm = x.ID();
					l.find(".sẽTo").replaceWith($("<img>", { src: d.hiện, width: "250px" }));
					l.children().sửaLớp("-bss,bw1,bcd");
					l.find(".chèn").remove();
					l.find(".oh").sửaLớp("-oh");
					l.find(".cầnBỏ").sửaLớp("dn");
					l.find(".zoom").sửaLớp("-zoom,-pb249,wh1");
					x.parent().append(
						l.sửaLớp("-col-md-4,-col-sm-6,-col-xs-12,-z15,sẽBay,-pa5").css({
							position: "fixed",
							zIndex: "9",
							width: width1,
							height: height1,
							left: left,
							top: top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0)
						})
					);
					var t1_top = t1.offset().top,
						t1_left = t1.offset().left;
					t1_top = t1_top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0);
					chờ(function () {
						$(".sẽBay").css({
							left: t1_left,
							top: t1_top - l.find("img").height() + "px",
							width: là("M") ? 0 : "700px",
							height: là("M") ? 0 : "100px"
						});
					}, 100);
					var chia = Math.floor(l.find("img").height() / 10),
						rỏHàng = $(".chứaRỏHàng").find("table"),
						zIndex = chia > 15 ? 14 : 14;
					chờ(function () {
						if ($(".sẽBay").offset().top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0) - 5 < t1_top) {
							$(".sẽBay").find(".pb169").sửaLớp("-pb169,h1,-pb1");
							t1.append(
								$(".sẽBay").css({
									position: "absolute",
									left: 0,
									top: "auto",
									bottom: "100%",
									marginBottom: "-68%", //chiều cao của hoa ở đây
									marginLeft: "-95%",
									transition: "none",
									height: "auto",
									width: "300%",
									zIndex: zIndex
								}).sửaLớp("-sẽBay")
							);
							$(".listSp").sửaLớp("-vôHiệu");
							return false;
						}
					}, 100, "chạy", true);
				});
			}
		}, 200);
		return x;
	},
	//Hóa vàng chắc là ở đây
	vàngMã: function () {
		var x = $(this),
			d = x.data(),
			l = x.clone(),
			width1 = x.outerWidth(),
			height1 = x.outerHeight(),
			left = x.offset().left,
			top = x.offset().top,
			width_thật = 0;
		height_thật = 0;
		$(".listSp").sửaLớp("vôHiệu");
		l.sửaLớp("-listSp").css({
			transition: "left .7s,top .7s,width 1.3s,height 1.3s",
		});
		chờ(function () {
			var t1 = 0,
				a = 0,
				é = $(".chứaHình").offset().top,
				á = $(".thắpHương").scrollTop(),
				width_thật = là("M") ? 0 : "100px",
				height_thật = là("M") ? 0 : "100px";
			$(".tiềnVàng").find(".tênSp").each(function () {
				var é = $(this);
				if (é.text() == x.find(".tênSp").text()) {
					a = 1;
					t1 = é.parents(".đồVàngMã");
				}
				if (t1)
					return false;
			});
			if (!a) {
				$(".tiềnVàng").find(".đồVàngMã").each(function () {
					var x = $(this),
						é = x.find(".checkSp").length;
					if (!é)
						t1 = x;
					if (t1)
						return false;
				})
			}
			$(".thắpHương").animate({
				scrollTop: $(".thắpHương")[0].scrollHeight
			}, function () {
				var vừaBấm = x.ID(),
					v_top = t1.find(".checkSp").length;
				l.find(".sẽTo").css({
					backgroundImage: "url('" + d.hiện + "')"
				})
				l.children().sửaLớp("-bss,bw1,bcd");
				l.find(".chèn").remove();
				l.find(".cầnBỏ").sửaLớp("dn");
				l.find(".zoom").sửaLớp("-zoom,-pb249,wh1");
				x.parent().append(
					l.sửaLớp("-col-md-4,-col-sm-6,-col-xs-12,sẽBay,-pa5").css({
						position: "fixed",
						zIndex: "9",
						width: width1,
						height: height1,
						left: left,
						top: top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0)
					})
				);
				var t1_top = t1.offset().top,
					t1_left = t1.offset().left;
				t1_top = t1_top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0);
				chờ(function () {
					$(".sẽBay").css({
						left: t1_left,
						top: d.loại == "hoa" ? t1_top - l.find("img").height() + "px" : t1_top,
						width: là("M") ? 0 : "100px",
						height: là("M") ? 0 : "100px"
					});
				}, 100);
				var rỏHàng = $(".chứaRỏHàng").find("table");
				chờ(function () {
					if ($(".sẽBay").offset().top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0) - 5 < t1_top) {
						$(".sẽBay").find(".pb169").sửaLớp("-pb169,h1,-pb1");
						t1.append(
							$(".sẽBay").css({
								position: "relative",
								left: 0,
								top: -90 * v_top + "%",
								transition: "none",
								height: "100%",
								width: "100%",
								zIndex: 15
							}).sửaLớp("-sẽBay")
						)
						// ).DiDi({
						// 	data: d
						// });
						$(".listSp").sửaLớp("-vôHiệu");
						return false;
					}
				}, 100, "chạy", true);
			})
		}, 200);
		return x;
	},
	đồCúng: function () {
		var x = $(this),
			dl = x.data(),
			l = x.clone(),
			width1 = x.outerWidth(),
			height1 = x.outerHeight(),
			left = x.offset().left,
			top = x.offset().top - x.outerHeight(),
			width_thật = 0;
		height_thật = 0;
		$(".listSp").sửaLớp("vôHiệu");
		l.sửaLớp("-listSp").css({
			transition: "left .7s,top .7s,width .7s,height .7s",
		});
		chờ(function () {
			var t1 = 0,
				cột = x.attr("cột"),
				cao = x.attr("cao"),
				length = $(".bỏViền").length,
				dòng = x.attr("dòng");
			$(".bỏViền").each(function () {
				var x = $(this),
					é = x.find(".checkSp").length,
					c = x.find(".tênSp");
				//di chuyển trên mâm cúng
				x.draggable({
					containment: ".ôCóMâm",
					start: function (event, ui) {
					},
					drag: function (event, ui) {
						cl(456)
					},
					stop: function (event, ui) {
						cl(x.css({ zIndex: "10" }))
					}
				});
				if (!é)
					t1 = x.find(".chứaĐồ");
				if (t1)
					return false;
			});
			if (!t1.length && length < 19) {
				$(".bỏViền").css({
					width: 100 / (length / 2 + 1) + "%"
				});
				range(0, 1).map(function (v, i) {
					$(".bỏViền:" + (!i ? "eq(" + (length / 2 - 1) + ")" : "last") + "").after(
						$("<div>", { class: "bỏViền pa3", id: "ôThêm" }).css({
							height: "50%",
							width: 100 / (length / 2 + 1) + "%"
						}).append(
							$("<div>", { class: "h1 chứaĐồ pr" })
						)
					)
				});
				t1 = $(".bỏViền:eq(" + length / 2 + ")").children(".chứaĐồ");
			}
			if (t1.length) {
				$(".thắpHương").animate({
					scrollTop: cuộnMâm
				}, function () {
					var vừaBấm = x.ID();
					if (x.attr("bỏ") == "otimkiem") {
						var idGóiGiỗ = d.hiện;
						if (idGóiGiỗ) {
							idGóiGiỗ.map(function (v, i) {
								var é = config(tblĐồGiỗ + "." + v + ".173020");
								$(".chứaHình").find(".chứaĐồ").each(function () {
									if (!$(this).children().length) {
										$(this).append(
											sảnPhẩm({
												data: v,
												index: i,
												loại: é,
												bỏ: true
											})
										)
									}
								})
							})
						}
					} else {
						l.children().sửaLớp("-bss,bw1,bcd");
						l.find(".chèn").remove();
						l.find(".cầnBỏ").sửaLớp("dn");
						l.find(".pb249").sửaLớp("-pb249,wh1");
						l.find(".oh").sửaLớp("-oh");
						l.find(".sẽTo").sửaLớp("wh1 ph").css({
							backgroundImage: "url('" + dl.hiện + "')"
							//hiện nút xóa.
						}).append(
							$("<div>", { class: "pa bấmXóa pa10 dn phv bra50 bgc05 cf ", icon: "close::vam,tac,lh-1,pa,l50,t50,tt", tip: "Xóa" }).css({
								left: "80%", bottom: "80%"
							}).click(function () {
								$(this).parents(".checkSp").iConfirm("Bạn có chắc muốn xóa " + x.find(".tênSp").text() + " khỏi mâm cúng không", function () {
									var a = $("table").find("tr[id='" + vừaBấm + "']");
									if (a.length) {
										var b = a.find(".sốlượng").text() * 1;
										if (b > 1) {
											a.find(".giảm").trigger("click")
										} else {
											b.hide(300, function () {
												$(this).remove();
											})
										}
										đệmGiỏ($(".danhsáchhàng"));
										$(".danhsáchhàng").tổngtiền();
									}
									$(this).hide(300, function () {
										$(this).remove();
									})
								})
							})
						);
						x.parent().append(
							l.sửaLớp("-col-md-4,-col-sm-6,-col-xs-12,sẽBay,-pa5").css({
								position: "fixed",
								zIndex: "9",
								width: width1,
								height: height1,
								left: left,
								top: top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0)
							})
						);
						var t1_top = t1.offset().top,
							t1_left = t1.offset().left;
						t1_top = t1_top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0);
						chờ(function () {
							$(".sẽBay").css({
								left: t1_left,
								top: t1_top,
								width: là("M") ? 0 : t1.outerWidth(),
								height: là("M") ? 0 : t1.outerHeight()
							});
						}, 100);
						chờ(function () {
							if ($(".sẽBay").offset().top - (là("M") ? ($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()) : 0) - 3 <= t1_top) {
								$(".sẽBay").find(".pb169").sửaLớp("-pb169,h1,-pb1");
								t1.append(
									// $(".sẽBay")
									// .DiDi({
									// 	data: dl
									// })
									$(".sẽBay").css({
										position: "relative",
										left: 0,
										top: 0,
										transition: "none",
										height: "100%",
										width: "100%",
										zIndex: 15
									}).sửaLớp("-sẽBay")
								);
								return false;
							}
						}, 100, "chạy", true);
					}
				});
			} else {
				thôngBáo({
					t: "Không đủ chỗ trống cho " + x.find(".tênSp").text(),
					loại: true
				})
			}
			chờ(function () {
				$(".listSp").sửaLớp("-vôHiệu");
			}, 1000)
			// if(cột&&dòng){
			// 	tìmÔ({cột,dòng},function(d){
			// 		if(!empty(d)){
			// 			var t1 = d[0],
			// 				w = t1.width()*(cột||2),
			// 				h = t1.height()*(dòng||2);
			// 			if(t1){
			// 				var é = $(".chứaHình").offset().top,
			// 					á = $(".thắpHương").scrollTop();
			// l.find(".sẽTo").replaceWith($("<img>",{ src:dl.hiện, width:"100%", class:"pa l50 t50 tt usn" }));
			// l.children().sửaLớp("-bss,bw1,bcd");
			// l.find(".oh").sửaLớp("-oh")
			// l.find(".chèn").remove();
			// l.find(".fs09").sửaLớp("dn");
			// l.find(".zoom").sửaLớp("-zoom,-pb249,wh1");
			// x.parent().append(
			// 	l.sửaLớp("-col-md-4,-col-sm-6,-col-xs-12,sẽBay,-pa5").css({
			// 		position:"fixed",
			// 		zIndex:"9",
			// 		width:width1,
			// 		height:height1,
			// 		left:left,
			// 		top:top-(là("M")?($(".sẽNổi").outerHeight() + $(".tabĐầu").outerHeight()):0)
			// 	})
			// );
			// var tp = t1.position().top,
			// 	lp = t1.position().left,
			// 	to = t1.offset().top,
			// 	lo = t1.offset().left;
			// chờ(function(){
			// 	$(".sẽBay").css({
			// 		left:lo,
			// 		top:to-(cao?t1.height()*3:0),
			// 		width:w,
			// 		height:h
			// 	});
			// },100);
			// var rỏHàng = $(".chứaRỏHàng").find("table"),
			// 	uid = uID();
			// chờ(function(){
			// 	$(".sẽBay").find(".pb169").sửaLớp("-pb169,h1,-pb1");
			// 	t1.parents(".sẽChứa").append(
			// 		$(".sẽBay").DiDi({
			// 			data:dl
			// 		}).css({
			// 			position:"absolute",
			// 			left:lp,
			// 			top:tp-(cao?t1.height()*3:0),
			// 			transition:"none",
			// 			zIndex:15
			// 		}).sửaLớp("-sẽBay,vừaVào,diSảnPhẩm")
			// 	);
			// 	d.map(function(v){
			// 		var topV = $(".vừaVào").offset().top,
			// 			leftV= $(".vừaVào").offset().left,
			// 			leftT = v.offset().left
			// 			topT = v.offset().top;
			// 		v.attr("tách",uid);
			// 		$(".vừaVào").attr("tách",uid);
			// 		if(topV + $(".vừaVào").height()<=topT ){
			// 			v.sửaLớp("-cóRồi");
			// 		}
			// 		$(".vừaVào").sửaLớp("-vừaVào");
			// 	})
			// 	$(".listSp").sửaLớp("-vôHiệu")
			// },700);
			// 			}else{
			// 				x.iMsg("Mâm của bạn đã đầy vui lòng xóa bớt hoặc tùy chỉnh lại.");
			// 			}
			// 		}else{
			// 			thôngBáo({
			// 				t:"Không đủ chỗ trống cho " +x.find(".tênSp").text(),
			// 				loại:true
			// 			})
			// 		}
			// 		$(".sẽChứa").find(".cácÔ[class='cóRồi']").each(function(){
			// 			if(!$(this).attr("tách")){
			// 				$(this).sửaLớp("-cóRồi")
			// 			}
			// 		})
			// 		$(".listSp").sửaLớp("-vôHiệu");
			// 	});
			// }
		}, 200);
		$(".listSp").sửaLớp("vôHiệu");
		return x;
	}
});
function mâmCơm(chủQuyền, idMộnày) {
	cl(chủQuyền + " id dòng mộ này")
	var thẻ = $("<div>", { class: "oh w1 pr z9 oya bgpc bgso bgrn thắpHương" }).append(
		$("<div>", { class: "pr" }).append(
			$("<div>", { class: "df fdc tar sẽXóa ptb7 wfc pa r0 h1 pa10" }).css({
				"top": "30%",
				"zIndex": "20"
			}).append(
				$("<div>", { class: "bấmĐc bg1 bra50 cf bg1 pr tduh mtb7 ta5 pr hôha ph", title: "Bấm để hóa vàng" }).append(
					$("<div>", { class: "bấmĐc pa r1 t0  wsn  ta5 phv o0  h1 df fdc jcsc" }).append(
						$("<div>", { class: "mr5 ptb5 plr15 bgcf cl1", text: "Bấm để hóa vàng" })
					)
				).css({
					// "background":"#ffa95f",
					"backgroundImage": "url(/img/iconcunggio/hoavang.png)",
					"backgroundSize": "80% 80%",
					"backgroundRepeat": "no-repeat",
					"backgroundPosition": "center",
					"width": "50px",
					"height": "50px"
				}).click(function () {
					if ($(".khóilư").length > 1) {
						$(".khóilư").remove();
						$(".lửalư").remove();
					}
					var t = $(".sẽXóa"),
						c = t.find(".đútVàngMã"),
						w = c.outerWidth(),
						a = t.find(".checkSp"),
						o = c.offset();
					if (!t.find(".checkSp").length) {
						notice({
							t: "Vui lòng chọn vàng mã để hóa vàng",
							loại: false
						})
					} else {
						$(".thắpHương").animate({
							scrollTop: $(".thắpHương")[0].scrollHeight
						}, 345, function () {
							a.each(function () {
								var x = $(this),
									w = x.width(),
									h = x.height(),
									p = x.parents(".chứaĐồ").offset(),
									s = $(".thắpHương").scrollTop(),
									sẽBỏ = 0;

								x.sửaLớp("koBấm xóaĐi").css({
									position: "fixed",
									top: p.top,
									width: w,
									height: h,
									left: p.left,
								}).chờ(function () {
									x.css({
										left: $(".bằng").offset().left,
										top: $(".bằng").offset().top,
										opacity: 0,
										transition: "left 1s,top 1s,opacity 1s"
									});
								}, 200);
								//
								chờ(function () {
									if (x.offset().left < o.left + (w / 2)) {
										sẽBỏ = 1;
										lửa();
										$(".xóaĐi").remove();
										return false;
									}
								}, 100, "hihi", true);
							});
						})
					}

				}),
				$("<div>", { class: "start bấmĐc bra50 cf bg1 tduh mtb7 ta5 pr hôha ph", title: là("M") ? "Thắp hương" : "Bấm để thắp hương" }).append(
					$("<div>", { class: "bấmĐc pa r1 t0  wsn  ta5 phv o0  h1 df fdc jcsc" }).append(
						$("<div>", { class: "mr5 ptb5 plr15 bgcf cl1", text: "Bấm để thắp hương" })
					)
				).css({
					"backgroundImage": "url(/img/iconcunggio/thaphuong.png)",
					"backgroundSize": "80% 80%",
					"backgroundRepeat": "no-repeat",
					"backgroundPosition": "center",
					"width": "50px",
					"height": "50px"
				}).click(function () {
					$(".thắpHươngẨn").trigger("click");
					var i = $(this);
					i.off("click");
					$(".cầnBỏ").hide();
					if (i.attr("title") == "Bấm để thắp hương") {
						$(".báthương").append(
							$("<div>", { class: "pa z3", style: "width: 40%;top: -186%;left: 30.5%;", html: `<svg version="1.1" x="0px" y="0px" viewBox="0 0 117 541" style="enable-background:new 0 0 117 541;"><g><g><path class="st0" d="M14,541C14,541,14,541,14,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M20,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15C0,6.8,4.5,0,10,0s10,6.8,10,15V414z"/></g><g><path class="st2" d="M20,10c0,5.5-4.5,10-10,10l0,0C4.5,20,0,15.5,0,10l0,0C0,4.5,4.5,0,10,0l0,0C15.5,0,20,4.5,20,10L20,10z"/></g><g><path class="st2" d="M20,20C20,20,20,20,20,20L0,20c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g><g><g><path class="st0" d="M61,541C61,541,61,541,61,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M67,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15c0-8.3,4.5-15,10-15s10,6.8,10,15V414z"/></g><g><path class="st2" d="M67,10c0,5.5-4.5,10-10,10l0,0c-5.5,0-10-4.5-10-10l0,0c0-5.5,4.5-10,10-10l0,0C62.5,0,67,4.5,67,10L67,10z"/></g><g><path class="st2" d="M67,20C67,20,67,20,67,20l-20,0c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g><g><g><path class="st0" d="M111,541C111,541,111,541,111,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M117,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15c0-8.3,4.5-15,10-15s10,6.8,10,15V414z"/></g><g><path class="st2" d="M117,10c0,5.5-4.5,10-10,10l0,0c-5.5,0-10-4.5-10-10l0,0c0-5.5,4.5-10,10-10l0,0C112.5,0,117,4.5,117,10L117,10z"/></g><g><path class="st2" d="M117,20C117,20,117,20,117,20l-20,0c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g></svg>` }),
						).each(function () {
							var t = $(this);
							function huongkhoi(j, x, hoãn) {
								setTimeout(function () {
									setTimeout(function () {
										$(".hương" + j).sửaLớp("-o0,o03");
									}, x);
									setTimeout(function () {
										$(".hương" + j).sửaLớp("o0,-o03");
										huongkhoi(j, x, hoãn)
									}, x + 500 + hoãn);
								}, 1000)
							};
							range(0, 11).map(function (v, i) {
								var j = i + 1,
									x = j * 120,
									hoãn = 150;
								t.append(
									$("<img>", { class: "pa b1 o0 pen hương" + j, src: "img/huong/h" + j + ".png" }).css({
										"width": "380%",
										"height": "500%",
										"left": "-141%",
										"transition": "1.5s"
									}).each(function () {
										huongkhoi(j, x, hoãn);
									})
								)
							})

							$(".st1").css({
								fill: "#bd7c03"
							})
							$(".st0").css({
								fill: "red"
							})
							setTimeout(function () {
								$(".khoihuong").sửaLớp("-o0,o1")
							}, 100)
						});
						var color = "gold";
						setInterval(() => {
							color = (color === "gold") ? "orange" : "gold";
							$(".st2").css("fill", color);
						}, 500);
						chờ(function () {
							$(".đangĐốt").css({
								opacity: 1
							});
							$(".vỏNgoài").css({
								height: "20%"
							});
							$(".que").css({
								height: "30%"
							});
							$(".tànHương").each(function () {
								var x = $(this);
								chờ(function () {
									x.css({
										opacity: 0
									})
								}, 6 * 1000)
							})
						}, 400);
						chờ(function () {
							if (lưuMâm == 1) {
								return false;
							} else {
								$(".khóiNha").sửaLớp("-o05,o01");
								// hiệnThôngBáo("Thời gian thắp hương đã hết bạn có muốn lưu lại mâm cúng không!","",function(){
								// 	// i.trigger("click");
								// })
							}
						}, tgChờ * 1000);
					} else {
						lưuMâm = 1;
						var m = [
							{ ảnh: plink + "img/noavt.png", tên: "Phạm Hồng Giang", id: "hihi" }
						],
							l = $(".thắpHương").clone(),
							k,
							ị = $("#chứaCopy");
						l.find(".sẽXóa").remove();
						l.css({
							paddingTop: "0"
						});
						l.height("auto").find(".tànHương").remove();
						l.find(".vỏNgoài").height("10%");
						l.sửaLớp("pr," + là("M") ? "-l0,-t0,pa,b0,l0,w1,-oya" : "-l0,-t0,-pf,-w50,w1,-oya");
						l.append(
							$("<div>", { class: "pa l0 t0 z5 ma15" }).append(
								$("<img>", { src: plink + "img/logo.png", width: "100px" })
							)
						);
						ị.empty().append(l);
						i.iMsg(
							$("<img>", { src: plink + "img/loading.gif", width: "150px" }),
							1,
							{ hide: false }
						);
						chờ(function () {
							html2canvas(l[0], {
								width: l.width(),
								height: l.height(),
								logging: true,
								letterRendering: 1,
								allowTaint: false,
								useCORS: false,
								backgroundColor: "rgba(0,0,0,0)",
							}).then(function (canvas) {
								var base64image = canvas.toDataURL("image/png", 0.9);
								if (base64image) {
									i.iMsg();
									k = khung(
										$("<div>", { class: "wh1" }).append(
											$("<div>", { class: "pr " }).append(
												$("<div>", { class: "pa10 fwb bg1 cf fs09 pr ph", text: "Ảnh mâm cúng" }),
												$("<img>", { class: "w1", src: base64image })
											),
											$("<div>", { class: "grid pa10 tar pr oh" }).append(
												$("<div>", { class: "pa10 bg1 bar pr bra3 bấmĐc tduh cf fs09 nútẢnh fwb", text: "Lưu", icon: "save::vam,tac,lh1", id: "lưu" })
											)
										), {
										viền: false,
										động: "fadeIn",
										kín: là("M") ? true : false,
										trong: !là("M") ? "col-md-5 col-xs-12 col-md-6" : "",
										ngoài: "z99"
									}
									);
									k.on("click", ".nútẢnh", function () {
										var x = $(this),
											id = x.ID(),
											b = x.parent();
										x.append(
											$("<img>", { class: "load pa l0 t0 w1", src: plink + "img/loading.gif" })
										);
										var fd = new FormData();
										fd.append("linkF", base64image);
										fd.append("idTk", usage.id);
										fd.append("idMất", idNgườiMất);
										fd.append("act", "lưuThắpHương");
										$.ajax({
											url: "/function.isp",
											data: fd,
											type: 'post',
											processData: false,
											contentType: false,
											success: function (r) {
												if (r > 0) {
													thôngBáo1({
														loại: true,
														t: "Lưu dữ liệu thành công"
													});
													k.trigger("đóng");
													$(".đãThắpHương").trigger("lấyLuôn");
												}
											},
											error: function (s) {
											}
										});
									})
									ị.empty();
								}
							});
						}, 500);
					}
				}),
				$("<div>", { class: "bấmĐc bra50 cf tduh bg1 mtb7 ta5 pr hôha ph đặtGiỗTT", classM: "-ml25,ml10", title: là("M") ? "Đặt đồ" : "Đặt giỗ thực tế" }).append(
					$("<div>", { class: "bấmĐc pa r1 t0  wsn  ta5 phv o0  h1 df fdc jcsc" }).append(
						$("<div>", { class: "mr5 ptb5 plr15 bgcf cl1", text: "Đặt giỗ thực tế" })
					)
				).css({
					// "background":"#ffa95f",
					"backgroundImage": "url(/img/iconcunggio/thucte.png)",
					"backgroundSize": "80% 80%",
					"backgroundRepeat": "no-repeat",
					"backgroundPosition": "center",
					"width": "50px",
					"height": "50px"
				}).click(function () {
					var t = $(this);
					$("#đặt1").trigger("click");
					t.trigger("mouseleave")
					$(".dgtt").trigger("mouseleave")
					if ($(".chứaHình").find(".checkSp").length) {
						$("#đặt1").trigger("click");
						$(".chứaRỏHàng").empty().append(
							bảngRỏHàng().each(function () {
								var t = $(this).find("tbody");
								lsp = $(".thắpHương").find(".checkSp");
								if (lsp.length > 0) {
									lsp.map(function (v, vt) { // v là key
										var id = $(vt).attr("id"),
											bỏ = $(vt).attr("bỏ"),
											ae = t.find("#" + id);
										if (bỏ == "ok") {
											$(vt).sửaLớp("o03")
										} else {
											$(vt).find(".giáẨn").sửaLớp("-dn");
										}
										if (ae.length == 1) {
											var s = $(ae).find(".sốlượng"),
												tt = $(ae).find(".thànhtiền"),
												g = $(ae).find(".giá").text() * 1;
											s.text(s.text() * 1 + 1);
											tt.text(phẩy(bỏPhẩy(tt.text()) * 1 - g));
										} else {
											var giỏ = { tên: đồGiỗ.tên(id), giá: phẩy(đồGiỗ.giá(id)), thànhTiền: phẩy(đồGiỗ.giá(id)), ảnh: đồGiỗ.ảnh(id), id: id };
											t.append(
												dòngGiỏ1(v + 1, giỏ)
											)
										}
									})
								} else {
									t.append(
										$("<div>", { class: "", text: "Chưa có sản phẩm nào được chọn!" })
									)
								}
							}),
							$("<div>", { class: "tal grid mt25" }).append(
								$("<div>", { class: "grid pl15" }).append(
									$("<div>", { class: "mc1 fs12", text: "Tổng số tiền:" }),
									$("<div>", { class: "tổngtiền ml10 vat", text: "0" }),
									$("<div>", { class: "ml3", text: "₫" })
								),
								$("<div>", { class: "btn bg1 cf bra3 dib bss bw1 bcd plr15 ptb7 pa r0 mr15 thanhToán", text: "Thanh toán" })
							)
						);
						$(".danhsáchhàng").css({
							height: window.outerHeight - $(".nútThanhToán").outerHeight() - 10
						});
						$(".chứaRỏHàng").find(".thànhtiền").trigger("thànhTiền");
						$(".danhsáchhàng").tổngTiền();
						//LƯU GIỎ HÀNG
						đệmGiỏ($(".chứaRỏHàng"))
					} else {
						notice({
							t: "Vui lòng chọn ít nhất 1 đồ cúng lên mâm",
							loại: false
						})
						// $(this).iMsg("Vui lòng chọn ít nhất 1 đồ cúng lên mâm.")
					}
				})
			),
			$("<div>", { class: "pa pen khungPhòngThờ" }).css({
				width: "100%",
				left: "0%",
				height: "100%",
				top: "0%",
			}).append(
				$("<div>", { class: "mt10 tac ptb10 pr z1 sẽXóa h1", classM: "-pa,b0,l0,pr,-z1,z9,mt10" }).append(
					$("<div>", { class: "pr cb h1" }).append(
						$("<div>", { class: "pr bằng" }).css({
							width: "11%",
							top: "68%",
							left: "10%",
							height: "5%",
							zIndex: ""
						}).append(
							$("<div>", { class: "pa l0 t0 w1" }).css({
								height: "60%"
							}).append(
								$("<div>", { class: "pr wh1 đútVàngMã" })
							)
						),
						// Bằng testttttttttt
						$("<div>", { class: "tiềnVàng pea pa cb  h1" }).append(
							range(0, 6).map(function (v, i) {
								return $("<div>", { class: "col-xs-4" }).append(
									$("<div>", { class: "chứaĐồ" }).css({
										height: "140%",
										width: "140%"
									}).append(
										$("<div>", { class: "đồVàngMã wh1" })
									)
								).each(function () {
									if (i < 3) {
										$(this).css({
											// marginTop: "130%"
											left: -(i * 10 + (i) * 2) + "%"
										})
									} else {
										$(this).css({
											// marginTop: "-100%"
											top: "-88%",
											left: -((i - 3) * 10 + (i) * 2) + 15 + "%"
										})
									}
								})
							}),
						).css({
							height: "7%",
							width: "19%",
							top: "63%",
							left: "67%",
						}),
						// đến đây
					),
					// $("<div>", { class: "pa bgsc o01 bgpc l0 t0 wh1" }).css({
					// 	backgroundImage: "url(img/background.png)"
					// })
				)
			),
			//ảnh chính
			$("<img>", { class: "w1", src: "https://lachongvien.inevn.com/img/phong-tho.png" }),
			//khung ảnh
			$("<div>", { class: "khungẢnh pa o0 bỏẨn" }).css({
				width: "8%",
				top: "12.5%",
				height: "13.5%",
				left: "45.5%"
			}).append(
				$("<div>", { class: "wh1 bgpc bgsc bgrn bấmĐc lh1 tac  df fdc jcsc ẤnThayẢnh", title: "Click thay ảnh" }).css({
					color: "#2d2c2cbd"
				}).each(function () {
					var t = $(this);
					t.append(
						$("<div>", { class: "nhấnThayẢnh pen", text: "Click thay ảnh" })
					)
					if (chủQuyền == "chủ") {
						t.tảiLên({
							loại: "ảnh",
							đổi: function (s) {
								$(this).css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "500px") + "')" });
								$(this).attr("id", s[0]);
								var ảnh = { "ậ": [s[0]] };
								xửLý("thuộcTính.sửa." + "85a06270ffdb31728ad4dd341891d457", { d: [idMộnày, { 226508: ảnh }] }, function (status) {
									if (status == 1) {
										thôngBáo.ok("Thay ảnh thờ thành công!")
									} else {
										thôngBáo.lỗi("Thay ảnh thờ thất bại!")
									}
								});
								$(".nhấnThayẢnh").remove();
								$(".khungẢnhNgoài").css({ backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "500px") + "')" }).text("");
							},
							lỗi: function () {
								$(this).lỗi("Vui lòng thử lại.");
							}
						})
					} else {
						t.on("click", function () {
							thôngBáo.lưuÝ("Bạn không có quyền thay ảnh!")
						})
					}
				})
			),
			// lọ hoa
			range(0, 1).map(function (v, i) {
				//vị trí hoa
				return $("<div>", { class: "pa lọHoa o0 bỏẨn" }).css({
					width: ["4.2%", "4.1%"][i],
					top: ["28.7%", "28.7%"][i],
					left: ["29.5%", "64.1%"][i]
				}).append(
					$("<div>", { class: "pr " + ["chứaHoa1", "chứaHoa1"][i] }).append(
						$("<img>", { src: "https://lachongvien.inevn.com/image/lo-hoa" + ["1", ""][i] + ".png", class: "pr z15 w1" }),
						$("<div>", { class: "pa t0 w1 l0 ", id: "ô90" }).append(
							$("<div>", { class: "pr w1 chứaĐồ" })
						)
					)
				)
			}),
			// bát hương
			$("<div>", { class: "hàngTrên grid cb tac pa w80 mlra bỏẨn o0", classM: "-w80" }).css({
				left: "9.4%",
				top: "31%"
			}).append(
				$("<div>", { class: "grid tac pr w1" }).append(
					$("<div>", { class: "pr" }).css({
						width: là("M") ? "21%" : "16%"
					}).append(
						$("<img>", { class: "vab pr z3 w1", src: "/image/batH.png" }),
						$("<div>", { class: "pa l50 b0 ttx bátHương w40" }).css({
							height: "80%"
						}).append(
							$("<div>", { class: "pr grid tac wh1", classM: "-w1,w20" }).append(
								range(0, 2).map(function (é, ẹ) {
									return mâm.tạoHương(!ẹ ? '-20deg' : ẹ == 2 ? '20deg' : ud, ẹ)
								})
							)
						)
					)
				).động("slideInDown")
			),
			$("<div>", { class: "tac ôCóMâm pa" }).css({
				width: "30%",
				left: "34%",
				top: "61%",
				height: "14%"
			}).append(
				$("<div>", { class: "chứaHình h1" }).append(
					$("<div>", { class: "pr wh1 sẽCopy" }).append(
						$("<div>", { class: "pa cb wh1 grid" }).append(
							range(0, 7).map(function (é, ẹ) {
								return $("<div>", { class: "bỏViền pa3", id: "ô" + (ẹ + 1) }).css({
									height: "50%",
									width: 100 / 4 + "%",
									transform: "rotateX(-10deg)"
								}).append(
									$("<div>", { class: "h1 chứaĐồ pr" }).css({
										transform: "rotateX(36deg)",
									})
								);
							})
						),
						range(0, 1).map(function (v, i) {
							return $("<div>", { class: (!i ? "l1 tar w10 " : "r1 tal w15 ") + " cb pa t50 tty z9 dn-xs remove shine dn ", classM: "-w10,-w15,w35" }).append(
								$("<img>", { class: "", width: là("M") ? "80px" : "100px", src: plink + "img/remove.gif" }).css({
									transform: "rotate(" + ["-90deg", "90deg"][i] + ")"
								}),
								$("<div>", { class: (!i ? "l0 " : "r0 ") + " pa t50 tty fs12 fwb cl1", text: "Xóa" })
							)
						})
					)
				)
			)
		),
		// $("<div>", { class: "grid tac sẽXóa ps b0 ptb5 bgcf8 l0 w1 z1" }).append(
		// 	$("<div>", { class: "bấmĐc bg1 pa10 cf tduh", text: "Bấm để hóa vàng" }).click(function () {
		// 		var t = $(".sẽXóa"),
		// 			c = t.find(".đútVàngMã"),
		// 			w = c.outerWidth(),
		// 			a = t.find(".checkSp"),
		// 			o = c.offset();
		// 		if (!t.find(".checkSp").length) {
		// 			notice({
		// 				t: "Vui lòng chọn vàng mã để hóa vàng",
		// 				loại: false
		// 			})
		// 		} else {
		// 			$(".thắpHương").animate({
		// 				scrollTop: $(".thắpHương")[0].scrollHeight
		// 			}, 345, function () {
		// 				a.each(function () {
		// 					var x = $(this),
		// 						w = x.width(),
		// 						h = x.height(),
		// 						p = x.parents(".chứaĐồ").offset(),
		// 						s = $(".thắpHương").scrollTop(),
		// 						sẽBỏ = 0;
		// 		
		// 					x.sửaLớp("koBấm xóaĐi").css({
		// 						position: "fixed",
		// 						top: p.top,
		// 						width: w,
		// 						height: h,
		// 						left: p.left,
		// 					}).chờ(function () {
		// 					
		// 						x.css({
		// 							left: o.left + (w / 3),
		// 							top: o.top,
		// 							opacity: 0,
		// 							transition: "left 1s,top 1s,opacity 1s"
		// 						});
		// 					}, 200);
		// 					//
		// 					chờ(function () {
		// 						if (x.offset().left < o.left + (w / 2)) {
		// 							sẽBỏ = 1;
		// 							lửa();
		// 							$(".xóaĐi").remove();
		// 							return false;
		// 						}
		// 					}, 100, "hihi", true);
		// 				});
		// 			})
		// 		}

		// 	}),
		// 	$("<div>", { class: "start bấmĐc mlr5 bg1 pa10 cf tduh", text: là("M") ? "Thắp hương" : "Bấm để thắp hương" }).click(function () {
		// 		var i = $(this);
		// 		$(".cầnBỏ").hide();
		// 		if (i.text() == "Bấm để thắp hương") {
		// 			$(".báthương").append(
		// 				$("<div>", { class: "pa z3", style: "width: 40%;top: -186%;left: 30.5%;", html: `<svg version="1.1" x="0px" y="0px" viewBox="0 0 117 541" style="enable-background:new 0 0 117 541;"><g><g><path class="st0" d="M14,541C14,541,14,541,14,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M20,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15C0,6.8,4.5,0,10,0s10,6.8,10,15V414z"/></g><g><path class="st2" d="M20,10c0,5.5-4.5,10-10,10l0,0C4.5,20,0,15.5,0,10l0,0C0,4.5,4.5,0,10,0l0,0C15.5,0,20,4.5,20,10L20,10z"/></g><g><path class="st2" d="M20,20C20,20,20,20,20,20L0,20c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g><g><g><path class="st0" d="M61,541C61,541,61,541,61,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M67,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15c0-8.3,4.5-15,10-15s10,6.8,10,15V414z"/></g><g><path class="st2" d="M67,10c0,5.5-4.5,10-10,10l0,0c-5.5,0-10-4.5-10-10l0,0c0-5.5,4.5-10,10-10l0,0C62.5,0,67,4.5,67,10L67,10z"/></g><g><path class="st2" d="M67,20C67,20,67,20,67,20l-20,0c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g><g><g><path class="st0" d="M111,541C111,541,111,541,111,541l-9,0c0,0,0,0,0,0V406c0,0,0,0,0,0h9c0,0,0,0,0,0V541z"/></g><g><path class="st1" d="M117,414c0,8.3-4.5,15-10,15s-10-6.8-10-15V15c0-8.3,4.5-15,10-15s10,6.8,10,15V414z"/></g><g><path class="st2" d="M117,10c0,5.5-4.5,10-10,10l0,0c-5.5,0-10-4.5-10-10l0,0c0-5.5,4.5-10,10-10l0,0C112.5,0,117,4.5,117,10L117,10z"/></g><g><path class="st2" d="M117,20C117,20,117,20,117,20l-20,0c0,0,0,0,0,0V10c0,0,0,0,0,0h20c0,0,0,0,0,0V20z"/></g></g></svg>` })
		// 			).each(function () {
		// 				$(".st1").css({
		// 					fill: "#bd7c03"
		// 				})
		// 				$(".st0").css({
		// 					fill: "red"
		// 				})
		// 				$(".khungPhòngThờ").append(
		// 					$("<img>", { class: "pa t0 l0 w1 z1 pen o0 khoihuong", src: "img/kh1.gif" }).css({
		// 						Transition: "4s"
		// 					})
		// 				)
		// 				setTimeout(function () {
		// 					$(".khoihuong").sửaLớp("-o0,o1")
		// 				}, 100)
		// 			});
		// 			var color = "gold";
		// 			setInterval(() => {
		// 				color = (color === "gold") ? "orange" : "gold";
		// 				$(".st2").css("fill", color);
		// 			}, 500);
		// 			// var phút = $("#phút"),
		// 			// 	giây = $("#giây");
		// 			// chờ(function () {
		// 			// 	var sg = giây.text() * 1,
		// 			// 		hủy = 0,
		// 			// 		sp = phút.text() * 1;
		// 			// 	giây.text(sg > 10 ? sg -= 1 : "0" + (sg -= 1));
		// 			// 	if (sg * 1 == 0) {
		// 			// 		if (sp * 1 > 0) {
		// 			// 			giây.text(59);
		// 			// 			phút.text("0" + (sp -= 1));
		// 			// 		} else {
		// 			// 			phút.text("00");
		// 			// 			giây.text("00");
		// 			// 			hủy = 1;
		// 			// 		}
		// 			// 	}
		// 			// 	if (hủy) {
		// 			// 		return false;
		// 			// 	}
		// 			// }, 1000, "hì", true, true);
		// 			// $(".vỏNgoài").css({
		// 			// 	transition: "height " + tgChờ + "s"
		// 			// })
		// 			// $(".thắpHương").animate({
		// 			// 	scrollTop: 0
		// 			// }, function () {
		// 			// 	if ($(".sẽẨn").height() > 0)
		// 			// 		$(".hiệnSảnPhẩm").trigger("click");
		// 			// });
		// 			// i.text(function (i, e) {
		// 			// 	return e == "Bắt đầu" ? "Lưu lại" : "Bấm để lưu mâm cúng";
		// 			// });
		// 			// i.parent(".sẽNhỏ").css({
		// 			// 	transition: "0.3s ease-in-out",
		// 			// 	width: "80%",
		// 			// 	height: "80%",
		// 			// });
		// 			// $(".hiệnNến").css({
		// 			// 	opacity: 1,
		// 			// 	width: "auto",
		// 			// });
		// 			// $(".hươngNha").css({
		// 			// 	opacity: 1,
		// 			// });
		// 			// $(".khóiNha").each(function (ị) {
		// 			// 	var x = $(this),
		// 			// 		c = x.children(),
		// 			// 		á = 0;
		// 			// 	//chặn click vào khói
		// 			// 	x.addClass("pen")
		// 			// 	x.sửaLớp("-o01,o05");
		// 			// 	chờ(function () {
		// 			// 		var é = c.css('backgroundPosition').split(" ")[0].replace(/px/g, "") * 1;
		// 			// 		c.css({
		// 			// 			backgroundPosition: é < 0 ? (é > (168 / 6) * -10 ? (é + (-168 / 6)) : 0) : é == 0 ? é + (-168 / 6) : á
		// 			// 		});
		// 			// 	}, [300, 200, 250][ị], ["khói", "khói1", "khói2"][ị], true, true);
		// 			// });
		// 			chờ(function () {
		// 				$(".đangĐốt").css({
		// 					opacity: 1
		// 				});
		// 				$(".vỏNgoài").css({
		// 					height: "20%"
		// 				});
		// 				$(".que").css({
		// 					height: "30%"
		// 				});
		// 				$(".tànHương").each(function () {
		// 					var x = $(this);
		// 					chờ(function () {
		// 						x.css({
		// 							opacity: 0
		// 						})
		// 					}, 6 * 1000)
		// 				})
		// 			}, 400);
		// 			chờ(function () {
		// 				if (lưuMâm == 1) {
		// 					return false;
		// 				} else {
		// 					$(".khóiNha").sửaLớp("-o05,o01");
		// 					// hiệnThôngBáo("Thời gian thắp hương đã hết bạn có muốn lưu lại mâm cúng không!","",function(){
		// 					// 	// i.trigger("click");
		// 					// })
		// 				}
		// 			}, tgChờ * 1000);
		// 		} else {
		// 			lưuMâm = 1;
		// 			var m = [
		// 				{ ảnh: plink + "img/noavt.png", tên: "Phạm Hồng Giang", id: "hihi" }
		// 			],
		// 				l = $(".thắpHương").clone(),
		// 				k,
		// 				ị = $("#chứaCopy");
		// 			l.find(".sẽXóa").remove();
		// 			l.css({
		// 				paddingTop: "0"
		// 			});
		// 			l.height("auto").find(".tànHương").remove();
		// 			l.find(".vỏNgoài").height("10%");
		// 			l.sửaLớp("pr," + là("M") ? "-l0,-t0,pa,b0,l0,w1,-oya" : "-l0,-t0,-pf,-w50,w1,-oya");
		// 			l.append(
		// 				$("<div>", { class: "pa l0 t0 z5 ma15" }).append(
		// 					$("<img>", { src: plink + "img/logo.png", width: "100px" })
		// 				)
		// 			);
		// 			ị.empty().append(l);
		// 			i.iMsg(
		// 				$("<img>", { src: plink + "img/loading.gif", width: "50px" }),
		// 				1,
		// 				{ hide: false }
		// 			);
		// 			chờ(function () {
		// 				html2canvas(l[0], {
		// 					width: l.width(),
		// 					height: l.height(),
		// 					logging: true,
		// 					letterRendering: 1,
		// 					allowTaint: false,
		// 					useCORS: false,
		// 					backgroundColor: "rgba(0,0,0,0)",
		// 				}).then(function (canvas) {
		// 					var base64image = canvas.toDataURL("image/png", 0.9);
		// 					if (base64image) {
		// 						i.iMsg();
		// 						k = khung(
		// 							$("<div>", { class: "wh1" }).append(
		// 								$("<div>", { class: "pr " }).append(
		// 									$("<div>", { class: "pa10 fwb bg1 cf fs09 pr ph", text: "Ảnh mâm cúng" }),
		// 									$("<img>", { class: "w1", src: base64image })
		// 								),
		// 								$("<div>", { class: "grid pa10 tar pr oh" }).append(
		// 									$("<div>", { class: "pa10 bg1 bar pr bra3 bấmĐc tduh cf fs09 nútẢnh fwb", text: "Lưu", icon: "save::vam,tac,lh1", id: "lưu" })
		// 								)
		// 							), {
		// 							viền: false,
		// 							động: "fadeIn",
		// 							kín: là("M") ? true : false,
		// 							trong: !là("M") ? "col-md-5 col-xs-12 col-md-6" : "",
		// 							ngoài: "z99"
		// 						}
		// 						);
		// 						k.on("click", ".nútẢnh", function () {
		// 							var x = $(this),
		// 								id = x.ID(),
		// 								b = x.parent();
		// 							x.append(
		// 								$("<img>", { class: "load pa l0 t0 w1", src: plink + "img/loading.gif" })
		// 							);
		// 							var fd = new FormData();
		// 							fd.append("linkF", base64image);
		// 							fd.append("idTk", usage.id);
		// 							fd.append("idMất", idNgườiMất);
		// 							fd.append("act", "lưuThắpHương");
		// 							$.ajax({
		// 								url: "/function.isp",
		// 								data: fd,
		// 								type: 'post',
		// 								processData: false,
		// 								contentType: false,
		// 								success: function (r) {
		// 									if (r > 0) {
		// 										thôngBáo1({
		// 											loại: true,
		// 											t: "Lưu dữ liệu thành công"
		// 										});
		// 										k.trigger("đóng");
		// 										$(".đãThắpHương").trigger("lấyLuôn");
		// 									}
		// 								},
		// 								error: function (s) {
		// 								}
		// 							});
		// 						})
		// 						ị.empty();
		// 					}
		// 				});
		// 			}, 500);
		// 		}
		// 	}),
		// 	$("<div>", { class: "bấmĐc bg1 pa10 cf tduh", classM: "-ml25,ml10", text: là("M") ? "Đặt đồ" : "Triển khai thực tế" }).click(function () {
		// 		if ($(".chứaHình").find(".checkSp").length) {
		// 			$("#đặt1").trigger("click");
		// 			$(".chứaRỏHàng").empty().append(
		// 				bảngRỏHàng().each(function () {
		// 					var t = $(this).find("tbody");
		// 					lsp = $(".thắpHương").find(".checkSp");
		// 					if (lsp.length > 0) {
		// 						lsp.map(function (v, vt) { // v là key
		// 							var id = $(vt).attr("id"),
		// 								bỏ = $(vt).attr("bỏ"),
		// 								ae = t.find("#" + id);
		// 							if (bỏ == "ok") {
		// 								$(vt).sửaLớp("o03")
		// 							} else {
		// 								$(vt).find(".giáẨn").sửaLớp("-dn");
		// 							}
		// 							if (ae.length == 1) {
		// 								var s = $(ae).find(".sốlượng"),
		// 									tt = $(ae).find(".thànhtiền"),
		// 									g = $(ae).find(".giá").text() * 1;
		// 								s.text(s.text() * 1 + 1);
		// 								tt.text(phẩy(bỏPhẩy(tt.text()) * 1 - g));
		// 							} else {
		// 								var giỏ = { tên: đồGiỗ.tên(id), giá: phẩy(đồGiỗ.giá(id)), thànhTiền: phẩy(đồGiỗ.giá(id)), ảnh: đồGiỗ.ảnh(id), id: id };
		// 								t.append(
		// 									dòngGiỏ1(v + 1, giỏ)
		// 								)
		// 							}
		// 						})
		// 					} else {
		// 						t.append(
		// 							$("<div>", { class: "", text: "Chưa có sản phẩm nào được chọn!" })
		// 						)
		// 					}
		// 				}),
		// 				$("<div>", { class: "tal grid mt25" }).append(
		// 					$("<div>", { class: "grid pl15" }).append(
		// 						$("<div>", { class: "mc1 fs12", text: "Tổng số tiền:" }),
		// 						$("<div>", { class: "tổngtiền ml10 vat", text: "0" }),
		// 						$("<div>", { class: "ml3", text: "₫" })
		// 					),
		// 					$("<div>", { class: "btn bg1 cf bra3 dib bss bw1 bcd plr15 ptb7 pa r0 mr15 thanhToán", text: "Thanh toán" })
		// 				)
		// 			);
		// 			$(".danhsáchhàng").css({
		// 				height: window.outerHeight - $(".nútThanhToán").outerHeight() - 10
		// 			});
		// 			$(".chứaRỏHàng").find(".thànhtiền").trigger("thànhTiền");
		// 			$(".danhsáchhàng").tổngTiền();
		// 			//LƯU GIỎ HÀNG
		// 			đệmGiỏ($(".chứaRỏHàng"))
		// 		} else {
		// 			$(this).iMsg("Vui lòng chọn ít nhất 1 đồ cúng lên mâm.")
		// 		}
		// 	})
		// )
	).chờ(function () {
		cuộnMâm = $(".ôCóMâm").offset().top + $(".thắpHương").scrollTop();
	}, 1500);
	thẻ.find(".bỏẨn").sửaLớp("-o0");
	return thẻ;

};
function tìmKiếmChânLinh() {
	CẦN.db("bảng." + tblMộ, function () {
		xửLý("đốiTượng.tải.85a06270ffdb31728ad4dd341891d457", function (dataA) {
			CẦN.db("85a06270ffdb31728ad4dd341891d457." + dataA, function (r) {
				var chủQuyền, idMộnày;
				var k,
					mâm,
					i = i * 1;
				if ($(".chứaMâmCúng").length) {
					$(".chứaMâmCúng").empty().append(
						mâmCơm(chủQuyền, idMộnày)
					)
				}
				$("body").sửaLớp("oh").append(
					!$(".chứaMâmCúng").length ? $("<div>", { class: "chứaMâmCúng pf l0 t0 o0" }).css({
						zIndex: "-1"
					}).empty().append(
						mâmCơm(chủQuyền, idMộnày)
					) : ud,
					$("<div>", { id: "chứa", class: "wh1v ffg pf l0 t0 z9" }).append(
						$("<div>", { class: "pf l0 t0 lh1 pa10 bg1o bấmĐc bg1h fs09 cf z5 ", icon: "keyboard_backspace::vam,tac,lh1,fs12", text: "Quay lại" }).click(function () {
							vàoURL("/");
							$("body").sửaLớp("-oh");
							$(this).parent().ẩn("slideOutRight", 445, function () {
								$(this).remove();
							})
						}),
						$("<div>", { class: "đổiVideo pf r0 t0 lh1 pa10 bg1o bấmĐc bg1h fs09 cf z5", icon: "ondemand_video::vam,tac,lh-1,fs12", text: "Video" }),
						(là("A") ? $("<div>", { class: "pf b0 z5 cf mb50 l50 ttx pa10 bg1 bấmĐc fs09 fwb", tip: "Bảng quản trị đồ cúng", text: "Quản trị đồ cúng", icon: "add::vam,tac" }).click(function () {
							var à = $(this);
							à.iMsg($("<img>", { class: "load wh50", src: plink + "img/loading.gif" }), 1)
							quảnTrị.bảng(tblĐồGiỗ, function () {
								à.iMsg();
							});
						}) : ""),
						$("<div>", { class: "pfi l0 b0 col-md-6 col-xs-12", id: "chứaCopy" }).css({
							zIndex: "-1",
						}),
						$("<div>", { class: "pf l0 b0 mt25 pa15 dn gri bóng bgcf z9" }).append(
							$("<div>", { class: "chứaSảnPhẩm grid wsn oh" }),
							$("<div>", { class: "mlr10 wh40 bra50 bar cl1h bc1h bấmĐc bss bw1 bcd pr" }).append(
								$("<div>", { class: "pa l50 t50 tt fs11", icon: "" })
							)
						).động("slideInRight"),
						$("<div>", { class: "wh1v bgcf" }).append(
							$("<div>", { class: "bgcf8 h1 bra5 oh", classM: "-oh,-h1" }).append(
								$("<div>", { class: "chứaNộiDung h1 container df fdc", classM: "-h1" }).append(
									$("<div>", { class: "wh1v pf l0 t0 " }).append(
										$("<div>", { class: "pr h1" }).append(
											$("<video>", { src: plink + "img/video1.mp4", class: "w1", classM: "-w1,h1", loop: true, id: "video", loại: 1 }).hide().chờ(function () {
												$(this).fadeIn().prop("muted", true)[0].play();
											}, 100)
										)
									),
									$("<div>", { class: "chứaDanhSách pr z3 h1 grid tac ptb10 dn-xs cb", classM: "plr5,-ptb10,-mt10,-h1,h1v" }).css({
										transition: là("M") ? "none" : "height 1s, left 1s, top 1s"
									}).append(
										$("<div>", { class: "pa l50 t50 tt w80 tal o1 chứaTìmKiếm", classM: "-w80,plr10,w1" }).css({
											transition: là("M") ? "none" : "padding 1s, top 1s, width .3s"
										}).append(
											$("<div>", { class: "bra5 oh" }).append(
												$("<div>", { class: "pr cb df", classM: "-df" }).append(
													là("M") ? $("<div>", { class: " bg1o w70 pt15 plr15 brb3 brtr3 bgcf", classM: "w1,-w70" }).append(
														$("<div>", { class: "cf pb15 tac lh15 ts1", text: "Lạc Hồng Viên là công viên nghĩa trang đầu tiên tại Đông Nam Á triển khai dịch vụ Cúng giỗ online. Tại đây người thân ở xa có thể thực hiện cúng giỗ ngay trên nền tảng website mà không cần phải...." }),
														$("<div>", { class: "pb15 fs11 fwb cl3 ls1", text: "Tìm kiếm chân linh" }),
														$("<div>", { class: "chứaInput" })
													) : ud,
													$("<div>", { class: "w30 tal", classM: "w1 cb" }).append(
														["Tìm kiếm theo tên", "Tìm kiếm theo ngày tháng mất", "Tìm kiếm theo vị trí mộ", "Danh sách ngày giỗ sắp tới"].map(function (v, i) {
															return $("<div>", { class: "danhSáchTìmKiếm bg4 bg1oh cf cf", loại: i, at: ["họTên", "ngàyMất", "vịTrí", "lọc"][i] }).append(
																$("<div>", { class: "pa15 bấmĐc ", text: v, icon: ["portrait", "date_range", "room", "replay"][i] + "::vam,tac,mr5" })
															)
														})
													),
													$("<div>", { class: " bg1o w70 pt15 plr15 brb3 brtr3 bgcf dn-xs", classM: "w1,-w70" }).append(
														$("<div>", { class: "cf pb15 tac lh15 ts1", text: "Lạc Hồng Viên là công viên nghĩa trang đầu tiên tại Đông Nam Á triển khai dịch vụ Cúng giỗ online. Tại đây người thân ở xa có thể thực hiện cúng giỗ ngay trên nền tảng website mà không cần phải...." }),
														$("<div>", { class: "pb15 fs11 fwb cl3 ls1", text: "Tìm kiếm chân linh" }),
														$("<div>", { class: "chứaInput" })
													)
												),
												là("M") ? $("<div>", { class: "tìmKiếmDiĐộng" }) : ud
											)
											// )
										)
									),
									là("M") ? ud : $("<div>", { class: "ptb15 bra5 oh bg4 oya bgcf8 pr z7 kếtQủaTìmKiếm pa container h1v dn" }).css({
										transition: "margin .5s",
										boxShadow: "0px -6px 10px 0px rgba(0,0,0,.15)"
									}).append(
										$("<div>", { class: "chứaKếtQủa h1i" }).css({ heigth: $('html').outerHeight() * 70 / 100 })
									)
								)
							)
						)
					)
				).on("click", ".đổiVideo", function () {
					var é = plink + "img/video",
						l = $("#video").attr("loại");
					$("#video").attr("src", é + (l * 1 == 1 ? "2" : "1") + ".mp4").prop("muted", true)[0].play();
					if (l * 1 == 1) {
						$("#video").attr("loại", 2)
					} else {
						$("#video").attr("loại", 1)
					}
				}).on("click", ".danhSáchTìmKiếm", function () {
					var a = $(this),
						l = a.attr("loại") * 1,
						at = a.attr("at"),
						pl = "Nhập " + (!l ? "họ tên đầy đủ" : l == 1 ? "ngày tháng mất" : "vị trí phần mộ"),
						é = $(".chứaInput");
					a.sửaLớp("bg1o,-bg4").siblings().sửaLớp("bg4,-bg1o");
					if (at == "lọc") {
						var t = now(),
							è = âmLịch(t.J, t.N, t.f, 7.0);
						(là("M") ? $(".tìmKiếmDiĐộng") : é).empty().append(
							$("<div>", { class: "grid tìmkhoảntg" }).append(
								[
									{
										chữ: "7 ngày tới", tg: è, sl: 7
									},
									{
										chữ: "15 ngày tới", tg: è, sl: 15
									},
									{
										chữ: "1 tháng tới", tg: è, sl: 30
									}
								].map(function (v) {
									return $("<div>", { class: "pa10 bsi bra5 bgcf mr50 bg4h cfh bấmĐc cl1 tac fs09 fwb", classM: "-mr50,mtb10,db,w1", text: v.chữ }).click(function () {
										$(".chứaTìmKiếm").sửaLớp("o0,-o1")
										$(this).sửaLớp("bg4,-cl1,cf").siblings().sửaLớp("-bg4,cl1,-cf");
										var n = è[0], t = è[1], sl = v.sl, e = [];
										$.map(dataA, function (dòng, i) {
											var a = config("85a06270ffdb31728ad4dd341891d457." + dòng),
												ngàyMấtÂm = a[226496];
											for (var j = 0; j < (sl * 1); j++) {
												var nM = n + j;
												if (nM >= 30) {
													n = nM - 30;
													t = t + 1;
													if (t > 12)
														t = 1;
												}
												t = t.toString();
												nM = nM.toString();
												var nMt = nM.length < 2 ? "0" + nM : nM,
													tt = t.length < 2 ? "0" + t : t,
													nta = nMt + "/" + tt;
												if (ngàyMấtÂm.search(nta) >= 0) {
													e.push(a)
												}
											}
										});
										$(".chứaKếtQủa").hiệnKếtQủa({
											data: e,
											sl: sl,
											ngàyÂm: è
										})
									})
								})
							).động("slideInUp")
						)
					} else {
						if (là("M") && a.siblings()) {
							a.siblings().find(".ôTìmKiếm").slideDown(345, function () {
								$(this).remove();
							})
						}
						(là("M") ? $(".tìmKiếmDiĐộng") : é).empty().append(
							$("<div>", { class: "pr ôTìmKiếm" }).tìmKiếm({
								loại: at,
								pl: pl,
								kếtQủa: là("M") ? "" : $(".chứaKếtQủa")
							}).động("slideInDown", 345)
						)[là("M") ? "động" : "show"](là("M") ? "slideInRight" : "");
					}
				}).find(".danhSáchTìmKiếm:eq(0)").click();
				$(".chứaDanhSách").show();
			})
		})
	});
};
function giaoDiệnCúngGiỗ(id) {
	màuC = $.đệm("mãMàu");
	$("body").append(
		$("<div>", { class: "nềnCHờ z999 pf l0 t0 wh1v bgcf" }).append(
			$("<img>", { src: plink + "img/loading.gif", width: "150px", class: "pa l50 t50 tt" })
		)
	);
	var x = khung(
		$("<div>", { class: "tảiChờ2 wh1 chứaMộ" }).each(function () {
			var dít = $(this);
			var idNgườiMất = id;
			CẦN.db("bảng." + tblĐồGiỗ, function (e) {
				xửLý("đốiTượng.tải." + tblĐồGiỗ, function (me) {
					xửLý("đốiTượng.tải.85a06270ffdb31728ad4dd341891d457", function (d) {
						CẦN.db("85a06270ffdb31728ad4dd341891d457." + d, function (r) {
							var idtk = tôi.lấy("i");
							xửLý("đốiTượng.tải.tàiKhoản", function (mảngTK) {
								CẦN.db("tàiKhoản." + mảngTK, function () {
									var a1 = config("tàiKhoản." + idtk + ".quanHệ.sởHữu.012b7365f8cb7ddaea55db72ba0ba898.0") == ud ? null : config("tàiKhoản." + idtk + ".quanHệ.sởHữu.012b7365f8cb7ddaea55db72ba0ba898.0");
									CẦN.db("012b7365f8cb7ddaea55db72ba0ba898." + a1, function () {
										var idu = config("012b7365f8cb7ddaea55db72ba0ba898." + a1 + ".quanHệ.liênKết.85a06270ffdb31728ad4dd341891d457.0") == ud ? null : config("012b7365f8cb7ddaea55db72ba0ba898." + a1 + ".quanHệ.liênKết.85a06270ffdb31728ad4dd341891d457.0");
										$.map(d, function (dòng, i) {
											var d = config("85a06270ffdb31728ad4dd341891d457." + dòng);
											if (idNgườiMất == d["226490"]) {
												var họTênChânLinh = d[226491],
													ngàyÂm = d[226496].split("/"),
													danh = chứcDanh(d["226493"] * 1, d["226492"]),
													chấtL = bỏDấu($.đệm("chấtLiệu")),
													dữLiệuBảng = me,
													cảmƠn = d[226503],
													idMộnày = dòng,
													biếtƠn = d[226504],
													tặngHoa = d[226505],
													lờiNhắn = d[226507],
													lô = d[226498],
													dãy = d[226499],
													khu = d[226500],
													đồi = d[226501],
													họTên = d[226491],
													ngàySinh = d[226494],
													url = d[226508],
													ngàyMấtDương = d[226495],
													địaChỉ,
													chủQuyền = (idtk == ud) ? "lạ" : (idu == idMộnày) ? "chủ" : "khách";
												if (url) {
													url = d[226508].slice(d[226508].indexOf("[") + 1, d[226508].indexOf("]"));
												}
												// var dữL = Jd(data)[0],
												// 	ngàyÂm = dữL.ngaymatam.split("/"),
												// 	danh = chứcDanh(dữL.tho * 1, dữL.gioitinh),
												// 	chấtL = bỏDấu($.đệm("chấtLiệu"));
												cl("đây là: " + idMộnày)
												dít.append(
													$("<div>", { class: "thắpHươngẨn dn" }).on("click", function () {
														xửLý("đốiTượng.tạo.f635c9dc58e3b8dd9220293e96758e6b", function (iddòng) {
															data = {
																414556: tôi.lấy("i"),
																414557: idMộnày,
																414558: "thắpHương",
																// 414569:"",
																414570: now().u,
																414571: "0",
															};
															var lời = "Thắp hương";
															xửLý("thuộcTính.sửa.f635c9dc58e3b8dd9220293e96758e6b", { d: [iddòng, data] }, function (status) {
																if (status == 1) {
																	thôngBáo.ok(lời + " thành công!")
																	$(".đãThắpHương").trigger("lấyLuôn")
																} else {
																	thôngBáo.lỗi(lời + " thất bại!")
																}
															});
														})
													}),
													$("<div>", { class: "cb pr" }).append(
														là("M") ? $("<div>", { class: " tabĐầu pr cb w1 pa5" }).append(
															$("<div>", { class: "bss bb1 bc1 grid ", }).append(
																range(0, 2).map(function (v, i) {
																	return $("<div>", { class: "mr10 pa10 brt10 cfh bg1h tagTínhNăng fs09 bgcfx bấmĐc tduh", text: ["Cúng giỗ online", "Đặt đồ thực tế", "Gói giỗ"][i], id: ["chọn", "đặt1", "góiSp"][i] });
																})
															)
														) : ud,
														$("<div>", { class: "col-md-5 col-xs-12 plr50 fri tìmXóa chứaRỏHàng h1 oya ptb10", classM: "plr5,-plr50" }),
														$("<div>", { class: "col-md-7 col-xs-12 pl50 h1", classM: "-pl50,pa5" }).append(
															$("<div>", { class: "h1 pr" }).append(
																!là("M") ? $("<div>", { class: " tabĐầu pr pt10 z15 dn-xs" }).append(
																	$("<div>", { class: "bss bb1 bc1 grid " }).append(
																		range(0, 2).map(function (v, i) {
																			return $("<div>", { class: "mr10 pa10 brt10 cfh bg1h tagTínhNăng fs09 fwb bgcfx bấmĐc tduh", text: ["Cúng giỗ online", "Đặt đồ thực tế", "Gói giỗ"][i], id: ["chọn", "đặt1", "góiSp"][i] });
																		})
																	),
																	$("<div>", { class: "pa r0 t50 tty mr10 grid" }).append(
																		//chọn màu và án gian
																	)
																) : ud,
																$("<div>", { class: " danhSáchSảnPhẩm oh ", classM: "-h1" }).each(function () {
																	var é = $(this);
																	é.empty().append(
																		// là("M")?$("<div>",{ class:"plr10 flex bg1 cf" }).each(function(){
																		// 	var à = $(this);
																		// 	à.append(
																		// 		[
																		// 			{tên:"Chọn màu nền",sổ:mãMàu},
																		// 			{tên:"Chọn khung ảnh",sổ:[plink+"img/anh-tho.png",plink+"img/khung1.png",plink+"img/khung2.png"]},
																		// 			{tên:"Chọn án gian",sổ:["Chất liệu sứ","Chất liệu đồng"]},
																		// 			// {tên:"Chọn loại hương",sổ:["Hương trầm","Hương vàng"]}
																		// 		].map(function(v,i){
																		// 			return $("<div>",{ class:" fwb bấmĐc bg1oh ph pr", id:v.tên.toID() }).append(
																		// 				$("<div>",{ class:"pa10 fs085 lh1", text:v.tên }),
																		// 				i!=1?$("<div>",{ class:(!i?"tac ":"") + "menuChèn pa t1 pa5 l0 phv bgcf grid dn z9" }).css({
																		// 					width:!i?"200px":ud
																		// 				}).append(
																		// 					v.sổ.map(function(é,è){
																		// 						if(!i){
																		// 							return $("<div>",{ class:"pa5 bấmĐổi", id:"mãMàu", mãMàu:é }).append(
																		// 								$("<div>",{ class:"loạiMàu toDần bấmĐc bra5 bấmĐc bss bw2 bct bc1h pr" }).css({
																		// 									backgroundColor:é,
																		// 									width:"15px",
																		// 									height:"15px"
																		// 								})
																		// 							)
																		// 						}else{
																		// 							return $("<div>",{ class:"plr5 bsdo wsn bb1 bcd bb0lc bấmĐổi", id:"chấtLiệu", chấtliệu:["su","dong"][è] }).append(
																		// 								$("<div>",{ class:"ptb10 bấmĐc bấmĐc tduh ", text:é })
																		// 							)
																		// 						}
																		// 					})
																		// 				):ud,
																		// 			)
																		// 		})
																		// 	);
																		// }):ud,
																		$("<div>").each(function () {
																			var x = $(this),
																				c = x.children().length;
																			if (!c) {
																				if ($(".chứaMâmCúng").length) {
																					x.empty().append($(".chứaMâmCúng:eq(0)").children())
																				} else {
																					x.empty().append(mâmCơm(chủQuyền, idMộnày));
																				}
																			}
																		}),
																		$("<div>", { class: "chứaSlide pa w1 l0 b0 z99 mb10 cb bgcfx bss tac bw1 bcd mt10", classM: "-bc1,-bb0,-bw1,-bss" }).append(

																			$("<div>", { class: "grid tac z99 dib mlra cl1 fs09 pa5 hiệnSảnPhẩm bấmĐc", icon: "arrow_downward::lh1,fs12" }).append(
																				$("<div>", { class: "đổiChữ", text: "Thu gọn" })
																			),
																			$("<div>", { class: "sẽẨn pr b0" }).css({
																				transition: "height 2s",
																				height: "auto"
																			}).append(
																				$("<div>", { class: "pr" }).append(
																					$("<div>", { class: "grid tal bộLọc cb wsn oh mlr50" }).each(function () {
																						var à = $(this),
																							a = 173020,
																							b = ["tất cả đồ cúng"];
																						dữLiệuBảng.map(function (v) {
																							var loại = config(tblĐồGiỗ + "." + v + "." + a),
																								é = 0;
																							b.map(function (v) {
																								if (v == loại || loại == "gói" || loại == "cỗ chay")
																									é = 1;
																								return false;
																							});
																							if (!é)
																								b.push(loại);
																						});
																						à.append(
																							b.map(function (v) {
																								// v=dữLiệu.ô(bảng, 173020, v);
																								return $("<div>", { class: "oh" }).append(
																									$("<div>", { class: "pa10 mr5 pr ttc l0 bấmĐc tduh cl1h fs09 fwb tagSảnPhẩm", text: v, id: v })
																								);
																							})
																						);
																					}),
																					$("<div>", { class: "plr3 c6 fs12 pa t50 tty pl10 l0 bra3 bấmĐc nútSlideTag prev cl1h", icon: "keyboard_arrow_left::vam,tac,lh-1,fs13,pa,l50,t50,tt" }).css({
																						width: "50px",
																						height: "50px"
																					}),
																					$("<div>", { class: "plr3 c6 fs12 pa t50 tty pr10 r0 bra3 bấmĐc nútSlideTag next cl1h ", icon: "keyboard_arrow_right::vam,tac,lh-1,fs13,pa,l50,t50,tt", }).css({
																						width: "50px",
																						height: "50px"
																					})
																				),
																				$("<div>", { class: "bgcf" }).append(
																					$("<div>", { class: "grid oh oya wsn cb sảnPhẩmLọc pr tal z15" }),
																					$("<div>", { class: "pr chứaNút grid tac" }).append(
																						$("<div>", { class: "sốLượngSp pt5 pb10 cl1 fs09 fwb ls1 lh1" }),
																						$("<div>", { class: "pt5 pb10 pr plr5 pa l0 t50 tty cb w1" }).append(
																							$("<div>", { class: "plr3 c6 bss fl bw1 fs12 bcd bc1h cl1h bra3 bấmĐc nútSlide prev mr3", icon: "keyboard_arrow_left::vam,tac,lh-1" }),
																							$("<div>", { class: "plr3 c6 bss fr bw1 fs12 bcd bc1h cl1h bra3 bấmĐc nútSlide next ", icon: "keyboard_arrow_right::vam,tac,lh-1", })
																						)
																					)
																				)
																			)
																		)
																	);
																})
															)
														)
													)
												);
												dít.on("click", ".nútSlideTag", function () {
													var à = $(this),
														x = à.cóLớp("next"),
														bố = à.siblings(".bộLọc");
													bố.animate({
														scrollLeft: (x ? "+=" : "-=") + bố.outerWidth()
													})
												}).on("click", ".tươngTác", function () {
													// cl(config("tàiKhoản."+tôi.lấy("i")))
													var a = $(this),
														c = a.children(".tăngDần"),
														số = c.text() * 1,
														id = a.ID(),
														c1 = a.children("o");
													//!/!/!///////////////////////////////////////////////////////////////////////////////////////!
													xửLý("đốiTượng.tạo.f635c9dc58e3b8dd9220293e96758e6b", function (iddòng) {
														if (id != "gửiLờiNhắn") {
															c.text(số > 0 ? số + 1 : 1);
															var giátrị = (id == "biếtƠn") ? "biếtƠn" : "tặngHoa",
																data = {
																	414556: tôi.lấy("i"),
																	414557: idMộnày,
																	414558: giátrị,
																	// 414569:"",
																	414570: now().u,
																	414571: "0",
																};
															c1.sửaLớp("cl11")
															var lời = (id == "biếtƠn") ? "Biết ơn" : "Tặng hoa";
															xửLý("thuộcTính.sửa.f635c9dc58e3b8dd9220293e96758e6b", { d: [iddòng, data] }, function (status) {
																if (status == 1) {
																	a.sửaLớp("pen")
																	thôngBáo.ok(lời + " thành công!")
																	$(".đãThắpHương").trigger("lấyLuôn")
																} else {
																	thôngBáo.lỗi(lời + " thất bại!")
																}
															});
															//!
															var beta = {
																[(id == "biếtƠn") ? 226504 : 226505]: c.text()
															};
															xửLý("thuộcTính.sửa.85a06270ffdb31728ad4dd341891d457", { d: [idMộnày, beta] }, function (status) {
																if (status == 1) {
																	a.sửaLớp("pen")
																} else {
																}
															});
														} else {
															var popUp;
															if (chủQuyền != "lạ") {
																popUp = $("<div>", { class: "gửiLờiNhắn" }).append(
																	$("<div>", { class: "fwb cl1", text: "Gửi lời nhắn: " }),
																	$("<div>", { id: "nộiDungLờiNhắn", class: "mtb10 pa10 b1sd bgcyl bra3", placeholder: "Nhập nội dung", contenteditable: true }).css({
																		width: "300px"
																	}),
																)
															} else {
																popUp =
																	$("<div>", { class: "gửiLờiNhắn" }).append(
																		$("<div>", { class: "fwb cl1", text: "Nhập họ tên: " }),
																		$("<div>", { id: "họTênTK", class: "mtb10 pa10 b1sd bgcyl bra3", placeholder: "Họ và tên", contenteditable: true }).css({
																			width: "300px"
																		}),
																		$("<div>", { class: "fwb cl1", text: "Gửi lời nhắn: " }),
																		$("<div>", { id: "nộiDungLờiNhắn", class: "mtb10 pa10 b1sd bgcyl bra3", placeholder: "Nhập nội dung", contenteditable: true }).css({
																			width: "300px"
																		}),
																	)
															}
															a.iMsg(
																$("<div>").append(
																	popUp,
																	$("<div>", { class: "grid tar" }).append(
																		$("<div>", { class: "bg1 bấmĐc fs09 fwb cf tduh pa7 bar bra3", text: "Lưu ", icon: "save" })
																			.on("click", function () {
																				data = {
																					414556: (chủQuyền != "lạ") ? tôi.lấy("i") : $("#họTênTK").ival(),
																					414557: idMộnày,
																					414558: "lờiNhắn",
																					414569: $("#nộiDungLờiNhắn").iVal(),
																					414570: now().u,
																					414571: "-1",
																				};
																				xửLý("thuộcTính.sửa.f635c9dc58e3b8dd9220293e96758e6b", { d: [iddòng, data] }, function (status) {
																					if (status == 1) {
																						a.sửaLớp("pen")
																						thôngBáo.ok("Gửi lời nhắn thành công!")
																						popUp.parent().parent().parent().remove();
																						$(".đãThắpHương").trigger("lấyLuôn")
																					} else {
																						thôngBáo.lỗi("Gửi lời nhắn thất bại!")
																					}
																				});
																			})
																	)
																), 1)
														}
													})
													//!/!//!//////////////////////////////////////////////////////////////////////////////////////!
												}).on("click", ".tagTínhNăng", function () {
													var i = $(this),
														é = $(".danhSáchSảnPhẩm"),
														id = i.ID();
													i.lớpRiêng("bg1 cf");
													switch (id) {
														case "chọn":
															$(".chứaRỏHàng").sửaLớp("-h1,-oya,h1,ohi").empty().append(
																$("<div>", { class: "sẽNổi pr" }).append(
																	$("<div>", { class: "df" }).append(
																		$("<div>", { class: "w30 ass mr5 pr" }).append(
																			$("<div>", { class: "bấmĐc pa t0 l0 wh1 bgpc bgrn bss bw1 bcd khungẢnhngoài df fdc jcsc tac bgsc", text: "Click thay ảnh", title: "Click thay ảnh" }).each(function () {
																				var t = $(this);
																				if (url != ud) {
																					t.text("").css({
																						backgroundImage: "url('" + dữLiệu.ảnh(url, "i", "500px") + "')"
																					})
																				}
																				if (chủQuyền != "chủ") {
																					t.on("click", function () {
																						thôngBáo.lưuÝ("Bạn không có quyền thay ảnh!")
																					})
																				}
																				if (chủQuyền == "chủ") {
																					t.on("click", function () {
																						$(".ẤnThayẢnh").trigger("click")
																					})
																				}
																			})
																		),
																		$("<div>", { class: "w70 ass pl10 pr", classM: "-pl10" }).append(
																			$("<div>", { class: "pb169 grid bss bw1 bcd pr sờLai" }).each(function () {
																				var t2 = $(this);
																				dữLiệuẢnh = d[226509];
																				var mảngẢnh = [];
																				if (dữLiệuẢnh.length > 0) {
																					mảngẢnh = Jd(('["' + dữLiệuẢnh.replace(/,/g, '","') + '"]').replace(/ /g, ""));
																				} else {
																					mảngẢnh.push(44222)
																				}
																				t2.sờLai(
																					mảngẢnh,
																					{
																						động: "slideInRight",
																						tựChạy: 3454,
																						cuộn: false,
																						phụ: "dn"
																					}
																				)
																				if (url != ud) {
																					$(".ẤnThayẢnh").css({
																						backgroundImage: "url('" + dữLiệu.ảnh(url, "i", "500px") + "')",
																					});
																					$(".nhấnThayẢnh").remove();
																				}
																			}),
																			$("<div>", { class: "pa t0 r0 pa5 bg1 cf z15 bấmĐc", text: "Thay ảnh" }).each(function () {
																				var t = $(this);
																				if (chủQuyền != "chủ") {
																					t.sửaLớp("dn");
																				}
																			}).on("click", function () {
																				var dữLiệuẢnh = d[226509],
																					mảngẢnh = [];
																				if (dữLiệuẢnh.length > 0) {
																					mảngẢnh = Jd('["' + dữLiệuẢnh.replace(/,/g, '","') + '"]');
																				} else {
																					mảngẢnh.push(44222)
																				}
																				khung((
																					$("<div>", { class: "" }).append(
																						$("<div>", { class: "", text: "Hướng dẫn:" }).append(
																							$("<div>", { class: "", text: "- Click (x) để xóa ảnh." }),
																							$("<div>", { class: "", text: "- Click thêm để thêm ảnh vào Slide." })
																						),
																						$("<div>", { class: "pa25 mt25 cb cácẢnh" }).each(function () {
																							var t = $(this);
																							$.map(mảngẢnh, function (d, i) {
																								t.append(
																									$("<div>", { class: "col-xs-3 pa5 pr" }).append(
																										$("<div>", { class: "từngẢnh", id: d }).css({
																											backgroundImage: (d * 1 != d && d.search("lachongvien") >= 0) ? "url('" + d + "')" : "url('" + dữLiệu.ảnh(d, "i", "500px") + "')",
																											paddingBottom: "60%",
																											backgroundSize: "cover",
																											backgroundPosition: "center center"
																										}),
																										$("<div>", { class: "pa r0 t0 tt fwb mt15 bra50 bấmĐc bw1 bss", icon: "close::vam,tac,lh1" }).on("click", function () {
																											if (confirm("Bạn có muốn xóa ảnh này!")) {
																												$(this).parent().remove();
																											}
																										})
																									)
																								)
																							})
																						}),
																						$("<div>", { class: "mt25 mb10 tar", text: "" }).append(
																							$("<div>", { class: "btn mlr15 dib pa5 plr10 bra3 cf", text: "Thêm" }).css({
																								backgroundColor: "#a80b0acc"
																							}).tảiLên({
																								loại: "ảnh",
																								đa: true,
																								đổi: function (s) {
																									mảngẢnh.push(s[0])
																									$(".cácẢnh").append(
																										$("<div>", { class: "col-xs-3 pa5 pr" }).append(
																											$("<div>", { class: "từngẢnh", id: s[0] }).css({
																												backgroundImage: "url('" + dữLiệu.ảnh(s[0], "i", "500px") + "')",
																												paddingBottom: "60%",
																												backgroundSize: "cover",
																												backgroundPosition: "center center"
																											}),
																											$("<div>", { class: "pa r0 t0 tt fwb mt15 bra50 bấmĐc bw1 bss", icon: "close::vam,tac,lh1" }).on("click", function () {
																												if (confirm("Bạn có muốn xóa ảnh này!")) {
																													$(this).parent().remove();
																												}
																											})
																										)
																									);
																								},
																								lỗi: function () {
																									$(this).lỗi("Vui lòng thử lại.");
																								}
																							}).sửaLớp("-oh"),
																							$("<div>", { class: "btn mlr15 dib pa5 plr10 bra3 bg1o cf", text: "Lưu" }).on("click", function () {
																								var chuỗiMới;
																								$(".cácẢnh").find(".từngẢnh").each(function () {
																									chuỗiMới = chuỗiMới + $(this).attr("id") + ", ";
																								})
																								chuỗiMới = chuỗiMới.substr(0, chuỗiMới.lastIndexOf(",")).replace("undefined", "").replace(/ /g, "");
																								xửLý("thuộcTính.sửa." + "85a06270ffdb31728ad4dd341891d457", { d: [dòng, { 226509: chuỗiMới }] }, function (status) {
																									if (status == 1) {
																										thôngBáo.ok("Lưu slide ảnh thành công!")
																									} else {
																										thôngBáo.lỗi("Lưu slide ảnh thất bại!")
																									}
																								});
																								mảngẢnh = Jd('["' + chuỗiMới.replace(/,/g, '","') + '"]');
																								cl(mảngẢnh);

																								$(".sờLai").empty().sờLai(
																									mảngẢnh,
																									{
																										động: "slideInRight",
																										tựChạy: 3454,
																										cuộn: false,
																										phụ: "dn"
																									}
																								)
																								$("#khungslide").find(".đóngKhung").trigger("click")
																							}),
																							$("<div>", { class: "btn mlr15 dib pa5 plr10 bra3 bg1o cf", text: "Đóng" }).on("click", function () {
																								$("#khungslide").find(".đóngKhung").trigger("click")
																							})
																						)
																					)
																				), "khungslide", {
																					tiêuĐề: "Slide ảnh",
																					ngoài: "",
																					trong: "col-xs-12,col-sm-8",
																					koTắt: true,
																					onRender: function () {
																					},
																					onShow: function () {
																					},
																					onHide: function () {
																					},
																				})
																			})
																		)
																	),
																	$("<div>", { class: "pr tar mtb15 " }).append(
																		$("<div>", { class: "bss bw1 bcd bl0 pr br0 flex ptb15 w1" }).append(
																			$("<div>", { class: "pa l50 t0 tt bgcf8 cl1 fs13 fwb", text: "Góc tưởng niệm" }),
																			[
																				// {tên:dữL.cảmƠn?dữL.cảmƠn:"Cảm ơn",ic:"favorite_border",an:"",id:""},
																				{ sốLượng: biếtƠn ? biếtƠn : "", tên: "Biết ơn", ic: "favorite", an: "", id: "" },
																				{ sốLượng: tặngHoa ? tặngHoa : "", tên: "Tặng hoa", ic: "local_florist", an: "", id: "" },
																				{ sốLượng: lờiNhắn ? lờiNhắn : "", tên: "Gửi lời nhắn", ic: "sms", an: "", id: "" },
																			].map(function (v, i) {
																				return $("<div>", { class: "mt10" }).append(
																					$("<div>", { class: "tac fwb bấmĐc cl11h grid tươngTác", icon: v.ic + "::vam,lh-1,fs13", id: v.tên.toID() }).css({
																						fontSize: "1.6em"
																					}).append(
																						$("<div>", { class: "tăngDần c1i", text: v.sốLượng, }).css({
																							fontSize: "0.9rem"
																						}),
																						$("<div>", { text: v.tên, class: "w1 tac mt10 c1i" }).css({
																							fontSize: "0.9rem"
																						})
																					)
																				)
																			})
																		)
																	),
																	$("<div>", { class: "pb15 cb" }).append(
																		$("<div>", { class: "thôngTin" }).append(
																			$("<div>", { class: "fs13 fwb ", text: danh + " " + họTên }),
																			$("<div>", { text: "Ngày sinh: ", z: ngàySinh, class: "pt10 fs11 fwb" }),
																			$("<div>", { text: "Ngày giỗ: ", z: ngàyMấtDương + " (" + ngàyÂm[0] + "/" + ngàyÂm[1] + "-Âm lịch" + ")", class: "pt10 fs11 fwb" }),
																			$("<div>", { class: "fwb fs11 pt10", text: "Quê quán: ", z: địaChỉ ? địaChỉ : "" }),
																			$("<div>", { text: "Vị trí phần mộ: ", z: "Lô " + lô + " - Dãy " + dãy + " - Khu " + khu + " - Đồi " + đồi, class: "pt10 fs11 fwb" })
																		)
																	)
																),
																$("<div>", { class: "đãThắpHương h1" }).on("lấyLuôn", function () {
																	$(this).empty().append(
																		$("<div>", { class: " bss bt1 bcd pr pt15" }).css({
																			height: $(".chứaRỏHàng").height() - $(".sẽNổi").height()
																		}).each(function () {
																			var x = $(this);
																			xửLý("đốiTượng.tải.f635c9dc58e3b8dd9220293e96758e6b", { d: { từKhóa: [idMộnày + "", [414557]] } }, function (mảngDòng) {
																				CẦN.db("f635c9dc58e3b8dd9220293e96758e6b." + mảngDòng, function (data) {
																					var dL = [],
																						đếm = 0;
																					$.map(mảngDòng.reverse(), function (dòng, i) {
																						var a = config("f635c9dc58e3b8dd9220293e96758e6b." + dòng),
																							ngườiGửi = (a[414556] * 1 > 0) ? ((config("tàiKhoản." + a[414556] + ".ọ") == ud ? "" : config("tàiKhoản." + a[414556] + ".ọ")) + (config("tàiKhoản." + a[414556] + ".ê") == ud ? "" : config("tàiKhoản." + a[414556] + ".ê"))) : a[414556],
																							ngườiNhận = họTênChânLinh,
																							hànhĐộng = a[414558] == "biếtƠn" ? " đã biết ơn " : (a[414558] == "tặngHoa" ? " đã tặng hoa cho " : (a[414558] == "thắpHương" ? " đã thắp hương cho " : " đã gửi lời nhắn cho ")),
																							thờiGian = iDate(a[414570]).j + "/" + iDate(a[414570]).n + "/" + iDate(a[414570]).y + " - " + iDate(a[414570]).h + ":" + iDate(a[414570]).m,
																							icon1 = $("<div>", { class: "wh40 dn-xs bra50 oh fl mr10 bgso bgpc bgrn" }).css({ backgroundImage: 'url("/img/iconcunggio/thaphuong.png")', backgroundSize: '80% 80%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }),//thắp hương;
																							icon2 = $("<div>", { class: "wh40 dn-xs oh fl mr10 df fdc jcsc" }).append(
																								$("<div>", { class: "tac fwb cl11 grid", icon: "favorite::vam,lh-1,fs16" })
																							),
																							icon3 = $("<div>", { class: "wh40 dn-xs oh fl mr10 df fdc jcsc" }).append(
																								$("<div>", { class: "tac fwb cl11 grid", icon: "local_florist::vam,lh-1,fs16" })
																							),
																							icon4 = $("<div>", { class: "wh40 dn-xs oh fl mr10 df fdc jcsc" }).append(
																								$("<div>", { class: "tac fwb cl1 grid", icon: "sms::vam,lh-1,fs16" })
																							),
																							icon = (a[414558] == "biếtƠn" ? icon2 : (a[414558] == "thắpHương" ? icon1 : (a[414558] == "tặngHoa" ? icon3 : icon4))),
																							tinNhắn = a[414569];
																						if (a[414558] == "lờiNhắn" && (a[414571] == -1)) {
																							đếm++;
																						}
																						if (ngườiGửi == "") ngườiGửi = "Khách";
																						dL.push({
																							ngườiGửi: ngườiGửi,
																							ngườiNhận: ngườiNhận,
																							hànhĐộng: hànhĐộng,
																							thờiGian: thờiGian,
																							icon: icon,
																							tinNhắn, tinNhắn,
																							loại: a[414558],
																							danh: danh,
																							id: dòng,
																							trạngThái: a[414571]
																						})
																					})
																					x.append(
																						$("<div>", { class: "dib fs09 fwb cl1 pa l0 t0 df jcsb w1 ", }).css({
																							transform: "translate(0, -50%)"
																						}).each(function () {
																							var t = $(this);
																							t.append(
																								$("<div>", { class: "bgcf", text: "Lịch sử cúng giỗ" }),
																							)
																							if (chủQuyền == "chủ") {
																								t.append(
																									$("<div>", { id: "icontinnhắn", class: " tac fwb cl1 grid bgcf pr10 pr bấmĐc ", icon: "sms::vam,lh-1,fs16", tip: "Quản trị tin nhắn" }).append(
																										$("<div>", { class: "pa b1 tt fs08" }).css({
																										}).each(function () {
																											if (đếm > 0) {
																												$(this).append(
																													$("<div>", { class: "cf đếmTN", text: đếm }).css({
																														transform: "translate(0%, 80%)",
																														background: "red",
																														linHight: "1.8em",
																														width: "1.8em",
																														borderRadius: "50%"
																													})
																												)
																											}
																										})
																									).on("click", function () {
																										khung((
																											$("<div>", { class: "pa10" }).each(function () {
																												var t = $(this),
																													x = 0;
																												t.append(
																													$("<table>", { class: "fs09" }).append(
																														$("<thead>", { class: "" }).append(
																															$("<tr>", { class: "" }).append(
																																$("<td>", { width: "10%", class: "tac fwb", text: "STT" }),
																																$("<td>", { width: "50%", class: "tac fwb", text: "Lời nhắn" }),
																																$("<td>", { width: "20%", class: "tac fwb", text: "Trạng thái" }),
																																$("<td>", { width: "20%", class: "tac fwb", text: "Hành động" }),
																															)
																														),
																														$("<tbody>", { class: "bảngLScúng" }).each(function () {
																															var t = $(this), x = 0;
																															({ x, đếm } = QTLScúng(dL, x, t, đếm));
																														})
																													),
																												)
																											})
																										), "quảnLýLờiNhắn", {
																											tiêuĐề: "Quản lý lời nhắn", //tên của khung nội dung
																											ngoài: "", //set các class cho nền đen
																											trong: "col-xs-12,col-sm-8", //set các class cho khung nội dung hiển thị
																											koTắt: true, //true: không tắt khung khi click vào nền đen
																											onRender: function () {
																											},
																											onShow: function () {
																											},
																											onHide: function () {
																											},
																										});
																										//!
																									}),
																								)
																							}
																						}),
																						$("<div>", { class: "pr10 oya h1 danhMụcLs", classM: "-pr10,plr10" }).each(function () {
																							var t = $(this);
																							LSCúngGiỗ(dL, t);
																						})
																					)
																				})
																			})
																		})
																	)
																})
															)
															break;
														case "đặt1":
															var gh = $.đệm("giỏHàng"),
																é = $(".chứaRỏHàng");
															é.empty().append(
																$("<div>", { class: "chứaListHàng oya oh tìmXóa" }).append(
																	bảngRỏHàng().each(function () {
																		var t = $(this);
																		$.map(gh, function (v, vt) {
																			t.append(dòngGiỏ1(vt + 1, v))
																		})
																	})
																),
																$("<div>", { class: "grid pr tar nútThanhToán" }).append(
																	$("<div>", { class: "grid pa l0 t50 tty" }).append(
																		$("<div>", { class: "mc1 fs12", text: "Tổng số tiền:" }),
																		$("<div>", { class: "tổngtiền ml10 vat", text: "0" }),
																		$("<div>", { class: "ml3", text: "₫" })
																	),
																	$("<div>", { class: "btn bg1 mtb15 cf bra3 bss bw1 bcd plr15 ptb7 thanhToán", text: "Thanh toán" })
																)
															);
															é.find(".chứaListHàng").css({
																height: dít.height() - $(".nútThanhToán").outerHeight()
															}).tổngTiền();
															var sp = $(".sảnPhẩmLọc").find(".checkSp"),
																kpv = 0;
															sp.map(function (v, i) {
																var id = $(i).attr("id"),
																	pvu = config(tblĐồGiỗ + "." + id + ".173021");
																if (!pvu) {
																	$(i).sửaLớp("dn");
																	kpv += 1;
																}
															})
															$(".sốLượngSp").each(function () {
																var t = $(this),
																	text = t.text().split("/"),
																	vt1 = text[0],
																	l = $(".sảnPhẩmLọc").find(".checkSp").length;
																t.text(vt1 + "/" + (l - kpv));
															})
															break;
														case "góiSp":
															var k = khung(
																$("<div>", { class: "khung plr50 pb25", classM: "-plr50" }).append(
																	$("<div>", { class: "ttu fs15 mc1 tac pt15 pb5 lh1 cl1", text: "Đặt gói giỗ" }),
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
																			$("<div>", { class: "chọngói plr15 bra3 ptb7 cf bar bg1 fs09 fwb chọngói bấmĐc", text: "Đặt gói", icon: "add" }).on("click", function () {
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
																				//$(".đặtGiỗTT").trigger("click")
																				// $(".chứaRỏHàng tbody").append(
																				// 	dòngGiỏ1("1",)//đang sửa ở đây
																				// )
																				var t = $(".thânGiỏ");
																				t.empty();
																				if (gsẵn) {
																					if (gsẵn.length > 0) {
																						CẦN.db(tblĐồGiỗ + "." + $.map(gsẵn, function (v) {
																							return v.id;
																						}), function () {
																							gsẵn.map(function (v, i) {
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
																			})
																		)
																	)
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
																$.map(b["01f20dda670f525894655f0ba414e5cf"], function (v, i) {
																	if (i != "l") {
																		v.map(function (x, y) {
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
																	}
																});
															});
															break;
													}
												}).on("click", ".listSp", function () {
													var x = $(this),
														d = x.data(),
														rỏHàng = $(".chứaRỏHàng").find("table");
													if (d.loại == "hoa") {
														x.cắmHoa();
													} else if (d.loại == "vàng mã") {
														x.vàngMã();
													} else {
														x.đồCúng();
													}
													if (rỏHàng.length) {
														var kt = 0;
														rỏHàng.find("tr").each(function () {
															var e = $(this);
															if (e.ID() == x.ID()) {
																e.find(".tăng").click();
																kt = 1;
																return false;
															}
														});
														if (!kt) {
															var giỏ = { tên: đồGiỗ.tên(x.ID()), giá: phẩy(đồGiỗ.giá(x.ID())), thànhTiền: phẩy(đồGiỗ.giá(x.ID())), ảnh: đồGiỗ.ảnh(x.ID()), id: x.ID() },
																tr = rỏHàng.find("tbody").find("tr").length;
															rỏHàng.append(
																dòngGiỏ1(tr + 1, giỏ)
															)
														}
														rỏHàng.parent().animate({
															scrollTop: rỏHàng.parent()[0].scrollHeight
														})
														$(".chứaRỏHàng").tổngTiền();
													}
												}).on("click", "#chọnKhungẢnh", function () {
													var k,
														đệm = $.đệm("khungẢnh")[0];
													k = khung(
														$("<div>", { class: "pa10 flex pa5 cb" }).append(
															[
																{ ảnh: plink + "/img/anh-tho.png", css: "polygon(11% 15%, 89% 15%, 89% 93%, 11% 93%)" },
																{ ảnh: plink + "/img/khung1.png", css: "polygon(11% 15%, 89% 15%, 89% 100%, 11% 100%)" },
																{ ảnh: plink + "/img/khung2.png", css: "polygon(12% 12%, 89% 14%, 91% 92%, 9% 92%)" },
																{ ảnh: plink + "/img/khung3.png", css: "circle(33% at 50% 55%)" },
																{ ảnh: plink + "/img/khung4.png", css: "ellipse(36% 38% at 50% 50%)" },
																{ ảnh: plink + "/img/khung5.png", css: "polygon(15% 25%, 86% 25%, 86% 93%, 10% 93%)" },
															].map(function (v, i) {
																return $("<div>", { class: "pa5 ass w20 pr bấmĐổi bấmĐc", id: "khungẢnh", classM: "w50,-w20" }).css({
																	height: "200px"
																}).data([v.ảnh, v.css]).append(
																	$("<div>", { class: "pr ph h1" }).append(
																		$("<div>", { class: "pa t50 l50 tt dịchLên w60", classM: "-60,w1" }).append(
																			$("<img>", { src: v.ảnh, class: (v.ảnh != đệm ? "" : "shine ") + "wh1 pr z1 viền" }),
																			$("<div>", { class: "pa l0 t0 wh1 bgpc bgsc bgrn" }).css({
																				backgroundImage: "url('" + _mảng[0].avt + "')",
																				clipPath: v.css
																			}),
																			$("<div>", { class: (v.ảnh != đệm ? "dn " : " ") + "wh1 phv pa l0 t0 bgc03 đổiKhung" }).css({
																				clipPath: v.css
																			}).append(
																				$("<div>", { class: "pa l50 t50 tt cl1 pa15 bra50 bg1o", icon: "done::fs12,pa,l50,t50,tt,fwb,cf,bấmĐc" })
																			)
																		)
																	)
																)
															})
														), {
														trong: "col-md-6 col-xs-12 c9ol-sm-9",
														động: "fadeIn",
														viền: false,
														tiêuĐề: "Tùy chọn khung ảnh"
													}
													);
													k.on("click", "#khungẢnh", function () {
														var a = $(this),
															d = a.data();
														$(".đổiKhung").attr("src", d[0]);
														a.find(".đổiKhung").sửaLớp("-dn")
														a.siblings().find(".đổiKhung").sửaLớp("dn");
														a.find(".viền").sửaLớp("shine")
														a.siblings().find(".viền").sửaLớp("-shine");
														$(".đổiCssKhung").css({
															clipPath: d[1]
														});
														$.đệm("khungẢnh", d, 1);
													})
												}).on("click", ".bấmĐổi", function () {
													var x = $(this),
														id = x.ID(),
														a = x.attr(id),
														d = $("." + id);
													switch (id) {
														case "mãMàu":
															x.children().sửaLớp("bc1");
															x.siblings().children().sửaLớp("-bc1");
															$(".đổiMàuĐồngHồ").css({
																color: a
															});
															d.length ? d.css({
																background: a
															}) : chờ(function () {
																$(".mãMàu").css({
																	background: a
																});
															}, 300);
															break;
														case "chấtLiệu":
															$(".đổiLoại").each(function () {
																x.children().sửaLớp("cl1 fwb")
																x.siblings().children().sửaLớp("-cl1 -fwb");
																var ạ = $(this),
																	l = ạ.attr("loại");
																if (ạ.prop("tagName") == "IMG") {
																	ạ.attr("src", l + a + ".png")
																} else {
																	ạ.css({
																		backgroundImage: "url('" + l + a + ".png" + "')"
																	})
																}
															})
															break;
													}
													$.đệm(id, a, 1);
												}).on("click", ".hiệnSảnPhẩm", function () {
													var x = $(this);
													x.children("o").text(function (i, e) {
														var ị = e == "arrow_downward";
														$(".sẽẨn")[ị ? "fadeOut" : "fadeIn"]().css({
															height: ị ? 0 : "auto"
														});
														$(".thắpHương").trigger("chiềuCao");
														x.find(".đổiChữ").text(ị ? "Hiện đồ cúng" : "Thu gọn");
														x.attr("tip", ị ? "Hiện đồ cúng" : "Thu gọn");
														return ị ? "arrow_upward" : "arrow_downward";
													})
												}).on("click", ".nútSlide", function () {
													var t = $(this),
														i = t.cóLớp("next"),
														tg = 234,
														bố = t.parents(".chứaSlide").find(".sảnPhẩmLọc"),
														con = bố.children(),
														w = con.outerWidth(),
														c = bố.scrollLeft(),
														x = $(".sốLượngSp").text(),
														m = x.split("/"),
														số = là("M") ? 2 : 5;
													t.sửaLớp("vôHiệu");
													m[0] = m[0] * 1 + (i ? số : ("-" + số) * 1);
													bố.animate({
														scrollLeft: (i ? "+" : "-") + "=" + bố.outerWidth()
													}, 456, function () {
														t.sửaLớp("-vôHiệu");
														$(".sốLượngSp").text((m[0] > m[1] ? m[1] : m[0] < số ? số : m[0]) + "/" + m[1]);
													});
												}).on("click", ".tagSảnPhẩm", function () {
													var x = $(this),
														id = x.ID(),
														sốL = 0,
														k,
														p,
														đang = $(".tabĐầu").find(".bg1").attr("id");
													x.parents().find(".tagSảnPhẩm").sửaLớp("-bg1,-cf,cl1h");
													//console.log(id);
													x.sửaLớp("bg1,cf,-cl1h");
													$(".sảnPhẩmLọc").empty().cần("bảng." + tblĐồGiỗ, function () {
														var ẹ = $(this);
														// if(id=="cỗ chay" || id == "cỗ mặn"){
														// 	CẦN.db("bảng."+tblGóiGiỗ,function(){
														// 		xửLý("đốiTượng.tải."+tblGóiGiỗ,function(e){
														// 			e.map(function(v,i){
														// 				var é = config(tblGóiGiỗ+"."+v+".195689");
														// 				if(id = é){
														// 					sốL ++;
														// 					ẹ.append(
														// 						sảnPhẩm({
														// 							data:v,
														// 							index:i,
														// 							loại:é,
														// 							gói:true
														// 						})
														// 					)
														// 				}
														// 			})
														// 		})
														// 	})
														// }
														ẹ.append(
															dữLiệuBảng.map(function (v, i) {
																var é = config(tblĐồGiỗ + "." + v + ".173020"),
																	oái = config(tblĐồGiỗ + "." + v + ".223013"),
																	a = 1;
																if (id == "tất cả đồ cúng") {
																	a = 0;
																} else {
																	if (é == id)
																		a = 0;
																}
																if (!a) {
																	if (config(tblĐồGiỗ + "." + v + ".199721")) {
																		sốL++;
																		return sảnPhẩm({
																			data: v,
																			index: i,
																			loại: é,
																			bày: oái
																		})
																	}
																}
															})
														)
													})
													if (đang == "đặt1") {
														var sp = $(".sảnPhẩmLọc").find(".checkSp"),
															kpv = 0;
														//console.log(sp);
														sp.map(function (v, i) {
															var id = $(i).attr("id"),
																pvu = config(tblĐồGiỗ + "." + id + ".173021");
															//console.log(pvu);
															if (!pvu) {
																$(i).sửaLớp("dn");
																kpv += 1;
															}
														})
														$(".sốLượngSp").each(function () {
															var t = $(this),
																text = t.text().split("/"),
																vt1 = text[0],
																l = $(".sảnPhẩmLọc").find(".checkSp").length;
															t.text(vt1 + "/" + (l - kpv));
														})
													} else {
														$(".sốLượngSp").text(sốL > 0 ? (sốL > 5 ? 5 : sốL) + "/" + sốL : "Đồ cúng không khả dụng.");
													}
												}).on("chiềuCao", ".sảnPhẩmLọc", function () {
													var t = x.find(".hướngDẫn").outerHeight();
													$(this).height(là("M") ? "auto" : x.height() - (55 + $(".bộLọc").outerHeight() + t));
												}).on("chiềuCao", ".thắpHương", function () {
													$(this).height((là("M") ? $(window).height() : $(".chứaMộ").height()) - 80);
												});
												dít.find(".tagSảnPhẩm:eq(0)").trigger("click");
												dít.find("#mãMàu" + (màuC ? "[mãMàu='" + màuC + "']" : ":eq(0)") + "").trigger("click");
												dít.find("#chấtLiệu" + (chấtL ? "[chấtliệu='" + chấtL + "']" : ":eq(0)") + "").trigger("click");
												dít.find(".tagTínhNăng:eq(0)").trigger("click");
												dít.find(".tạoNút").trigger("tạoNút");
												dít.find(".sảnPhẩmLọc").trigger("chiềuCao");
												dít.find(".thắpHương").trigger("chiềuCao");
												dít.find(".đãThắpHương").trigger("lấyLuôn");
											}

										});
									})
								})
							})
							//!!
						})
					})

				});
			});
		}), {
		trong: "col-md-12 col-xs-12 bgcfx",
		kín: true,
		chứa: "oh",
		koCuộn: true,
		onHide: function () {
			vàoURL("/Cung-gio-online.c4599.html");
		},
		viền: false,
		động: "fadeIn",
	}
	);
	x.chờ(function () {
		$(".nềnChờ").fadeOut(300, function () {
			$(this).remove()
		})
	}, 3000)

	function QTLScúng(dL, x, t, đếm) {
		đếm = 0;
		$.map(dL, function (d, i) {
			if (d.loại == "lờiNhắn" && d.trạngThái != -2) {
				if (d.trạngThái == -1) {
					đếm++
				}
				x++;
				t.append($("<tr>", { class: "" }).append($("<td>", { class: "tac ", text: x }), $("<td>", { class: "" }).append($("<div>", { class: "ptb10 grid cb pr db " }).append($("<div>", { class: "w1 df" }).append($("<div>", { class: "w1" }).append($("<div>", { class: "pb3 wbbw" }).append($("<b>", { class: "", text: d.ngườiGửi }), $("<span>", { class: "", text: d.hànhĐộng }), $("<b>", { class: "", text: d.danh + " " + d.ngườiNhận }), $("<div>", { class: "c9", text: d.tinNhắn })), $("<div>", { class: " fs09 c6", text: d.thờiGian }))))), $("<td>", { class: "tac trạngTháiXácNhận " + (d.trạngThái == -1 ? "cl11" : "cl1"), text: d.trạngThái == -1 ? "Chờ duyệt" : "Đã duyệt" }), $("<td>", { class: "tac", }).append(
					$.icon("done::fs14,cl1,plr5,duyệttn,bấmĐc"),
					// $.icon("clear::fs14,cl11,plr5,bỏduyệttn,bấmĐc"),
					$.icon("delete::fs14,c6,plr5,xóatn,bấmĐc")).on("click", ".bấmĐc", function () {
						var t = $(this);
						var data = {
							414571: t.hasClass("duyệttn") ? "0" : "-2"
						};
						var chữ = (t.hasClass("duyệttn") ? "duyệt" : "xóa");
						thôngBáo.đồngÝ({
							tiêuĐề: "Xác nhận",
							môTả: "Bạn có muốn " + chữ + " tin nhắn không?",
							đổi: function (a) {
								if (a) {
									xửLý("thuộcTính.sửa." + "f635c9dc58e3b8dd9220293e96758e6b", { d: [d.id, data] }, function (status) {
										if (status == 1) {
											thôngBáo.ok("Bạn đã " + chữ + " tin nhắn thành công");
											if (chữ == "xóa") {
												t.parent().parent().remove();
												$(".đếmTN").text(($(".đếmTN").text() * 1 - 1));
												dL.splice(i, 1);
												$(".bảngLScúng").empty().each(function () {
													var t = $(this), x = 0;
													({ x, đếm } = QTLScúng(dL, x, t, đếm));
												})
												$(".đếmTN").text(đếm)
												LSCúngGiỗ(dL, $(".danhMụcLs"))
												if (x == 1) {
													$("#quảnLýLờiNhắn").remove();
													$("#icontinnhắn").remove();
												}
											} else {
												t.parent().parent().find(".trạngTháiXácNhận").text("Đã duyệt").sửaLớp("-cl11,cl1");
												if (dL[i].trạngThái == -1) {
													đếm = đếm - 1;
												}
												dL[i].trạngThái = 0;
												$(".đếmTN").text(đếm)
												LSCúngGiỗ(dL, $(".danhMụcLs"))
											}
										}
										else {
											thôngBáo.lỗi("Bạn đã " + chữ + " tin nhắn thất bại");
										}
									});
								}
							}
						});
					})
				));
			}
		});
		return { x, đếm };
	}

	function LSCúngGiỗ(d, t) {
		var j = 0;
		t.empty();
		$.map(d, function (d, i) {
			if (d.trạngThái == 0) {
				j++;
				t.append($("<div>", { class: "ptb10 grid bss bb1 bcd cb pr db " + (j > 3 ? "bịẨnLS dn " : "") + ((d.loại == "lờiNhắn") ? ("lờiNhắn" + i) : "") }).append($("<div>", { class: "w1 df" }).append(d.icon, $("<div>", { class: "w1" }).append($("<div>", { class: "pb3 wbbw" }).append($("<b>", { class: "", text: d.ngườiGửi }), $("<span>", { class: "", text: d.hànhĐộng }), $("<b>", { class: "", text: d.danh + " " + d.ngườiNhận }), d.tinNhắn ? $("<div>", { class: "c9", text: d.tinNhắn }) : ud), $("<div>", { class: " fs09 c6", text: d.thờiGian })))));
			}
		});
		t.append(
			$("<div>", { class: "tar cl1 fwb bấmĐc", text: "Xem thêm" }).on("click", function () {
				t.find(".bịẨnLS").map(function (i, d) {
					if (i < 10) {
						$(d).sửaLớp("-bịẨnLS,-dn")
					}
				})
				if (t.find(".bịẨnLS").length == 0) {
					t.children().last().text("Cuối danh sách").sửaLớp("-tar,tac,-bấmĐc")
				}
			})
		)
		// t.scroll(function (e) {
		// 	if (t.scrollTop() == t[0].scrollHeight - t[0].offsetHeight) {
		// 		// loadThêm(10, 20);
		// 	}
		// })
	}
};
đồGiỗ = {
	all: function (O) {
		xửLý("đốiTượng.tải." + tblĐồGiỗ, function (data) {
			O(data);
		})
	},
	tên: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.157564');
	},
	ảnh: function (id) {
		var r = 0;
		var a = Jd(config(tblĐồGiỗ + '.' + id + '.157566'));
		if (a.ậ != ud) {
			r = a.ậ[0];
		}
		return r;
	},
	giá: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.157567');
	},
	loại: function (id) {
		return config(tblĐồGiỗ + '.' + id + '.173020');
	}
};
góiGiỗ = {
	all: function (O) {
		xửLý("đốiTượng.tải." + tblGóiGiỗ, function (data) {
			O(data);
		})
	},
	tên: function (id) {
		return config(tblGóiGiỗ + '.' + id + '.157573');
	},
	môtả: function (id) {
		return config(tblGóiGiỗ + '.' + id + '.157574');
	},
	tầnsuất: function (id) {
		return config(tblGóiGiỗ + '.' + id + '.157575');
	},
	quanhệ: function (id) {
		return config(tblGóiGiỗ + '.' + id + '.quanHệ');
	},
	giá: function (id) {
		return config(tblGóiGiỗ + "." + id + ".195995");
	},
	ảnh: function (id) {
		return "";
	}
};
function notice(o) {
	var o = $.extend({
		p: { r: "0", t: "10px" },
		loại: true,
		hiện: "slideInRight",
		ẩn: "slideOutRight",
		t: "Not data notice"
	}, o),
		p = o.p,
		e,
		í = $("#thôngBáo"),
		dp = function (dp, x, a) {
			x.children()[dp ? "hiện" : "ẩn"](a, 345, function () {
				x[dp ? "fadeIn" : "remove"]();
			});
		}
	if (í.length)
		dp(false, í, o.ẩn);
	$("body").append(
		$("<div>", { class: "pf z99 dn ", id: "thôngBáo" }).css({
			right: p.r,
			top: p.t
		}).append(
			$("<div>", { class: "bg1 o09 pa15" }).css({
				minWidth: "200px"
			}).append(
				$("<div>", { class: "fs11 fwb cf", text: o.t, icon: (o.loại ? "done" : "report_problem") + "::mr10,lh1" })
			)
		)
	);
	dp(true, $("#thôngBáo"), o.hiện);
	chờ(function () {
		dp(false, $("#thôngBáo"), o.ẩn);
	}, 3000)
};
function bảngRỏHàng() {
	return $("<table>", { class: "danhsáchhàng w1" }).append(
		$("<thead>").append(
			$("<tr>", { class: "bgcfx" }).append(
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "stt" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "ảnh" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "sản phẩm" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "đơn giá" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "số lượng" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu", text: "thành tiền" }),
				$("<th>", { class: "ptb10 plr5 tac fs08 ttu fs12 bấmĐc cl1 xóaTấtCả", tip: "Xóa tất cả", icon: "delete" })
			)
		),
		$("<tbody>", { class: "thânGiỏ" })
	);
};
function dòngGiỏ1(v, m) {
	var ảnh = dữLiệu.ảnh(đồGiỗ.ảnh(m.id), "i", "200x"),
		é = $("<tr>", { id: m.id, class: "dòng bgcf " }).append(
			$("<td>", { class: "pa10 tac pr bsdo bb1 bcd" }).append(
				$("<div>", { class: "pa t50 l50 tt w1 ảnh bgpc bgso bgrn", text: v })
			),
			$("<td>", { class: "pa10 tac w20 bsdo bb1 bcd" }).append(
				$("<div>", { class: "pb43 w1 ảnh bgpc bgso bgrn", id: m.ảnh }).each(function () {
					var à = $(this);
					toDataUrl(ảnh, function (data) {
						à.css({
							backgroundImage: "url('" + data + "')"
						})
					})
				})
			),
			$("<td>", { class: "pa10 tac bsdo bb1 bcd" }).append(
				$("<div>", { class: "tên fs09", text: m.tên })
			),
			$("<td>", { class: "pa10 tac grid bsdo bb1 bcd" }).append(
				$("<div>", { class: "giá fs09", text: m.giá }),
				$("<div>", { class: "ml3", text: "₫" })
			),
			$("<td>", { class: "ptb10 tac bsdo bb1 bcd" }).append(
				$("<div>", { class: "grid dib" }).append(
					$("<div>", { class: "bss bcd giảm nútThêmĐồ bấmĐc bw1 dtc" }).append(
						$("<div>", { class: "fs08 plr3", icon: "remove" })
					),
					$("<div>", { class: "bss bcd bw1 oh fs12 sốlượng fs09 dtc cắtĐc", style: "width:40px;line-height:30px", text: m.sốlượng || 1, maxlength: 3, contenteditable: true, lọc: "số" }).on("change", function () {
						$(this).parents("tr").find(".thànhtiền").trigger("thànhTiền");
						$(this).parents(".danhsáchhàng").tổngTiền();
					}),
					$("<div>", { class: "bss bcd tăng nútThêmĐồ bấmĐc bw1 dtc" }).append(
						$("<div>", { class: "fs08 plr3", icon: "add" })
					)
				)
			),
			$("<td>", { class: "pa10 tac grid bsdo bb1 bcd" }).append(
				$("<div>", { class: "thànhtiền fs09", text: m.thànhtiền || phẩy((bỏPhẩy(m.giá) * 1) * (m.sốlượng || 1)) }),
				$("<div>", { class: "ml3", text: "₫" })
			),
			$("<td>", { class: "pa10 tac bsdo bb1 bcd" }).append(
				$("<div>", { class: "xóasp cl1h fs09 bấmĐc bra50 bch pa3", icon: "delete::bấmĐc,fs15" })
			)
		);
	return é;
};
function đệmGiỏ(thẻ) {
	var d = thẻ.find(".dòng"),
		listDM = [];
	d.map(function (vt, v) {
		listDM.push({
			tên: $(v).find(".tên").text(),
			sốlượng: $(v).find(".sốlượng").text(),
			giá: $(v).find(".giá").text(),
			thànhtiền: $(v).find(".thànhtiền").text(),
			ảnh: $(v).find(".ảnh").attr("id"),
			id: $(v).attr("id")
		})
	})
	$.đệm("giỏHàng", listDM, 1);
};
function chứcDanh(thọ, gt) {
	var t = '';
	gt = gt.toLowerCase();
	if (thọ <= 1)
		t = (gt == "nam" ? "Cậu đỏ " : "Cô đỏ ");
	else if (thọ > 1 && thọ < 14)
		t = "Cháu ";
	else if (thọ > 15 && thọ < 39)
		t = (gt == "nam" ? "Anh " : "Chị ");
	else if (thọ > 39 && thọ < 70)
		t = (gt == "nam" ? "Ông " : "Bà ");
	else t = "Cụ ";
	return t;
};
function chọn(data) {
	var kt = 0,
		v = data;
	if (v.loại != "hoa") {
		(v.loại == "vàngMã" ? $(".tiềnVàng") : $(".chứaMâmĐiệnThoại")).find(".chứaĐồ").each(function () {
			var a = $(this),
				id = a.parent(".bỏViền").ID(),
				b = a.find(".checkSp");
			if (!b.length) {
				sảnPhẩm({
					data: v,
					clone: true,
					chứa: a
				})
				// .DiDi({ data: v });
				kt = 1;
				đồCúng += 1;
			}
			if (kt)
				return false;
		});
	} else {
		sảnPhẩm({
			data: v,
			clone: true,
			chứa: $(".bìnhHoaĐiệnThoại").find(".chứaĐồ"),
		});
		if (v.loại == "vàngMã")
			tiềnVàng += 1;
		kt = 1;
	}
	thôngBáo1({
		t: kt ? "Đồ cúng được thêm thành công" : "Mâm đồ cúng đã đầy",
		loại: kt ? true : false,
	});
};
function sảnPhẩm(o) {//ô sản phẩm
	var v = o.data,
		bảng = o.gói ? tblGóiGiỗ : tblĐồGiỗ,
		i = v.index,
		giá = config(bảng + "." + v + ".157567"),
		ảnh = Jd(config(bảng + "." + v + ".157566")).ậ,
		idSp = o.gói ? config(bảng + "." + v + ".quanHệ.sởHữu." + tblĐồGiỗ + ".1") : ud,
		ảnhHiện = dữLiệu.ảnh(ảnh ? ảnh[0] : ud, "i", 150),
		pvu = config(bảng + "." + v + ".199721"),//Hiếu thêm
		muc = o.mục,//Hiếu thêm
		l = dữLiệu.ô(bảng, 173020, o.loại);
	if (o.bày == "msUZ8") {
		// l = "hoa";
	} else if (o.bày == "t4Dtm") {
		// l = "vàng mã";
	}
	// lht=dữLiệu.ô("01F20DDA670F525894655F0BA414E5CF"223013, ),
	// var mht;
	var mht = config("01f20dda670f525894655f0ba414e5cf.1000316", function (a) { return a["223010"] })
	if (config(bảng + "." + v + ".199721") || o.gói) {
		var é = $("<div>", { class: "w20 pa5 bấmĐc listSp z15 checkSp" + (o.mục == "đặt1" ? (pvu ? "" : " dn") : " "), id: v, classM: "-w20,w50", bỏ: giá ? "ko" : "ok", cột: config(bảng + "." + v + ".199308"), dòng: config(bảng + "." + v + ".199309"), cao: config(bảng + "." + v + ".199387") }).data({ loại: l, t: l == "vàng mã" ? "vàngMã" : ud, hiện: o.gói ? idSp : ảnhHiện }).each(function () {
			// toDataUrl(ảnhHiện, function (dataURL) {
			// 	é.data("hiện", dataURL);
			// });
		}).append(
			$("<div>", { class: "pr pb249 oh zoom ph bss bw1 bcd bb0", classM: "-ph" }).append(
				$("<div>", { class: "sẽTo z1 bgpc pa wh1 bgrn bgso ẢnhSp sp" + l.replace(/\s+/g, '') }).css({
					backgroundImage: "url('" + ảnhHiện + "')"
				}).each(function () {
					if (o.bày == "msUZ8") {
						$(this).removeClass("bgso").addClass("bgsc")
					} else {
						$(this)
					}
				}),
				$("<div>", { class: "chèn pa l0 t0 phv wh1 z3 bgc05 cầnBỏ dn", classM: "-phv" }).append(
					$("<div>", { class: "pa l50 t50 tt fs09 fwb cf tduh", text: "Chọn" })
				)
			),
			$("<div>", { class: "plr10 ptb5 bg1 cf pr w1 cầnBỏ tênSp", text: config(bảng + "." + v + "." + (o.gói ? 157573 : 157564)) }).append(
				là("M") ? $("<div>", { class: "chọn pa b0 r0 pa10 bgcd tduh bấmĐc cầnBỏ z5 cl1", text: "Chọn" }).css({
					marginRight: "1px"
				}).data(v) : ud
			),
			giá ? $("<div>", { class: "giáẨn pa tl50 tt dn cf bra3 fs1 wsn cầnBỏ z9 plr10 bgc05", style: "text-shadow:black", text: phẩy(giá) + " ₫" }) : ud
		);
		if (o.bỏ) {
			é.css({
				height: o.bày == "msUZ8" ? "auto" : "100%",
			}).sửaLớp("-col-md-4,-col-sm-6,-col-xs-12,-pa5");
			é.children().sửaLớp("-bss,bw1,bcd");
			é.find(".cầnBỏ").hide();
			é.find(".pb169").sửaLớp("-pb169,h1,-pb1");
			if (o.bày == "msUZ8") {
				é.find(".sẽTo").replaceWith($("<img>", { src: v.hiện, width: "70px" }));
			}
			var chia = Math.floor(é.find("img").height() / 10),
				zIndex = chia > 15 ? 14 : chia;
			é[o.bày == "msUZ8" ? "show" : "DiDi"](o.bày != "msUZ8" ? {
				data: d
			} : ud).css({
				position: o.bày == "msUZ8" ? "absolute" : "relative",
				left: 0,
				top: o.bày == "msUZ8" ? "-" + (é.find("img").height() - (é.find("img").height() / (là("M") ? 3 : 4.5)) + "px") : o.bày == "t4Dtm" ? (-90 * v_top + "%") : 0,
				transition: "none",
				height: o.bày == "msUZ8" ? "auto" : "100%",
				width: "100%",
				zIndex: l == "hoa" ? zIndex : 15
			}).sửaLớp("-sẽBay");
		}
		return é;
	}
};
function đặtHàng(O, e) {
	var mSp = [],
		bảng = O.bảng.find("tr[id]"),
		toti = $(".tổngtiền").text();
	bảng.each(function (i) {
		var á = {},
			x = $(this),
			id = x.ID(),
			sl = x.find(".sốlượng").text() * 1;
		á[id] = sl;
		mSp.push(á);
	});
	O.chứa.empty().append(
		$("<div>", { class: "plr15 ptb25" }).append(
			//$("<div>",{class:"mt25 fs15 mc1",text:"Thông báo"}),
			$("<div>", { class: "fs13 mc1 fwb pb15 lh1 ", text: "Để hoàn thành đơn hàng, Quý khách vui lòng chuyển khoản với thông tin như sau:" }),
			$("<div>", { class: "pt10" }).append(
				$("<div>", { class: "fwb fs12 lh1 fl", text: "Số tài khoản: " }),
				$("<span>", { class: "pl10 lh12 fs11", text: "0211000462161" })
			),
			$("<div>", { class: "pt10" }).append(
				$("<div>", { class: "fwb fs12 fl lh1", text: "Chủ tài khoản: " }),
				$("<span>", { class: "pl10 lh12 fs11", text: "Công viên nghĩa trang Lạc Hồng Viên." })
			),
			$("<div>", { class: "pt10" }).append(
				$("<div>", { class: "fwb fs12 fl lh1", text: "Ngân hàng: " }),
				$("<span>", { class: "pl10 lh12 fs11", text: "Ngân hàng TMCP Ngoại thương – Chi nhánh Hà Nội" })
			),
			$("<div>", { class: "pt10" }).append(
				$("<div>", { class: "fwb fs12 lh1 fl", text: "Nội dung: " }),
				$("<span>", { class: "pl10 lh12 fs11", text: "Tên khách hàng – Số điện thoại " })
			),
			$("<div>", { class: "pt10" }).append(
				$("<div>", { class: "fwb fs12 lh1 fl", text: "Tổng giá trị đơn hàng: " }),
				$("<span>", { class: "pl10 lh12 fs11", text: toti + " ₫" })
			),
			$("<div>", { class: "pt10 fs11 lh13 " }).html('Ngay sau khi nhận được chuyển khoản, Lạc Hồng Viên sẽ liên lạc đến Quý khách qua số điện thoại đã cung cấp để xác nhận đơn hàng. Mọi thắc mắc, Quý khách vui lòng liên hệ <b class="cl1">hotline 0911616868.</b>'),
			$("<div>", { class: "pt10 fs12 lh1 cl1", text: "Lạc Hồng Viên chân thành cảm ơn!" })
		)
	)
};
function hiệnThôngBáo(t, o) {
	var f = o;
	// return this.each(function(){
	// 	var t = $(this),
	// 		x = $("<div>",{ class:"mdn wmx3" }).append(
	// 			$("<div>",{ id:"tiêuĐề", class:"fft ttu fwb taj ptb5 mb5 bb1 bss", icon:"close::bấmĐc" }),
	// 			$("<div>",{ id:"nộiDung" }).append(
	// 				// $.icon("1:2::mr5"),
	// 				c||dịch("confirm.sure"),
	// 			),
	// 			$("<div>",{ id:"nút", class:"cb mt5" }).append(
	// 				$("<div>",{ id:"ok", class:"btn pa5 bra3 fr bg1 cf mr5", icon:"done::fs14", tabindex:0, dịch:"agree" }).click(function(){
	// 					t.iMsg();
	// 					f.call(t[0]);
	// 				}),
	// 				$("<div>",{ id:"ko", class:"btn pa5 bra3 fl ml5", icon:"clear::fs14", tabindex:0, dịch:"cancel" }).click(function(){
	// 					t.iMsg();
	// 				}),
	// 			),
	// 		);
	// 	t.iMsg(x,1,$.extend({
	// 		hide:false,
	// 		onShow:function(){
	// 			x.find("input,[contenteditable],#ko").first().iFocus(56);
	// 		},
	// 	}));
	// });
};
function thôngBáo1(o) {
	var o = $.extend({
		p: { r: "0", t: "10px" },
		loại: true,
		hiện: "slideInRight",
		ẩn: "slideOutRight",
		t: "Not data notive",
		onShow: true,
		onShow: rf
	}, o),
		p = o.p,
		f = rf,
		í = $("#thôngBáo"),
		ẩnĐi = function (ẩn, x) {
			x.children().ẩn(ẩn, function () {
				x.remove();
			});
		}
	$.map(arguments, function (á) {
		switch (typeof á) {
			case "function":
				f = á;
				break;
		}
	});
	if (f) {

	}
	if (í.length)
		ẩnĐi(o.ẩn, í);
	$("body").append(
		$("<div>", { class: "pf z99 ", id: "thôngBáo" }).css({
			right: p.r,
			top: p.t
		}).append(
			$("<div>", { class: "bg1 o09 pa15" }).css({
				minWidth: "200px"
			}).append(
				$("<div>", { class: "fs11 fwb cf", text: o.t, icon: (o.loại ? "done" : "report_problem") + "::mr10,lh1" }),
				o.onShow ? o.onShow() : ud
			).động("slideInRight")
		)
	);
	chờ(function () {
		ẩnĐi(o.ẩn, $("#thôngBáo"));
	}, 3000);
};
function formThôngTin(h, s, m) {
	cl(h, s, m)
	var é = $("<div>", { class: "ôNhập w1" }).append(
		[
			{
				pla: "Họ và tên",
				hợpLệ: "",
				id: "inputThôngTin tênkhách1",
				val: h
			},
			{
				pla: "Địa chỉ",
				hợpLệ: "",
				id: "inputThôngTin địachỉ1"
			},
			{
				pla: "Số điện thoại",
				hợpLệ: "đt",
				id: "inputThôngTin điệnthoại1",
				val: s
			},
			{
				pla: "Địa chỉ gmail",
				hợpLệ: "em",
				id: "inputThôngTin emailkhách1",
				val: m
			},
			{
				pla: "Ghi chú",
				hợpLệ: "",
				id: "ghichú1"
			}
		].map(function (v, i) {
			return $("<div>", { class: "mb10" }).append(
				$("<input>", { class: "bss bw1 bcd pa7 w1 " + v.id, placeholder: v.pla + (i == 4 ? " (* Không bắt buộc) " : ""), hợpLệ: v.hợpLệ }).val(v.val)
			)
		})
	);
	é.on("keyup", "input", function (e) {
		var x = $(this),
			é = e.which;
		if (é == 13 || é == 40) {
			x.next().focus();
		} else if (é == 38) {
			x.prev().focus();
		}
	});
	return é;
};
function kq(data, t) {
	var a = '';
	var trang,
		datagốc = data;
	var div = $("<div>", { class: "pa5 grid vat tênđểtìm" });
	if (typeof t == "object") {
		$.map(t, function (v, i) {
			a += v + (i - 1 < t.length ? ' - ' : '');
		});
	} else {
		a = t;
	}
	var sotrang = (Math.floor((data.length / 10)) > 1) ? (Math.floor(data.length / 10)) : (Math.floor(data.length / 10));
	if (data.length % 10 == 0) {
		sotrang = sotrang - 1;
		if (sotrang < 0) {
			sotrang = 0;
		}
	}
	return $("<div>", { class: "tal df fdc jcsb h1" }).append(
		$("<div>", { class: "tac ptb15 plr10 fs15 fwb cl3 lh15 ls1", html: t }),
		div,
		$("<div>", { class: "grid tar pr10 " }).append(
			$("<div>", { class: "ptb5 trangsau bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "<" }).on("click", function () {
				$(".đangbật").prev().trigger("click")
			}),
			$("<div>", { class: "grid phântrang " }).append(
				range(0, sotrang).map(function (d, i) {
					return $("<div>", { class: " bấmĐc trangtìm pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3 " + (((i == 0) ? " bg1 cf đangbật" : " bgcf")), text: i + 1 }).on("click", function () {
						$(".bachấm").remove()
						var đầu = $(this).index() * 10,
							cuối = đầu + 10;
						trang = "Ketquatrang" + (đầu + 1);
						div.empty()
						data.map(function (v, i) {
							var idMộ = v["226490"],
								họtên = v["226491"],
								giớitính = v["226492"],
								thọ = v["226493"],
								ngàydương = v["226495"],
								ngàyâm = v["226496"],
								lô = v["226498"],
								dãy = v["226499"],
								khu = v["226500"],
								đồi = v["226501"],
								địaChỉ = "";
							if (i >= đầu && i < cuối) {
								var danh = chứcDanh(thọ * 1, giớitính),
									ngàyÂm = ngàyâm.split("/");
								return div.append(
									$("<div>", { class: "pa5 plr15 w50", classM: "-w50,w1" }).append(
										$("<a>", { class: "pl50 ptb15 bsdo bgcf plr10 bấmĐc bb1 db oh bcd tắtKhung pr bb0lc bgcfah", classM: "tal", href: "/" + họtên.toURL() + ".t" + idMộ + ".html" }).append(
											là("M") ? $("<div>", { class: "pb10 grid tal" }).append(
												$("<div>", { class: "cl1 fs11", text: đầu + 1 })
											) : ud,
											$("<div>", { class: "fs13 fwb cl1h tduh", text: danh + " " + họtên }),
											$("<div>", { text: "Ngày giỗ:", z: ngàydương + " (" + ngàyÂm[0] + "/" + ngàyÂm[1] + "-Âm lịch" + ")", class: "pt10 fwb" }),
											$("<div>", { class: "fwb pt10", text: "Quê quán: ", z: địaChỉ ? địaChỉ : "" }),
											$("<div>", { text: "Vị trí phần mộ: ", z: "Lô " + lô + " - Dãy " + dãy + " - Khu " + khu + " - Đồi " + đồi, class: " fwb pt10" }),
											$("<div>", { class: "pa l0 t0 z1 bra50 bóng pa35 bg1 tt dn-xs" }),
											$("<div>", { class: "pa l0 t0 z1 cf dn-xs" }).css({
												padding: "13px"
											}).append(
												$("<div>", { class: "pa l50 t50 tt fs12", text: i + 1 })
											)
										)
									)
								)
							}
						})
						$(this).sửaLớp("-bgcf,bg1,cf,đangbật").siblings().sửaLớp("bgcf,-bg1,-cf,-đangbật");
						var hiệnnút = $(this).siblings(":last,:first").add($(this).next()).add($(this).prev().add($(this))),
							ẩnnút = $(this).siblings().add($(this)).not(hiệnnút);
						ẩnnút.sửaLớp("dn");
						hiệnnút.sửaLớp("-dn");
						if ($(this).nextAll().length > 2) {
							$(this).siblings(":last").before(
								$("<div>", { class: "bachấm pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." })
							)
						}
						if ($(this).prevAll().length > 2) {
							$(this).siblings(":first").after(
								$("<div>", { class: "bachấm pa10 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: "..." })
							)
						}
					})
				}),
			),
			$("<div>", { class: "ptb5 trangsau bấmĐc plr5 bra3 fs1 bss bcd bw1 bgcfx mc1 mlr3", text: ">" }).on("click", function () {
				$(".đangbật").next().trigger("click")
			}),
		)
	)
};

