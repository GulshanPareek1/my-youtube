const GOOGLE_API_KEY = "AIzaSyC7g09TV4XyDLYQ_zLQVrdJlzmf9rqPZD0";

export const YOUTUBE_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 40;
