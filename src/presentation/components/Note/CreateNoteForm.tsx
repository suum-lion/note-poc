import { User } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { firestoreService } from '../../../application/fbase'
import { useAuth } from '../../../infrastructure/AuthContext'

const CreateNoteForm = () => {
  const { user } = useAuth()
  const [note, setNote] = useState('')
  const [image, setImage] = useState<string | ArrayBuffer | null>(null)

  const inputFormChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const {
      target: { value },
    } = event
    setNote(value)
  }, [])

  const fileChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event
    if (files === null) return
    const fileToUpload = files[0]

    const reader = new FileReader()
    reader.onloadend = finishedEvent => {
      const { target } = finishedEvent
      if (target !== null) setImage(target.result)
    }
    reader.readAsDataURL(fileToUpload)
  }, [])

  const clearFile = useCallback(() => setImage(''), [])

  const imageUploader = useCallback(async (user: User, image: string | ArrayBuffer | null) => {
    if (image === null) return
    if (image instanceof ArrayBuffer) return
    const storage = getStorage()
    const storageRef = ref(storage, `${user.uid}/${uuidv4()}`)
    const uploadTask = await uploadString(storageRef, image)
    return await getDownloadURL(uploadTask.ref)
  }, [])

  const submitHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (user === null) return

      await addDoc(collection(firestoreService, 'notes'), {
        note,
        createdAt: Date.now(),
        author: user.uid,
        imageUrl: imageUploader(user, image),
      })
      setNote('')
      setImage('')
    },
    [image, imageUploader, note, user],
  )

  return (
    <form onSubmit={submitHandler}>
      <input
        value={note}
        onChange={inputFormChangeHandler}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={fileChangeHandler} />
      <button type="submit">노트생성하기</button>
      {image && typeof image === 'string' && (
        <div>
          <img src={image} style={{ width: '50px' }} alt="note image" />
          <button onClick={clearFile}>Clear</button>
        </div>
      )}
    </form>
  )
}

export default CreateNoteForm
