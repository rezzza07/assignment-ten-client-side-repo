import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Palette, Heart, ThumbsUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalArts: 0, favorites: 0, likes: 0 });
  const [arts, setArts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [growthData, setGrowthData] = useState([]);

  
  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";
  const gradientBg = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700";

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://artopia-assignment.vercel.app/user-stats/${user.email}`)
      .then(res => res.json())
      .then(data => setStats({ totalArts: data.totalArts || 0, favorites: data.favorites || 0, likes: data.likes || 0 }))
      .catch(err => console.error(err));

    fetch(`https://artopia-assignment.vercel.app/arts?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        const artsList = data.arts || [];
        setArts(artsList);

       
        const categoryCount = {};
        artsList.forEach(a => {
          categoryCount[a.category] = (categoryCount[a.category] || 0) + 1;
        });
        setCategoryData(
          Object.entries(categoryCount).map(([name, value]) => ({ name, value }))
        );

        const growth = {};
        artsList.forEach(a => {
          const month = new Date(a.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
          growth[month] = (growth[month] || 0) + 1;
        });
        const sortedGrowth = Object.entries(growth)
          .map(([month, count]) => ({ month, count }))
          .sort((a, b) => new Date(a.month) - new Date(b.month));
        setGrowthData(sortedGrowth);
      })
      .catch(err => console.error(err));
  }, [user]);

  const COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8C42'];

  return (
    <div className="space-y-8 transition-colors duration-300">

      {/* Welcome Banner */}
      <div className={`${gradientBg} p-8 rounded-2xl shadow-lg text-white`}>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.displayName || 'Artist'}! </h1>
        <p className="opacity-90 text-lg">Here is your gallery overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/5 dark:bg-slate-800/40 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <Palette className="text-orange-500 mb-4 h-6 w-6" />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Artworks</h3>
          <p className={`text-4xl font-bold mt-2 ${gradientText}`}>{stats.totalArts}</p>
        </div>
        <div className="bg-white/5 dark:bg-slate-800/40 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <Heart className="text-pink-500 mb-4 h-6 w-6" />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Favorites</h3>
          <p className={`text-4xl font-bold mt-2 ${gradientText}`}>{stats.favorites}</p>
        </div>
        <div className="bg-white/5 dark:bg-slate-800/40 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <ThumbsUp className="text-indigo-500 mb-4 h-6 w-6" />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Likes Received</h3>
          <p className={`text-4xl font-bold mt-2 ${gradientText}`}>{stats.likes}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Gallery Growth - Bar Chart */}
        <div className="bg-white/5 dark:bg-slate-800/40 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-base-content mb-6">Uploaded Artworks</h3>
          <div className="h-64">
            {growthData.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#FF6B6B" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 italic">
                No artwork upload data yet.
              </div>
            )}
          </div>
        </div>

        {/* Art Categories - Pie Chart */}
        <div className="bg-white/5 dark:bg-slate-800/40 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-base-content mb-6">Art Categories</h3>
          <div className="h-64 flex items-center justify-center">
            {categoryData.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-gray-400 italic">No categories available yet.</div>
            )}
          </div>
        </div>
      </div>

      
      <div className="bg-white/5 dark:bg-slate-800/40 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-base-content mb-4">Your Artworks</h3>
        {arts.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-gray-300 dark:border-gray-600">
                <tr>
                  <th className="px-4 py-2 text-sm font-medium text-base-content/90">Title</th>
                  <th className="px-4 py-2 text-sm font-medium text-base-content/90">Category</th>
                  <th className="px-4 py-2 text-sm font-medium text-base-content/90">Price ($)</th>
                  <th className="px-4 py-2 text-sm font-medium text-base-content/90">Visibility</th>
                </tr>
              </thead>
              <tbody>
                {arts.map(art => (
                  <tr key={art._id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 text-base-content/70">{art.title}</td>
                    <td className="px-4 py-2 text-base-content/70">{art.category}</td>
                    <td className="px-4 py-2 text-base-content/70">{art.price}</td>
                    <td className="px-4 py-2 text-base-content/70">{art.visibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400 italic">No artworks uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
