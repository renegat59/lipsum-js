/* Copyright (C) 2012 Mateusz Piatkowski
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * The data used by the software is downloaded from and copyrighted by www.lipsum.com
*/

var lipsumContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu magna orci, sollicitudin ultrices purus. Pellentesque dignissim laoreet sem sed viverra. Sed elementum dolor vitae erat vestibulum ultricies. Vivamus mollis euismod erat, ut porttitor ipsum placerat non. Fusce ligula ante, ultrices quis rutrum ut, euismod et eros. Curabitur vitae iaculis neque. Maecenas id urna velit, vel molestie libero. Nunc neque urna, fermentum quis malesuada non, facilisis et mauris. Nunc sollicitudin sollicitudin ipsum, consectetur hendrerit urna pellentesque ut.\r" +
		"Nulla sapien nisi, fermentum eget lobortis eu, volutpat ac purus. Duis molestie dolor nec dui rutrum mollis. Duis rutrum malesuada augue, vel facilisis est aliquam ut. Pellentesque semper commodo ipsum, a porta erat ultrices nec. Nullam ut scelerisque nulla. Nullam scelerisque sapien eu augue fermentum feugiat. Sed quis nisl erat, rutrum feugiat odio. Nulla facilisi. Vestibulum tempor eleifend dignissim. Mauris tellus purus, cursus in vestibulum at, auctor at dolor. Phasellus vitae felis eget massa consectetur pretium. Donec elementum lacus at elit mollis vehicula.\r" +
		"Quisque quis risus et lectus rutrum imperdiet non quis orci. Cras a neque risus. Mauris eros lorem, rhoncus quis facilisis quis, semper et eros. Ut facilisis, magna at egestas auctor, enim tellus malesuada est, eget iaculis tellus velit a odio. Duis porttitor malesuada ligula, sit amet imperdiet nisl dapibus sed. Etiam viverra dapibus rutrum. Cras ultrices, augue ac rutrum laoreet, est lectus ultricies sapien, at elementum enim lectus id dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus ipsum, venenatis a consectetur eget, hendrerit sed metus. Cras sodales adipiscing nibh eu pharetra. Aenean sed eleifend diam. Suspendisse nec ullamcorper ipsum. Aliquam sodales turpis nec risus sagittis porta. Morbi ac turpis vel nulla cursus placerat at nec tellus. Suspendisse potenti.\r" +
		"Fusce malesuada turpis quis urna tempor imperdiet. Aliquam sodales facilisis lorem, id aliquam ante consequat id. Aenean ac odio eu erat euismod faucibus. In eget metus velit, in vehicula nunc. Nulla id augue dolor. Mauris mattis justo et sapien gravida dapibus eget ut justo. Cras velit felis, commodo vitae gravida id, iaculis a nulla.\r" +
		"In aliquam, eros sit amet tempus fringilla, mi nunc sodales erat, sed commodo nibh dui eget sapien. Aenean egestas vulputate eros, ut auctor libero pellentesque eu. Suspendisse lobortis sollicitudin rutrum. Etiam aliquet erat sit amet enim consequat nec tincidunt ipsum feugiat. In bibendum augue at sapien pulvinar venenatis eget quis nulla. Fusce nec felis eros. Maecenas tempus, dolor vel dignissim interdum, leo nisi gravida velit, sed semper mauris diam nec nisl. Sed hendrerit mi ut velit luctus consequat. Proin egestas enim placerat velit scelerisque dictum. Vivamus sodales mi felis.\r" +
		"Nam elit metus, bibendum dignissim dignissim id, lobortis ut metus. Ut feugiat elit sit amet magna porttitor semper. Suspendisse ultricies turpis nisl, vitae sollicitudin lectus. Phasellus urna neque, lacinia ac pellentesque ac, viverra eu enim. Integer aliquet erat et mauris volutpat blandit. Duis in odio vitae magna sollicitudin hendrerit id eu augue. Phasellus sit amet gravida velit. Maecenas vitae dolor sed nisl rutrum sodales.\r" +
		"Suspendisse massa erat, hendrerit sit amet porttitor id, scelerisque sed leo. Duis non nisi tortor. Sed porta felis ac sem consequat eget accumsan neque laoreet. Etiam viverra leo vitae orci vehicula molestie tincidunt dolor consectetur. Duis feugiat auctor tincidunt. Curabitur eget vehicula quam. Cras non elit at ligula pretium mollis condimentum nec lorem. Praesent id orci turpis, congue imperdiet quam. Nullam eleifend sagittis sapien, eu ullamcorper massa accumsan eget. Curabitur sed turpis ut diam mollis tincidunt eu vitae lacus. In et arcu convallis nisi hendrerit luctus. Suspendisse tristique neque iaculis mauris dictum non rutrum tellus egestas. Nullam venenatis pellentesque nisl nec dapibus. Donec vestibulum magna nec est euismod at malesuada elit pretium.\r" +
		"Nullam aliquam, ipsum vel lacinia rutrum, lorem orci dictum lorem, nec auctor tellus nisi eu ligula. Pellentesque pellentesque elit mauris. In vulputate lacinia ipsum, id venenatis purus lobortis quis. Nam ac tempus augue. In scelerisque eleifend fringilla. Proin elit purus, vestibulum non tincidunt a, luctus quis dui. Ut suscipit aliquet magna id egestas. Mauris ac mollis eros.\r" +
		"Sed lectus metus, consequat a porttitor id, lobortis eu diam. Pellentesque accumsan lectus eu lectus consectetur laoreet. Nunc nec enim vitae metus dignissim consectetur faucibus ac urna. Mauris vel erat nisl. Sed pharetra pharetra enim nec imperdiet. Pellentesque imperdiet, turpis eget porttitor dignissim, elit diam porta leo, sed egestas tellus dui vitae dui. Ut volutpat varius turpis. Duis bibendum rutrum massa, ut vehicula dolor accumsan sit amet.\r" +
		"Maecenas tempor risus vehicula dolor consequat pulvinar sodales nunc aliquet. Nunc sit amet eros in velit semper malesuada in et nisi. Nunc nec justo ipsum. Curabitur nisl metus, fringilla quis condimentum vitae, imperdiet quis justo. Nam leo lectus, accumsan sit amet viverra at, bibendum et dui. Morbi lacinia tortor a nisl rutrum lacinia. Donec sed odio est, at facilisis ante. Etiam vehicula nulla sit amet felis molestie euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi viverra ligula eget leo tincidunt a hendrerit ligula fermentum. Mauris non neque adipiscing urna lobortis sollicitudin. Etiam tempor quam vel velit rhoncus eu aliquam erat cursus. Phasellus aliquet, lorem id lacinia varius, eros nulla ultricies enim, ac tempor nibh augue a eros. Aenean vel magna odio, ut imperdiet augue. Fusce eget lacus a velit consectetur tincidunt nec et dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

