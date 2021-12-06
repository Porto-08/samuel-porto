import React, {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ImRocket } from "react-icons/im";
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
    <div className={styles.container}>
      <ToastContainer />

      <h1 title="Pagina de Contato">Contato</h1>

      <form ref={form} onSubmit={sendEmail}>
        <section>
          <input
            type="text"
            name="user_name"
            placeholder="Seu belo nome.."
            autoFocus
            ref={name}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Seu Email: email@email.com"
            ref={email}
            required
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
            Carregando...
          </button>
        ) : (
          <button type="submit" title="Enviar email">
            <ImRocket />
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
