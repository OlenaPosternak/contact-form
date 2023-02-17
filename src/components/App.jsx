import { ContactForm } from './ContactForm/ContactForm';
import { Footer } from './Footer/Footer';
import { MapSection } from './MapImg/Map';

import { Body } from './App.styled';
export const App = () => {
  return (
    <Body>
      <ContactForm />
      <MapSection />
      <Footer />
    </Body>
  );
};
