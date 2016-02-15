
/** 스킨 옵션 정보
**/
var eBookSkin = {};
eBookSkin.options = {
	slideShowTimer	: 2,
	pageZoomMin			: 30,
	pageZoomMax			: 200,
	pageZoomDefault	: 30,
	loadingDelay		: 0,
};

eBookSkin.path = {
	image			: "images/",
	slideshow	: "images/slideshow/",
	sound			: "sounds/",
};

/** HTML 객체 생성 정보
**/
eBookSkin.objects = [

	{ type:"window"		, id:"background"	},
	{ type:"pageview"	, id:"pageview"		},
	{ type:"booklist"	, id:"booklist"				, 'class':"mainobjects"	},

	{ type:"window"		, id:"quick_window"			, 'class':"mainobjects"	, children:[
		{ type:"home"			, id:"quick_home_btn"				, src:"quick/home.png"		, title:"홈 링크"		},
		{ type:"image"		, id:"quick_first_btn"			, src:"quick/first.png"		, title:"첫 페이지"	, click:"eFnc.gotoPage(1)"			},
		{ type:"image"		, id:"quick_prev_btn"				, src:"quick/prev.png"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()" },
		{ type:"image"		, id:"quick_pagenum_bg"			, src:"quick/pageNo.png"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},
		{ type:"image"		, id:"quick_next_btn"				, src:"quick/next.png"		, title:"다음 페이지"	, click:"eFnc.gotoNext()" },
		{ type:"image"		, id:"quick_last_btn"				, src:"quick/last.png"				, title:"끝 페이지"	, click:"eFnc.gotoPage(-1)"			},
		{ type:"image"		, id:"quick_fullscreen_btn"	, src:"quick/fullscreen.png"	, title:"전체화면"	, click:"eFnc.fullscreenToggle()"	, usable:"pc"},
	]},
	
	{ type:"logo"			, id:"menu_logo"					, src:"logo.png"					, title:"로고이미지"	},
	{ type:"window"		, id:"menu_window"				, 'class':"mainobjects"	, children:[
		{ type:"image"		, id:"menu_search_btn"		, src:"menu/search.png"		, title:"검색"			, click:"eFnc.wndToggle('#searchlist_window')"		},
		{ type:"image"		, id:"menu_tablelist_btn"	, src:"menu/tablelist.png", title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
		{ type:"image"		, id:"menu_bookmark_btn"	, src:"menu/bookmark.png"	, title:"책갈피"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
		{ type:"image"		, id:"menu_memo_btn"			, src:"menu/memo.png"			, title:"메모"			, click:"eFnc.runMemo()"													},
		{ type:"image"		, id:"menu_slide_btn"			, src:"menu/slide.png"		, title:"자동넘김"	, click:"eFnc.runSlideShow()"											},
		{ type:"image"		, id:"menu_draw_btn"			, src:"menu/draw.png"			, title:"판서"			, click:"eFnc.runDrawing()"												},
		{ type:"image"		, id:"menu_print_btn"			, src:"menu/print.png"		, title:"인쇄"			, click:"eFnc.runPrint()"											, usable:"pc"	},
	]},
	
	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true,	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true,	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true,	},	// 검색창

	{ type:"thumblist"		, id:"thumbnail_list"				},
	
	{ type:"window"		, id:"sns_window"				, 'class':"mainobjects"		, children:[
		{ type:"image" 		, id:"sns_kakaotalk"	, src:"sns/kakaotalk.png"		, title:"카카오톡"			, click:"eFnc.sendSNS('kakaotalk')"			, usable:"mobile"	},
		{ type:"image" 		, id:"sns_kakaostory"	, src:"sns/kakaostory.png"	, title:"카카오스토리"	, click:"eFnc.sendSNS('kakaostory')"	},
		{ type:"image" 		, id:"sns_facebook"		, src:"sns/facebook.png"		, title:"페이스북"			, click:"eFnc.sendSNS('facebook')"			},
		{ type:"image" 		, id:"sns_twitter"		, src:"sns/twitter.png"			, title:"트위터"				, click:"eFnc.sendSNS('twitter')"				},
		{ type:"image" 		, id:"sns_band"				, src:"sns/band.png"				, title:"밴드"					, click:"eFnc.sendSNS('http://www.band.us/plugin/share?body=##MSG##&route=##URL##')"	},
	]},
];

/** 로딩화면 생성
**/
(eBookSkin.loading = function(_stTime) {

	var wndSize = croTools.getClientSize();
	$("<canvas id='loading_area' width='"+wndSize.width+"' height='"+wndSize.height+"'></canvas>")
		.css({
			position	:'absolute',
			background:'rgba(0,8,32,0.9)',
			zIndex		:2147483647,
			width			:'100%',
			height		:'100%',
		})
		.appendTo(document.body);
	
	// var _option = {
		// time	: _stTime,
		// alpha : 0.5,
		// speed : 1,
		// x			: 0.5,
		// y			: 0.5,
		// radius: [50, 40],
		// thick	: [80, 160],
		// ccw		: false,
		// color	: {
			// R : [255, 255,  32,   0,  32, 255],
			// G : [ 48, 255, 255, 255,  48,   0],
			// B : [ 32,   0,  48, 255, 255, 255]
		// }
	// };
	
	eBookSkin.loadingLoop = setInterval(function(){

		var cv	= $("#loading_area")[0];
		if(!cv){
			return clearInterval(this);//eBookSkin.loadingLoop);
		}
		var ctx	= cv.getContext('2d');
		ctx.clearRect(0,0,cv.width,cv.height);
		
		// 로딩 서클 그리기
		croTools.canvasCircle(cv);//, _option);
		
		// text
		ctx.font				= '12pt Calibri';
		ctx.textAlign		= 'right';
		ctx.fillStyle		= 'white';
		ctx.globalAlpha	= 0.75;
		ctx.fillText('powered by E&IWORLD', cv.width-10, cv.height-10);
		
	},25);
	
	croTools.log("loading start");
	
})(new Date().getTime());
