
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

	{ type:"window"		, id:"top_window"			, 'class':"mainobjects", visible:"pc", children:[
		{ type:"home" 		, id:"top_home_btn"				, 'class':"topobjects togglewnd", src:"top_home.svg"				, title:"Home"	},
		{ type:"image"		, id:"top_search_btn"			, 'class':"topobjects togglewnd", src:"top_search.svg"			, title:"Search"		,click:"eFnc.searchByInput()&eFnc.wndHide('.togglewnd')"		},
		{ type:"image"		, id:"top_menu_btn"				, 'class':"topobjects"					, src:"top_menu.svg"				, title:"Menu"			,click:"eFnc.wndToggle('.togglewnd')"		},
		{ type:"image" 		, id:"top_fullscreen_btn"	, 'class':"topobjects"					, src:"top_fullscreen.svg"	, title:"Fullscreen",click:"eFnc.fullscreenToggle()&eFnc.wndHide('.togglewnd')"},
	]},
	
	{ type:"window"		, id:"top_window_m"	, 'class':"mainobjects", visible:"mobile", children:[
		{ type:"window"		, id:"top_center_m"		, 'class':"mainobjects", children:[
			{ type:"image"		, id:"top_search_btn_m", 'class':"topobjects_m", src:"search.svg", title:"Search", click:"eFnc.wndToggle('#searchlist_window')" },
			{ type:"logo"			, id:"top_logo_m", src:"logo.png", title:"logo"},
			{ type:"booklist"	, id:"booklist_m", 'class':"topobjects_m"},
		]},
	]},
	
	{ type:"image"		, id:"page_prev_btn"		, 'class':"mainobjects"	, src:"big_prev.svg", visible:"pc", title:"Previous Page"	, click:"eFnc.gotoPrev()"	},
	{ type:"image"		, id:"page_next_btn"		, 'class':"mainobjects"	, src:"big_next.svg", visible:"pc", title:"Next Page"			, click:"eFnc.gotoNext()"	},
	
	{ type:"pageview"	, id:"pageview", visible:"pc"	},
	{ type:"pageview"	, id:"pageview_m", visible:"mobile"	},
	
	// bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects togglewnd"	, visible:"pc", children:[
		{ type:"window"		, id:"bottom_center"		, 'class':"mainobjects"	, children:[
			{ type:"image" 		, id:"menu_twitter"		, 'class':"bottomobjects_sns", src:"sns/twitter.svg"			, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
			{ type:"image" 		, id:"menu_facebook"	, 'class':"bottomobjects_sns", src:"sns/facebook.svg"			, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
			
			{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
			{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},

			{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1	},
			{ type:"pagenum"	, id:"quick_pagenum_area"	},
			{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"			, tabindex:-1	},
			{ type:"pagetotal", id:"quick_pagetotal_area"	, 'class':"quicktexts"	},

			{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
			{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"Last Page"		, click:"eFnc.gotoPage(-1)"	},
			
			{ type:"image"		, id:"menu_memo_btn"			, 'class':"bottomobjects", src:"menu/memo.svg"			, title:"Memo"			, click:"eFnc.runMemo()&eFnc.wndHide('.togglewnd')"},
			{ type:"image"		, id:"menu_draw_btn"			, 'class':"bottomobjects", src:"menu/drawing.svg"		, title:"Drawing"			, click:"eFnc.runDrawing()&eFnc.wndHide('.togglewnd')"},
			{ type:"image"		, id:"menu_pdf_btn"				, 'class':"bottomobjects", src:"menu/pdf.svg"				, title:"PDF Download"	, click:"eFnc.pdfDown()"},
			{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"bottomobjects", src:"menu/contents.svg"	, title:"Contents"			, click:"eFnc.wndToggle('#tablelist_window')&eFnc.wndHide('.togglewnd')"			},
			{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"bottomobjects", src:"menu/bookmark.svg"	, title:"Bookmark"		, click:"eFnc.wndToggle('#bookmarklist_window')&eFnc.wndHide('.togglewnd')"	},
			{ type:"image"		, id:"menu_slide_btn"			, 'class':"bottomobjects", src:"menu/slide.svg"			, title:"Slide"	, click:"eFnc.runSlideShow()&eFnc.wndHide('.togglewnd')"},
			{ type:"image"		, id:"menu_print_btn"			, 'class':"bottomobjects", src:"menu/print.svg"			, title:"Print"			, click:"eFnc.runPrint()", visible:"pc"	},
			{ type:"image"		, id:"menu_thumb_btn"			, 'class':"bottomobjects", src:"menu/thumbnail.svg"	, title:"Thumbnail"	, click:"eFnc.wndToggle('#thumbnail_window')&eFnc.wndHide('.togglewnd')"	},
		]},
	]},
	
	// bottom for Mobile
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile", children:[
		{ type:"image" 		, id:"menu_switch_btn_m"	, 'class':"quickobjects_m", src:"menu_mobile.svg"	, title:"Menu"	, click:"eFnc.wndToggle('#menu_popup_window_m')"},

		{ type:"image"		, id:"quick_first_btn_m"	, 'class':"quickobjects_m"		, src:"quick_m/first.svg"		, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn_m"		, 'class':"quickobjects_m"		, src:"quick_m/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},
		
		{ type:"text"			, id:"quick_pagenum_text_m"		, 'class':"quicktexts_m"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area_m"	},
		{ type:"text"			, id:"quick_pagenum_slash_m"	, 'class':"quicktexts_m"	, text:"/"			, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area_m"	, 'class':"quicktexts_m"	},
		
		{ type:"image"		, id:"quick_next_btn_m"		, 'class':"quickobjects_m"		, src:"quick_m/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn_m"		, 'class':"quickobjects_m"		, src:"quick_m/last.svg"		, title:"Last Page"	, click:"eFnc.gotoPage(-1)"	},
		
		{ type:"image" 		, id:"menu_twitter_m"			, 'class':"bottomobjects_sns_m", src:"sns_m/twitter.svg"		, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"menu_facebook_m"		, 'class':"bottomobjects_sns_m", src:"sns_m/facebook.svg"		, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
		{ type:"image" 		, id:"menu_kakaotalk_m"		, 'class':"bottomobjects_sns_m", src:"sns_m/kakaotalk.svg"	, title:"Kakao Talk"	, click:"eFnc.sendSNS('kakaotalk')"},
		{ type:"home" 		, id:"menu_home_m"				, 'class':"bottomobjects_sns_m", src:"sns_m/home.svg"				, title:"Home"	},
		
	]},

	// menu popup for Mobile
	{ type:"window"		, id:"menu_popup_window_m"			, 'class':"mainobjects"	, visible:"mobile", children:[
			{ type:"image"		, id:"menu_memo_btn_m"			, 'class':"bottomobjects_m", src:"menu/memo.svg"			, title:"Memo"				, click:"eFnc.runMemo()"},
			{ type:"image"		, id:"menu_draw_btn_m"			, 'class':"bottomobjects_m", src:"menu/drawing.svg"		, title:"Drawing"			, click:"eFnc.runDrawing()"},
			{ type:"image"		, id:"menu_pdf_btn_m"				, 'class':"bottomobjects_m", src:"menu/pdf.svg"				, title:"PDF Download", click:"eFnc.pdfDown()"},
			{ type:"image"		, id:"menu_tablelist_btn_m"	, 'class':"bottomobjects_m", src:"menu/contents.svg"	, title:"Contents"		, click:"eFnc.wndToggle('#tablelist_window')"			},
			{ type:"image"		, id:"menu_bookmark_btn_m"	, 'class':"bottomobjects_m", src:"menu/bookmark.svg"	, title:"Bookmark"	, click:"eFnc.wndToggle('#bookmarklist_window')"	},
			{ type:"image"		, id:"menu_slide_btn_m"			, 'class':"bottomobjects_m", src:"menu/slide.svg"			, title:"Slide"			, click:"eFnc.runSlideShow()"},
			{ type:"image"		, id:"menu_thumb_btn_m"			, 'class':"bottomobjects_m", src:"menu/thumbnail.svg"	, title:"Thumbnail"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
	]},
	
	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창
	{ type:"thumblist"		, id:"thumbnail_window"	}, // 섬네일창
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
