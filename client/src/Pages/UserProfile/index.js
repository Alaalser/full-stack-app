import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar';

function UserProfile() {
  const [profileData, setProfileData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  const getUserData = async () => {
    try {
      const {
        data: { data: userData },
      } = await axios.get(`/api/v1/${userId}`);
      setLoading(false);
      setProfileData(userData);
    } catch (err) {
      setLoading(false);
      let msg;
      if (err.response.data.message) {
        msg = err.response.data.message;
      }
      setErrorMsg(msg);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userId]);
  return (
    <>
      <NavBar />
      {loading ? (
        <h3>loading</h3>
      ) : (
        <>
          {errorMsg ? (
            <h3>{errorMsg}</h3>
          ) : (
            <div>
              <div style={{ color: '#fff' }}>
                <h3>User Name :{profileData.user_name}</h3>
                <h3>Email :{profileData.email}</h3>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UserProfile;
