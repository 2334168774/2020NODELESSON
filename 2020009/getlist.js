import { monitorEventLoopDelay } from "perf_hooks";
var movieList=[];
$(".movie-item-title a").each(function(){
    var movie={};
    movie.movieId=$(this).attr("data-val").slice(9,-1);
    movie.movieName=$(this).text();
    // movie.movieOrange=$(this).parent().next();
    if(isNaN(parseInt($(this).parent().next().text()))){
        movie.movieRange="暂无评分";
    }
    else{
        movie.movieRange=$(this).parent().next().children("")
    }
    movie.movieRange=="暂无评分";
    console.log(movie);
})
