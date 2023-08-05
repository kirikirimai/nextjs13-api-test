"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [postedData, setPostedData] = useState('')

  const onChangeHandler = (e) => {
    setName(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name }),
    })

    const data = await res.json()
    setPostedData(data.body)
  }
  return (
    <main className='w-full p-4'>
      <h1 className='text-4xl text-center mb-6'>Next JS APIのテスト</h1>

      <div className='max-w-[300px] mx-auto '>
        <form onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
          <input value={name} onChange={onChangeHandler} className='rounded border p-2 block' type='text' name='name' placeholder='名前' />
          <button className='p-2 mt-2 border bg-blue-200' type='submit'>送信</button>
        </form>
        <p>入力した値:{name}</p>

        <div className='my-4 pt-4 border-t '>
          <p>受け取った値{postedData}</p>
        </div>

      </div>
    </main>
  )
}
