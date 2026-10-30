import type { Question } from "@/components/register/Questionnaire";
import {
  audienceRanges,
  budgetRanges,
  campaignGoals,
  countries,
  creatorNiches,
  rateRanges,
  rosterRanges,
  socialNetworks,
  yesNo,
} from "./site";

// Las preguntas de cada formulario, en el orden en que aparecen. Una por pantalla.

export const creatorForm = {
  label: "Registro de creadores",
  questions: [
    {
      id: "nombre",
      title: "¿Cómo te llamas?",
      type: "text",
      placeholder: "Tu nombre",
    },
    {
      id: "correo",
      title: "¿Cuál es tu correo?",
      type: "email",
      placeholder: "tu@correo.com",
    },
    {
      id: "pais",
      title: "¿Desde dónde creas?",
      type: "single",
      options: countries,
    },
    {
      id: "red",
      title: "¿Cuál es tu red principal?",
      type: "single",
      options: socialNetworks,
    },
    {
      id: "usuario",
      title: "¿Tu usuario ahí?",
      type: "text",
      placeholder: "@tuusuario",
    },
    {
      id: "seguidores",
      title: "¿Cuántos seguidores tienes?",
      type: "single",
      options: audienceRanges,
    },
    {
      id: "nichos",
      title: "¿De qué hablas?",
      type: "multi",
      options: creatorNiches,
    },
    {
      id: "tarifa",
      title: "¿Cuánto cobras por publicación?",
      type: "single",
      options: rateRanges,
    },
    {
      id: "manager",
      title: "¿Te representa un manager?",
      type: "single",
      options: yesNo,
    },
  ] satisfies Question[],
  done: {
    title: "¡Ya eres parte de DC!",
    text: "Te escribimos cuando tu perfil encaje en una campaña.",
  },
};

export const managerForm = {
  label: "Registro de managers",
  questions: [
    {
      id: "agencia",
      title: "¿Cómo se llama tu agencia?",
      type: "text",
      placeholder: "Nombre de la agencia",
    },
    {
      id: "nombre",
      title: "¿Y tú, cómo te llamas?",
      type: "text",
      placeholder: "Tu nombre",
    },
    {
      id: "correo",
      title: "¿Cuál es tu correo?",
      type: "email",
      placeholder: "tu@agencia.com",
    },
    {
      id: "pais",
      title: "¿Dónde está tu agencia?",
      type: "single",
      options: countries,
    },
    {
      id: "talentos",
      title: "¿Cuántos talentos representas?",
      type: "single",
      options: rosterRanges,
    },
    {
      id: "redes",
      title: "¿En qué redes están?",
      type: "multi",
      options: socialNetworks,
    },
    {
      id: "nichos",
      title: "¿Qué nichos manejan?",
      type: "multi",
      options: creatorNiches,
    },
    {
      id: "roster",
      title: "¿Tienes un enlace a tu roster?",
      type: "url",
      placeholder: "https://",
      optional: true,
    },
  ] satisfies Question[],
  done: {
    title: "Roster recibido.",
    text: "Te contactamos cuando haya una campaña para tus talentos.",
  },
};

export const brandForm = {
  label: "Para marcas",
  questions: [
    {
      id: "marca",
      title: "¿Cómo se llama tu marca?",
      type: "text",
      placeholder: "Tu marca",
    },
    {
      id: "nombre",
      title: "¿Y tú, cómo te llamas?",
      type: "text",
      placeholder: "Tu nombre",
    },
    {
      id: "correo",
      title: "¿Cuál es tu correo de trabajo?",
      type: "email",
      placeholder: "tu@empresa.com",
    },
    {
      id: "objetivos",
      title: "¿Qué quieres lograr?",
      type: "multi",
      options: campaignGoals,
    },
    {
      id: "paises",
      title: "¿En qué países?",
      type: "multi",
      options: countries,
    },
    {
      id: "presupuesto",
      title: "¿Cuál es tu presupuesto estimado?",
      type: "single",
      options: budgetRanges,
    },
    {
      id: "brief",
      title: "¿Algo más que debamos saber?",
      type: "long",
      placeholder: "Producto, público, fechas…",
      optional: true,
    },
  ] satisfies Question[],
  done: {
    title: "Brief recibido.",
    text: "El equipo comercial te escribe con una propuesta.",
  },
};
