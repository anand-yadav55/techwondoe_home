/* eslint-disable react/react-in-jsx-scope */
// import './App.css';
import "./style.css";
import Header from "./components/Header";
import Content from "./components/HomeContent";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { client } from "./client";
// import DATA from "./data";

function App() {
  const [brandLogo, setBrandLogo] = useState("");
  const [contact, setContact] = useState(null);
  const [whyus, setWhyus] = useState(null);
  const [clients, setClients] = useState(null);
  const [services, setServices] = useState(null);
  const [front, setFront] = useState(null);
  const [blog, setBlog] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  let [reviews, setReviews] = useState(null);
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        //  let res = DATA;
        setReviews([]);
        // console.log(res);
        for (let i = 0; i < res.items.length; i++) {
          let field = res.items[i].fields;
          if (field.contentText === "BrandLogo") {
            setBrandLogo(field.images.fields.file.url);
          } else if (field.contentText === "Contact") {
            setContact(field);
          } else if (field.contentText === "why us?") {
            setWhyus(field);
          } else if (field.contentText === "clients") {
            setClients(field);
          } else if (field.contentText === "Our services") {
            setServices(field);
          } else if (field.contentText === "front") {
            setFront(field);
          } else if (field.contentText === "Blog") {
            setBlog(field);
          } else if (field.contentText === "Testimonials" || field.author) {
            if (field.author) {
              setReviews((prev) => [...prev, field]);
            } else setTestimonial(field);
          } else if (field.contentText == "footer") {
            setFooterContent(field);
          }
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []); //[brandLogo, contact, whyus, clients, services, front, blog, testimonial])
  return (
    <div className="App">
      <Header logo={brandLogo} menuItem={footerContent} />
      <Content
        contact={contact}
        whyus={whyus}
        clients={clients}
        services={services}
        front={front}
        blog={blog}
        testimonial={testimonial}
        reviews={reviews}
      />
      <Footer logo={brandLogo} content={footerContent} />
    </div>
  );
}

export default App;
