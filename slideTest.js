function slideTest(parent)
{
	this.container=parent;
	this.parent=parent;
	this.Obj =
	{
		/*slideTest: function (){return slideTest.init},
		get init(){return this},*/
		container: 
		{
			el 		: 	'div',
			sizeW	: 	'100%',
			sizeH	: 	'96vh',
			bgc		: 	'#000000',
			id		:	'image',
			class	:	'disp-slide'
		},
		imgResources: 
			[
				{
					alt			:	'Imagen de Ejemplo',
					src			:	'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVBMTczNDg3QzA5MTFFNjk3ODM5NjQyRjE2RjA3QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVBMTczNDk3QzA5MTFFNjk3ODM5NjQyRjE2RjA3QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRUExNzM0NjdDMDkxMUU2OTc4Mzk2NDJGMTZGMDdBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRUExNzM0NzdDMDkxMUU2OTc4Mzk2NDJGMTZGMDdBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjUmssAAAGASURBVHjatJaxTsMwEIbpIzDA6FaMMPYJkDKzVYU+QFeEGPIKfYU8AETkCYI6wANkZQwIKRNDB1hA0Jrf0rk6WXZ8BvWkb4kv99vn89kDrfVexBSYgVNwDA7AN+jAK3gEd+AlGMGIBFDgFvzouK3JV/lihQTOwLtOtw9wIRG5pJn91Tbgqk9kSk7GViADrTD4HCyZ0NQnomi51sb0fUyCMQEbp2WpU67IjfNjwcYyoUDhjJVcZBjYBy40j4wXgaobWoe8Z6Y80CJBwFpunepIzt2AUgFjtXXshNXjVmMh+K+zzp/CMs0CqeuzrxSRpbOKfdCkiMTS1VBQ41uxMyQR2qbrXiiwYN3ACh1FDmsdK2Eu4J6Tlo31dYVtCY88h5ELZIJJ+IRMzBHfyJINrigNkt5VsRiub9nXICdsYyVd2NcVvA3ScE5t2rb5JuEeyZnAhmLt9NK63vX1O5Pe8XaPSuGq1uTrfUgMEp9EJ+CQvr+BJ/AAKvAcCiAR+bf9CjAAluzmdX4AEIIAAAAASUVORK5CYII=',
					duration	:	1000
				}
			],
		title: 'Cuestionario ejemplo',
		questions: 
			[
				{
					title:'Ejemplo',
					form:
						[
							{
								collection:[
									{
										label	:	'Pregunta de ejemplo',
										type	:	'radio',
										name	:	'rEjemplo',
										val		:	'1'
									},
									{
										label	:	'Pregunta de ejemplo',
										type	:	'radio',
										name	:	'rEjemplo',
										val		:	'1'
									},
									{
										label	:	'Pregunta de ejemplo',
										type	:	'radio',
										name	:	'rEjemplo',
										val		:	'1'
									},
									{
										label	:	'Pregunta de ejemplo',
										type	:	'radio',
										name	:	'rEjemplo',
										val		:	'1'
									}
								],
								time 	: [200],
								init 	: 'up',
								finish 	: 'down'
							}
						],
				}
			]
	};
	this.prepCont = Obj=>((cont = document.createElement(Obj.container.el))=>(cont.setAttribute("style","width: "+Obj.container.sizeW+";height: "+Obj.container.sizeH+";background-color: "+Obj.container.bgc),cont.setAttribute("id",Obj.container.id),cont.setAttribute("class",Obj.container.cl),cont))();
	this.prep = function (){
		this.container = this.prepCont(this.Obj);
		this.parent.append(this.container);
	}
	this.attachEl = Obj => this.container.append(this.prepCont(Obj));
	this.prepImg = function(img){
		return ((imgEl = document.createElement('img'))=>(imgEl.setAttribute('src',img.src),imgEl.setAttribute('alt',img.alt),imgEl.setAttribute("class","slideImg"),imgEl))()
	}
	this.attachImg = function(imgEl){
		this.container.append(imgEl)
	}
}

/*

For Video Monitoring




var eventos = {
	'ev':
			[
				{
                	time:'5',
                	funct:()=>alert("5th second"),
                    status:0
                },
                {
					time:'7',
                    funct:()=>alert("7th second"),
                    status:0
				}
			]
}

var handler=(i)=>{
	switch(eventos.ev[i].status){
    	case 0:
        		eventos.ev[i].funct();
        		eventos.ev[i].status=1;
        	break;
        case 1:
        	break;
       	case 2:
        		eventos.ev[i].funct();
        	break;
    }
};

function monitor(Ev){
	console.log(~~Ev.target.currentTime);
	eventos.ev.forEach((e,i)=>~~Ev.target.currentTime==e.time?handler(i):0)
}

myVideo.addEventListener("timeupdate",monitor);

*/