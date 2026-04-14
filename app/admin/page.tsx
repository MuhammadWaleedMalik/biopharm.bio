'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ModeToggle } from '@/components/ModeToggle';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { 
  Users, LayoutDashboard, Settings, Activity, 
  CreditCard, TrendingUp, LogOut, ShieldCheck, 
  Server, Key, Menu, X, ArrowUpRight, ArrowDownRight, UserPlus
} from 'lucide-react';

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
};

type StatData = {
  _id: string;
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
};

type ActivityData = {
  _id: string;
  action: string;
  details: string;
  time: string;
  icon: string;
  color: string;
  bg: string;
};

// Map string keys to Lucide React components
const iconMap: Record<string, any> = {
  Users, LayoutDashboard, Settings, Activity, 
  CreditCard, TrendingUp, LogOut, ShieldCheck, 
  Server, Key, Menu, X, ArrowUpRight, ArrowDownRight, UserPlus
};

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<StatData[]>([]);
  const [recentActivity, setRecentActivity] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Dashboard State
  const [activeTab, setActiveTab] = useState<'overview' | 'users'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Add User Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchDashboardData = async () => {
    try {
      const [usersRes, statsRes, activityRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/admin/stats'),
        fetch('/api/admin/activity')
      ]);

      if (usersRes.status === 401 || usersRes.status === 403) {
        router.push('/login');
        return;
      }

      const usersData = await usersRes.json();
      const statsData = await statsRes.json();
      const activityData = await activityRes.json();

      if (!usersRes.ok) throw new Error(usersData.message || 'Failed to fetch users');

      setUsers(usersData.users || []);
      setStats(statsData.stats || []);
      setRecentActivity(activityData.activities || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [router]);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add user');

      setName('');
      setEmail('');
      setPassword('');
      toast.success('User added successfully');
      fetchDashboardData(); // Refresh lists
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete user');
      }
      toast.success('User deleted successfully');
      fetchDashboardData(); // Refresh lists
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.success('Logged out');
      router.push('/login');
    } catch (err) {
      toast.error('Logout failed');
    }
  };

  if (loading) return <div className="p-8 text-center bg-gray-50 dark:bg-gray-900 min-h-screen">Loading dashboard...</div>;

  // Prepare data for the graph (Users registered by date)
  const usersByDate = users.reduce((acc, user) => {
    const date = new Date(user.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.keys(usersByDate).map((date) => ({
    date,
    count: usersByDate[date]
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex transition-colors overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen fixed z-20">
        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">Admin Pro</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'users' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
          >
            <Users className="w-5 h-5" />
            Users Management
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 h-screen overflow-y-auto relative flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold capitalize hidden sm:block">
              {activeTab === 'overview' ? 'Overview' : 'Users Management'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 p-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto space-y-8">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => {
                  const IconComp = iconMap[stat.icon] || Activity;
                  return (
                    <div key={stat._id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                        <div className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <IconComp className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                        <span className={`flex items-center text-xs font-semibold ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts & Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Area */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">User Registrations Over Time</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Daily new users joining your platform</p>
                  </div>
                  <div className="h-72 w-full">
                    {chartData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:stroke-gray-700" />
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                          <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dx={-10} />
                          <RechartsTooltip 
                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px 16px', color: '#1F2937' }}
                            itemStyle={{ color: '#4F46E5', fontWeight: 600 }}
                            cursor={{ stroke: '#9CA3AF', strokeWidth: 1, strokeDasharray: '4 4' }}
                          />
                          <Area type="monotone" dataKey="count" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" activeDot={{ r: 6, strokeWidth: 0, fill: '#4F46E5' }} />
                        </AreaChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                        <p className="text-gray-500 font-medium">Not enough data to graph.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
                  <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
                  <div className="flex-1 space-y-6">
                    {recentActivity.map((activity) => {
                      const ActIcon = iconMap[activity.icon] || Activity;
                      return (
                        <div key={activity._id} className="flex gap-4">
                          <div className={`mt-1 bg-white dark:bg-gray-800 z-10 rounded-full w-10 h-10 flex items-center justify-center ${activity.bg}`}>
                            <ActIcon className={`w-5 h-5 ${activity.color}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.action}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{activity.details}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-medium">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button className="mt-6 w-full py-2.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 rounded-xl transition-colors">
                    View Full Audit Log
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === 'users' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold">User Directory</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage and view all {users.length} associated accounts.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* User List */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">User Details</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Joined Date</th>
                          <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700/50">
                        {users.length === 0 ? (
                          <tr><td colSpan={3} className="px-6 py-12 text-center text-sm text-gray-500">No users found</td></tr>
                        ) : (
                          users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/20 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => handleDeleteUser(user._id)} className="text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors">
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Add User Form */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 h-fit sticky top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"><UserPlus className="w-5 h-5"/></div>
                    <h2 className="text-lg font-bold">Add New User</h2>
                  </div>
                  <form onSubmit={handleAddUser} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                      <input type="text" required className="block w-full rounded-xl shadow-sm sm:text-sm border border-gray-200 dark:border-gray-700 p-2.5 bg-gray-50 focus:bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                      <input type="email" required className="block w-full rounded-xl shadow-sm sm:text-sm border border-gray-200 dark:border-gray-700 p-2.5 bg-gray-50 focus:bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Secure Password</label>
                      <input type="password" required minLength={5} className="block w-full rounded-xl shadow-sm sm:text-sm border border-gray-200 dark:border-gray-700 p-2.5 bg-gray-50 focus:bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all focus:outline-none">
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 animate-in slide-in-from-left shadow-2xl flex flex-col">
            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold">Admin Pro</h1>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              <button
                onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <LayoutDashboard className="w-5 h-5" /> Dashboard
              </button>
              <button
                onClick={() => { setActiveTab('users'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'users' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <Users className="w-5 h-5" /> Users Management
              </button>
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-600 rounded-xl font-medium"><LogOut className="w-5 h-5" /> Log out</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
