import { useState } from 'react'
import CatCard from './components/CatCard'
import BanList from './components/BanList'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [cat, setCat] = useState(null)
  const [banList, setBanList] = useState([])


  const fetchCat = async () => {
    try {
      let foundCat = false
      let randomCat = null
  
      while (!foundCat) {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${ACCESS_KEY}`)
        const data = await response.json()
  
        const filtered = data.filter((item) => {
          if (item.breeds?.length === 0) return false;
          const breed = item.breeds[0];
          return (
            !banList.includes(breed.name) &&
            !banList.includes(breed.origin) &&
            !banList.includes(breed.life_span)
          )
        })
  
        if (filtered.length > 0) {
          randomCat = filtered[Math.floor(Math.random() * filtered.length)]
          foundCat = true;
        }
      }
  
      setCat(randomCat)
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleBan = (attribute) => {
    if (!banList.includes(attribute)){
        setBanList([...banList, attribute])
    }
  }

  return (
    <div>
        <h1 className="title">Discover Cats</h1>

        <button onClick={fetchCat}>Discover new cat</button>

        {/* only renders when cat isn't null */}
        {cat && (
            <CatCard
                image={cat.url}
                breed={cat.breeds[0].name}
                origin={cat.breeds[0].origin}
                lifeSpan={cat.breeds[0].life_span}
                onAttributeClick={handleBan}
            />
        )}

        <BanList banList={banList} />

    </div>
    
  )
}

export default App
