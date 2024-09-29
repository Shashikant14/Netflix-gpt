import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getmovieVideos = async () => {
        const data  = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_Options);
        const json = await data.json();

        const filteredData = json.results.filter(Video => Video.type == "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getmovieVideos();
    },[])
}

export default useTrailerVideo;