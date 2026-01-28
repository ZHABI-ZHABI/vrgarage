// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: skin_1.ggsk
// Generated 2026-01-29T04:15:24

function pano2vrSkin(player,base) {
	player.addVariable('current_floor', 1, 1);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._nav_buttons=document.createElement('div');
		el.ggId="nav_buttons";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 334px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nav_buttons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nav_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAoCAYAAAC2J5JyAAACaElEQVR4nO3dvW7iQBSG4fe4Yrtst5RcAi1l0uUWttzrSrm3kJJ0lNyCS0oo6c4WHiew/CfYkeB9JAsJYzTVp6MznpngkzJzBAyB9nNQLkm6RWtgCayABVBHRP2ZP4pLfpyZA2BSLkNW0r1bAjUwjYjVuQ+dFbwlcB9pAleStGvOmQF8Mngzc0ITula4knTcEniLiPmxHx0N3sx8xipXki41i4jXQzf3Bm9pLfymmTiTJF1uAbxExPr/G9WBB/5g6ErSVwxpCtgdO8Fb2gvDrkckSXdgVDJ1y1bwZuYYe7qSdE2T8pLCu/fgzcwH4Kn3IUnS7Xssc2fAdsX7BDz0Px5JunntWgigBG+pdsffNSJJugOTtuptK15bDJLUvQl8BK+vjklS95rgLbuM2d'+
			'uVpO4NMnNUYbUrSX0aVrhYQpL6NKqwzSBJffpVAT+/exSSdEd+VLjPriT1aXBodzJJUkcqmgPcJEn9WBu8ktSvZUWzS7okqR+riuZoYklSPxZWvJLUr7qKiBr7vJLUh2VE1O3rZLNvHYok3YcaPraFNHglqXtTKMFbzn03fCWpO/OIWMH2mWtT7PVKUheWlGoXNoK3VL3TfU9Ikr7kra12YbviJSJm2HKQpGuaRcR884udTXIi4hUXVUjSNSxKpm45tDvZX1xYIUlfUQMv+27Esacy85lyKqYk6WyzfZVu62jwAmTmGHjCI4Ik6ZQ1MC3zZQedDF6AzHygCd/xFQYmSbdoRhO6J1/LPSt4WxsBPMIKWJLaxWezcwK3dVHwbsrMEU0AD2lC+Cee3ybpdq3LtaCZOFuUTcYu9g8dmJBG0xU6FAAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=7;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=129;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map_1=document.createElement('div');
		els=me._map_1__img=document.createElement('img');
		els.className='ggskin ggskin_map_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.onclick=function (e) {
			me._map.ggVisible = !me._map.ggVisible;
			var flag=me._map.ggVisible;
			me._map.style[domTransition]='none';
			me._map.style.visibility=((flag)&&(Number(me._map.style.opacity)>0||!me._map.style.opacity))?'inherit':'hidden';
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._map_1);
		el=me._pan_left=document.createElement('div');
		els=me._pan_left__img=document.createElement('img');
		els.className='ggskin ggskin_pan_left';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -270px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_left.onmouseout=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.onmousedown=function (e) {
			me.elementMouseDown['pan_left']=true;
		}
		me._pan_left.onmouseup=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ontouchend=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._pan_left);
		el=me._pan_right=document.createElement('div');
		els=me._pan_right__img=document.createElement('img');
		els.className='ggskin ggskin_pan_right';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -235px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_right.onmouseout=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.onmousedown=function (e) {
			me.elementMouseDown['pan_right']=true;
		}
		me._pan_right.onmouseup=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ontouchend=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._pan_right);
		el=me._tilt_down=document.createElement('div');
		els=me._tilt_down__img=document.createElement('img');
		els.className='ggskin ggskin_tilt_down';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -199px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_down.onmouseout=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.onmousedown=function (e) {
			me.elementMouseDown['tilt_down']=true;
		}
		me._tilt_down.onmouseup=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ontouchend=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._tilt_down);
		el=me._tilt_up=document.createElement('div');
		els=me._tilt_up__img=document.createElement('img');
		els.className='ggskin ggskin_tilt_up';
		hs='data:image/png;base64,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'+
			'pIIP8PetZtGZYq/18AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -164px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_up.onmouseout=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.onmousedown=function (e) {
			me.elementMouseDown['tilt_up']=true;
		}
		me._tilt_up.onmouseup=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ontouchend=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._tilt_up);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_in';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_out';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -95px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._zoom_out);
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjUxMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI2MS4wMTggMjYxLjAxOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjYxLjAxOCAyNjEuMDE4IiB3aWR0aD0iNTEycHgiPgogPGc+CiAgPHBhdGggZD0ibTI1OC40MDgsMjQ2LjY2MmwtNTIuMjA0LTUyLjIwNHYtMzYuNTQzaDguNzAxYzEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLT'+
			'I2LjEwMnYtNS4yMmMwLTEzLjkyMS0xMi4xODEtMjYuMTAyLTI2LjEwMi0yNi4xMDJoLTguNzAxdi03MS4zNDRjMC0xMy45MjEtMTIuMTgxLTI2LjEwMi0yNi4xMDItMjYuMTAyLTUuMjIsMC0xMC40NDEsMS43NC0xNS42NjEsNS4yMmwtNzkuNTIzLDY0LjkwNy03MC4xMjctNzAuMTI3Yy0zLjQ4LTMuNDgtOC43MDEtMy40OC0xMi4xODEtMS43NzYzNmUtMTVzLTMuNDgsOC43MDEgMCwxMi4xODFsNjAuOTA0LDYwLjkwNGgtMzMuMDYyYy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXY5Mi4yMjZjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFoNTAuODQ2bDgzLjE0Myw2Ny44NjVjMy40'+
			'OCwzLjQ4IDEwLjQ0MSw1LjIyIDE1LjY2MSw1LjIyIDEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLTI0LjM2MnYtMTUuNjYxbDQwLjAyMyw0MC4wMjNjMS43NCwxLjc0IDUuMjIsMS43NCA2Ljk2LDEuNzQgMS43NCwwIDUuMjIsMCA1LjIyLTEuNzQgMy40ODEtMy40OCAzLjQ4MS04LjcgMC4wMDEtMTIuMTgxem0tNDMuNTAzLTEyOC43NjhjNS4yMiwwIDguNzAxLDMuNDggOC43MDEsOC43MDF2NS4yMmMwLDUuMjItMy40OCw4LjcwMS04LjcwMSw4LjcwMWgtOC43MDF2LTIyLjYyMWg4LjcwMXptLTQxLjc2My05Ny40NDhjNS4yMi0zLjQ4IDEzLjkyMS0xLjc0IDEzLjkyMSw2Ljk2djE0Ny45MW'+
			'wtOTAuOTU2LTkwLjk1NiA3Ny4wMzUtNjMuOTE0em0tOTkuMTg3LDE0Ny45MWgtMzQuODAydi03NC44MjVoMzQuODAydjc0LjgyNXptMTEzLjEwOCw2NC4zODVjMCw4LjcwMS04LjcwMSwxMC40NDEtMTMuOTIxLDYuOTZsLTgxLjc4Ni02Ny44NjV2LTY3Ljg2NWw5NS43MDcsOTUuNzA3djMzLjA2M3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._sound_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_off.onclick=function (e) {
				player.playSound("_main","0");
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
		}
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._sound_off);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_rotate';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rotate);
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_exit';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_exit.onclick=function (e) {
			player.exitFullscreen();
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_enter';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.onclick=function (e) {
			player.enterFullscreen();
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._fullscreen_enter);
		me._image_1.appendChild(me._container_1);
		me._nav_buttons.appendChild(me._image_1);
		me.divSkin.appendChild(me._nav_buttons);
		el=me._maket=document.createElement('div');
		el.ggId="maket";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 62px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._maket.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._maket.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem23=document.createElement('div');
		els=me._marker_titlem23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 80;';
		hs+='height : 20px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #f8f8f8;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titlem23.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titlem23.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titlem23.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titlem23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem23.ggUpdatePosition=function (useTransition) {
		}
		me._maket.appendChild(me._marker_titlem23);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 0px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.onmouseover=function (e) {
			me._marker_titlem23.style[domTransition]='none';
			me._marker_titlem23.style.visibility=(Number(me._marker_titlem23.style.opacity)>0||!me._marker_titlem23.style.opacity)?'inherit':'hidden';
			me._marker_titlem23.ggVisible=true;
		}
		me._markertemplate.onmouseout=function (e) {
			me._marker_titlem23.style[domTransition]='none';
			me._marker_titlem23.style.visibility='hidden';
			me._marker_titlem23.ggVisible=false;
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		me._maket.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._maket);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 260px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='visibility : hidden;';
		hs+='width : 504px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._map.ggCurrentLogicStateScaling == 0) {
					me._map.ggParameter.sx = 0.75;
					me._map.ggParameter.sy = 0.75;
					me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
				}
				else {
					me._map.ggParameter.sx = 1;
					me._map.ggParameter.sy = 1;
					me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
				}
			}
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAECCAYAAACi+7QbAAACTUlEQVR4nO3WIVfbABhG4ffLJiqZGxI5HEhkcbP8TiwSXGVtJbKSiom6b6KFMxjnzJBku7uPSxrx3pM2aeUd3b1IcpnkLMlpkpP3rvsLbZPskmyqav3eBfX2RHd/S3KTZDHuttE9JXl4G/4quLu/J7mactUE7qvq/vngJbi7l0mWs0wa36qq7pJkSJLuvgg3Nkmujj/VQ3CS6xnHTOWmuxefjnf3cu41E/ic5MeQ5HzuJRM6G/LvvGM/wtchhz8W/4svw5+vYTGYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzm'+
			'A6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+kMpjOYzmA6g+mGJLu5R0xoOyTZzr1iQrshyePcKya0GZKsk+znXjKBp6paD1W1T3I795oJPCTHp3RVbZKsZp0zrvuqWidJ/Xq2u5dJlrNMGs+qqu6eD+rtp919keQ6ycmUq0awT3J7/Pa++C342TH8PIfw03G3fZhdDq/ZxyTr4/PplZ/U/0nf5+IccQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 258px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._arrows=document.createElement('div');
		el.ggId="arrows";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 148px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrows.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._arrows.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._third=document.createElement('div');
		els=me._third__img=document.createElement('img');
		els.className='ggskin ggskin_third';
		hs=basePath + 'images/third.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="third";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._third.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._third.onmouseout=function (e) {
			me.elementMouseDown['third']=false;
		}
		me._third.onmousedown=function (e) {
			me.elementMouseDown['third']=true;
		}
		me._third.onmouseup=function (e) {
			me.elementMouseDown['third']=false;
		}
		me._third.ontouchend=function (e) {
			me.elementMouseDown['third']=false;
		}
		me._third.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._arrows.appendChild(me._third);
		el=me._second=document.createElement('div');
		els=me._second__img=document.createElement('img');
		els.className='ggskin ggskin_second';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAgAElEQVR4nO1dd3RVVdb/7XPvfT2dQBokgSg9CoGggE4UFRGwMBN07L2g2EYECxJRHNsINhQUcWR0ZsinWFAsKBEpCgQQSQBpoZeQRvLy2r1nf38kgYjk5SV5L8RZ+a2VtbLeO++cfc4+ZZ/dDtCOdrSjHe1oRzva0Y52tKMd7WhHO9rxPwI61QSEAkNuHhIWFWEOl16yKyapESkmHzSzYK9GgpgYug54VFa8hlf3sTCqXQbK82bmVZ1q2oONPzSD0y9KtysWTwTIFlmx64B99ITR0TdffVXnoyhPlOAEhhEFKFYC2wAZRiATADDgBaiSQdUShkuBWiqAA5GI2Dtr3vt7v3h1cWlEQgenUEQZvKjIX5hffar72lz8sRicDaXDkg62ERNHWMc9dFtcuW'+
			'/HQCY6QwIDBHMvr/DZfKwTKQQGCFyvf3xCXwlc/38CmA1Ag4DKahWICgUr+YCxvqPWdfXLb759aNHkRa4jfY64kAe91frcQvwRGExZWVnKw0vGKFUVap+qKteftTDtYrvDliQhNSLSCGxmQGUwpJQgal63mBlCCIga7vsI5AWkFxC6q7J6j7fS+NLusHy0t3Jr4YOdp3sBSKDeRGmDaPMMfn3ntDOrDleOTMvoOtiqmJIlkKCzHuU1vCAhWoUGlhKaYoKJtFIGH3AZnqKd64pWxMRHfH5L0qSfW4WIZqKtMJhwwkq4a+6NZ6WckZh9br/McyrhPL1SVkYYUoLEMZIZrUf/sbZY1qzycOEoD4P916VrV69Y/93az/RVju9zc3ONer/5XZ9OBdoKgwEAI6YMCudy29nXTr1iYO/w7pcfwuGMcs9RKJpyqkk7KXSfgUhz'+
			'OMxQNieiy4IOemrehJcmr3xn4juVp5q2OrSNkWNQNkZlTsr52y1DLu4/1TAbow97jyT4SIdQRGuu1CZBKIK97CM3ezvsM/ads0XZcP4FQwfZfJp0RsnCQ0VFkKeaxlM9cPTcsocdFw85d+QuvfgRN7l7E5EAQMzcbGGptVGPVmbJMMOytZvaadrnW35ZMLHHxCqcwq36VI6gmLZ0fI/+5wyc7JbeUQYMu2RJwWYqgZgbGF8CQUISBXEYmBlCEVKVSrVFWD5dvWbz1MkDn94StAaaiNZk8DGhYz7PV7auXH1N1zNTbguz2oc4dRcJEURSGIBkRGjh0gqr24BezeAqgvDUsFqaCeQQEHY3vJYKXwVBAAjO5GIAJCXDplpltdu5bOuaXW/rQ23v51BOq2/ZrcXgY8x9ZeuUpPS0Xg8a4DFHUZns9fmaes4eL8s1KyZKjY'+
			'QZpn0Ab2TIXQw65IH5SO7c/ystWrq92hRh8RLBDQEDKgAJhX2weCvcppQhKba/3Do2xg7ZQcLXEaAUgujtgSexzFdecxWjk7QdAJ3SkGTSNEQgfCfD8lHh7s0vjU+euP/EMQklWnWLfq0wp39mz4ycXb59oyBQtzNKAAFfaA1dwmqywAFbMQObACr67uvlO/Zu3Ls53GEtrFbNRe/c0jwp9uE5N4eVelyphlfvmdAzvuewi87pKqGnCFCPKjhjXV4PhNqku3fNhGCApJSpWvKnSwtWP/lAn5z1zaGvOWi1FTx9w9Szhvbt98J2z+4hgV57jgkvDDADZlWrtsGyb++RA4U71u75zh5l+dY90LoplFvfs6sm93aWll+YnJFyXucOnXq54UnwGl5b3XbeFGHQ8OlINScvW7l11UP3n/7UKvwvrOCMjAzt9o+yB53WJXV6'+
			'sV46gAgBD0g91WEVmMqdR6u/ibVHvPnRhhXrZg+YbaBmgEI9SAQAt8/KUC+7/b7+ZaVH7rJFOS4EEC6J7SwZCFDqZ2YwA7FqzKpt23c8MOvK3NX5+fm+kBMfKmRkZGi3fvTXrIQuUdMMNgbq0giUuTVbmwSTUA7ZpXVOjGr/v4dverko7928o8Apu18qQ+8aGv78zAkplXpVdpWovMWQMrZWQgzofGZmKEKBBmXV4d1HHn3jz/OXhpLJoWDwsc6+tfe5QZ0SO7xsgDN9ug8kKKBBMHQD4aZwTkLH99ccXvfG83e8u2Xzx5tLQkBrs9FvRFrsvf+6q1v/6L43HMThG8u8FRZFDejoYWYmTdGgQKw+sPvwg3ckT1qO4xMkqDtSsBl8XFounHJW3569ZpTJikE6GyAif8LUMWFEMiNF7fLj5999896aD9cv+GJm3sEg0x'+
			'hUXH5/VuSZozP+MvL8827b6dudWU/q9jeZJUsWiqIgisLXFBYW3HNP76d+qv0uqEwOyRY9/eec/kPSM17Zqe8ZQiRA5L+zAAQzQwDlkUrEJxs2/vrag31z1oSCtlBhxsbJA/v27jW+RFZdytKIqDV0+Z/UXHN2p6qJy5YVrB0fCuk66Ax+ZeuUpLPSMl/f4S26VCjC75lbJ3SYFBVmsha6pTGvStCr19P1znr0nXKLTCM4RuN7/IK9ExzjGZYbnGz0MIzAjiXDpyPNnPrx0p9X3PPgmdP2BZu4oCGHc8S56Pliia/0figBSFMMVoVCbrd7veo2T+aoyEVjaazR6O/aMHI4R/QtD7/MY7LkWKxausEGM3PjKlhdcrQp4R8l8E4K5hgE1WJuWuG5BuArWAQ0cViypI4UU7D+m8LHs6Nv//yPzlwAyKEc+eeoBz/emFfw'+
			'UBx1XMuGJEGi0V2IFSLAPXbLinXXI4h8CZa5kHKWju912oDUKboqz2hIuV8LBoMkS0pTU35a8MWXjz43+o1FQaKjzeCHD1bviM2ILRrSc1D3EqM0CSB/sggTEfnIFxER64g+Y0Tv5UveWV4aDDqCwuApP04JHzS4z4uaqo5w+zxEgiRO3hHJkoWqaEhQ4tYtWPT1Y8+OfP2r2u/+GLbBwEAAsOzfq7ZH9A/fm9nzjL4ucsdJKYnopGcyAZC6bpDdbOvSuUt8TN8L075e/M5yb0sJaTmDs6D+47FHx5Zy2f0ew2OuNRz8boup1fSQpqjwut3rln65etKzo179uvbrP4Iw1VQIALziP6u3dcyMKYpOik03m7VOzLIhrReRIPYZPmLi1AFd+mwvKfQVFBYWtmhcWrzXX3X+ZRkH9H2PSJb2Wie4k65EIgJLCQushewx5z'+
			'x76avf1H2F/z3mAjVXJAKAZ0fO/Mri8ubYoG6W0q+qlkgQDEjbLv3QI9oZvoyWEtEiBj885+aweydfP6oantMlpN8tlpmhKlTugTHvqsjbPsNxpoZcl5yWlmaOj4+3dUrvZI/tFevolN7JnpKSYkGQhcyT4FgfjZj4T3VUzxNCrWBuuMvMDEMawkOe0x947NZLrxk/IrwlBKgt+fFj1z89+DP5n1vMZG2sKEOCwpSIT12ofKX2HAolCADlcI4Y5kpN2Ha05AwwxaoCkVJhEzE8zGJ/x/CY9V+vXbt7+uDpHoTYcDGWxhrv8XsvJwpTjxK97Do0IHDVW93CA8+N5fDmAVjc3HabLdjk5OSIq6ZcOHWtnv+YJkz+irKhG5RiSv7pp81r776v5xP5zW2zERzb6t86NKPT4W37xnQ7o8t5kfaI07yQYQRoAJsAEgw2CORW'+
			'oDjL3OV7dqzd8310p8gP7057dNuJdQUbL22ckjm094BXd3j3ZCqqf0cHTaioKq+eem3UvTnNpafZQlbcyMg/nT64y9+80GMbKUrharjx/ZKfnp6UOW1hc9sLBNkvZVvHPnjh7RnpvR5O6hx/pc8kBzl97jhJRrTOeoTOhkNn3W6wEaazHuXRPR0tZtNpaZ1TBsRHdxiUdHZix7P+0mvD8v+s84SKxq9mfr8v/tx4rVta8ggf+/wdEezTdeplPy1aiVcKVi/8eVdz2mv2Ft3/vD6Xe+Dr1dCdl5lrXDYYHC86vPftgh8X1H4VktUxv+r5uHR7v4l7UXzbIb3ELqhG6a/4cQcSimBdSirl8khm/tO5wwcOSUJC127bT3/mjm6Tdgebxlo6+JdFP3745/MvOutX6bwOhIZ8/khRBA7icN/kgYmXA1ja3Aab/JvZO58/o0'+
			'9Kj1m7vXsyFVVpcABJEAumw2X7K664JWnCyuYQGAg+qHqrU4I94oUD7sPXqSYVqLXkBGqEr3N5BUC6T0eiOeE/5ZXF4y8Nv+NIqGieV/LsYGtk5AIQdfQjdLGhS0o2Jf60cefG22/r+tgvaOLiaI4UKcqOlI+sQmX3WvvnSUeQGRBMVQ7DOmfmtW9tbUY7AWE+z3fY7aZnjviO/FU1qagdrGM0EREUCF2QqBJERwWJSoVEFQE6+DdCDTEzVE3FIePAGCXMkbOEl1hCRfdL1/53a7gMmytA/mKSSVEFqlDVvaS4alRWVlaTj9Qmb9Fzea4WZvgGV0pnhL9ytWuiMlJ15Obn/RqSlZCUlGR1F++90hYbNcwrSAV+wzAGAE1qbk2q64iMFSREmdRJBVG0V3jO9kq9LxRY635BRLUTRJgY+kW7S38ZlZaW9tm2bduCfiav'+
			'W7SuOEyNmV9lVF3LzA5/VqdyPhrZM6Pr2elL4pU8ymtS6GpTGayGVVT1sUWEJVfpLr+mMItidpaVVnz98FMvFzWxjYAxZc19cZYoy3gPe5NxfJtFjZ1VUjc1+bt/vv/xawunf5tv6WTxSo/0AQCVu0zDZo62XJY5rL8Cz11HfGXDSFBNnHBNPeRhz2nWMOWeB765dtndqTkhcTqYMO7pnbc/M2ZxZEREtod9tobKsQGoqjnFVSF7IwsbmhKf3LQtugOsR496xzAQXxvld1LFudQlzFAPdLKGv5k3Iy8kgVhdM7pG9OnUc4wqtO6GIYFa5rJkUiBksprwwUcLP3vklWvfWrAjf8fuwi8KD27+dnPJ5m83l2zK33XgtUGv7byQrvjwk3e/fCRRi/uXIEWy5Lr+sGEYUFXtzIyUM4dmZGRooejDsjeWHY01d5plIvMBqR'+
			'vH+nAiSBAYMr7cefTy2ILYJh0bTWLwnU9dYdXC1Yu9rEf7KUYWkxX7Sw5vXPnTe/kAQmICHP634cmH5cE7JaS53mQjTVXZ6/UuX5SX99i00W+uqqPpZHQCwMs3vbt6yXeLH/d53ctVVa3bkYgEAUzWUr3i6iPKkaRQ9AGAsaDw+zX7jxwqsJgsDdEJANBhRJvCzCOyJmc1qlWqjyYx+LY7b49zhFk7+wz/ToAOWA9vz9+3JOe8vJDZd2/961VpbsPTlVnWRn0xagK/tJ3CLZ7LOW/GntqiDV3Ljn32+LDX92gu5TkbLNtr3WBrCgjWfJDnDhqR3ilU/Zg9YLaxc33RkjA4ihsqw8zw6l5y2G1dnhx/a5NoCZjB6Rd1sh8xSgZIQCU/cUTMDAm5xR5l/7YphDQFQx4eEnYUB9MVVeE6B3QigiIEqg3f5jKXsgTHd45A'+
			'rhXSGpWy2KV7t4p6WQOkIclD7vAHcm5uTJnTEnC4I+w7CWxp6LpERDXbNEltp3FoQPyo+AbP6xMRMIMVjowwWJ4Jgr/ziEkCgNg5KfOpAoRI3RflVuIERA8+IbGKQzgqf123ddUdiXc0Weq95LxLjC1rf90ULsKO22AJIALpkAkInb2ak886s4BARcdExIYKAiZiPjPBlOD3BlMfATP4wJGKSJI0gJjNfopRpBaBJV+v2BFovc2BUE0OALEnZs4REPt8TrkBzZlYeWBftb5fgE4QCokEKDLrxix//W4RxtJY47uvlu+IViMBPxOJABOxGLBv576oQOsOmMHvzn7L4dSO9jRI+r1aWWDeu6/g4KZA620WSIYBRsffDwWXKap5D5q3c7DXZzDht5YuIrCEJI/TE1KPk32F+zZZYNrvr4wkqVaJyt7/mjXbHmi9ATN4+I'+
			'Dzony67qgvhJwMDBSY7VpIGewz2CCI425BDDZ0CQ2m6ujOju3NqTM7O5sST4s9zQVPzLEPGZAGKBy2ipW5K11BIb4BWMO0QgNGgb8yhiHJx7p92MDzg7+Cv8D8zppqQU2GhYbBQJGqe3cGWm9zoDFt02BfbBZmLwFgKSnC5ECxXrxiXPIjZWjGCn50/tVhaSld0iu9zuMrVQBCEXL1/sIDQST/pPDEWncCwu+4CRIwKWZahNyAr20BMThrXJbDgYhEZva7TdVGJxTPvDs3pDkfP335u0OHvM45ZUfKviYS+zXFVKFKde4Xr37zbnPqSxuRZi4o3TvcCT1BrRf/q5DCFkOrmH797KA6o58M71z+TiUgiv15ewAAM5MN9qSscb0cgdQbEIMdZhEBcEJjvtskgWpoDd7ngonLzWO3zLh+5s3ktFyQIjIGzn55wUNzH/yo'+
			'qDl1vfnF1EhThOkur/R0+c0XLL0kabVmVcqDQXNjUBFezLIx1QFBAPFCxgUkSQemi1Z1GwORJ15LTkSUFsm5b/9fUPx5A4CxbtG24jFh1zd3QhEATjo7yapKul0T1M8npaiXLYeEUPR4U8ynkVYK+RYNAPPm/Lt0zC3nc4Ws9DPOTAxE2UxKQHfhgFYws8VMIL+SGxGxBpNrx8odTn/l2ggEau2/97563Y1lXPWAAQ6vbxc2qRqczurts9+c82VebmGrpBnetqzAaYXF3ZjPGkPYDU0GpB8PiMGKlBpDt/0uY+tvWwUgnaZwS4udtVsBEgBeXP/EtVkZg5/0sh5Veztg1CRPgQWWIxbhmP7m2x+H/PytgzXa7jUgqxsTERnSBi8FdC8PiMG6YZgYaHRLkICLSIY0JUGw8NLGJ0efc8bAJ7Z7dscKQcemrpQs7JoV1a'+
			'hesGvDxv8iH63WH52FlwFnY1cAAtvJbPj1dKxDQAwWrGgEpREzFUNAuFnT2jqDxeztUwee0fv0x4v0vWnqCS5HmqJChfplwZcF/3hw8PSQ3n1PhEbSBwi331seAYAwC68SvC1amA3mANJiSEhAb8O5snMg5lfPSIrvmvBkBVdmEuE3ObBYMsVR7C9Lv/xpxuQRL5+C7HRqwIoJIQLzLQ9MyHIrBoHc/ksRCGQm5pAYx4OBeROmdzJb7DN08HDdMHBCIBh1VKMP/fe9hc8/M+K1r/zVEyoYhmGSkNbG7BoEdusc2EoKiMGkwQNwAO8WSBuzaJMMfn3n83FJtoSXdJaX+XRdUP0VwIAq+YgPpidevuHt92s/bfVoR5LSBMDmX5sEEISTpRKQMBsQgw2h+xhU/Zt3Dk5amWKrKnUHdPi3Jl7ZOi02M6XPM8V6yZUGs6hn'+
			'z65xrRVin02NeWI2PpiDmgOw7hrVqnCWezQFZGtsahlgF8ABmUQDW8EkPQLk937LYHLDY+17To+ALR2tgRd+fsh+VlqfKdvdu24iUaPHqHOtZckwK9puE6nPmxD7Vi7lGqgZk1OSh6vvn7ra3fBaGlMJC8CpqWoQV7BbuACUUyMruMxXKq669coOgdTZGpjP2Ur/9H4TduoHb1NMdS6xx91jhaKUC4i3RiN15nl0Xt2ZdsqSeN90y+Uxpb6KxhTCTKAylyYDeuonIFWlw0C5AO1vRA8OEioMVLQJBudwjjAh+Y5yVN5KxCb+rZM7IGFEKRFzC3DoBTrO3FOKalBs4++MMADeT5IqAqkzoBWcOzOvqgqVextbwTV5Q2XsNa9c06KY1hbgmETcvTRujBnqOEPnRCJCffWf7pNI0TrP27J7x1P30r0hCzRrCrJnZUf4IG'+
			'MbC7UhIq6Gc+/XL34dkEo4YHvwBfjLXp/PC2b/OxhBJEeZkRxovUHEMe/JiZ/efzHM3ikuuHrXClQ1zgEMsJToZk7+cOm6lTm1tuM2gWg2pwgg1V8ZyRJew8vDcFXA6tOAGbx49Q+lqqI6/XlU1lRIvSudvp6B1hskHGPu4wvHX3Dp6KznzDZrH73GmVyiVlpWhOAYNXrhjxvXTnyo/7RmhWOGCh6PrydB9PZXRiiCVSGcy9YtDdhiFzCDb7rjGqdV2goVFn7PKzc8SUm943oFWm+QwADw2Bfjz7pi5MU5e/X9fQ1pHAutYcmkCQUKKV8XHdp/3719JzfLrSeUSOyZ0NMNd7y/Mgorepjh2Hj1rTcEbLELmMGJHVPLBIk1TNTgmcXMKNPLceFFf0rN4ZzWeZasFjmL7k8ZNeLCh7bpu4cIIRg11yECAEUREKQsLT5U'+
			'+tCX41e2qZUL1AiEF1x4TtcyvRx+83eAvZKQn5CSELADQsDBZz72HQXxenDD1hWqlcJ0eFLta7y9AITMN7o+Zq3JsSVnpD58kA+PqfODr6WH2ZAUqUVv3LJj51Pjuj2yCSEKpWkByLLO6Gv086WgRhhsuCDgJVbW7d+1PyAJGmjCCt7w9QZnkpKwWgF5WR4P9vodEUQQED2qy1zD0ArqviWco8ZlJD3ig3Gz1/BRPWm5JjeI1mXfhsLCZ8d1e+RbtD3mAgC5j1QMI8iefhO3SgkB8qVosfkH8g8E/Nxtk7bR6c+8dNDpdO3RFBPgh3mVcMZ27p943u1rbg/Vy2oEADlLbrR40XWCAnFvtc9tFvUiHokIUaaw8kV5i//+QO+p76ON5uLKzslWk/t1yapCdYy/cppigrPKteuFuW8fakr9TWLw3OmL3O6j+ldmUv1Jce'+
			'z2epAYE9f7svSh/RGa5/N47pK5lguyRt1aZXgeqdY94UL5bVeYIcMRNm/e8wvfDkH7wYJy62OXDkjo0KmXy+sB/ExCjbQSb6Xny4UT85pko25aAPgRVIc5LB9J4HKWHF0Tu/P7VE9CFfCwJ6HCWXln1v1ZD+TNyAu6V+KNWTee877+ao6J1LCGnpl1wiWHXZbZJeJwxD6v1Rtw6IlhN0hxKuwwHO6VK0Pn8D5y0sjww1Vld4RHOuIV9eRZApkZYEAIHIiMiPiouLi4SfQ0+Yz8gl8xOw3zh0QY6S/DDgAoRPtiRPzoLLpsXVPb8Yehdw2NenLmPQ+XyvKJaCgBDIgNg6vNQvvczKafpGAVkgOzfwOCQLpC4oDZsKye+fcnduTmFAbd1+xHXpCxTxZ/ZrARDzSc4lCAIBifmRVP9iVN1Lw1OUfHJWPv1Z976OGV/TPT'+
			'h5TLqsiTlakjlCEiPbIyu9+IfnvXLVoXNH/p8EhzLEGcBj/vIjCYhIDNEPpoF4zhIIDJv5XmtxUQEUGvJGfpjZMm3ZWbc/03jf8ocPQbkRZ7VK8cSwrCwOT3Vb0wEVa2bvXGlRMzn2myzrzpd9VcyIjI6IUOOH419IalaQBgknYnnDfd86/r05rcjj94AAUCfr08AYBAktlqsIwwpIyQzOEB/0GGGSyjwJwabY68ccykYV2D2YV7/nlP90rhvomJ7f6EZ0M34IDt18iY8IVohqWrOcoIvrP7pJ+Xrf1pRaTJAfjb5iVgSKPTgOhed1x05+COtZ+2+Op0qHv5zihErWaWjZg/ggCC8MCT4XVTl8YLB1AbgKxxWXEZsT3vlFJ2kAb7SwxHkaZwLF2zasUd3SY1OUcW0IJsq9vX7vkkHh03SkM2rH0hAELQARy+dnD22W'+
			'NqP20xS/LvyPct2rjk01g1Ok8hQmMRj81FXVqICIRtDI80ByPzHQNA1ph+Y/bj4NX13m886aSXhkQ8YjfsW797wcm+DwTNX00Mmlf6ytSwaNvjPun3aGBDN6ibKXnV8oK199zf54nVzW7zt6C39rzQNyYperIZaj+GdAAw1dodWsjxGr8PAnkALiktPjrhuo73fRkMov9ROOWsc3tmvrrdWzSgsVdpNKGistT15LXR9zzZ3Ay9LdouL7nv/AsfmXHPuwfl4Xh/ddWI+owOavS8TcUl4+7ueHewQkHovYMv2Kz2yIHO6qpMMEeJuhRsLYAkqYBhqKq6L8bkWPzcpfO25+U1LQHZyTCfX3dEI+bNEr3smsbfcCTuKKL3Pf/A6zd9PiOv2emEW5Qv2h4Vs9IMy9vM/BhASkOPTtTpqEu5anRKLG2az9nPj63xf2op+Pq4'+
			'Cc6MjIzlu1271xhhRlANHGbdrB/IP+BGENx4mHPEIuC+Mj46OpAHOlkasAnbHJ9qalGOzxYxODcnt0pTXZ9fNXHMWJ+id5fccNZ3IoJh6JGKarteKRm6Gcj9GMevOS1acbWPO7bFiIq6vtHHFZFXWCNs10nDHd7Ya+dEJC2wFP5j2qyFgXpuNIQWz/gPfl6Y31mNe1pAVNUL4DoZWAigGnoPr808ZdIn44bXfR4MOtogjk3cRz8Zf4lLM0+phtG9lrkNjhFLCYVFdbya+Ox/fv60xQqiluqJCYWQ8VkRO7umpqYJofT16t6GntWpybZgGGQyqXH9e/TtGzcwducPH6zajlPoixwiHPcw+fzeiy8ZNewFj+ruoxu6v0c6pZRS2FUrm0jN/XHLtpcWj1vcSDRJ4wiKISDvn6t9aVmphRFxjnSzWUuWzA0/HUPEkpmOys'+
			'q4oT0GnRbVP+zA8v+s2Yb/HeYew6ML7xn+55Ejntql7z2TwXUeJg0+OaQqKlxu9/c/r9w04fGMp4KSADVolp68f64sTR/ey5eWnNrPJV1Rfp+OIUCQ4FKjLCmz5xkD4wfF7ln6/qpTEOwVMtCjn9994aiRFz5bZOzNoJrw1N+GutUvXOunHSMitxWs2vzC4+e8+H3QCAlWRQAwn+cr0TA/V+7b/yA3/jglMzOpQoXbrW+wevQpP0eWfJpDOafM8TwYmM/ZCooHX2E4zJMtFlO6T/oCevXckCwT1Q4vDsVfJgXzVZqgCjdjaayxacu6l1K0Lp8YvkZvQURErBs6LFYt3RoZ/vdMdJz0Kc+qH2je6gFgzcAxGucUzwlz4IJJYbFR08xWU7rX8CEQZhk+iRQ18eMNRQXTg/3kUNCN8Ytey6vsmX36lvT4Hn3KjYouBEJD'+
			'bwShhsmSWZLb0Dv4oA2MoIjT+4/tuf/LmUtbLXVCMDB9w9SzT0uNm1op9ZvchjcBkI2+es41icvR1dRl6bKCVZPu6z416N6ewWYwAcBXM/MOpmefXpAS16Wvh7xJUjI1pASp/YyJQMTSXC1d6X079UhPPKejCZ2se4pWFLVKApTmYtjdw3QA6p8AAAYSSURBVGJumHb5DRecPfSx/fqh4QQ21+aK83f9k8wsFKEgRolatbbg5wce6DN1be13Qd21QrEFHrsivLHj6cyElPhXJPEg3/HtqtE2Dd1ApCmc4xD3wZrDG994/cbXf123aFur5N8KFOkXdes48d/3dEuP7nvLXuy/ocJbqdY+UtIYmCWTpqgQJH7av/3Q3+5Ke3QFgqT0ORGhPeMyoL354bRzE5LjntHZyDRqNCGNtll3xWLJrChUbDfC5kaoMfMnjHt657'+
			'I3lh3FqfOOVEbeNTR88sxJXSv00iurhPtGKWUHiOMaqwDqYEFEKmk/Hdxb/Mi/r1v0QzD03A0h5EJMRga02z55ZsDpiakzjuhlmST8P+dWHzUhnoIFk5OAo86yqm9irJ1mLZj30prZd+TXDUroLcIAZc/PVu8cdemAA+7SO63h1mEQiGCwXUoZkJRcC2ZDUgctatX2fbvve/Oyifn5Ic7i01pSKs0omJw5uFfmCzs8u85RtIBV4McnA0uYFXO1GZb9+w4f2FS0fs8Sc7j920fPmvZLqB67zOEcYVnl6uuucA1L7tc5K7FDQs9qdid6Da+1xkn9BBobge6TSDN3Wbry19UT7u3+5Gq0gnKnVa8hL66f3C/rjLOe2OnddRkUUWfsDniAAMDQJawmMxywH5HgzQJKUd5Xy3fsKTy4yWzTNkVoph3P3/JOs156Gf+va8J1'+
			'l5LiqvT0SurVqdd5w4ekMmQKAT2rUB3j8nqgqE26WUoAghmQYJmiJH68vGD11L/1eern5tDXHLTaCkbtbH1u83MJ/buf9gDB++dKVKZ6fT6Q8B+ycQLqreqabTxajYQFlv0G9AIGFykwHSbYj/x7zvslhcs2Ox3Rdi8Re8CkG1ChkE9lVs2VJRXmXuf2tl9781+jDVTGGvB1BJQUFUovF1wJpXp5Tb53OknbjRHJDGaGpmqIRMQ2DfTRhqKC6fXeYAq6QHUynBJFQg7nCPFD1dXdM7veajNbz3XpLiIh0ID+uulghpQSUVokW2B2SxhOgKoAqvUuZytAdgWwe+A2l/kqiISCE10bW0KPlAybauEqV/XSovV7Zk062/JfOgVaulOqKXpq2cPdBwzpM9ktPZcaxDYpDSUoDK4D1XjKNuS/XaOEYTSWRbeJYEECYKq2Cf'+
			'NHa5b+8tTkP72wHaco90eoYocCwpJ3lpemjUhffHbn9A1OWdXNkDKhViXflGuHP1CAfy3FsTusZJZmad7aVYmf9M2i71+acuH0gziFlrK2ouula58e1e/+x8ZdVg3XLSUoS/R6vRA1Ak0wGB0qMACShoRZMyEakXvNMM95OWfWF75Ca35ublDcklqENjVw1z10kb3Epw++eurlg/qE9xh5AIfOqvBWNlVybTUYPgMR5nDEodOmgpJNH//7yQXf2Qz8mDszr82oV9sKg38nUd717g0ZKemds//UL+O8ClR3PyqPRrAE6nKEBE0gayKYGUIQwimsLAyOX5euXbVyz9rdnx362v39CSu2VaTkxtBWGNwgZu15tm/ZwYrRPfulna0pSqoE4nTo0R7dR405rwULUjLMqsYqtFIBHHAZ7p1b1+5eERUT9nltxEGbRZtnMGrj'+
			'I+buzNHCo+J7lVVVXmEJNw23O2zJBqRGgAmAiQBNouZ61NyVXbM6BQQTmOAjIg+YfcTCV1VVvdtX5f0i3Gb/eH+kr/CHsT/oubm5Em1glfrDH4HB9aHExsZar5qcZb13/F0dt/n2DmQyzmSmAZLR2xA+hw86SKGapKx115+TXYPqRzURmGqsPFChsSZVJ4MKiHg1sfg5Veu0Zsbsdw8ueHyxuzir2IXcNpkK4qT4ozH4N4gfFW9LMEVGSJclquLgEdvoCcOjbvrrlZ3LUZbEoAQBjpQgqwAcBDgk2AwQM9hbo/hgJ4GcAlSuQx7ogKg9c3L/u/ezF74qj+wYUUVmoxxeW0X+wvyAc2K0NfyhGdwQLnroIrtFcIR0e+wKa5oXZFY1mEmSIiUTMXTFQm6fjz066T7NJVxeh1reUifzdrSjHe1oRzva0Y52tKMd7WhHO9'+
			'rRjnaEEP8PgOCVVco7BLEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="second";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._second.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._second.onmouseout=function (e) {
			me.elementMouseDown['second']=false;
		}
		me._second.onmousedown=function (e) {
			me.elementMouseDown['second']=true;
		}
		me._second.onmouseup=function (e) {
			me.elementMouseDown['second']=false;
		}
		me._second.ontouchend=function (e) {
			me.elementMouseDown['second']=false;
		}
		me._second.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._arrows.appendChild(me._second);
		el=me._fisrt=document.createElement('div');
		els=me._fisrt__img=document.createElement('img');
		els.className='ggskin ggskin_fisrt';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fisrt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fisrt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fisrt.onmouseout=function (e) {
			me.elementMouseDown['fisrt']=false;
		}
		me._fisrt.onmousedown=function (e) {
			me.elementMouseDown['fisrt']=true;
		}
		me._fisrt.onmouseup=function (e) {
			me.elementMouseDown['fisrt']=false;
		}
		me._fisrt.ontouchend=function (e) {
			me.elementMouseDown['fisrt']=false;
		}
		me._fisrt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._arrows.appendChild(me._fisrt);
		me._image_2.appendChild(me._arrows);
		me._map.appendChild(me._image_2);
		el=me._thirdfloor=document.createElement('div');
		els=me._thirdfloor__img=document.createElement('img');
		els.className='ggskin ggskin_thirdfloor';
		hs=basePath + 'images/thirdfloor.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thirdfloor";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 258px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 460px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thirdfloor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thirdfloor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_node17=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node17.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._marker_node17.onmouseover=function (e) {
			me._marker_titlem22.style[domTransition]='none';
			me._marker_titlem22.style.visibility=(Number(me._marker_titlem22.style.opacity)>0||!me._marker_titlem22.style.opacity)?'inherit':'hidden';
			me._marker_titlem22.ggVisible=true;
		}
		me._marker_node17.onmouseout=function (e) {
			me._marker_titlem22.style[domTransition]='none';
			me._marker_titlem22.style.visibility='hidden';
			me._marker_titlem22.ggVisible=false;
		}
		me._marker_node17.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem22=document.createElement('div');
		els=me._marker_titlem22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0411\u0430\u043b\u043a\u043e\u043d 1";
		el.appendChild(els);
		me._marker_titlem22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem22.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node17.appendChild(me._marker_titlem22);
		me._thirdfloor.appendChild(me._marker_node17);
		el=me._marker_node16=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 226px;';
		hs+='position : absolute;';
		hs+='top : 84px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node16.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node16.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._marker_node16.onmouseover=function (e) {
			me._marker_titlem21.style[domTransition]='none';
			me._marker_titlem21.style.visibility=(Number(me._marker_titlem21.style.opacity)>0||!me._marker_titlem21.style.opacity)?'inherit':'hidden';
			me._marker_titlem21.ggVisible=true;
		}
		me._marker_node16.onmouseout=function (e) {
			me._marker_titlem21.style[domTransition]='none';
			me._marker_titlem21.style.visibility='hidden';
			me._marker_titlem21.ggVisible=false;
		}
		me._marker_node16.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem21=document.createElement('div');
		els=me._marker_titlem21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0411\u0430\u043b\u043a\u043e\u043d 2";
		el.appendChild(els);
		me._marker_titlem21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem21.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node16.appendChild(me._marker_titlem21);
		me._thirdfloor.appendChild(me._marker_node16);
		el=me._marker_node18=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 358px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node18.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node18.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._marker_node18.onmouseover=function (e) {
			me._marker_titlem20.style[domTransition]='none';
			me._marker_titlem20.style.visibility=(Number(me._marker_titlem20.style.opacity)>0||!me._marker_titlem20.style.opacity)?'inherit':'hidden';
			me._marker_titlem20.ggVisible=true;
		}
		me._marker_node18.onmouseout=function (e) {
			me._marker_titlem20.style[domTransition]='none';
			me._marker_titlem20.style.visibility='hidden';
			me._marker_titlem20.ggVisible=false;
		}
		me._marker_node18.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem20=document.createElement('div');
		els=me._marker_titlem20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0417\u0430\u043b 3-07";
		el.appendChild(els);
		me._marker_titlem20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem20.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node18.appendChild(me._marker_titlem20);
		me._thirdfloor.appendChild(me._marker_node18);
		el=me._marker_node19=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node19.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node19.onclick=function (e) {
			player.openNext('{node19}');
		}
		me._marker_node19.onmouseover=function (e) {
			me._marker_titlem19.style[domTransition]='none';
			me._marker_titlem19.style.visibility=(Number(me._marker_titlem19.style.opacity)>0||!me._marker_titlem19.style.opacity)?'inherit':'hidden';
			me._marker_titlem19.ggVisible=true;
		}
		me._marker_node19.onmouseout=function (e) {
			me._marker_titlem19.style[domTransition]='none';
			me._marker_titlem19.style.visibility='hidden';
			me._marker_titlem19.ggVisible=false;
		}
		me._marker_node19.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem19=document.createElement('div');
		els=me._marker_titlem19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 (\u0442\u0438\u043f 3, 1 \u044d\u0442\u0430\u0436)";
		el.appendChild(els);
		me._marker_titlem19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem19.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node19.appendChild(me._marker_titlem19);
		me._thirdfloor.appendChild(me._marker_node19);
		el=me._marker_node20=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node20";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node20.onclick=function (e) {
			player.openNext('{node20}');
		}
		me._marker_node20.onmouseover=function (e) {
			me._marker_titlem18.style[domTransition]='none';
			me._marker_titlem18.style.visibility=(Number(me._marker_titlem18.style.opacity)>0||!me._marker_titlem18.style.opacity)?'inherit':'hidden';
			me._marker_titlem18.ggVisible=true;
		}
		me._marker_node20.onmouseout=function (e) {
			me._marker_titlem18.style[domTransition]='none';
			me._marker_titlem18.style.visibility='hidden';
			me._marker_titlem18.ggVisible=false;
		}
		me._marker_node20.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem18=document.createElement('div');
		els=me._marker_titlem18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 (\u0442\u0438\u043f 3, 2 \u044d\u0442\u0430\u0436)";
		el.appendChild(els);
		me._marker_titlem18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem18.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node20.appendChild(me._marker_titlem18);
		me._thirdfloor.appendChild(me._marker_node20);
		el=me._marker_node23=document.createElement('div');
		el.ggMarkerNodeId='{node23}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node23";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node23.onclick=function (e) {
			player.openNext('{node23}');
		}
		me._marker_node23.onmouseover=function (e) {
			me._marker_titlem17.style[domTransition]='none';
			me._marker_titlem17.style.visibility=(Number(me._marker_titlem17.style.opacity)>0||!me._marker_titlem17.style.opacity)?'inherit':'hidden';
			me._marker_titlem17.ggVisible=true;
		}
		me._marker_node23.onmouseout=function (e) {
			me._marker_titlem17.style[domTransition]='none';
			me._marker_titlem17.style.visibility='hidden';
			me._marker_titlem17.ggVisible=false;
		}
		me._marker_node23.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem17=document.createElement('div');
		els=me._marker_titlem17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u043e\u0440\u0438\u0434\u043e\u0440 (3 \u044d\u0442\u0430\u0436)";
		el.appendChild(els);
		me._marker_titlem17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem17.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node23.appendChild(me._marker_titlem17);
		me._thirdfloor.appendChild(me._marker_node23);
		el=me._marker_node21=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node21.onclick=function (e) {
			player.openNext('{node21}');
		}
		me._marker_node21.onmouseover=function (e) {
			me._marker_titlem16.style[domTransition]='none';
			me._marker_titlem16.style.visibility=(Number(me._marker_titlem16.style.opacity)>0||!me._marker_titlem16.style.opacity)?'inherit':'hidden';
			me._marker_titlem16.ggVisible=true;
		}
		me._marker_node21.onmouseout=function (e) {
			me._marker_titlem16.style[domTransition]='none';
			me._marker_titlem16.style.visibility='hidden';
			me._marker_titlem16.ggVisible=false;
		}
		me._marker_node21.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem16=document.createElement('div');
		els=me._marker_titlem16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 (\u0442\u0438\u043f 2, \u0433\u043e\u0441\u0442\u0438\u043d\u0430\u044f)";
		el.appendChild(els);
		me._marker_titlem16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem16.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node21.appendChild(me._marker_titlem16);
		me._thirdfloor.appendChild(me._marker_node21);
		el=me._marker_node25=document.createElement('div');
		el.ggMarkerNodeId='{node25}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node25";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node25.onclick=function (e) {
			player.openNext('{node25}');
		}
		me._marker_node25.onmouseover=function (e) {
			me._marker_titlem15.style[domTransition]='none';
			me._marker_titlem15.style.visibility=(Number(me._marker_titlem15.style.opacity)>0||!me._marker_titlem15.style.opacity)?'inherit':'hidden';
			me._marker_titlem15.ggVisible=true;
		}
		me._marker_node25.onmouseout=function (e) {
			me._marker_titlem15.style[domTransition]='none';
			me._marker_titlem15.style.visibility='hidden';
			me._marker_titlem15.ggVisible=false;
		}
		me._marker_node25.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem15=document.createElement('div');
		els=me._marker_titlem15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 (\u0442\u0438\u043f 2, \u0441\u043f\u0430\u043b\u044c\u043d\u044f)";
		el.appendChild(els);
		me._marker_titlem15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem15.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node25.appendChild(me._marker_titlem15);
		me._thirdfloor.appendChild(me._marker_node25);
		me._map.appendChild(me._thirdfloor);
		el=me._secondfloor=document.createElement('div');
		els=me._secondfloor__img=document.createElement('img');
		els.className='ggskin ggskin_secondfloor';
		hs=basePath + 'images/secondfloor.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="secondfloor";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 258px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 460px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._secondfloor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._secondfloor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_node11=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node11.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._marker_node11.onmouseover=function (e) {
			me._marker_titlem14.style[domTransition]='none';
			me._marker_titlem14.style.visibility=(Number(me._marker_titlem14.style.opacity)>0||!me._marker_titlem14.style.opacity)?'inherit':'hidden';
			me._marker_titlem14.ggVisible=true;
		}
		me._marker_node11.onmouseout=function (e) {
			me._marker_titlem14.style[domTransition]='none';
			me._marker_titlem14.style.visibility='hidden';
			me._marker_titlem14.ggVisible=false;
		}
		me._marker_node11.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem14=document.createElement('div');
		els=me._marker_titlem14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0442\u0440\u0435\u043d\u0430\u0436\u0451\u0440\u043d\u044b\u0439 \u0437\u0430\u043b";
		el.appendChild(els);
		me._marker_titlem14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem14.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node11.appendChild(me._marker_titlem14);
		me._secondfloor.appendChild(me._marker_node11);
		el=me._marker_node12=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 336px;';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node12.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._marker_node12.onmouseover=function (e) {
			me._marker_titlem13.style[domTransition]='none';
			me._marker_titlem13.style.visibility=(Number(me._marker_titlem13.style.opacity)>0||!me._marker_titlem13.style.opacity)?'inherit':'hidden';
			me._marker_titlem13.ggVisible=true;
		}
		me._marker_node12.onmouseout=function (e) {
			me._marker_titlem13.style[domTransition]='none';
			me._marker_titlem13.style.visibility='hidden';
			me._marker_titlem13.ggVisible=false;
		}
		me._marker_node12.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem13=document.createElement('div');
		els=me._marker_titlem13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041c\u0430\u043b\u044b\u0439 \u0442\u0440\u0435\u043d\u0430\u0436\u0451\u0440\u043d\u044b\u0439 \u0437\u0430\u043b 2";
		el.appendChild(els);
		me._marker_titlem13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem13.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node12.appendChild(me._marker_titlem13);
		me._secondfloor.appendChild(me._marker_node12);
		el=me._marker_node13=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 372px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node13.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._marker_node13.onmouseover=function (e) {
			me._marker_titlem12.style[domTransition]='none';
			me._marker_titlem12.style.visibility=(Number(me._marker_titlem12.style.opacity)>0||!me._marker_titlem12.style.opacity)?'inherit':'hidden';
			me._marker_titlem12.ggVisible=true;
		}
		me._marker_node13.onmouseout=function (e) {
			me._marker_titlem12.style[domTransition]='none';
			me._marker_titlem12.style.visibility='hidden';
			me._marker_titlem12.ggVisible=false;
		}
		me._marker_node13.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem12=document.createElement('div');
		els=me._marker_titlem12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041c\u0430\u043b\u044b\u0439 \u0442\u0440\u0435\u043d\u0430\u0436\u0451\u0440\u043d\u044b\u0439 \u0437\u0430\u043b 1";
		el.appendChild(els);
		me._marker_titlem12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem12.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node13.appendChild(me._marker_titlem12);
		me._secondfloor.appendChild(me._marker_node13);
		el=me._marker_node15=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node15.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._marker_node15.onmouseover=function (e) {
			me._marker_titlem11.style[domTransition]='none';
			me._marker_titlem11.style.visibility=(Number(me._marker_titlem11.style.opacity)>0||!me._marker_titlem11.style.opacity)?'inherit':'hidden';
			me._marker_titlem11.ggVisible=true;
		}
		me._marker_node15.onmouseout=function (e) {
			me._marker_titlem11.style[domTransition]='none';
			me._marker_titlem11.style.visibility='hidden';
			me._marker_titlem11.ggVisible=false;
		}
		me._marker_node15.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem11=document.createElement('div');
		els=me._marker_titlem11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u043e\u0440\u0438\u0434\u043e\u0440 (2 \u044d\u0442\u0430\u0436)";
		el.appendChild(els);
		me._marker_titlem11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem11.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node15.appendChild(me._marker_titlem11);
		me._secondfloor.appendChild(me._marker_node15);
		el=me._marker_node14=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 218px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node14.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._marker_node14.onmouseover=function (e) {
			me._marker_titlem10.style[domTransition]='none';
			me._marker_titlem10.style.visibility=(Number(me._marker_titlem10.style.opacity)>0||!me._marker_titlem10.style.opacity)?'inherit':'hidden';
			me._marker_titlem10.ggVisible=true;
		}
		me._marker_node14.onmouseout=function (e) {
			me._marker_titlem10.style[domTransition]='none';
			me._marker_titlem10.style.visibility='hidden';
			me._marker_titlem10.ggVisible=false;
		}
		me._marker_node14.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem10=document.createElement('div');
		els=me._marker_titlem10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 (\u0442\u0438\u043f 1)";
		el.appendChild(els);
		me._marker_titlem10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem10.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node14.appendChild(me._marker_titlem10);
		me._secondfloor.appendChild(me._marker_node14);
		me._map.appendChild(me._secondfloor);
		el=me._firstfloor=document.createElement('div');
		els=me._firstfloor__img=document.createElement('img');
		els.className='ggskin ggskin_firstfloor';
		hs=basePath + 'images/firstfloor.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="firstfloor";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 258px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 460px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._firstfloor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._firstfloor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_node24=document.createElement('div');
		el.ggMarkerNodeId='{node24}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node24";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 118px;';
		hs+='position : absolute;';
		hs+='top : 210px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node24.onclick=function (e) {
			player.openNext('{node24}');
		}
		me._marker_node24.onmouseover=function (e) {
			me._marker_titlem9.style[domTransition]='none';
			me._marker_titlem9.style.visibility=(Number(me._marker_titlem9.style.opacity)>0||!me._marker_titlem9.style.opacity)?'inherit':'hidden';
			me._marker_titlem9.ggVisible=true;
		}
		me._marker_node24.onmouseout=function (e) {
			me._marker_titlem9.style[domTransition]='none';
			me._marker_titlem9.style.visibility='hidden';
			me._marker_titlem9.ggVisible=false;
		}
		me._marker_node24.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem9=document.createElement('div');
		els=me._marker_titlem9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0423\u043b\u0438\u0446\u0430";
		el.appendChild(els);
		me._marker_titlem9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem9.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node24.appendChild(me._marker_titlem9);
		me._firstfloor.appendChild(me._marker_node24);
		el=me._marker_node2=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node2.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_node2.onmouseover=function (e) {
			me._marker_titlem8.style[domTransition]='none';
			me._marker_titlem8.style.visibility=(Number(me._marker_titlem8.style.opacity)>0||!me._marker_titlem8.style.opacity)?'inherit':'hidden';
			me._marker_titlem8.ggVisible=true;
		}
		me._marker_node2.onmouseout=function (e) {
			me._marker_titlem8.style[domTransition]='none';
			me._marker_titlem8.style.visibility='hidden';
			me._marker_titlem8.ggVisible=false;
		}
		me._marker_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem8=document.createElement('div');
		els=me._marker_titlem8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0412\u0445\u043e\u0434 \u0432 \u0432\u0435\u0441\u0442\u0438\u0431\u044e\u043b\u044c";
		el.appendChild(els);
		me._marker_titlem8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem8.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node2.appendChild(me._marker_titlem8);
		me._firstfloor.appendChild(me._marker_node2);
		el=me._marker_node1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._marker_node1.onmouseover=function (e) {
			me._marker_titlem7.style[domTransition]='none';
			me._marker_titlem7.style.visibility=(Number(me._marker_titlem7.style.opacity)>0||!me._marker_titlem7.style.opacity)?'inherit':'hidden';
			me._marker_titlem7.ggVisible=true;
		}
		me._marker_node1.onmouseout=function (e) {
			me._marker_titlem7.style[domTransition]='none';
			me._marker_titlem7.style.visibility='hidden';
			me._marker_titlem7.ggVisible=false;
		}
		me._marker_node1.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem7=document.createElement('div');
		els=me._marker_titlem7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0412\u0435\u0441\u0442\u0438\u0431\u044e\u043b\u044c";
		el.appendChild(els);
		me._marker_titlem7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem7.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node1.appendChild(me._marker_titlem7);
		me._firstfloor.appendChild(me._marker_node1);
		el=me._marker_node3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 388px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._marker_node3.onmouseover=function (e) {
			me._marker_titlem6.style[domTransition]='none';
			me._marker_titlem6.style.visibility=(Number(me._marker_titlem6.style.opacity)>0||!me._marker_titlem6.style.opacity)?'inherit':'hidden';
			me._marker_titlem6.ggVisible=true;
		}
		me._marker_node3.onmouseout=function (e) {
			me._marker_titlem6.style[domTransition]='none';
			me._marker_titlem6.style.visibility='hidden';
			me._marker_titlem6.ggVisible=false;
		}
		me._marker_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem6=document.createElement('div');
		els=me._marker_titlem6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u043e\u0440\u0438\u0434\u043e\u0440 (1 \u044d\u0442\u0430\u0436)";
		el.appendChild(els);
		me._marker_titlem6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem6.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node3.appendChild(me._marker_titlem6);
		me._firstfloor.appendChild(me._marker_node3);
		el=me._marker_node5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._marker_node5.onmouseover=function (e) {
			me._marker_titlem5.style[domTransition]='none';
			me._marker_titlem5.style.visibility=(Number(me._marker_titlem5.style.opacity)>0||!me._marker_titlem5.style.opacity)?'inherit':'hidden';
			me._marker_titlem5.ggVisible=true;
		}
		me._marker_node5.onmouseout=function (e) {
			me._marker_titlem5.style[domTransition]='none';
			me._marker_titlem5.style.visibility='hidden';
			me._marker_titlem5.ggVisible=false;
		}
		me._marker_node5.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem5=document.createElement('div');
		els=me._marker_titlem5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u0430\u0444\u0435 (\u043c\u0430\u043b\u044b\u0439 \u0437\u0430\u043b)";
		el.appendChild(els);
		me._marker_titlem5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem5.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node5.appendChild(me._marker_titlem5);
		me._firstfloor.appendChild(me._marker_node5);
		el=me._marker_node4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._marker_node4.onmouseover=function (e) {
			me._marker_titlem4.style[domTransition]='none';
			me._marker_titlem4.style.visibility=(Number(me._marker_titlem4.style.opacity)>0||!me._marker_titlem4.style.opacity)?'inherit':'hidden';
			me._marker_titlem4.ggVisible=true;
		}
		me._marker_node4.onmouseout=function (e) {
			me._marker_titlem4.style[domTransition]='none';
			me._marker_titlem4.style.visibility='hidden';
			me._marker_titlem4.ggVisible=false;
		}
		me._marker_node4.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem4=document.createElement('div');
		els=me._marker_titlem4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u0430\u0444\u0435 (\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u043b)";
		el.appendChild(els);
		me._marker_titlem4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem4.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node4.appendChild(me._marker_titlem4);
		me._firstfloor.appendChild(me._marker_node4);
		el=me._marker_node6=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 246px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node6.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._marker_node6.onmouseover=function (e) {
			me._marker_titlem3.style[domTransition]='none';
			me._marker_titlem3.style.visibility=(Number(me._marker_titlem3.style.opacity)>0||!me._marker_titlem3.style.opacity)?'inherit':'hidden';
			me._marker_titlem3.ggVisible=true;
		}
		me._marker_node6.onmouseout=function (e) {
			me._marker_titlem3.style[domTransition]='none';
			me._marker_titlem3.style.visibility='hidden';
			me._marker_titlem3.ggVisible=false;
		}
		me._marker_node6.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem3=document.createElement('div');
		els=me._marker_titlem3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041c\u0430\u0433\u0430\u0437\u0438\u043d";
		el.appendChild(els);
		me._marker_titlem3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem3.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node6.appendChild(me._marker_titlem3);
		me._firstfloor.appendChild(me._marker_node6);
		el=me._marker_node7=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 290px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node7.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._marker_node7.onmouseover=function (e) {
			me._marker_titlem2.style[domTransition]='none';
			me._marker_titlem2.style.visibility=(Number(me._marker_titlem2.style.opacity)>0||!me._marker_titlem2.style.opacity)?'inherit':'hidden';
			me._marker_titlem2.ggVisible=true;
		}
		me._marker_node7.onmouseout=function (e) {
			me._marker_titlem2.style[domTransition]='none';
			me._marker_titlem2.style.visibility='hidden';
			me._marker_titlem2.ggVisible=false;
		}
		me._marker_node7.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem2=document.createElement('div');
		els=me._marker_titlem2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0417\u0430\u043b \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043d\u043d\u0438\u0441\u0430";
		el.appendChild(els);
		me._marker_titlem2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem2.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node7.appendChild(me._marker_titlem2);
		me._firstfloor.appendChild(me._marker_node7);
		el=me._marker_node8=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 330px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node8.onclick=function (e) {
			player.openNext('{node8}');
		}
		me._marker_node8.onmouseover=function (e) {
			me._marker_titlem1.style[domTransition]='none';
			me._marker_titlem1.style.visibility=(Number(me._marker_titlem1.style.opacity)>0||!me._marker_titlem1.style.opacity)?'inherit':'hidden';
			me._marker_titlem1.ggVisible=true;
		}
		me._marker_node8.onmouseout=function (e) {
			me._marker_titlem1.style[domTransition]='none';
			me._marker_titlem1.style.visibility='hidden';
			me._marker_titlem1.ggVisible=false;
		}
		me._marker_node8.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem1=document.createElement('div');
		els=me._marker_titlem1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0417\u0430\u043b \u0444\u0438\u0442\u043d\u0435\u0441\u0430";
		el.appendChild(els);
		me._marker_titlem1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem1.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node8.appendChild(me._marker_titlem1);
		me._firstfloor.appendChild(me._marker_node8);
		el=me._marker_node10=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node10.onclick=function (e) {
			player.openNext('{node10}');
		}
		me._marker_node10.onmouseover=function (e) {
			me._marker_titlem0.style[domTransition]='none';
			me._marker_titlem0.style.visibility=(Number(me._marker_titlem0.style.opacity)>0||!me._marker_titlem0.style.opacity)?'inherit':'hidden';
			me._marker_titlem0.ggVisible=true;
		}
		me._marker_node10.onmouseout=function (e) {
			me._marker_titlem0.style[domTransition]='none';
			me._marker_titlem0.style.visibility='hidden';
			me._marker_titlem0.ggVisible=false;
		}
		me._marker_node10.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem0=document.createElement('div');
		els=me._marker_titlem0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0424\u043e\u0439\u0435 1";
		el.appendChild(els);
		me._marker_titlem0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem0.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node10.appendChild(me._marker_titlem0);
		me._firstfloor.appendChild(me._marker_node10);
		el=me._marker_node9=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 232px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node9.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._marker_node9.onmouseover=function (e) {
			me._marker_titlem.style[domTransition]='none';
			me._marker_titlem.style.visibility=(Number(me._marker_titlem.style.opacity)>0||!me._marker_titlem.style.opacity)?'inherit':'hidden';
			me._marker_titlem.ggVisible=true;
		}
		me._marker_node9.onmouseout=function (e) {
			me._marker_titlem.style[domTransition]='none';
			me._marker_titlem.style.visibility='hidden';
			me._marker_titlem.ggVisible=false;
		}
		me._marker_node9.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_titlem=document.createElement('div');
		els=me._marker_titlem__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 20px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0424\u043e\u0439\u0435 2";
		el.appendChild(els);
		me._marker_titlem.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_titlem.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node9.appendChild(me._marker_titlem);
		me._firstfloor.appendChild(me._marker_node9);
		me._map.appendChild(me._firstfloor);
		me.divSkin.appendChild(me._map);
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._nonactive;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._markertemplate);
		me._markertemplate__active= clonedActiveElement._active;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node17);
		me._marker_node17__normal = clonedNormalElement._nonactive;
		me._marker_node17__normal.style.visibility='inherit';
		me._marker_node17__normal.style.left='0px';
		me._marker_node17__normal.style.top='0px';
		me._marker_node17.ggMarkerNormal=me._marker_node17__normal;
		me._marker_node17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node17);
		me._marker_node17__active= clonedActiveElement._active;
		me._marker_node17__active.style.visibility='hidden';
		me._marker_node17__active.style.left='0px';
		me._marker_node17__active.style.top='0px';
		me._marker_node17.ggMarkerActive=me._marker_node17__active;
		me._marker_node17.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__active,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__active);
		}
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__normal,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__normal);
		}
		for (var i = 0; i < me._marker_node17.childNodes.length; i++) {
			me._marker_node17.ggMarkerInstances.push(me._marker_node17.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node16);
		me._marker_node16__normal = clonedNormalElement._nonactive;
		me._marker_node16__normal.style.visibility='inherit';
		me._marker_node16__normal.style.left='0px';
		me._marker_node16__normal.style.top='0px';
		me._marker_node16.ggMarkerNormal=me._marker_node16__normal;
		me._marker_node16.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node16);
		me._marker_node16__active= clonedActiveElement._active;
		me._marker_node16__active.style.visibility='hidden';
		me._marker_node16__active.style.left='0px';
		me._marker_node16__active.style.top='0px';
		me._marker_node16.ggMarkerActive=me._marker_node16__active;
		me._marker_node16.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node16.firstChild) {
			me._marker_node16.insertBefore(me._marker_node16__active,me._marker_node16.firstChild);
		} else {
			me._marker_node16.appendChild(me._marker_node16__active);
		}
		if (me._marker_node16.firstChild) {
			me._marker_node16.insertBefore(me._marker_node16__normal,me._marker_node16.firstChild);
		} else {
			me._marker_node16.appendChild(me._marker_node16__normal);
		}
		for (var i = 0; i < me._marker_node16.childNodes.length; i++) {
			me._marker_node16.ggMarkerInstances.push(me._marker_node16.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node18);
		me._marker_node18__normal = clonedNormalElement._nonactive;
		me._marker_node18__normal.style.visibility='inherit';
		me._marker_node18__normal.style.left='0px';
		me._marker_node18__normal.style.top='0px';
		me._marker_node18.ggMarkerNormal=me._marker_node18__normal;
		me._marker_node18.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node18);
		me._marker_node18__active= clonedActiveElement._active;
		me._marker_node18__active.style.visibility='hidden';
		me._marker_node18__active.style.left='0px';
		me._marker_node18__active.style.top='0px';
		me._marker_node18.ggMarkerActive=me._marker_node18__active;
		me._marker_node18.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node18.firstChild) {
			me._marker_node18.insertBefore(me._marker_node18__active,me._marker_node18.firstChild);
		} else {
			me._marker_node18.appendChild(me._marker_node18__active);
		}
		if (me._marker_node18.firstChild) {
			me._marker_node18.insertBefore(me._marker_node18__normal,me._marker_node18.firstChild);
		} else {
			me._marker_node18.appendChild(me._marker_node18__normal);
		}
		for (var i = 0; i < me._marker_node18.childNodes.length; i++) {
			me._marker_node18.ggMarkerInstances.push(me._marker_node18.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node19);
		me._marker_node19__normal = clonedNormalElement._nonactive;
		me._marker_node19__normal.style.visibility='inherit';
		me._marker_node19__normal.style.left='0px';
		me._marker_node19__normal.style.top='0px';
		me._marker_node19.ggMarkerNormal=me._marker_node19__normal;
		me._marker_node19.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node19);
		me._marker_node19__active= clonedActiveElement._active;
		me._marker_node19__active.style.visibility='hidden';
		me._marker_node19__active.style.left='0px';
		me._marker_node19__active.style.top='0px';
		me._marker_node19.ggMarkerActive=me._marker_node19__active;
		me._marker_node19.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node19.firstChild) {
			me._marker_node19.insertBefore(me._marker_node19__active,me._marker_node19.firstChild);
		} else {
			me._marker_node19.appendChild(me._marker_node19__active);
		}
		if (me._marker_node19.firstChild) {
			me._marker_node19.insertBefore(me._marker_node19__normal,me._marker_node19.firstChild);
		} else {
			me._marker_node19.appendChild(me._marker_node19__normal);
		}
		for (var i = 0; i < me._marker_node19.childNodes.length; i++) {
			me._marker_node19.ggMarkerInstances.push(me._marker_node19.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node20);
		me._marker_node20__normal = clonedNormalElement._nonactive;
		me._marker_node20__normal.style.visibility='inherit';
		me._marker_node20__normal.style.left='0px';
		me._marker_node20__normal.style.top='0px';
		me._marker_node20.ggMarkerNormal=me._marker_node20__normal;
		me._marker_node20.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node20);
		me._marker_node20__active= clonedActiveElement._active;
		me._marker_node20__active.style.visibility='hidden';
		me._marker_node20__active.style.left='0px';
		me._marker_node20__active.style.top='0px';
		me._marker_node20.ggMarkerActive=me._marker_node20__active;
		me._marker_node20.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node20.firstChild) {
			me._marker_node20.insertBefore(me._marker_node20__active,me._marker_node20.firstChild);
		} else {
			me._marker_node20.appendChild(me._marker_node20__active);
		}
		if (me._marker_node20.firstChild) {
			me._marker_node20.insertBefore(me._marker_node20__normal,me._marker_node20.firstChild);
		} else {
			me._marker_node20.appendChild(me._marker_node20__normal);
		}
		for (var i = 0; i < me._marker_node20.childNodes.length; i++) {
			me._marker_node20.ggMarkerInstances.push(me._marker_node20.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node23);
		me._marker_node23__normal = clonedNormalElement._nonactive;
		me._marker_node23__normal.style.visibility='inherit';
		me._marker_node23__normal.style.left='0px';
		me._marker_node23__normal.style.top='0px';
		me._marker_node23.ggMarkerNormal=me._marker_node23__normal;
		me._marker_node23.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node23);
		me._marker_node23__active= clonedActiveElement._active;
		me._marker_node23__active.style.visibility='hidden';
		me._marker_node23__active.style.left='0px';
		me._marker_node23__active.style.top='0px';
		me._marker_node23.ggMarkerActive=me._marker_node23__active;
		me._marker_node23.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node23.firstChild) {
			me._marker_node23.insertBefore(me._marker_node23__active,me._marker_node23.firstChild);
		} else {
			me._marker_node23.appendChild(me._marker_node23__active);
		}
		if (me._marker_node23.firstChild) {
			me._marker_node23.insertBefore(me._marker_node23__normal,me._marker_node23.firstChild);
		} else {
			me._marker_node23.appendChild(me._marker_node23__normal);
		}
		for (var i = 0; i < me._marker_node23.childNodes.length; i++) {
			me._marker_node23.ggMarkerInstances.push(me._marker_node23.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node21);
		me._marker_node21__normal = clonedNormalElement._nonactive;
		me._marker_node21__normal.style.visibility='inherit';
		me._marker_node21__normal.style.left='0px';
		me._marker_node21__normal.style.top='0px';
		me._marker_node21.ggMarkerNormal=me._marker_node21__normal;
		me._marker_node21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node21);
		me._marker_node21__active= clonedActiveElement._active;
		me._marker_node21__active.style.visibility='hidden';
		me._marker_node21__active.style.left='0px';
		me._marker_node21__active.style.top='0px';
		me._marker_node21.ggMarkerActive=me._marker_node21__active;
		me._marker_node21.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node21.firstChild) {
			me._marker_node21.insertBefore(me._marker_node21__active,me._marker_node21.firstChild);
		} else {
			me._marker_node21.appendChild(me._marker_node21__active);
		}
		if (me._marker_node21.firstChild) {
			me._marker_node21.insertBefore(me._marker_node21__normal,me._marker_node21.firstChild);
		} else {
			me._marker_node21.appendChild(me._marker_node21__normal);
		}
		for (var i = 0; i < me._marker_node21.childNodes.length; i++) {
			me._marker_node21.ggMarkerInstances.push(me._marker_node21.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node25);
		me._marker_node25__normal = clonedNormalElement._nonactive;
		me._marker_node25__normal.style.visibility='inherit';
		me._marker_node25__normal.style.left='0px';
		me._marker_node25__normal.style.top='0px';
		me._marker_node25.ggMarkerNormal=me._marker_node25__normal;
		me._marker_node25.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node25);
		me._marker_node25__active= clonedActiveElement._active;
		me._marker_node25__active.style.visibility='hidden';
		me._marker_node25__active.style.left='0px';
		me._marker_node25__active.style.top='0px';
		me._marker_node25.ggMarkerActive=me._marker_node25__active;
		me._marker_node25.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node25.firstChild) {
			me._marker_node25.insertBefore(me._marker_node25__active,me._marker_node25.firstChild);
		} else {
			me._marker_node25.appendChild(me._marker_node25__active);
		}
		if (me._marker_node25.firstChild) {
			me._marker_node25.insertBefore(me._marker_node25__normal,me._marker_node25.firstChild);
		} else {
			me._marker_node25.appendChild(me._marker_node25__normal);
		}
		for (var i = 0; i < me._marker_node25.childNodes.length; i++) {
			me._marker_node25.ggMarkerInstances.push(me._marker_node25.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node11);
		me._marker_node11__normal = clonedNormalElement._nonactive;
		me._marker_node11__normal.style.visibility='inherit';
		me._marker_node11__normal.style.left='0px';
		me._marker_node11__normal.style.top='0px';
		me._marker_node11.ggMarkerNormal=me._marker_node11__normal;
		me._marker_node11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node11);
		me._marker_node11__active= clonedActiveElement._active;
		me._marker_node11__active.style.visibility='hidden';
		me._marker_node11__active.style.left='0px';
		me._marker_node11__active.style.top='0px';
		me._marker_node11.ggMarkerActive=me._marker_node11__active;
		me._marker_node11.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node11.firstChild) {
			me._marker_node11.insertBefore(me._marker_node11__active,me._marker_node11.firstChild);
		} else {
			me._marker_node11.appendChild(me._marker_node11__active);
		}
		if (me._marker_node11.firstChild) {
			me._marker_node11.insertBefore(me._marker_node11__normal,me._marker_node11.firstChild);
		} else {
			me._marker_node11.appendChild(me._marker_node11__normal);
		}
		for (var i = 0; i < me._marker_node11.childNodes.length; i++) {
			me._marker_node11.ggMarkerInstances.push(me._marker_node11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node12);
		me._marker_node12__normal = clonedNormalElement._nonactive;
		me._marker_node12__normal.style.visibility='inherit';
		me._marker_node12__normal.style.left='0px';
		me._marker_node12__normal.style.top='0px';
		me._marker_node12.ggMarkerNormal=me._marker_node12__normal;
		me._marker_node12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node12);
		me._marker_node12__active= clonedActiveElement._active;
		me._marker_node12__active.style.visibility='hidden';
		me._marker_node12__active.style.left='0px';
		me._marker_node12__active.style.top='0px';
		me._marker_node12.ggMarkerActive=me._marker_node12__active;
		me._marker_node12.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node12.firstChild) {
			me._marker_node12.insertBefore(me._marker_node12__active,me._marker_node12.firstChild);
		} else {
			me._marker_node12.appendChild(me._marker_node12__active);
		}
		if (me._marker_node12.firstChild) {
			me._marker_node12.insertBefore(me._marker_node12__normal,me._marker_node12.firstChild);
		} else {
			me._marker_node12.appendChild(me._marker_node12__normal);
		}
		for (var i = 0; i < me._marker_node12.childNodes.length; i++) {
			me._marker_node12.ggMarkerInstances.push(me._marker_node12.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node13);
		me._marker_node13__normal = clonedNormalElement._nonactive;
		me._marker_node13__normal.style.visibility='inherit';
		me._marker_node13__normal.style.left='0px';
		me._marker_node13__normal.style.top='0px';
		me._marker_node13.ggMarkerNormal=me._marker_node13__normal;
		me._marker_node13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node13);
		me._marker_node13__active= clonedActiveElement._active;
		me._marker_node13__active.style.visibility='hidden';
		me._marker_node13__active.style.left='0px';
		me._marker_node13__active.style.top='0px';
		me._marker_node13.ggMarkerActive=me._marker_node13__active;
		me._marker_node13.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__active,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__active);
		}
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__normal,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__normal);
		}
		for (var i = 0; i < me._marker_node13.childNodes.length; i++) {
			me._marker_node13.ggMarkerInstances.push(me._marker_node13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node15);
		me._marker_node15__normal = clonedNormalElement._nonactive;
		me._marker_node15__normal.style.visibility='inherit';
		me._marker_node15__normal.style.left='0px';
		me._marker_node15__normal.style.top='0px';
		me._marker_node15.ggMarkerNormal=me._marker_node15__normal;
		me._marker_node15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node15);
		me._marker_node15__active= clonedActiveElement._active;
		me._marker_node15__active.style.visibility='hidden';
		me._marker_node15__active.style.left='0px';
		me._marker_node15__active.style.top='0px';
		me._marker_node15.ggMarkerActive=me._marker_node15__active;
		me._marker_node15.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__active,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__active);
		}
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__normal,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__normal);
		}
		for (var i = 0; i < me._marker_node15.childNodes.length; i++) {
			me._marker_node15.ggMarkerInstances.push(me._marker_node15.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node14);
		me._marker_node14__normal = clonedNormalElement._nonactive;
		me._marker_node14__normal.style.visibility='inherit';
		me._marker_node14__normal.style.left='0px';
		me._marker_node14__normal.style.top='0px';
		me._marker_node14.ggMarkerNormal=me._marker_node14__normal;
		me._marker_node14.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node14);
		me._marker_node14__active= clonedActiveElement._active;
		me._marker_node14__active.style.visibility='hidden';
		me._marker_node14__active.style.left='0px';
		me._marker_node14__active.style.top='0px';
		me._marker_node14.ggMarkerActive=me._marker_node14__active;
		me._marker_node14.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node14.firstChild) {
			me._marker_node14.insertBefore(me._marker_node14__active,me._marker_node14.firstChild);
		} else {
			me._marker_node14.appendChild(me._marker_node14__active);
		}
		if (me._marker_node14.firstChild) {
			me._marker_node14.insertBefore(me._marker_node14__normal,me._marker_node14.firstChild);
		} else {
			me._marker_node14.appendChild(me._marker_node14__normal);
		}
		for (var i = 0; i < me._marker_node14.childNodes.length; i++) {
			me._marker_node14.ggMarkerInstances.push(me._marker_node14.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node24);
		me._marker_node24__normal = clonedNormalElement._nonactive;
		me._marker_node24__normal.style.visibility='inherit';
		me._marker_node24__normal.style.left='0px';
		me._marker_node24__normal.style.top='0px';
		me._marker_node24.ggMarkerNormal=me._marker_node24__normal;
		me._marker_node24.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node24);
		me._marker_node24__active= clonedActiveElement._active;
		me._marker_node24__active.style.visibility='hidden';
		me._marker_node24__active.style.left='0px';
		me._marker_node24__active.style.top='0px';
		me._marker_node24.ggMarkerActive=me._marker_node24__active;
		me._marker_node24.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node24.firstChild) {
			me._marker_node24.insertBefore(me._marker_node24__active,me._marker_node24.firstChild);
		} else {
			me._marker_node24.appendChild(me._marker_node24__active);
		}
		if (me._marker_node24.firstChild) {
			me._marker_node24.insertBefore(me._marker_node24__normal,me._marker_node24.firstChild);
		} else {
			me._marker_node24.appendChild(me._marker_node24__normal);
		}
		for (var i = 0; i < me._marker_node24.childNodes.length; i++) {
			me._marker_node24.ggMarkerInstances.push(me._marker_node24.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node2);
		me._marker_node2__normal = clonedNormalElement._nonactive;
		me._marker_node2__normal.style.visibility='inherit';
		me._marker_node2__normal.style.left='0px';
		me._marker_node2__normal.style.top='0px';
		me._marker_node2.ggMarkerNormal=me._marker_node2__normal;
		me._marker_node2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node2);
		me._marker_node2__active= clonedActiveElement._active;
		me._marker_node2__active.style.visibility='hidden';
		me._marker_node2__active.style.left='0px';
		me._marker_node2__active.style.top='0px';
		me._marker_node2.ggMarkerActive=me._marker_node2__active;
		me._marker_node2.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__active,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__active);
		}
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__normal,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__normal);
		}
		for (var i = 0; i < me._marker_node2.childNodes.length; i++) {
			me._marker_node2.ggMarkerInstances.push(me._marker_node2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node1);
		me._marker_node1__normal = clonedNormalElement._nonactive;
		me._marker_node1__normal.style.visibility='inherit';
		me._marker_node1__normal.style.left='0px';
		me._marker_node1__normal.style.top='0px';
		me._marker_node1.ggMarkerNormal=me._marker_node1__normal;
		me._marker_node1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node1);
		me._marker_node1__active= clonedActiveElement._active;
		me._marker_node1__active.style.visibility='hidden';
		me._marker_node1__active.style.left='0px';
		me._marker_node1__active.style.top='0px';
		me._marker_node1.ggMarkerActive=me._marker_node1__active;
		me._marker_node1.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node1.firstChild) {
			me._marker_node1.insertBefore(me._marker_node1__active,me._marker_node1.firstChild);
		} else {
			me._marker_node1.appendChild(me._marker_node1__active);
		}
		if (me._marker_node1.firstChild) {
			me._marker_node1.insertBefore(me._marker_node1__normal,me._marker_node1.firstChild);
		} else {
			me._marker_node1.appendChild(me._marker_node1__normal);
		}
		for (var i = 0; i < me._marker_node1.childNodes.length; i++) {
			me._marker_node1.ggMarkerInstances.push(me._marker_node1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node3);
		me._marker_node3__normal = clonedNormalElement._nonactive;
		me._marker_node3__normal.style.visibility='inherit';
		me._marker_node3__normal.style.left='0px';
		me._marker_node3__normal.style.top='0px';
		me._marker_node3.ggMarkerNormal=me._marker_node3__normal;
		me._marker_node3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node3);
		me._marker_node3__active= clonedActiveElement._active;
		me._marker_node3__active.style.visibility='hidden';
		me._marker_node3__active.style.left='0px';
		me._marker_node3__active.style.top='0px';
		me._marker_node3.ggMarkerActive=me._marker_node3__active;
		me._marker_node3.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__active,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__active);
		}
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__normal,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__normal);
		}
		for (var i = 0; i < me._marker_node3.childNodes.length; i++) {
			me._marker_node3.ggMarkerInstances.push(me._marker_node3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node5);
		me._marker_node5__normal = clonedNormalElement._nonactive;
		me._marker_node5__normal.style.visibility='inherit';
		me._marker_node5__normal.style.left='0px';
		me._marker_node5__normal.style.top='0px';
		me._marker_node5.ggMarkerNormal=me._marker_node5__normal;
		me._marker_node5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node5);
		me._marker_node5__active= clonedActiveElement._active;
		me._marker_node5__active.style.visibility='hidden';
		me._marker_node5__active.style.left='0px';
		me._marker_node5__active.style.top='0px';
		me._marker_node5.ggMarkerActive=me._marker_node5__active;
		me._marker_node5.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__active,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__active);
		}
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__normal,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__normal);
		}
		for (var i = 0; i < me._marker_node5.childNodes.length; i++) {
			me._marker_node5.ggMarkerInstances.push(me._marker_node5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node4);
		me._marker_node4__normal = clonedNormalElement._nonactive;
		me._marker_node4__normal.style.visibility='inherit';
		me._marker_node4__normal.style.left='0px';
		me._marker_node4__normal.style.top='0px';
		me._marker_node4.ggMarkerNormal=me._marker_node4__normal;
		me._marker_node4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node4);
		me._marker_node4__active= clonedActiveElement._active;
		me._marker_node4__active.style.visibility='hidden';
		me._marker_node4__active.style.left='0px';
		me._marker_node4__active.style.top='0px';
		me._marker_node4.ggMarkerActive=me._marker_node4__active;
		me._marker_node4.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__active,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__active);
		}
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__normal,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__normal);
		}
		for (var i = 0; i < me._marker_node4.childNodes.length; i++) {
			me._marker_node4.ggMarkerInstances.push(me._marker_node4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node6);
		me._marker_node6__normal = clonedNormalElement._nonactive;
		me._marker_node6__normal.style.visibility='inherit';
		me._marker_node6__normal.style.left='0px';
		me._marker_node6__normal.style.top='0px';
		me._marker_node6.ggMarkerNormal=me._marker_node6__normal;
		me._marker_node6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node6);
		me._marker_node6__active= clonedActiveElement._active;
		me._marker_node6__active.style.visibility='hidden';
		me._marker_node6__active.style.left='0px';
		me._marker_node6__active.style.top='0px';
		me._marker_node6.ggMarkerActive=me._marker_node6__active;
		me._marker_node6.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__active,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__active);
		}
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__normal,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__normal);
		}
		for (var i = 0; i < me._marker_node6.childNodes.length; i++) {
			me._marker_node6.ggMarkerInstances.push(me._marker_node6.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node7);
		me._marker_node7__normal = clonedNormalElement._nonactive;
		me._marker_node7__normal.style.visibility='inherit';
		me._marker_node7__normal.style.left='0px';
		me._marker_node7__normal.style.top='0px';
		me._marker_node7.ggMarkerNormal=me._marker_node7__normal;
		me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node7);
		me._marker_node7__active= clonedActiveElement._active;
		me._marker_node7__active.style.visibility='hidden';
		me._marker_node7__active.style.left='0px';
		me._marker_node7__active.style.top='0px';
		me._marker_node7.ggMarkerActive=me._marker_node7__active;
		me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__active,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__active);
		}
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__normal,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__normal);
		}
		for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
			me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node8);
		me._marker_node8__normal = clonedNormalElement._nonactive;
		me._marker_node8__normal.style.visibility='inherit';
		me._marker_node8__normal.style.left='0px';
		me._marker_node8__normal.style.top='0px';
		me._marker_node8.ggMarkerNormal=me._marker_node8__normal;
		me._marker_node8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node8);
		me._marker_node8__active= clonedActiveElement._active;
		me._marker_node8__active.style.visibility='hidden';
		me._marker_node8__active.style.left='0px';
		me._marker_node8__active.style.top='0px';
		me._marker_node8.ggMarkerActive=me._marker_node8__active;
		me._marker_node8.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__active,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__active);
		}
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__normal,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__normal);
		}
		for (var i = 0; i < me._marker_node8.childNodes.length; i++) {
			me._marker_node8.ggMarkerInstances.push(me._marker_node8.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node10);
		me._marker_node10__normal = clonedNormalElement._nonactive;
		me._marker_node10__normal.style.visibility='inherit';
		me._marker_node10__normal.style.left='0px';
		me._marker_node10__normal.style.top='0px';
		me._marker_node10.ggMarkerNormal=me._marker_node10__normal;
		me._marker_node10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node10);
		me._marker_node10__active= clonedActiveElement._active;
		me._marker_node10__active.style.visibility='hidden';
		me._marker_node10__active.style.left='0px';
		me._marker_node10__active.style.top='0px';
		me._marker_node10.ggMarkerActive=me._marker_node10__active;
		me._marker_node10.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node10.firstChild) {
			me._marker_node10.insertBefore(me._marker_node10__active,me._marker_node10.firstChild);
		} else {
			me._marker_node10.appendChild(me._marker_node10__active);
		}
		if (me._marker_node10.firstChild) {
			me._marker_node10.insertBefore(me._marker_node10__normal,me._marker_node10.firstChild);
		} else {
			me._marker_node10.appendChild(me._marker_node10__normal);
		}
		for (var i = 0; i < me._marker_node10.childNodes.length; i++) {
			me._marker_node10.ggMarkerInstances.push(me._marker_node10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_nonactive_Class(this,me._marker_node9);
		me._marker_node9__normal = clonedNormalElement._nonactive;
		me._marker_node9__normal.style.visibility='inherit';
		me._marker_node9__normal.style.left='0px';
		me._marker_node9__normal.style.top='0px';
		me._marker_node9.ggMarkerNormal=me._marker_node9__normal;
		me._marker_node9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_active_Class(this,me._marker_node9);
		me._marker_node9__active= clonedActiveElement._active;
		me._marker_node9__active.style.visibility='hidden';
		me._marker_node9__active.style.left='0px';
		me._marker_node9__active.style.top='0px';
		me._marker_node9.ggMarkerActive=me._marker_node9__active;
		me._marker_node9.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__active,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__active);
		}
		if (me._marker_node9.firstChild) {
			me._marker_node9.insertBefore(me._marker_node9__normal,me._marker_node9.firstChild);
		} else {
			me._marker_node9.appendChild(me._marker_node9__normal);
		}
		for (var i = 0; i < me._marker_node9.childNodes.length; i++) {
			me._marker_node9.ggMarkerInstances.push(me._marker_node9.childNodes[i]);
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('fullscreenenter', function() {
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		});
		player.addListener('fullscreenexit', function() {
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['pan_left']) {
			player.changePanLog(3,true);
		}
		if (me.elementMouseDown['pan_right']) {
			player.changePanLog(-3,true);
		}
		if (me.elementMouseDown['tilt_down']) {
			player.changeTiltLog(-3,true);
		}
		if (me.elementMouseDown['tilt_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['third']) {
			me._firstfloor.style[domTransition]='none';
			me._firstfloor.style.visibility='hidden';
			me._firstfloor.ggVisible=false;
			me._secondfloor.style[domTransition]='none';
			me._secondfloor.style.visibility='hidden';
			me._secondfloor.ggVisible=false;
			me._thirdfloor.style[domTransition]='none';
			me._thirdfloor.style.visibility=(Number(me._thirdfloor.style.opacity)>0||!me._thirdfloor.style.opacity)?'inherit':'hidden';
			me._thirdfloor.ggVisible=true;
		}
		if (me.elementMouseDown['second']) {
			me._firstfloor.style[domTransition]='none';
			me._firstfloor.style.visibility='hidden';
			me._firstfloor.ggVisible=false;
			me._secondfloor.style[domTransition]='none';
			me._secondfloor.style.visibility=(Number(me._secondfloor.style.opacity)>0||!me._secondfloor.style.opacity)?'inherit':'hidden';
			me._secondfloor.ggVisible=true;
			me._thirdfloor.style[domTransition]='none';
			me._thirdfloor.style.visibility='hidden';
			me._thirdfloor.ggVisible=false;
		}
		if (me.elementMouseDown['fisrt']) {
			me._firstfloor.style[domTransition]='none';
			me._firstfloor.style.visibility=(Number(me._firstfloor.style.opacity)>0||!me._firstfloor.style.opacity)?'inherit':'hidden';
			me._firstfloor.ggVisible=true;
			me._secondfloor.style[domTransition]='none';
			me._secondfloor.style.visibility='hidden';
			me._secondfloor.ggVisible=false;
			me._thirdfloor.style[domTransition]='none';
			me._thirdfloor.style.visibility='hidden';
			me._thirdfloor.ggVisible=false;
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_arrow_left(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_arrow_left=document.createElement('div');
		el.ggId="Hotspot arrow left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 212px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_arrow_left.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_arrow_left.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_left.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_left.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titlel.style[domTransition]='none';
			me._marker_titlel.style.visibility=(Number(me._marker_titlel.style.opacity)>0||!me._marker_titlel.style.opacity)?'inherit':'hidden';
			me._marker_titlel.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_left.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titlel.style[domTransition]='none';
			me._marker_titlel.style.visibility='hidden';
			me._marker_titlel.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_arrow_left_customimage=document.createElement('div');
		els=me._hotspot_arrow_left_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_arrow_left_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot arrow left_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_arrow_left_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_arrow_left_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titlel=document.createElement('div');
		els=me._marker_titlel__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titlel";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titlel.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titlel.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titlel.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titlel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titlel.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_arrow_left_customimage.appendChild(me._marker_titlel);
		me._hotspot_arrow_left.appendChild(me._hotspot_arrow_left_customimage);
		me.__div = me._hotspot_arrow_left;
	};
	function SkinHotspotClass_hotspot_dot(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_dot=document.createElement('div');
		el.ggId="Hotspot dot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 446px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_dot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_dot.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_dot.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_dot.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titled.style[domTransition]='none';
			me._marker_titled.style.visibility=(Number(me._marker_titled.style.opacity)>0||!me._marker_titled.style.opacity)?'inherit':'hidden';
			me._marker_titled.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_dot.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titled.style[domTransition]='none';
			me._marker_titled.style.visibility='hidden';
			me._marker_titled.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_dot.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_dot_customimage=document.createElement('div');
		els=me._hotspot_dot_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_dot_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot dot_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_dot_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_dot_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titled=document.createElement('div');
		els=me._marker_titled__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titled";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titled.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titled.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titled.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titled.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_dot_customimage.appendChild(me._marker_titled);
		me._hotspot_dot.appendChild(me._hotspot_dot_customimage);
		me.__div = me._hotspot_dot;
	};
	function SkinHotspotClass_hotspot_arrow_right(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_arrow_right=document.createElement('div');
		el.ggId="Hotspot arrow right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 452px;';
		hs+='position : absolute;';
		hs+='top : 212px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_arrow_right.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_arrow_right.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_right.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_right.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titler.style[domTransition]='none';
			me._marker_titler.style.visibility=(Number(me._marker_titler.style.opacity)>0||!me._marker_titler.style.opacity)?'inherit':'hidden';
			me._marker_titler.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_right.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titler.style[domTransition]='none';
			me._marker_titler.style.visibility='hidden';
			me._marker_titler.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_arrow_right.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_arrow_right_customimage=document.createElement('div');
		els=me._hotspot_arrow_right_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_arrow_right_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot arrow right_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_arrow_right_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_arrow_right_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titler=document.createElement('div');
		els=me._marker_titler__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titler";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titler.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titler.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titler.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titler.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_arrow_right_customimage.appendChild(me._marker_titler);
		me._hotspot_arrow_right.appendChild(me._hotspot_arrow_right_customimage);
		me.__div = me._hotspot_arrow_right;
	};
	function SkinHotspotClass_hotspot_up(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_up=document.createElement('div');
		el.ggId="Hotspot up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 280px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_up.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_up.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_up.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_up.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titleu.style[domTransition]='none';
			me._marker_titleu.style.visibility=(Number(me._marker_titleu.style.opacity)>0||!me._marker_titleu.style.opacity)?'inherit':'hidden';
			me._marker_titleu.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_up.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titleu.style[domTransition]='none';
			me._marker_titleu.style.visibility='hidden';
			me._marker_titleu.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_up.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_up_customimage=document.createElement('div');
		els=me._hotspot_up_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_up_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot up_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_up_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_up_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titleu=document.createElement('div');
		els=me._marker_titleu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titleu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titleu.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titleu.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titleu.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titleu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titleu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_up_customimage.appendChild(me._marker_titleu);
		me._hotspot_up.appendChild(me._hotspot_up_customimage);
		me.__div = me._hotspot_up;
	};
	function SkinHotspotClass_hotspot_down(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_down=document.createElement('div');
		el.ggId="Hotspot down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_down.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_down.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_down.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_down.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titledo.style[domTransition]='none';
			me._marker_titledo.style.visibility=(Number(me._marker_titledo.style.opacity)>0||!me._marker_titledo.style.opacity)?'inherit':'hidden';
			me._marker_titledo.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_down.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titledo.style[domTransition]='none';
			me._marker_titledo.style.visibility='hidden';
			me._marker_titledo.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_down.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_down_customimage=document.createElement('div');
		els=me._hotspot_down_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_down_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot down_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_down_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_down_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titledo=document.createElement('div');
		els=me._marker_titledo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titledo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titledo.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titledo.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titledo.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titledo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titledo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_down_customimage.appendChild(me._marker_titledo);
		me._hotspot_down.appendChild(me._hotspot_down_customimage);
		me.__div = me._hotspot_down;
	};
	function SkinHotspotClass_hotspot_upright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_upright=document.createElement('div');
		el.ggId="Hotspot upright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_upright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_upright.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_upright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_upright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titleur.style[domTransition]='none';
			me._marker_titleur.style.visibility=(Number(me._marker_titleur.style.opacity)>0||!me._marker_titleur.style.opacity)?'inherit':'hidden';
			me._marker_titleur.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_upright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titleur.style[domTransition]='none';
			me._marker_titleur.style.visibility='hidden';
			me._marker_titleur.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_upright.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_upright_customimage=document.createElement('div');
		els=me._hotspot_upright_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_upright_customimage';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAVwElEQVR4nO2dX4xc113Hv79z750/Ozuz4/xr7aR0i4RDoVXcuiBVILJ54AGpAVtqEgxCtR9qxw8liZI3Hrx+QOKBEFeQbOIK2ZGAVe2AUxJA4oFsCkKo1NSBoqqmqBva2kkc27szO7M7e+85Xx52x1mnO/fe2b33zp3Z83la+56598zMZ875nf+AxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgslrSQQWdgVJjlzORm/1/CysJBeWoh4+yMHFbUGFzgc3X4lUlf6X2g7KOwrgQPAFIHMBnzNvMAFyCyQI23hGYeIpdcd+WSFTkaK+omXOBzdV+XDoCyTxQfBGRfuk/kJaGaNzDf8Ixz6WDh6KV0nz'+
			'd8WFHXOe/PTBlgSjnyIIipAWdnnuSbQpx9xDs+N+C85IIdLeoFPldfDUpPKiVfQvwqPGustNihop73Z6bgyIkclJz9Mk/ypOdg7qAcnx90ZrJkx4h6gc/VA794mI56QvJbesZlnuSbnoPpnSLsjhD1/OpLT8IxJ9Zb6SMFyZd3grAjLep5f2aKSs5kUoKKXNn0/8k9qT8bXIBSpx6RYyfTf9ZgGElRZzkz6VLOJByDNkFepuCyAFcAc9UoXDYwTQdOM+rFBPeIlt0irBLOXiH3QmEvKEmKPE/y5KPu8bMJ3jMXjJyoX/dnppWSEwncqknBnJCXjTJvCnqUmNuEmnuUYC/FeVDA/UmIO4rhwMiIem71+X3iqjPgtjrnmwRfBzkHBxcTy1wfKHAvjdoP8GFA7d3GrUaqdB0JUbfdWCIvEjw9KDl7ocC9hs6h7ZS0a6Vr'+
			'6cmDcmSoh2mHWtT1oc5TIvKlLby8KcCsr/zZODHmINHQVWXUlBL15S0KO+8qPjTMocDQijrLmUnHyBtbaNEPjaCbQcOHtyYsFwzVkcfcY6+mk7N0GUpRz60+vw+Oc6FfSYWc9Z3g9DAK+mG2LKyS6WHsxho6Uc8FM4dF8Fxf8WhOY9DtQs09opwvC/FwXy8cQlmHStQ1SeVMHy9pAjxNxdnUMpUHNPaLkhN9la5KTj0ix55KMVeJMjSi9ispgcukfkacdPo/84aGrjrGPSqQQ3FfQ+Dso87jR9LMV1IMhaj9SjpKsWi/iJFDAjlKoBrrBUNSsuZe1FeCFw5Q1IX4r+CzI1/VR0DNPUqpF2OHAkMQs+Za1FnOTLoG34nZcGqK0scM5HLqGRsCqLlHxPljAeKNbuVc1tyK2lc/qcgVY4LHd0o8GhcNXXW1dwISb3KOoR'+
			'zMaz+rGnQGemEl3T4OnCYd8wzI1+OkV2LOXOix7HvQ5FLUV/wXT1lJk4MOp+PJKvXAyBsXeCZ3E8xzJ+q5YOYwFZ6ITGgl7Yv4smIywGoS0yQTJVcxah9xadNQ/66VtD/W+lq9l+I0sETJ4S/KsZezyFccclWiuoy3bIQ0O6YjP0kcOE1SPwNh5GdHY07lKV7NjajngpnDcZaOCDByY/ZZIo5cESPPCBAxGCL1gH0NV6dKLkSd5cwkJHr5iAheM8qcziJPo4xxzGWC0Z8jMXXen5lKP0fR5EJUR2M6ssoXueKL/yfZ5Gj0oeIsEWMET8mZPPQCDFzUWc5Mxpmhb0zw+E4cu08TrYLTMeLVyQCr0b0wKTNwUV0dHQcJcNo2npLHgdOkYfSwqTFPDrpUdQb58PP+zBSUTIcmErlCZZ7JJkc/Tae9qiTQDqDRvNEZa19b'+
			'KhcrJb+1uFJovtceN4ZwXfL9q42q39DeWNnxW412aend1lih6GgdUG68u1g1mqpY9oLFa0tjrZvLpVK5GLRb2m1dWxzXAVAoe7pxrV3pNPyCV6JuXl8uLr3frLhKjFEFaVy9WfVbdItVz++0V5XrOUzkDSpcBVEVyKd7J5KSEbNy/uTrbybyzC0w0H7U88GLb0SNQxvwpCi+llGWbuN7b/zPfb/wS/d/rjpenRpj4d6mtFYDak5ItagR6EWzFIyriluE5yyy1VEiqLLqrUg7WEYnmMB4AVCyyMZqUQpqDGVviW0/EK1rHC8ZMXoRS34VZbfAgtuUpY4mpY6JQgfLuo1lv4pK0RHXXURzxYWr7sKu6//ynW/958c+vfsv4MpyEu9TQ1c94/1t+NRALriq9IlBrWYdmKjrpekboYnIOTocSGn6/X/+4e7JT933lTvru3'+
			'5lybQqIgKa9UJs/VOjIUQJbl2T7kXeugbI+t+4lY4ApNc90L3ITa8pR1Gg5B6pfvNHwfU/cBOSFUYdFeBoaJoBzrAaWIwqIpEBuoEZSCtf+1o+8/lPf/bO+q5fbrFdkXWrRMktcUQEylG47ZoIRHDbNRFAOXJbOhV2D/XT99h4jaQYar7H5q9d+e6V32s3VpIJ35SJblgNMFYdiKiznJmk4EBYGhG8NqgGVOBrWWgtfLYZLA28W6YHYqj5qw98/oGxWkkndVND87WIx9YH1QMwEFEdjemoNNroiA8tHbSvxfVc9dHaXT+jHAUymTZL0tBQbsj1XY2r7UpS9xQlr0WWqjShBUxaDKbqF3kw9Dp5cbDdUdRGeKNb7eYRAvAZ0F9ddhO9LyV8hhVl3yBGqzIX9ZXghQNRo1B0YgzvpYTjOXQ8h+8sL1zUvl5ryOSvVKVS'+
			'ggnUirV7JpaSvLFW/mzUPABCMi9VMxfVRL3JtQ1xBz7ppFIuXLijUP87GkKp20IAkgQICIQkN73W/ZskBMJb1zamA7rX+kVIQosOVv1kv0MHTlMjfN6qKG5lr69tkWi1EQcR/FZoAprZPMyS1fD9Jpp/9M7/Xru27/5f/Nz7zvW7KxhzBYKGaZmCuKqMElZUx/gMMI6yggibpmVKqugU6KEtbW1AVZVx+AjQYpvjMqYcKCyYpcAVJb4JfAD39htm0BCLaml15WZrrFKbWEzyvQs5BwnbH0Dq5/2ZqSxPaclU1FeCFw4wYkWpoXlT8mAqgAB6+aP33/Vnbzfni4vXOvXKHV5bOV6wfKNZc7yyX9rltTrtoLy6tFyq3lFr6MBIp7FSdUreSqVWWm6+36y6RaBRbrWCTsdbbuhK+Y6l1ljR7Vz7SWP83sm7FYHfUEqOY+'+
			'27iP3GRQnGMOYWq4WVxN+4g4vUvCgi+3slWa/+5xJ/dg8yFdVADoR+EwNvRG1OsVru3FMtv9v9d7l6561O9mLZ6+DO8q20Y7sKre7f9Y/VOrcuVAvL1bvQ6P5zz8frq55bPKj1yhEAXp9ZIgApSdGpVQurps8Xx0LkIoCeoq5X/0+m8ejNyDZGjWrtS3a/0EFifKqKU3tslatfEZF4O5rcjoDAIhZXb1xfTqx7aiOkjlhfJfUsVwBkJuosZyajWvuizMAbUWljfKoJZ/zRFlaOkdyKpLcTJJCpTRBHroC8GpZGGwlvbyRIZqJ6muF764tcGfVdTm6TFJGShvUGEALUWCvecV+tFZJuW5joGi7lw4w/IDNRDdVU2HUBR7o07VNSAAhC+m8FADqyEizdbBQTy+SHUMD3w64bZHdEZ2aiiuCBsOua/I+s8pI1/UpKoEHg'+
			'BQA/QY+SlSTaXAmWG53URA1UEDr/VIDJrCapZNeYkvCq31Em9Nc7rPQrqSjVKKPwfMGof/CU27PLSkShJhWvtGusnXim13HgNKPi1CBYyaT6z0TUc6vP74vakW8U49O+JRVpVEzx9JJu/c2Pf3TNBCZQvat/QtFV5XJys6d65Cq0ABEloTVlUmQiqogKlZSAlVSkUWHp9I3O4nnHc1ipl1fqzoQS6THEaoBFNDs3322k0j116zESXqIag0+k+fwu2Yga8asTRu/cMUxsR1Kv7GoAoAcVMAB6jVYpwBNHFYpeSh1Utx4THpI5+Hiaz9+Qj/TRhrvCrlNGp9pPQlIA6Ly3Um1jWfeo+gkAVVS9ibvHkx9C3figiBhVIJNpPr9LJqI6SkJ/dQKOxHr9pCQFgEKt0hqTktOj6hcAaGPJv3m1Ud7kemIQ4aKSHJ1WPxk+Iq'+
			'UVQj+MYSBJSQFgrI6Oy95TAEiig0Cbjp/qfI2ouRdbODlxSwx8AwoAUENeoiYtKQAsvtOqNdkyJDeLUalEYQLjxYl764lOnN4KWfSl5kLUYSYNSQHAU64RUb2+H+lOyl4N/PS/w4g4FVgZDVEpEUtPIuKgvJKWpADgVL1WVcbYq3uKBBbRXG1eb41tNf/DhC1Rt0iakgJA0DalFayA7DEypYAySk6l4q1uJf/DhhV1C6QtKQD4rU65w1X2GuoHgLIU3eJ4ubNZglHDitonWUgKAJV7Ss1xqfQamVqbOM2loJnSxOm8kc3IFBi6sZZAdmeRj+2SlaQA4FJp2bTBvxHCz6IxlQOyWTNFWcjJer0tk6WkANC40a6VxluapGyyQpUQyITUCu2PLKffPSXhBclBOT6fdhYympSC+dDrOS9Rs5YUALySt+rC67UBmgDAKjp6'+
			'ZalV2Mr946Kht79cJgHyUW2YmEd2D4BBSAoAhVqhXUYRvbuniCW0/aWbfmmrz4iDp73QQoQIL4SSIqtJKW+HXScQ77jujBmUpACw2tBjbSyzx8gURATjrBTG6qVk9kftgYEJfd9RtWVS5KPqJ3JX9Q9SUgDwV1YKmuG3KYiniuV0p/mJSOgpfwQy2YE6m6rfmEsRKe7PJB8xGbSkAFCplZrjMiY9J06vjUx1Fq430504HVHbUfOtNJ/fJRNRW97YfGgCkd15CdrzICkA+AJl1hzdvL9EAIdKPHipbJRy6zGMODdVVFQhlAiZiHpEjiwgoi/VgRN5kGza5EVSAGjfaFXabPdaMr02cVoqhdpHKqkt7gMAFVH1K5oRqvoBCGUu9LoJ/0DSJk+SAsDE7trCXXL3e2rzCVRrE6e5fHV5OaE9/DdBabU3/KQUIKsd/TLcgA'+
			'KhLX+w94ZcaZM3SYG1zde+8/3/+ja1AYjuHqy3iteqU2k12q1vprkKlcKIal8yqfaBLEtU8NXQ6yFbHKZJHiXtct/99/z5uDP+90brtaOABGK0QUWVF9+/eeNfv/ety/+mPEkvRqVMhV7WzOyAtMy2nVxyS5fGTe+JPutVzH5kuNt0niUFAA2uLOnGH1IX/rtWqOx3IbveaV/7P1PmW/Pf/cm/f/Khn0t1Hq8I9odugCXh4VyiecnqQUD0SX0EZ6H4bBZ5ybukH0ZDi/bpmkaHXq2knaSOmOz9wP0i6qWwJK7iJ7IY5weyHkJleFUhzGbTrWGTFADgAw4kKN1ZCVKXFAAhD4cmELmUlaRA9mP9c6FX12bppBqrDqWk+OC0lqyepyK+hyzjUyBjUde6MsL7U2HCA/jtMKySZo0YmYqa2geqs9nkZo3MZ0/RyMth1xXk'+
			'C2mMUhmfquZUH7OSxoDyhYgU848WjmbWNQUMQNSobioCVde4UR9U3+zyar/ZxvJRK2k41NwTdTQ9lJzNJDMbH5n1Ax/xjs+BEbEq5XeSfGbzZufnG7r9+3H2zN/Jkq6hwo9CB+DChNaKaTCQidMiCC1VIUikUaV9LdrXMlEof9Z1VG1tSVxYvna2pNTcoySi2hfMZdna7zIQUZuq+HJUo0q0RP6yo+i2lO8t1+/QNAg7aG2nSwoAIk5kyCWSfbUPDEjUI3JkAQZfDU0kst8k1APwrR/84Aa1gek9W37HS0rNPQJEFQ7zX5RjmVf7wADXTAUuzkalcShPJ9EDcO/P3vmPdXfi0vpiTm6c4CFKNcZY/tpOlnSN6NhUlExnkJFNGZioh+T4vCBCVsFuz3ghh8fG48Z7i823r/74r+uqdomkKKXgKiUOnWYVY3/a0M2v72'+
			'RJY8WmAyxNgQGcLr0RX/Gka+RwRLJD1Hx9O2ek1vfUOgtXGv90vbNw8foPr/36J/d+6s4brXdvtnz97WCX/z3lDfmmA9tEIXxMHxhsaQpkPCllM875L54ShSdCE5EX6fBYks/VvpYshyRzi1FH48SmjziPZ3KoRC8Gvq6/5RanI4dVRfaLCTs/vj+0rwf+A80DMRtQAy9NgRyIGqsHAIBAjlIzkfX/WU/wyCtxqnwKXh1kbNpl4KICwCPe8emoZQ0EqgrOS3lZrTr0GPV05MQTAJ7wqSyyE0UuRAUAaBP9gQh2u9p9OoPcjDQ0ckiA6FBKyfQgRqE2I1exWqyGFQACp6HM6SzyNGoorfZS8Fcxkg68AbWR/JSoWG9YxVjZKMBRmogZ6Jafgpp7iHhLfVzFh9LOTz/kStQjcmQhEHMwshcAgIKcsLLGh5p7FNRLceJS'+
			'DXkqL1V+l1yJCqyNWEGrk3HSWlnj0Y+kApz9befYqSzy1Q+5ExUAHikcO8UYXVaAlTWKfiQFMN9UxVy08j9MrhpTHyZqefXt8FkqzqaaoSGjX0ldxYfyVuV3yWWJ2mXJKR6Mv6OxPA0TPQNox6Cx3xHnL+NJKgvU6mBeJQVyXqICwCxnJh0jb8Q+HJZ8PXCCZx04Q32+6nagkUMKEru/2VAOPuYeC191MWByLyqwFVlx1UAf286Mq2FEIFVoPI3oKXsfvEbJ4TwMkUYxFKIC/csqQJPg6R0Tt2rsF8h0zHgUwPBICgyRqMAWSlYAIC8amJOjWroKpEojR2MNiW583RBJCgyZqMAWZcWIDrtuoRQFZAHGHMxqA96kGDpRAeAMz9THdedC/K6rdYirEHmJSr+eTs4yYk3Qo+h/T9l5anUw611OkmAoRe1y3p+ZhpITfb'+
			'9wWIXduqCAyCVXTK67oMIYalEB4PzqS0/CMScAqff94nVhocybBPPbnbUdQQFA4dQSiifXDv0YToZeVGDrcestiKsAL9Lha8hwx+sw1htJhxRwKOrAh5C7LIjCk8PUaOrFSIjaZcuhwEaIqxTMQZk5ZCytQHbDYArE1JZLzw9uNucKjwxrVf9hRkpUIIHSdQMCNCm4CPIiFS8L5HKSIQKh9iojew3N5xRk//qeW9tEFjRwMo8zoLbDyIna5bw/M00lX0pC2A9xGWSTIpcFvAKoJpW+CgCEaqoNIhtIVWCqYpzdgKkSsodkVYnsFWD31qv0zRHgbFMVnxrmWLQXIysqsFa6ekZOEDg86LykimAOmieHrW+0H0Za1C4jK+wOELTLjhC1ywfCygGA/Xdn5YUdJGiXHSVql1nOTHpQDxrD6RRi2JSQBWPMVwsuzo5KS74f'+
			'dqSoGzm3enqfcswTBpjKn7SyIOCrNHx5J5Wem7HjRd3IeX9mygBTSuTBvucRJMc8Db4h4KtLbunSKLbgt4IVtQdneKY+Hqzs+0Bc2Zd8XCsLFDMPLW9CeEk7mDu0A6v1OFhR+6ArL1yZMAE/I5A6hZMKMgEAkNtDBwoXxMiCARcdkZva8G0RzIsjNwPwLSulxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFEpP/B05mEbZZOAlrAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot upright_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_upright_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_upright_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titleur=document.createElement('div');
		els=me._marker_titleur__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titleur";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titleur.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titleur.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titleur.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titleur.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titleur.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_upright_customimage.appendChild(me._marker_titleur);
		me._hotspot_upright.appendChild(me._hotspot_upright_customimage);
		me.__div = me._hotspot_upright;
	};
	function SkinHotspotClass_hotspot_downright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_downright=document.createElement('div');
		el.ggId="Hotspot downright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 234px;';
		hs+='position : absolute;';
		hs+='top : 290px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_downright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_downright.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_downright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_downright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._marker_titledor.style[domTransition]='none';
			me._marker_titledor.style.visibility=(Number(me._marker_titledor.style.opacity)>0||!me._marker_titledor.style.opacity)?'inherit':'hidden';
			me._marker_titledor.ggVisible=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_downright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._marker_titledor.style[domTransition]='none';
			me._marker_titledor.style.visibility='hidden';
			me._marker_titledor.ggVisible=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_downright.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_downright_customimage=document.createElement('div');
		els=me._hotspot_downright_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_downright_customimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot downright_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_downright_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_downright_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._marker_titledor=document.createElement('div');
		els=me._marker_titledor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_titledor";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: auto;';
		hs+='background: #dcdcdc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._marker_titledor.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_titledor.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_titledor.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_titledor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_titledor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_downright_customimage.appendChild(me._marker_titledor);
		me._hotspot_downright.appendChild(me._hotspot_downright_customimage);
		me.__div = me._hotspot_downright;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot arrow left') {
			hotspot.skinid = 'Hotspot arrow left';
			hsinst = new SkinHotspotClass_hotspot_arrow_left(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot dot') {
			hotspot.skinid = 'Hotspot dot';
			hsinst = new SkinHotspotClass_hotspot_dot(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot arrow right') {
			hotspot.skinid = 'Hotspot arrow right';
			hsinst = new SkinHotspotClass_hotspot_arrow_right(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot up') {
			hotspot.skinid = 'Hotspot up';
			hsinst = new SkinHotspotClass_hotspot_up(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot down') {
			hotspot.skinid = 'Hotspot down';
			hsinst = new SkinHotspotClass_hotspot_down(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot upright') {
			hotspot.skinid = 'Hotspot upright';
			hsinst = new SkinHotspotClass_hotspot_upright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'Hotspot downright';
			hsinst = new SkinHotspotClass_hotspot_downright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot arrow left']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot arrow left'].length; i++) {
				hotspotTemplates['Hotspot arrow left'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot dot']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot dot'].length; i++) {
				hotspotTemplates['Hotspot dot'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot arrow right']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot arrow right'].length; i++) {
				hotspotTemplates['Hotspot arrow right'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot up']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot up'].length; i++) {
				hotspotTemplates['Hotspot up'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot down']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot down'].length; i++) {
				hotspotTemplates['Hotspot down'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot upright']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot upright'].length; i++) {
				hotspotTemplates['Hotspot upright'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot downright']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot downright'].length; i++) {
				hotspotTemplates['Hotspot downright'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_nonactive_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._nonactive=document.createElement('div');
		els=me._nonactive__img=document.createElement('img');
		els.className='ggskin ggskin_nonactive';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE/0lEQVRogdWaT2gcVRzHP13BpLBbpuJhmx46hUiCQjOBrFZsyKY9WE/dQosWDGnqodZLVgRRFDeRQg5espe2HiQJLSJEMBWk7WWziwlqN7BTDxIh4ETIOoJthuwcai96eDObN5PdzW6y2d1+YQjvzZuZ729/f9/vZR/1gQLEAA044vxVnMuF4VwPgByQccZNgwIkgHngvx1eOWAYUJtBfH0XxEtdU+xAkH01rk8AcbymQTCk0Nml0X8qRrjjCJ3dGsGQQjAkltkFCzNvYG9Y5LIZ9KU0ejZd7htjwHi9BVCB7xC2XYTWF6X/VIzTZ4aLZKuFXbBYSM0xezPJyu+6/7YBDFKFj1QjwDAwifSra31RRt5LoEWi1fKtCD2bZuLTEcy8IU9bwAgwV+nZZ7'+
			'Z5dwJBvh2EqVyOT/DBZzcIH1Z3TNiP8GGV80NxQgcUfvv1F548eYzzzbecJZlyz1bSQAJhj+IjHSrJqXnCHeruGVeAmTcYHRn0a2OMMn5RTgMx4IY76OzSuP71Tzz3fLhONMsjGFLoPxVDX8rw6B/TnY6ymUM8KKUBFRGfFRDkk1PzNTvpbmEXLEYvDbKyXHRwC+jF59ilBPgDJx43ymzKwS5YvHOuVzYnHSFEEQHfMwkc8sGQ0lTyMgdJ+xqSX4LXB1SkkHU5PsHLJ07vMcXtEQwptLW1c3/xnjulAV8Cj8ErwKRzk3CHSuKLbxrJsyJePHYcfSnjmlI78C+Qhk0TUhEJC4CPr041lGA1GLmSkIejOEHGFSDq3uns0uqWYesJLRKVeSmImqwowKh75/xQvKHEasGJkzF5OAAijKqI0AnAD4vrBA80NuZXC7tg8ebr'+
			'R7ELljt1MIBkPlok2rLkwSnbuz0FcSyAVCJrfdFGc6oZPjPSAkCPO+qNDDScUK3wJVY1gLSNa2XzcfFCd4887PEIED6k0urwFZWKpxZ6GjRQUYCnEQFEnQ2AvWFVWNoakHIA4BfAbn0BzDVDHhoBxCYBQN79tCwKXg0YAWDVHf21trrlgVaDnvU0KB54NLAwX7EF0xLQl9LyMBdA2oWtLOst7ch2wfK3JDOuE6fdBXduzzSeWZX4MeWxEB3HB0DqfLWyGX17MykPJ2FzQzOJE071bMXOcdOQy6b9TeAMbG7qHwP7cfYGZn6VN85cbCC97RG/NCgnsWlgBrxdCR14F2g38wbBAwd56djxhpIsh9lbSVJ3PV2SszgWI9dCFlA0sulrY/6s1xSYawbT18bkqXGk9mKp1mIOqT/01WyuaVWquWYwesnTqTaAo/KaUtVoUT'+
			'1mXrygGbnB3rD4ZPSsTN5CnNp4UKq9bgF/I1rsPHpocn/xHq+8drphmrA3nM60N+pcAH72ry13PqAjzCsKQoiF1G36T8b2XAhzzeDK26/yp7EsT48jnVfIqHTElEYSwi5Y3L09w7Nt+/csOs3eSvL5hxd49NCUp8fxdaRlVHPIF0Oc4RZ/+nCHykdXp+itUwsyl00zfX3cn0At4H1EzC+LWo5Z5/EdRHd2aZwbitM/eKZm07I3LO58P8NCaq5U5tcRwcTY7j21HnSPIQ5BtkCLRNH6omiRAYIhhUMdalEoe8OiYFusLOuY+VUWUnOi8i1siW5uLhqrkVdNUBFqree/Gaw7pBuacFTgIiLx7ZT4/G6J12pC5aAiopWGaFWqeP3Fci4dsYXVERupXWfI/wHJgta7XOqAwwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="nonactive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 5;';
		hs+='height : 20px;';
		hs+='left : 138px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nonactive.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nonactive.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._active=document.createElement('div');
		els=me._active__img=document.createElement('img');
		els.className='ggskin ggskin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAFOklEQVRogd2aT0gcVxzHP24Fp6ed7SFmE9zOBBoIJLg1pEiz4EShWITWkkJ709xy0x5zcveWnqLHnlxvzSHUFFLiQTMpBjwkVmvBtII72UBsctkxl44QaA9v3+bNZHT/javbLwzO7zfPt7/vvN/7vTfv9+sgWuiAVb4+BNJlna60cQGn/HcdsMuXG7EtTUEHJoAHwL9NXA+AMcBoqfUBGMA0UKI5MmHXLE2Q62jgf3RgCpgMe2haKZK93STTJ0imu9H0LhJGvPLccz1Kzmtcx2Xbfs7O+ksKdnG/38oDOYS71ox6SY0i3qI6RzCtFOdGz3Jx7DyartXZJZScXQp2kdW5jTCCDpAF5mrtr1ZSoaNjWimGpjKYVqrW36uKgl1kMbccRm4a+K6WPmohZQ'+
			'A/ISIZAAkjztXZkUjJBLGa32Axt4zr7KpqB7hCFXesRspARCVDKi5PXGIwe7khN6sXnuuxlFvm0fRjVe1Qhdh7B/RpECA0cmuIwWyGTq2zCVNrR6fWyUfDZ+gACg8r7qgj5vZd9lnbDiL1Gwqhq7MjfHL940iMrRemlSJhxNm8uyVVcpG/DXjB9vuRugUMS+Hq7Ah94xeitbROJNPdQWInAQ1YCLYNIzUO3JTC0FSGTycvHYKZ9SOZ7uZ9vYuthYJU9SO2Wk/VdkFSBso6dHniEp/dtA7V0HrR03+avV2P5ysvpGoY+AHFDYOkphG+SsKI882PX7QsKNSDnv5T/H57E8/dA+GCPjeMKW0NxIYSgMFspiVhuxFousbXsyOqahIlqKmksvLGtFL0jR1tYKgG00oFF//KbkeSMlBGaWgq0xLDmkXAzjHKsUCSsuSTkDdw'+
			'bBGwVUdE7gqpyigd9XpUL86NnlXFL0GQkqszAOZAe4ySxMWx86poAXqMgOupH3TtAE3XgtNlwEcqme5utU2RIJk+oYpXYkCvlMyBnpYbFAWSvb7BMOScAmg715MIeFhvDGUlbldSmt6lirpvpI7rtqgaAoOhx/Zr2M7435KqfOeX/Cc3bQPP9X3Ruz5SgYdtg5LzWhWdGLAmpZ31Vy03KAq4z3yHSm4MeCalnbX2JLXtP81djyFyQwDsrL1stT2RIDAYD3ykCnax7eaVTC4oeCgDhS01T+Y2WmxWcwgQsinPKRBHuABszm/RTlj1D0Ie3i6+ecqhvWAXD0qCHStsv2vrQ3hLykVJai3mlltnWRNY8tuZp5wJUbdJ0/KmHUZrNf9O1jEnb1RSDjAjhTvX7h3bSOi5XtCb8ij5quCx8wpwHdA8d483e284O3zmsG2sGw'+
			's3bLbuV5IEDnANZbsXJOUBfwLfAjxfeYGW6CLVf/rwLa0Ri7llfr25oqomKQcIibBUzlMggUiTsHW/QMKMH4tDmdW5DX6ZXFRVM8D3wXb7Jd1WECmSkyDWrqMmtjq3wZ3xe6rKAT4Pa7sfKQ+RGhml/Lm/Ob8FHXDmCI6kH8085ufrvoShg0hm153zdRE7jQqxgl3E2/VI9Z9qSd7Kcz0WbtgsZX2RzqFKdr7WOgpflj5hxBnMZg413bNtF7lz7V6wjmIN+Iom6yhUTCOqxSowrRSDU5lIXXLbLrIUXvEyg8ihVS2hq7c2aRxRzmOoStNK0Td+AXOgsbN4z/V4MvcHm/N/hZFxEevQfK39NVJFZiDe2FjYQ1lFZlo96EacD4y47zyx5Ozyj+vx99ordtZeVasiq3l0ooKB2J5EXetXQri60SIeoTAQbhlFZeYEgbK7'+
			'RtCI+x0EtYa2tywbvFtD6yIi2TMOoYb2P9xg2RKp+P5NAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 5;';
		hs+='height : 25px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._active.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;}'));
	document.head.appendChild(style);
	me._map.logicBlock_scaling();
	player.addListener('configloaded', function(args) { me._map.logicBlock_scaling(); });
	me.skinTimerEvent();
};