
import { useState } from "react";

export default function CategoryModal({ isOpen, onClose, categories = [] }) {

    const [search, setSearch] = useState("");

    if (!isOpen) return null;

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >

            <div
                className="relative w-full max-w-4xl max-h-[85vh]
                           overflow-y-auto rounded-2xl
                           border border-[#4E4C4B]
                           bg-[#181818] p-6 text-white"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}

                <div className="flex justify-between items-center mb-6">

                    <div>
                        <p className="text-[#F38426] text-sm">
                            EXPLORE VEYRA
                        </p>

                        <h2 className="text-3xl font-bold">
                            All Categories
                        </h2>

                        <p className="text-gray-400 mt-1">
                            Find exactly what you're looking for.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl hover:text-[#F38426]"
                        aria-label="Close categories"
                    >
                        &times;
                    </button>

                </div>

                {/* Search bar */}

                <input
                    type="text"
                    placeholder="Search categories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#292929] border border-[#4E4C4B]
                               rounded-lg p-3 mb-6 outline-none
                               focus:border-[#F38426]"
                />

                {/* Categories */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                    {filteredCategories.map((category) => (

                        <div
                            key={category.id}
                            className="bg-[#242424] p-4 rounded-xl
                                       hover:border-[#F38426] border
                                       border-transparent cursor-pointer
                                       transition"
                        >
                            <span className="text-3xl">
                                {category.icon}
                            </span>

                            <h3 className="mt-3 font-semibold">
                                {category.name}
                            </h3>

                        </div>

                    ))}

                    {filteredCategories.length === 0 && (
                        <p className="text-gray-400 col-span-full">
                            No categories found.
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
}
