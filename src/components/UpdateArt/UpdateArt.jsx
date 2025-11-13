// UpdateArt.jsx
import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateArt = () => {
    const data = useLoaderData();
    // loader may return { success: true, result } or the art object directly
    const art = data?.result ?? data;
    console.debug('UpdateArt loader data:', data);
    console.debug('Resolved art:', art);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            image: e.target.image.value,
            title: e.target.title.value,
            name: e.target.name.value,      // fixed
            email: e.target.email.value,    // fixed
            category: e.target.category.value,
            mediumTools: e.target.mediumTools.value,
            description: e.target.description.value,
            dimensions: e.target.dimensions.value,
            price: e.target.price.value,
            visibility: e.target.visibility.value,
        };

        // ensure we have a usable id (string)
        const id = art?._id?.toString?.() || art?.id || art?._id;
        if (!id) {
            console.error('UpdateArt: missing art id', art);
            alert('Cannot update: missing art id');
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/arts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const json = await res.json();
            console.debug('Update response:', res.status, json);
            if (!res.ok) {
                console.error('Update failed', json);
                alert('Failed to update artwork.');
                return;
            }

            alert('Artwork updated successfully!');
        } catch (err) {
            console.error('UpdateArt fetch error', err);
            alert('Failed to update artwork.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-transparent text-white">
            <div className="relative w-full max-w-2xl rounded-xl p-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 backdrop-blur-xl overflow-hidden border-2 border-transparent">
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gray-900 pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="relative space-y-4">
                    <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
                        Update Artwork
                    </h2>

                    {/* Name */}
                    <div>
                        <label className='label font-medium'>Name</label>
                        <input type="text" name="name" defaultValue={art.name} readOnly className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='label font-medium'>Email</label>
                        <input type="email" name="email" defaultValue={art.email} readOnly className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20" />
                    </div>

                    {/* Image */}
                    <div>
                        <label className='label font-medium'>Image URL</label>
                        <input type="text" name="image" defaultValue={art.image} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Title */}
                    <div>
                        <label className='label font-medium'>Title</label>
                        <input type="text" name="title" defaultValue={art.title} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Category */}
                    <div>
                        <label className='label font-medium'>Category</label>
                        <input type="text" name="category" defaultValue={art.category} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Medium/Tools */}
                    <div>
                        <label className='label font-medium'>Medium</label>
                        <input type="text" name="mediumTools" defaultValue={art.mediumTools} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className='label font-medium'>Description</label>
                        <textarea name="description" defaultValue={art.description} required rows="4" className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Visibility */}
                    <div>
                        <label className='label font-medium'>Visibility</label>
                        <select name="visibility" defaultValue={art.visibility} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20">
                            <option value="" disabled>Select Visibility</option>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    {/* Dimensions */}
                    <div>
                        <label className='label font-medium'>Dimensions</label>
                        <input type="text" name="dimensions" defaultValue={art.dimensions} className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Price */}
                    <div>
                        <label className='label font-medium'>Price</label>
                        <input type="number" name="price" defaultValue={art.price} className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/20 placeholder-gray-300" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 hover:opacity-90 transition">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateArt;
