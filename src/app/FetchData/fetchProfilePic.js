import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = new FormData();
    formData.append('username', req.body.username);
    formData.append('profilePicture', req.body.profilePicture);

    try {
      const response = await axios.post('http://localhost:8080/subadmin/save-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error uploading profile picture' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
