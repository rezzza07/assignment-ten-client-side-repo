import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { User, Camera, Mail } from 'lucide-react';

const DashboardProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    displayName: '',
    photoURL: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = await user.getIdToken(true);

    await updateUser(formData.displayName, formData.photoURL);

    
    const res = await fetch(`https://artopia-assignment.vercel.app/users/${user.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      }),
    });

    if (res.ok) {
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    }
  } catch (err) {
    console.error(err);
    toast.error('Failed to update profile');
  }
};

  const gradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent";

  return (
    <div className="max-w-4xl mx-auto space-y-8">
     
      <div>
        <h1 className={`text-4xl font-extrabold ${gradientText}`}>Profile</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Manage your artist profile and public information.</p>
      </div>

      <div className="bg-white/5 dark:bg-slate-800/40 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
       
        <div className="h-32 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-700/20"></div>

        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6 flex items-end justify-between">
            <div className="relative group">
              <img
                src={formData.photoURL || '/default-avatar.png'}
                alt="Profile"
                className="w-32 h-32 rounded-2xl border-4 border-white dark:border-slate-900 object-cover shadow-xl"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                   <Camera className="w-8 h-8" />
                </div>
              )}
            </div>
            
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Edit Profile
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full p-3 rounded-xl border transition-all ${
                    isEditing 
                    ? 'border-pink-500/50 bg-white dark:bg-slate-900 focus:ring-2 ring-pink-500/20' 
                    : 'border-transparent bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed'
                  }`}
                />
              </div>

              {/* Email Field (Always Read-only) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full p-3 rounded-xl border border-transparent bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Photo URL Field */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                  <Camera className="w-4 h-4" /> Profile Image URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="https://example.com/your-photo.jpg"
                  className={`w-full p-3 rounded-xl border transition-all ${
                    isEditing 
                    ? 'border-pink-500/50 bg-white dark:bg-slate-900' 
                    : 'border-transparent bg-gray-100 dark:bg-slate-900/50 text-gray-500 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-8 py-3 rounded-xl font-bold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;