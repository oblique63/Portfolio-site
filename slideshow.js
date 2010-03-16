function LoadSlideShow() {
    var feed  = "http://picasaweb.google.com/data/feed/base/user/Oblique63/albumid/5276148097191841265?alt=rss&kind=photo&hl=en_US";
    var options = {
     	displayTime:5000, 
        transistionTime:800, 
        scaleImages:true,
        thumbnalSize: GFslideShow.THUMBNAILS_LARGE,};
    var ss = new GFslideShow(feed, "slideShow", options);
}
  
google.load("feeds", "1");
google.setOnLoadCallback(LoadSlideShow);