import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';

import React, { useState } from 'react';
import BiorhythmCard from './components/biorhythmCard';
import { useLocalStorage } from './hooks';

function App() {

  const [birthDate, setDate]=useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] =useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && //esto es como poner si la fecha existe entonces:
          <BiorhythmCard birthDate ={birthDate} targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position="floating">Date of Birth:</IonLabel>
          <IonDatetime placeholder="your birthday!"
                       displayFormat="YYYY-MM-DD"
                       value={birthDate}
                       onIonChange={(event) => setDate(event.detail.value)}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Target Date:</IonLabel>
          <IonDatetime placeholder="Input target date!"
                       displayFormat="YYYY-MM-DD"
                       value={targetDate}
                       onIonChange={(event) => setTargetDate(event.detail.value)}></IonDatetime>
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;

// Example of text input
{/*
const [name, setName]=useState('');

<IonItem>
          <IonLabel position="floating">Name:</IonLabel>
          <IonInput type="text"
                    placeholder="input your name"
                    value={name}
                    onIonChange={(event) => setName(event.detail.value)}></IonInput>
        </IonItem>*/}
