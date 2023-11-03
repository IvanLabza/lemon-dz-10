import React, { useState } from 'react';
import './Form.css'; // Импорт файла стилей для формы

const Form = () => {
  const [darkMode, setDarkMode] = useState(false); // Состояние для темы

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Переключение темы
  };

  return (
    <div className={`form-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Форма</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input type="tel" id="phone" />
        </div>

        <button type="submit">Отправить</button>
      </form>

      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? 'Светлая тема' : 'Темная тема'}
      </button>
    </div>
  );
};

export default Form;
