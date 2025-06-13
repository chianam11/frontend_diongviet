// "use client"
// import Image from "next/image";
// import { useState, useCallback } from "react";
// import { FaCamera, FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "Sarah Johnson",
//     email: "sarah.johnson@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     bio: "Senior Software Engineer with 8+ years of experience in full-stack development. Passionate about creating intuitive user experiences and solving complex technical challenges.",
//     profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     socialLinks: {
//       twitter: "@sarahcodes",
//       linkedin: "sarah-johnson",
//       github: "sarahj-dev"
//     },
//     privacySettings: {
//       showEmail: true,
//       showPhone: true,
//       showLocation: true
//     },
//     profileCompletion: 85
//   });

//   const handleImageUpload = useCallback((e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData(prev => ({
//           ...prev,
//           profileImage: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   }, []);

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setProfileData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }, []);

//   const togglePrivacy = useCallback((setting) => {
//     setProfileData(prev => ({
//       ...prev,
//       privacySettings: {
//         ...prev.privacySettings,
//         [setting]: !prev.privacySettings[setting]
//       }
//     }));
//   }, []);

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="relative h-48 bg-gradient-to-r from-gray-500 to-red-600">
//           <div className="absolute -bottom-16 left-8">
//             <div className="relative">
//               <Image
//                 src={profileData.profileImage}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full border-4 border-white object-cover"
//                 onError={(e) => {
//                   e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
//                 }}
//               />
//               {isEditing && (
//                 <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg cursor-pointer">
//                   <FaCamera className="text-gray-600 w-5 h-5" />
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                   />
//                 </label>
//               )}
//             </div>
//           </div>
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
//           >
//             <FaEdit />
//             {isEditing ? "Save Changes" : "Edit Profile"}
//           </button>
//         </div>

//         <div className="pt-20 px-8 pb-8">
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-6">
//               <div>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={profileData.fullName}
//                     onChange={handleInputChange}
//                     className="text-3xl font-bold w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none"
//                   />
//                 ) : (
//                   <h1 className="text-3xl font-bold">{profileData.fullName}</h1>
//                 )}
//               </div>

//               <div className="flex flex-col md:flex-row gap-8">
//                 <div className="flex-1 space-y-4">
//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
//                     {isEditing ? (
//                       <textarea
//                         name="bio"
//                         value={profileData.bio}
//                         onChange={handleInputChange}
//                         className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       <p className="text-gray-600">{profileData.bio}</p>
//                     )}
//                   </div>

//                   <div className="space-y-3">
//                     <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2">
//                         <FaEnvelope className="text-gray-500" />
//                         {isEditing ? (
//                           <input
//                             type="email"
//                             name="email"
//                             value={profileData.email}
//                             onChange={handleInputChange}
//                             className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
//                           />
//                         ) : (
//                           <span className="text-gray-600">{profileData.email}</span>
//                         )}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaPhone className="text-gray-500" />
//                         {isEditing ? (
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={profileData.phone}
//                             onChange={handleInputChange}
//                             className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
//                           />
//                         ) : (
//                           <span className="text-gray-600">{profileData.phone}</span>
//                         )}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaMapMarkerAlt className="text-gray-500" />
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             name="location"
//                             value={profileData.location}
//                             onChange={handleInputChange}
//                             className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
//                           />
//                         ) : (
//                           <span className="text-gray-600">{profileData.location}</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex-1 space-y-4">
//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-gray-700">Social Links</h2>
//                     <div className="flex gap-4">
//                       <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
//                         <FaTwitter size={24} />
//                       </a>
//                       <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
//                         <FaLinkedin size={24} />
//                       </a>
//                       <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//                         <FaGithub size={24} />
//                       </a>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-gray-700">Profile Completion</h2>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
//                         style={{ width: `${profileData.profileCompletion}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-sm text-gray-500">{profileData.profileCompletion}% Complete</p>
//                   </div>

//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-gray-700">Privacy Settings</h2>
//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={profileData.privacySettings.showEmail}
//                           onChange={() => togglePrivacy("showEmail")}
//                           className="w-4 h-4 text-blue-600"
//                         />
//                         <span className="text-gray-600">Show email</span>
//                       </label>
//                       <label className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={profileData.privacySettings.showPhone}
//                           onChange={() => togglePrivacy("showPhone")}
//                           className="w-4 h-4 text-blue-600"
//                         />
//                         <span className="text-gray-600">Show phone number</span>
//                       </label>
//                       <label className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={profileData.privacySettings.showLocation}
//                           onChange={() => togglePrivacy("showLocation")}
//                           className="w-4 h-4 text-blue-600"
//                         />
//                         <span className="text-gray-600">Show location</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

const page = () => {
  return (
    <div>page</div>
  )
}

export default page