
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

	// Menu for PC
	{ type:"window"		, id:"menu_window"				, 'class':"mainobjects", visible:"pc", children:[
	
		{ type:"window"		, id:"menu_center"			, 'class':"mainobjects"		, children:[
			{ type:"logo"			, id:"menu_logo"					, src:"logo.svg"					, title:"로고이미지"	},
			
			{ type:"image"		, id:"menu_draw_btn"			, 'class':"menuobjects", src:"menu/draw.svg"			, title:"판서"			, click:"eFnc.runDrawing()"												},
			{ type:"image"		, id:"menu_pdf_down"			, 'class':"menuobjects", src:"menu/pdf.svg"				, title:"PDF 받기"	, click:"eFnc.pdfDown()"												},
			{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()"											},
			{ type:"image"		, id:"menu_memo_btn"			, 'class':"menuobjects", src:"menu/memo.svg"			, title:"메모"			, click:"eFnc.runMemo()"													},
			{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"	, title:"책갈피"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/tablelist.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"image"		, id:"menu_print_btn"			, 'class':"menuobjects", src:"menu/print.svg"			, title:"인쇄"			, click:"eFnc.runPrint()"											, visible:"pc"	},
			{ type:"booklist"	, id:"booklist"	, 'class':"mainobjects"	},
			
			{ type:"window"		, id:"search_window"				, 'class':"mainobjects", children:[
				{ type:"input"		, id:"search_text",					'class':"mainobjects"	},
				{ type:"image"		, id:"search_text_btn"		, 'class':"menuobjects", src:"menu/search.svg"		, title:"검색"			, click:"eFnc.searchByInput('#search_text')"		},
			]},
		]},
	]},
	
	// Menu for Mobile
	{ type:"window"		, id:"menu_window"				, 'class':"mainobjects", visible:"mobile", children:[
	
		{ type:"window"		, id:"menu_center_m"			, 'class':"mainobjects"		, children:[
			{ type:"logo"			, id:"menu_logo_m"					, src:"logo.svg"					, title:"로고이미지"	},
			
			{ type:"image"		, id:"menu_draw_btn_m"			, 'class':"menuobjects_m", src:"menu/draw.svg"			, title:"판서"			, click:"eFnc.runDrawing()"												},
			{ type:"image"		, id:"menu_pdf_down_m"			, 'class':"menuobjects_m", src:"menu/pdf.svg"				, title:"PDF 받기"	, click:"eFnc.pdfDown()"												},
			{ type:"image"		, id:"menu_slide_btn_m"			, 'class':"menuobjects_m", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()"											},
			{ type:"image"		, id:"menu_memo_btn_m"			, 'class':"menuobjects_m", src:"menu/memo.svg"			, title:"메모"			, click:"eFnc.runMemo()"													},
			{ type:"image"		, id:"menu_bookmark_btn_m"	, 'class':"menuobjects_m", src:"menu/bookmark.svg"	, title:"책갈피"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_tablelist_btn_m"	, 'class':"menuobjects_m", src:"menu/tablelist.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"booklist"	, id:"booklist_m"	, 'class':"mainobjects"	},
			
			{ type:"input"		, id:"search_text_m", 'class':"mainobjects"	},
			{ type:"image"		, id:"search_text_btn_m"		, 'class':"menuobjects", src:"menu/search.svg"		, title:"검색"			, click:"eFnc.searchByInput('#search_text')"		},
		]},
	]},
	
	{ type:"pageview"	, id:"pageview"	},
	
	// Bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects"	, visible:"pc"	, children:[
	
		{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects", src:"sns/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects", src:"sns/facebook.svg"		, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
		
		{ type:"image"		, id:"quick_thumb_btn"	, 'class':"quickobjects"		, src:"menu/thumblist.svg"	, title:"섬네일보기"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
		
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},

		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},

		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
		
	]},
	
	// Bottom for Mobile
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile"	, children:[
		{ type:"text"			, id:"quick_pagenum_text_m"		, 'class':"quicktexts_m"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area_m"		},
		{ type:"text"			, id:"quick_pagenum_slash_m"	, 'class':"quicktexts_m"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area_m"	},
	
		{ type:"image" 		, id:"sns_kakaotalk"	, 'class':"snsobjects_m", src:"sns/kakaotalk.svg"		, title:"카카오톡"		, click:"eFnc.sendSNS('kakaotalk')"},
		{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects_m", src:"sns/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects_m", src:"sns/facebook.svg"		, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
	]},
	
	
	// Page Button for Mobile
	{ type:"image"		, id:"quick_first_btn_m"	, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/first_m.svg"	, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
	{ type:"image"		, id:"quick_prev_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/prev_m.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
	{ type:"image"		, id:"quick_next_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/next_m.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
	{ type:"image"		, id:"quick_last_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/last_m.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
	
	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창

	{ type:"thumblist"		, id:"thumbnail_window"	},//{ type:"thumblist"		, id:"thumbnail_list"				},
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
