import Profile from '../components/profile.component';
import './App.css'; 

const HomePage = () => { 
  return ( 
    <div className="App"> 
      <Profile 
        name="Katherine Johnson" 
        imageUrl="https://i.imgur.com/MK3eW3Am.jpg" 
      />
      <Profile 
        name="Dorothy Vaughan" 
        imageUrl="https://i.imgur.com/7vQD0fPs.jpg" 
      />
      <Profile 
        name="Mary Jackson" 
        imageUrl="https://i.imgur.com/Z9SnKhp.jpg" 
      />
    </div> 
  ); 
}

export default HomePage;

