import React, { useState } from "react";

const Replies = () => {
  const [reply, setReply] = useState("");

  const handleSubmitReply = (e) => {
    e.preventDefault();
    console.log({ reply });
    setReply("");
  };

  return (
    <main className="replies">
      <form className="modal__content" onSubmit={handleSubmitReply}>
        <label htmlFor="reply">Reply to the thread</label>
        <textarea
          type="text"
          name="reply"
          className="modalInput"
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />

        <button className="modalBtn">Send</button>
      </form>
    </main>
  );
};

export default Replies;
