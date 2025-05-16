



'use client';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FeaturedBooks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const books = [
    {
      title: "Atomic Habits",
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
      description: "A guide to building good habits and breaking bad ones.",
      price: "$14.99",
      readLink: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf"
    },
    {
      title: "The Alchemist",
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      description: "A journey of self-discovery and destiny.",
      price: "$12.49",
      readLink: "https://icrrd.com/public/media/15-05-2021-084550The-Alchemist-Paulo-Coelho.pdf"
    },
    {
      title: "Harry Potter",
      image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
      description: "The magical tale of a young wizard and his adventures.",
      price: "$18.99",
      readLink: "https://ia802903.us.archive.org/12/items/FantasyFictionebookcollection/Harry%20Potter/3%20-%20Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban.pdf"
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
      description: "A brutally honest guide to living a better life.",
      price: "$15.75",
      readLink: "https://nibmehub.com/opac-service/pdf/read/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fck%20A%20Counterintuitive%20Approach%20to%20Living%20a%20Good%20Life%20by%20Mark%20Manson%20(z-lib.org).pdf"
    },
    {
      title: "The Psychology of Money",
      image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
      description: "Timeless lessons on wealth and happiness.",
      price: "$16.20",
      readLink: "https://inspiredbyislam.wordpress.com/wp-content/uploads/2022/08/the-psychology-of-money-timeless-lessons-on-wealth-greed-and-happiness-morgan-housel-z-lib.org_.pdf"
    },
    {
      title: "The Great Gatsby",
      image: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg",
      description: "A classic tale of love and ambition in the 1920s.",
      price: "$11.99",
      readLink:"https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
    },
    {
      title: "1984",
      image: "https://i.etsystatic.com/8099146/r/il/6a463f/5416970317/il_fullxfull.5416970317_26ju.jpg",
      description: "A dystopian novel about surveillance and control.",
      price: "$13.49",
      readLink: "https://www.planetebook.com/free-ebooks/1984.pdf"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDUCiFvkntv-qxwZeeDGCilWlIrkLlerhtQ&s",
      description: "Explores the evolution of human civilization.",
      price: "$19.95",
      readLink: "https://www.1pezeshk.com/wp-content/uploads/2019/07/Sapiens-A-Brief-History-of-Humankind.pdf"
    },
    {
      title: "Becoming",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
      description: "The memoir of former First Lady Michelle Obama.",
      price: "$17.99",
      readLink: "https://icrrd.com/public/media/15-05-2021-133541Becoming-Michelle-Obama.pdf"
    },
    {
      title: "The Four Agreements",
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bem-the-four-agreements-poster-art-gift-george-marley.jpg",
      description: "A practical guide to personal freedom.",
      price: "$10.50",
      readLink: "https://media.cmsmax.com/6j0m187z6e9h2yqesif6w/the-four-agreements-by-don-miguel-ruiz.pdf"
    },
    {
      title: "The Power of Habit",
      image: "https://images-na.ssl-images-amazon.com/images/I/71wm29Etl4L._AC_UL210_SR210,210_.jpg",
      description: "Why we do what we do in life and business.",
      price: "$13.99",
      readLink: "https://charlesduhigg.com/wp-content/uploads/2025/01/Power-of-Habit-Chapter-One.pdf"
    },
    {
      title: "Educated",
      image: "https://st.depositphotos.com/1032463/5117/i/450/depositphotos_51170269-stock-photo-graduation-hat-and-diploma-on.jpg",
      description: "A memoir about growing up and self-education.",
      price: "$14.25",
      readLink: "https://archive.org/details/educated-a-memoir_202403/page/n5/mode/2up"
    }
  ];

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((item) => item !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <section
      className="mb-5 py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📚 Featured Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col justify-between bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div>
                <img
                  src={book.image}
                  alt={book.title}
                   className="h-72 w-full object-contain transition-all duration-500 hover:scale-110"
                    
                  
                />
                <button
                  onClick={() => toggleFavorite(book.title)}
                  className={`absolute top-4 right-4 text-2xl bg-black/40 rounded-full p-2 transition duration-300 ${
                    favorites.includes(book.title) ? 'text-red-500' : 'text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={favorites.includes(book.title) ? solidHeart : regularHeart} />
                </button>

                <button
                  onClick={() => addToCart(book)}
                  className="absolute top-16 right-4 text-2xl text-white bg-black/40 rounded-full p-2 hover:text-yellow-500 transition duration-300"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>

                <div className="p-4">
                  <p className="text-center font-semibold text-gray-800">{book.title}</p>
                </div>
              </div>

              <div className="mt-auto p-4 flex justify-between gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
                >
                  CheckOut
                </motion.button>
                <motion.a
                  href={book.readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 text-center transition"
                >
                  Read
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
