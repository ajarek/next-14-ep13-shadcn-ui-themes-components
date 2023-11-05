'use client'

import React, {useState} from 'react'
import { Calendar } from "@/components/ui/calendar"

const CalendarDey = ()=> {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-2/3 flex items-center justify-center   border-muted border-2 p-7 rounded-lg max-lg:w-full"
    />
  )
  
}

export default CalendarDey
