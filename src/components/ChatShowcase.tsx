import React from 'react';
import './ChatShowcase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

type ChatTheme = 'original' | 'evolution' | 'elegant' | 'monochrome';

interface ChatShowcaseProps {
  theme: ChatTheme;
}

export const ChatShowcase: React.FC<ChatShowcaseProps> = ({ theme }) => {
  return (
    <div className={`chat-showcase-container theme-${theme}`}>
      <div className="chat-messages">
        <div className="chat-bubble incoming">
          <span>Malem bos</span>
          <span className="timestamp">08-05-2024 01:26:45</span>
        </div>
        <div className="chat-bubble incoming">
          <span>gimana terusannya ?</span>
          <span className="timestamp">21-05-2024 00:19:03</span>
        </div>
        <div className="chat-bubble outgoing">
          <span>Hore</span>
          <span className="timestamp">07-05-2024 19:09:24</span>
        </div>
        <div className="chat-bubble outgoing">
          <span>Coba lagi</span>
          <span className="timestamp">08-05-2024 01:25:35</span>
        </div>
      </div>
      <div className="chat-input-area">
        <input type="text" placeholder="Tulis pesan" defaultValue="Ini adalah contoh input..." />
        <button className="send-button">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Kirim</span>
        </button>
      </div>
    </div>
  );
};