const _0x2a75f6=_0x5670;function _0x2ad1(){const _0x4684d2=['5720720JpuPdE','caption','attr','lang','713186JhfFHU','15155700ffdena','text','70vVfZKT','https://savetik.co/api/ajaxSearch','exports','status','109761KiPftx','form-data','server1','audio','data','append','405176jlFupE','1GaucFJ','9bKqfEz','60PEDwmN','post','2178022JwhWmq','log','application/x-www-form-urlencoded','div.video-data\x20>\x20div\x20>\x20.tik-left\x20>\x20div\x20>\x20.content\x20>\x20div\x20>\x20h3','div.video-data\x20>\x20div\x20>\x20.tik-right\x20>\x20div\x20>\x20p:nth-child(4)\x20>\x20a','PostmanRuntime/7.32.2','10YLNpoE','div.video-data\x20>\x20div\x20>\x20.tik-right\x20>\x20div\x20>\x20p:nth-child(1)\x20>\x20a','590796auchRk','div.video-data\x20>\x20div\x20>\x20.tik-right\x20>\x20div\x20>\x20p:nth-child(3)\x20>\x20a','href','Gatau\x20kenapa','MP4\x20','message'];_0x2ad1=function(){return _0x4684d2;};return _0x2ad1();}(function(_0x376975,_0x15958b){const _0x3fae6d=_0x5670,_0x70cad9=_0x376975();while(!![]){try{const _0x4e631d=parseInt(_0x3fae6d(0x1d9))/0x1*(-parseInt(_0x3fae6d(0x1cb))/0x2)+parseInt(_0x3fae6d(0x1d2))/0x3*(-parseInt(_0x3fae6d(0x1db))/0x4)+parseInt(_0x3fae6d(0x1e3))/0x5*(parseInt(_0x3fae6d(0x1e5))/0x6)+-parseInt(_0x3fae6d(0x1ce))/0x7*(-parseInt(_0x3fae6d(0x1d8))/0x8)+parseInt(_0x3fae6d(0x1da))/0x9*(-parseInt(_0x3fae6d(0x1eb))/0xa)+-parseInt(_0x3fae6d(0x1dd))/0xb+parseInt(_0x3fae6d(0x1cc))/0xc;if(_0x4e631d===_0x15958b)break;else _0x70cad9['push'](_0x70cad9['shift']());}catch(_0x5eb47f){_0x70cad9['push'](_0x70cad9['shift']());}}}(_0x2ad1,0x47059));function _0x5670(_0x4bd646,_0x169e00){const _0x2ad100=_0x2ad1();return _0x5670=function(_0x567074,_0x488e57){_0x567074=_0x567074-0x1c9;let _0x1ff906=_0x2ad100[_0x567074];return _0x1ff906;},_0x5670(_0x4bd646,_0x169e00);}const formData=require(_0x2a75f6(0x1d3));async function tiktokdl(_0x23f1ee){const _0x327051=_0x2a75f6;let _0x5c3a28={};const _0x4fc996=new formData();_0x4fc996[_0x327051(0x1d7)]('q',_0x23f1ee),_0x4fc996['append'](_0x327051(0x1ca),'id');try{const {data:_0x54f9a7}=await axios(_0x327051(0x1cf),{'method':_0x327051(0x1dc),'data':_0x4fc996,'headers':{'content-type':_0x327051(0x1df),'User-Agent':_0x327051(0x1e2)}}),_0x4e46c2=cheerio['load'](_0x54f9a7[_0x327051(0x1d6)]);return _0x5c3a28[_0x327051(0x1d1)]=!![],_0x5c3a28[_0x327051(0x1ec)]=_0x4e46c2(_0x327051(0x1e0))[_0x327051(0x1cd)](),(_0x5c3a28[_0x327051(0x1d4)]={'quality':'MEDIUM','url':_0x4e46c2(_0x327051(0x1e4))[_0x327051(0x1c9)](_0x327051(0x1e7))},_0x5c3a28['serverHD']={'quality':_0x4e46c2(_0x327051(0x1e6))['text']()['split'](_0x327051(0x1e9))[0x1],'url':_0x4e46c2(_0x327051(0x1e6))[_0x327051(0x1c9)](_0x327051(0x1e7))},_0x5c3a28[_0x327051(0x1d5)]=_0x4e46c2(_0x327051(0x1e1))[_0x327051(0x1c9)](_0x327051(0x1e7))),_0x5c3a28;}catch(_0x3a8aeb){return _0x5c3a28['status']=![],_0x5c3a28[_0x327051(0x1ea)]=_0x327051(0x1e8),console[_0x327051(0x1de)](_0x5c3a28),_0x5c3a28;}}module[_0x2a75f6(0x1d0)]={'tiktokdl':tiktokdl};