import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import './UserProfile.css';
import Button from '../../components/Button';

const UserProfile = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth.user.answer);
  //   console.log(auth?.user);
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 user-profile">
            <h1>User details</h1>
            <div className="card">
              <div className="group">
                <div className="cols1">
                  <label className="label-titile">
                    <h5>User ID</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Username</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Email</h5>
                  </label>
                  <label className="label-titile">
                    <h5>NIC No</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Contact No</h5>
                  </label>
                  <label className="label-titile">
                    <h5>Answer</h5>
                  </label>
                </div>
                <div className="cols2">
                  <label className="label-container">
                    <h5>{auth?.user?.userID}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.fullName}</h5>
                  </label>{' '}
                  <label className="label-container">
                    <h5>{auth?.user?.email}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.nicNo}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.mobileNo}</h5>
                  </label>
                  <label className="label-container">
                    <h5>{auth?.user?.answer}</h5>
                  </label>
                </div>
              </div>
              <a href="/dashboard/user/update-profile">
                <Button>Update Profile</Button>
                {/* <button>update user</button> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
