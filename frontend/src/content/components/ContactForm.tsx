import { useForm } from "react-hook-form";
import { contactService } from "../services/contact.service";

import {
  Form,
  Input,
  TextArea,
  Button,
  ErrorText,
  Field,
} from "./ContactForm.style";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    try {
      await contactService.sendMessage(data);

      alert("Mensagem enviada com sucesso!");

      reset(); // limpa o form (UX MUITO melhor)

    } catch (error) {
      console.error(error);

      alert("Erro ao enviar mensagem.");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          placeholder="Seu nome"
          {...register("name", {
            required: "Nome é obrigatório",
          })}
        />
        {errors.name && (
          <ErrorText>{errors.name.message}</ErrorText>
        )}
      </div>

      <Field>
        <Input
          placeholder="Seu email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <ErrorText>{errors.email.message}</ErrorText>
        )}
      </Field>

      <div>
        <TextArea
          rows={6}
          placeholder="Digite sua mensagem"
          {...register("message", {
            required: "Mensagem é obrigatória",
          })}
        />
        {errors.message && (
          <ErrorText>{errors.message.message}</ErrorText>
        )}
      </div>

      <Button type="submit">
        Enviar mensagem
      </Button>
    </Form>
  );
}
