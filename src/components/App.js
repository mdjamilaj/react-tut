import React, {useState} from 'react';
import axios from 'axios'
import './App.css';

import First from './First/First'
import Counter from './Counter/Counter'
import Nav from './Nav/Nav'
import Video from './Nav/Video'
import Sidebar from './Sidebar/Sidebar'

componentDidMount() {
  const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('This is your data', data));
}

function App() {
  let a = '';
  let data1 = {
    name: 'জামিল আহমেদ',
    designation: 'মাননীয় মেয়র',
    description: 'প্রথমেই আক্কেলপুর পৌরসভার সকল পৌরবাসীকে জানাই আন্তরিক শুভেচ্ছা। আমাদের প্রাতিষ্ঠানিক ওয়েবসাইট পরিদর্শন করার জন্য অসংখ্য ধন্যবাদ। আক্কেলপুর পৌরসভা এর ওয়েবসাইটের মাধ্যমে পরিচিত করিয়ে দেওয়ার পদক্ষেপ গ্রহণ করেছে যা বৈদ্যুতিক স্বয়.....',
  }
  let data2 = {
    name: 'মোহাম্মদ মনির উদ্দিন আহমদ',
    designation: 'ওয়ার্ড কাউন্সিলর',
    description: 'কানাইঘাট পৌরসভা একটি নবগঠিত ‌"‌‌‍গ" শ্রেণীর পৌরসভা।কানাইঘাট পৌরসভাটি বিগত ২৫/১০/২০০৫ইং তারিখ হইতে প্রতিষ্ঠালাভের পর হইতে মাত্র ০২ জন কর্মকর্তা নিয়ে পৌরসভার যাবতীয় কার্যক্রম পরিচালনা করা হচ্ছে।ইতিমধ্যে পৌরসভার লোকবল বৃদ্ধির লক্ষ্যে ছাড়পত্র চাহিয়া মন্ত্রনালয়ে আবেদন প্রেরণ করা হয়েছে।.....',
  }
  let data3 = {
    name: 'মামুনুর রশিদ মামুন',
    designation: 'কাউন্সিলর',
    description: 'জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের ৪৫তম শাহাদাত বার্ষিকী ও জাতীয় শোক দিবস নানা আয়োজনে পালিত হয়েছে সিলেট সিটি করপোরেশনে। দিবস উপলক্ষে নগর ভবন প্রাঙ্গনে বঙ্গবন্ধুর প্রতিকৃতিতে শ্রদ্ধা নিবেদন করা হয়। শনিবার (১৫ আগস্ট ২০২০) সকাল.....',
  }

  


  const [toggle, setToggle] = useState(1);
  const toggler = () => {
    setToggle((prev) => !prev)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
            <Nav setToggle={toggler}/>
            <Sidebar toggle={toggle} />
        </div>
        <div className="card">
          <First res={data1}/>
          <First res={data2}/>
          <First res={data3}/>
          
          <Counter/>
        </div>
      </header>
      <div>
         { a ? a : 'No data found' }
      </div>
    </div>
  );
}

export default App;
