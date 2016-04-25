function mythumb66(json) {
            eval(document.write.START);
            for (var i = 0; i < 1; i++) {
              var entry = json.feed.entry[i];
              var posttitle = entry.title.$t;
              var posturl;
              if (i == json.feed.entry.length) break;
              for (var k = 1; k < entry.link.length; k++) {
                if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                  var commenttext = entry.link[k].title;
                  var commenturl = entry.link[k].href;
                }
                if (entry.link[k].rel == 'alternate') {
                  posturl = entry.link[k].href;
                  break;
                }
              }
              var thumburl2;    
              try {
                thumburl2 = entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/");
              } catch (error) {
                s = entry.content.$t;
                a = s.indexOf("<img");
                b = s.indexOf("src=\"", a);
                c = s.indexOf("\"", b + 5);
                d = s.substr(b + 5, c - b - 5);
                if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                  thumburl2 = d;
                } else thumburl2 = noThumbArray[Math.ceil(Math.random() * (noThumbArray.length - 0)) - 1];
              } 
              var postdate = entry.published.$t;
              var cdyear = postdate.substring(0, 4);
              var cdmonth = postdate.substring(5, 7);
              var cdday = postdate.substring(8, 10);
              var towrite = '';
              if (showpostthumbnails2 == true)
                document.write('<a href="' + json.feed.link[2].href + '"><div class="xpose_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + posttitle + '" src="' + thumburl2.replace("/default.jpg","/hqdefault.jpg") + '"/></div></a>'+ '<span class="linkshortcode"><a href="/search/label/'+ json.feed.link[2].href.split("/search/label/")[1] +'" class="xpose_meta_label_names">' + json.feed.link[2].href.replace(/%20/g," ").split("/search/label/")[1] + '</a></span>');
              
              if (showcommentnum2 == true) {
                if (commenttext == '1 Comments') commenttext = '1 Comment';
                if (commenttext == '0 Comments') commenttext = 'No Comments';
              }
             
            }
            eval(document.write.END);
          }
          
          function mythumb77(json) {
            eval(document.write.START);
            document.write('<h2><a href="'+ json.feed.link[2].href +'" class="xpose_meta_label_names">' + json.feed.link[2].href.replace(/%20/g," ").split("/search/label/")[1] + '</a></h2>');
            for (var i = 0; i < json.feed.entry.length; i++) {
              var entry = json.feed.entry[i];
              var posttitle = entry.title.$t;
              var posturl;
              if (i == json.feed.entry.length) break;
              for (var k = 1; k < entry.link.length; k++) {
                if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                  var commenttext = entry.link[k].title;
                  var commenturl = entry.link[k].href;
                }
                if (entry.link[k].rel == 'alternate') {
                  posturl = entry.link[k].href;
                  break;
                }
              }
              var thumburl2;    
              try {
                thumburl2 = entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/");
              } catch (error) {
                s = entry.content.$t;
                a = s.indexOf("<img");
                b = s.indexOf("src=\"", a);
                c = s.indexOf("\"", b + 5);
                d = s.substr(b + 5, c - b - 5);
                if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                  thumburl2 = d;
                } else thumburl2 = noThumbArray[Math.ceil(Math.random() * (noThumbArray.length - 0)) - 1];
              } 
              var postdate = entry.published.$t;
              var cdyear = postdate.substring(0, 4);
              var cdmonth = postdate.substring(5, 7);
              var cdday = postdate.substring(8, 10);
              var towrite = '';
                document.write('<a href="' + posturl + '"><span class="xpose_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + posttitle + '" src="' + thumburl2.replace("/default.jpg","/hqdefault.jpg") + '"/></span></a>'+ '<span class="linkshortcode"><a href="'+ posturl +'" class="xpose_meta_label_names">' + posttitle + '</a></span>');
              if(json.feed.entry.length == json.feed.openSearch$itemsPerPage.$t && i == (json.feed.entry.length-1)) {
               document.write('<a href="'+ json.feed.link[2].href +'" class="read_more">></a>');
              }
              if (showcommentnum2 == true) {
                if (commenttext == '1 Comments') commenttext = '1 Comment';
                if (commenttext == '0 Comments') commenttext = 'No Comments';
              }
             
            }
            eval(document.write.END);
          }

