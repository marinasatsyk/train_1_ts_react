import React, { useState, useRef, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [cardsData, setCardsData] = useState([
    {
      title: "Picasso",
      content: "Peintre XXéme siécle",
      id: 1
    },
    {
      title: "Van Gogh",
      content: "Peintre XIXéme siécle",
      id: 2

    }
  ])
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log(btnRef);
    const handleResize = (e: Event) => {
      console.log("RESIZED", e);

    }
    window.addEventListener('resize', handleResize);
    //cette fonction clean le eventlistener quand l'element est detruit..
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return (
    <div className="App">
      {/**apres map on peut mettre {} cela veut dire que il 
      * faut rajouter RETURN, si on laisse () c'est comme return était devant return()  */}
      {cardsData.map((item) => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
      {/* <Card title="La Carte" content="Le contenu" /> */}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
