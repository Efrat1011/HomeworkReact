import React, { useState } from "react";

export default function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [reiting, setReiting] = useState("");
  const [sebep, setSebep] = useState("");
  const [error, setError] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!name.trim()) {
      setError("Аты-жөні міндетті.");
      return;
    }

    if(!email.includes("@")){
        setError("Email -ді қате дұрыс енгізініз")
        return
    }

    if (feedback.length < 20) {
      setError("Пікір кем дегенде 20 таңбадан тұруы керек.");
      return;
    }

    if (reiting < 1 || reiting > 5) {
      setError("Бағалау 1-ден 5-ке дейінгі сандар арасында болуы керек.");
      return;
    }

    if (reiting < 3 && !sebep.trim()) {
      setError("Не себепті төмен бағаладыңыз? Міндетті өріс.");
      return;
    }
  
    setError("");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Feedback:", feedback);
    console.log("Reiting:", reiting);
    console.log("Sebep:", sebep);

    alert("Рахмет, сіздің пікіріңіз маңызды!");
    setName("");
    setEmail("");
    setFeedback("");
    setReiting("");
    setSebep("");
  };

  return (
    
    <div>
        
      <h1>Кері Байланыс Формасы</h1>
      <form onSubmit={handleSubmit}>
       
        <div>
          <label htmlFor="name">Атыңызды жазыңыз</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        
        <div>
          <label htmlFor="email">Email почта жазыңыз</label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        
        <div>
          <label htmlFor="feedback">Кері байланыс</label>
          <textarea
            name="feedback"
            placeholder="Пікіріңіз:"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

      
        <div>
          <label htmlFor="reiting">Бағалаңыз</label>
          <select
            name="reiting"
            value={reiting}
            onChange={(e) => setReiting(e.target.value)}
            required
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

       
        {reiting < 3 && (
          <div>
            <label htmlFor="sebep">Sebep</label>
            <textarea
              name="sebep"
              placeholder="Неге төмен баға қойыдыңыз?"
              value={sebep}
              onChange={(e) => setSebep(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">ЖІБЕРУ</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}