import React, { Component } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="初期値" {...register("example")} />

      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>この項目は必須です</span>}

      <input type="submit" value="リクエストを送信" />
    </form>
  )
}

export default LoginForm