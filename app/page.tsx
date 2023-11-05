import { Button } from '@/components/ui/button'
import { ProfileForm } from '@/components/ProfileForm'
import Image from 'next/image'
import CalendarDey from '@/components/CalendarDey'

export default function Home() {
  return (
    <main className=' px-24 pb-12 max-lg:px-2'>
      <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Shadcn/ui jest niesamowity</h1>
        <p className='text-2xl text-muted-foreground'>
          Wybrane motywy, które możesz kopiować i wklejać do swoich aplikacji
        </p>
      </section>
      <div className='flex items-center justify-center gap-6'>
        <Button variant={'secondary'}>Ucz się więcej</Button>
        <Button>Zapisz się</Button>
      </div>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 place-items-center justify-center gap-4'>
        <ProfileForm />
        <CalendarDey />
      </div>
    </main>
  )
}
