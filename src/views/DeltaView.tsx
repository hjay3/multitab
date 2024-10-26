import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

const DeltaView = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'System Update', progress: 75, status: 'In Progress' },
    { id: 2, title: 'Data Migration', progress: 90, status: 'Almost Done' },
    { id: 3, title: 'Security Audit', progress: 30, status: 'Started' },
    { id: 4, title: 'Backup Process', progress: 100, status: 'Completed' },
  ]);

  const getStatusVariant = (progress: number) => {
    if (progress === 100) return 'success';
    if (progress > 70) return 'warning';
    return 'info';
  };

  const incrementProgress = (id: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id && task.progress < 100) {
        const newProgress = Math.min(task.progress + 10, 100);
        return {
          ...task,
          progress: newProgress,
          status: newProgress === 100 ? 'Completed' : task.status,
        };
      }
      return task;
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {tasks.map((task) => (
        <Card 
          key={task.id}
          hover={false}
          className="cursor-pointer"
          onClick={() => incrementProgress(task.id)}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <Badge variant={getStatusVariant(task.progress)}>
              {task.status}
            </Badge>
          </div>
          
          <ProgressBar
            progress={task.progress}
            label="Task Progress"
          />

          <AnimatePresence>
            {task.progress === 100 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-3 bg-green-500/20 rounded-lg text-green-400 text-sm"
              >
                Task completed successfully! All objectives have been met.
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </motion.div>
  );
};

export default DeltaView;