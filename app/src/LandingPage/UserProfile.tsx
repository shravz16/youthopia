import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserDetails, setUserPhoto, setUserName, setEmail, setPassword,setAge,setRace,setSex,setOccupation,setOrg} from '../actions/userActions.js'; // Import Redux actions

function UserProfile({userDetails, userName,email,password,age,race,sex,occupation,org, photo, setUserDetails, setUserName,setEmail,setPassword ,setAge,setRace,setSex,setOccupation,setOrg,setUserPhoto}) { // Destructure props
  const { t } = useTranslation();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isYouth,setIsYouth] = useState(true)
  const handleEdit = () => {
    setIsEditMode(true);
  };
  const  handleDelete = async () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch('http://3.22.180.190:3000/accounts/'+sessionStorage.getItem("type").toLowerCase()+'/'+sessionStorage.getItem('authToken'),options)
    const resp=await response.json()
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('type')
    window.location.href='/'
  };

  const handleSave = async () => {
    setIsEditMode(false);
    const formData = new FormData();

    if (photo !== null) {
      formData.append('file', photo);

      const authKey = sessionStorage.getItem("authToken");
      const result = await axios.post('http://3.22.180.190:3000/upload-pics/' + authKey, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then()
        .catch(e => { console.log(e) });
    }

    // Dispatch setUserDetails action to update user details in Redux store
    setUserDetails(userName, email,password,age,race,sex,occupation,org);
    console.log(userName, email,password,age,race,sex,occupation,org);
    const forms={
      id:"randomID",
      action:"profile", 
      data:{
         profile_data:{
             userName:userName,
             fullName:userName,
             email:email,
             password:password,
             type:sessionStorage.getItem("type").toLowerCase(),
             age:age,
             sex:sex,
             race:race,
             occupation:occupation,
             org:org
         }
      }  
     }
     const options={
         method:'PUT',
         headers:{
             'Content-Type':'application/json'
         },
         body: JSON.stringify(forms)
     }
     const response = await fetch('http://3.22.180.190:3000/accounts/'+sessionStorage.getItem("type").toLowerCase()+'/'+sessionStorage.getItem('authToken'),options)
     const resp=await response.json()
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Dispatch setUserPhoto action to update user photo in Redux store
      setUserPhoto(reader.result);
      setIsEditMode(true)
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://3.22.180.190:3000/accounts/' + sessionStorage.getItem("type") + "/" + sessionStorage.getItem("authToken"));
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userData = await response.json();
        console.log(userData.data[0].age)
        const youth=sessionStorage.getItem('type');
        if(youth==='youth'){
          setIsYouth(true);
        }
        else{
          setIsYouth(false);
        }
        
        setUserDetails(userData.data[0].userName, userData.data[0].email,userData.data[0].password,userData.data[0].age,userData.data[0].race,userData.data[0].sex,userData.data[0].occupation,userData.data[0].org)
      
        console.log(age)
        if(sessionStorage.getItem('googleImg')!==null){
          setUserPhoto(sessionStorage.getItem('googleImg'))
          return;
        }
        const respo = await fetch('http://3.22.180.190:3000/profile/photos' + "/" + sessionStorage.getItem("authToken"));
        const respos = await respo.blob();

        const reader = new FileReader();
        reader.onloadend = () => {
          setUserPhoto(reader.result);
        };
        if (respos) {
          reader.readAsDataURL(respos);
        }
      
        
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{color:'#2f52a1',paddingLeft:'50px',textAlign:'left',paddingTop:'30px'}}>{t('userProfile.profile')}</h1>
      <div className="user-profile-container">
      
        <div className="user-profile-left">
          <div className="user-profile">
            
            <div >
              <label style={{color:'#2f52a1',textAlign:'left',paddingLeft:'20%',fontSize:'24px'}}>{t('userProfile.picture')}</label>
              {photo ? (
                <div className='cropped-img'>
<img src={photo} alt="User" className="user-photo" />
                </div>
                
              ) : (
                <div className="no-photo">No photo uploaded</div>
              )}
              { isEditMode && (
                <label style={{  padding: '8px 16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: '2px solid #007bff',
                  borderRadius: '15px',
                  marginLeft:'60%'}}>
                  <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoUpload} 
            
          hidden/>
          Upload
                </label>
            
              )}
            </div>
          </div>
        </div>
        <div className="user-profile-right">
          <div className="user-profile">
            <div >
              <label>{t('userProfile.userName')}</label>
              {isEditMode ? (
                <input
                  type="text"
                  defaultValue={userName }
                  onChange={(e) => {
                    
                    setUserName(e.target.value)}}
                />
              ) : (
                <span>{userName}</span>
              )}
            </div>
            <div>
              <label>{t('userProfile.email')}</label>
              {isEditMode ? (
                <input
                  type="email"
                  value={email }
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <span>{email}</span>
              )}
            </div>
            <div>
              <label>{t('userProfile.password')}</label>
              {isEditMode ? (
                <input
                  type="password"
                  value={password }
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <span>{password}</span>
              )}
            </div>

            {
              isYouth &&(     <div>
                <label>{t('userProfile.age')}</label>
                {isEditMode ? (
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                ) : (
                  <span>{age}</span>
                )}
              </div>)
            }
            
            {
              isYouth &&(     <div>
                <label>{t('userProfile.sex')}</label>
                {isEditMode ? (
                  <input
                    type="text"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  />
                ) : (
                  <span>{sex}</span>
                )}
              </div>)
            }
            
            {
              isYouth &&(     <div>
                <label>{t('userProfile.race')}</label>
                {isEditMode ? (
                  <input
                    type="text"
                    value={race}
                    onChange={(e) => setRace(e.target.value)}
                  />
                ) : (
                  <span>{race}</span>
                )}
              </div>)
            }
            {
              isYouth &&(     <div>
                <label>{t('userProfile.occupation')}</label>
                {isEditMode ? (
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                ) : (
                  <span>{occupation}</span>
                )}
              </div>)
            }
            {
              isYouth &&(     <div>
                <label>{t('userProfile.org')}</label>
                {isEditMode ? (
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                ) : (
                  <span>{org}</span>
                )}
              </div>)
            }
            <div >
              {isEditMode ? (
                <button onClick={handleSave} style={{fontWeight:'bold'}}>{t('userProfile.save')}</button>
              ) : (
                <button onClick={handleEdit} style={{fontWeight:'bold'}}>{t('userProfile.edit')}</button>
              )}
              <button onClick={handleDelete} style={{fontWeight:'bold',position:'relative', backgroundColor:'red',marginLeft:'10px'}}>{t('userProfile.delete')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  userDetails:state.user.userDetails,
  userName: state.user.userName,
  email: state.user.email,
  password: state.user.password,
  age: state.user.age,
  race: state.user.race,
  sex: state.user.sex,
  occupation: state.user.occupation,
  org: state.user.org,
  photo: state.user.photo
});

// Map Redux actions to component props
const mapDispatchToProps = {
  setUserDetails,
  setUserName,
  setEmail,
  setPassword,
  setAge,
  setRace,
  setSex,
  setOccupation,
  setOrg,
  setUserPhoto
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
