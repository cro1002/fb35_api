
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

	{ type:"window"		, id:"top_window"				, 'class':"mainobjects", children:[
		{ type:"window"		, id:"top_center"				, 'class':"mainobjects", children:[
			{ type:"image"		, id:"top_search_btn"		, 'class':"topobjects", src:"search.svg"		, title:"검색", visible:"pc", click:"eFnc.wndToggle('#searchlist_window')"		},
			{ type:"logo"			, id:"top_logo"	, src:"logo.png"					, title:"로고이미지", visible:"pc"	},
			{ type:"booklist"	, id:"booklist"	, 'class':"topobjects", visible:"pc"	},
			
			{ type:"image"		, id:"top_search_btn_m"		, 'class':"topobjects", src:"search.svg"		, title:"검색", visible:"mobile", click:"eFnc.wndToggle('#searchlist_window')"		},
			{ type:"logo"			, id:"top_logo_m"	, src:"logo.png"					, title:"로고이미지", visible:"mobile"	},
			{ type:"booklist"	, id:"booklist_m"	, 'class':"topobjects", visible:"mobile"	},
		]},
	]},
	
	{ type:"pageview"	, id:"pageview", visible:"pc"	},
	{ type:"pageview"	, id:"pageview_m", visible:"mobile"	},
	
	// bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects"	, visible:"pc", children:[
		{ type:"window"		, id:"bottom_center"			, 'class':"mainobjects"	, children:[
			{ type:"home" 		, id:"menu_home"				, 'class':"bottomobjects_sns", src:"sns/home.svg"					, title:"홈"	},
			{ type:"image" 		, id:"menu_twitter"			, 'class':"bottomobjects_sns", src:"sns/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
			{ type:"image" 		, id:"menu_facebook"		, 'class':"bottomobjects_sns", src:"sns/facebook.svg"			, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
			
			{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
			{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},

			{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
			{ type:"pagenum"	, id:"quick_pagenum_area"	},
			{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
			{ type:"pagetotal", id:"quick_pagetotal_area"	, 'class':"quicktexts"	},

			{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
			{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
			
			{ type:"image"		, id:"menu_memo_btn"			, 'class':"bottomobjects", src:"menu/memo.svg"			, title:"메모"			, click:"eFnc.runMemo()"},
			{ type:"image"		, id:"menu_draw_btn"			, 'class':"bottomobjects", src:"menu/drawing.svg"		, title:"판서"			, click:"eFnc.runDrawing()"},
			{ type:"image"		, id:"menu_pdf_btn"				, 'class':"bottomobjects", src:"menu/pdf.svg"				, title:"PDF 내려받기"	, click:"eFnc.pdfDown()"},
			{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"bottomobjects", src:"menu/contents.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"bottomobjects", src:"menu/bookmark.svg"	, title:"북마크"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_slide_btn"			, 'class':"bottomobjects", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()"},
			{ type:"image"		, id:"menu_print_btn"			, 'class':"bottomobjects", src:"menu/print.svg"			, title:"프린트"			, click:"eFnc.runPrint()", visible:"pc"	},
			{ type:"image"		, id:"menu_thumb_btn"			, 'class':"bottomobjects", src:"menu/thumbnail.svg"	, title:"썸네일"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
		]},
	]},
	
	// bottom for Mobile
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile", children:[
		{ type:"image" 		, id:"menu_switch_btn_m"	, 'class':"quickobjects_m", src:"menu_mobile.svg"	, title:"메뉴"			, click:"eFnc.wndToggle('#menu_popup_window_m')"},

		{ type:"image"		, id:"quick_first_btn_m"	, 'class':"quickobjects_m"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn_m"		, 'class':"quickobjects_m"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
		
		{ type:"text"			, id:"quick_pagenum_text_m"		, 'class':"quicktexts_m"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area_m"	},
		{ type:"text"			, id:"quick_pagenum_slash_m"	, 'class':"quicktexts_m"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area_m"	, 'class':"quicktexts_m"	},
		
		{ type:"image"		, id:"quick_next_btn_m"		, 'class':"quickobjects_m"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn_m"		, 'class':"quickobjects_m"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
		
		{ type:"image" 		, id:"menu_twitter_m"			, 'class':"bottomobjects_sns_m", src:"sns/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"menu_facebook_m"		, 'class':"bottomobjects_sns_m", src:"sns/facebook.svg"			, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
		{ type:"image" 		, id:"menu_kakaotalk_m"		, 'class':"bottomobjects_sns_m", src:"sns/kakaotalk.svg"			, title:"카카오톡"		, click:"eFnc.sendSNS('kakaotalk')"},
		{ type:"home" 		, id:"menu_home_m"				, 'class':"bottomobjects_sns_m", src:"sns/home.svg"					, title:"홈"	},
		
	]},
	
	// menu popup for Mobile
	{ type:"window"		, id:"menu_popup_window_m"			, 'class':"mainobjects"	, visible:"mobile", children:[
			{ type:"image"		, id:"menu_memo_btn_m"			, 'class':"bottomobjects_m", src:"menu/memo.svg"			, title:"메모"			, click:"eFnc.runMemo()"},
			{ type:"image"		, id:"menu_draw_btn_m"			, 'class':"bottomobjects_m", src:"menu/drawing.svg"		, title:"판서"			, click:"eFnc.runDrawing()"},
			{ type:"image"		, id:"menu_pdf_btn_m"			, 'class':"bottomobjects_m", src:"menu/pdf.svg"				, title:"PDF 내려받기"	, click:"eFnc.pdfDown()"},
			{ type:"image"		, id:"menu_tablelist_btn_m"	, 'class':"bottomobjects_m", src:"menu/contents.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"image"		, id:"menu_bookmark_btn_m"	, 'class':"bottomobjects_m", src:"menu/bookmark.svg"	, title:"북마크"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_slide_btn_m"			, 'class':"bottomobjects_m", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()"},
			{ type:"image"		, id:"menu_thumb_btn_m"			, 'class':"bottomobjects_m", src:"menu/thumbnail.svg"	, title:"썸네일"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
	]},

	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창
	{ type:"thumblist"		, id:"thumbnail_window"	}, // 섬네일창
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
