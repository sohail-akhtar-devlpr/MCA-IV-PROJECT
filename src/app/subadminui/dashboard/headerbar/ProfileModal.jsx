import React, { useState, useRef  } from 'react';
import defaultImage from '@/components/Project-Image/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import {capitalize} from '@/utils/Capitalize/CapitalizeFirstLetter'
import { updateProfilePicture,fetchProfilePictureSuccess } from '@/Redux/Features/profilePictureSlice'
import axios from 'axios';

function ProfileModal({ closeModal }) {
  
  console.log("DEFAULT IMAGE",defaultImage); // Check if the image is imported correctly

  const dispatch = useDispatch();
  const user = useSelector( (state)=>state.subadminUser.userInfo )
  const[avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    console.log("Selected file:", file); // Log the selected file
    // setAvatar(e.target.files[0]);
  };

  const handleUploadButton = async (e) => {
    console.log("UPLOAD BUTTON CLICKED");
    e.preventDefault();
    
    if(avatar){
      const formData = new FormData();
      formData.append("username",user.email);
      formData.append("profilePicture",avatar);

      console.log("Form data username:", user.email); // Log the email
      console.log("Form data profilePicture:", avatar); // Log the file

      try {
        await axios.post('http://localhost:8080/subadmin/save-profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then( (response)=>{
          console.log("UPLOADED SUCCESSFULLY");
          const imageData = response.data.imageData;
          const profilePictureUrl = `data:image/jpeg;base64,${imageData}`; 
          dispatch(updateProfilePicture(profilePictureUrl));
          closeModal();
        } )
        .catch( (error)=>{
          console.error('Error uploading profile picture', error);
        } );
      } catch (error) {
        console.error('Error uploading profile picture', error);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div
      className='modal-container border-2 border-red-500 fixed z-10 left-0 top-0 right-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-70'
      onClick={(e) => {
        if (e.target.classList.contains("modal-container")) closeModal();
        if (e.target.classList.contains("close")) closeModal();
      }}
    >
      <div className='border rounded-[5px] p-[32px] bg-white w-[400px]'>
        <h2 className="text-center text-xl mb-4 font-bold">Add Organizers</h2>
        <form>
          {/* Avatar Upload */}
          <div className='mb-4 flex flex-col items-center'>
            <img
              src={avatar ? URL.createObjectURL(avatar) : defaultImage.src}  // Default avatar
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-2"
              onClick={handleImageClick}  // Open file input on click
            />
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Upload Image:</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleFileChange}
              ref={fileInputRef}  // Add ref to input
            />
          </div>

          <div className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center gap-0.5'>
                    <div className='text-lg text-orange-600'>{capitalize(user?.firstName) || "XYZ"}</div>
                    <div  className='text-lg text-orange-600'>{capitalize(user?.middleName)}</div>
                    <div  className='text-lg text-orange-600'>{capitalize(user?.lastName) || "XYZ"}</div>
                  </div>
                  <div className='text-red-600 text-lg font-bold'>{user?.email || "XYZ"}</div>
                  <div className='text-yellow-400 text-lg font-bold'>{user?.mobileNumber || "XYZ"}</div>
                  <div className='text-green-500 text-lg font-bold'>{user?.role || "XYZ"}</div>
                </div>
          
          {/* Other form fields */}
          <div className="mt-4 flex justify-center space-x-2">
            <button
              type="submit"
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-xl shadow-gray-500"
              onClick={handleUploadButton}
            >
              Upload
            </button>
            {/* <button
              type="button"
              className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-xl shadow-gray-500"
              onClick={closeModal}
            >
              Close
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;