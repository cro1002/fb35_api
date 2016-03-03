
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
			{ type:"logo"			, id:"menu_logo"					, src:"logo.png"					, title:"Logo"	},
			{ type:"image"		, id:"menu_pdf_down"			, 'class':"menuobjects", src:"menu/pdf.svg"				, title:"PDF Download"	, click:"eFnc.pdfDown()"},			
			{ type:"image"		, id:"menu_draw_btn"			, 'class':"menuobjects", src:"menu/drawing.svg"		, title:"Drawing"			, click:"eFnc.runDrawing()"},
			{ type:"image"		, id:"menu_memo_btn"			, 'class':"menuobjects", src:"menu/memo.svg"			, title:"Memo"			, click:"eFnc.runMemo()"},
			{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/contents.svg"	, title:"Contents"			, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"Slide"	, click:"eFnc.runSlideShow()"},
			{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"	, title:"Bookmark"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_print_btn"			, 'class':"menuobjects", src:"menu/print.svg"			, title:"Print"			, click:"eFnc.runPrint()", visible:"pc"	},
			{ type:"image"		, id:"menu_thumb_btn"	, 'class':"menuobjects"		, src:"menu/thumbnail.svg"	, title:"Thumbnail"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
			{ type:"booklist"	, id:"booklist"	, 'class':"mainobjects"	},
			{ type:"window"		, id:"search_window"				, 'class':"mainobjects", children:[
				{ type:"input"		, id:"search_text",					'class':"mainobjects"	},
				{ type:"image"		, id:"search_text_btn"		, 'class':"menuobjects", src:"menu/search.svg"		, title:"Search"			, click:"eFnc.searchByInput('#search_text')"		},
			]},
		]},
	]},
	
	// Menu for Mobile
	{ type:"window"		, id:"menu_window"				, 'class':"mainobjects", visible:"mobile", children:[
	
		{ type:"window"		, id:"menu_center_m"			, 'class':"mainobjects"		, children:[
			{ type:"logo"			, id:"menu_logo_m"					, src:"logo.svg"					, title:"Logo"	},
			
			
			{ type:"image"		, id:"menu_pdf_down_m"			, 'class':"menuobjects_m", src:"menu/pdf.svg"				, title:"PDF Download"	, click:"eFnc.pdfDown()"},
			{ type:"image"		, id:"menu_draw_btn_m"			, 'class':"menuobjects_m", src:"menu/draw.svg"			, title:"Drawing"			, click:"eFnc.runDrawing()"},
			{ type:"image"		, id:"menu_memo_btn_m"			, 'class':"menuobjects_m", src:"menu/memo.svg"			, title:"Memo"			, click:"eFnc.runMemo()"},
			{ type:"image"		, id:"menu_tablelist_btn_m"	, 'class':"menuobjects_m", src:"menu/tablelist.svg"	, title:"Table of Contents"			, click:"eFnc.wndToggle('#tablelist_window')"	},
			{ type:"image"		, id:"menu_slide_btn_m"			, 'class':"menuobjects_m", src:"menu/slide.svg"			, title:"Auto Sliding"	, click:"eFnc.runSlideShow()"},
			{ type:"image"		, id:"menu_bookmark_btn_m"	, 'class':"menuobjects_m", src:"menu/bookmark.svg"	, title:"Bookmark List"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_thumb_btn_m"	, 'class':"menuobjects_m"		, src:"menu/thumblist.svg"	, title:"Thumbnail List"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
			{ type:"booklist"	, id:"booklist_m"	, 'class':"mainobjects"	},
			{ type:"input"		, id:"search_text_m", 'class':"mainobjects"	},
			{ type:"image"		, id:"search_text_btn_m"		, 'class':"menuobjects", src:"menu/search.svg"		, title:"Search"			, click:"eFnc.searchByInput('#search_text')"		},
		]},
	]},
	
	{ type:"pageview"	, id:"pageview"	},
	
	// Bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects"	, visible:"pc"	, children:[
	
		{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects", src:"sns/twitter.svg"			, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects", src:"sns/facebook.svg"		, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
		
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},

		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},

		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"Last Page"		, click:"eFnc.gotoPage(-1)"	},
	]},
	
	// Bottom for Mobile
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile"	, children:[
		{ type:"text"			, id:"quick_pagenum_text_m"		, 'class':"quicktexts_m"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area_m"		},
		{ type:"text"			, id:"quick_pagenum_slash_m"	, 'class':"quicktexts_m"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area_m"	},
	
		{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects_m", src:"sns/facebook.svg"		, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
		{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects_m", src:"sns/twitter.svg"			, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"sns_kakaotalk"	, 'class':"snsobjects_m", src:"sns/kakaotalk.svg"		, title:"Kakao Talk"		, click:"eFnc.sendSNS('kakaotalk')"},
	]},
	
	// Page Button for Mobile
	{ type:"image"		, id:"quick_first_btn_m"	, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/first.svg"	, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
	{ type:"image"		, id:"quick_prev_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},
	{ type:"image"		, id:"quick_next_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
	{ type:"image"		, id:"quick_last_btn_m"		, 'class':"quickobjects_m", visible:"mobile"	,src:"quick/last.svg"		, title:"Last Page"		, click:"eFnc.gotoPage(-1)"	},
	
	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창

	{ type:"thumblist"		, id:"thumbnail_window"	},
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
