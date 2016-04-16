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
                } else thumburl2 = noThumbArray[Math.ceil(Math.random() * (16 - 0)) - 1];
              } 
              var postdate = entry.published.$t;
              var cdyear = postdate.substring(0, 4);
              var cdmonth = postdate.substring(5, 7);
              var cdday = postdate.substring(8, 10);
              var towrite = '';
              if (showpostthumbnails2 == true)
                document.write('<a href="' + posturl + '"><div class="xpose_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + posttitle + '" src="' + thumburl2.replace("/default.jpg","/hqdefault.jpg") + '"/></div></a>');
              
              if (showcommentnum2 == true) {
                if (commenttext == '1 Comments') commenttext = '1 Comment';
                if (commenttext == '0 Comments') commenttext = 'No Comments';
                commenttext = '<span class="xpose_meta_comment xpose_meta_comment2"><a href="' + commenturl + '" target ="_top">' + commenttext + '</a></span>';
                towrite = towrite + commenttext;
              }
            towrite = towrite + '<a href="/search/label/'+ json.feed.link[2].href.split("/search/label/")[1] +'" class="xpose_meta_label_names">' + json.feed.link[2].href.replace("%20"," ").split("/search/label/")[1] + '</a>';
              document.write(towrite);
            }
            eval(document.write.END);
          }
