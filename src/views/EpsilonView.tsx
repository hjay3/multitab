import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Radio } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

const EpsilonView = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoadError, setImageLoadError] = useState<Record<number, boolean>>({});
  
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      title: 'Deep Space Nebula',
      description: 'A stunning view of cosmic clouds',
    },
    {
      url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80',
      title: 'Galaxy Formation',
      description: 'Spiral arms of a distant galaxy',
    },
    {
      url: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=800&q=80',
      title: 'Star Cluster',
      description: 'Ancient stellar nursery',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            layoutId={`image-${i}`}
            onClick={() => setSelectedImage(i)}
            className="cursor-pointer"
          >
            <Card className="p-0 overflow-hidden">
              <div className="relative">
                 <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 object-cover"
                    onError={() => setImageLoadError(prev => ({ ...prev, [i]: true }))}
                    style={{ display: imageLoadError[i] ? 'none' : 'block' }}
                   />
                   {imageLoadError[i] && (
                    <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400">Image failed to load</span>
                    </div>
                   )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold">{img.title}</h3>
                  <p className="text-sm text-gray-200">{img.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <Rocket className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-bold">Mission Status</h2>
          </div>
          <div className="space-y-4">
            {['Launch Preparation', 'Orbital Insertion', 'Data Collection'].map((phase, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-400">{phase}</span>
                <Badge variant={i === 0 ? 'warning' : i === 1 ? 'info' : 'success'}>
                  {i === 0 ? 'In Progress' : i === 1 ? 'Pending' : 'Complete'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-4">
            <Radio className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-bold">Signal Strength</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Star className="w-5 h-5 text-yellow-400" />
              <div className="flex-1 mx-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
              <span className="text-indigo-400 font-mono">85%</span>
            </div>
          </div>
        </Card>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="max-w-4xl w-full bg-gray-800 rounded-xl overflow-hidden"
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-[70vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-400">{images[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EpsilonView;
