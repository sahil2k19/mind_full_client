'use client'

import { useState, useRef, useEffect } from 'react'



export default function Component({videos}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length)
        setIsPlaying(false)
    }

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
        setIsPlaying(false)
    }

    const getVideoIndex = (offset: number) => {
        return (activeIndex + offset + videos.length) % videos.length
    }

    const togglePlay = () => {
        const videoElement = videoRefs.current[activeIndex]
        if (videoElement) {
            if (isPlaying) {
                videoElement.pause()
            } else {
                videoElement.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === activeIndex && isPlaying) {
                    video.play()
                } else {
                    video.pause()
                    video.currentTime = 0
                }
            }
        })
    }, [activeIndex, isPlaying])

    return (
        <div className="  py-8 ">
            <h2 className="text-3xl font-bold text-center mb-6">Clients Speak</h2>
            <div className="relative h-[330px] md:h-[500px] overflow-hidden bg-gray-100 rounded-lg">
                <div className="flex items-center justify-center h-full">
                    {[-1, 0, 1].map((offset) => {
                        const videoIndex = getVideoIndex(offset)
                        const video = videos[videoIndex]
                        const isActive = offset === 0
                        return (
                            <div
                                onClick={isActive ? togglePlay : undefined}
                                key={`${video.id}-${offset}`}
                                className={`absolute transition-all duration-300 cursor-pointer h-[330px] md:h-full ease-in-out ${isActive
                                        ? 'md:w-[60%] w-[70%] h-[90%] z-20'
                                        : `md:w-[60%] w-[100%] h-[90%] `
                                    }`}
                                style={{
                                    transform: `translateX(${offset * 35}%)`,
                                    filter: isActive ? 'none' : 'blur(10px)', // Apply blur effect to non-active videos
                                }}
                            >
                                <video
                                    ref={(el) => (videoRefs.current[videoIndex] = el)}
                                    src={video.src}
                                    className="w-full md:h-full object-cover rounded-xl shadow-md h-[330px]"
                                    playsInline
                                    onClick={isActive ? togglePlay : undefined}
                                />
                               
                                {isActive && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 rounded-xl">
                                        <button
                                            onClick={togglePlay}
                                            //   className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full"
                                            aria-label={isPlaying ? "Pause video" : "Play video"}
                                        >
                                            {isPlaying ? (
                                                <>
                                                    {/* pause */}
                                                </>
                                            ) : (
                                                <>
                                                    <img src='/home/play.svg' />
                                                </>
                                            )}
                                        </button>
                                        <div className="absolute bg-yellow-500 rounded-t-xl text-center top-0 p-2 md:p-6 left-0 right-0 text-white">
                                            <h3 className="text-sm md:text-2xl font-semibold mb-1">{video.service}</h3>
                                            {/* <p className="text-sm">{video.speaker}</p> */}
                                        </div>
                                        <div className="absolute bg-primary-orange rounded-xl text-center bottom-3 p-1 md:p-6  text-white">
                                            <h3 className="text-sm md:text-2xl font-semibold mb-1">{video.speaker}</h3>
                                            {/* <p className="text-sm">{video.speaker}</p> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 h-[50px] md:h-[80px]  -translate-y-1/2 text-white p-2 rounded-full z-30"
                    aria-label="Previous slide"
                >
                    <img className='h-full' src='/home/left.svg' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 h-[50px] md:h-[80px] -translate-y-1/2 text-white p-2 rounded-full z-30"
                    aria-label="Next slide"
                >
                    <img className='h-full' src='/home/right.svg' />

                </button>
            </div>
            <div className="flex justify-center mt-4">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
