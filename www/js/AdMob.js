	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { // for Android
			banner: 'ca-app-pub-7415721885532178/3738588646',
			interstitial: 'ca-app-pub-7415721885532178/3546785440'
		};
	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
		admobid = { // for iOS
			banner: 'ca-app-pub-6869992474017983/4806197152',
			interstitial: 'ca-app-pub-6869992474017983/7563979554'
		};
	} else {
		admobid = { // for Windows Phone
			banner: 'ca-app-pub-6869992474017983/8878394753',
			interstitial: 'ca-app-pub-6869992474017983/1355127956'
		};
	}
        
    function initApp() {
		if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
		initAd();
        // display the banner at startup
        createSelectedBanner();
    }
    function initAd(){
        var defaultOptions = {
            // bannerId: admobid.banner,
            // interstitialId: admobid.interstitial,
            // adSize: 'SMART_BANNER',
            // width: integer, // valid when set adSize 'CUSTOM'
            // height: integer, // valid when set adSize 'CUSTOM'
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black', // color name, or '#RRGGBB'
            // x: integer,		// valid when set position to 0 / POS_XY
            // y: integer,		// valid when set position to 0 / POS_XY
            isTesting: false, // set to true, to receiving test ad for testing purpose
            // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        };
        AdMob.setOptions( defaultOptions );
        registerAdEvents();
    }
    // optional, in case respond to events or handle error
    function registerAdEvents() {
    	/* deprecated
        document.addEventListener('onBannerFailedToReceive', function(data){ alert('error: ' + data.error + ', reason: ' + data.reason); });
        document.addEventListener('onBannerReceive', function(){});
        document.addEventListener('onBannerPresent', function(){});
        document.addEventListener('onBannerLeaveApp', function(){});
        document.addEventListener('onBannerDismiss', function(){});
        
        document.addEventListener('onInterstitialFailedToReceive', function(data){ alert('error: ' + data.error + ', reason: ' + data.reason); });
        document.addEventListener('onInterstitialReceive', function(){});
        document.addEventListener('onInterstitialPresent', function(){});
        document.addEventListener('onInterstitialLeaveApp', function(){});
        document.addEventListener('onInterstitialDismiss', function(){});
        */
        
        // new events, with variable to differentiate: adNetwork, adType, adEvent
        //document.addEventListener('onAdFailLoad', function(data){ 
        //	alert('error: ' + data.error + 
        //			', reason: ' + data.reason + 
        //			', adNetwork:' + data.adNetwork + 
        //			', adType:' + data.adType + 
        //			', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
        //});
        document.addEventListener('onAdLoaded', function(data){});
        document.addEventListener('onAdPresent', function(data){});
        document.addEventListener('onAdLeaveApp', function(data){});
        document.addEventListener('onAdDismiss', function(data){});
    }
	function showBanner() {
if(AdMob) AdMob.createBanner( {
    adId: admobid.banner, 
    position: AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow: true } );
	
	if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:true} );};
	function showInterstitial() {
	if(AdMob) AdMob.showInterstitial();
	};