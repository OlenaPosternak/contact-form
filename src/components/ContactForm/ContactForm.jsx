import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/operations';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ContactSection,
  Title,
  FormSection,
  FormInput,
  Error,
  Button,
  Smile,
  Elipse,
} from './ContactForm.styled';
import { Container } from '../App.styled';

import smile from '../../img/yellowSmile(header).png';
import elipse from '../../img/yellowElipse.png';

let contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  info: yup.string().min(10).required(),
});

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Thank you for your massage. We'll give you a reply asap!", {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const handleSubmit = (values, { resetForm }) => {
    setName(name);
    setEmail(email);
    setInfo(info);

    notify();
    console.log(`values`, values);
    dispatch(addMessage(values));
    resetForm();
  };

  return (
    <ContactSection>
      <Container>
        <Smile src={smile} alt="Smile" />
        <Elipse src={elipse} alt="Smile" />
        <Title>Reach out to us!</Title>
        <Formik
          initialValues={{ name, email, info }}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          <FormSection autoComplete="off">
            <FormInput type="text" name="name" placeholder="Your name*" />
            <Error name="name" component="div" />

            <FormInput type="text" name="email" placeholder="Your e-mail*" />
            <Error name="email" component="div" />

            <FormInput
              component="textarea"
              style={{ height: '189px', paddingTop: '31px', resize: 'none' }}
              type="text"
              name="info"
              placeholder="Your message*"
            />
            <Error name="info" component="div" />
            <Button type="submit">Send message</Button>
          </FormSection>
        </Formik>
      </Container>
      <ToastContainer />
    </ContactSection>
  );
};
