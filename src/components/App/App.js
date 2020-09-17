import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
    />
    <Footer />

    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_name" name="name" value="type here" minLength="2" maxLength="40" required />
        <span className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_job" name="about" value="type here" minLength="2" maxLength="200" required />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>

      <PopupWithForm
        name="elements"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="text" className="popup__input popup__input_type_name" name="name" value="type here"
                 minLength="2" maxLength="40" required />
          <span className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input type="text" className="popup__input popup__input_type_job" name="about" value="type here"
                 minLength="2"
                 maxLength="200" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">*/}
          <input type="url" className="popup__input popup__input_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
      >
        <label className="popup__field">*/}
          <input type="url" className="popup__input popup__input_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup />


    </div>
  );
}
export default App;
