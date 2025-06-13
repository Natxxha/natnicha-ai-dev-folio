
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold text-white">
              เข้าสู่ระบบ
            </CardTitle>
            <CardDescription className="text-gray-400">
              กรอกข้อมูลเพื่อเข้าใช้งานระบบ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 font-medium">
                  อีเมล
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 font-medium">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                เข้าสู่ระบบ
              </Button>
            </form>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                ยังไม่มีบัญชี?{' '}
                <Link 
                  to="/register" 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  สมัครสมาชิก
                </Link>
              </p>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-center text-xs text-gray-500">
                สำหรับนักพัฒนาและผู้เชี่ยวชาญด้าน AI
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
