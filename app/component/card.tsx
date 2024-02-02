
function MovieCard({ movie_img, width, aspect_ratio }: { movie_img: string, width: string, aspect_ratio: string }) {
    return (
        <div className={`flex ${width} ${aspect_ratio} cursor-pointer transition duration-300 ease-in-out hover:scale-110 rounded-md`}>
            <img className="w-full h-full rounded-md" src={'https://image.tmdb.org/t/p/original/' + movie_img} />
        </div>
    )
}

const PortraitMovieCard = ({ movie_img }: { movie_img: string }) => {
    return <MovieCard movie_img={movie_img} width="w-52" aspect_ratio="aspect-[2/3]" />
}

const LandscapeMovieCard = ({ movie_img }: { movie_img: string }) => {
    return <MovieCard movie_img={movie_img} width="w-72" aspect_ratio="aspect-[16/9]" />
}

export {
    PortraitMovieCard,
    LandscapeMovieCard
}

