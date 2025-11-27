import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <p className='font-bold text-xl'>{user?.displayName}</p>
            <p>{user?.email}</p>
            <button className="btn">Update Profile</button>
        </div>
    );
};

export default Profile;