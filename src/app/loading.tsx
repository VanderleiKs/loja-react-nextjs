export default function Loading(){
    return (
        <div className="flex justify-center items-center gap-2 h-screen z-index-100">
            <div className="w-16 h-16 border-b-2 border-red-400 rounded-full animate-spin"></div>
            <h1 className="text-2xl font-bold animate-pulse text-green-400">Loading...</h1>
        </div>
    )
}