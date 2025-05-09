import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/gallery/event1.jpg',
    alt: 'Community Workshop',
    description: 'Our team conducting a community workshop on sustainable development'
  },
  {
    id: 2,
    src: '/images/gallery/event2.jpg',
    alt: 'Youth Program',
    description: 'Youth empowerment program in action'
  },
  {
    id: 3,
    src: '/images/gallery/event3.jpg',
    alt: 'Community Outreach',
    description: 'Community outreach program in rural areas'
  },
  {
    id: 4,
    src: '/images/gallery/event4.jpg',
    alt: 'Education Initiative',
    description: 'Education initiative for underprivileged children'
  },
  {
    id: 5,
    src: '/images/gallery/event5.jpg',
    alt: 'Environmental Campaign',
    description: 'Environmental awareness campaign'
  },
  {
    id: 6,
    src: '/images/gallery/event6.jpg',
    alt: 'Health Program',
    description: 'Health and wellness program for the community'
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Pictures</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{photo.alt}</h3>
                  <p className="text-sm text-gray-200">{photo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{selectedPhoto.alt}</h3>
                  <p className="text-gray-300">{selectedPhoto.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery; 