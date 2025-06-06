
import React, { useState, useEffect } from 'react';
import { ChevronDown, Youtube, Facebook, Globe, BookOpen, Code, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Natnichaff',
      icon: Youtube,
      description: 'ช่องเกี่ยวกับ AI และ Coding',
      color: 'hover:text-red-500'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/natnicha.funfueag',
      icon: Facebook,
      description: 'เพจเกี่ยวกับ AI',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Website',
      url: 'https://natnicha.com',
      icon: Globe,
      description: 'เว็บไซต์เกี่ยวกับ AI และ Coding',
      color: 'hover:text-green-500'
    }
  ];

  const skills = [
    { name: 'AI Education', icon: Brain },
    { name: 'Content Creation', icon: BookOpen },
    { name: 'Coding', icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-3xl font-bold">NF</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Natnicha Fungfueang
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI Content Creator & Educator
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <skill.icon size={20} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          
          <Button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            เรียนรู้เพิ่มเติม
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              เกี่ยวกับฉัน
            </h2>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold">AI Content Creator</h3>
                </div>
                <p className="text-gray-300">
                  เป็นคอนเทนครีเอเตอร์ AI และสอน AI ด้วยประสบการณ์การสอนมากกว่า 10 ปี
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-pink-400" size={24} />
                  <h3 className="text-xl font-semibold">การศึกษา</h3>
                </div>
                <p className="text-gray-300">
                  ระบบสารสนเทศทางคอมพิวเตอร์<br />
                  มหาวิทยาลัยเทคโนโลยีราชมงคล
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <Code size={64} className="mx-auto mb-4 text-purple-400" />
                <p className="text-gray-300">10+ ปีประสบการณ์</p>
                <p className="text-gray-300">การสอนและสร้างเนื้อหา</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ผลงานของเรา
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <Card
              key={link.name}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
                  <link.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                <p className="text-gray-400 mb-4">{link.description}</p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    เยี่ยมชม
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ติดต่อเรา
        </h2>
        
        <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
          <CardContent className="p-8">
            <Facebook className="mx-auto mb-4 text-blue-400" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Facebook Page</h3>
            <p className="text-gray-300 mb-6">ติดต่อเราผ่านเพจ Facebook สำหรับคำถามและการสนทนาเกี่ยวกับ AI</p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3"
            >
              <a href="https://www.facebook.com/natnicha.funfueag" target="_blank" rel="noopener noreferrer">
                ติดต่อเรา
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700">
        <p className="text-gray-400">
          © 2024 Natnicha Fungfueang. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
