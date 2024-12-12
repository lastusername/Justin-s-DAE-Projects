import Banner from '../components/Banner';

const slides = [
    {
      image: '../img/banner',
      alt: '',
      title: 'Explore the Great Outdoors',
      description: 'Discover breathtaking landscapes and natural wonders.'
    },
    {
      image: '../img/banner2',
      alt: '',
      title: 'Embrace the Future',
      description: 'Stay ahead with cutting-edge technology and innovation.'
    },
    {
      image: 'https://source.unsplash.com/random/1600x900/?business',
      alt: '',
      title: 'Grow Your Business',
      description: 'Unlock your potential with our expert business solutions.'
    }
  ];

function Home(){
    return(
        <div>
            <Banner slides={slides} />
            <h1>Home Page</h1>
        </div>
        
    )
}


export default Home;