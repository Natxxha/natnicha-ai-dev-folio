import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Natnicha
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">หน้าแรก</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">เกี่ยวกับ</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">ผลงาน</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">ติดต่อ</a>
              <Link 
                to="/login" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                เข้าสู่ระบบ
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">หน้าแรก</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">เกี่ยวกับ</a>
                <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">ผลงาน</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">ติดต่อ</a>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center"
                >
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1635070470434-6174c9d17941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Content Creator & Educator
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            ยินดีต้อนรับสู่ Portfolio ของฉัน ที่นี่คุณจะได้พบกับผลงานและ
            ประสบการณ์ด้าน AI Content Creation
          </p>
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            ดูผลงาน
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                เกี่ยวกับฉัน
              </h2>
              <p className="text-gray-700 mb-4">
                ฉันคือ Natnicha Fungfueang, AI Content Creator
                และผู้สอนที่มีประสบการณ์มากกว่า 10 ปี
                ในการสร้างสรรค์คอนเทนต์ที่น่าสนใจและมีคุณภาพ
                ด้วยเทคโนโลยี AI ที่ทันสมัย
              </p>
              <p className="text-gray-700">
                ฉันมุ่งมั่นที่จะแบ่งปันความรู้และประสบการณ์
                เพื่อช่วยให้คุณเข้าใจและใช้ประโยชน์จาก AI
                ในการสร้างคอนเทนต์ได้อย่างมีประสิทธิภาพ
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245412419-9424e8893788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                alt="About Me"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ผลงาน
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581093458744-b5f3f99e73eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                alt="Portfolio Item"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI-Powered Article Generator
                </h3>
                <p className="text-gray-600">
                  เครื่องมือสร้างบทความอัตโนมัติด้วย AI
                  ที่ช่วยให้คุณสร้างคอนเทนต์ได้อย่างรวดเร็วและง่ายดาย
                </p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Portfolio Item"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI-Driven Social Media Management
                </h3>
                <p className="text-gray-600">
                  ระบบจัดการโซเชียลมีเดียที่ขับเคลื่อนด้วย AI
                  ช่วยให้คุณวางแผนและจัดการคอนเทนต์ได้อย่างมีประสิทธิภาพ
                </p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583508915404-29ebfc72c66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                alt="Portfolio Item"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI-Enhanced Content Optimization
                </h3>
                <p className="text-gray-600">
                  เครื่องมือปรับปรุงคอนเทนต์ด้วย AI
                  ที่ช่วยให้คุณปรับปรุงเนื้อหาให้มีคุณภาพและน่าสนใจยิ่งขึ้น
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ติดต่อ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                หากคุณมีคำถามหรือต้องการปรึกษาเกี่ยวกับ AI Content Creation
                โปรดติดต่อฉันได้เลย
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-semibold">อีเมล:</span>{' '}
                  natnicha@example.com
                </li>
                <li className="mb-2">
                  <span className="font-semibold">โทรศัพท์:</span> 081-234-5678
                </li>
                <li className="mb-2">
                  <span className="font-semibold">ที่อยู่:</span> กรุงเทพมหานคร,
                  ประเทศไทย
                </li>
              </ul>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    ชื่อ:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    อีเมล:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="อีเมลของคุณ"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    ข้อความ:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ข้อความของคุณ"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; 2023 Natnicha Fungfueang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
