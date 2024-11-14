import { useState, useEffect } from "react";
import Nav from "./Nav";

const MainPage = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [favorites, setFavorites] = useState([]);


  const flashcards = [
    {
      id: 1,
      content:
        "https://raw.githubusercontent.com/StudybuddiesMentor/Studybuddies_Infosys_Internship_Oct2024/refs/heads/main/client/src/assets/background_images/image_3.jpg",
    },
    {
      id: 2,
      content:
        "https://i.pinimg.com/736x/9d/97/55/9d975590ceb12f3061ce554a1f0af5ae.jpg",
    },
    {
      id: 3,
      content:
        "https://www.entrelineaspapeleria.cl/cdn/shop/products/30-tarjetas-flash-card-150-grs-entrelineas-papeleria-728367_1080x.jpg?v=1709738958",
    },
  ];

  // Automatically switch flashcard every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFlashcard((prevCard) => (prevCard + 1) % flashcards.length);
    }, 10000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [flashcards.length]);

  // Toggle favorite icon for a specific card
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      const index = newFavorites.findIndex((favorite) => favorite.id === id);
      if (index !== -1) {
        newFavorites.splice(index, 1); // Remove the favorite from the list
      } else {
        newFavorites.push({ id, isFavorite: true });
      }
      return newFavorites;
    });
  };

  return (
    
    <div className="bg-gradient-to-b from-green-50 to-green-200 min-h-screen">
      {/* Navbar */}
      <Nav/>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-4 bg-gradient-to-b from-green-50 to-green-200 py-10 rounded-xl shadow-lg pl-10">
        {/* Flashcard Section */}
        <div className="bg-white shadow-lg p-8 rounded-xl text-center">
          <div className="flex justify-center w-full">
            <img
              src={flashcards[currentFlashcard].content}
              alt={`Flashcard ${flashcards[currentFlashcard].id}`}
              className="w-full h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Recently Visited Flashcards */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Recently Visited
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={`recent-${idx}`}
                className="bg-white shadow-lg p-6 rounded-lg relative h-80 group transform hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="overflow-hidden h-full rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 p-4 transition-all duration-500">
                  <h4 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-white">
                    Flashcard content 1
                  </h4>
                  <p className="text-sm text-gray-700 mb-4 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repudiandae, quas magni veritatis ea debitis nulla
                    exercitationem.
                  </p>
                  <p className="text-sm text-gray-700 group-hover:text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur nesciunt ipsum odio at officiis hic culpa.
                  </p>
                </div>

                <div className="absolute bottom-2 right-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={
                      favorites.find(
                        (favorite) => favorite.id === `recent-${idx}`
                      )
                        ? "https://em-content.zobj.net/source/apple/81/black-heart_1f5a4.png"
                        : "https://cdn-icons-png.freepik.com/512/57/57602.png"
                    }
                    alt="Favorite"
                    className="h-8 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => toggleFavorite(`recent-${idx}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Flashcards Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Explore Flashcards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={`explore-${idx}`}
                className="bg-white shadow-lg p-6 rounded-lg relative h-80 group transform hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="overflow-hidden h-full rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-yellow-500 p-4 transition-all duration-500">
                  <h4 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-white">
                    Flashcard content 1
                  </h4>
                  <p className="text-sm text-gray-700 mb-4 group-hover:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repudiandae, quas magni veritatis ea debitis nulla
                    exercitationem.
                  </p>
                  <p className="text-sm text-gray-700 group-hover:text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur nesciunt ipsum odio at officiis hic culpa.
                  </p>
                </div>

                <div className="absolute bottom-2 right-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={
                      favorites.find(
                        (favorite) => favorite.id === `explore-${idx}`
                      )
                        ? "https://em-content.zobj.net/source/apple/81/black-heart_1f5a4.png"
                        : "https://cdn-icons-png.freepik.com/512/57/57602.png"
                    }
                    alt="Favorite"
                    className="h-8 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => toggleFavorite(`explore-${idx}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto text-center bg-gray-800">
          <p>&copy; 2024 Study Buddy. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-gray-400"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
