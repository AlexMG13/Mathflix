function MovieCard() {
    return (
        <div class="bg-white w-96 shadow-sm rounded-lg">
            <figure class="overflow-hidden">
                <img
                    class="object-cover w-full h-48"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div class="p-4">
                <h2 class="text-lg font-bold flex items-center justify-between">
                    Card Title
                    <span class="text-sm text-white bg-purple-500 px-2 py-1 rounded">NEW</span>
                </h2>
                <p class="text-gray-600 mt-2">
                    A card component has a figure, a body part, and inside body there are title and actions parts.
                </p>
                <div class="flex items-center space-x-1">
                    <label>
                        <input type="radio" name="rating-2" aria-label="1 star" class="hidden" />
                            <svg class="w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.176 1.191-5.904 5.758 1.393 8.115L12 18.896 4.667 23.082l1.393-8.115L.156 9.209l8.176-1.191L12 .587z" />
                            </svg>
                    </label>
                    <label>
                        <input type="radio" name="rating-2" aria-label="2 star" class="hidden" />
                            <svg class="w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.176 1.191-5.904 5.758 1.393 8.115L12 18.896 4.667 23.082l1.393-8.115L.156 9.209l8.176-1.191L12 .587z" />
                            </svg>
                    </label>
                    <label>
                        <input type="radio" name="rating-2" aria-label="3 star" class="hidden" />
                            <svg class="w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.176 1.191-5.904 5.758 1.393 8.115L12 18.896 4.667 23.082l1.393-8.115L.156 9.209l8.176-1.191L12 .587z" />
                            </svg>
                    </label>
                    <label>
                        <input type="radio" name="rating-2" aria-label="4 star" class="hidden" />
                            <svg class="w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.176 1.191-5.904 5.758 1.393 8.115L12 18.896 4.667 23.082l1.393-8.115L.156 9.209l8.176-1.191L12 .587z" />
                            </svg>
                    </label>
                    <label>
                        <input type="radio" name="rating-2" aria-label="5 star" class="hidden" />
                            <svg class="w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431 8.176 1.191-5.904 5.758 1.393 8.115L12 18.896 4.667 23.082l1.393-8.115L.156 9.209l8.176-1.191L12 .587z" />
                            </svg>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;