import React, {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Head from "next/head";
import { GiRocketThruster } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import styles from "./styles.module.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef();
  const name = useRef<any>();
  const email = useRef<any>();
  const textMessage = useRef<any>();

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (
      !name.current.value ||
      !textMessage.current.value ||
      !email.current.value
    ) {
      setLoading(false);
      toast.error("Preencha todos os campos", {
        theme: "dark",
      });
      return;
    }

    try {
      const sendEmail = await emailjs.sendForm(
        "service_ttioyn9",
        "template_tzs1q99",
        form.current
      );

      if (sendEmail.status === 200) {
        toast.success("Email enviado com sucesso!", {
          theme: "dark",
        });

        name.current.value = "";
        email.current.value = "";
        textMessage.current.value = "";
      }
    } catch (err) {
      toast.error(
        "Houve um erro ao enviar o email, tente novamente mais tarde!",
        {
          theme: "dark",
        }
      );
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.container} fadeInTop`}>
      <Head>
        <title>Samuel Porto - Contato</title>
      </Head>
      <ToastContainer />

      <h1 title="Contato">Contato</h1>
      <span>Bora falar de projetos?</span>

      <form ref={form} onSubmit={sendEmail}>
        <section>
          <input
            type="text"
            name="user_name"
            placeholder="Seu nome.."
            autoFocus
            ref={name}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="email@email.com"
            ref={email}
            required
            inputMode="email"
          />
        </section>

        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Sua mensagem..."
          ref={textMessage}
          required
        ></textarea>

        {loading === true ? (
          <button type="submit" title="Enviar email" disabled>
            <div className={styles.loader}></div>
          </button>
        ) : (
          <button type="submit" title="Enviar email">
            Bora!
            <span>
              <FaRocket className={styles.rocket} />
              <GiRocketThruster className={styles.fire} />
            </span>
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