(function($){
    $.fn.extend({
        loremIpsum: function(options) {
            var defaults = {
            	randomize: false,
            	useHtmlParagraphs: false,
            	paragraphs: 0,
            	words: 0,
            	sentences: 0,
            	service: null
            };
            
            var options = $.extend(defaults, options);
            
            if(options.paragraphs < 0 || options.words < 0 || options.sentences < 0){
            	throw "You can't set negetive number of paragraphs, words or sentences!";
            }
            
            var optionsChecksum = 0;
            optionsChecksum += options.paragraphs!=0 ? options.paragraphs/options.paragraphs : 0;
            optionsChecksum += options.words!=0 ? options.words/options.words : 0;
            optionsChecksum += options.sentences!=0 ? options.sentences/options.sentences : 0;
            
            if(optionsChecksum == 0){
            	//set default
            	options.paragraphs=2;
            } else if(optionsChecksum != 1){
            	throw "You can set only ONE of the following: paragraphs, words, sentences. " + optionsChecksum + " parameters received."; 
            }
            
            var lipsumFeed = ''; 
            if(options.service != null){
            	$.ajax({
            		url:options.service,
            		success:function(data){
            			lipsumFeed = data.feed;
                	},
                	async:false,
                	dataType:'json',
                	type:'GET'
            	});
            } else {
            	lipsumFeed = lipsumContent;
            }
            
            //Iterate over the current set of matched elements
            this.each((function() {
            	
            	function makeParagraph(text, options){
            		var paragraph = options.useHtmlParagraphs ? '<p>' : '';
            		paragraph += text;
            		paragraph += options.useHtmlParagraphs ? '</p>\r\n' : '\r\n';
            		return paragraph;
            	}
            	
            	function generateParas(options){
            		var paras = lipsumFeed.split("\r");
            		var text = "";
            		if(!options.randomize){
            			for(var i = 0; i<options.paragraphs; i++){
            				text += makeParagraph(paras[i%paras.length], options);
            			}
            		}
            		else{
            			for(var i = 0; i<options.paragraphs; i++){
            				text += makeParagraph(paras[Math.floor((Math.random()*paras.length))], options);
            			}
            		}
            		return text;
            	}
            	
            	function generateWords(options){
            		var newContent = lipsumFeed.replace("\r", "");
            		var words = newContent.split(" ");
            		var text = "";
            		
            		var para = "";
        			for(var i = 0; i<options.words; i++){
        				if(!options.randomize){
        					para += words[i%words.length]+" ";
                		}
        				else {
        					para += words[Math.floor((Math.random()*words.length))]+" ";
        				}
        				if(i!=0 && i%50==0 || i==options.words-1){
        					para = makeParagraph(para+".", options);
        					text += para;
        					para = "";
        				}
        			}
        			
            		return text;
            	}
            	
            	function generateSentences(options){
            		var newContent = lipsumFeed.replace("\r", "");
            		var sentences = newContent.split(".");
            		var text = "";
            		if(!options.randomize){
            			for(var i = 0; i<options.sentences; i++){
            				text += sentences[i%sentences.length]+". ";
            			}
            		}
            		else{
            			for(var i = 0; i<options.sentences; i++){
            				text += sentences[Math.floor((Math.random()*sentences.length))]+". ";
            			}
            		}
            		return makeParagraph(text, options);
            	}
            	
            	return function(){
            		var o = options;
	            	var obj = $(this);
	            	
	            	var lipsumText = "";
	            	if(o.paragraphs>0){
	            		lipsumText = generateParas(o);
	            	}
	            	if(o.words>0){
	            		lipsumText = generateWords(o);
	            	}
	            	if(o.sentences>0){
	            		lipsumText = generateSentences(o);
	            	}
	            	obj.html(lipsumText);
            	};
            })());
        }
    });  
})(jQuery);
