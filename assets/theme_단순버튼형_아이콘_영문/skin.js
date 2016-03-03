
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
			{ type:"image"		, id:"top_search_btn"		, 'class':"topobjects", src:"search.svg"		, title:"Search"			, click:"eFnc.wndToggle('#searchlist_window')"		},
			{ type:"logo"			, id:"top_logo"						, src:"logo.png"					, title:"Logo"	},
			{ type:"image"		, id:"top_menu_btn"		, 'class':"topobjects", src:"menu.svg"		, title:"Menu"			, click:"eFnc.wndToggle('#menu_window')"		},
			{ type:"window"		, id:"menu_window"			, 'class':"mainobjects"		, children:[
				{ type:"window"		, id:"arrow_up"			, 'class':"mainobjects" },
				{ type:"window"		, id:"menu_contents"			, 'class':"mainobjects"		, children:[
					{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/contents.svg"	, title:"Contents"			, click:"eFnc.wndToggle('#tablelist_window')"			},
					{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"	, title:"Bookmark"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
					{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"Slide"	, click:"eFnc.runSlideShow()&eFnc.wndHide('#menu_window')" },
					{ type:"image"		, id:"menu_memo_btn"			, 'class':"menuobjects", src:"menu/memo.svg"			, title:"Memo"			, click:"eFnc.runMemo()"},
					{ type:"image"		, id:"menu_draw_btn"			, 'class':"menuobjects", src:"menu/drawing.svg"		, title:"Drawing"			, click:"eFnc.runDrawing()&eFnc.wndHide('#menu_window')" },
					{ type:"image"		, id:"menu_pdf_down"			, 'class':"menuobjects", src:"menu/pdf.svg"				, title:"PDF Download"	, click:"eFnc.pdfDown()"},
					{ type:"image"		, id:"menu_print_btn"			, 'class':"menuobjects", src:"menu/print.svg"			, title:"Print"			, click:"eFnc.runPrint()", visible:"pc"	},
					{ type:"image"		, id:"menu_thumb_btn"			, 'class':"menuobjects", src:"menu/thumbnail.svg"	, title:"Thumbnail"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
				]},
			]},
			{ type:"booklist"	, id:"booklist"	, 'class':"mainobjects"	},
		]},
	]},
	
	{ type:"pageview"	, id:"pageview"	},
	
	// bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects text_right"	, visible:"pc", children:[
		
		{ type:"image" 		, id:"menu_twitter"			, 'class':"quickobjects sns_pos", src:"sns/twitter.svg"			, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"menu_facebook"		, 'class':"quickobjects sns_pos", src:"sns/facebook.svg"			, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
		
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},

		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},

		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"Last Page"		, click:"eFnc.gotoPage(-1)"	},
		
	]},
	
	// bottom for Mobile
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects text_left"	, visible:"mobile", children:[
		
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects_m"		, src:"quick/first.svg"		, title:"First Page"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects_m"		, src:"quick/prev.svg"		, title:"Previous Page"	, click:"eFnc.gotoPrev()"		},

		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},

		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects_m"		, src:"quick/next.svg"		, title:"Next Page"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects_m"		, src:"quick/last.svg"		, title:"Last Page"		, click:"eFnc.gotoPage(-1)"	},
		
		{ type:"image" 		, id:"menu_twitter"			, 'class':"quickobjects_m sns_pos_m", src:"sns/twitter.svg"			, title:"Twitter"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"menu_facebook"		, 'class':"quickobjects_m sns_pos_m", src:"sns/facebook.svg"			, title:"Facebook"		, click:"eFnc.sendSNS('facebook')"},
		{ type:"image" 		, id:"menu_kakaotalk"		, 'class':"quickobjects_m sns_pos_m", src:"sns/kakaotalk.svg"		, title:"Kakao Talk"		, click:"eFnc.sendSNS('kakaotalk')" },
		
	]},

	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창
	{ type:"thumblist"		, id:"thumbnail_window"	}, // 섬네일창
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
