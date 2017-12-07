import sound from "./audios/cow.mp3"

// Notifier that plays the sound of a cow
function CowNotifier() {
  const audio = new Audio(sound)
  audio.play()
}

export default CowNotifier
