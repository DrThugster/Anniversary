// components/MemoriesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoriesPage = () => {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const memories = [
    {
      id: 1,
      image: '/memories/photo1.jpg',
      title: 'Our First Date',
      description: 'Where it all began ❤️'
    },
    // Add 9 more photo objects
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    overflow-auto">
      <div className="min-h-screen py-16 px-4">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-rose-300 mb-12 animate-glow">
          Our Beautiful Journey ❤️
        </h1>

        {/* Photo Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Feature Photo */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <div className="memory-card-large">
              <img 
                src="/memories/photo1.jpg"
                alt="Special moment"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="memory-overlay">
                <h3 className="text-2xl font-bold">Our First Date</h3>
                <p>Where it all began ❤️</p>
              </div>
            </div>
          </div>

          {/* Regular Photos */}
          {memories.slice(1).map((memory, index) => (
            <div 
              key={memory.id}
              className={`memory-card transform transition-all duration-500 hover:scale-105
                        ${index % 3 === 0 ? 'hover:rotate-2' : index % 3 === 1 ? 'hover:-rotate-2' : 'hover:rotate-1'}`}
              onClick={() => setSelectedPhoto(memory)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl
                            group cursor-pointer">
                <img 
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 object-cover transition-transform duration-500
                            group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{memory.title}</h3>
                  <p className="text-gray-200">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedPhoto(null)}>
            <div className="relative max-w-4xl w-full" 
                 onClick={e => e.stopPropagation()}>
              <img 
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <h3 className="text-2xl font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-gray-200">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => navigate('/current')}
            className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500
                     text-white rounded-lg shadow-xl hover:scale-105 
                     transition-all duration-300"
          >
            See Us Now ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;