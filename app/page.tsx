import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" p-24">
      <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Shadcn/ui jest niesamowity</h1>
        <p className='text-2xl text-muted-foreground'>Wybrane motywy, które możesz kopiować i wklejać do swoich aplikacji</p>
      </section>
      <div className="flex items-center justify-center gap-6">
        <Button>Ucz się więcej</Button>
        <Button>Zapisz się</Button>
      </div>
    </main>
  )
}
