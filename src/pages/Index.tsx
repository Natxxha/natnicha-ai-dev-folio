
import React, { useState, useEffect } from 'react';
import { ChevronDown, Youtube, Facebook, Globe, BookOpen, Code, Brain, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hero', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับ' },
    { id: 'portfolio', label: 'ผลงาน' },
    { id: 'contact', label: 'ติดต่อ' }
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Natnichaff',
      icon: Youtube,
      description: 'ช่องเกี่ยวกับ AI และ Coding',
      color: 'hover:text-red-500',
      stats: 'เนื้อหา AI & Coding'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/natnicha.funfueag',
      icon: Facebook,
      description: 'เพจเกี่ยวกับ AI',
      color: 'hover:text-blue-500',
      stats: 'ชุมชน AI Learners'
    },
    {
      name: 'Website',
      url: 'https://natnicha.com',
      icon: Globe,
      description: 'เว็บไซต์เกี่ยวกับ AI และ Coding',
      color: 'hover:text-green-500',
      stats: 'บทความ & คอร์สเรียน'
    }
  ];

  const skills = [
    { name: 'AI Education', icon: Brain, description: 'สอน AI มา 10+ ปี' },
    { name: 'Content Creation', icon: BookOpen, description: 'สร้างเนื้อหาคุณภาพ' },
    { name: 'Coding', icon: Code, description: 'เขียนโปรแกรม & พัฒนา' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Natnicha
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold">NF</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Natnicha Fungfueang
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              AI Content Creator & Educator
            </p>
            
            <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              ประสบการณ์การสอน AI มากกว่า 10 ปี | สร้างเนื้อหาคุณภาพ | พัฒนาชุมชนผู้เรียน AI
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-700/50 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <skill.icon size={16} className="sm:w-5 sm:h-5" />
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-medium block">{skill.name}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              เรียนรู้เพิ่มเติม
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            เกี่ยวกับฉัน
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="text-purple-400" size={24} />
                    <h3 className="text-xl font-semibold">AI Content Creator & Educator</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    เป็นคอนเทนครีเอเตอร์ AI และผู้สอน AI ด้วยประสบการณ์การสอนมากกว่า 10 ปี 
                    มุ่งมั่นสร้างเนื้อหาคุณภาพและพัฒนาชุมชนผู้เรียน AI ในประเทศไทย
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-purple-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    10+ ปีประสบการณ์การสอน
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-pink-400" size={24} />
                    <h3 className="text-xl font-semibold">การศึกษา</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>ระบบสารสนเทศทางคอมพิวเตอร์</strong><br />
                    มหาวิทยาลัยเทคโนโลยีราชมงคล
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-pink-400">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    รากฐานทางเทคนิคที่แข็งแกร่ง
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg border border-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.3),transparent_50%)]"></div>
                <div className="text-center z-10">
                  <Code size={48} className="sm:w-16 sm:h-16 mx-auto mb-4 text-purple-400 animate-float" />
                  <p className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">10+ ปีประสบการณ์</p>
                  <p className="text-sm sm:text-base text-gray-300">การสอนและสร้างเนื้อหา AI</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">1000+</div>
                      <div className="text-xs text-gray-400">นักเรียน</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-400">50+</div>
                      <div className="text-xs text-gray-400">วิดีโอ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ผลงานของเรา
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <p className="text-gray-400 mb-2 text-sm">{link.description}</p>
                  <p className="text-xs text-purple-300 mb-4">{link.stats}</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      เยี่ยมชม
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ติดต่อเรา
          </h2>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-8">
              <Facebook className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-2xl font-semibold mb-4">Facebook Page</h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                ติดต่อเราผ่านเพจ Facebook สำหรับคำถามและการสนทนาเกี่ยวกับ AI 
                หรือสอบถามเกี่ยวกับคอร์สเรียนและการสอน
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3"
                >
                  <a href="https://www.facebook.com/natnicha.funfueag" target="_blank" rel="noopener noreferrer">
                    ติดต่อเรา
                  </a>
                </Button>
                <p className="text-sm text-gray-400">
                  หรือส่งข้อความโดยตรงใน Facebook
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 mb-4">
            © 2024 Natnicha Fungfueang. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors ${link.color}`}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
