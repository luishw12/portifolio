"use client";
import { saveContact } from "@/services/firebase/saveContact";
import { Button, Form, Input, Textarea } from "design-system-toshyro";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-4xl text-center font-bold">Contato</h1>
      <Form className="grid grid-cols-2 gap-x-10 gap-y-5">
        <Input width="col-span-1" name="name" label="Nome" />
        <Input width="col-span-1" name="email" label="Email" type="email" />
        <Textarea width="col-span-2" name="message" label="Mensagem" rows={6} />
        <div className="col-span-2 justify-center">
          <Button
            title="Enviar"
            full
            color="bg-purple-700"
            onSubmit={saveContact}
          />
        </div>
      </Form>
    </div>
  );
}
