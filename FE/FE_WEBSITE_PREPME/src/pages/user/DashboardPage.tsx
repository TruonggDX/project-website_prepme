import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Headphones, PenTool, MessageSquare, ArrowRight } from 'lucide-react';
import { ROUTES } from '@constants/routes.constants';

const BRAND = {
  50: '#fff1f2',
  100: '#ffe4e6',
  400: '#fb7185',
  500: '#f43f5e',
  600: '#e11d48',
};

const SKILLS = [
  {
    id: 'reading',
    name: 'Reading',
    icon: <BookOpen size={24} />,
    description: 'Luyện tập kỹ năng đọc hiểu, highlight và trả lời câu hỏi.',
    color: '#3b82f6',
    path: '/reading/test/1' // Giả sử id bài thi đầu tiên là 1
  },
  {
    id: 'listening',
    name: 'Listening',
    icon: <Headphones size={24} />,
    description: 'Cải thiện kỹ năng nghe với các bài thi chuẩn IELTS.',
    color: '#8b5cf6',
    path: '#'
  },
  {
    id: 'writing',
    name: 'Writing',
    icon: <PenTool size={24} />,
    description: 'Chấm điểm AI và nhận xét chi tiết cho bài viết của bạn.',
    color: '#10b981',
    path: '#'
  },
  {
    id: 'speaking',
    name: 'Speaking',
    icon: <MessageSquare size={24} />,
    description: 'Luyện nói cùng AI, cải thiện phát âm và độ trôi chảy.',
    color: '#f59e0b',
    path: '#'
  }
];

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1e293b' }}>
          Chào mừng bạn quay lại! 👋
        </h1>
        <p style={{ color: '#64748b', marginTop: '8px' }}>
          Hôm nay bạn muốn rèn luyện kỹ năng nào?
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ y: -5, boxShadow: '0 12px 24px -10px rgba(0,0,0,0.1)' }}
            onClick={() => skill.path !== '#' && navigate(skill.path)}
            style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '20px',
              border: `1.5px solid ${BRAND[100]}`,
              cursor: skill.path !== '#' ? 'pointer' : 'default',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: skill.color + '15', 
              color: skill.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {skill.icon}
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
                {skill.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.5 }}>
                {skill.description}
              </p>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: BRAND[500], fontWeight: 600, fontSize: '14px' }}>
              Bắt đầu ngay <ArrowRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};