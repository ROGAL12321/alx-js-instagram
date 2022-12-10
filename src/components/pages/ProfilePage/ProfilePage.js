import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from 'helpers/firebase';

import Button from "components/atoms/Button/Button"
import WelcomeMessage from "components/sections/WelcomeMessage/WelcomeMessage"
import MainTemplate from "components/templates/MainTemplate/MainTemplate"

// 1. Zmodyfikuj Moj Profil, aby wartosc inputow byla zaciagana z uzytkownika (ktory jest dostepny w globalnym stanie)

// 2. Zmodyfikuj stronie AddPost w taki sposob, ze usun pole author i zastap go nazwa uzytkownika. Jesli uzytkownik jest pusty, to niech pole author bedzie jego adresem email


function ProfilePage() {
  const [nameInputValue, setNameInputValue] = useState('');
  const [avatarInputValue, setAvatarInputValue] = useState('')

  const navigate = useNavigate();

  const handleNameInputChange = event => {
    setNameInputValue(event.target.value)
  }

  const handleAvatarInputChange = event => {
    setAvatarInputValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: nameInputValue,
      photoURL: avatarInputValue
    })
    .then(() => {
      navigate('/')
    })
  }

  return (
    <MainTemplate>
      <WelcomeMessage>
        <h3>My profile</h3>
      </WelcomeMessage>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            value={nameInputValue}
            onChange={handleNameInputChange}
          />
        </label>
        <label>
          avatar
          <input
            value={avatarInputValue}
            onChange={handleAvatarInputChange}
          />
        </label>
        <Button text="Send"/>
      </form>
    </MainTemplate>
  )
}

export default ProfilePage