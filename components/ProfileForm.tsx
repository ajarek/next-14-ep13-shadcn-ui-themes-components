'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'

const formSchema = z.object({
  username: z
    .string()
    .min(5, { message: 'Nazwa użytkownika musi mieć co najmniej 5 znaków.' }),
  email: z
    .string()
    .min(5, { message: 'Adres e-mail musi zawierać co najmniej 5 znaków.' })
    .email('To nie jest prawidłowy adres e-mail'),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert('Nazwisko: ' + values.username + ' ,email: ' + values.email)
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({
        username: '',
        email: '',
      })
    }
  }, [form, form.formState, form.reset])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-2/3 space-y-4 my-6 border-muted border-2 p-8 rounded-lg max-lg:w-full'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imie i Nazwisko</FormLabel>
              <FormControl>
                <Input
                  placeholder='Jan Kowalski'
                  {...field}
                />
              </FormControl>
              <FormDescription>To jest Twoja publiczna nazwa .</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='jan@wp.pl'
                  {...field}
                />
              </FormControl>
              <FormDescription>To jest Twój publiczny email .</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full'
          type='submit'
        >
          Wyślij
        </Button>
      </form>
    </Form>
  )
}
