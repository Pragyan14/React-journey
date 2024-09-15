import React from 'react';

function Card({userName,hastag1 = "photography",hastag2 = "eating",hastag3 = "music"}){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full"
                 src="https://images.pexels.com/photos/326316/pexels-photo-326316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{userName}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hastag1}</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hastag2}</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hastag3}</span>
            </div>
        </div>
    )
}

export default Card;