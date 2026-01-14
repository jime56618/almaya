import React from "react";
import Stack from "./Stack";
import "./css/team.css";

const teamMembers = [
  {
    name: "Jimena Cryz",
    role: "CEO",
    desc: "Líder y estratega del equipo, especializada en innovación tecnológica.",
    img: "https://images.unsplash.com/photo-1603415526960-f9e6f2f87b7b?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=400"
  },
  {
    name: "Carlos Pérez",
    role: "CTO",
    desc: "Encargado del desarrollo y la arquitectura de nuestros proyectos.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a5?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=400"
  },
  {
    name: "María López",
    role: "UI/UX Designer",
    desc: "Diseña experiencias atractivas y funcionales para los usuarios.",
    img: "https://images.unsplash.com/photo-1614282422413-2fa089992a1e?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=400"
  }
];

export default function TeamStack() {
  const cards = teamMembers.map((member, i) => (
    <div key={i} className="team-card-rect">
      <div className="team-card-content">
        <div className="team-card-img-wrapper">
          <img src={member.img} alt={member.name} className="team-card-img" />
        </div>
        <div className="team-card-info">
          <h3>{member.name}</h3>
          <h5>{member.role}</h5>
          <p>{member.desc}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="team-stack-container">
      <Stack cards={cards} randomRotation={true} />
      <p className="team-hint">Haz clic en las tarjetas para recorrer el equipo</p>
    </div>
  );
}
