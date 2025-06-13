
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import { toast } from '@/hooks/use-toast';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
  last_login_at: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<Pick<AuthUser, 'name' | 'email'>>) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
  };

  const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
  };

  const signUp = async (name: string, email: string, password: string): Promise<{ error: string | null }> => {
    try {
      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (existingUser) {
        return { error: 'อีเมลนี้ถูกใช้งานแล้ว' };
      }

      // Hash password
      const passwordHash = await hashPassword(password);

      // Insert new user
      const { data, error } = await supabase
        .from('users')
        .insert([
          {
            name,
            email,
            password_hash: passwordHash,
            role: 'user'
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Sign up error:', error);
        return { error: 'เกิดข้อผิดพลาดในการสมัครสมาชิก' };
      }

      setUser(data);
      toast({
        title: "สมัครสมาชิกสำเร็จ",
        description: "ยินดีต้อนรับเข้าสู่ระบบ",
      });

      return { error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: 'เกิดข้อผิดพลาดในการสมัครสมาชิก' };
    }
  };

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    try {
      // Get user by email
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (fetchError || !userData) {
        return { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
      }

      // Verify password
      const isValidPassword = await verifyPassword(password, userData.password_hash);
      
      if (!isValidPassword) {
        return { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
      }

      // Update last login time
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', userData.id)
        .select()
        .single();

      if (updateError) {
        console.error('Update last login error:', updateError);
        // Still continue with login even if update fails
      }

      const userToSet = updatedUser || userData;
      setUser(userToSet);
      
      toast({
        title: "เข้าสู่ระบบสำเร็จ",
        description: `ยินดีต้อนรับ ${userToSet.name}`,
      });

      return { error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' };
    }
  };

  const signOut = async () => {
    setUser(null);
    toast({
      title: "ออกจากระบบแล้ว",
      description: "ขอบคุณที่ใช้บริการ",
    });
  };

  const updateProfile = async (data: Partial<Pick<AuthUser, 'name' | 'email'>>): Promise<{ error: string | null }> => {
    if (!user) {
      return { error: 'กรุณาเข้าสู่ระบบก่อน' };
    }

    try {
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update(data)
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Update profile error:', error);
        return { error: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูล' };
      }

      setUser(updatedUser);
      toast({
        title: "อัปเดตข้อมูลสำเร็จ",
        description: "ข้อมูลของคุณได้รับการอัปเดตแล้ว",
      });

      return { error: null };
    } catch (error) {
      console.error('Update profile error:', error);
      return { error: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูล' };
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
