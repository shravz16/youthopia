


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Main from './LandingPage/Main.tsx'
import LoginSignup from './LoginPage/LoginSignup.tsx'
import UserProfile from "./LandingPage/UserProfile.tsx";
import DonationForm from './donation.jsx';
import SuccessPage from './SuccessPage.jsx'; 
import StripeCheckout from './Stripe.jsx';
import Discussions from './Discussions/Discussions.jsx'
import HealthPage from "./HealthPage.tsx";
import Front from "./Front.tsx";
import HealthSuccess from "./HealthSuccess.tsx";
import NewsPage from "./NewsPage.tsx";
import Index from './index.tsx'
import Activity from "./Activity.tsx";
import CreateActivity from "./createActivity.tsx";
import Camps from "./Camps.tsx";
import CreateCamp from "./CreateCamp.tsx";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  
const getKey=sessionStorage.getItem('authToken')!=='--' && sessionStorage.getItem('authToken')!==null ;
if(window.location.pathname==='/'){
  sessionStorage.removeItem("authToken")
  sessionStorage.removeItem("type")
  sessionStorage.removeItem("googleImg")
  sessionStorage.removeItem("user")
  
}
if(!getKey  && window.location.pathname!=='/'){
  window.location.href='/'
}

console.log(getKey)
  return (
    <div>
      <ToastContainer/>
     <BrowserRouter>

      <Routes>
        { getKey &&
          (<Route path="/home" element={<Main></Main>}/>)
        }
      <Route path="/profile" element={<UserProfile></UserProfile>}/>
        
        
        <Route path="/" element={<LoginSignup></LoginSignup>} />
    
        <Route path="/donations" element={<DonationForm />} />
        <Route path="/discuss" element={<Discussions />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/stripe" element={<StripeCheckout />} /> 

            <Route path='/health' element={<HealthPage></HealthPage>}></Route>
    <Route path='/news-health' element={<Front></Front>}></Route>

    <Route path='/news' element={<NewsPage></NewsPage>}></Route>
    
    
    <Route path='/health-success' element={<HealthSuccess></HealthSuccess>}></Route>
                {/* Route for the index page */}
          <Route path="/activities-camps" element={<Index></Index>} />

{/* Route for the activity page */}
<Route path="/activity" element={<Activity></Activity>} />

{/* Route for creating a new activity */}
<Route path="/createActivity" element={<CreateActivity></CreateActivity>} />

{/* Route for the camps page */}
<Route path="/camps" element={<Camps></Camps>} />

{/* Route for creating a new camp */}
<Route path="/createCamp" element={<CreateCamp></CreateCamp>} />
        
      </Routes>
    </BrowserRouter>
    
      
      </div>
  )
}



export default App
