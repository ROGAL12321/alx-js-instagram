import { useState, useContext, useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from 'contexts/global';

import { auth, storageRef } from 'helpers/firebase';

import Button from "components/atoms/Button/Button"
import WelcomeMessage from "components/sections/WelcomeMessage/WelcomeMessage"
import MainTemplate from "components/templates/MainTemplate/MainTemplate"

// 1. Zmodyfikuj Moj Profil, aby wartosc inputow byla zaciagana z uzytkownika (ktory jest dostepny w globalnym stanie)

// 2. Zmodyfikuj stronie AddPost w taki sposob, ze usun pole author i zastap go nazwa uzytkownika. Jesli uzytkownik jest pusty, to niech pole author bedzie jego adresem email


function ProfilePage() {
  const globalState = useContext(GlobalContext);

  const [nameInputValue, setNameInputValue] = useState('');
  const [avatarInputValue, setAvatarInputValue] = useState('')

  useEffect(() => {
    if(globalState.user) {
      setNameInputValue(globalState.user.displayName)
      // setAvatarInputValue(globalState.user.photoURL)
    }

  }, [globalState.user])

  const navigate = useNavigate();

  const handleNameInputChange = event => {
    setNameInputValue(event.target.value)
  }

  const handleAvatarInputChange = event => {
    // input type file przyjmuje zamiast pola .value, .files. Jest to tablica, poniewaz input type file moze przyjac wiecej niz 1 zdjecie.
    setAvatarInputValue(event.target.files[0])
  }

  const handleSubmit = event => {
    event.preventDefault();

    // jakos potrzebuje wyslac obrazek na serwer, a potem uzyc go do edycji profilu

  // uploadBytes jest to funkcja z FB, ktora sluzy do przesylania plikow do Storage od FB
    uploadBytes(storageRef, avatarInputValue)
      .then(snapshot => {
        return getDownloadURL(snapshot.ref)
      })
      .then(avatarURL => {
        return updateProfile(auth.currentUser, {
          displayName: nameInputValue,
          photoURL: avatarURL
        })
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
            type="file"
            // value={avatarInputValue}
            onChange={handleAvatarInputChange}
          />
        </label>
        <Button text="Send"/>
      </form>
    </MainTemplate>
  )
}

export default ProfilePage


// Przerwa do 10:35