
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, Clock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const UserProfile = () => {
  const { user, updateProfile, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await updateProfile(formData);
    
    if (result.error) {
      setError(result.error);
    } else {
      setIsEditing(false);
    }
    
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-white shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-900">
              โปรไฟล์ผู้ใช้
            </CardTitle>
            <Badge variant={user.role === 'admin' ? 'destructive' : 'secondary'}>
              {user.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้งาน'}
            </Badge>
          </div>
          <CardDescription className="text-gray-600">
            จัดการข้อมูลส่วนตัวของคุณ
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  ชื่อเต็ม
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  อีเมล
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? 'กำลังบันทึก...' : 'บันทึก'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user.name,
                      email: user.email,
                    });
                    setError('');
                  }}
                >
                  ยกเลิก
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-gray-400 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-500">ชื่อเต็ม</p>
                  <p className="font-medium">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-500">อีเมล</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="text-gray-400 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-500">วันที่สมัครสมาชิก</p>
                  <p className="font-medium">{formatDate(user.created_at)}</p>
                </div>
              </div>

              {user.last_login_at && (
                <div className="flex items-center space-x-3">
                  <Clock className="text-gray-400 h-5 w-5" />
                  <div>
                    <p className="text-sm text-gray-500">เข้าสู่ระบบล่าสุด</p>
                    <p className="font-medium">{formatDate(user.last_login_at)}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  แก้ไขข้อมูล
                </Button>
                <Button 
                  variant="outline"
                  onClick={signOut}
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  ออกจากระบบ
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
